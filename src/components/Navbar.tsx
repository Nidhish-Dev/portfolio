// src/components/Navbar.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Monitor } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Experience", href: "/experience" },
    { label: "About", href: "/about" },
  ];

  const getActiveItem = () => {
    if (pathname === "/") return "/";
    if (pathname.startsWith("/projects")) return "/projects";
    if (pathname.startsWith("/experience")) return "/experience";
    if (pathname.startsWith("/about")) return "/about";
    return "/";
  };

  const activeHref = getActiveItem();

  return (
    <>
      {/* Sleek Floating Glassmorphism Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 bg-transparent">
        <div className="mx-auto max-w-7xl flex items-center justify-between rounded-full border border-white/5 bg-[#0b1220]/90 md:bg-[#0b1220]/60 px-6 py-3 md:backdrop-blur-md shadow-lg transition-all duration-300">
          
          {/* Logo (Left) */}
          <Link
            href="/"
            className="text-xs sm:text-sm font-black tracking-widest text-white hover:opacity-80 transition-opacity uppercase font-mono flex items-center gap-1.5"
          >
            <span>Nidhish Rathore</span>
            <span className="px-1.5 py-0.5 bg-[#10b981]/10 border border-[#10b981]/20 rounded text-[8px] font-bold text-[#34d399] tracking-normal normal-case select-none">v1.2.9</span>
          </Link>

          {/* Desktop Nav Links (Center) */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-xs lg:text-sm font-medium tracking-wide transition-all duration-300 py-1 hover:text-white
                  ${activeHref === item.href ? "text-white" : "text-slate-400"}`}
              >
                {item.label}
                {activeHref === item.href && (
                  <div
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-white rounded-full"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Actions (Right) */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              className="p-2 text-slate-400 hover:text-white rounded-full hover:bg-white/5 transition"
              aria-label="Toggle layout view"
            >
              <Monitor className="w-4 h-4" />
            </button>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold tracking-wider rounded-full shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 uppercase"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white rounded-full hover:bg-white/5 transition"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Full-Screen Mobile Drawer */}
      <div 
        className={`fixed inset-0 z-40 bg-[#060b18]/98 flex flex-col justify-center px-8 transition-all duration-300 ease-in-out
          ${isOpen ? "opacity-100 translate-y-0 visible pointer-events-auto" : "opacity-0 -translate-y-4 invisible pointer-events-none"}`}
      >
        <div className="flex flex-col items-center gap-8 text-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`text-3xl font-extrabold tracking-tight transition-colors duration-300
                ${activeHref === item.href ? "text-white" : "text-slate-500 hover:text-white"}`}
            >
              {item.label}
            </Link>
          ))}
          
          <div className="flex items-center gap-6 mt-8">
            <button 
              className="p-3 text-slate-400 hover:text-white rounded-full bg-white/5 transition"
              aria-label="Toggle layout view"
            >
              <Monitor className="w-5 h-5" />
            </button>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold tracking-wider rounded-full shadow-lg hover:shadow-blue-500/20 transition-all uppercase"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
}