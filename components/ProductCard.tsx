"use client";

import React from "react";

interface FeatureItem {
  title: string;
  desc: string;
  icon: string;
}

interface ProductCardProps {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  features: FeatureItem[];
  status: "released" | "wip";
  logoUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  downloadUrl?: string;
  accentColor: "cyan" | "emerald" | "indigo" | "amber";
  onInquiry: (productName: string) => void;
  credentials?: {
    admin?: string;
    members?: string;
  };
}

export default function ProductCard({
  title,
  subtitle,
  description,
  tags,
  features,
  status,
  logoUrl,
  demoUrl,
  githubUrl,
  downloadUrl,
  accentColor,
  onInquiry,
  credentials,
}: ProductCardProps) {
  // Setup color maps
  const colorMap = {
    cyan: {
      border: "hover:border-cyan-500/40",
      glow: "glow-hover-cyan",
      badge: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
      accent: "text-cyan-400",
      btn: "bg-cyan-500 hover:bg-cyan-400 text-slate-950",
    },
    emerald: {
      border: "hover:border-emerald-500/40",
      glow: "glow-hover-emerald",
      badge: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
      accent: "text-emerald-400",
      btn: "bg-emerald-500 hover:bg-emerald-400 text-slate-950",
    },
    indigo: {
      border: "hover:border-indigo-500/40",
      glow: "glow-hover-indigo",
      badge: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
      accent: "text-indigo-400",
      btn: "bg-indigo-500 hover:bg-indigo-400 text-white",
    },
    amber: {
      border: "hover:border-amber-500/40",
      glow: "glow-hover-amber",
      badge: "bg-amber-500/10 text-amber-300 border-amber-500/20",
      accent: "text-amber-400",
      btn: "bg-amber-500 hover:bg-amber-400 text-slate-950",
    },
  };

  const currentStyles = colorMap[accentColor] || colorMap.cyan;

  return (
    <div className={`group relative overflow-hidden rounded-2xl border border-gray-800/80 bg-gray-950/45 p-6 sm:p-8 transition-all duration-300 backdrop-blur-sm ${currentStyles.border} ${currentStyles.glow}`}>
      {/* Glow Effect */}
      <div className={`absolute -right-20 -top-20 h-40 w-40 rounded-full blur-3xl opacity-10 transition-opacity group-hover:opacity-20 pointer-events-none`} style={{ backgroundColor: accentColor === "cyan" ? "#06b6d4" : accentColor === "emerald" ? "#10b981" : accentColor === "amber" ? "#f59e0b" : "#6366f1" }} />

      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6">
        <div>
          {/* Status, Logo and Title */}
          <div className="flex items-center gap-3 flex-wrap mb-2">
            {logoUrl && (
              <img
                src={logoUrl}
                alt={`${title} Logo`}
                className="h-9 w-9 object-contain rounded-lg bg-gray-900/80 p-1 border border-gray-800"
              />
            )}
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">{title}</h3>
            <span className={`px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider rounded-full border ${status === "released" ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" : "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"}`}>
              {status === "released" ? "Production Ready" : "Under Dev"}
            </span>
          </div>
          <p className={`font-mono text-xs uppercase tracking-wider font-semibold ${currentStyles.accent} mb-4`}>{subtitle}</p>
          <p className="text-gray-300 leading-relaxed text-sm max-w-2xl">{description}</p>
        </div>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap lg:justify-end gap-1.5 max-w-sm">
          {tags.map((tag) => (
            <span key={tag} className="text-[10px] px-2 py-0.5 rounded-md bg-gray-900 border border-gray-800 text-gray-400 font-mono">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Grid of Key Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4.5 my-8">
        {features.map((feat) => (
          <div key={feat.title} className="flex gap-3.5 p-4 rounded-xl bg-gray-900/40 border border-gray-800/40">
            <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gray-950/65 ${currentStyles.accent} text-lg`}>
              <i className={feat.icon}></i>
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm mb-1">{feat.title}</h4>
              <p className="text-gray-400 text-xs leading-relaxed">{feat.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Demo Credentials (if provided) */}
      {credentials && (
        <div className="mb-6 p-4 rounded-xl bg-cyan-950/10 border border-cyan-500/20 text-xs text-cyan-200 leading-relaxed max-w-xl">
          <div className="flex items-center gap-2 mb-1.5 font-bold">
            <i className="fas fa-key"></i>
            <span>Live Demo Sandbox Credentials</span>
          </div>
          {credentials.admin && <p><span className="text-cyan-400 font-semibold">Admin Panel:</span> {credentials.admin}</p>}
          {credentials.members && <p><span className="text-cyan-400 font-semibold">Member Portal:</span> {credentials.members}</p>}
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-3.5 pt-4 border-t border-gray-900">
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-xs tracking-wider uppercase transition-all shadow-md cursor-pointer ${currentStyles.btn}`}
          >
            <i className="fas fa-play text-[10px]"></i>
            Live Demo
          </a>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-900 hover:bg-gray-800 text-gray-200 hover:text-white font-medium text-xs tracking-wider uppercase border border-gray-800 transition-all cursor-pointer"
          >
            <i className="fab fa-github text-[11px]"></i>
            Source Code
          </a>
        )}
        {downloadUrl && (
          <a
            href={downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-900 hover:bg-gray-800 text-gray-200 hover:text-white font-medium text-xs tracking-wider uppercase border border-gray-800 transition-all cursor-pointer"
          >
            <i className="fas fa-download text-[11px]"></i>
            Download App
          </a>
        )}
        <button
          onClick={() => onInquiry(title)}
          className="ml-auto flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 hover:from-cyan-500/25 hover:to-indigo-500/25 border border-cyan-500/20 hover:border-cyan-500/40 text-cyan-300 font-medium text-xs tracking-wider uppercase transition-all cursor-pointer"
        >
          <i className="fas fa-file-invoice-dollar text-[11px]"></i>
          Get License Quote
        </button>
      </div>
    </div>
  );
}
