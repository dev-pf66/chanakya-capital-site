"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Building from "@/components/illustrations/Building";

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

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <div className="max-w-4xl mx-auto px-8">
        <section className="pt-24 pb-20 border-b border-[#E0D9CE]">
          <p className="text-xs tracking-[0.2em] text-[#6B6B6B] uppercase mb-8">Chanakya Capital</p>
          <h1 className="text-5xl md:text-6xl font-['Playfair_Display'] font-normal leading-[1.15] text-[#0A0A0A] mb-8 max-w-3xl">
            India has 1.4 billion people and fewer than 20 private equity firms.
          </h1>
          <p className="text-xl text-[#6B6B6B] font-light mb-12 max-w-xl leading-relaxed">
            We're here to change that — one great business at a time.
          </p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-[#0A0A0A] text-[#F5F0E8] text-sm tracking-wide hover:bg-[#1A1A1A] transition-colors">
            Tell us about your business →
          </Link>
        </section>

        {/* What we do */}
        <FadeIn>
          <section className="py-20 border-b border-[#E0D9CE]">
            <div className="flex items-start justify-between gap-8">
              <div>
                <p className="text-xs tracking-[0.2em] text-[#6B6B6B] uppercase mb-6">What We Do</p>
                <p className="text-lg text-[#1A1A1A] font-light leading-relaxed max-w-2xl">
                  Chanakya Capital acquires established Indian B2B businesses from founders who are ready to move on.
                </p>
                <p className="text-lg text-[#1A1A1A] font-light leading-relaxed max-w-2xl mt-4">
                  We're not a fund. We're operators. We buy businesses, we run them well, and we hold them for the long term.
                </p>
              </div>
              <div className="hidden md:block shrink-0 opacity-60 mt-2">
                <Building size={100} />
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Who we're looking for */}
        <FadeIn>
          <section className="py-20 border-b border-[#E0D9CE]">
            <p className="text-xs tracking-[0.2em] text-[#6B6B6B] uppercase mb-10">Who We're Looking For</p>
            <div className="space-y-5">
              {[
                "B2B businesses with 10+ years of operating history",
                "A team that doesn't depend on the founder to function",
                "Consistent, profitable revenue",
                "A founder thinking about succession — and not finding good answers",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="text-[#6B6B6B] mt-1 text-sm">—</span>
                  <p className="text-lg text-[#1A1A1A] font-light">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <p className="text-[#6B6B6B] mb-4">If that's your business, we should talk.</p>
              <Link href="/what-we-look-for" className="text-sm text-[#0A0A0A] underline underline-offset-4 hover:text-[#6B6B6B] transition-colors">
                See if you fit →
              </Link>
            </div>
          </section>
        </FadeIn>
      </div>

      {/* Dark breakout — manifesto */}
      <FadeIn>
        <section className="bg-[#0A0A0A] py-24 px-8 text-center my-0">
          <p className="text-4xl md:text-6xl font-['Playfair_Display'] italic text-[#F5F0E8] leading-tight">
            We buy. We run. We don't flip.
          </p>
          <p className="text-[#6B6B6B] mt-6 text-base font-light max-w-md mx-auto">
            The businesses we buy have real teams, real customers, and real history. They deserve an owner who understands that.
          </p>
        </section>
      </FadeIn>

      <div className="max-w-4xl mx-auto px-8">
        {/* Why India — with background number */}
        <FadeIn>
          <section className="relative py-20 border-b border-[#E0D9CE] overflow-hidden">
            <span
              aria-hidden="true"
              className="pointer-events-none select-none absolute right-[-2rem] top-1/2 -translate-y-1/2 font-['Playfair_Display'] font-normal leading-none text-[#0A0A0A] opacity-[0.06]"
              style={{ fontSize: '240px' }}
            >
              1.4B
            </span>
            <div className="relative z-10">
              <p className="text-xs tracking-[0.2em] text-[#6B6B6B] uppercase mb-6">Why India, Why Now</p>
              <p className="text-lg text-[#1A1A1A] font-light leading-relaxed max-w-2xl mb-4">
                The Indian mid-market is one of the most underserved segments in the world. Thousands of profitable businesses with no clear succession path, and almost nobody equipped to buy them thoughtfully.
              </p>
              <p className="text-2xl font-['Playfair_Display'] italic text-[#0A0A0A] mt-8">
                That's not a problem. That's a purpose.
              </p>
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
