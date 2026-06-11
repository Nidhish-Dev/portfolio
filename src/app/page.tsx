// src/app/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import { ExternalLink, ChevronRight, Download, Github, Code, Layers, Cpu, Cloud, Globe, Database, ShieldCheck, ArrowUpRight, Heart, Settings, Server } from "lucide-react";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="bg-[#030712] text-slate-100 min-h-screen font-sans overflow-hidden animate-page-open">
      
      {/* 1. Hero & AWS Certification Banners (Imported from Hero.tsx) */}
      <Hero />

      {/* 2. Selected Works Preview */}
      <section className="relative py-24 border-t border-white/5 bg-[#030712]">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 w-full space-y-16">
          <div className="space-y-4">
            <p className="text-xs sm:text-sm font-bold tracking-widest text-[#34D399] uppercase font-mono">
              SELECTED WORKS
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Building Impactful Solutions
            </h2>
          </div>

          {/* Grid for Selected Works Preview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Card 1: one IV */}
            <div 
              className="rounded-3xl border border-white/5 bg-[#0b1220]/40 overflow-hidden shadow-xl flex flex-col justify-between group transition-all duration-300 md:hover:-translate-y-1 md:hover:border-slate-700/50 hover:bg-[#0b1220]/60"
            >
              <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 bg-[#10b981]/5 text-[9px] font-bold font-mono tracking-wider text-[#34d399] rounded border border-[#10b981]/25 uppercase">
                      UNIFIED DIGITAL PLATFORM
                    </span>
                    <a
                      href="https://oneiv.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-white transition flex items-center gap-1 text-[10px] font-mono hover:underline"
                    >
                      <span>oneiv.in</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">one IV</h3>
                  <p className="text-xs font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 uppercase tracking-wider font-mono">
                    ONE PLATFORM, FOUR PILLARS, INFINITE POSSIBILITIES
                  </p>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                    one IV powers modern digital products through development, infrastructure, integration and innovation. We build the architecture that powers modern systems.
                  </p>
                </div>
                
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500 mt-4">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#34d399]" />
                    <span className="font-bold text-slate-400 uppercase">ENGINEERED FOR SCALE</span>
                  </div>
                  <span className="text-[#34d399] font-semibold">RELIABILITY. SPEED. SECURITY.</span>
                </div>
              </div>
              
              <div className="p-6 bg-slate-900/40 border-t border-white/5 flex items-center justify-between">
                <a 
                  href="https://oneiv.in" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 text-xs font-bold font-mono uppercase"
                >
                  Explore Platform ➜
                </a>
                <Link 
                  href="/projects" 
                  className="text-slate-400 hover:text-white text-xs font-bold font-mono uppercase"
                >
                  Explore Services ➜
                </Link>
              </div>
            </div>

            {/* Card 2: JivaRoots */}
            <div 
              className="rounded-3xl border border-white/5 bg-[#0b1220]/40 p-6 sm:p-8 flex flex-col justify-between shadow-xl transition-all duration-300 md:hover:-translate-y-1 md:hover:border-slate-700/50 hover:bg-[#0b1220]/60"
            >
              <div className="space-y-4">
                {/* Core Features mockup terminal (No photo, details from projects page) */}
                <div className="w-full rounded-xl border border-white/5 bg-slate-950/40 p-4 mb-4 text-[10px] sm:text-xs font-mono space-y-1.5 select-none">
                  <div className="text-slate-500 font-bold uppercase tracking-wide text-[9px] mb-2">Core Features</div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <span className="text-[#34d399] font-bold">▪</span> Direct Farm Connection
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <span className="text-[#34d399] font-bold">▪</span> Secure Payments Checkout
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <span className="text-[#34d399] font-bold">▪</span> Live Inventory Tracking
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <span className="text-[#34d399] font-bold">▪</span> Product Catalog Showcase
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-bold font-mono text-[#34d399] uppercase">AGRICULTURE // E-COMMERCE</span>
                  <h3 className="text-xl sm:text-2xl font-black text-white">JivaRoots</h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                    A comprehensive farm-to-table platform connecting organic farmers directly with consumers. Built with a focus on supply chain transparency and minimalist user experience.
                  </p>
                </div>
              </div>
              
              <Link 
                href="/projects" 
                className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 text-xs font-bold font-mono uppercase pt-4"
              >
                Explore Architecture ➜
              </Link>
            </div>

            {/* Card 3: Dini Micro-Finance */}
            <div 
              className="rounded-3xl border border-white/5 bg-[#0b1220]/40 p-6 sm:p-8 flex flex-col justify-between shadow-xl transition-all duration-300 md:hover:-translate-y-1 md:hover:border-slate-700/50 hover:bg-[#0b1220]/60"
            >
              <div className="space-y-4">
                {/* Core Features */}
                <div className="w-full rounded-xl border border-white/5 bg-slate-950/40 p-4 mb-4 text-[10px] sm:text-xs font-mono space-y-1.5 select-none">
                  <div className="text-slate-500 font-bold uppercase tracking-wide text-[9px] mb-2">Core Features</div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <span className="text-[#34d399] font-bold">▪</span> Customer Directory & KYC
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <span className="text-[#34d399] font-bold">▪</span> Loan Portfolio Tracking
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <span className="text-[#34d399] font-bold">▪</span> Transaction Ledger Logging
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <span className="text-[#34d399] font-bold">▪</span> Loan Health Analytics
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-bold font-mono text-[#34d399] uppercase">FINTECH // ARCHITECTURE</span>
                  <h3 className="text-xl sm:text-2xl font-black text-white">Dini Micro-Finance</h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                    Scalable micro-lending platform with automated risk assessment and real-time transaction processing.
                  </p>
                </div>
              </div>
              
              <Link 
                href="/projects" 
                className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 text-xs font-bold font-mono uppercase pt-4"
              >
                Explore Architecture ➜
              </Link>
            </div>

            {/* Card 4: Interested in Code (Github Card) */}
            <div 
              className="rounded-3xl border border-white/5 bg-[#0b1220]/40 p-6 sm:p-8 flex flex-col justify-between shadow-xl border-dashed hover:border-slate-800 transition-all duration-300 md:hover:-translate-y-1 md:hover:border-slate-700/50 hover:bg-[#0b1220]/60"
            >
              <div className="space-y-4 my-auto text-center py-6">
                <div className="p-4 bg-slate-900/60 rounded-full w-fit mx-auto border border-white/5 text-slate-400">
                  <Github className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">Interested in the code?</h3>
                <p className="text-slate-400 text-xs sm:text-sm max-w-sm mx-auto leading-relaxed font-light">
                  I maintain several open-source repositories and utility libraries. Check my Github repositories.
                </p>
              </div>

              <a 
                href="https://github.com/Nidhish-Dev"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-slate-900/60 hover:bg-white/5 border border-slate-800 hover:border-slate-700 rounded-xl text-slate-300 hover:text-white text-xs font-bold tracking-wider font-mono uppercase flex items-center justify-center gap-2 transition"
              >
                <span>Check My GitHub Repositories</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Tools for the Trade (Matches Image 3 layout, populated with About page combination) */}
      <section className="relative py-24 border-t border-white/5 bg-[#030712]">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-500/5 blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 w-full space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left side info */}
            <div className="lg:col-span-5 space-y-4">
              <p className="text-xs sm:text-sm font-bold tracking-widest text-[#34D399] uppercase font-mono">
                TECH STACK
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Tools for the trade.
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light max-w-md">
                A selection of technologies from my core competencies, optimized for building high-performance, scalable developer ecosystems.
              </p>
            </div>

            {/* Right side Grid - Combination of About page tech stacks */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "Java", icon: Cpu },
                { name: "Next.js", icon: Globe },
                { name: "React.js", icon: Code },
                { name: "Node.js", icon: Cpu },
                { name: "TypeScript", icon: Code },
                { name: "Spring Boot", icon: Server },
                { name: "MongoDB", icon: Database },
                { name: "Tailwind", icon: Layers },
                { name: "Firebase", icon: Cloud },
                { name: "Supabase", icon: Database },
                { name: "GitHub", icon: Github },
                { name: "Figma", icon: Layers },
              ].map((tool, index) => (
                <div 
                  key={index}
                  className="rounded-xl border border-white/5 bg-[#0b1220]/40 p-5 flex flex-col items-center justify-center gap-3 shadow-md hover:border-slate-800 transition duration-300 text-center"
                >
                  <tool.icon className="w-6 h-6 text-slate-400 group-hover:text-[#34d399]" />
                  <span className="text-[10px] font-bold font-mono text-slate-300 uppercase tracking-wider">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 4. Footer (Matches Screenshot 3 - Modified to Nidhish Rathore) */}
      <footer className="pt-16 pb-8 border-t border-slate-900 bg-[#030712]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 w-full flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-xs text-slate-500 font-mono">
          <div className="space-y-1 md:space-y-2">
            <span className="text-slate-400 font-bold tracking-widest text-[10px]">Nidhish Rathore</span>
            <p className="font-sans font-light text-slate-500 leading-relaxed max-w-xs">
              Crafting elegant solutions to complex digital challenges.
            </p>
          </div>

          <div className="flex flex-col md:items-end gap-2 md:gap-3">
            <div className="flex items-center gap-4 text-slate-400 font-sans font-medium">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition uppercase">Resume</a>
              <a href="https://github.com/Nidhish-Dev" target="_blank" rel="noopener noreferrer" className="hover:text-white transition uppercase">GitHub</a>
              <a href="mailto:nr.nidhish@gmail.com" className="hover:text-white transition uppercase">Contact</a>
            </div>
            <span>© 2026 DEPLOY_READY. STABLE_BUILD_V2</span>
          </div>
        </div>
      </footer>

    </div>
  );
}