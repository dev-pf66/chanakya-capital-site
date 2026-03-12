"use client";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("https://formspree.io/f/REPLACE_WITH_YOUR_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("done");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-8">
      {/* Hero */}
      <section className="pt-24 pb-20 border-b border-[#E0D9CE]">
        <p className="text-xs tracking-[0.2em] text-[#6B6B6B] uppercase mb-8">Get In Touch</p>
        <h1 className="text-5xl md:text-6xl font-['Playfair_Display'] font-normal leading-[1.15] text-[#0A0A0A] max-w-2xl">
          The best exits start with a quiet conversation.
        </h1>
        <p className="text-lg text-[#6B6B6B] font-light mt-8 max-w-xl leading-relaxed">
          No deck required. Tell us about your business and we'll get back to you within 48 hours.
        </p>
        <div className="mt-12 pt-8 border-t border-[#E0D9CE]">
          <p className="text-xs tracking-[0.2em] text-[#6B6B6B] uppercase mb-4">Or reach out directly</p>
          <div className="space-y-3">
            <a href="tel:+919820059357" className="block text-xl text-[#0A0A0A] hover:text-[#C4622D] transition-colors">
              +91 98200 59357
            </a>
            <div className="flex items-center gap-6 pt-2">
              <a href="https://linkedin.com/in/devlikesbizness" target="_blank" rel="noopener noreferrer" className="text-sm text-[#6B6B6B] hover:text-[#0A0A0A] transition-colors">
                LinkedIn
              </a>
              <a href="https://instagram.com/devlikesbizness" target="_blank" rel="noopener noreferrer" className="text-sm text-[#6B6B6B] hover:text-[#0A0A0A] transition-colors">
                Instagram
              </a>
              <a href="https://youtube.com/@devlikesbizness" target="_blank" rel="noopener noreferrer" className="text-sm text-[#6B6B6B] hover:text-[#0A0A0A] transition-colors">
                YouTube
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20">
        {status === "done" ? (
          <div className="max-w-xl">
            <p className="text-3xl font-['Playfair_Display'] italic text-[#0A0A0A] mb-4">Thank you.</p>
            <p className="text-lg text-[#6B6B6B] font-light">We've received your message and will be in touch within 48 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-xl space-y-8">
            <div className="space-y-2">
              <label className="text-xs tracking-[0.15em] text-[#6B6B6B] uppercase block">Your name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full border-b border-[#E0D9CE] bg-transparent py-3 text-[#0A0A0A] placeholder-[#BDBDBD] focus:outline-none focus:border-[#0A0A0A] transition-colors text-base"
                placeholder="Rajesh Kumar"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs tracking-[0.15em] text-[#6B6B6B] uppercase block">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full border-b border-[#E0D9CE] bg-transparent py-3 text-[#0A0A0A] placeholder-[#BDBDBD] focus:outline-none focus:border-[#0A0A0A] transition-colors text-base"
                placeholder="you@company.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs tracking-[0.15em] text-[#6B6B6B] uppercase block">Business name</label>
              <input
                type="text"
                name="business"
                required
                className="w-full border-b border-[#E0D9CE] bg-transparent py-3 text-[#0A0A0A] placeholder-[#BDBDBD] focus:outline-none focus:border-[#0A0A0A] transition-colors text-base"
                placeholder="Acme Industries Pvt. Ltd."
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs tracking-[0.15em] text-[#6B6B6B] uppercase block">Annual revenue (approx.)</label>
              <input
                type="text"
                name="revenue"
                className="w-full border-b border-[#E0D9CE] bg-transparent py-3 text-[#0A0A0A] placeholder-[#BDBDBD] focus:outline-none focus:border-[#0A0A0A] transition-colors text-base"
                placeholder="₹2Cr"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs tracking-[0.15em] text-[#6B6B6B] uppercase block">Tell us about your business</label>
              <textarea
                name="message"
                rows={4}
                required
                className="w-full border-b border-[#E0D9CE] bg-transparent py-3 text-[#0A0A0A] placeholder-[#BDBDBD] focus:outline-none focus:border-[#0A0A0A] transition-colors text-base resize-none"
                placeholder="What does your business do? How long have you been operating? What are you thinking about?"
              />
            </div>

            {status === "error" && (
              <p className="text-sm text-red-600">Something went wrong. Please try again or email us directly.</p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="px-8 py-4 bg-[#C4622D] text-[#F5F0E8] text-sm tracking-wide hover:bg-[#A8521F] transition-colors disabled:opacity-50"
            >
              {status === "sending" ? "Sending..." : "Send →"}
            </button>
          </form>
        )}
      </section>
    </div>
  );
}
