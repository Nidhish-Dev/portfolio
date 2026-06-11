// src/components/About.tsx
"use client";

import React, { useState } from "react";
import { Mail, Languages, Layers, Cpu, Github, Linkedin } from "lucide-react";

export default function About() {
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <section id="about" className="relative min-h-screen py-24 bg-[#030712] text-slate-100 font-sans border-t border-white/5 overflow-x-hidden animate-page-open">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="hidden md:block absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[120px]" />
        <div className="hidden md:block absolute top-10 left-10 w-[400px] h-[400px] rounded-full bg-indigo-500/5 blur-[100px]" />
      </div>

      {/* Main Grid containing Vertical Text & Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 w-full flex flex-col gap-24">
        
        {/* Row 1: About text and Grayscale Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative">
          
          {/* Vertical Label (only visible on large screens) */}
          <div className="hidden lg:block absolute -left-16 top-12 origin-top-left -rotate-90 select-none opacity-20 pointer-events-none">
            <span className="text-[10px] font-bold font-mono tracking-[0.4em] text-slate-400 uppercase">
              Nidhish Rathore
            </span>
          </div>

          {/* Left Column: Heading & Paragraphs */}
          <div className="lg:col-span-7 space-y-6 lg:pl-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Crafting digital architecture with precision.
            </h2>
            <div className="text-slate-400 text-sm sm:text-base font-light leading-relaxed space-y-4">
              <p>
                I am <span className="text-white font-medium">Nidhish Rathore</span>, a software engineer obsessed with crafting highly optimized web applications and solving complex algorithmic challenges. With a solid foundation in Data Structures and Algorithms (DSA) and a passion for full-stack web development, I build fast, scalable, and responsive digital products that combine elegant backend logic with seamless user experiences.
              </p>
              <p>
                From design system implementation to database query optimization, I approach software engineering with a problem-solving mindset. For me, clean code and robust architecture are key to building systems that scale.
              </p>
            </div>
          </div>

          {/* Right Column: Grayscale portrait */}
          <div className="lg:col-span-5 flex justify-center">
            <div 
              className="relative max-w-xs sm:max-w-sm rounded-3xl overflow-hidden shadow-2xl border border-white/5 aspect-[4/5] bg-slate-900 transition-all duration-500 md:hover:scale-[1.02]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-40 z-10 pointer-events-none" />
              <img 
                src="/img.jpg" 
                alt="Nidhish Rathore" 
                className="w-full h-full object-cover filter grayscale contrast-110 brightness-95 scale-102 hover:scale-100 transition-all duration-700"
              />
            </div>
          </div>

        </div>

        {/* Row 2: Technical Competencies (TOOLBELT) */}
        <div className="space-y-8 pt-8 border-t border-slate-900">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div className="space-y-2">
              <p className="text-xs font-bold tracking-widest text-[#34D399] uppercase font-mono">
                TOOLBELT
              </p>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Technical Competencies
              </h3>
            </div>
            <p className="text-slate-500 text-[10px] sm:text-xs font-mono">
              {"Extracted from {{DATA:DOCUMENT:DOCUMENT_1}} – Current stable build stack."}
            </p>
          </div>

          {/* Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Languages */}
            <div 
              className="rounded-2xl border border-white/5 bg-[#0b1220]/90 md:bg-[#0b1220]/40 p-6 space-y-6 shadow-xl md:backdrop-blur-sm transition-all duration-300 md:hover:-translate-y-1 md:hover:border-slate-700/50 hover:bg-[#0b1220]/60"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-blue-500/10 border border-blue-500/20 rounded-xl text-blue-400">
                  <Languages className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold font-mono text-slate-300">Languages</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Java", "C", "C++", "Python", "JavaScript", "TypeScript", "HTML", "CSS"].map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 text-xs font-semibold font-mono text-[#34D399] bg-[#10b981]/5 border border-[#10b981]/15 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Card 2: Frameworks & Libs */}
            <div 
              className="rounded-2xl border border-white/5 bg-[#0b1220]/90 md:bg-[#0b1220]/40 p-6 space-y-6 shadow-xl md:backdrop-blur-sm transition-all duration-300 md:hover:-translate-y-1 md:hover:border-slate-700/50 hover:bg-[#0b1220]/60"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-blue-500/10 border border-blue-500/20 rounded-xl text-blue-400">
                  <Layers className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold font-mono text-slate-300">Frameworks & Libs</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {["React.js", "Next.js", "Tailwind", "Node.js", "Express", "Spring Boot"].map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 text-xs font-semibold font-mono text-[#34D399] bg-[#10b981]/5 border border-[#10b981]/15 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Card 3: Tools & Databases */}
            <div 
              className="rounded-2xl border border-white/5 bg-[#0b1220]/90 md:bg-[#0b1220]/40 p-6 space-y-6 shadow-xl md:backdrop-blur-sm transition-all duration-300 md:hover:-translate-y-1 md:hover:border-slate-700/50 hover:bg-[#0b1220]/60"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-blue-500/10 border border-blue-500/20 rounded-xl text-blue-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold font-mono text-slate-300">Tools & Databases</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {["MongoDB", "Firebase", "Supabase", "Git", "GitHub", "VS Code", "IntelliJ IDEA", "Xcode", "Postman", "Android Studio", "Photoshop", "Figma"].map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 text-xs font-semibold font-mono text-[#34D399] bg-[#10b981]/5 border border-[#10b981]/15 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Row 3: Let's Connect & contact.sh JSON terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8 border-t border-slate-900 items-center">
          
          {/* Left Column: Heading & Social Links */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Let's build something <span className="italic font-serif text-[#34D399]">extraordinary</span> together.
            </h3>
            
            <p className="text-slate-400 text-sm sm:text-base font-light max-w-lg leading-relaxed">
              Open for high-impact roles, technical consulting, and architectural deep-dives. Let's start the conversation.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="mailto:nr.nidhish@gmail.com"
                className="px-6 py-3 bg-[#3b82f6] hover:bg-blue-500 text-white text-xs sm:text-sm font-bold tracking-wider rounded-full shadow-lg hover:shadow-blue-500/20 transition-all duration-300 flex items-center gap-2 uppercase"
              >
                <Mail className="w-4 h-4" />
                <span>E-mail Me</span>
              </a>

              <a
                href="https://github.com/Nidhish-Dev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-900/60 hover:bg-white/5 border border-white/5 hover:border-slate-700 text-slate-400 hover:text-white rounded-full transition duration-300 flex items-center justify-center"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/nidhish-rathore-b2b9bb325/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-900/60 hover:bg-white/5 border border-white/5 hover:border-slate-700 text-slate-400 hover:text-white rounded-full transition duration-300 flex items-center justify-center"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href="https://x.com/dev_nidhish"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-900/60 hover:bg-white/5 border border-white/5 hover:border-slate-700 text-slate-400 hover:text-white rounded-full transition duration-300 flex items-center justify-center"
                aria-label="X Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Bash contact.sh terminal */}
          <div className="lg:col-span-5">
            <div className="w-full rounded-2xl border border-white/5 bg-[#0b1220]/80 shadow-2xl overflow-hidden font-mono text-xs">
              
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-slate-900/60">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#10b981]/80" />
                </div>
                <div className="text-slate-500 text-[10px] sm:text-xs">bash – contact.sh</div>
              </div>
              
              {/* Terminal Body */}
              <div className="p-5 space-y-4">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[#34D399]">➜</span>
                    <span className="text-slate-300 font-semibold">whoami</span>
                  </div>
                  <div className="text-slate-400 pl-4">Nidhish Rathore // Full Stack Architect</div>
                </div>

                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[#34D399]">➜</span>
                    <span className="text-slate-300 font-semibold">cat contact_details.json</span>
                  </div>
                  <div className="text-slate-400 pl-4 font-light leading-relaxed">
                    {"{"}
                    <div className="pl-4">
                      <span className="text-slate-500">"email":</span> <span className="text-emerald-400 cursor-pointer hover:underline" onClick={() => copyToClipboard("nr.nidhish@gmail.com")}>"nr.nidhish@gmail.com"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-500">"phone":</span> <span className="text-emerald-400 cursor-pointer hover:underline" onClick={() => copyToClipboard("+918708295706")}>"+91 (870) 829-5706"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-500">"location":</span> <span className="text-slate-300">"Global / Remote"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-500">"github":</span> <span className="text-slate-300">"github.com/Nidhish-Dev"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-500">"status":</span> <span className="text-slate-300">"Available for projects"</span>
                    </div>
                    {"}"}
                    {copySuccess && (
                      <span className="text-blue-400 text-[10px] block mt-1 transition animate-pulse">// Copied item!</span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[#34D399]">➜</span>
                  <span className="text-slate-500">█</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Footer */}
        <footer className="pt-16 pb-4 border-t border-slate-900 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-xs text-slate-500 font-mono">
          <div className="space-y-1 md:space-y-2">
            <span className="text-slate-400 font-bold tracking-widest text-[10px]">Nidhish Rathore</span>
            <p className="font-sans font-light text-slate-500 leading-relaxed max-w-xs">
              Engineering excellence through precision architecture and modern digital solutions.
            </p>
          </div>

          <div className="flex flex-col md:items-end gap-2 md:gap-3">
            <div className="flex items-center gap-4 text-slate-400 font-sans font-medium">
              <a href="https://github.com/Nidhish-Dev" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">GitHub</a>
              <a href="https://www.linkedin.com/in/nidhish-rathore-b2b9bb325/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">LinkedIn</a>
              <a href="https://x.com/dev_nidhish" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Twitter</a>
              <a href="mailto:nr.nidhish@gmail.com" className="hover:text-white transition">Contact</a>
            </div>
            <span>© 2026 DEPLOY_READY. STABLE_BUILD_V2</span>
          </div>
        </footer>

      </div>
    </section>
  );
}