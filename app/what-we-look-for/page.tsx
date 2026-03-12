"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Plant from "@/components/illustrations/Plant";

function FadeIn({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.style.opacity = "1"; el.style.transform = "translateY(0)"; } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={className} style={{ opacity: 0, transform: "translateY(24px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}>
      {children}
    </div>
  );
}

const criteria = [
  { label: "Sector", value: "B2B — services, manufacturing, distribution, SaaS" },
  { label: "Age", value: "10+ years in operation" },
  { label: "Team", value: "In place and functioning without the founder" },
  { label: "Revenue", value: "₹1Cr–₹10Cr annually" },
  { label: "Profitability", value: "Profitable, or a clear path to it" },
  { label: "Ownership", value: "Founder-owned, not venture-backed" },
];

const notLooking = [
  "Turnarounds or distressed assets",
  "Businesses that run entirely on the founder's relationships",
  "Consumer businesses or early-stage ventures",
  "Anything that needs a dramatic overhaul to work",
];

const beyond = [
  "A founder who genuinely cares what happens after they leave",
  "Customers who stay because the product or service is good — not just relationships",
  "A team with institutional knowledge, not just headcount",
  "A business that's been around long enough to have survived something hard",
];

export default function WhatWeLookFor() {
  return (
    <div className="max-w-4xl mx-auto px-8">
      {/* Hero */}
      <section className="pt-24 pb-20 border-b border-[#E0D9CE]">
        <p className="text-xs tracking-[0.2em] text-[#6B6B6B] uppercase mb-8">What We Look For</p>
        <h1 className="text-5xl md:text-6xl font-['Playfair_Display'] font-normal leading-[1.15] text-[#0A0A0A] max-w-3xl">
          Not every business is right for us. Here's exactly what we're looking for.
        </h1>
      </section>

      {/* Criteria */}
      <FadeIn>
        <section className="py-20 border-b border-[#E0D9CE]">
          <p className="text-xs tracking-[0.2em] text-[#6B6B6B] uppercase mb-6">The Businesses We Buy</p>
          <p className="text-lg text-[#6B6B6B] font-light mb-10 max-w-2xl">
            We have a specific mandate. Not because we're being selective for its own sake — but because we've learned what we can run well.
          </p>
          <div className="divide-y divide-[#E0D9CE]">
            {criteria.map((item) => (
              <div key={item.label} className="py-5 flex flex-col md:flex-row md:items-center gap-2 md:gap-16">
                <span className="text-xs tracking-[0.15em] text-[#6B6B6B] uppercase w-36 shrink-0">{item.label}</span>
                <span className="text-lg text-[#1A1A1A] font-light">{item.value}</span>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* Beyond the numbers */}
      <FadeIn>
        <section className="py-20 border-b border-[#E0D9CE]">
          <div className="flex items-start justify-between gap-8">
            <div className="flex-1">
              <p className="text-xs tracking-[0.2em] text-[#6B6B6B] uppercase mb-8">What Matters Beyond The Numbers</p>
              <p className="text-lg text-[#6B6B6B] font-light mb-8 max-w-2xl">
                A business that fits our criteria on paper still needs to feel right. We look for:
              </p>
              <div className="space-y-5">
                {beyond.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="text-[#6B6B6B] mt-1 text-sm">—</span>
                    <p className="text-lg text-[#1A1A1A] font-light">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden md:block shrink-0 opacity-60 mt-2">
              <Plant size={100} />
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Not looking for */}
      <FadeIn>
        <section className="py-20 border-b border-[#E0D9CE]">
          <p className="text-xs tracking-[0.2em] text-[#6B6B6B] uppercase mb-8">What We're Not Looking For</p>
          <div className="space-y-5">
            {notLooking.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="text-[#6B6B6B] mt-1 text-sm">—</span>
                <p className="text-lg text-[#1A1A1A] font-light">{item}</p>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* CTA */}
      <FadeIn>
        <section className="py-24 text-center">
          <p className="text-3xl font-['Playfair_Display'] italic text-[#6B6B6B] mb-4">Not sure if you fit?</p>
          <p className="text-lg text-[#6B6B6B] font-light mb-8">Tell us anyway. The criteria above are a guide, not a gate.</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-[#C4622D] text-[#F5F0E8] text-sm tracking-wide hover:bg-[#A8521F] transition-colors">
            Start a conversation →
          </Link>
        </section>
      </FadeIn>
    </div>
  );
}
