"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import PricingModal from "../components/PricingModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState("Trace");

  // Contact Form States
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactLoading, setContactLoading] = useState(false);

  const openInquiry = (productName: string) => {
    setModalProduct(productName);
    setModalOpen(true);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactLoading(true);
    setTimeout(() => {
      setContactLoading(false);
      setContactSubmitted(true);
    }, 1000);
  };

  // Product Data
  const traceFeatures = [
    {
      title: "Mobile Asset Scanning (QR/RFID)",
      desc: "Instant barcode and high-speed Bluetooth RFID sweeps for large-scale resorts and logistics operations.",
      icon: "fas fa-qrcode",
    },
    {
      title: "Offline-First Sync Engine",
      desc: "Runs locally on Android SQLite databases in low-connectivity areas; auto-syncs when local network returns.",
      icon: "fas fa-wifi-slash",
    },
    {
      title: "Cryptographic Audit Ledger",
      desc: "Seqential SHA-256 block ledger logging every asset write-off, transfer, and audit check for strict compliance.",
      icon: "fas fa-shield-halved",
    },
    {
      title: "On-Premises Isolation Stack",
      desc: "Avoids vulnerable cloud dependencies. Packages Next.js, Postgres, Redis, and mobile APIs in a single secure Docker Compose block.",
      icon: "fab fa-docker",
    },
  ];

  const equiyieldFeatures = [
    {
      title: "Savings & Contribution Management",
      desc: "Flexible tracking of cooperative member savings, payouts, share updates, and eligibility logs.",
      icon: "fas fa-piggy-bank",
    },
    {
      title: "Dividend Allocation Engine",
      desc: "Pro-rata distribution algorithms based on active member share counts with auto-caching via Redis.",
      icon: "fas fa-calculator",
    },
    {
      title: "GCash & Bank Payout Integration",
      desc: "Generate reconciled bulk deposit reference numbers for distribution via corporate GCash or bank transfers.",
      icon: "fas fa-money-bill-transfer",
    },
    {
      title: "Dual Portal Management",
      desc: "Secure Admin control center alongside a Member self-service dashboard to apply for loans and view transaction ledger.",
      icon: "fas fa-users-cog",
    },
  ];

  const dpaMasteryFeatures = [
    {
      title: "8-Stage Spaced Repetition (SRS)",
      desc: "Intelligent review scheduling across 9 retention stages (Locked to Burned) with strict interval multipliers and penalty demotions.",
      icon: "fas fa-brain",
    },
    {
      title: "Difficulty Tier Gating (85% Guru Rule)",
      desc: "5 progressive difficulty tiers spanning RA 10173, IRR, and NPC issuances; next tier unlocks only after 85% mastery.",
      icon: "fas fa-layer-group",
    },
    {
      title: "Offline-First Drift SQLite Architecture",
      desc: "Fully functional offline study engine with local Drift DAOs, question tag indexing, and resilient progress tracking.",
      icon: "fas fa-database",
    },
    {
      title: "Hybrid Seed & Background OTA Sync",
      desc: "Pre-loaded canonical NPC competency question seeds with non-destructive OTA sync for updated jurisprudence.",
      icon: "fas fa-cloud-arrow-down",
    },
  ];

  const silipFeatures = [
    {
      title: "Legal & Relevance BM25 Dual-Mode Search",
      desc: "Dual retrieval engines: Legal Mode prioritizing primary statutory sources (DPA RA 10173 / IRR) and Relevance Mode with BM25 term weighting.",
      icon: "fas fa-scale-balanced",
    },
    {
      title: "Comprehensive NPC Jurisprudence Corpus",
      desc: "Full indexing across RA 10173, IRR, NPC Circulars, Advisories, Orders, Decisions, and Commission Resolutions.",
      icon: "fas fa-book-bookmark",
    },
    {
      title: "Dynamic Query Highlighting & Filters",
      desc: "Real-time document category filtering with instant keyword match highlighting for swift legal research.",
      icon: "fas fa-highlighter",
    },
    {
      title: "AI-Powered Privacy Document Insights",
      desc: "Deep legal text analysis with metadata extraction and direct references to authoritative statutory citations.",
      icon: "fas fa-wand-magic-sparkles",
    },
  ];

  const vaultDropFeatures = [
    {
      title: "Multi-Cloud Object Storage (AWS S3 & OCI)",
      desc: "Native dual-engine file management supporting Amazon Web Services S3 and Oracle Cloud Infrastructure Object Storage buckets.",
      icon: "fas fa-cloud-arrow-up",
    },
    {
      title: "Zero-Knowledge Local Credential Vault",
      desc: "Client-side encrypted key persistence keeping cloud access tokens and API secrets secure within your device environment.",
      icon: "fas fa-vault",
    },
    {
      title: "Drag & Drop Multi-Part Parallel Transfer",
      desc: "High-throughput parallel chunk uploads and downloads with pause/resume support and real-time transfer telemetry.",
      icon: "fas fa-arrows-up-down",
    },
    {
      title: "Presigned URL Generator & Bucket Inspector",
      desc: "Instantly create time-limited presigned sharing URLs, inspect bucket ACL policies, and preview cloud assets without public exposure.",
      icon: "fas fa-link",
    },
  ];

  const synapseFeatures = [
    {
      title: "8-Stage Spaced Repetition Engine (SRS)",
      desc: "Progression across 9 mastery states (Available to Burned) with research-backed review intervals and 2-stage penalty demotions.",
      icon: "fas fa-brain",
    },
    {
      title: "Modular Knowledge Pack Architecture",
      desc: "Curriculum decoupled DLC-style content packs loaded directly into local SQLite for computer science, engineering, and certifications.",
      icon: "fas fa-cubes",
    },
    {
      title: "Zero-Knowledge Cryptographic HMAC Certificates",
      desc: "Verifiable graduation certificates with embedded dynamic QR signatures and one-tap publishing to LinkedIn & Facebook.",
      icon: "fas fa-certificate",
    },
    {
      title: "100% Offline-First Privacy (Drift SQLite)",
      desc: "Zero data collection, zero analytics SDKs, and zero telemetry with complete local Drift SQLite and Riverpod state engine.",
      icon: "fas fa-shield-halved",
    },
  ];

  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"expanded" | "grid">("expanded");

  const categoryOptions = [
    { id: "all", label: "All Products" },
    { id: "released", label: "Production Releases" },
    { id: "wip", label: "Active Pipelines (WIP)" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#030712]">
      {/* Sticky Navigation */}
      <Navbar onOpenInquiry={openInquiry} />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 lg:pt-32 lg:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-950/15 via-gray-950/50 to-gray-950 pointer-events-none" />
        <div className="absolute -top-32 left-1/3 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />
        <div className="absolute top-20 right-1/4 h-[300px] w-[300px] rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-6 animate-pulse-subtle">
            <i className="fas fa-terminal text-[10px]"></i> Enterprise Software Architecture
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Rugged Software Built for <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">Land, Sea, and Compliance</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            I build specialized, on-premises and custom web frameworks that bridge the gap between high-frequency hardware telemetry and strict regulatory auditing.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#products"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 text-slate-950 hover:from-cyan-400 hover:to-indigo-400 font-bold text-sm tracking-wide uppercase transition-all shadow-lg shadow-cyan-500/10 cursor-pointer"
            >
              Explore Products
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gray-900 hover:bg-gray-800 text-white font-semibold text-sm tracking-wide uppercase border border-gray-800 hover:border-gray-700 transition-all cursor-pointer"
            >
              Licensing Inquiries
            </a>
          </div>
        </div>
      </section>

      {/* Main Showcase */}
      <main id="products" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Category & View Mode Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-gray-900">
          <div className="flex flex-wrap items-center gap-2.5">
            {categoryOptions.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-1.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer border ${
                  activeCategory === cat.id
                    ? "bg-cyan-500/15 text-cyan-300 border-cyan-500/40 shadow-sm shadow-cyan-500/10"
                    : "bg-gray-950/40 text-gray-400 border-gray-800 hover:border-gray-700 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {(activeCategory === "all" || activeCategory === "released") && (
            <div className="flex items-center gap-1 rounded-xl bg-gray-950/60 p-1 border border-gray-800 text-xs">
              <button
                onClick={() => setViewMode("expanded")}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-[11px] font-semibold tracking-wider transition-colors cursor-pointer ${
                  viewMode === "expanded" ? "bg-gray-800 text-white" : "text-gray-400 hover:text-gray-200"
                }`}
                title="Full Feature Breakdown"
              >
                <i className="fas fa-bars-staggered"></i>
                Detailed
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-[11px] font-semibold tracking-wider transition-colors cursor-pointer ${
                  viewMode === "grid" ? "bg-gray-800 text-white" : "text-gray-400 hover:text-gray-200"
                }`}
                title="Compact Grid Matrix"
              >
                <i className="fas fa-table-cells-large"></i>
                Compact Grid
              </button>
            </div>
          )}
        </div>
        
        {/* Production Released Products */}
        {(activeCategory === "all" || activeCategory === "released") && (
          viewMode === "grid" ? (
            <div>
              <div className="mb-6">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest font-mono">Production Releases Matrix</span>
                <div className="h-0.5 w-12 bg-cyan-500 mt-1"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* TRACE Compact */}
                <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-950/45 p-6 flex flex-col justify-between hover:border-cyan-500/40 transition-all backdrop-blur-sm">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <img src="/trace-logo.png" alt="TRACE" className="h-7 w-7 object-contain rounded bg-gray-900 p-0.5 border border-gray-800" />
                        <h4 className="font-display font-extrabold text-lg text-white">T.R.A.C.E.</h4>
                      </div>
                      <span className="px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Production Ready</span>
                    </div>
                    <p className="text-[10px] text-cyan-400 font-semibold font-mono uppercase tracking-wider mb-2">Hospitality Asset Engine</p>
                    <p className="text-gray-400 text-xs leading-relaxed mb-4">
                      On-premises asset management ecosystem with RFID/QR sweeps and cryptographic SHA-256 audit ledgers.
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {["Next.js", "Flutter", "SQLite", "Docker"].map((t) => (
                        <span key={t} className="text-[9px] px-1.5 py-0.5 rounded bg-gray-900 border border-gray-800 text-gray-400 font-mono">{t}</span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      <a
                        href="https://trace.sanchez.ph"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs tracking-wider uppercase text-center transition-colors"
                      >
                        Live Demo
                      </a>
                      <button
                        onClick={() => openInquiry("T.R.A.C.E.")}
                        className="p-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 text-xs border border-cyan-500/30 cursor-pointer transition-colors"
                        title="Get License Quote"
                      >
                        <i className="fas fa-file-invoice-dollar"></i>
                      </button>
                    </div>
                  </div>
                </div>

                {/* EquiYield Compact */}
                <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-950/45 p-6 flex flex-col justify-between hover:border-emerald-500/40 transition-all backdrop-blur-sm">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <img src="/equiyield-logo.png" alt="EquiYield" className="h-7 w-7 object-contain rounded bg-gray-900 p-0.5 border border-gray-800" />
                        <h4 className="font-display font-extrabold text-lg text-white">EquiYield</h4>
                      </div>
                      <span className="px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Production Ready</span>
                    </div>
                    <p className="text-[10px] text-emerald-400 font-semibold font-mono uppercase tracking-wider mb-2">Cooperative Savings Suite</p>
                    <p className="text-gray-400 text-xs leading-relaxed mb-4">
                      Savings, loan tracking, pro-rata dividend calculation algorithms, and corporate payout integrations.
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {["Next.js 15", "Prisma", "PostgreSQL", "Redis"].map((t) => (
                        <span key={t} className="text-[9px] px-1.5 py-0.5 rounded bg-gray-900 border border-gray-800 text-gray-400 font-mono">{t}</span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      <a
                        href="https://equiyield.sanchez.ph"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs tracking-wider uppercase text-center transition-colors"
                      >
                        Live Demo
                      </a>
                      <button
                        onClick={() => openInquiry("EquiYield")}
                        className="p-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 text-xs border border-emerald-500/30 cursor-pointer transition-colors"
                        title="Get License Quote"
                      >
                        <i className="fas fa-file-invoice-dollar"></i>
                      </button>
                    </div>
                  </div>
                </div>

                {/* CCARD Studio Compact */}
                <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-950/45 p-6 flex flex-col justify-between hover:border-amber-500/40 transition-all backdrop-blur-sm">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <img src="/ccard-logo.png" alt="CCARD Studio" className="h-7 w-7 object-contain rounded bg-gray-900 p-0.5 border border-gray-800" />
                        <h4 className="font-display font-extrabold text-lg text-white">CCARD Studio</h4>
                      </div>
                      <span className="px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Production Ready</span>
                    </div>
                    <p className="text-[10px] text-amber-400 font-semibold font-mono uppercase tracking-wider mb-2">Calling Card & Business Card Generator</p>
                    <p className="text-gray-400 text-xs leading-relaxed mb-4">
                      Custom calling card and business card generator with dynamic QR vCards, rich typography, and print-ready vector exports.
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {["Next.js", "Canvas API", "Tailwind", "QR / vCard"].map((t) => (
                        <span key={t} className="text-[9px] px-1.5 py-0.5 rounded bg-gray-900 border border-gray-800 text-gray-400 font-mono">{t}</span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      <a
                        href="https://ccard.sanchez.ph"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs tracking-wider uppercase text-center transition-colors"
                      >
                        Live Demo
                      </a>
                      <button
                        onClick={() => openInquiry("CCARD Studio")}
                        className="p-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 text-xs border border-amber-500/30 cursor-pointer transition-colors"
                        title="Get License Quote"
                      >
                        <i className="fas fa-file-invoice-dollar"></i>
                      </button>
                    </div>
                  </div>
                </div>

                {/* DPA Mastery Compact */}
                <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-950/45 p-6 flex flex-col justify-between hover:border-indigo-500/40 transition-all backdrop-blur-sm">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <img src="/dpa-mastery-logo.png" alt="DPA Mastery" className="h-7 w-7 object-contain rounded bg-gray-900 p-0.5 border border-gray-800" />
                        <h4 className="font-display font-extrabold text-lg text-white">DPA Mastery</h4>
                      </div>
                      <span className="px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Production Ready</span>
                    </div>
                    <p className="text-[10px] text-indigo-400 font-semibold font-mono uppercase tracking-wider mb-2">DPO Certification Exam Prep</p>
                    <p className="text-gray-400 text-xs leading-relaxed mb-4">
                      Offline-first mobile app with an 8-stage SRS engine and difficulty gating for Philippine NPC DPO certification.
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {["Flutter", "Drift (SQLite)", "Riverpod", "Next.js"].map((t) => (
                        <span key={t} className="text-[9px] px-1.5 py-0.5 rounded bg-gray-900 border border-gray-800 text-gray-400 font-mono">{t}</span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      <a
                        href="https://dpa-mastery.sanchez.ph"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white font-bold text-xs tracking-wider uppercase text-center transition-colors"
                      >
                        Live Demo
                      </a>
                      <button
                        onClick={() => openInquiry("DPA Mastery")}
                        className="p-2 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 text-xs border border-indigo-500/30 cursor-pointer transition-colors"
                        title="Get License Quote"
                      >
                        <i className="fas fa-file-invoice-dollar"></i>
                      </button>
                    </div>
                  </div>
                </div>

                {/* SILIP Compact */}
                <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-950/45 p-6 flex flex-col justify-between hover:border-cyan-500/40 transition-all backdrop-blur-sm">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <img src="/silip-logo.png" alt="SILIP" className="h-7 w-7 object-contain rounded bg-gray-900 p-0.5 border border-gray-800" />
                        <h4 className="font-display font-extrabold text-lg text-white">SILIP</h4>
                      </div>
                      <span className="px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Production Ready</span>
                    </div>
                    <p className="text-[10px] text-cyan-400 font-semibold font-mono uppercase tracking-wider mb-2">Philippine Data Privacy Search Engine</p>
                    <p className="text-gray-400 text-xs leading-relaxed mb-4">
                      Searchable interface for Philippine data privacy laws, NPC circulars, and legal documents with dual-mode BM25 retrieval and intelligent highlighting.
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {["Next.js", "BM25 Ranking", "TypeScript", "Tailwind CSS"].map((t) => (
                        <span key={t} className="text-[9px] px-1.5 py-0.5 rounded bg-gray-900 border border-gray-800 text-gray-400 font-mono">{t}</span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      <a
                        href="https://silip.sanchez.ph"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs tracking-wider uppercase text-center transition-colors"
                      >
                        Live App
                      </a>
                      <button
                        onClick={() => openInquiry("SILIP")}
                        className="p-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 text-xs border border-cyan-500/30 cursor-pointer transition-colors"
                        title="Get License Quote"
                      >
                        <i className="fas fa-file-invoice-dollar"></i>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Vault Drop Explorer Compact */}
                <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-950/45 p-6 flex flex-col justify-between hover:border-amber-500/40 transition-all backdrop-blur-sm">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <img src="/vault-drop-logo.png" alt="Vault Drop Explorer" className="h-7 w-7 object-contain rounded bg-gray-900 p-0.5 border border-gray-800" />
                        <h4 className="font-display font-extrabold text-lg text-white">Vault Drop</h4>
                      </div>
                      <span className="px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Production Ready</span>
                    </div>
                    <p className="text-[10px] text-amber-400 font-semibold font-mono uppercase tracking-wider mb-2">Cloud File Manager for AWS S3 & OCI</p>
                    <p className="text-gray-400 text-xs leading-relaxed mb-4">
                      Secure desktop & web file manager for Amazon Web Services S3 and Oracle Cloud Infrastructure Object Storage with local encrypted vaults.
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {["React 19", "AWS S3 SDK", "OCI Storage", "Tailwind CSS"].map((t) => (
                        <span key={t} className="text-[9px] px-1.5 py-0.5 rounded bg-gray-900 border border-gray-800 text-gray-400 font-mono">{t}</span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      <a
                        href="https://vaultdrop.sanchez.ph"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs tracking-wider uppercase text-center transition-colors"
                      >
                        Live App
                      </a>
                      <button
                        onClick={() => openInquiry("Vault Drop Explorer")}
                        className="p-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 text-xs border border-amber-500/30 cursor-pointer transition-colors"
                        title="Get License Quote"
                      >
                        <i className="fas fa-file-invoice-dollar"></i>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Synapse Compact */}
                <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-950/45 p-6 flex flex-col justify-between hover:border-indigo-500/40 transition-all backdrop-blur-sm">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <img src="/synapse-logo.png" alt="Synapse" className="h-7 w-7 object-contain rounded bg-gray-900 p-0.5 border border-gray-800" />
                        <h4 className="font-display font-extrabold text-lg text-white">Synapse</h4>
                      </div>
                      <span className="px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Production Ready</span>
                    </div>
                    <p className="text-[10px] text-indigo-400 font-semibold font-mono uppercase tracking-wider mb-2">Engineering & Academic Spaced Repetition</p>
                    <p className="text-gray-400 text-xs leading-relaxed mb-4">
                      Offline-first SRS learning engine with modular knowledge packs, verifiable zero-knowledge HMAC credentials, and sequential curriculum mastery.
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {["Flutter", "Drift (SQLite)", "Riverpod", "Next.js 16"].map((t) => (
                        <span key={t} className="text-[9px] px-1.5 py-0.5 rounded bg-gray-900 border border-gray-800 text-gray-400 font-mono">{t}</span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      <a
                        href="https://synapse.sanchez.ph"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white font-bold text-xs tracking-wider uppercase text-center transition-colors"
                      >
                        Live App
                      </a>
                      <button
                        onClick={() => openInquiry("Synapse")}
                        className="p-2 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 text-xs border border-indigo-500/30 cursor-pointer transition-colors"
                        title="Get License Quote"
                      >
                        <i className="fas fa-file-invoice-dollar"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              {/* Trace Section */}
              <div>
                <div className="mb-6">
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest font-mono">01 // Hospitality Asset Infrastructure</span>
                  <div className="h-0.5 w-12 bg-cyan-500 mt-1"></div>
                </div>
                <ProductCard
                  title="T.R.A.C.E."
                  subtitle="Total Resource Asset & Compliance Engine"
                  description="An enterprise-grade, on-premises asset management ecosystem designed for high-luxury, multi-acre resort environments (e.g., Shangri-La Boracay). It modernizes passive inventory registries into proactive physical operation layers."
                  tags={["Next.js", "Flutter", "SQLite", "PostgreSQL", "Redis", "Docker", "RFID / QR"]}
                  features={traceFeatures}
                  status="released"
                  logoUrl="/trace-logo.png"
                  demoUrl="https://trace.sanchez.ph"
                  githubUrl="https://github.com/tildemark/trace"
                  accentColor="cyan"
                  onInquiry={openInquiry}
                />
              </div>

              {/* EquiYield Section */}
              <div>
                <div className="mb-6">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest font-mono">02 // Cooperative Savings & Ledger Suite</span>
                  <div className="h-0.5 w-12 bg-emerald-500 mt-1"></div>
                </div>
                <ProductCard
                  title="EquiYield"
                  subtitle="Cooperative Savings and Loan Management Platform"
                  description="A robust full-stack solution for credit unions and cooperative networks. Handles member profiles, contribution ledgers, dividend allocation cycles, and automated payouts with comprehensive administrative tracking."
                  tags={["Next.js 15", "Express.js", "Prisma ORM", "PostgreSQL", "Redis", "Tailwind CSS"]}
                  features={equiyieldFeatures}
                  status="released"
                  logoUrl="/equiyield-logo.png"
                  demoUrl="https://equiyield.sanchez.ph"
                  githubUrl="https://github.com/tildemark/EquiYield"
                  accentColor="emerald"
                  onInquiry={openInquiry}
                  credentials={{
                    admin: "admin@equiyield.local / Admin@123456",
                    members: "juan.delacruz@demo.com / Member@123"
                  }}
                />
              </div>

              {/* CCARD Studio Section */}
              <div>
                <div className="mb-6">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest font-mono">03 // Calling Card & Business Card Generator</span>
                  <div className="h-0.5 w-12 bg-amber-500 mt-1"></div>
                </div>
                <ProductCard
                  title="CCARD Studio"
                  subtitle="Digital & Print Calling Card Generator"
                  description="A modern, high-precision calling card and digital business card generator. Design elegant physical and virtual cards with dynamic vCard QR codes, custom typography, social contact links, and print-ready high-resolution exports."
                  tags={["Next.js", "TypeScript", "Canvas API", "Tailwind CSS", "SVG Export", "QR / vCard"]}
                  features={[
                    {
                      title: "Visual Card Designer",
                      desc: "Intuitive layout and styling engine for crafting professional calling cards, executive namecards, and contact cards.",
                      icon: "fas fa-address-card",
                    },
                    {
                      title: "Smart vCard & QR Codes",
                      desc: "Instant contact-sharing QR codes and digital vCards embedded directly into your card designs.",
                      icon: "fas fa-qrcode",
                    },
                    {
                      title: "Print-Ready Vector Export",
                      desc: "Generate high-DPI, bleed-adjusted PDF and SVG exports optimized for commercial print shops.",
                      icon: "fas fa-print",
                    },
                    {
                      title: "Batch Generation & Presets",
                      desc: "Generate consistent company-wide calling cards from contact lists with curated modern presets.",
                      icon: "fas fa-layer-group",
                    },
                  ]}
                  status="released"
                  logoUrl="/ccard-logo.png"
                  demoUrl="https://ccard.sanchez.ph"
                  githubUrl="https://github.com/tildemark/ccard-studio"
                  accentColor="amber"
                  onInquiry={openInquiry}
                />
              </div>

              {/* DPA Mastery Section */}
              <div>
                <div className="mb-6">
                  <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest font-mono">04 // Privacy Law & DPO Certification Prep</span>
                  <div className="h-0.5 w-12 bg-indigo-500 mt-1"></div>
                </div>
                <ProductCard
                  title="DPA Mastery"
                  subtitle="Spaced Repetition NPC DPO Certification Companion"
                  description="An offline-first Flutter mobile application with Next.js web portal designed to prepare privacy professionals for the Philippine National Privacy Commission (NPC) DPO Competency Examination with an 8-stage SRS engine."
                  tags={["Flutter", "Drift (SQLite)", "Riverpod", "Next.js", "Spaced Repetition (SRS)", "OTA Sync"]}
                  features={dpaMasteryFeatures}
                  status="released"
                  logoUrl="/dpa-mastery-logo.png"
                  demoUrl="https://dpa-mastery.sanchez.ph"
                  githubUrl="https://github.com/tildemark/dpa-mastery"
                  accentColor="indigo"
                  onInquiry={openInquiry}
                />
              </div>

              {/* SILIP Section */}
              <div>
                <div className="mb-6">
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest font-mono">05 // Legal Intelligence & Privacy Search Engine</span>
                  <div className="h-0.5 w-12 bg-cyan-500 mt-1"></div>
                </div>
                <ProductCard
                  title="SILIP"
                  subtitle="Searchable Interface for Legal Information & Privacy"
                  description="A high-performance legal search engine and intelligence platform indexing the Philippine Data Privacy Act of 2012 (RA 10173), its IRR, and comprehensive National Privacy Commission (NPC) issuances with dual Legal/Relevance BM25 ranking modes."
                  tags={["Next.js", "TypeScript", "BM25 Ranking", "Tailwind CSS", "Legal Search", "NPC Corpus"]}
                  features={silipFeatures}
                  status="released"
                  logoUrl="/silip-logo.png"
                  demoUrl="https://silip.sanchez.ph"
                  accentColor="cyan"
                  onInquiry={openInquiry}
                />
              </div>

              {/* Vault Drop Explorer Section */}
              <div>
                <div className="mb-6">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest font-mono">06 // Multi-Cloud Object Storage Management</span>
                  <div className="h-0.5 w-12 bg-amber-500 mt-1"></div>
                </div>
                <ProductCard
                  title="Vault Drop Explorer"
                  subtitle="Secure Multi-Cloud Object Storage File Manager"
                  description="A streamlined, secure desktop and web file manager for AWS S3 and Oracle Cloud Infrastructure (OCI) Object Storage. Features client-side encrypted credentials, rapid multi-part parallel file transfers, and presigned URL sharing."
                  tags={["React 19", "AWS S3 SDK", "OCI Object Storage", "Tailwind CSS", "Encrypted Vault", "Presigned URLs"]}
                  features={vaultDropFeatures}
                  status="released"
                  logoUrl="/vault-drop-logo.png"
                  demoUrl="https://vaultdrop.sanchez.ph"
                  accentColor="amber"
                  onInquiry={openInquiry}
                />
              </div>

              {/* Synapse Section */}
              <div>
                <div className="mb-6">
                  <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest font-mono">07 // Engineering & Academic Mastery Engine</span>
                  <div className="h-0.5 w-12 bg-indigo-500 mt-1"></div>
                </div>
                <ProductCard
                  title="Synapse"
                  subtitle="Offline-First Spaced Repetition Engine for Engineering"
                  description="An academic-grade, offline-first Spaced Repetition System (SRS) learning platform for high-retention mastery across technical domains. Features modular Knowledge Packs, zero-knowledge HMAC certificates, and comprehensive Scholar Dossier analytics."
                  tags={["Flutter", "Drift (SQLite)", "Riverpod", "Next.js 16", "Spaced Repetition (SRS)", "HMAC Certs"]}
                  features={synapseFeatures}
                  status="released"
                  logoUrl="/synapse-logo.png"
                  demoUrl="https://synapse.sanchez.ph"
                  githubUrl="https://github.com/tildemark/synapse"
                  accentColor="indigo"
                  onInquiry={openInquiry}
                />
              </div>
            </>
          )
        )}

        {/* Active Development Pipelines */}
        {(activeCategory === "all" || activeCategory === "wip") && (
          <div>
            <div className="mb-8">
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest font-mono">08 // Active Development Pipelines</span>
              <div className="h-0.5 w-12 bg-indigo-500 mt-1"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Tanod */}
              <div className="relative overflow-hidden rounded-2xl border border-gray-800/80 bg-gray-950/25 p-6 flex flex-col justify-between hover:border-indigo-500/20 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">WIP</span>
                    <div className="text-gray-500 text-base"><i className="fas fa-shield-halved"></i></div>
                  </div>
                  <h4 className="font-display font-extrabold text-lg text-white mb-1">TANOD</h4>
                  <p className="text-[10px] text-indigo-400 font-semibold font-mono uppercase tracking-wider mb-3">DPO Compliance Suite</p>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Data Protection Officer (DPO) workspace designed for Philippine National Privacy Commission (NPC) compliance, featuring AI-powered risk assessment matrices.
                  </p>
                </div>
                <button
                  onClick={() => openInquiry("Tanod")}
                  className="mt-6 w-full py-2 rounded-lg bg-gray-900 hover:bg-gray-800 text-gray-300 font-semibold text-xs tracking-wider uppercase border border-gray-800 cursor-pointer transition-colors"
                >
                  Join Waitlist
                </button>
              </div>

              {/* Tala */}
              <div className="relative overflow-hidden rounded-2xl border border-gray-800/80 bg-gray-950/25 p-6 flex flex-col justify-between hover:border-indigo-500/20 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">WIP</span>
                    <div className="text-gray-500 text-base"><i className="fas fa-file-invoice"></i></div>
                  </div>
                  <h4 className="font-display font-extrabold text-lg text-white mb-1">TALA</h4>
                  <p className="text-[10px] text-indigo-400 font-semibold font-mono uppercase tracking-wider mb-3">BIR Tax & Ledger Assistant</p>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Compliance accountant tool targeting BIR bookkeeping regulations. Streamlines journal ledgers, sales reporting, and tax allocation files.
                  </p>
                </div>
                <button
                  onClick={() => openInquiry("Tala")}
                  className="mt-6 w-full py-2 rounded-lg bg-gray-900 hover:bg-gray-800 text-gray-300 font-semibold text-xs tracking-wider uppercase border border-gray-800 cursor-pointer transition-colors"
                >
                  Join Waitlist
                </button>
              </div>

              {/* Apex Smile */}
              <div className="relative overflow-hidden rounded-2xl border border-gray-800/80 bg-gray-950/25 p-6 flex flex-col justify-between hover:border-indigo-500/20 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">WIP</span>
                    <div className="text-gray-500 text-base"><i className="fas fa-tooth"></i></div>
                  </div>
                  <h4 className="font-display font-extrabold text-lg text-white mb-1">APEX SMILE</h4>
                  <p className="text-[10px] text-indigo-400 font-semibold font-mono uppercase tracking-wider mb-3">Dentist Booking Platform</p>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Clinical management and patient appointment system for modern dental clinics, integrating automated calendar scheduling and treatment histories.
                  </p>
                </div>
                <button
                  onClick={() => openInquiry("Apex Smile")}
                  className="mt-6 w-full py-2 rounded-lg bg-gray-900 hover:bg-gray-800 text-gray-300 font-semibold text-xs tracking-wider uppercase border border-gray-800 cursor-pointer transition-colors"
                >
                  Join Waitlist
                </button>
              </div>

              {/* Beacon */}
              <div className="relative overflow-hidden rounded-2xl border border-gray-800/80 bg-gray-950/25 p-6 flex flex-col justify-between hover:border-indigo-500/20 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">WIP</span>
                    <div className="text-gray-500 text-base"><i className="fas fa-ship"></i></div>
                  </div>
                  <h4 className="font-display font-extrabold text-lg text-white mb-1">BEACON</h4>
                  <p className="text-[10px] text-indigo-400 font-semibold font-mono uppercase tracking-wider mb-3">Maritime Attendance Engine</p>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Biometric employee attendance sync engine built to connect ocean fleet networks with shore-based head offices under limited satellite links.
                  </p>
                </div>
                <button
                  onClick={() => openInquiry("Beacon")}
                  className="mt-6 w-full py-2 rounded-lg bg-gray-900 hover:bg-gray-800 text-gray-300 font-semibold text-xs tracking-wider uppercase border border-gray-800 cursor-pointer transition-colors"
                >
                  Join Waitlist
                </button>
              </div>

              {/* Cellular Bridge */}
              <div className="relative overflow-hidden rounded-2xl border border-gray-800/80 bg-gray-950/25 p-6 flex flex-col justify-between hover:border-indigo-500/20 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">WIP</span>
                    <div className="text-gray-500 text-base"><i className="fas fa-tower-cell"></i></div>
                  </div>
                  <h4 className="font-display font-extrabold text-lg text-white mb-1">CELLULAR BRIDGE</h4>
                  <p className="text-[10px] text-indigo-400 font-semibold font-mono uppercase tracking-wider mb-3">Remote Telemetry & Gateway</p>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Edge computing telemetry gateway for remote sites and vessels, bridging local RS485/Modbus sensor data over resilient cellular and satellite links.
                  </p>
                </div>
                <button
                  onClick={() => openInquiry("Cellular Bridge")}
                  className="mt-6 w-full py-2 rounded-lg bg-gray-900 hover:bg-gray-800 text-gray-300 font-semibold text-xs tracking-wider uppercase border border-gray-800 cursor-pointer transition-colors"
                >
                  Join Waitlist
                </button>
              </div>

              {/* Susi */}
              <div className="relative overflow-hidden rounded-2xl border border-gray-800/80 bg-gray-950/25 p-6 flex flex-col justify-between hover:border-indigo-500/20 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">WIP</span>
                    <div className="text-gray-500 text-base"><i className="fas fa-key"></i></div>
                  </div>
                  <h4 className="font-display font-extrabold text-lg text-white mb-1">SUSI</h4>
                  <p className="text-[10px] text-indigo-400 font-semibold font-mono uppercase tracking-wider mb-3">Key & Access Locker Suite</p>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Smart physical key management and digital credential locker for facility managers, auditing access logs and hardware checkout protocols.
                  </p>
                </div>
                <button
                  onClick={() => openInquiry("Susi")}
                  className="mt-6 w-full py-2 rounded-lg bg-gray-900 hover:bg-gray-800 text-gray-300 font-semibold text-xs tracking-wider uppercase border border-gray-800 cursor-pointer transition-colors"
                >
                  Join Waitlist
                </button>
              </div>

              {/* MLBB Forge */}
              <div className="relative overflow-hidden rounded-2xl border border-gray-800/80 bg-gray-950/25 p-6 flex flex-col justify-between hover:border-indigo-500/20 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">WIP</span>
                    <div className="text-gray-500 text-base"><i className="fas fa-gamepad"></i></div>
                  </div>
                  <h4 className="font-display font-extrabold text-lg text-white mb-1">MLBB FORGE</h4>
                  <p className="text-[10px] text-indigo-400 font-semibold font-mono uppercase tracking-wider mb-3">Esports Analytics & Draft Builder</p>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Competitive esports analytical companion offering real-time draft recommendations, hero counter synergies, and performance telemetry tracking.
                  </p>
                </div>
                <button
                  onClick={() => openInquiry("MLBB Forge")}
                  className="mt-6 w-full py-2 rounded-lg bg-gray-900 hover:bg-gray-800 text-gray-300 font-semibold text-xs tracking-wider uppercase border border-gray-800 cursor-pointer transition-colors"
                >
                  Join Waitlist
                </button>
              </div>

              {/* SolarCalc */}
              <div className="relative overflow-hidden rounded-2xl border border-gray-800/80 bg-gray-950/25 p-6 flex flex-col justify-between hover:border-indigo-500/20 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">WIP</span>
                    <div className="text-gray-500 text-base"><i className="fas fa-solar-panel"></i></div>
                  </div>
                  <h4 className="font-display font-extrabold text-lg text-white mb-1">SOLARCALC</h4>
                  <p className="text-[10px] text-indigo-400 font-semibold font-mono uppercase tracking-wider mb-3">Photovoltaic Sizing & ROI Tool</p>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Industrial solar array estimator calculating kilowatt output projections, battery storage requirements, and payback ROI models for commercial sites.
                  </p>
                </div>
                <button
                  onClick={() => openInquiry("SolarCalc")}
                  className="mt-6 w-full py-2 rounded-lg bg-gray-900 hover:bg-gray-800 text-gray-300 font-semibold text-xs tracking-wider uppercase border border-gray-800 cursor-pointer transition-colors"
                >
                  Join Waitlist
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Philosophy Section */}
        <section id="philosophy" className="py-8 border-t border-gray-900">
          <div className="mb-8">
            <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 font-mono">Philosophy & Architecture</span>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white mt-2 leading-tight">Rugged Hardware Meets Strict Compliance</h3>
            <p className="text-gray-400 text-sm mt-2 leading-relaxed max-w-3xl">
              As Head of IT and Data Protection Officer at Avega Bros Integrated Shipping Corp., my focus is building resilient software environments that stand up to rough environments—whether that is a shipping vessel at sea or a strict ISO compliance audit.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pillar 1: On-Premises Isolation */}
            <div className="p-6 rounded-2xl bg-gray-950/30 border border-gray-900 space-y-3 hover:border-cyan-500/30 transition-colors">
              <div className="text-cyan-400 text-lg"><i className="fas fa-server"></i></div>
              <h4 className="font-bold text-white text-sm">On-Premises Isolation</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                Cloud services fail when internet links drop. All primary solutions are engineered to be self-sufficient and dockerized within local intranet servers.
              </p>
            </div>

            {/* Pillar 2: Cryptographic Audit Ledgers */}
            <div className="p-6 rounded-2xl bg-gray-950/30 border border-gray-900 space-y-3 hover:border-emerald-500/30 transition-colors">
              <div className="text-emerald-400 text-lg"><i className="fas fa-fingerprint"></i></div>
              <h4 className="font-bold text-white text-sm">Cryptographic Audit Ledgers</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                Using blockchain-inspired chained SHA-256 row hashes ensures absolute tamper-evident compliance for corporate tax and asset verification.
              </p>
            </div>

            {/* Pillar 3: DPO & Privacy Compliance */}
            <div className="p-6 rounded-2xl bg-gray-950/30 border border-gray-900 space-y-3 hover:border-indigo-500/30 transition-colors">
              <div className="text-indigo-400 text-lg"><i className="fas fa-user-shield"></i></div>
              <h4 className="font-bold text-white text-sm">DPO Privacy Compliance</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                Engineered around NPC (National Privacy Commission) and DPO regulations, featuring strict role permissions and automated privacy risk matrices.
              </p>
            </div>

            {/* Pillar 4: Offline-First Telemetry & IoT */}
            <div className="p-6 rounded-2xl bg-gray-950/30 border border-gray-900 space-y-3 hover:border-amber-500/30 transition-colors">
              <div className="text-amber-400 text-lg"><i className="fas fa-tower-cell"></i></div>
              <h4 className="font-bold text-white text-sm">Offline-First Telemetry & IoT</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                Seamless local SQLite/Modbus telemetry logging for edge sites and vessels, automatically synchronizing data when cellular or satellite links reconnect.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="py-12 border-t border-gray-900">
          <div className="max-w-xl mx-auto text-center mb-10">
            <h3 className="font-display text-3xl font-extrabold text-white">General Inquiries</h3>
            <p className="text-gray-400 text-sm mt-2">Have custom integration requirements? Let's discuss your project.</p>
          </div>

          <div className="max-w-xl mx-auto rounded-2xl border border-gray-900 bg-gray-950/20 p-6 sm:p-8 backdrop-blur-sm">
            {contactSubmitted ? (
              <div className="text-center py-6">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xl mb-4">
                  <i className="fas fa-envelope-open-text"></i>
                </div>
                <h4 className="font-semibold text-white text-lg">Message Delivered!</h4>
                <p className="text-gray-400 text-xs mt-2">I will get back to you shortly. Feel free to also send an email to <a href="mailto:derf@sanchez.ph" className="text-cyan-400 hover:underline">derf@sanchez.ph</a>.</p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Name</label>
                  <input
                    type="text"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="Alfredo Sanchez"
                    className="w-full px-4 py-3 rounded-xl bg-gray-950 border border-gray-800 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 text-white transition-all text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Email Address</label>
                  <input
                    type="email"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="derf@sanchez.ph"
                    className="w-full px-4 py-3 rounded-xl bg-gray-950 border border-gray-800 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 text-white transition-all text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Message</label>
                  <textarea
                    rows={4}
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    placeholder="Tell me about your organization or project needs..."
                    className="w-full px-4 py-3 rounded-xl bg-gray-950 border border-gray-800 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 text-white transition-all text-sm resize-none"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={contactLoading}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 text-slate-950 font-bold text-xs tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-65"
                >
                  {contactLoading ? (
                    <>
                      <i className="fas fa-spinner animate-spin"></i>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane"></i>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-auto py-8 border-t border-gray-900 bg-gray-950/45 text-center">
        <div className="flex justify-center gap-6 text-xl text-gray-500 mb-4">
          <a href="https://github.com/tildemark" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/tildemark" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:derf@sanchez.ph" className="hover:text-white transition-colors" aria-label="Email">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        <p className="text-xs text-gray-600">
          © 2026 Sanchez Solutions. Designed to showcase enterprise projects. Visit personal bio at <a href="https://sanchez.ph" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">sanchez.ph</a>.
        </p>
      </footer>

      {/* Pricing / Inquiries Modal */}
      <PricingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedProduct={modalProduct}
      />
    </div>
  );
}
