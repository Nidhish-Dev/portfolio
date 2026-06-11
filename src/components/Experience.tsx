// src/components/Experience.tsx
"use client";

import React, { useState } from "react";
import { MapPin, Calendar, FileText, GraduationCap, X } from "lucide-react";

export default function Experience() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <section id="experience" className="relative min-h-screen py-24 bg-[#030712] text-slate-100 font-sans border-t border-white/5 animate-page-open">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="hidden md:block absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-emerald-500/5 blur-[120px]" />
        <div className="hidden md:block absolute bottom-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 w-full space-y-20">
        
        {/* Section Header */}
        <div className="space-y-4">
          <p className="text-xs sm:text-sm font-bold tracking-widest text-[#34D399] uppercase font-mono">
            CAREER SEQUENCE
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Experience & Credentials
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-3xl font-light leading-relaxed">
            A documented journey through technical architecture, software engineering internships, and academic excellence. Focused on building scalable, high-performance systems.
          </p>
        </div>

        {/* Section 1: Startups */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-4">
          
          {/* Left Column: Title & Info */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Startups
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
              Entrepreneurial ventures, system designs, and full-stack product architecture.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-slate-400 text-xs font-mono">
                <MapPin className="w-4 h-4 text-[#34D399]" />
                <span>Delhi, India (Hybrid)</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-xs font-mono">
                <Calendar className="w-4 h-4 text-[#34D399]" />
                <span>Founder / Active</span>
              </div>
            </div>
          </div>

          {/* Right Column: Timeline */}
          <div className="lg:col-span-8 relative border-l-2 border-slate-800 pl-8 ml-4 space-y-12">
            
            {/* Timeline Node - one IV */}
            <div className="relative">
              <div className="absolute -left-[41px] top-1.5 w-[18px] h-[18px] rounded-full bg-emerald-500 border-4 border-[#030712] shadow-lg" />
              
              <div className="space-y-4">
                <div className="space-y-1">
                  <p className="text-[10px] sm:text-xs font-bold font-mono text-slate-500 uppercase">
                    March 2026 – Present
                  </p>
                  <h4 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    Founder
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold text-[#34D399] font-mono">
                    one IV <span className="text-slate-600">•</span> Delhi, India (Hybrid)
                  </p>
                </div>

                <div className="space-y-3 pl-1 text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1 select-none">▪</span>
                    <p>Founded and lead one IV, coordinating full-stack digital product design, backend logic, and scalable deployments.</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {["FOUNDER", "SYSTEMS ARCHITECTURE"].map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 text-[9px] sm:text-[10px] font-bold font-mono text-[#34D399] bg-[#10b981]/5 border border-[#10b981]/25 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Section 2: Internships */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8 border-t border-slate-900">
          
          {/* Left Column: Title & Info */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Internships
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
              Industry experience in technical environments, delivering production-grade code.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-slate-400 text-xs font-mono">
                <MapPin className="w-4 h-4 text-[#34D399]" />
                <span>Hybrid / On-site Mode</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-xs font-mono">
                <Calendar className="w-4 h-4 text-[#34D399]" />
                <span>6 Months Duration</span>
              </div>
            </div>
          </div>

          {/* Right Column: Timeline */}
          <div className="lg:col-span-8 relative border-l-2 border-slate-800 pl-8 ml-4 space-y-12">
            
            {/* Timeline Node - Rento India */}
            <div className="relative">
              <div className="absolute -left-[41px] top-1.5 w-[18px] h-[18px] rounded-full bg-blue-500 border-4 border-[#030712] shadow-lg" />
              
              <div className="space-y-4">
                <div className="space-y-1">
                  <p className="text-[10px] sm:text-xs font-bold font-mono text-slate-500 uppercase">
                    March 2025 – September 2025
                  </p>
                  <h4 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    Application Developer Intern
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold text-[#34D399] font-mono">
                    Rento India <span className="text-slate-600">•</span> Chennai, India (Hybrid)
                  </p>
                </div>

                <div className="space-y-3 pl-1 text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1 select-none">▪</span>
                    <p>Successfully completed a six-month intensive tenure focused on backend development using Spring Boot.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1 select-none">▪</span>
                    <p>Designed and optimized backend microservice APIs, database queries, and data integration pipelines.</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {["BACKEND DEVELOPMENT", "SPRING BOOT"].map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 text-[9px] sm:text-[10px] font-bold font-mono text-[#34D399] bg-[#10b981]/5 border border-[#10b981]/25 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Section 3: Clubs & Leadership */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8 border-t border-slate-900">
          
          {/* Left Column: Title & Info */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Clubs & Leadership
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
              Leadership roles inside university groups, technical mentoring, and co-curricular projects.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-slate-400 text-xs font-mono">
                <MapPin className="w-4 h-4 text-[#34D399]" />
                <span>Chennai, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-xs font-mono">
                <Calendar className="w-4 h-4 text-[#34D399]" />
                <span>2 Years Active Experience</span>
              </div>
            </div>
          </div>

          {/* Right Column: Timeline */}
          <div className="lg:col-span-8 relative border-l-2 border-slate-800 pl-8 ml-4 space-y-12">
            
            {/* Timeline Node 1: Newton School Coding Club SRMIST */}
            <div className="relative">
              <div className="absolute -left-[41px] top-1.5 w-[18px] h-[18px] rounded-full bg-emerald-500 border-4 border-[#030712] shadow-lg" />
              
              <div className="space-y-4">
                <div className="space-y-1">
                  <p className="text-[10px] sm:text-xs font-bold font-mono text-slate-500 uppercase">
                    September 2025 – Present
                  </p>
                  <h4 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    Associate & Member
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold text-[#34D399] font-mono">
                    Newton School Coding Club SRMIST <span className="text-slate-600">•</span> Chennai, India (Hybrid)
                  </p>
                </div>

                <div className="space-y-3 pl-1 text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1 select-none">▪</span>
                    <p><strong className="text-white">Associate (Jan 2026 – Present):</strong> Leading technical events, hosting hackathons, and driving core programming workshops.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1 select-none">▪</span>
                    <p><strong className="text-white">Member (Sep 2025 – Present):</strong> Mentored student coders, organized mock coding rounds, and designed technical challenges.</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {["LEADERSHIP", "COMMUNITY BUILDING", "PROGRAMMING"].map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 text-[9px] sm:text-[10px] font-bold font-mono text-[#34D399] bg-[#10b981]/5 border border-[#10b981]/25 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Timeline Node 2: Liftoff */}
            <div className="relative">
              <div className="absolute -left-[41px] top-1.5 w-[18px] h-[18px] rounded-full bg-emerald-500 border-4 border-[#030712] shadow-lg" />
              
              <div className="space-y-4">
                <div className="space-y-1">
                  <p className="text-[10px] sm:text-xs font-bold font-mono text-slate-500 uppercase">
                    September 2024 – September 2025
                  </p>
                  <h4 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    Devtrack Head & Tech Associate
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold text-[#34D399] font-mono">
                    Liftoff <span className="text-slate-600">•</span> Chennai, India (Hybrid)
                  </p>
                </div>

                <div className="space-y-3 pl-1 text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1 select-none">▪</span>
                    <p><strong className="text-white">Devtrack Head (Feb 2025 – Sep 2025):</strong> Managed full-stack web platforms and backend services using Express.js.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1 select-none">▪</span>
                    <p><strong className="text-white">Tech Associate (Sep 2024 – Feb 2025):</strong> Developed core frontend elements using HTML5, CSS3, and JavaScript.</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {["EXPRESS.JS", "FULL-STACK DEVELOPMENT", "API DESIGN"].map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 text-[9px] sm:text-[10px] font-bold font-mono text-[#34D399] bg-[#10b981]/5 border border-[#10b981]/25 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Timeline Node 3: Directorate of Student Affairs (DSA) */}
            <div className="relative">
              <div className="absolute -left-[41px] top-1.5 w-[18px] h-[18px] rounded-full bg-emerald-500 border-4 border-[#030712] shadow-lg" />
              
              <div className="space-y-4">
                <div className="space-y-1">
                  <p className="text-[10px] sm:text-xs font-bold font-mono text-slate-500 uppercase">
                    September 2024 – July 2025
                  </p>
                  <h4 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    Committee Member & Volunteer
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold text-[#34D399] font-mono">
                    Directorate of Student Affairs, SRMIST (DSA) <span className="text-slate-600">•</span> Chennai, India (On-site)
                  </p>
                </div>

                <div className="space-y-3 pl-1 text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1 select-none">▪</span>
                    <p><strong className="text-white">Committee Member (Apr 2025 – Jul 2025):</strong> Coordinated and managed university student campaigns and co-curricular initiatives.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1 select-none">▪</span>
                    <p><strong className="text-white">Volunteer (Sep 2024 – Apr 2025):</strong> Assisted in community drives, student events planning, and volunteer schedules.</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {["EVENT MANAGEMENT", "VOLUNTEERISM", "COMMUNICATIONS"].map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 text-[9px] sm:text-[10px] font-bold font-mono text-[#34D399] bg-[#10b981]/5 border border-[#10b981]/25 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Verified Credentials Sub-section */}
        <div className="space-y-8 pt-8 border-t border-slate-900">
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Verified Credentials
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {/* Rento India Certificate Card */}
            <div 
              className="rounded-2xl border border-white/5 bg-[#0b1220]/90 md:bg-[#0b1220]/40 p-6 flex flex-col justify-between hover:border-slate-800 transition duration-300 shadow-xl md:backdrop-blur-sm"
            >
              <div className="space-y-4">
                <div className="aspect-video w-full rounded-xl overflow-hidden border border-white/5 bg-slate-950/80 relative group cursor-pointer" onClick={() => setSelectedCert("/certs/rento.png")}>
                  <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition duration-300 z-10 flex items-center justify-center">
                    <span className="px-4 py-2 bg-slate-950/90 text-xs font-mono border border-white/10 rounded-lg text-white">Click to View</span>
                  </div>
                  <img 
                    src="/certs/rento.png" 
                    alt="Rento India Internship Completion Certificate" 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition duration-300"
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono font-bold">
                    <span className="text-white">Developer Credentials</span>
                    <span className="text-blue-400">RENTO INDIA</span>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed font-light">
                    Formal certification for successful completion of the Application Developer internship tenure from March to September 2025.
                  </p>
                </div>
              </div>

              <button 
                onClick={() => setSelectedCert("/certs/rento.png")}
                className="mt-6 w-full py-3 border border-slate-800 hover:border-slate-700 hover:bg-white/5 rounded-xl text-slate-300 hover:text-white text-xs font-bold tracking-wider font-mono uppercase flex items-center justify-center gap-2 transition"
              >
                <FileText className="w-4 h-4" />
                <span>View Full Document ↗</span>
              </button>
            </div>
          </div>
        </div>

        {/* Education & Achievements Side-by-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-8 border-t border-slate-900">
          
          {/* Education Card */}
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Education
            </h3>
            
            <div 
              className="rounded-2xl border border-white/5 bg-[#0b1220]/90 md:bg-[#0b1220]/40 p-6 sm:p-8 flex gap-6 items-start shadow-xl md:backdrop-blur-sm"
            >
              <div className="p-3 bg-blue-500/10 border border-blue-500/25 rounded-2xl text-blue-400 flex-shrink-0">
                <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              
              <div className="space-y-4 flex-1">
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-white leading-tight">SRM Institute</h4>
                  <p className="text-[10px] sm:text-xs font-bold font-mono text-[#34d399] tracking-wider uppercase mt-1">
                    Bachelor of Technology
                  </p>
                </div>

                <div className="space-y-2 border-t border-white/5 pt-4 text-xs sm:text-sm font-mono text-slate-400">
                  <div className="grid grid-cols-12 gap-1">
                    <span className="col-span-4 text-slate-600 font-bold uppercase">Major</span>
                    <span className="col-span-8 text-slate-200">Computer Science</span>
                  </div>
                  <div className="grid grid-cols-12 gap-1">
                    <span className="col-span-4 text-slate-600 font-bold uppercase">Academic</span>
                    <span className="col-span-8 text-slate-200">CGPA 8.05</span>
                  </div>
                  <div className="grid grid-cols-12 gap-1">
                    <span className="col-span-4 text-slate-600 font-bold uppercase">Status</span>
                    <span className="col-span-8 text-[#34d399] font-bold">SEM - 5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements Card */}
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Achievements
            </h3>
            
            <div 
              className="rounded-2xl border border-white/5 bg-[#0b1220]/80 shadow-2xl overflow-hidden font-mono text-xs"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-slate-900/60">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#10b981]/80" />
                </div>
                <div className="text-slate-500 text-[10px] sm:text-xs">~/achievements/hackathons</div>
              </div>

              {/* Body */}
              <div className="p-6 space-y-4">
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    Smart India Hackathon
                  </p>
                  <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    Nationalist Winner
                  </h4>
                </div>
                
                <p className="text-slate-400 font-sans font-light leading-relaxed text-xs">
                  Recognized at the national level for developing innovative technical solutions for government problem statements.
                </p>

                <div className="space-y-1.5 border-t border-white/5 pt-4">
                  <p className="text-slate-600 font-bold uppercase tracking-wider text-[10px]">
                    {"// Key focus:"}
                  </p>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-slate-300">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[#34D399]">✓</span> Problem Solving
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[#34D399]">✓</span> Rapid Prototyping
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Lightbox Certificate Viewer Modal */}
      {selectedCert && (
        <div
          onClick={() => setSelectedCert(null)}
          className="fixed inset-0 bg-[#030712]/98 md:backdrop-blur-md z-50 flex items-center justify-center p-6 sm:p-10"
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 z-10 p-2 text-slate-400 hover:text-white rounded-full bg-slate-950/60 hover:bg-slate-950 transition"
            >
              <X className="w-5 h-5" />
            </button>
            
            <img 
              src={selectedCert} 
              alt="Full Certificate View" 
              className="w-full h-auto object-contain max-h-[80vh]"
            />
          </div>
        </div>
      )}

      {/* Footer from Screenshot 2 */}
      <footer className="pt-16 mt-16 border-t border-slate-900 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-xs text-slate-500 font-mono max-w-7xl mx-auto px-6 lg:px-16 w-full">
        <div className="space-y-1 md:space-y-2">
          <span className="text-slate-400 font-bold tracking-widest text-[10px]">Nidhish Rathore</span>
          <p className="font-sans font-light text-slate-500 leading-relaxed max-w-sm">
            A technical portfolio designed for clarity, authority, and professional impact in the engineering space.
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
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-slate-400 hover:text-white text-xs font-bold font-mono tracking-wide uppercase flex items-center gap-1 transition"
          >
            Back to top ↑
          </button>
        </div>
      </footer>

    </section>
  );
}