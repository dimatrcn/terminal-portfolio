"use client";
import { useEffect, useState } from "react";
import { Mail, Copy, Check, Linkedin, Twitter } from "lucide-react";

export default function ContactBlock() {
  const email = "dev.dimatrcn@gmail.com"; // <-- your email
  const [copied, setCopied] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const on = () => setReduced(mq.matches);
    on();
    mq.addEventListener?.("change", on);
    return () => mq.removeEventListener?.("change", on);
  }, []);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  }

  return (
    <div
      className="relative mx-auto w-full max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-8 text-center shadow-[0_0_40px_rgba(16,185,129,0.08)] transition-all duration-500 hover:border-white/20 hover:bg-white/8 hover:shadow-[0_0_80px_rgba(16,185,129,0.15)] hover:scale-105 hover:-translate-y-3"
    >
      {/* glow ring */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          boxShadow: "0 0 80px rgba(16,185,129,0.12) inset, 0 0 160px rgba(16,185,129,0.08)",
          transition: reduced ? undefined : "box-shadow .2s ease",
        }}
      />

      <a
        href={`mailto:${email}`}
        className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 transition-all duration-300 hover:scale-110 hover:border-emerald-500/50 hover:bg-emerald-500/20 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
      >
        <Mail className="h-5 w-5 transition-transform duration-300 hover:rotate-12" />
      </a>

      <a
        href={`mailto:${email}`}
        className="inline-block text-xl font-semibold text-emerald-300 hover:text-emerald-200 hover:scale-105 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
      >
        {email}
      </a>

      <p className="mt-2 text-sm text-gray-400">Drop me a line about your project.</p>
      <p className="mt-1 text-xs text-gray-500">Replies within 24h • UTC+2</p>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        {/* Primary */}
        <a
          href={`mailto:${email}?subject=Project%20Inquiry`}
          className="inline-flex items-center gap-2 rounded-lg border border-emerald-500/40 bg-emerald-500/15 px-4 py-2 text-sm font-medium text-emerald-200 hover:bg-emerald-500/25 hover:scale-105 hover:shadow-[0_0_15px_rgba(16,185,129,0.25)] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
        >
          <Mail className="h-4 w-4 transition-transform duration-300 group-hover:rotate-6" />
          Email me
        </a>

        {/* Secondary (swap with Calendly link if you have one) */}
        <a
          href="https://calendly.com/your-handle/intro-call"
          target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-200 hover:bg-white/10 hover:scale-105 hover:border-white/20 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
        >
          Book a call
        </a>

        {/* Copy email */}
        <button
          onClick={copyEmail}
          className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/0 px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:scale-105 hover:border-white/20 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
          aria-live="polite"
        >
          {copied ? <Check className="h-4 w-4 text-emerald-400 animate-pulse" /> : <Copy className="h-4 w-4" />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      <div className="mt-5 flex items-center justify-center gap-3 text-sm">
        <a
          href="https://www.linkedin.com/in/dumitru-turcan-02173a262"
          target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/0 px-3 py-1.5 text-gray-300 hover:bg-white/5 hover:text-white hover:scale-105 hover:border-white/20 transition-all duration-300"
        >
          <Linkedin className="h-4 w-4 transition-transform duration-300 hover:rotate-12" /> LinkedIn
        </a>
        <a
          href="https://x.com/dimatrcn"
          target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/0 px-3 py-1.5 text-gray-300 hover:bg-white/5 hover:text-white hover:scale-105 hover:border-white/20 transition-all duration-300"
        >
          <Twitter className="h-4 w-4 transition-transform duration-300 hover:-rotate-12" /> X
        </a>
      </div>
    </div>
  );
}