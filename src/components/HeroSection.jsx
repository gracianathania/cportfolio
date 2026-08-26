import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

export default function HeroSection() {
  return (
    <section id="home" className="relative bg-olive-theme text-cream-50 pt-12 pb-24 sm:pb-32 px-4 sm:px-8 overflow-hidden">

      {/* Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">

        {/* ── Left Column: Headline & Short Intro ── */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">

          {/* ── Signature Editorial Title ── */}
          <div className="space-y-1">
            <h1 className="leading-[1.1] text-white">
              <span className="font-serif italic font-normal text-3xl sm:text-4xl text-cream-200 block mb-1">
                Hello there, so
              </span>
              <span className="font-serif font-black text-4xl sm:text-6xl lg:text-7xl tracking-tighter text-white uppercase block mt-1">
                GLAD YOU'RE HERE!
              </span>
            </h1>
          </div>

          {/* Simple Short Intro */}
          <p className="text-cream-100/95 font-sans text-lg sm:text-xl font-medium pt-1">
            Hai, aku <strong className="text-white font-bold">{personalInfo.fullName}</strong> — biasa dipanggil <strong className="text-[#E2F86B] font-bold">Chaca</strong>!
          </p>

          {/* ── Action Buttons ── */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#about"
              className="bg-[#D6C7E8] hover:bg-[#EAE0F5] text-[#1D2416] font-sans font-extrabold text-xs uppercase tracking-widest px-7 py-3.5 rounded-full border-2 border-[#1D2416] shadow-retro transition-all"
            >
              KENALAN SAMA CHACA ↴
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="bg-[#D6C7E8] hover:bg-[#EAE0F5] text-[#1D2416] font-sans font-extrabold text-xs uppercase tracking-widest px-7 py-3.5 rounded-full border-2 border-[#1D2416] shadow-retro transition-all"
            >
              LIHAT KARYA SAYA ✦
            </motion.a>
          </div>

        </div>

        {/* ── Right Column: High-Positioned Realistic Wide Lanyard ID Card ── */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end -mt-12 lg:-mt-24 pt-0">
          <div className="relative flex flex-col items-center select-none">

            {/* Wide Fabric Lanyard Strap & Metal Clip Assembly */}
            <div className="flex flex-col items-center z-20 pointer-events-none">

              {/* Wide Fabric Patterned Strap */}
              <div
                className="w-14 sm:w-16 h-24 sm:h-28 border-x-2 border-charcoal/80 shadow-md relative overflow-hidden flex flex-col items-center justify-start"
                style={{
                  backgroundColor: '#E2F86B',
                  backgroundImage: `
                    repeating-linear-gradient(45deg, rgba(0,0,0,0.06) 0px, rgba(0,0,0,0.06) 1px, transparent 1px, transparent 4px),
                    repeating-linear-gradient(-45deg, rgba(255,255,255,0.12) 0px, rgba(255,255,255,0.12) 1px, transparent 1px, transparent 4px)
                  `
                }}
              >
                {/* Geometric Pattern Overlay (matching reference image #2 with palette colors) */}
                <svg width="100%" height="100%" viewBox="0 0 60 120" preserveAspectRatio="none" className="absolute inset-0 opacity-90">
                  <pattern id="lanyardGeo" width="60" height="40" patternUnits="userSpaceOnUse">
                    {/* Triangles & Chevron Motifs */}
                    <polygon points="0,0 30,20 0,40" fill="#3E4F25" />
                    <polygon points="60,0 30,20 60,40" fill="#D6C7E8" />
                    <polygon points="30,0 60,20 30,40" fill="#FAF7EE" opacity="0.8" />
                    <polygon points="30,0 0,20 30,40" fill="#E2F86B" opacity="0.6" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#lanyardGeo)" />
                </svg>

                {/* Silver Metal Rivet at top */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-tr from-slate-400 via-slate-100 to-slate-500 border border-charcoal/50 shadow-inner z-10" />
              </div>

              {/* Folded Fabric End & Metal Crimp Clamp (like real lanyards) */}
              <div className="w-14 sm:w-16 h-4 bg-gradient-to-b from-slate-300 via-slate-100 to-slate-400 border-2 border-charcoal rounded-sm shadow-sm flex items-center justify-center relative -mt-0.5 z-20">
                <div className="w-10 h-[1.5px] bg-charcoal/40" />
              </div>

              {/* Metallic Lobster Clasp & Ring Assembly */}
              <div className="flex flex-col items-center -mt-1 z-30">
                {/* Silver Ring */}
                <div className="w-7 h-7 rounded-full border-4 border-slate-300 bg-transparent shadow-xs -mt-1" />

                {/* Metallic Clip Hook */}
                <svg width="34" height="38" viewBox="0 0 34 38" fill="none" className="drop-shadow-md -mt-4">
                  <path d="M12 2C12 0.89543 12.8954 0 14 0H20 C21.1046 0 22 0.89543 22 2V6 H12 V2Z" fill="url(#clipMetal1)" />
                  <path d="M10 6 C10 4.34315 11.3431 3 13 3 H21 C22.6569 3 24 4.34315 24 6 V18 C24 23 20 27 17 34 C14 27 10 23 10 18 V6 Z" fill="url(#clipMetal2)" stroke="#1D2416" strokeWidth="1.5" />
                  <ellipse cx="17" cy="14" rx="3.5" ry="5" fill="#1D2416" opacity="0.2" />
                  <path d="M15 8 H19 V24 H15 Z" fill="url(#clipMetal1)" opacity="0.85" />
                  <defs>
                    <linearGradient id="clipMetal1" x1="0" y1="0" x2="34" y2="38" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#94A3B8" />
                      <stop offset="0.5" stopColor="#F8FAFC" />
                      <stop offset="1" stopColor="#475569" />
                    </linearGradient>
                    <linearGradient id="clipMetal2" x1="0" y1="0" x2="0" y2="38" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#CBD5E1" />
                      <stop offset="0.5" stopColor="#FFFFFF" />
                      <stop offset="1" stopColor="#64748B" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

            </div>

            {/* ── Draggable ID Card (Positioned Higher Up) ── */}
            <motion.div
              drag
              dragConstraints={{ left: -30, right: 30, top: -15, bottom: 30 }}
              dragElastic={0.2}
              whileDrag={{ scale: 1.03, cursor: 'grabbing' }}
              initial={{ rotate: -2, y: 0 }}
              animate={{ rotate: [-2, 1.5, -2], y: [0, 4, 0] }}
              transition={{
                rotate: { repeat: Infinity, duration: 5, ease: "easeInOut" },
                y: { repeat: Infinity, duration: 4, ease: "easeInOut" }
              }}
              className="bg-[#FAF7EE] text-charcoal p-4 sm:p-5 rounded-3xl border-3 border-charcoal shadow-retro-lg w-64 sm:w-72 -mt-5 relative z-10 cursor-grab group"
            >
              {/* Top Card Lanyard Slot Hole */}
              <div className="w-12 h-3.5 bg-charcoal/80 rounded-full mx-auto mb-3 border border-charcoal/20 shadow-inner flex items-center justify-center">
                <div className="w-8 h-1 bg-charcoal/40 rounded-full" />
              </div>

              {/* Title Header above photo */}
              <div className="text-center mb-3">
                <p className="font-serif font-black text-charcoal text-lg sm:text-xl tracking-tight uppercase leading-none">
                  your fav people
                </p>
                <p className="font-script text-olive text-sm font-bold mt-0.5">
                  ✦ official ID pass ✦
                </p>
              </div>

              {/* Chaca's Portrait Photo inside ID Card */}
              <div className="relative rounded-2xl overflow-hidden bg-olive-soft border-2 border-charcoal/30 shadow-sm mx-auto mb-3.5 group-hover:scale-[1.01] transition-transform">
                <img
                  src="/chaca-square.jpg"
                  alt={personalInfo.name}
                  className="w-full h-52 sm:h-60 object-cover object-top"
                />
              </div>

              {/* Name Tag Badge */}
              <div className="text-center space-y-1">
                <div className="inline-block bg-[#E2F86B] text-charcoal px-3.5 py-1 rounded-lg font-serif font-black text-base sm:text-lg border border-charcoal/20 shadow-xs">
                  {personalInfo.fullName}
                </div>
              </div>

              {/* Decorative Barcode Graphics */}
              <div className="pt-3 border-t border-dashed border-charcoal/25 mt-3">
                <div className="flex justify-center items-center gap-[2.5px] h-6 opacity-80">
                  {[12, 6, 18, 8, 22, 10, 14, 4, 20, 10, 16, 6, 22, 8, 12, 18, 10, 6, 20, 14, 8, 16, 10, 14, 6].map((h, i) => (
                    <div key={i} className="bg-charcoal w-[2px] rounded-full" style={{ height: `${h}px` }} />
                  ))}
                </div>
                <p className="text-[9px] font-mono text-center text-charcoal/50 mt-1 uppercase tracking-widest">
                  CHACA.SPACE // 2026-PASS
                </p>
              </div>

            </motion.div>

          </div>
        </div>

      </div>

      {/* ── Seamless Wavy Section Divider (Flowing into Cream) ── */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-16 sm:h-24 fill-[#FAF7EE]"
        >
          <path d="M0,0 C150,90 350,-40 500,50 C650,140 900,10 1200,60 L1200,120 L0,120 Z" />
        </svg>
      </div>

    </section>
  );
}
