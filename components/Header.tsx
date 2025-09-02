"use client";
import { useState } from "react";
import { Command, TerminalSquare } from "lucide-react";
import CommandPalette from "./CommandPalette";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-black/40 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
        >
          <TerminalSquare className="h-5 w-5" />
          <span className="font-mono text-sm tracking-wide">dima@portfolio:~$</span>
        </button>
        <nav className="hidden gap-6 md:flex">
          <a href="#about" className="link-underline text-sm text-gray-300 hover:text-white">About</a>
          <a href="#projects" className="link-underline text-sm text-gray-300 hover:text-white">Projects</a>
          <a href="#contact" className="link-underline text-sm text-gray-300 hover:text-white">Contact</a>
        </nav>
        <button onClick={() => setOpen(true)}
          className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-gray-200 hover:bg-white/10">
          <Command className="h-4 w-4" /><span className="hidden sm:inline">Command</span>
          <kbd className="ml-1 hidden rounded bg-black/60 px-1.5 py-0.5 text-xs text-gray-400 sm:inline">⌘K</kbd>
        </button>
      </div>
      <CommandPalette open={open} setOpen={setOpen} />
    </header>
  );
}
