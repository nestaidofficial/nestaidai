# Retell AI Implementation Guide

> **Purpose**: Complete implementation blueprint for configuring Retell AI voice agents with state-based conversational flows, mid-call tool execution, dynamic variable extraction, and automated outbound calling. This document captures every pattern, data structure, and API interaction so that any new application can replicate the full Retell integration.

---

## Table of Contents

1. [Architecture Overview](#1-architecture-overview)
2. [Environment Setup](#2-environment-setup)
3. [Retell SDK Client (Singleton)](#3-retell-sdk-client-singleton)
4. [LLM Configuration: The Node/State System](#4-llm-configuration-the-nodestate-system)
5. [Agent 1: AI Receptionist (Inbound)](#5-agent-1-ai-receptionist-inbound)
6. [Agent 2: AI Coverage Coordinator (Inbound)](#6-agent-2-ai-coverage-coordinator-inbound)
7. [Agent 3: Outbound Coverage Caller (Voice)](#7-agent-3-outbound-coverage-caller-voice)
8. [Agent 4: Outbound SMS Chat Agent](#8-agent-4-outbound-sms-chat-agent)
9. [Retell Tool Types (Complete Reference)](#9-retell-tool-types-complete-reference)
10. [Custom Tool Endpoints (Mid-Call Function Calling)](#10-custom-tool-endpoints-mid-call-function-calling)
11. [Sync Process: Config to Retell API](#11-sync-process-config-to-retell-api)
12. [Webhook Handler: Retell to Your App](#12-webhook-handler-retell-to-your-app)
13. [Auto-Scheduler: Automated Coverage Outreach](#13-auto-scheduler-automated-coverage-outreach)
14. [Post-Call Analysis Configuration](#14-post-call-analysis-configuration)
15. [Agent Settings Reference](#15-agent-settings-reference)
16. [Database Schema](#16-database-schema)
17. [Prompt Engineering Patterns](#17-prompt-engineering-patterns)
18. [Phone Number Handling](#18-phone-number-handling)
19. [Error Handling & Graceful Degradation](#19-error-handling--graceful-degradation)
20. [File Structure Reference](#20-file-structure-reference)

---

## 1. Architecture Overview

```
                    ┌─────────────────────────────────┐
                    │     Your App (Next.js)           │
                    │                                   │
                    │  ┌─────────────┐  ┌────────────┐ │
    Inbound Call ──►│  │ Retell AI   │  │ Config DB  │ │
                    │  │  Dashboard  │◄─│ (Supabase) │ │
                    │  └──────┬──────┘  └────────────┘ │
                    │         │                         │
                    │  ┌──────▼──────────────────────┐  │
                    │  │     Sync Engine              │  │
                    │  │  (Config → LLM → Agent)      │  │
                    │  └──────┬──────────────────────┘  │
                    │         │                         │
                    │  ┌──────▼──────┐  ┌────────────┐ │
                    │  │ LLM Config  │  │  Custom    │ │
                    │  │ (States +   │  │  Tool API  │ │
                    │  │  Tools +    │  │  Endpoints │ │
                    │  │  Prompts)   │  │            │ │
                    │  └─────────────┘  └─────┬──────┘ │
                    │                         │        │
                    │  ┌──────────────────────▼──────┐ │
                    │  │      Webhook Handler         │ │
                    │  │  (call_started/ended/        │ │
                    │  │   call_analyzed)              │ │
                    │  └──────────────────────────────┘ │
                    └─────────────────────────────────┘

Flow:
1. Admin configures agent via UI → saved to DB
2. Sync engine reads DB → builds LLM config → pushes to Retell API
3. Retell creates/updates LLM + Agent + links phone number
4. Inbound call → Retell runs the LLM conversational flow
5. Mid-call: Retell calls your custom tool endpoints (cancel-shift, etc.)
6. Post-call: Retell sends webhook with analysis → your app processes it
```

### Key Retell Concepts

| Concept | Description |
|---------|-------------|
| **LLM** | The conversational brain — contains the prompt, states, tools, and model config |
| **Agent** | The deployable entity — links an LLM to a voice, phone number, and webhook |
| **State** | A node in the conversation graph — has a prompt, tools, and edges (transitions) |
| **Edge** | A transition between states — triggered by the AI's understanding of the conversation |
| **Tool** | An action the AI can take mid-conversation (end call, transfer, call your API, extract data) |
| **Dynamic Variable** | A `{{variable}}` that persists across states — extracted via tools or passed at call time |

---

## 2. Environment Setup

### Required Environment Variables

```env
# Your app's public URL (used for webhook + tool URLs)
NEXT_PUBLIC_APP_URL=https://your-domain.com

# Retell AI API Key
# Get from: https://www.retellai.com → Dashboard → API Keys
RETELL_API_KEY=key_xxxxxxxxxxxxx

# Supabase (for database)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

### NPM Dependencies

```bash
npm install retell-sdk
```

---

## 3. Retell SDK Client (Singleton)

Create a server-only singleton client that gracefully handles missing API keys.

```typescript
// lib/retell/client.ts
import Retell from "retell-sdk";

let _retellClient: Retell | null = null;

/**
 * Returns a singleton Retell SDK client.
 * Returns null if RETELL_API_KEY is not set (graceful degradation).
 */
export function getRetellClient(): Retell | null {
  const apiKey = process.env.RETELL_API_KEY;
  if (!apiKey) return null;

  if (!_retellClient) {
    _retellClient = new Retell({ apiKey });
  }
  return _retellClient;
}
```

**Pattern**: Always check for `null` before using the client — this allows the app to function (in degraded mode) without Retell configured.

---

## 4. LLM Configuration: The Node/State System

This is the core of Retell AI. The LLM config defines the entire conversation as a **state machine** (directed graph of nodes).

### LLM Config Shape

```typescript
interface RetellLlmConfig {
  model: string;              // "gpt-4.1" | "gpt-4.1-mini"
  model_temperature: number;  // 0.0-1.0 (we use 0.3 for consistency)
  begin_message: string;      // First thing the agent says when call connects
  general_prompt: string;     // System prompt visible to ALL states
  general_tools: Tool[];      // Tools available in ALL states
  starting_state: string;     // Name of the first state
  states: State[];            // Array of conversation states (nodes)
}
```

### State (Node) Shape

```typescript
interface RetellState {
  name: string;          // Unique identifier (e.g., "identify_intent", "callout_intake")
  state_prompt: string;  // Instructions for the AI in this state
  edges?: Edge[];        // Transitions to other states
  tools?: Tool[];        // State-specific tools (in addition to general_tools)
}
```

### Edge (Transition) Shape

```typescript
interface Edge {
  description: string;              // When to take this transition (natural language)
  destination_state_name: string;   // Target state name
  parameters?: Record<string, unknown>;
}
```

### How Nodes Work

```
                    ┌──────────────────┐
                    │  identify_intent │ ◄── starting_state
                    │                  │
                    │  "How can I help │
                    │   you today?"    │
                    └───────┬──────────┘
                            │
              ┌─────────────┼─────────────┬──────────────┐
              ▼             ▼             ▼              ▼
     ┌──────────────┐ ┌──────────┐ ┌──────────┐ ┌──────────────┐
     │client_intake │ │caregiver │ │general   │ │coordinator   │
     │              │ │_intake   │ │_info     │ │_routing      │
     └──────┬───────┘ └────┬─────┘ └────┬─────┘ └──────────────┘
            │              │            │
            └──────────────┼────────────┘
                           ▼
                    ┌──────────────┐
                    │   wrap_up    │
                    └──────────────┘
```

**Key insight**: The AI decides which edge to follow based on the conversation context and the edge `description`. You don't write explicit if/else logic — you write natural language descriptions of when each transition should happen.

---

## 5. Agent 1: AI Receptionist (Inbound)

### Purpose
Handles inbound calls for the agency. Routes callers to intake, general info, or the coordinator.

### States (Nodes)

| State | Purpose | Transitions To |
|-------|---------|----------------|
| `identify_intent` | Starting state. Greet caller, determine need | `client_intake`, `caregiver_intake`, `general_info`, `coordinator_routing` |
| `client_intake` | Collect new client information | `wrap_up` |
| `caregiver_intake` | Collect caregiver application info | `wrap_up` |
| `general_info` | Answer general questions about the agency | `client_intake`, `caregiver_intake`, `wrap_up` |
| `coordinator_routing` | Hand off to coordinator agent | (terminal — uses agent_swap or transfer_call) |
| `wrap_up` | Thank caller, check for additional needs | `identify_intent` (loop back) |

### General Prompt Structure

```
## IDENTITY & ROLE
You are the AI receptionist for {agency_name}...

## HOURS OF OPERATION
{per-day hours or "24/7"}

## COMMUNICATION STYLE
- Short, natural sentences (this is a phone call)
- Use caller's name once or twice
- Match caller's energy
- If asked "Are you a robot?", be honest
- Never use hollow fillers ("Absolutely!", "Certainly!")

## ABOUT {AGENCY_NAME}
{services summary or default services list}

## YOUR JOB
1. Greet caller warmly, identify need
2. Collect intake from new clients/caregivers
3. Route scheduling issues to coordinator
4. Escalate billing, complaints, urgent issues
5. Answer general questions

## CRITICAL RULES
1. NEVER invent information (pricing, availability, etc.)
2. EMERGENCY: "Call 911" → then transfer_to_human
3. Be empathetic (callers are often worried/stressed)
4. No promises (start dates, specific caregivers)
5. Keep responses short (1-2 sentences per turn)
```

### Tools (Available in All States)

```typescript
const generalTools = [
  {
    type: "end_call",
    name: "end_call",
    description: "End the call when the caller is done or says goodbye.",
  },
  {
    type: "transfer_call",
    name: "transfer_to_human",
    description: "Transfer to a human agent for issues you cannot handle.",
    transfer_destination: {
      type: "predefined",
      number: "+1XXXXXXXXXX",  // escalation number in E.164
    },
    transfer_option: { type: "cold_transfer" },
    speak_during_execution: true,
    execution_message_description: "Let me transfer you to a team member.",
  },
];
```

### Agent Swap (Receptionist → Coordinator)

When a coordinator agent exists, use `agent_swap` instead of `transfer_call` for seamless handoff on the same call:

```typescript
// If coordinatorAgentId is available:
{
  type: "agent_swap",
  name: "transfer_to_coordinator",
  agent_id: coordinatorAgentId,   // The coordinator's Retell agent ID
  post_call_analysis_setting: "both_agents",
  description: "Hand off to the care coordinator.",
  speak_during_execution: true,
  execution_message_description: "Let me connect you with our care coordinator.",
}

// If no coordinator agent — fallback to cold transfer:
{
  type: "transfer_call",
  name: "transfer_to_coordinator",
  description: "Transfer to the care coordinator.",
  transfer_destination: { type: "predefined", number: escalationNumber },
  transfer_option: { type: "cold_transfer" },
  speak_during_execution: true,
  execution_message_description: "Let me connect you with our care coordinator.",
}
```

### Dynamic Intake Fields

Client and caregiver intake fields are toggleable. Build the state prompt dynamically:

```typescript
const clientFieldsToCollect = [
  { flag: config.intake_client_name, label: "Full name", prompt: "May I have your full name?" },
  { flag: config.intake_client_phone_number, label: "Phone number", prompt: "Best number to reach you?" },
  { flag: config.intake_client_email, label: "Email", prompt: "Do you have an email?" },
  // ... more fields
];

const enabledFields = clientFieldsToCollect.filter(f => f.flag);

// Build state prompt:
const statePrompt = [
  `The caller is a new client interested in care services.`,
  `Collect the following one question at a time:`,
  ...enabledFields.map((f, i) => `${i + 1}. ${f.label}: "${f.prompt}"`),
  `After collecting all info, confirm details and go to "wrap_up".`,
].join("\n");
```

### Caregiver Intake with Required/Optional Fields

```typescript
const cgFields = [
  { enabled: config.intake_cg_full_name, required: config.intake_cg_full_name_required, label: "Full name" },
  { enabled: config.intake_cg_certifications, required: config.intake_cg_certifications_required, label: "Certifications" },
  // ...
];

// In prompt:
enabledCgFields.map((f, i) => {
  const tag = f.required ? "(REQUIRED)" : "(optional)";
  return `${i + 1}. ${f.label} ${tag}: "${f.prompt}"`;
});

// Add instruction:
"For REQUIRED fields, you must collect an answer. For optional fields, if skipped, move on."
```

---

## 6. Agent 2: AI Coverage Coordinator (Inbound)

### Purpose
Handles inbound calls from caregivers about scheduling: call-outs, schedule changes, availability updates, missed visits.

### States (Nodes)

| State | Purpose | Transitions To |
|-------|---------|----------------|
| `identify_issue` | Starting state. Auto-identify caller by phone, determine issue | `callout_intake`, `schedule_change`, `general_scheduling`, `escalation` |
| `callout_intake` | Collect call-out details (employee ID, shift date, reason) | `wrap_up` |
| `schedule_change` | Handle reschedule requests | `wrap_up`, `callout_intake` |
| `general_scheduling` | Availability updates, open shift questions | `wrap_up` |
| `escalation` | Transfer sensitive issues to human | (terminal — uses transfer_to_human) |
| `wrap_up` | Thank caller, check for more | `identify_issue` (loop back) |

### General Tools (All States)

```typescript
const generalTools = [
  // 1. Current Date (MUST call before any date logic)
  {
    type: "custom",
    name: "get_current_date",
    description: "Get today's date. MUST call before resolving relative dates.",
    url: `${appUrl}/api/retell/tools/current-date?tz=${timezone}`,
    speak_during_execution: false,
    execution_message_description: "",
  },

  // 2. Identify Caller (MUST call at conversation start)
  {
    type: "custom",
    name: "identify_caller",
    description: "Identify caller by phone number. Call ONCE at start.",
    url: `${appUrl}/api/retell/tools/identify-caller`,
    speak_during_execution: false,
    execution_message_description: "",
  },

  // 3. End Call
  {
    type: "end_call",
    name: "end_call",
    description: "End the call when done.",
  },

  // 4. Transfer to Human
  {
    type: "transfer_call",
    name: "transfer_to_human",
    description: "Transfer to a human scheduler.",
    transfer_destination: { type: "predefined", number: backupNumber },
    transfer_option: { type: "cold_transfer" },
    speak_during_execution: true,
    execution_message_description: "Let me transfer you to the scheduling team.",
  },

  // 5. Cancel Shift (conditional — only when auto_fill_shifts is ON)
  {
    type: "custom",
    name: "cancel_shift",
    description: "Cancel a caregiver's shift. Use after collecting employee ID and shift date.",
    url: `${appUrl}/api/retell/tools/cancel-shift`,
    speak_during_execution: true,
    execution_message_description: "Let me look up that shift and cancel it.",
    parameters: {
      type: "object",
      properties: {
        caregiver_short_id: { type: "string", description: "Employee ID (e.g. E-1001, 1005)" },
        caregiver_first_name: { type: "string", description: "First name (optional)" },
        caregiver_last_name: { type: "string", description: "Last name (optional)" },
        shift_date: { type: "string", description: "Date in YYYY-MM-DD" },
        shift_time: { type: "string", description: "Time in HH:MM 24h (optional)" },
      },
      required: ["caregiver_short_id", "shift_date"],
    },
  },

  // 6. Change Schedule (conditional — only when auto_fill_shifts is ON)
  {
    type: "custom",
    name: "change_schedule",
    description: "Reschedule a shift to new date/time.",
    url: `${appUrl}/api/retell/tools/change-schedule`,
    speak_during_execution: true,
    execution_message_description: "Let me reschedule that for you.",
    parameters: {
      type: "object",
      properties: {
        caregiver_short_id: { type: "string", description: "Employee ID" },
        current_shift_date: { type: "string", description: "Current date YYYY-MM-DD" },
        current_shift_time: { type: "string", description: "Current time HH:MM (optional)" },
        new_date: { type: "string", description: "New date YYYY-MM-DD" },
        new_start_time: { type: "string", description: "New start time HH:MM" },
        new_end_time: { type: "string", description: "New end time HH:MM (optional)" },
        reason: { type: "string", description: "Reason (optional)" },
      },
      required: ["caregiver_short_id", "current_shift_date"],
    },
  },
];
```

### Dynamic Variable Extraction (extract_dynamic_variable tool)

This is a special Retell tool type that captures structured data from the conversation into `{{variables}}` that persist across states.

```typescript
// In identify_issue state — extracts caller identity after identify_caller succeeds
{
  type: "extract_dynamic_variable",
  name: "extract_caller_identity",
  description: "After identify_caller returns 'identified', save caller details as variables.",
  variables: [
    { name: "employee_id", type: "string", description: "Employee short ID (e.g. E-1005)", required: true },
    { name: "caregiver_name", type: "string", description: "Full name", required: true },
    { name: "caller_identified", type: "string", description: "'true' if auto-identified", required: true },
  ],
}

// In callout_intake state — extracts call-out details
{
  type: "extract_dynamic_variable",
  name: "extract_callout_info",
  description: "Extract caregiver call-out details.",
  variables: [
    { name: "employee_id", type: "string", description: "Employee ID", required: true, examples: ["E-1005", "1005"] },
    { name: "caregiver_name", type: "string", description: "Full name", required: false },
    { name: "shift_date", type: "string", description: "YYYY-MM-DD", required: true, examples: ["2026-03-15"] },
    { name: "shift_time", type: "string", description: "HH:MM 24h", required: false, examples: ["09:00"] },
    { name: "callout_reason", type: "string", description: "Reason", required: false },
  ],
}
```

**Using dynamic variables in prompts**: Once extracted, reference them with `{{variable_name}}`:

```
If {{caller_identified}} is "true", you ALREADY know:
- Employee ID: {{employee_id}}
- Name: {{caregiver_name}}
- Do NOT ask for Employee ID or name again.
```

### Caller Identification Flow

```
┌─────────────────────────────┐
│     identify_issue          │
│                             │
│  1. Call identify_caller    │
│     (phone number lookup)   │
│                             │
│  2. If "identified":        │
│     → Call extract_caller   │
│       _identity             │
│     → Greet by first name   │
│                             │
│  3. If "not_found":         │
│     → Standard greeting     │
│     → Will ask for ID later │
└─────────────────────────────┘
```

### Employee ID Enforcement Pattern

```
## STANDARD IDENTIFICATION (caller not auto-identified)
Collect in order: 1) Employee ID (REQUIRED), 2) Shift date, 3) Reason.
Employee ID format: E-1005. Accept spoken variants ("E ten oh five", "1005", "e1005").
Confirm the ID once: "That's E-1005?" — then move on.
If they cannot provide the ID after two attempts, transfer to human.
Do NOT fall back to name-only identification.
```

---

## 7. Agent 3: Outbound Coverage Caller (Voice)

### Purpose
Makes outbound phone calls to available caregivers to offer open shifts.

### LLM Config

```typescript
{
  model: "gpt-4.1-mini",         // Lighter model for simple task
  model_temperature: 0.3,
  begin_message: "Hi {{caregiver_name}}, this is the scheduling team from {{agency_name}}. Do you have a quick moment?",
  general_prompt: `## IDENTITY & ROLE
You are calling on behalf of {{agency_name}} about an open shift.

## YOUR TASK
1. Greet caregiver by name
2. Share shift details:
   - Client: {{client_name}}
   - Date: {{shift_date}}
   - Time: {{shift_time}}
   - Care type: {{care_type}}
   - Pay rate: {{pay_rate}}
3. Ask: "Are you available to cover this shift?"
4. If yes: confirm. If no: thank and end.

## CRITICAL RULES
1. Never invent details beyond the variables above
2. If voicemail, leave a brief message with shift details
3. Keep the call under 2 minutes`,
  starting_state: "pitch_shift",
  states: [
    {
      name: "pitch_shift",
      state_prompt: "Share shift details and ask if available.",
      edges: [
        { description: "Caregiver accepts", destination_state_name: "confirm_acceptance" },
        { description: "Caregiver declines", destination_state_name: "handle_decline" },
      ],
    },
    {
      name: "confirm_acceptance",
      state_prompt: "Confirm: 'You're confirmed for {{client_name}} on {{shift_date}}. Thank you!'",
    },
    {
      name: "handle_decline",
      state_prompt: "Say: 'No problem, thank you for your time.'",
    },
  ],
  general_tools: [
    { type: "end_call", name: "end_call", description: "End the call." },
  ],
}
```

### Dynamic Variables (Passed at Call Time)

When creating an outbound call, pass variables via `retell_llm_dynamic_variables`:

```typescript
const call = await retell.call.createPhoneCall({
  from_number: "+1XXXXXXXXXX",   // Your coverage line
  to_number: "+1YYYYYYYYYY",     // Caregiver's phone
  override_agent_id: outboundAgentId,
  retell_llm_dynamic_variables: {
    caregiver_name: "John Smith",
    agency_name: "Sunrise Care",
    client_name: "Margaret Wilson",
    shift_date: "Monday, March 15",
    shift_time: "9:00 AM - 1:00 PM",
    care_type: "Personal Care",
    pay_rate: "$18/hr",
  },
  metadata: {
    outreach_attempt_id: "uuid-here",
    event_id: "shift-uuid",
    caregiver_id: "caregiver-uuid",
    agency_id: "agency-uuid",
  },
});
```

---

## 8. Agent 4: Outbound SMS Chat Agent

Same LLM as the voice agent, but configured for text mode:

```typescript
const agent = await retell.agent.create({
  agent_name: "AI Coverage SMS Outreach",
  response_engine: {
    type: "retell-llm",
    llm_id: llmId,           // Same LLM as voice agent
  },
  agent_type: "text",         // <-- This makes it a chat/SMS agent
  webhook_url: webhookUrl,
  post_call_analysis_data: [...],
});
```

---

## 9. Retell Tool Types (Complete Reference)

### 1. EndCallTool
```typescript
{
  type: "end_call",
  name: "end_call",
  description: "End the call when done.",
}
```

### 2. TransferCallTool (Cold Transfer)
```typescript
{
  type: "transfer_call",
  name: "transfer_to_human",
  description: "Transfer to a human agent.",
  transfer_destination: {
    type: "predefined",
    number: "+1XXXXXXXXXX",    // E.164 format
  },
  transfer_option: {
    type: "cold_transfer",     // Immediate handoff, AI drops
  },
  speak_during_execution: true,
  execution_message_description: "Let me transfer you. One moment.",
}
```

### 3. AgentSwapTool (Same-Call Handoff)
```typescript
{
  type: "agent_swap",
  name: "transfer_to_coordinator",
  agent_id: "agent_xxxxx",    // Target agent's Retell ID
  post_call_analysis_setting: "both_agents",  // or "only_destination_agent"
  description: "Hand off to the coordinator.",
  speak_during_execution: true,
  execution_message_description: "Connecting you with our coordinator.",
}
```

### 4. CustomTool (HTTP Function Call)
```typescript
{
  type: "custom",
  name: "cancel_shift",
  description: "Cancel a shift in the schedule.",
  url: "https://your-domain.com/api/retell/tools/cancel-shift",
  speak_during_execution: true,
  execution_message_description: "Let me look that up.",
  parameters: {
    type: "object",
    properties: {
      caregiver_short_id: { type: "string", description: "Employee ID" },
      shift_date: { type: "string", description: "Date YYYY-MM-DD" },
    },
    required: ["caregiver_short_id", "shift_date"],
  },
}
```

**Custom tool request payload** (what Retell sends to your endpoint):
```json
{
  "call_id": "call_xxxxx",
  "tool_input": {
    "caregiver_short_id": "E-1005",
    "shift_date": "2026-03-15"
  }
}
```

**Custom tool response** (what your endpoint returns):
```json
{
  "result": "success",
  "message": "Shift cancelled for March 15. Coverage team notified."
}
```

### 5. ExtractDynamicVariableTool
```typescript
{
  type: "extract_dynamic_variable",
  name: "extract_callout_info",
  description: "Extract and save call-out details.",
  variables: [
    {
      name: "employee_id",       // Becomes {{employee_id}} in prompts
      type: "string",            // "string" | "number" | "enum" | "boolean"
      description: "Employee ID",
      required: true,
      examples: ["E-1005", "1005"],
    },
    {
      name: "shift_date",
      type: "string",
      description: "Shift date YYYY-MM-DD",
      required: true,
      examples: ["2026-03-15"],
    },
  ],
}
```

---

## 10. Custom Tool Endpoints (Mid-Call Function Calling)

All custom tool endpoints follow the same pattern:

### Endpoint Pattern

```typescript
// app/api/retell/tools/{tool-name}/route.ts

import { NextRequest, NextResponse } from "next/server";
import Retell from "retell-sdk";

export async function POST(request: NextRequest) {
  // 1. Read raw body (needed for signature verification)
  const body = await request.text();

  // 2. Verify Retell webhook signature
  const apiKey = process.env.RETELL_API_KEY;
  if (apiKey) {
    const signature = request.headers.get("x-retell-signature") ?? "";
    const isValid = await Retell.verify(body, apiKey, signature);
    if (!isValid) {
      return NextResponse.json({ result: "error", message: "Invalid signature" }, { status: 401 });
    }
  }

  // 3. Parse payload
  const payload = JSON.parse(body);
  const callId = payload.call_id;
  const toolInput = payload.tool_input ?? {};

  // 4. Your business logic here...

  // 5. Return result (message is spoken to the caller)
  return NextResponse.json({
    result: "success",
    message: "Human-readable response for the AI to relay to the caller.",
  });
}
```

### Tool: `current-date`

Returns today's date in the agency's timezone. The AI calls this before resolving relative dates.

```typescript
// GET query param: ?tz=America/New_York

const tz = request.nextUrl.searchParams.get("tz") || "America/New_York";
const now = new Date();

return NextResponse.json({
  result: "success",
  today: "2026-03-15",                     // YYYY-MM-DD
  day_of_week: "Monday",
  formatted: "Monday, March 15, 2026",
  current_time: "2:30 PM",
  timezone: tz,
});
```

### Tool: `identify-caller`

Looks up the caller by phone number from Retell call metadata.

```
Flow:
1. Get call_id from payload
2. retell.call.retrieve(callId) → get from_number
3. Query employees table for matching phone (E.164)
4. If 1 match → return identified + employee details
5. If 0 or 2+ matches → return not_found
```

**Response shapes:**
```json
// Identified:
{ "result": "identified", "employee_id": "E-1005", "employee_name": "John Smith", "first_name": "John" }

// Not found:
{ "result": "not_found", "message": "I wasn't able to identify you from your phone number." }
```

### Tool: `cancel-shift`

Cancels a caregiver's shift. Two modes based on `auto_scheduler_enabled`:

**Auto-scheduler ON:**
1. Look up caregiver by `short_id`
2. Find shift on `shift_date`
3. Set `caregiver_id = null` on the shift (vacate it)
4. Create `coverage_requests` row with status `"approved"`
5. Trigger auto-coverage outreach (fire-and-forget)
6. Return success message

**Approval mode (auto-scheduler OFF):**
1. Look up caregiver by `short_id`
2. Find shift on `shift_date`
3. Create `coverage_requests` row with status `"pending"`
4. Do NOT modify the shift
5. Return success message

**Response shapes:**
```json
{ "result": "success", "message": "Your callout has been noted for 2026-03-15 (9:00 AM - 1:00 PM)." }
{ "result": "needs_id", "message": "I need the employee ID to proceed." }
{ "result": "multiple_matches", "message": "Multiple caregivers found: John Smith, John Doe." }
{ "result": "not_found", "message": "No caregiver found with employee ID E-1005." }
{ "result": "no_shift", "message": "No upcoming shift found for John on 2026-03-15." }
{ "result": "error", "message": "An unexpected error occurred." }
```

### Tool: `change-schedule`

Same pattern as cancel-shift but for rescheduling to a new date/time:

1. Look up caregiver
2. Find shift on `current_shift_date`
3. Calculate new start/end times (preserving duration if only date changes)
4. If auto-assign: directly update the shift
5. If approval: create pending coverage_requests row
6. Return confirmation message

---

## 11. Sync Process: Config to Retell API

The sync engine pushes your database config to Retell whenever the admin saves changes.

### 4-Step Sync Flow

```typescript
async function syncConfigToRetell(row, serviceSupabase, coordinatorAgentId?) {
  const retell = getRetellClient();
  if (!retell) {
    // No API key — set status to "pending" and return
    return { status: "pending" };
  }

  // STEP 1: Build LLM config from database row
  const llmConfig = buildLlmConfig(row, coordinatorAgentId);

  // STEP 2: Create or update LLM
  let llmId = row.retell_llm_id;
  if (!llmId) {
    const llm = await retell.llm.create({
      begin_message: llmConfig.begin_message,
      general_prompt: llmConfig.general_prompt,
      general_tools: llmConfig.general_tools,
      starting_state: llmConfig.starting_state,
      states: llmConfig.states,
      model: llmConfig.model,
      model_temperature: llmConfig.model_temperature,
    });
    llmId = llm.llm_id;
  } else {
    try {
      await retell.llm.update(llmId, { ...llmConfig });
    } catch {
      // LLM deleted/stale — create fresh
      const llm = await retell.llm.create({ ...llmConfig });
      llmId = llm.llm_id;
    }
  }

  // STEP 3: Create or update Agent
  let agentId = row.retell_agent_id;
  if (!agentId) {
    const agent = await retell.agent.create({
      agent_name: "AI Receptionist",
      response_engine: { type: "retell-llm", llm_id: llmId },
      voice_id: "11labs-Adrian",
      // ... voice/behavior settings (see Agent Settings Reference)
      webhook_url: `${appUrl}/api/retell/webhook`,
      post_call_analysis_data: [...],
    });
    agentId = agent.agent_id;
  } else {
    await retell.agent.update(agentId, {
      response_engine: { type: "retell-llm", llm_id: llmId },
      webhook_url: `${appUrl}/api/retell/webhook`,
    });
  }

  // STEP 4: Link phone number to agent
  if (row.reception_line) {
    const phoneE164 = toE164(row.reception_line);
    const phoneNumbers = await retell.phoneNumber.list();
    const match = phoneNumbers.find(p => p.phone_number === phoneE164);
    if (match) {
      await retell.phoneNumber.update(phoneE164, {
        inbound_agents: [{ agent_id: agentId, weight: 1 }],
      });
    }
  }

  // STEP 5: Save IDs back to database
  await serviceSupabase.from("receptionist_config").update({
    retell_llm_id: llmId,
    retell_agent_id: agentId,
    retell_sync_status: "synced",
    last_synced_at: new Date().toISOString(),
  }).eq("agency_id", row.agency_id);

  return { status: "synced" };
}
```

### Sync Trigger Points

- **Auto-sync**: When admin saves config via PATCH API
- **Manual re-sync**: POST `/api/retell/sync`

---

## 12. Webhook Handler: Retell to Your App

Configure `webhook_url` on the agent. Retell POSTs events here.

### Endpoint

```
POST /api/retell/webhook
```

### Signature Verification

```typescript
const body = await request.text();
const signature = request.headers.get("x-retell-signature") ?? "";
const isValid = await Retell.verify(body, apiKey, signature);
```

### Events

#### `call_started`
```json
{
  "event": "call_started",
  "call": {
    "call_id": "call_xxx",
    "agent_id": "agent_xxx",
    "call_type": "phone_call",
    "direction": "inbound",
    "from_number": "+1234567890",
    "to_number": "+1987654321"
  }
}
```
**Action**: Log to `retell_sync_log`.

#### `call_ended`
```json
{
  "event": "call_ended",
  "call": {
    "call_id": "call_xxx",
    "call_status": "ended",
    "duration_ms": 120000,
    "disconnect_reason": "agent_hangup",
    "transcript": "...",
    "recording_url": "https://...",
    "metadata": { "outreach_attempt_id": "uuid" }
  }
}
```
**Actions**:
- Log transcript and recording URL
- If `outreach_attempt_id` in metadata: update `outreach_attempts` status based on `disconnect_reason` (`voicemail_reached`, `no_answer`, `dial_failed`)

#### `call_analyzed` (Post-Call Analysis)
```json
{
  "event": "call_analyzed",
  "call": {
    "call_id": "call_xxx",
    "agent_id": "agent_xxx",
    "call_analysis": {
      "sentiment": "positive",
      "summary": "...",
      "custom_analysis_data": {
        "call_type": "caregiver_callout",
        "caregiver_name": "John Smith",
        "caregiver_short_id": "E-1005",
        "shift_date": "2026-03-15",
        "coverage_needed": true
      }
    },
    "collected_dynamic_variables": {
      "employee_id": "E-1005",
      "shift_date": "2026-03-15"
    },
    "metadata": {}
  }
}
```
**Actions**:
- **Outbound calls** (metadata has `outreach_attempt_id`): Update `outreach_attempts` with response (accepted/declined). If accepted, auto-assign caregiver to shift.
- **Inbound calls**: Create `coverage_requests` row from analysis. Map `call_type` → `request_type`. Resolve caregiver by short_id. If auto-scheduler enabled + callout → auto-approve, vacate shift, trigger outreach.

#### `chat_analyzed` (SMS)
Same as `call_analyzed` but for SMS conversations. Field paths differ slightly (`chat_analysis` vs `call_analysis`).

### Call Type Mapping

```typescript
const CALL_TYPE_TO_REQUEST_TYPE = {
  caregiver_callout: "callout",
  same_day_coverage: "callout",
  missed_visit: "callout",
  schedule_change: "schedule_change",
  reschedule: "reschedule",
  availability_update: "availability_update",
  open_shift_question: "availability_update",
};

// Skip these (non-actionable):
const SKIP_CALL_TYPES = ["other", "escalation"];
```

---

## 13. Auto-Scheduler: Automated Coverage Outreach

When a callout is auto-approved, the system automatically finds and contacts replacement caregivers.

### Pipeline

```
Callout Auto-Approved
        │
        ▼
┌─────────────────────┐
│ Check for existing   │  Skip if active session exists
│ coverage session     │  Mark expired if past deadline
└─────────┬───────────┘
          ▼
┌─────────────────────┐
│ Score & rank         │  Query by availability, skills,
│ available caregivers │  location match. Top 10.
└─────────┬───────────┘
          ▼
┌─────────────────────┐
│ Create session       │  auto_coverage_sessions row
│ (10 min deadline)    │  status: "outreach"
└─────────┬───────────┘
          ▼
┌─────────────────────┐
│ Dispatch outreach    │  retell.call.createPhoneCall()
│ to all caregivers    │  with dynamic variables
│ (200ms stagger)      │  (shift details, pay rate, etc.)
└─────────────────────┘
          │
    ┌─────┴──────┐
    ▼            ▼
┌────────┐  ┌────────┐
│Accepted│  │Declined│  → webhook → handleOutboundCallAnalysis
└───┬────┘  └────────┘
    ▼
┌─────────────────────┐
│ Auto-assign to shift │  handleAutoAssignment()
│ Session → "filled"   │
└─────────────────────┘
```

### Outreach Call Creation

```typescript
const call = await retell.call.createPhoneCall({
  from_number: coverageLine,             // Agency's coverage line
  to_number: caregiverPhone,             // Caregiver's phone
  override_agent_id: outboundAgentId,    // Outbound voice agent
  retell_llm_dynamic_variables: {
    caregiver_name: "John Smith",
    agency_name: "Sunrise Care",
    client_name: "Margaret Wilson",
    shift_date: "Monday, March 15",
    shift_time: "9:00 AM - 1:00 PM",
    care_type: "Personal Care",
    pay_rate: "$18/hr",
  },
  metadata: {
    outreach_attempt_id: attempt.id,
    event_id: eventId,
    caregiver_id: caregiver.id,
    agency_id: agencyId,
  },
});
```

---

## 14. Post-Call Analysis Configuration

Define structured fields that Retell extracts after each call ends.

### Receptionist Post-Call Analysis

```typescript
post_call_analysis_data: [
  {
    name: "caller_intent",
    type: "enum",
    description: "Primary reason the caller called",
    choices: ["new_client_intake", "caregiver_application", "scheduling",
              "billing", "complaint", "general_inquiry", "other"],
  },
  { name: "caller_name", type: "string", description: "Caller's name" },
  { name: "caller_phone", type: "string", description: "Caller's phone" },
  { name: "call_summary", type: "string", description: "Brief summary + action items" },
  { name: "follow_up_needed", type: "boolean", description: "Human follow-up needed?" },
]
```

### Coordinator Post-Call Analysis

```typescript
post_call_analysis_data: [
  {
    name: "call_type",
    type: "enum",
    description: "Classify by CALLER'S INTENT...",
    choices: ["caregiver_callout", "schedule_change", "reschedule",
              "missed_visit", "availability_update", "open_shift_question",
              "same_day_coverage", "escalation", "other"],
  },
  { name: "caregiver_name", type: "string", description: "Caregiver's full name" },
  { name: "caregiver_short_id", type: "string", description: "Employee ID (E-XXXX format)" },
  { name: "client_name", type: "string", description: "Client name if mentioned" },
  { name: "shift_date", type: "string", description: "Affected shift date" },
  { name: "call_summary", type: "string", description: "Summary + action items" },
  { name: "coverage_needed", type: "boolean", description: "Whether coverage is needed" },
]
```

### Outbound Post-Call Analysis

```typescript
post_call_analysis_data: [
  {
    name: "response",
    type: "enum",
    description: "Whether caregiver accepted or declined",
    choices: ["accepted", "declined", "no_answer", "voicemail", "unknown"],
  },
  { name: "caregiver_message", type: "string", description: "What caregiver said" },
  { name: "summary", type: "string", description: "Brief call summary" },
]
```

---

## 15. Agent Settings Reference

These settings control voice, behavior, and timing for all agents:

```typescript
// Voice & Speech
voice_id: "11labs-Adrian",       // ElevenLabs voice
language: "en-US",
voice_speed: 1.0,                // Playback speed multiplier
voice_temperature: 0.5,          // Voice variation (0=consistent, 1=expressive)
normalize_for_speech: true,      // Convert numbers, abbreviations to spoken form

// Conversation Behavior
responsiveness: 0.7,             // How quickly agent responds (0=slow, 1=instant)
interruption_sensitivity: 0.6,   // How easily caller can interrupt (0=hard, 1=easy)
reminder_trigger_ms: 8000,       // If silence for 8s, agent sends reminder
reminder_max_count: 2,           // Max 2 reminders before giving up

// Call Limits
end_call_after_silence_ms: 30000,  // End call after 30s silence
max_call_duration_ms: 1800000,     // 30 minute max (inbound)
// Outbound: max_call_duration_ms: 300000 (5 min)

// Ambient Sound
ambient_sound: "call-center",
ambient_sound_volume: 0.3,

// Voicemail
enable_voicemail_detection: true,
voicemail_message: "Hi, you've reached...",

// Webhook
webhook_url: "https://your-domain.com/api/retell/webhook",
```

---

## 16. Database Schema

### receptionist_config (singleton per agency)

```sql
CREATE TABLE receptionist_config (
  agency_id UUID PRIMARY KEY REFERENCES agencies(id),

  -- Step 1: Phone Setup
  agency_name TEXT,
  reception_line TEXT,              -- E.164 phone number
  escalation_number TEXT,           -- E.164 phone number
  greeting_script TEXT,
  business_hours TEXT DEFAULT 'custom',  -- '24/7' or 'custom'
  hours_monday TEXT, hours_tuesday TEXT, -- per-day hours
  -- ... hours_wednesday through hours_sunday
  business_hours_label TEXT,
  services_summary TEXT,

  -- Step 2: Call Routing (boolean toggles)
  route_caregiver_call_out BOOLEAN DEFAULT true,
  route_schedule_change BOOLEAN DEFAULT true,
  route_reschedule_request BOOLEAN DEFAULT true,
  route_missed_visit BOOLEAN DEFAULT true,
  -- ... more route flags
  escalate_billing_question BOOLEAN DEFAULT true,
  escalate_billing_dispute BOOLEAN DEFAULT true,
  escalate_complaint_escalation BOOLEAN DEFAULT true,
  escalate_urgent_issue BOOLEAN DEFAULT true,

  -- Step 3: Client Intake (boolean toggles)
  intake_client_name BOOLEAN DEFAULT true,
  intake_client_phone_number BOOLEAN DEFAULT true,
  intake_client_email BOOLEAN DEFAULT true,
  -- ... more intake fields
  auto_schedule_consultation BOOLEAN DEFAULT false,

  -- Step 4: Caregiver Intake (enabled + required toggles)
  intake_cg_full_name BOOLEAN DEFAULT true,
  intake_cg_full_name_required BOOLEAN DEFAULT true,
  intake_cg_phone_number BOOLEAN DEFAULT true,
  intake_cg_phone_number_required BOOLEAN DEFAULT true,
  -- ... more caregiver fields

  -- Step 5: Notifications
  notify_summaries_sms BOOLEAN DEFAULT false,
  notify_summaries_email BOOLEAN DEFAULT false,
  -- ... more notification flags

  -- Retell State
  retell_llm_id TEXT,
  retell_agent_id TEXT,
  retell_phone_number_id TEXT,
  coordinator_retell_agent_id TEXT,  -- For agent_swap
  retell_sync_status TEXT DEFAULT 'pending',  -- pending/synced/error
  retell_sync_error TEXT,
  last_synced_at TIMESTAMPTZ,
  ai_receptionist_enabled BOOLEAN DEFAULT false,
  ai_coordinator_enabled BOOLEAN DEFAULT false,

  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);
```

### coordinator_config (singleton per agency)

```sql
CREATE TABLE coordinator_config (
  agency_id UUID PRIMARY KEY REFERENCES agencies(id),

  -- Step 1: Line & Routing
  coverage_line TEXT,
  human_backup_number TEXT,
  intro_script TEXT,
  operating_mode TEXT DEFAULT '24/7',  -- '24/7', 'business-hours', 'after-hours'
  agency_timezone TEXT DEFAULT 'America/New_York',

  -- Step 2: Call Types
  handle_caregiver_call_out BOOLEAN DEFAULT true,
  handle_schedule_change BOOLEAN DEFAULT true,
  handle_same_day_coverage BOOLEAN DEFAULT true,
  -- ... more call type flags

  -- Step 3: Call-Out Intake
  collect_caregiver_name BOOLEAN DEFAULT true,
  collect_caregiver_id BOOLEAN DEFAULT true,
  collect_shift_date BOOLEAN DEFAULT true,
  collect_shift_time BOOLEAN DEFAULT true,
  after_notify_scheduler BOOLEAN DEFAULT true,
  after_create_task BOOLEAN DEFAULT true,

  -- Step 4: Coverage Workflow
  auto_fill_shifts BOOLEAN DEFAULT false,
  assignment_mode TEXT DEFAULT 'suggest',  -- 'suggest', 'approval', 'auto-assign'

  -- Step 5: Escalations
  escalate_medical_emergency BOOLEAN DEFAULT true,
  escalate_abuse_report BOOLEAN DEFAULT true,
  -- ... more escalation flags

  -- Auto-Scheduler
  auto_scheduler_enabled BOOLEAN DEFAULT false,

  -- Retell State
  retell_llm_id TEXT,
  retell_agent_id TEXT,
  retell_phone_number_id TEXT,
  retell_sync_status TEXT DEFAULT 'pending',
  retell_sync_error TEXT,
  last_synced_at TIMESTAMPTZ,

  -- Outbound Agents
  retell_outbound_llm_id TEXT,
  retell_outbound_agent_id TEXT,
  retell_outbound_chat_agent_id TEXT,

  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);
```

### retell_sync_log (audit trail)

```sql
CREATE TABLE retell_sync_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  agency_id UUID REFERENCES agencies(id),
  action TEXT NOT NULL,          -- 'llm.create', 'agent.update', 'webhook.call_analyzed', etc.
  status TEXT NOT NULL,          -- 'success', 'error', 'identified', 'not_found', etc.
  request_payload JSONB,
  response_payload JSONB,
  error_message TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_retell_sync_log_agency ON retell_sync_log(agency_id, created_at DESC);
```

### coverage_requests

```sql
CREATE TABLE coverage_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  agency_id UUID REFERENCES agencies(id),
  request_type TEXT NOT NULL,       -- 'callout', 'cancel_shift', 'schedule_change', etc.
  caregiver_name TEXT,
  caregiver_id UUID REFERENCES employees(id),
  client_name TEXT,
  event_id UUID REFERENCES schedule_events(id),
  shift_date TEXT,
  shift_time TEXT,
  reason TEXT,
  status TEXT DEFAULT 'pending',    -- 'pending', 'approved', 'cancelled'
  retell_call_id TEXT,              -- Links to Retell call
  action_payload JSONB,             -- Tool action details
  created_at TIMESTAMPTZ DEFAULT now()
);
```

### auto_coverage_sessions

```sql
CREATE TABLE auto_coverage_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  agency_id UUID REFERENCES agencies(id),
  event_id UUID REFERENCES schedule_events(id),
  original_caregiver_id UUID,
  original_call_id TEXT,
  original_caregiver_phone TEXT,
  status TEXT DEFAULT 'outreach',   -- 'outreach', 'filled', 'expired', 'cancelled'
  deadline_at TIMESTAMPTZ,
  assigned_caregiver_id UUID,
  created_at TIMESTAMPTZ DEFAULT now()
);
```

### outreach_attempts

```sql
CREATE TABLE outreach_attempts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  agency_id UUID REFERENCES agencies(id),
  event_id UUID REFERENCES schedule_events(id),
  caregiver_id UUID REFERENCES employees(id),
  channel TEXT DEFAULT 'call',       -- 'call' or 'sms'
  status TEXT DEFAULT 'pending',     -- 'pending', 'in_progress', 'accepted', 'declined',
                                     -- 'voicemail', 'no_answer', 'failed'
  retell_call_id TEXT,
  response_message TEXT,
  response_notes TEXT,
  call_duration_ms INTEGER,
  responded_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now()
);
```

---

## 17. Prompt Engineering Patterns

### Pattern: Conditional State Generation

Only include states for features that are enabled:

```typescript
const states = [];

// Always include identify_issue
states.push({ name: "identify_issue", ... });

// Only add callout_intake if call-outs are handled
if (config.handle_caregiver_call_out) {
  states.push({ name: "callout_intake", ... });
}

// Only add schedule_change if schedule changes are handled
if (config.handle_schedule_change) {
  states.push({ name: "schedule_change", ... });
}

// Always include wrap_up
states.push({ name: "wrap_up", ... });
```

### Pattern: Conditional Tool Inclusion

```typescript
const generalTools = [endCallTool, transferToHuman];

if (config.auto_fill_shifts) {
  generalTools.push(cancelShiftTool);
  generalTools.push(changeScheduleTool);
}
```

### Pattern: Pre-Identified Caller Skip

```
## CALLER ALREADY IDENTIFIED
If {{caller_identified}} is "true", you ALREADY know:
- Employee ID: {{employee_id}}
- Name: {{caregiver_name}}
- Do NOT ask for Employee ID or name.
- Confirm briefly: "I have you as {{caregiver_name}}, employee {{employee_id}}. Is that correct?"
- If they confirm → proceed to collecting shift date.
- If they say that's NOT them → ask for Employee ID manually.

## STANDARD IDENTIFICATION (caller not auto-identified)
If {{caller_identified}} is NOT "true", collect Employee ID first.
```

### Pattern: Tool Result Handling in Prompts

```
After cancel_shift returns:
- "needs_id": ask for employee ID again.
- "success": relay the confirmation message exactly as returned.
- "multiple_matches": ask for last name, call cancel_shift again.
- "not_found" / "no_shift": say "I've noted the details — scheduling team will follow up."
- "error": say "I couldn't update the schedule, but I've noted everything."
```

### Pattern: Emergency Protocol

```
## CRITICAL RULES
EMERGENCY PROTOCOL: If a caller mentions a fall, medical emergency,
safety threat, or life-threatening situation:
1. Immediately say: "If this is a life-threatening emergency, please call 911 right now."
2. Use the transfer_to_human tool.
```

### Pattern: Relative Date Handling

```
## CURRENT DATE
IMPORTANT: Before processing any date-related request, you MUST call
the get_current_date tool. Do NOT assume or guess the current date.
Use the returned date to resolve:
- "tomorrow" = next day after today
- "next Monday" = the coming Monday
When passing dates to tools, always convert to YYYY-MM-DD format.
```

### Pattern: Routing with Keyword Hints

```
→ If the caller wants to CALL OUT, is SICK, CAN'T MAKE IT → go to "callout_intake"
  Keywords: "call out", "sick", "can't make it", "cancel my shift", "won't be able to come in"
→ If the caller wants to MOVE, RESCHEDULE, CHANGE TIME/DATE → go to "schedule_change"
  Keywords: "move my shift", "change the time", "reschedule", "swap"
```

---

## 18. Phone Number Handling

All phone numbers must be in **E.164 format** (`+1XXXXXXXXXX` for US/CA):

```typescript
function toE164(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  if (digits.length === 10) return `+1${digits}`;           // 4129530622 → +14129530622
  if (digits.length === 11 && digits.startsWith("1"))
    return `+${digits}`;                                     // 14129530622 → +14129530622
  if (raw.startsWith("+")) return raw;                       // Already E.164
  return `+${digits}`;                                       // Best effort
}
```

### Employee ID Normalization

```typescript
function normalizeShortId(raw: string): string | null {
  if (!raw) return null;
  const cleaned = raw.replace(/[^0-9eE-]/g, "").trim();
  // Accept: "E-1005", "e-1005", "1005", "E1005"
  const digits = cleaned.replace(/[^0-9]/g, "");
  if (!digits) return null;
  return `E-${digits}`;
}
```

---

## 19. Error Handling & Graceful Degradation

### Pattern: Missing API Key

```typescript
const retell = getRetellClient();
if (!retell) {
  // Set sync status to "pending" — config is still saved to DB
  // Agent won't work but app doesn't crash
  return { status: "pending" };
}
```

### Pattern: Stale LLM Fallback

```typescript
try {
  await retell.llm.update(existingLlmId, config);
} catch {
  // LLM was deleted in Retell dashboard — create fresh
  const llm = await retell.llm.create(config);
  llmId = llm.llm_id;
}
```

### Pattern: Phone Number Not Found

```typescript
const phones = await retell.phoneNumber.list();
const match = phones.find(p => p.phone_number === numberE164);
if (!match) {
  // Log warning but don't fail the sync
  console.warn(`Phone ${numberE164} not found in Retell. Add it in the dashboard.`);
}
```

### Pattern: Non-Fatal Webhook Errors

Custom tool endpoints and webhook handlers should never return 5xx to Retell:

```typescript
export async function POST(request) {
  try {
    // ... business logic
  } catch (err) {
    // Log the error, but return a friendly message
    console.error("[tool] Error:", err);
    return NextResponse.json({
      result: "error",
      message: "An unexpected error occurred",
    });
  }
}
```

---

## 20. File Structure Reference

```
lib/
  retell/
    client.ts                    # Singleton SDK client
    prompt.ts                    # Receptionist LLM builder (buildLlmConfig)
    sync.ts                      # Receptionist sync engine
    coordinator-prompt.ts        # Coordinator LLM builder (buildCoordinatorLlmConfig)
    coordinator-sync.ts          # Coordinator sync engine
    outbound-prompt.ts           # Outbound coverage LLM builder
    outbound-sync.ts             # Outbound agent sync (voice + SMS)
  auto-scheduler/
    trigger.ts                   # Main entry: triggerAutoCoverage()
    outreach.ts                  # Dispatch outbound calls to caregivers
    scoring.ts                   # Score & rank available caregivers
    assign.ts                    # Auto-assign accepted caregiver to shift
    hard-rules.ts                # Eligibility rules (skills, availability)
    types.ts                     # Shared types
  db/
    receptionist.mapper.ts       # Type definitions & DB↔API mappers
    coordinator.mapper.ts        # Type definitions & DB↔API mappers
  phone.ts                       # toE164() helper
  url.ts                         # getAppUrl() helper

app/api/
  retell/
    sync/route.ts                # POST manual re-sync
    webhook/route.ts             # POST webhook handler (all events)
    tools/
      current-date/route.ts      # Returns today's date in agency timezone
      identify-caller/route.ts   # Phone number → employee lookup
      cancel-shift/route.ts      # Cancel/vacate a shift
      change-schedule/route.ts   # Reschedule a shift
  ai/
    receptionist/
      config/route.ts            # GET/PATCH receptionist config (triggers sync)
    coordinator/
      config/route.ts            # GET/PATCH coordinator config (triggers sync)

supabase/migrations/
  038_create_receptionist_config.sql
  040_coordinator_config.sql
  041_coordinator_requests.sql
  046_coordinator_timezone.sql
  047_auto_coverage_sessions.sql
```

---

## Quick Start: Minimal Retell Agent

To create the simplest possible Retell voice agent:

```typescript
import Retell from "retell-sdk";

const retell = new Retell({ apiKey: process.env.RETELL_API_KEY });

// 1. Create LLM
const llm = await retell.llm.create({
  model: "gpt-4.1",
  model_temperature: 0.3,
  begin_message: "Hello, how can I help you today?",
  general_prompt: "You are a helpful assistant. Keep responses short.",
  general_tools: [
    { type: "end_call", name: "end_call", description: "End the call." },
  ],
  starting_state: "main",
  states: [
    {
      name: "main",
      state_prompt: "Help the caller with their question.",
    },
  ],
});

// 2. Create Agent
const agent = await retell.agent.create({
  agent_name: "My Agent",
  response_engine: { type: "retell-llm", llm_id: llm.llm_id },
  voice_id: "11labs-Adrian",
  language: "en-US",
  webhook_url: "https://your-domain.com/api/retell/webhook",
});

// 3. Link Phone Number
await retell.phoneNumber.update("+1XXXXXXXXXX", {
  inbound_agents: [{ agent_id: agent.agent_id, weight: 1 }],
});

console.log("Agent created:", agent.agent_id);
```

---

## Summary

This implementation uses a **config-driven, state-machine architecture**:

1. **Admin configures** agent behavior via boolean toggles and text fields in the database
2. **Prompt builder** reads config and generates an LLM with states, tools, and prompts
3. **Sync engine** pushes the LLM config to Retell's API
4. **Custom tool endpoints** allow mid-call function calls (database reads/writes)
5. **Webhook handler** processes post-call analysis and triggers downstream workflows
6. **Auto-scheduler** orchestrates outbound coverage calls when shifts become vacant

Every piece is designed to be **dynamically configurable** without code changes — the admin flips toggles, the prompt builder generates the right states and tools, and the sync engine pushes it to Retell.
