"use client";
import { motion } from "framer-motion";

export default function Section({ id, title, subtitle, children }:{
  id: string; title: string; subtitle?: string; children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-20">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
        <h2 className="mb-2 font-mono text-sm uppercase tracking-widest text-emerald-400">{title}</h2>
        {subtitle && <p className="mb-8 max-w-2xl text-base text-gray-400">{subtitle}</p>}
        {children}
      </motion.div>
    </section>
  );
}
