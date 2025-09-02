"use client";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function ProjectCard({ title, desc, tags = [] as string[] }:{
  title: string; desc: string; tags?: string[];
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    
    cardRef.current.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = `perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)`;
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: "preserve-3d" }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="bg-neutral-900 border border-white/10 rounded-2xl p-6 shadow-[0_0_20px_rgba(16,185,129,0.12)] hover:shadow-[0_0_60px_rgba(16,185,129,0.2)] transition-shadow duration-300">
      <div className="relative mb-4 h-40 w-full overflow-hidden rounded-xl bg-gradient-to-br from-emerald-500/15 via-emerald-400/10 to-transparent" />
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-1 text-sm text-gray-400">{desc}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map(t => (
          <span key={t} className="rounded-md border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-xs text-emerald-300">{t}</span>
        ))}
      </div>
    </motion.div>
  );
}
