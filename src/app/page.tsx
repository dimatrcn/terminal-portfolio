import HeroTerminal from "../../components/HeroTerminal";
import Section from "../../components/Section";
import ProjectCard from "../../components/ProjectCard";
import ContactBlock from "../../components/ContactBlock";

export default function HomePage() {
  const projects = [
    { title: "Realtime Terminal UI for SaaS", desc: "Blazing-fast dashboard; +32% activation.", tags: ["Next.js", "WebSockets", "Framer Motion"] },
    { title: "AI Visuals Pipeline for DJs", desc: "Prompt → export automation; hours not days.", tags: ["n8n", "Diffusion", "FFmpeg"] },
    { title: "Portfolio Engine + MDX Notes", desc: "Composable MDX + JSON-LD for SEO.", tags: ["MDX", "SEO", "Vercel"] },
  ];

  return (
    <main>
      <HeroTerminal />
      <Section id="about" title="About"
        subtitle="Learning full-stack development with a focus on modern web technologies and clean, user-friendly interfaces.">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] hover:scale-105 hover:-translate-y-2">
            <h3 className="mb-1 font-medium text-emerald-300">Learning</h3>
            <p className="text-sm text-gray-400">Building projects to master full-stack development fundamentals.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] hover:scale-105 hover:-translate-y-2">
            <h3 className="mb-1 font-medium text-emerald-300">Tech Stack</h3>
            <p className="text-sm text-gray-400">Next.js, React, TypeScript, Supabase, Tailwind CSS, Stripe, Prisma.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] hover:scale-105 hover:-translate-y-2">
            <h3 className="mb-1 font-medium text-emerald-300">Goals</h3>
            <p className="text-sm text-gray-400">Creating web applications and seeking opportunities to grow.</p>
          </div>
        </div>
      </Section>

      <Section id="projects" title="Projects" subtitle="Selected work with speed, clarity, and small delightful details.">
        <div className="grid gap-6 px-4 md:grid-cols-3">
          {projects.map(p => <ProjectCard key={p.title} {...p} />)}
        </div>
      </Section>

      <Section id="contact" title="Contact" subtitle="Let's build something great together.">
        <div className="px-4">
          <ContactBlock />
        </div>
      </Section>
    </main>
  );
}
