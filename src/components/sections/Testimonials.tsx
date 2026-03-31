"use client";

import { TestimonialCard } from "@/components/ui/testimonial-card";

const testimonials = [
  {
    author: {
      name: "Maria Gonzalez",
      role: "Agency Director, CareFirst Home Health",
      avatar: "MG",
      avatarColor: "from-gray-400 to-gray-600",
    },
    text: "Nessa cut our scheduling time in half. We used to spend hours matching caregivers to clients — now it's done in minutes with zero double bookings.",
  },
  {
    author: {
      name: "James Okoye",
      role: "Operations Manager, Brightpath Care",
      avatar: "JO",
      avatarColor: "from-gray-500 to-gray-700",
    },
    text: "Our Medicaid billing used to be a nightmare. Nessa connects EVV, visit notes, and claims in one workflow — we haven't had a rejected claim in months.",
  },
  {
    author: {
      name: "Sandra Lee",
      role: "Founder, Sunrise Home Care",
      avatar: "SL",
      avatarColor: "from-emerald-400 to-teal-600",
    },
    text: "Caregivers love the mobile app. They clock in with GPS, submit notes right after visits, and we have everything audit-ready without chasing paperwork.",
  },
  {
    author: {
      name: "David Reyes",
      role: "Compliance Lead, HomeCare Plus",
      avatar: "DR",
      avatarColor: "from-orange-400 to-rose-500",
    },
    text: "EVV compliance used to stress me out every month. Nessa tracks every visit automatically and our Medicaid audits are seamless now.",
  },
  {
    author: {
      name: "Angela Kim",
      role: "Office Manager, TenderCare Services",
      avatar: "AK",
      avatarColor: "from-pink-400 to-pink-600",
    },
    text: "Authorization tracking alone saved us thousands. Nessa alerts us before hours are exceeded so we never overbill or lose reimbursements.",
  },
  {
    author: {
      name: "Robert Chukwu",
      role: "CEO, Heritage Home Health",
      avatar: "RC",
      avatarColor: "from-teal-400 to-teal-600",
    },
    text: "We scaled from 20 to 80 clients without adding admin staff. Nessa handles the back-office operations so our team focuses on care delivery.",
  },
  {
    author: {
      name: "Tanya Brooks",
      role: "Scheduling Coordinator, Harmony Care",
      avatar: "TB",
      avatarColor: "from-amber-400 to-orange-500",
    },
    text: "I used to come in an hour early just to sort out scheduling conflicts. With Nessa, I open my laptop and everything is already organized.",
  },
  {
    author: {
      name: "Luis Fuentes",
      role: "HR Director, VitalCare Agency",
      avatar: "LF",
      avatarColor: "from-lime-400 to-green-600",
    },
    text: "Onboarding new caregivers used to take days. Nessa has the whole process — documents, training records, and schedules — in one place.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="section-padding overflow-hidden">
      <div className="container-max">
        {/* Section header */}
          <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading tracking-tight mb-4">
            Why teams choose Nestaid
          </h2>
        </div>
      </div>

      {/* Marquee — full width, outside container */}
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <div className="group flex overflow-hidden p-2 [--gap:1.25rem] [gap:var(--gap)] [--duration:120s]">
          <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee group-hover:[animation-play-state:paused]">
            {[...Array(3)].map((_, setIndex) =>
              testimonials.map((testimonial, i) => (
                <TestimonialCard key={`${setIndex}-${i}`} {...testimonial} />
              ))
            )}
          </div>
          <div aria-hidden="true" className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee group-hover:[animation-play-state:paused]">
            {[...Array(3)].map((_, setIndex) =>
              testimonials.map((testimonial, i) => (
                <TestimonialCard key={`duplicate-${setIndex}-${i}`} {...testimonial} />
              ))
            )}
          </div>
        </div>

        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-[#F6F6F3]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-[#F6F6F3]" />
      </div>
    </section>
  );
}
