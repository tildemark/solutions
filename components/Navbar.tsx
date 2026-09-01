"use client";

import React, { useState } from "react";

interface NavbarProps {
  onOpenInquiry: (productName: string) => void;
}

export default function Navbar({ onOpenInquiry }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobile = () => setMobileOpen(!mobileOpen);

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-gray-800/80 bg-[#030712]/75 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="/solutions-logo.png"
              alt="Sanchez Solutions"
              className="h-10 w-10 object-contain rounded-xl border border-cyan-500/30 bg-gray-950/80 p-0.5 shadow-lg shadow-cyan-500/20 group-hover:border-cyan-400/60 transition-all"
            />
            <div>
              <span className="font-display font-bold text-white text-lg tracking-tight block group-hover:text-cyan-300 transition-colors">SANCHEZ.PH</span>
              <span className="text-[10px] uppercase font-semibold text-cyan-400 tracking-widest block -mt-1">Software Architecture</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#products" className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors">
              Products
            </a>
            <a href="#philosophy" className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors">
              Philosophy
            </a>
            <a href="https://sanchez.ph" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-400 hover:text-white transition-colors flex items-center gap-1.5">
              sanchez.ph <i className="fas fa-external-link-alt text-[10px]"></i>
            </a>
            <button
              onClick={() => onOpenInquiry("Trace")}
              className="px-4.5 py-2 rounded-xl bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 hover:from-cyan-500/25 hover:to-indigo-500/25 border border-cyan-500/30 hover:border-cyan-400/50 text-cyan-300 font-medium text-xs tracking-wide transition-all uppercase cursor-pointer"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMobile}
              className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg bg-gray-900/50 hover:bg-gray-800 border border-gray-800"
            >
              <i className={`fas ${mobileOpen ? "fa-times" : "fa-bars"} text-lg`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-b border-gray-800 bg-[#070b16] px-4 py-4 space-y-3">
          <a
            href="#products"
            onClick={() => setMobileOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-gray-300 hover:bg-gray-900 hover:text-white"
          >
            Products
          </a>
          <a
            href="#philosophy"
            onClick={() => setMobileOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-gray-300 hover:bg-gray-900 hover:text-white"
          >
            Philosophy
          </a>
          <a
            href="https://sanchez.ph"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-3 py-2 rounded-lg text-base font-medium text-gray-400 hover:bg-gray-900 hover:text-white"
          >
            sanchez.ph <i className="fas fa-external-link-alt text-xs ml-1"></i>
          </a>
          <button
            onClick={() => {
              setMobileOpen(false);
              onOpenInquiry("Trace");
            }}
            className="w-full text-center py-2.5 rounded-lg bg-cyan-500 text-[#030712] font-semibold text-sm transition-all"
          >
            Request Quote
          </button>
        </div>
      )}
    </nav>
  );
}
