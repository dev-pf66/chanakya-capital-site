"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Compass from "@/components/illustrations/Compass";

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

export default function About() {
  return (
    <div>
      <div className="max-w-4xl mx-auto px-8">
        {/* Hero */}
        <section className="pt-24 pb-20 border-b border-[#E0D9CE]">
          <p className="text-xs tracking-[0.2em] text-[#6B6B6B] uppercase mb-8">About</p>
          <h1 className="text-5xl md:text-6xl font-['Playfair_Display'] font-normal leading-[1.15] text-[#0A0A0A] max-w-2xl">
            We're not a fund. We're a firm built by an operator, for the Indian mid-market.
          </h1>
        </section>

        {/* Why we exist */}
        <FadeIn>
          <section className="py-20 border-b border-[#E0D9CE]">
            <p className="text-xs tracking-[0.2em] text-[#6B6B6B] uppercase mb-8">Why We Exist</p>
            <div className="space-y-5 max-w-2xl">
              <p className="text-lg text-[#1A1A1A] font-light leading-relaxed">
                India has over a million profitable small businesses. Most of them will face the same question in the next decade: what happens when the founder is ready to stop?
              </p>
              <p className="text-lg text-[#1A1A1A] font-light leading-relaxed">
                The answer shouldn't be "sell to a competitor" or "shut it down." There should be a better option — an owner who steps in, runs it well, and keeps it going.
              </p>
              <p className="text-2xl font-['Playfair_Display'] italic text-[#0A0A0A] pt-4">
                That's what we're building.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Who's behind it */}
        <FadeIn>
          <section className="py-20 border-b border-[#E0D9CE]">
            <p className="text-xs tracking-[0.2em] text-[#6B6B6B] uppercase mb-8">Who's Behind It</p>
            <div className="space-y-12 max-w-2xl">
              {/* Nehal Shah */}
              <div className="space-y-2">
                <p className="text-sm tracking-[0.15em] text-[#6B6B6B] uppercase">Founder</p>
                <p className="text-2xl font-['Playfair_Display'] text-[#0A0A0A]">Nehal Shah</p>
                <p className="text-lg text-[#1A1A1A] font-light leading-relaxed">
                  25+ years building and running manufacturing operations in India. Understands what it takes to keep a business running across decades — the teams, the systems, the relationships.
                </p>
              </div>
              
              {/* Karishma Swali */}
              <div className="space-y-2">
                <p className="text-sm tracking-[0.15em] text-[#6B6B6B] uppercase">Founder</p>
                <p className="text-2xl font-['Playfair_Display'] text-[#0A0A0A]">Karishma Swali</p>
                <p className="text-lg text-[#1A1A1A] font-light leading-relaxed">
                  25+ years leading a global export business from Mumbai. Has worked with the world's most demanding clients and built organizations that outlast any single person.
                </p>
              </div>
              
              {/* Dev Shah */}
              <div className="space-y-2">
                <p className="text-sm tracking-[0.15em] text-[#6B6B6B] uppercase">General Partner</p>
                <p className="text-2xl font-['Playfair_Display'] text-[#0A0A0A]">Dev Shah</p>
                <p className="text-lg text-[#1A1A1A] font-light leading-relaxed">
                  Runs day-to-day operations. Has been acquiring and operating small businesses since 18. Focused entirely on the Indian mid-market.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Why the name */}
        <FadeIn>
          <section className="py-20 border-b border-[#E0D9CE]">
            <div className="flex items-start justify-between gap-8">
              <div className="flex-1">
                <p className="text-xs tracking-[0.2em] text-[#6B6B6B] uppercase mb-8">Why The Name</p>
                <div className="space-y-5 max-w-2xl">
                  <p className="text-lg text-[#1A1A1A] font-light leading-relaxed">
                    Chanakya was India's original strategist. Pragmatic, long-term, unafraid of complexity.
                  </p>
                  <p className="text-2xl font-['Playfair_Display'] italic text-[#0A0A0A]">
                    No shortcuts. No strip-and-flip. No decisions made from a spreadsheet alone.
                  </p>
                </div>
              </div>
              <div className="hidden md:block shrink-0 opacity-60 mt-2">
                <Compass size={100} />
              </div>
            </div>
          </section>
        </FadeIn>
      </div>

      {/* Dark breakout — India thesis with background number */}
      <FadeIn>
        <section className="relative bg-[#0A0A0A] py-24 px-8 overflow-hidden">
          <span
            aria-hidden="true"
            className="pointer-events-none select-none absolute right-[-1rem] top-1/2 -translate-y-1/2 font-['Playfair_Display'] font-normal leading-none text-[#F5F0E8] opacity-[0.05]"
            style={{ fontSize: '240px' }}
          >
            &lt;20
          </span>
          <div className="relative z-10 max-w-4xl mx-auto">
            <p className="text-xs tracking-[0.2em] text-[#6B6B6B] uppercase mb-8">The India Thesis</p>
            <p className="text-lg text-[#9B9B9B] font-light leading-relaxed max-w-2xl mb-4">
              Fewer than 20 PE firms operate meaningfully in India's small business segment. For a country of 1.4 billion people, that's a striking gap.
            </p>
            <p className="text-lg text-[#9B9B9B] font-light leading-relaxed max-w-2xl mb-8">
              We're not here to replicate what Western PE does. We're building something suited to this market — the economics, the relationships, the culture of how business gets done here.
            </p>
          </div>
        </section>
      </FadeIn>

      <div className="max-w-4xl mx-auto px-8">
        <FadeIn>
          <section className="py-24 text-center">
            <Link href="/contact" className="inline-block px-8 py-4 bg-[#C4622D] text-[#F5F0E8] text-sm tracking-wide hover:bg-[#A8521F] transition-colors">
              Get in touch →
            </Link>
          </section>
        </FadeIn>
      </div>
    </div>
  );
}
