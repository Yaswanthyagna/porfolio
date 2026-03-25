/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence, useSpring } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ArrowRight, 
  Terminal,
  Plus,
  Minus,
  Sparkles
} from "lucide-react";
import { RESUME_DATA } from "./constants";
import { useState, useRef, useEffect } from "react";

export default function App() {
  const [expandedExp, setExpandedExp] = useState<number | null>(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  const titleY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  // Smooth mouse tracking
  const mouseX = useSpring(0, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div 
      ref={containerRef}
      className="relative bg-bg min-h-screen overflow-x-hidden grid-dot"
      style={{ 
        // @ts-ignore
        "--x": `${mousePos.x}px`, 
        // @ts-ignore
        "--y": `${mousePos.y}px` 
      }}
    >
      {/* Interactive Mouse Glow */}
      <div className="pointer-events-none fixed inset-0 z-30 mouse-glow" />

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 overflow-hidden">
        <motion.div 
          style={{ y: titleY, opacity: titleOpacity }}
          className="z-10"
        >
          <div className="flex items-center gap-4 mb-8">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="text-accent"
            >
              <Sparkles size={24} />
            </motion.div>
            <span className="text-xs font-mono uppercase tracking-[0.4em] text-accent">Data Scientist</span>
          </div>
          <h1 className="text-huge font-bold tracking-tighter mb-8">
            <span className="block">YAGNA</span>
            <span className="block text-display text-accent ml-[0.1em]">NIMMAGADDA</span>
          </h1>
          <div className="max-w-2xl">
            <p className="text-xl md:text-2xl font-light leading-tight text-fg/60">
              Architecting <span className="text-accent italic">intelligent systems</span>. 
              Bridging the gap between raw data and <span className="text-fg italic">production-ready AI</span>.
            </p>
          </div>
        </motion.div>

        {/* Background Decorative Text */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none">
          <span className="text-[45vw] font-bold leading-none tracking-tighter text-accent">AI</span>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-12 left-6 md:left-12 lg:left-24 flex items-center gap-8"
        >
          <div className="flex gap-6">
            <a href={RESUME_DATA.contact.github} className="hover:text-accent transition-colors"><Github size={20} /></a>
            <a href={RESUME_DATA.contact.linkedin} className="hover:text-accent transition-colors"><Linkedin size={20} /></a>
            <a href={`mailto:${RESUME_DATA.contact.email}`} className="hover:text-accent transition-colors"><Mail size={20} /></a>
          </div>
          <div className="h-px w-24 bg-accent/20" />
          <span className="text-[10px] font-mono uppercase tracking-widest opacity-40">Interactive Portfolio</span>
        </motion.div>
      </section>

      {/* Summary / About */}
      <section className="py-32 px-6 md:px-12 lg:px-24 border-t border-border relative">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xs font-mono uppercase tracking-[0.5em] text-accent mb-12">01. Summary</h2>
          <p className="text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight">
            {RESUME_DATA.summary.split(' ').map((word, i) => (
              <motion.span 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.01 }}
                viewport={{ once: true }}
                className="inline-block mr-[0.2em] hover:text-accent transition-colors cursor-default"
              >
                {word}
              </motion.span>
            ))}
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-32 px-6 md:px-12 lg:px-24 border-t border-border bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xs font-mono uppercase tracking-[0.5em] text-accent mb-24">02. Experience</h2>
          
          <div className="space-y-1">
            {RESUME_DATA.experience.map((exp, i) => (
              <div 
                key={i} 
                className="border-b border-border py-12 group cursor-pointer relative"
                onClick={() => setExpandedExp(expandedExp === i ? null : i)}
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 z-10 relative">
                  <div className="flex items-center gap-8">
                    <span className="text-xs font-mono opacity-30">0{i + 1}</span>
                    <div>
                      <h3 className="text-4xl md:text-6xl font-bold tracking-tighter group-hover:text-accent transition-colors">
                        {exp.company}
                      </h3>
                      <p className="text-lg font-display italic opacity-60">{exp.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono opacity-40">{exp.period}</span>
                    <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-accent group-hover:text-bg group-hover:border-accent transition-all">
                      {expandedExp === i ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </div>
                </div>

                <AnimatePresence>
                  {expandedExp === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-4">
                          <p className="text-xs font-mono uppercase tracking-widest opacity-40 mb-4">Location</p>
                          <p className="text-lg">{exp.location}</p>
                        </div>
                        <div className="lg:col-span-8 space-y-6">
                          {exp.highlights.map((item, j) => (
                            <p key={j} className="text-xl font-light leading-relaxed text-fg/80 hover:text-fg transition-colors">
                              {item}
                            </p>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-32 px-6 md:px-12 lg:px-24 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xs font-mono uppercase tracking-[0.5em] text-accent mb-24">03. Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/20">
            {RESUME_DATA.technicalSkills.map((cat, i) => (
              <div key={i} className="bg-bg p-12 hover:bg-accent/[0.02] transition-colors group border border-border/10">
                <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  {cat.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((skill, j) => (
                    <span key={j} className="text-xs font-mono px-3 py-1 border border-border rounded-full group-hover:border-accent/30 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-32 px-6 md:px-12 lg:px-24 border-t border-border bg-muted/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xs font-mono uppercase tracking-[0.5em] text-accent mb-24">04. Selected Projects</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {RESUME_DATA.projects.map((project, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="hover-card p-12 rounded-3xl flex flex-col justify-between min-h-[500px]"
              >
                <div>
                  <div className="flex justify-between items-start mb-12">
                    <h3 className="text-4xl font-bold tracking-tighter leading-none">{project.title}</h3>
                    <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-accent transition-colors">
                      <ArrowRight size={20} className="-rotate-45" />
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-12">
                    {project.tech.map((t, j) => (
                      <span key={j} className="text-[10px] font-mono uppercase border border-accent/20 px-2 py-1 rounded text-accent">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="space-y-4">
                    {project.description.map((desc, j) => (
                      <p key={j} className="text-lg font-light leading-relaxed opacity-70">{desc}</p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Contact */}
      <section className="py-32 px-6 md:px-12 lg:px-24 border-t border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <h2 className="text-xs font-mono uppercase tracking-[0.5em] text-accent mb-12">05. Education</h2>
            <div className="p-12 border border-border rounded-3xl bg-muted/20">
              <h3 className="text-3xl font-bold tracking-tighter mb-4">{RESUME_DATA.education.degree}</h3>
              <p className="text-xl font-display italic opacity-60">{RESUME_DATA.education.university}</p>
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <h2 className="text-xs font-mono uppercase tracking-[0.5em] text-accent mb-12">Get in touch</h2>
            <a 
              href={`mailto:${RESUME_DATA.contact.email}`}
              className="text-4xl md:text-6xl font-bold tracking-tighter hover:text-accent transition-colors break-all"
            >
              {RESUME_DATA.contact.email}
            </a>
            <div className="mt-12 flex gap-8">
              <a href={RESUME_DATA.contact.linkedin} className="text-xs font-mono uppercase tracking-widest hover:text-accent">LinkedIn</a>
              <a href={RESUME_DATA.contact.github} className="text-xs font-mono uppercase tracking-widest hover:text-accent">GitHub</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-border text-center">
        <p className="text-[10px] font-mono uppercase tracking-widest opacity-30">
          Precision Engineered Portfolio. © 2026
        </p>
      </footer>
    </div>
  );
}
