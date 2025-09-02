"use client";
import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Command, X } from "lucide-react";

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function CommandPalette({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  const actions = useMemo(() => [
    { id: "about", label: "Go to About", run: () => scrollToId("about") },
    { id: "projects", label: "Go to Projects", run: () => scrollToId("projects") },
    { id: "contact", label: "Go to Contact", run: () => scrollToId("contact") },
  ], []);
  const [query, setQuery] = useState("");
  const filtered = actions.filter(a => a.label.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); setOpen(!open); }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, setOpen]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-start bg-black/60 p-4 pt-24">
      <div className="mx-auto w-full max-w-xl overflow-hidden rounded-xl border border-white/10 bg-black/90 shadow-[0_0_60px_rgba(16,185,129,0.2)]">
        <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2">
          <Command className="h-4 w-4 text-emerald-400" />
          <input autoFocus placeholder="Type a command…" className="w-full bg-transparent py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none"
                 value={query} onChange={(e) => setQuery(e.target.value)} />
          <button className="text-gray-400 hover:text-white" onClick={() => setOpen(false)} aria-label="Close">
            <X className="h-5 w-5" />
          </button>
        </div>
        <ul className="max-h-80 overflow-auto p-2">
          {filtered.length === 0 && <li className="px-3 py-2 text-sm text-gray-500">No results</li>}
          {filtered.map(a => (
            <li key={a.id}>
              <button className="group flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm text-gray-200 hover:bg-white/5"
                      onClick={() => { a.run(); setOpen(false); }}>
                <span>{a.label}</span>
                <ArrowRight className="h-4 w-4 text-gray-500 transition-transform group-hover:translate-x-0.5" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
