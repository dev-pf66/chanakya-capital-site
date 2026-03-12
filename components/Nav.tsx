"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/for-founders", label: "For Founders" },
  { href: "/what-we-look-for", label: "What We Look For" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close menu on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <nav
        className={`sticky top-0 z-50 px-8 py-5 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "bg-[#F5F0E8]/90 backdrop-blur-md border-b border-[#E0D9CE] shadow-[0_1px_0_0_rgba(0,0,0,0.04)]"
            : "bg-transparent border-b border-[#E0D9CE]"
        }`}
      >
        <Link href="/" className="font-['Playfair_Display'] text-xl font-medium tracking-tight text-[#0A0A0A]">
          Chanakya Capital
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm tracking-wide transition-colors ${
                pathname === link.href ? "text-[#0A0A0A] font-medium" : "text-[#6B6B6B] hover:text-[#0A0A0A]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="text-sm px-5 py-2.5 bg-[#0A0A0A] text-[#F5F0E8] hover:bg-[#1A1A1A] transition-colors">
            Get in touch
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-[5px] p-1 group"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span className={`block h-px w-6 bg-[#0A0A0A] transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[6px]" : ""}`} />
          <span className={`block h-px bg-[#0A0A0A] transition-all duration-300 ${open ? "w-0 opacity-0" : "w-6"}`} />
          <span className={`block h-px w-6 bg-[#0A0A0A] transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[6px]" : ""}`} />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 bg-[#F5F0E8] flex flex-col px-8 pt-28 pb-12 transition-all duration-300 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-3xl font-['Playfair_Display'] font-normal transition-colors ${
                pathname === link.href ? "text-[#0A0A0A]" : "text-[#6B6B6B] hover:text-[#0A0A0A]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="mt-auto">
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-[#C4622D] text-[#F5F0E8] text-sm tracking-wide hover:bg-[#A8521F] transition-colors"
          >
            Get in touch →
          </Link>
        </div>
      </div>
    </>
  );
}
