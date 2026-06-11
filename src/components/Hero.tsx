// src/components/Hero.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Download, ChevronRight, Check } from "lucide-react";

export default function Hero() {
  const [terminalText, setTerminalText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen pt-24 pb-16 flex flex-col justify-center overflow-x-hidden bg-[#030712] text-slate-100 font-sans">
      {/* Background styling - ambient grids and glowing orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="hidden md:block absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="hidden md:block absolute top-1/2 right-10 w-[400px] h-[400px] rounded-full bg-emerald-500/5 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 w-full flex flex-col gap-24">
        
        {/* Hero Row: Text & Terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Copy */}
          <div 
            className="lg:col-span-7 space-y-6"
          >
            <p className="text-xs sm:text-sm font-bold tracking-widest text-[#34D399] uppercase font-mono">
              SOFTWARE ENGINEER
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
              Building the digital architecture of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">tomorrow.</span>
            </h1>
            <p className="text-slate-400 text-sm sm:text-base lg:text-lg max-w-2xl font-light leading-relaxed">
              Smart India Hackathon Nationalist and ex Application Developer Intern specializing in high-performance distributed systems, modern frontend architectures, and scalable backend infrastructure.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/projects"
                className="group px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold tracking-wider rounded-full shadow-lg hover:shadow-blue-500/20 transition-all duration-300 flex items-center gap-2 uppercase"
              >
                View Projects
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-slate-700 hover:border-slate-500 hover:bg-white/5 text-slate-300 hover:text-white text-xs sm:text-sm font-bold tracking-wider rounded-full transition-all duration-300 flex items-center gap-2 uppercase"
              >
                Download Resume
                <Download className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: High-Tech Terminal Card */}
          <div
            className="lg:col-span-5"
          >
            <div className="w-full rounded-2xl border border-white/5 bg-[#0b1220]/95 md:bg-[#0b1220]/80 shadow-2xl md:backdrop-blur-sm overflow-hidden font-mono text-xs sm:text-sm">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/5 bg-slate-900/60">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ef4444]/80" />
                  <div className="w-3 h-3 rounded-full bg-[#f59e0b]/80" />
                  <div className="w-3 h-3 rounded-full bg-[#10b981]/80" />
                </div>
                <div className="text-slate-500 text-[10px] sm:text-xs">bash</div>
              </div>
              
              {/* Terminal Body */}
              <div className="p-6 space-y-4 min-h-[200px]">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[#34D399]">➜</span>
                    <span className="text-slate-300 font-semibold">whoami</span>
                  </div>
                  <div className="text-slate-400 pl-4">nidhish_rathore</div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[#34D399]">➜</span>
                    <span className="text-slate-300 font-semibold">state --status</span>
                  </div>
                  <div className="text-slate-400 pl-4 space-y-0.5">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[#34D399]">•</span> Remote, India (IST)
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[#34D399]">•</span> AWS, Docker, Kubernetes
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[#34D399]">•</span> Distributed Systems
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[#34D399]">➜</span>
                    <span className="text-slate-300 font-semibold">status</span>
                  </div>
                  <div className="text-slate-400 pl-4 flex items-center">
                    <span>_Awaiting the next architectural challenge.</span>
                    <span className={`${cursorVisible ? "opacity-100" : "opacity-0"} text-[#34D399] font-bold ml-0.5`}>█</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* AWS Solutions Architecture Certified Sub-section */}
        <div 
          className="rounded-3xl border border-white/5 bg-[#0b1220]/90 md:bg-[#0b1220]/40 p-8 sm:p-10 lg:p-12 shadow-xl md:backdrop-blur-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left side text */}
            <div className="lg:col-span-7 space-y-6">
              <p className="text-xs font-bold tracking-widest text-blue-400 uppercase font-mono">
                VALIDATED EXPERTISE
              </p>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                AWS Solutions Architecture Certified
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                Proven capability in designing and deploying scalable, highly-available, and fault-tolerant systems on AWS. Mastery of infrastructure-as-code, serverless patterns, and cloud security protocols.
              </p>
              
              <div className="flex items-center gap-2 text-[#34D399] text-xs font-mono">
                <div className="p-1 rounded-full bg-[#10b981]/10 border border-[#10b981]/20">
                  <Check className="w-3 h-3" />
                </div>
                <span>VERIFIED ON AWS</span>
              </div>
            </div>

            {/* Right side Certificate visual */}
            <div className="lg:col-span-5 flex justify-center">
              <div 
                className="relative max-w-sm sm:max-w-md rounded-2xl overflow-hidden shadow-2xl border border-white/10 group cursor-pointer bg-slate-900 transition-all duration-350 md:hover:scale-[1.03] md:hover:rotate-1"
                onClick={() => {
                  window.open("/certs/aws.png", "_blank");
                }}
              >
                <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <img 
                  src="/certs/aws.png" 
                  alt="AWS Certification" 
                  className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}