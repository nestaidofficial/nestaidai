import { NextRequest, NextResponse } from "next/server";
import { getRetellClient } from "@/lib/retell/client";

const FROM_NUMBER = "+16173031777";

function normalizePhone(raw: string): string | null {
  const digits = raw.replace(/\D/g, "");
  if (digits.length === 10) return "+1" + digits;
  if (digits.length === 11 && digits.startsWith("1")) return "+" + digits;
  return null;
}

export async function POST(req: NextRequest) {
  const retell = getRetellClient();
  if (!retell) {
    return NextResponse.json(
      { error: "Retell not configured" },
      { status: 500 }
    );
  }

  const agentId = process.env.RETELL_AGENT_ID;
  if (!agentId) {
    return NextResponse.json(
      { error: "RETELL_AGENT_ID not configured" },
      { status: 500 }
    );
  }

  const body = await req.json();
  const phone = normalizePhone(body.phone || "");

  if (!phone) {
    return NextResponse.json(
      { error: "Please enter a valid 10-digit US phone number" },
      { status: 400 }
    );
  }

  try {
    const call = await retell.call.createPhoneCall({
      from_number: FROM_NUMBER,
      to_number: phone,
      override_agent_id: agentId,
    });

    return NextResponse.json({
      success: true,
      call_id: call.call_id,
    });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Failed to initiate call";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
