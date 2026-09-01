"use client";

import React, { useState, useEffect } from "react";

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProduct: string;
}

export default function PricingModal({ isOpen, onClose, selectedProduct }: PricingModalProps) {
  const [product, setProduct] = useState(selectedProduct);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setProduct(selectedProduct);
  }, [selectedProduct]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setOrg("");
    setNotes("");
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
      <div 
        className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-gray-800 bg-[#0b0f19] p-8 shadow-2xl transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow Effects */}
        <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-800">
          <div>
            <h3 className="font-display text-2xl font-bold text-white tracking-tight">Licensing Inquiry</h3>
            <p className="text-sm text-gray-400 mt-1">Get custom enterprise deployment quotes</p>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg bg-gray-900/50 hover:bg-gray-800 border border-gray-800"
          >
            <i className="fas fa-times text-lg"></i>
          </button>
        </div>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-2xl mb-2 animate-bounce">
              <i className="fas fa-check"></i>
            </div>
            <h4 className="font-display text-xl font-bold text-white">Inquiry Received!</h4>
            <p className="text-gray-400 text-sm max-w-sm mx-auto">
              Thank you for your interest in <strong>{product}</strong>. We will review your organization's deployment requirements and contact you at <strong>{email}</strong> shortly.
            </p>
            <button
              onClick={handleReset}
              className="mt-6 px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-medium hover:from-cyan-400 hover:to-indigo-400 transition-all shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Product selection */}
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Select Solution</label>
              <select
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-gray-950/65 border border-gray-800 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 text-white font-medium transition-all"
                required
              >
                <option value="Trace">T.R.A.C.E. Asset Engine</option>
                <option value="EquiYield">EquiYield Cooperative Manager</option>
                <option value="CCARD Studio">CCARD Calling Card Generator</option>
                <option value="DPA Mastery">DPA Mastery - DPO Exam Prep</option>
                <option value="SILIP">SILIP - Legal & Privacy Search Engine</option>
                <option value="Vault Drop Explorer">Vault Drop Explorer - S3 & OCI File Manager</option>
                <option value="Tanod">Tanod Data Privacy Suite (Waitlist)</option>
                <option value="Tala">Tala BIR Accounting (Waitlist)</option>
                <option value="Apex Smile">Apex Smile Dentist Platform (Waitlist)</option>
                <option value="Beacon">Beacon Maritime Attendance (Waitlist)</option>
              </select>
            </div>

            {/* Form inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Alfredo Sanchez"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-gray-950/65 border border-gray-800 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 text-white transition-all text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Work Email</label>
                <input
                  type="email"
                  placeholder="derf@sanchez.ph"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-gray-950/65 border border-gray-800 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 text-white transition-all text-sm"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Company / Organization</label>
              <input
                type="text"
                placeholder="Avega Bros Shipping Corp."
                value={org}
                onChange={(e) => setOrg(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-gray-950/65 border border-gray-800 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 text-white transition-all text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Deployment Scope & Requirements</label>
              <textarea
                rows={3}
                placeholder="Specify on-premise hardware resources, user volume, or custom integrations required."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-gray-950/65 border border-gray-800 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 text-white transition-all text-sm resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-medium hover:from-cyan-400 hover:to-indigo-400 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/10 cursor-pointer disabled:opacity-65"
            >
              {loading ? (
                <>
                  <i className="fas fa-spinner animate-spin"></i>
                  Processing Request...
                </>
              ) : (
                <>
                  <i className="fas fa-paper-plane"></i>
                  Submit Quote Request
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
