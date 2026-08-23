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
                    <p className="text-[10px] text-amber-400 font-semibold font-mono uppercase tracking-wider mb-2">Smart Badge Design Studio</p>
                    <p className="text-gray-400 text-xs leading-relaxed mb-4">
                      Drag-and-drop vector card editor with dynamic CSV batch printing and smart RFID tag encoding.
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {["Next.js", "Canvas API", "Tailwind", "RFID/NFC"].map((t) => (
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
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest font-mono">03 // Custom Card & Badge Design Studio</span>
                  <div className="h-0.5 w-12 bg-amber-500 mt-1"></div>
                </div>
                <ProductCard
                  title="CCARD Studio"
                  subtitle="Smart Card & Identification Design Platform"
                  description="A comprehensive web design suite and issuance platform built for custom ID badging, RFID access smart cards, and corporate asset tags with dynamic template rendering and print automation."
                  tags={["Next.js", "TypeScript", "Canvas API", "Tailwind CSS", "SVG Export", "RFID/NFC"]}
                  features={[
                    {
                      title: "Visual Card Editor",
                      desc: "Drag-and-drop vector layout engine for custom ID badges, membership cards, and asset tags.",
                      icon: "fas fa-id-card",
                    },
                    {
                      title: "Dynamic Data Binding & Batch Print",
                      desc: "Import CSV/JSON data sources to instantly batch generate and export high-resolution print-ready cards.",
                      icon: "fas fa-print",
                    },
                    {
                      title: "Smart Card Encoding Suite",
                      desc: "Integrate RFID, NFC data structures, and dynamic 2D barcodes into badge templates for hardware scanners.",
                      icon: "fas fa-microchip",
                    },
                    {
                      title: "Role-Based Issuance Control",
                      desc: "Audit logs and approval workflows ensuring secure printing and anti-duplication enforcement.",
                      icon: "fas fa-user-shield",
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
            </>
          )
        )}

        {/* Active Development Pipelines */}
        {(activeCategory === "all" || activeCategory === "wip") && (
          <div>
            <div className="mb-8">
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest font-mono">04 // Active Development Pipelines</span>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 font-mono">Philosophy & Arch</span>
              <h3 className="font-display text-2xl font-extrabold text-white mt-2 leading-tight">Rugged Hardware Meets Compliance</h3>
              <p className="text-gray-400 text-xs mt-3 leading-relaxed">
                As Head of IT and Data Protection Officer at Avega Bros Integrated Shipping Corp., my focus is building resilient software environments that stand up to rough environments—whether that is a shipping vessel at sea or a strict ISO compliance audit.
              </p>
            </div>

            {/* Pillar 1: On-Premises Isolation */}
            <div className="p-6 rounded-2xl bg-gray-950/30 border border-gray-900 space-y-3 hover:border-cyan-500/30 transition-colors">
              <div className="text-cyan-400 text-lg"><i className="fas fa-server"></i></div>
              <h4 className="font-bold text-white text-sm">On-Premises Isolation</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                Cloud services fail when internet links drop. All primary solutions are engineered to be self-sufficient and dockerized within local intranet servers.
              </p>
            </div>

            {/* Pillar 2: Secured Audit Ledgers */}
            <div className="p-6 rounded-2xl bg-gray-950/30 border border-gray-900 space-y-3 hover:border-emerald-500/30 transition-colors">
              <div className="text-emerald-400 text-lg"><i className="fas fa-fingerprint"></i></div>
              <h4 className="font-bold text-white text-sm">Secured Audit Ledgers</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                Using chained row hashes (SHA-256) ensures absolute ledger compliance, perfect for corporate tax reconciliations or inventory asset verification.
              </p>
            </div>

            {/* Pillar 3: Edge IoT & Remote Telemetry */}
            <div className="p-6 rounded-2xl bg-gray-950/30 border border-gray-900 space-y-3 hover:border-amber-500/30 transition-colors">
              <div className="text-amber-400 text-lg"><i className="fas fa-tower-cell"></i></div>
              <h4 className="font-bold text-white text-sm">Edge IoT & Telemetry</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                Integrating local hardware sensors (RS485/Modbus/RFID) with cellular and satellite gateways like Cellular Bridge for low-latency remote monitoring.
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
