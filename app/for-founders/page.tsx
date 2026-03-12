"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Handshake from "@/components/illustrations/Handshake";

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

export default function ForFounders() {
  return (
    <div>
      <div className="max-w-4xl mx-auto px-8">
        {/* Hero */}
        <section className="pt-24 pb-20 border-b border-[#E0D9CE]">
          <p className="text-xs tracking-[0.2em] text-[#6B6B6B] uppercase mb-8">For Founders</p>
          <h1 className="text-5xl md:text-6xl font-['Playfair_Display'] font-normal leading-[1.15] text-[#0A0A0A] max-w-2xl">
            Great Indian businesses deserve great owners.
          </h1>
        </section>

        {/* The exit options */}
        <FadeIn>
          <section className="py-20 border-b border-[#E0D9CE]">
            <p className="text-xs tracking-[0.2em] text-[#6B6B6B] uppercase mb-8">The Problem</p>
            <div className="space-y-5 max-w-2xl">
              <p className="text-lg text-[#1A1A1A] font-light leading-relaxed">
                You've built a profitable business over the better part of a decade. The team is solid. The customers keep coming back. But you're thinking about what comes next — and the options in front of you aren't satisfying.
              </p>
              <p className="text-lg text-[#1A1A1A] font-light leading-relaxed">
                Passing it to family isn't straightforward. Selling to a competitor means watching it get absorbed. And institutional buyers come with restructuring plans and exit timelines that have nothing to do with what you've built.
              </p>
              <p className="text-2xl font-['Playfair_Display'] italic text-[#0A0A0A] pt-4">
                There is another option.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Is this you */}
        <FadeIn>
          <section className="py-20 border-b border-[#E0D9CE]">
            <p className="text-xs tracking-[0.2em] text-[#6B6B6B] uppercase mb-8">Is This You?</p>
            <p className="text-lg text-[#6B6B6B] font-light mb-8">We acquire established Indian B2B businesses from founders who are ready for a transition.</p>
            <div className="space-y-5">
              {[
                "Operating for 10 years or more",
                "A team that runs the business day-to-day",
                "Consistent revenue and profitability",
                "Founder-owned, not venture-backed",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="text-[#6B6B6B] mt-1 text-sm">—</span>
                  <p className="text-lg text-[#1A1A1A] font-light">{item}</p>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>
      </div>

      {/* Dark breakout */}
      <FadeIn>
        <section className="bg-[#0A0A0A] py-24 px-8 text-center">
          <p className="text-4xl md:text-5xl font-['Playfair_Display'] italic text-[#F5F0E8] leading-tight max-w-2xl mx-auto">
            We buy. We run. We don't flip.
          </p>
          <p className="text-[#6B6B6B] mt-6 text-base font-light max-w-md mx-auto">
            The team stays. The name stays. Our goal is to steward what you've built — not replace it.
          </p>
        </section>
      </FadeIn>

      <div className="max-w-4xl mx-auto px-8">
        {/* A buyer, not a boardroom */}
        <FadeIn>
          <section className="py-20 border-b border-[#E0D9CE]">
            <div className="flex items-start justify-between gap-8">
              <div>
                <p className="text-xs tracking-[0.2em] text-[#6B6B6B] uppercase mb-8">Who You're Talking To</p>
                <h2 className="text-3xl font-['Playfair_Display'] font-normal text-[#0A0A0A] mb-8">
                  A buyer, not a boardroom.
                </h2>
                <p className="text-lg text-[#1A1A1A] font-light leading-relaxed max-w-2xl">
                  You will speak directly with the person responsible for the acquisition — not a deal team or an associate. We are India-based, India-focused, and built for the segment most institutional buyers overlook.
                </p>
              </div>
              <div className="hidden md:block shrink-0 opacity-60 mt-2">
                <Handshake size={100} />
              </div>
            </div>
          </section>
        </FadeIn>

        {/* CTA */}
        <FadeIn>
          <section className="py-24 text-center">
            <p className="text-3xl font-['Playfair_Display'] italic text-[#6B6B6B] mb-8">
              The best exits start with a quiet conversation.
            </p>
            <Link href="/contact" className="inline-block px-8 py-4 bg-[#C4622D] text-[#F5F0E8] text-sm tracking-wide hover:bg-[#A8521F] transition-colors">
              Get in touch →
            </Link>
          </section>
        </FadeIn>
      </div>
    </div>
  );
}
