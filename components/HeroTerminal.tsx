"use client";
import { useEffect, useMemo, useState } from "react";
import { Github, Linkedin, Mail, ArrowRight, FolderGit2, ExternalLink } from "lucide-react";

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function HeroTerminal() {
  const commands = useMemo(() => ["whoami", "ls projects/", "open contact"], []);
  const [i, setI] = useState(0);
  const [typed, setTyped] = useState("");
  const [out, setOut] = useState<string[]>(["Scrie `help` pentru comenzi."]);

  useEffect(() => {
    const current = commands[i % commands.length];
    setTyped("");
    let k = 0;
    const t = setInterval(() => {
      k++;
      setTyped(current.slice(0, k));
      if (k >= current.length) { clearInterval(t); setTimeout(() => setI(n => (n + 1) % commands.length), 1200); }
    }, 75);
    return () => clearInterval(t);
  }, [i, commands]);

  function run(c: string) {
    const cmd = c.trim().toLowerCase();
    if (!cmd) return;
    setOut(prev => [...prev, `$ ${cmd}`]);
    if (cmd === "help") setOut(prev => [...prev, "Disponibile: help, projects, contact, clear"]);
    else if (cmd === "projects") scrollToId("projects");
    else if (cmd === "contact") scrollToId("contact");
    else if (cmd === "clear") setOut([]);
    else setOut(prev => [...prev, "Comandă negăsită"]);
  }

  return (
    <section className="relative overflow-hidden pb-10 pt-10 sm:pt-16">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.15),transparent_55%)]" />
      <div className="relative mx-auto mt-4 max-w-6xl px-4">
        <div className="rounded-2xl border border-white/10 bg-black/50 shadow-glow">
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </div>
            <span className="ml-2 text-xs text-gray-400">/home/dima/portfolio</span>
          </div>

          <div className="grid gap-6 px-4 py-6 md:grid-cols-2 md:gap-10 md:px-8 md:py-10">
            {/* Left: copy + CTAs */}
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
                Construiesc micro-SaaS în public. <span className="text-emerald-400">0 to $.</span>
              </h1>
              <p className="mt-3 max-w-xl text-gray-400">
                De la zero cunoștințe la primul micro-SaaS profitabil. Documentez fiecare pas din călătorie.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#projects" className="group inline-flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300 hover:bg-emerald-500/20">
                  <FolderGit2 className="h-4 w-4" /> Vezi lucrările
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10">
                  <Mail className="h-4 w-4" /> Contact
                </a>
                <a href="https://github.com/dimatrcn" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/0 px-4 py-2 text-sm text-gray-300 hover:bg-white/5">
                  <Github className="h-4 w-4" /> GitHub <ExternalLink className="h-4 w-4" />
                </a>
                <a href="https://www.linkedin.com/in/dumitru-turcan-02173a262" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/0 px-4 py-2 text-sm text-gray-300 hover:bg-white/5">
                  <Linkedin className="h-4 w-4" /> LinkedIn <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Right: faux terminal */}
            <div className="relative">
              <div className="crt-grid pointer-events-none absolute inset-0 rounded-xl" />
              <div className="overflow-hidden rounded-xl border border-white/10 bg-black/70">
                <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2 text-xs text-gray-400">
                  <span className="text-emerald-400">dima@portfolio</span><span>:</span>
                  <span className="text-sky-400">~</span><span>$</span>
                  <span className="ml-2 hidden sm:inline text-gray-500">(încearcă: help, projects, contact)</span>
                </div>
                <div className="max-h-72 overflow-auto p-3 font-mono text-[13px] leading-relaxed text-emerald-300/90">
                  {out.map((line, i) => (<div key={i} className="whitespace-pre-wrap">{line}</div>))}
                  <div className="mt-1 flex items-center">
                    <span className="mr-2 text-emerald-400">$</span>
                    <span className="text-white/90">{typed}</span>
                    <span className="ml-1 inline-block h-4 w-2 animate-pulse rounded-sm bg-emerald-400/90 align-middle" />
                  </div>
                </div>
                <form onSubmit={(e) => { e.preventDefault(); const fd = new FormData(e.currentTarget); const cmd = String(fd.get("cmd") || ""); (e.target as HTMLFormElement).reset(); run(cmd); }}
                      className="flex items-center gap-2 border-t border-white/10 p-3">
                  <span className="text-emerald-400">$</span>
                  <input name="cmd" placeholder="Scrie o comandă…" className="w-full bg-transparent text-sm text-white placeholder:text-gray-500 focus:outline-none" />
                  <button type="submit" className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs text-emerald-300 hover:bg-emerald-500/20">Execută</button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
