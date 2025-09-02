"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    try {
      const fd = new FormData(e.currentTarget);
      const payload = Object.fromEntries(fd.entries());
      const res = await fetch("/api/contact", { method: "POST", body: JSON.stringify(payload) });
      if (!res.ok) throw new Error();
      setStatus("success");
      (e.currentTarget as HTMLFormElement).reset();
    } catch { setStatus("error"); }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 max-w-md">
      <input name="name" placeholder="Name" required className="rounded-lg border border-white/10 bg-black/50 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/40" />
      <input name="email" type="email" placeholder="Email" required className="rounded-lg border border-white/10 bg-black/50 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/40" />
      <textarea name="message" rows={5} placeholder="What do you want to build?" required className="resize-none rounded-lg border border-white/10 bg-black/50 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/40" />
      <button disabled={status==="loading"} className="inline-flex items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300 hover:bg-emerald-500/20">
        {status==="loading" ? "Sending…" : status==="success" ? "Sent ✔" : status==="error" ? "Try again" : "Send message"}
      </button>
    </form>
  );
}
