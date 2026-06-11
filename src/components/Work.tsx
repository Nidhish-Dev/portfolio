// src/components/Work.tsx
"use client";

import React, { useState } from "react";
import ProjectCard, { Project } from "./ProjectCard";

export default function Work() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { label: "All Projects", id: "all" },
    { label: "Full Stack", id: "fullstack" },
    { label: "Next.js", id: "nextjs" },
    { label: "Finance", id: "finance" },
  ];

  // project data definitions
  const projects: Project[] = [
    {
      id: "oneiv",
      title: "one IV",
      subtitle: "UNIFIED DIGITAL PLATFORM",
      headline: "ONE PLATFORM, FOUR PILLARS, INFINITE POSSIBILITIES",
      desc: "one IV powers modern digital products through development, infrastructure, integration and innovation. We build the architecture that powers modern systems.",
      role: "Platform Architect & Lead Developer",
      tools: ["Next.js", "Node.js", "Express", "MongoDB", "Tailwind", "Vercel", "Hostinger"],
      link: "https://oneiv.in",
      categories: ["fullstack", "nextjs"],
      type: "oneiv",
    },
    {
      id: "jivaroots",
      title: "JivaRoots",
      subtitle: "AGRICULTURE // E-COMMERCE",
      desc: "Developed a comprehensive direct-to-consumer platform for organic produce, optimizing the farm-to-table supply chain. Focused on high-performance page loads and seamless inventory management.",
      role: "Full-Stack Developer",
      tools: ["Next.js", "Node.js", "Express", "Firebase", "Tailwind", "Vercel", "Hostinger"],
      link: "https://jivaroots.com",
      categories: ["fullstack", "nextjs"],
      type: "jivaroots",
    },
    {
      id: "dinimicrofinance",
      title: "Dini Micro Finance",
      subtitle: "FINTECH // ARCHITECTURE",
      desc: "Architecture design for a micro-finance system focusing on high-concurrency ledger processing and real-time transaction monitoring. Built with strict security protocols.",
      role: "System Architect",
      tools: ["Next.js", "React", "Node.js", "Express", "MongoDB", "Firebase", "Tailwind", "Vercel", "Hostinger"],
      categories: ["finance", "fullstack"],
      type: "dini",
      locked: true,
    },
  ];

  const filteredProjects = projects.filter((p) =>
    activeFilter === "all" ? true : p.categories.includes(activeFilter)
  );

  return (
    <section id="projects" className="relative min-h-screen py-24 bg-[#030712] text-slate-100 font-sans border-t border-white/5 animate-page-open">
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 w-full space-y-16">
        
        {/* Header Section */}
        <div className="space-y-4">
          <p className="text-xs sm:text-sm font-bold tracking-widest text-[#34D399] uppercase font-mono">
            01 // SELECTED_WORKS
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white max-w-4xl">
            Engineering scalable solutions for the next-generation of digital infrastructure.
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2.5">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 uppercase
                ${activeFilter === filter.id
                  ? "bg-slate-100 text-slate-900 shadow-md"
                  : "bg-slate-900 text-slate-400 border border-white/5 hover:text-white hover:border-slate-700"}`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects List */}
        <div className="space-y-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex w-full"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

      </div>

      {/* Footer from Screenshot 4 (Modified to Nidhish Rathore) */}
      <footer className="pt-16 mt-16 border-t border-slate-900 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-xs text-slate-500 font-mono max-w-7xl mx-auto px-6 lg:px-16 w-full">
        <div className="space-y-1 md:space-y-2">
          <span className="text-slate-400 font-bold tracking-widest text-[10px]">Nidhish Rathore</span>
          <p className="font-sans font-light text-slate-500 leading-relaxed max-w-sm">
            Building digital structures that stand the test of time. Focused on clean code, robust architecture, and user-centric design.
          </p>
          <span className="block pt-1">© 2026 DEPLOY_READY. STABLE_BUILD_V2</span>
        </div>

        <div className="flex flex-col md:items-end gap-2 md:gap-3">
          <div className="flex items-center gap-4 text-slate-400 font-sans font-medium">
            <a href="https://github.com/Nidhish-Dev" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">GitHub</a>
            <a href="https://www.linkedin.com/in/nidhish-rathore-b2b9bb325/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">LinkedIn</a>
            <a href="https://x.com/dev_nidhish" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Twitter</a>
            <a href="mailto:nr.nidhish@gmail.com" className="hover:text-white transition">Contact</a>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-400 text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>System Status: Optimal</span>
          </div>
        </div>
      </footer>

    </section>
  );
}
