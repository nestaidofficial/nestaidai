export type FaqEntry = { question: string; answer: string };

export const faqs: FaqEntry[] = [
  {
    question: "Does Nestaid replace our current home care software?",
    answer:
      "No. Nestaid is built to integrate with your existing home care software, not replace it. We sync and provide AI layer for scheduling, caregiver coordination, onboarding, EVV, and compliance.",
  },
  {
    question: "How does scheduling work in Nessa?",
    answer:
      "You can create shifts in seconds, match caregivers based on availability, and avoid double bookings with real-time updates. Smart scheduling tools give a full view of staff availability and shifts.",
  },
  {
    question: "Can Nestaid be tailored to our workflow?",
    answer:
      "Yes. Nestaid is designed to fit the way your agency already works. We can tailor workflows, call flows, and operational logic around your team, instead of forcing you into a rigid setup.",
  },
  {
    question: "Does Nestaid support both calls and text?",
    answer:
      "Yes. Nestaid supports both voice and text workflows, so your agency can manage inbound calls, caregiver outreach, updates, and coordination across both channels.",
  },
  {
    question: "How quickly can we get started?",
    answer:
      "Agencies can get started in week, not months. Nestaid is built for faster setup, faster integration, and faster time to value.",
  },
  {
    question: "How is pricing structured?",
    answer:
      "Nestaid offers usage-based pricing, so you pay based on how much you use. That gives agencies a more flexible way to start, scale, and control costs as operations grow.",
  },
];
