import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Users, Calendar, Flag, Star, Sparkles, Award, Images, ChevronDown, ChevronUp, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { journeyGroups } from '../data/portfolioData';

const iconMap = {
  briefcase: Briefcase,
  users: Users,
  calendar: Calendar,
  flag: Flag,
  star: Star,
  sparkles: Sparkles,
  award: Award,
};

const colorMap = {
  olive: {
    card: 'bg-[#3E4F25]',
    badge: 'bg-[#3E4F25] text-white',
    border: 'border-[#3E4F25]',
    dot: 'bg-[#3E4F25]',
    lightBg: 'bg-[#EAF0E1]',
    text: 'text-[#3E4F25]',
  },
  lavender: {
    card: 'bg-[#D6C7E8]',
    badge: 'bg-[#B9A1D3] text-charcoal',
    border: 'border-[#B9A1D3]',
    dot: 'bg-[#B9A1D3]',
    lightBg: 'bg-[#F6F1FA]',
    text: 'text-[#6B4C9A]',
  },
  sky: {
    card: 'bg-[#BDE0F7]',
    badge: 'bg-[#BDE0F7] text-charcoal',
    border: 'border-[#8BC8ED]',
    dot: 'bg-[#8BC8ED]',
    lightBg: 'bg-[#EBF5FC]',
    text: 'text-[#2A7AB5]',
  },
  lime: {
    card: 'bg-[#E2F86B]',
    badge: 'bg-[#D4F34A] text-charcoal',
    border: 'border-[#B8D63E]',
    dot: 'bg-[#B8D63E]',
    lightBg: 'bg-[#F5FCD6]',
    text: 'text-[#4A6B0A]',
  },
};

// Photo Gallery Modal
function PhotoGalleryModal({ photos, title, onClose }) {
  const [activePhoto, setActivePhoto] = useState(0);

  React.useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setActivePhoto(p => (p + 1) % photos.length);
      if (e.key === 'ArrowLeft') setActivePhoto(p => (p - 1 + photos.length) % photos.length);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [photos.length, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-charcoal/85 backdrop-blur-md z-50 flex items-center justify-center p-3 sm:p-6"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-cream-50 rounded-3xl border-4 border-charcoal shadow-retro-xl w-full max-w-4xl max-h-[92vh] flex flex-col overflow-hidden"
      >
        {/* Header */}
        <div className="px-5 py-4 border-b-2 border-charcoal flex items-center justify-between bg-[#3E4F25] text-white flex-shrink-0">
          <div className="flex items-center gap-2.5 min-w-0 pr-3">
            <div className="p-1.5 bg-white/15 rounded-lg flex-shrink-0">
              <Images className="w-4 h-4 text-cream-100" />
            </div>
            <h3 className="font-serif font-bold text-sm sm:text-base truncate">{title}</h3>
          </div>
          <button 
            onClick={onClose} 
            className="p-1.5 sm:p-2 rounded-xl bg-white/20 hover:bg-white/30 text-white transition-all hover:scale-105 active:scale-95 flex-shrink-0"
            title="Tutup (Esc)"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Modal Body / Photo Container */}
        <div className="p-4 sm:p-6 flex-1 flex flex-col min-h-0 overflow-y-auto">
          {/* Main Photo View Area */}
          <div className="relative rounded-2xl overflow-hidden border-2 border-charcoal bg-charcoal/[0.04] flex items-center justify-center flex-1 min-h-[340px] max-h-[62vh] sm:max-h-[68vh] p-2">
            <AnimatePresence mode="wait">
              <motion.img
                key={activePhoto}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                src={photos[activePhoto]}
                alt={`Dokumentasi ${activePhoto + 1}`}
                className="max-h-[58vh] sm:max-h-[65vh] w-auto max-w-full object-contain rounded-xl select-none"
              />
            </AnimatePresence>

            {/* Floating Navigation Arrows on Photo (Left / Right) */}
            {photos.length > 1 && (
              <>
                <button
                  onClick={() => setActivePhoto(p => (p - 1 + photos.length) % photos.length)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 bg-white/90 hover:bg-white text-charcoal border-2 border-charcoal rounded-2xl shadow-retro hover:scale-105 active:scale-95 transition-all backdrop-blur-sm z-10"
                  aria-label="Foto sebelumnya"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                <button
                  onClick={() => setActivePhoto(p => (p + 1) % photos.length)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 bg-white/90 hover:bg-white text-charcoal border-2 border-charcoal rounded-2xl shadow-retro hover:scale-105 active:scale-95 transition-all backdrop-blur-sm z-10"
                  aria-label="Foto berikutnya"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </>
            )}

            {/* Photo Counter Badge */}
            <div className="absolute bottom-3 right-3 bg-charcoal/85 text-white font-sans font-bold text-xs px-3 py-1.5 rounded-xl backdrop-blur-md border border-white/20 shadow-md">
              {activePhoto + 1} / {photos.length}
            </div>
          </div>

          {/* Navigation Controls & Thumbnails */}
          {photos.length > 1 && (
            <div className="mt-4 flex flex-col items-center gap-3 flex-shrink-0">
              {/* Pagination Dots */}
              <div className="flex items-center gap-2">
                {photos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActivePhoto(i)}
                    className={`rounded-full transition-all duration-300 ${
                      i === activePhoto ? 'w-7 h-2.5 bg-[#3E4F25]' : 'w-2.5 h-2.5 bg-charcoal/30 hover:bg-charcoal/50'
                    }`}
                    aria-label={`Ke foto ${i + 1}`}
                  />
                ))}
              </div>

              {/* Thumbnails Row */}
              <div className="flex items-center justify-center gap-2.5 flex-wrap">
                {photos.map((photo, i) => (
                  <button
                    key={i}
                    onClick={() => setActivePhoto(i)}
                    className={`h-14 sm:h-16 w-20 sm:w-24 rounded-xl overflow-hidden border-2 transition-all ${
                      i === activePhoto ? 'border-[#3E4F25] ring-2 ring-[#3E4F25]/40 scale-105 shadow-retro' : 'border-charcoal/20 opacity-70 hover:opacity-100 hover:border-charcoal/50'
                    }`}
                  >
                    <img src={photo} alt={`thumb ${i+1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ExperienceSection() {
  const [expandedGroup, setExpandedGroup] = useState(null);
  const [photoModal, setPhotoModal] = useState(null); // { photos: [], title: '' }

  // Marquee ticker items for the dark ribbon
  const marqueeItems = [
    "UI/UX DESIGN", "✦", "FRONTEND DEVELOPMENT", "✦", "PKM RESEARCH AWARDEE", "✦",
    "FIGMA TO REACT", "✦", "OPEN FOR COLLABORATIONS", "✦", "FREELANCE & FULLTIME", "✦",
    "UI/UX DESIGN", "✦", "FRONTEND DEVELOPMENT", "✦", "PKM RESEARCH AWARDEE", "✦",
    "FIGMA TO REACT", "✦", "OPEN FOR COLLABORATIONS", "✦", "FREELANCE & FULLTIME", "✦"
  ];

  const toggleGroup = (id) => {
    setExpandedGroup(prev => prev === id ? null : id);
  };

  return (
    <section id="journey" className="relative">
      
      {/* ── Dark Ribbon Marquee Ticker ── */}
      <div className="bg-charcoal text-cream-50 py-3.5 border-y-2 border-charcoal overflow-hidden shadow-sm">
        <div className="flex gap-0 animate-marquee whitespace-nowrap">
          {marqueeItems.map((item, i) => (
            <span
              key={i}
              className={`inline-block font-serif tracking-widest text-sm uppercase px-6 ${
                item === "✦" ? "text-lime font-bold" : "text-white font-medium"
              }`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── Main Journey Section (Lavender Lilac Background) ── */}
      <div className="bg-lavender-theme text-charcoal py-20 sm:py-28 px-4 sm:px-8 relative overflow-hidden">
        
        <div className="max-w-5xl mx-auto space-y-12 relative z-10">
          
          {/* ── Section Title ── */}
          <div className="text-center relative">
            <div className="inline-block relative">
              <h2 className="font-serif font-black text-4xl sm:text-6xl tracking-tight text-charcoal">
                My JOURNEY <span className="font-script font-bold italic text-3xl sm:text-5xl text-charcoal/80">(so far)</span>
              </h2>

              {/* Hand-drawn curly doodle arrow */}
              <div className="absolute -right-12 sm:-right-16 -bottom-6 text-charcoal select-none">
                <svg width="45" height="45" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M10,10 C25,2 45,15 35,30 C25,45 15,28 35,38" />
                  <polyline points="30,42 38,40 38,32" />
                </svg>
              </div>
            </div>

            <p className="font-sans font-semibold text-xs sm:text-sm text-charcoal/70 uppercase tracking-widest mt-3">
              Jejak langkah, pengalaman magang, organisasi, kepanitiaan, dan riset
            </p>
          </div>

          {/* ── Journey Group Cards ── */}
          <div className="space-y-5">
            {journeyGroups.map((group, gIdx) => {
              const IconComp = iconMap[group.icon] || Sparkles;
              const colors = colorMap[group.color] || colorMap.olive;
              const isExpanded = expandedGroup === group.id;

              return (
                <motion.div
                  key={group.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: gIdx * 0.08, duration: 0.5 }}
                  className="bg-white rounded-2xl border-2 border-charcoal shadow-retro overflow-hidden"
                >
                  {/* ── Group Header (Clickable to Expand) ── */}
                  <button
                    onClick={() => toggleGroup(group.id)}
                    className="w-full flex items-center gap-4 p-5 sm:p-6 text-left hover:bg-cream-50/50 transition-colors group"
                  >
                    {/* Icon Badge */}
                    <div className={`w-12 h-12 rounded-xl ${colors.badge} border-2 border-charcoal/20 flex items-center justify-center flex-shrink-0 shadow-sm`}>
                      <IconComp className="w-5 h-5" />
                    </div>

                    {/* Title & Subtitle */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif font-black text-lg sm:text-xl text-charcoal leading-tight">
                        {group.title}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-charcoal/60 font-medium uppercase tracking-wider mt-0.5">
                        {group.subtitle}
                      </p>
                    </div>

                    {/* Item Count + Expand Arrow */}
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <span className={`${colors.lightBg} ${colors.text} font-sans font-extrabold text-xs px-3 py-1 rounded-full border ${colors.border}`}>
                        {group.items.length} item
                      </span>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-charcoal/50"
                      >
                        <ChevronDown className="w-5 h-5" />
                      </motion.div>
                    </div>
                  </button>

                  {/* ── Expanded Items List ── */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="border-t-2 border-charcoal/15 px-5 sm:px-6 pb-5 pt-4 space-y-3">
                          {group.items.map((item, iIdx) => (
                            <motion.div
                              key={iIdx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: iIdx * 0.06 }}
                              className={`flex items-start gap-3 p-3.5 sm:p-4 rounded-xl ${colors.lightBg} border ${colors.border}/30`}
                            >
                              {/* Numbered Dot */}
                              <div className={`w-7 h-7 rounded-lg ${colors.dot} text-white font-sans font-extrabold text-xs flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                {iIdx + 1}
                              </div>

                              {/* Content */}
                              <div className="flex-1 min-w-0">
                                <p className="font-serif font-bold text-sm sm:text-base text-charcoal leading-snug">
                                  {item.role}
                                </p>
                                <p className="font-sans text-xs sm:text-sm text-charcoal/70 font-medium mt-0.5">
                                  {item.organization}
                                  {item.period && <span className="text-charcoal/50"> — {item.period}</span>}
                                </p>
                                {item.description && (
                                  <p className="font-sans text-xs text-charcoal/55 mt-1 italic">
                                    {item.description}
                                  </p>
                                )}
                              </div>

                              {/* Photo Button (if photos exist) */}
                              {item.photos && item.photos.length > 0 && (
                                <button
                                  onClick={() => setPhotoModal({ photos: item.photos, title: `${item.organization} — ${item.role}` })}
                                  className="flex items-center gap-1.5 bg-white text-charcoal font-sans font-bold text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-lg border border-charcoal/20 hover:border-charcoal/50 hover:shadow-sm transition-all flex-shrink-0 mt-0.5"
                                >
                                  <Images className="w-3 h-3" />
                                  Foto ({item.photos.length})
                                </button>
                              )}
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>

      {/* Photo Gallery Modal */}
      <AnimatePresence>
        {photoModal && (
          <PhotoGalleryModal
            photos={photoModal.photos}
            title={photoModal.title}
            onClose={() => setPhotoModal(null)}
          />
        )}
      </AnimatePresence>

    </section>
  );
}
