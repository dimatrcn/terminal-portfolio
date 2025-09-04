import HeroTerminal from "../../components/HeroTerminal";
import Section from "../../components/Section";
import ProjectCard from "../../components/ProjectCard";
import ContactBlock from "../../components/ContactBlock";

export default function HomePage() {
  const projects = [
    { title: "Interfață Terminal în Timp Real pentru SaaS", desc: "Dashboard ultra-rapid; +32% activare.", tags: ["Next.js", "WebSockets", "Framer Motion"] },
    { title: "Pipeline Vizual AI pentru DJ-uri", desc: "Automatizare prompt → export; ore, nu zile.", tags: ["n8n", "Diffusion", "FFmpeg"] },
    { title: "Motor Portfolio + Note MDX", desc: "MDX compozabil + JSON-LD pentru SEO.", tags: ["MDX", "SEO", "Vercel"] },
  ];

  return (
    <main>
      <HeroTerminal />
      <Section id="about" title="Despre"
        subtitle="De la 0 cunoștințe la aplicații care rezolvă probleme reale pentru români. Obiectiv - €1000 MRR">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] hover:scale-105 hover:-translate-y-2">
            <h3 className="mb-1 font-medium text-emerald-300">Învățare</h3>
            <p className="text-sm text-gray-400">Construiesc proiecte pentru a stăpâni fundamentalele dezvoltării full-stack.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] hover:scale-105 hover:-translate-y-2">
            <h3 className="mb-1 font-medium text-emerald-300">Tehnologii</h3>
            <p className="text-sm text-gray-400">Stack-ul perfect pentru micro-SaaS rapid și profitabil. Next.js pentru viteza de dezvoltare, Supabase pentru lansarea rapidă, Stripe pentru primul euro câștigat.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] hover:scale-105 hover:-translate-y-2">
            <h3 className="mb-1 font-medium text-emerald-300">Obiective</h3>
            <p className="text-sm text-gray-400">Creez aplicații web și caut oportunități de dezvoltare.</p>
          </div>
        </div>
      </Section>

      <Section id="projects" title="Proiecte" subtitle="Fiecare proiect e un pas spre independența financiară. De la experimente simple la aplicații cu utilizatori reali care plătesc.">
        <div className="grid gap-6 px-4 md:grid-cols-3">
          {projects.map(p => <ProjectCard key={p.title} {...p} />)}
        </div>
      </Section>

      <Section id="contact" title="Contact" subtitle="Ai o idee de micro-SaaS? Hai să discutăm cum putem colabora">
        <div className="px-4">
          <ContactBlock />
        </div>
      </Section>
    </main>
  );
}
