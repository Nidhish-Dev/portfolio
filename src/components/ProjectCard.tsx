// src/components/ProjectCard.tsx
"use client";

import React, { useState } from "react";
import { ExternalLink, Lock, Cpu, Server, Radio, Lightbulb, ShieldCheck, Terminal, Heart, Database, Settings } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  headline?: string;
  desc: string;
  role: string;
  tools: string[];
  link?: string;
  categories: string[];
  type: "oneiv" | "jivaroots" | "dini";
  locked?: boolean;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  // Console tab states
  const [activeTab, setActiveTab] = useState<string>(
    project.type === "oneiv" ? "pillars" : "features"
  );
  
  // Capability selection state for one IV
  const [selectedCapability, setSelectedCapability] = useState<string>("webdev");

  // one IV sub-items
  const oneIVPillars = [
    { num: "I", name: "Development", desc: "Modern applications and scalable systems built with precision.", icon: Cpu },
    { num: "II", name: "Infrastructure", desc: "Reliable cloud systems, deployment and performance optimization.", icon: Server },
    { num: "III", name: "Integration", desc: "Seamless APIs and backend connectivity across platforms.", icon: Radio },
    { num: "IV", name: "Innovation", desc: "Future-ready solutions using modern technologies.", icon: Lightbulb },
  ];

  const oneIVCapabilities = [
    { id: "webdev", label: "⌜ Web Development ⌞", desc: "Bespoke business websites, performance-tuned Startup MVPs, and precision portfolios." },
    { id: "backend", label: "⌜ Backend Systems ⌞", desc: "Complete product database and logic connectivity built with node/express and java." },
    { id: "api", label: "⌜ API Development ⌞", desc: "Robust endpoints, high-throughput pipelines and third-party API configurations." },
    { id: "cloud", label: "▲ Cloud Deployment", desc: "CI/CD orchestration, automated DevOps pipelines and server virtualization." },
    { id: "db", label: "⌜ Database Architecture ⌞", desc: "Strategic data modeling, migration services and query execution optimization." },
    { id: "devops", label: "⌜ DevOps Automation ⌞", desc: "Container workflows, cloud hosting infrastructure and domain network mapping." },
    { id: "ui", label: "⌜ UI Development ⌞", desc: "Pixel-perfect responsive page flows, micro-interactions and design systems." },
    { id: "mvp", label: "⌜ Startup MVPs ⌞", desc: "Rapid prototyping, structured logic and fast iteration cycles for startups." },
  ];

  // JivaRoots sub-items
  const jivaFeatures = [
    { num: "I", name: "Direct Connection", desc: "Direct farm-to-table platform connecting organic farms.", icon: Heart },
    { num: "II", name: "Secure Payments", desc: "Safe and reliable online transaction processing.", icon: ShieldCheck },
    { num: "III", name: "Live Inventory", desc: "Real-time stock tracking for organic supply chains.", icon: Settings },
    { num: "IV", name: "Product Catalog", desc: "Structured showcase of fresh farm products.", icon: Database },
  ];

  // Dini Micro-Finance features & architecture
  const diniFeatures = [
    { num: "I", name: "Customer Directory", desc: "Simple customer onboarding, profile creation, and KYC tracking.", icon: Heart },
    { num: "II", name: "Loan Portfolio", desc: "Interactive tracking of loan applications, disbursements, and payments.", icon: Settings },
    { num: "III", name: "Payment Ledger", desc: "ACID-compliant transaction logging for audits and accounting.", icon: Database },
    { num: "IV", name: "Analytics Dashboard", desc: "Dynamic reporting on loan metrics and microfinance health.", icon: ShieldCheck },
  ];

  const diniArch = [
    { num: "I", name: "High Concurrency", desc: "Optimized transaction handling for heavy concurrent traffic.", icon: Cpu },
    { num: "II", name: "Redis Caching", desc: "High-speed memory caching to minimize query latency.", icon: Server },
    { num: "III", name: "ACID Database", desc: "Structured, transactional data integrity on PostgreSQL.", icon: Database },
    { num: "IV", name: "Automated Audit", desc: "Real-time database validation and ledger monitoring.", icon: ShieldCheck },
  ];

  return (
    <div className="rounded-3xl border border-white/5 bg-[#0b1220]/90 md:bg-[#0b1220]/40 p-6 sm:p-8 lg:p-10 shadow-xl md:backdrop-blur-sm overflow-hidden w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: Unified Interactive Console Component */}
        <div className="lg:col-span-6 w-full">
          <div className="w-full rounded-2xl border border-white/5 bg-[#070d19] shadow-2xl overflow-hidden font-sans text-xs">
            
            {/* Console Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-slate-900/60 font-mono">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#10b981]/80" />
              </div>
              <span className="text-slate-500 text-[10px] flex items-center gap-2 select-none">
                <span>{project.id === "oneiv" ? "oneiv_console.sh" : project.id === "jivaroots" ? "jivaroots_terminal.sh" : "dini_terminal.sh"}</span>
                <span className="hidden sm:inline-block px-1 py-0.5 bg-slate-950/60 border border-white/5 rounded text-[8px] text-slate-600 font-normal">git:main@{project.id === "oneiv" ? "b92b2c6" : project.id === "jivaroots" ? "f8e7d2c" : "d9c8b7a"}</span>
              </span>
            </div>

            {/* Console Tabs */}
            <div className="flex border-b border-white/5 font-mono text-[10px] sm:text-xs">
              {project.type === "oneiv" ? (
                <>
                  <button
                    onClick={() => setActiveTab("pillars")}
                    className={`flex-1 py-2.5 text-center font-semibold border-r border-white/5 transition
                      ${activeTab === "pillars" ? "bg-slate-900/60 text-white font-bold" : "text-slate-500 hover:text-slate-300"}`}
                  >
                    Core Pillars
                  </button>
                  <button
                    onClick={() => setActiveTab("capabilities")}
                    className={`flex-1 py-2.5 text-center font-semibold transition
                      ${activeTab === "capabilities" ? "bg-slate-900/60 text-white font-bold" : "text-slate-500 hover:text-slate-300"}`}
                  >
                    Capabilities
                  </button>
                </>
              ) : project.type === "jivaroots" ? (
                <>
                  <button
                    onClick={() => setActiveTab("features")}
                    className={`flex-1 py-2.5 text-center font-semibold border-r border-white/5 transition
                      ${activeTab === "features" ? "bg-slate-900/60 text-white font-bold" : "text-slate-500 hover:text-slate-300"}`}
                  >
                    Core Features
                  </button>
                  <button
                    onClick={() => setActiveTab("architecture")}
                    className={`flex-1 py-2.5 text-center font-semibold transition
                      ${activeTab === "architecture" ? "bg-slate-900/60 text-white font-bold" : "text-slate-500 hover:text-slate-300"}`}
                  >
                    System Architecture
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => setActiveTab("features")}
                    className={`flex-1 py-2.5 text-center font-semibold border-r border-white/5 transition
                      ${activeTab === "features" ? "bg-slate-900/60 text-white font-bold" : "text-slate-500 hover:text-slate-300"}`}
                  >
                    Core Features
                  </button>
                  <button
                    onClick={() => setActiveTab("architecture")}
                    className={`flex-1 py-2.5 text-center font-semibold transition
                      ${activeTab === "architecture" ? "bg-slate-900/60 text-white font-bold" : "text-slate-500 hover:text-slate-300"}`}
                  >
                    System Architecture
                  </button>
                </>
              )}
            </div>

            {/* Console Content Display */}
            <div className="p-5 min-h-[220px] flex flex-col justify-between bg-slate-950/20">
              
              {/* Content Switcher */}
              {project.type === "oneiv" && (
                activeTab === "pillars" ? (
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold font-mono text-slate-500 uppercase tracking-widest block">STRUCTURAL INTEGRITY</span>
                      <h4 className="text-sm font-bold text-white">Our Core Pillars</h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      {oneIVPillars.map((p, pIdx) => (
                        <div key={pIdx} className="p-3 bg-[#0b1220]/60 border border-white/5 rounded-xl space-y-1 hover:border-slate-850 transition">
                          <div className="flex items-center gap-2">
                            <p.icon className="w-3.5 h-3.5 text-[#34d399]" />
                            <span className="font-mono text-[10px] font-bold text-slate-300">{p.num}. {p.name}</span>
                          </div>
                          <p className="text-[10px] text-slate-400 font-light leading-relaxed">{p.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3 flex flex-col justify-between h-full">
                    <div className="space-y-2.5">
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold font-mono text-slate-500 uppercase tracking-widest block">CAPABILITIES</span>
                        <h4 className="text-sm font-bold text-white">What We Build</h4>
                      </div>
                      <div className="grid grid-cols-2 gap-1.5">
                        {oneIVCapabilities.map((c) => (
                          <button
                            key={c.id}
                            onClick={() => setSelectedCapability(c.id)}
                            className={`px-3 py-1.5 text-left rounded-lg border font-mono text-[9px] sm:text-[10px] transition truncate
                              ${selectedCapability === c.id 
                                ? "border-[#10b981]/35 text-[#34d399] bg-[#10b981]/5 font-bold" 
                                : "border-white/5 text-slate-400 hover:text-slate-200 bg-white/5 hover:border-slate-800"}`}
                          >
                            {c.label}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="p-3 bg-slate-900/60 border border-white/5 rounded-xl min-h-[50px] flex items-center">
                      <p className="text-[10px] text-slate-300 font-mono leading-relaxed">
                        <span className="text-[#34d399] font-bold">➜ </span>
                        {oneIVCapabilities.find(c => c.id === selectedCapability)?.desc}
                      </p>
                    </div>
                  </div>
                )
              )}

              {project.type === "jivaroots" && (
                activeTab === "features" ? (
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold font-mono text-slate-500 uppercase tracking-widest block">PLATFORM FEATURES</span>
                      <h4 className="text-sm font-bold text-white">Core E-commerce Capabilities</h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      {jivaFeatures.map((f, fIdx) => (
                        <div key={fIdx} className="p-3 bg-[#0b1220]/60 border border-white/5 rounded-xl space-y-1 hover:border-slate-850 transition">
                          <div className="flex items-center gap-2">
                            <f.icon className="w-3.5 h-3.5 text-[#34d399]" />
                            <span className="font-mono text-[10px] font-bold text-slate-300">{f.num}. {f.name}</span>
                          </div>
                          <p className="text-[10px] text-slate-400 font-light leading-relaxed">{f.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3 font-mono">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">SYSTEM ARCHITECTURE</span>
                    <h4 className="text-sm font-bold text-white font-sans">Tech Blueprint</h4>
                    <div className="space-y-2 text-slate-400 leading-relaxed font-light mt-2">
                      <div className="flex items-start gap-2">
                        <span className="text-[#34d399] font-bold">➜</span>
                        <p><span className="text-white">Next.js Frontend:</span> SSR integration optimized for lightning-fast product search indexing.</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-[#34d399] font-bold">➜</span>
                        <p><span className="text-white">API Gateway:</span> Express.js backend microservices handles generic e-commerce actions.</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-[#34d399] font-bold">➜</span>
                        <p><span className="text-white">Data Store:</span> MongoDB database structures product catalogs and user accounts.</p>
                      </div>
                    </div>
                  </div>
                )
              )}

              {project.type === "dini" && (
                activeTab === "features" ? (
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold font-mono text-slate-500 uppercase tracking-widest block">SYSTEM FEATURES</span>
                      <h4 className="text-sm font-bold text-white">Microfinance Capabilities</h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      {diniFeatures.map((f, fIdx) => (
                        <div key={fIdx} className="p-3 bg-[#0b1220]/60 border border-white/5 rounded-xl space-y-1 hover:border-slate-850 transition">
                          <div className="flex items-center gap-2">
                            <f.icon className="w-3.5 h-3.5 text-[#34d399]" />
                            <span className="font-mono text-[10px] font-bold text-slate-300">{f.num}. {f.name}</span>
                          </div>
                          <p className="text-[10px] text-slate-400 font-light leading-relaxed">{f.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold font-mono text-slate-500 uppercase tracking-widest block">LEDGER INTEGRITY</span>
                      <h4 className="text-sm font-bold text-white">System Architecture</h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      {diniArch.map((a, aIdx) => (
                        <div key={aIdx} className="p-3 bg-[#0b1220]/60 border border-white/5 rounded-xl space-y-1 hover:border-slate-850 transition">
                          <div className="flex items-center gap-2">
                            <a.icon className="w-3.5 h-3.5 text-[#34d399]" />
                            <span className="font-mono text-[10px] font-bold text-slate-300">{a.num}. {a.name}</span>
                          </div>
                          <p className="text-[10px] text-slate-400 font-light leading-relaxed">{a.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              )}

              {/* Board / Scale Sub-banner */}
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <div className="flex items-center gap-1.5">
                  {project.id === "jivaroots" ? (
                    <Terminal className="w-3.5 h-3.5 text-[#34d399]" />
                  ) : (
                    <ShieldCheck className="w-3.5 h-3.5 text-[#34d399]" />
                  )}
                  <span className="font-bold text-slate-400 uppercase tracking-wide">ENGINEERED FOR SCALE</span>
                </div>
                <span className="text-[#34d399] font-semibold text-[8px] sm:text-[9px]">RELIABILITY. SPEED. SECURITY.</span>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Info & Details Block */}
        <div className="lg:col-span-6 space-y-6 flex flex-col justify-between h-full">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold tracking-widest text-[#34d399] uppercase font-mono">
                {project.subtitle}
              </p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition flex items-center gap-1 text-[10px] font-mono hover:underline"
                >
                  <span>{project.id === "oneiv" ? "oneiv.in" : project.id === "jivaroots" ? "jivaroots.com" : ""}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {project.title}
            </h3>

            {project.headline && (
              <p className="text-xs font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 uppercase tracking-wider font-mono">
                {project.headline}
              </p>
            )}
            
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
              {project.desc}
            </p>
          </div>

          {/* Tools & CTA */}
          <div className="space-y-4 pt-4 border-t border-white/5">
            <div className="flex flex-wrap gap-1.5">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-2.5 py-1 bg-slate-900/60 text-slate-300 border border-white/5 rounded text-[10px] sm:text-xs font-medium font-mono"
                >
                  {tool}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-slate-500 text-xs font-mono">
                Role: {project.role}
              </span>
              
              {project.locked ? (
                <div className="flex items-center gap-1 text-slate-500 text-xs font-mono">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Internal Architecture</span>
                </div>
              ) : project.id === "oneiv" ? (
                <div className="flex items-center gap-2.5">
                  <a
                    href="https://oneiv.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1.5 bg-[#3b82f6] hover:bg-blue-500 text-white text-[10px] font-bold font-mono tracking-wider rounded-lg uppercase transition-all shadow-md"
                  >
                    Explore Platform
                  </a>
                  <button
                    onClick={() => setActiveTab("capabilities")}
                    className="px-4 py-1.5 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-[10px] font-bold font-mono tracking-wider rounded-lg uppercase transition"
                  >
                    Explore Services
                  </button>
                </div>
              ) : (
                project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-xs font-bold font-mono tracking-wide uppercase flex items-center gap-1 transition-all duration-300"
                  >
                    Explore Platform ➜
                  </a>
                )
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
