import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, Briefcase, Users, Calendar, MapPin, ChevronRight,
  Sparkles, Images, FileText, ChevronLeft, ChevronRight as ChevronRightIcon,
  ZoomIn
} from 'lucide-react';

export default function ExperienceModal({ experience, onClose }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [activePhoto, setActivePhoto] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Close on ESC key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') {
        if (lightboxOpen) setLightboxOpen(false);
        else onClose();
      }
      if (lightboxOpen) {
        if (e.key === 'ArrowRight') setActivePhoto(p => (p + 1) % experience.photos.length);
        if (e.key === 'ArrowLeft') setActivePhoto(p => (p - 1 + experience.photos.length) % experience.photos.length);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxOpen, experience.photos.length, onClose]);

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const photos = experience.photos || [];
  const hasPhotos = photos.length > 0;

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-charcoal/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        {/* Modal Panel */}
        <motion.div
          key="modal"
          initial={{ opacity: 0, scale: 0.85, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 30 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-cream-50 rounded-3xl border-4 border-charcoal shadow-retro-lg w-full max-w-2xl max-h-[88vh] flex flex-col overflow-hidden"
        >
          {/* Modal Header */}
          <div className={`p-5 border-b-3 border-charcoal flex items-start justify-between gap-4 flex-shrink-0 relative overflow-hidden ${
            experience.type === 'magang' ? 'bg-maroon text-white' : 'bg-mustard text-charcoal'
          }`}>
            {/* Checkerboard subtle overlay */}
            <div className="absolute inset-0 bg-checker-maroon opacity-30 pointer-events-none" />

            <div className="relative z-10">
              {/* Type Badge */}
              <span className={`inline-flex items-center gap-1.5 font-display font-extrabold text-[10px] uppercase tracking-widest px-3 py-1 rounded-lg border mb-2 ${
                experience.type === 'magang'
                  ? 'bg-white/20 text-white border-white/30'
                  : 'bg-charcoal/15 text-charcoal border-charcoal/20'
              }`}>
                {experience.type === 'magang' ? <Briefcase className="w-3 h-3" /> : <Users className="w-3 h-3" />}
                {experience.type === 'magang' ? 'Internship' : 'Organization'}
              </span>

              <h2 className="font-display font-extrabold text-xl sm:text-2xl leading-tight">
                {experience.role}
              </h2>
              <p className={`font-display font-bold text-sm mt-1 ${
                experience.type === 'magang' ? 'text-white/80' : 'text-charcoal/70'
              }`}>
                {experience.organization}
              </p>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-3 mt-2">
                <span className={`flex items-center gap-1 text-xs font-display font-bold ${
                  experience.type === 'magang' ? 'text-white/70' : 'text-charcoal/60'
                }`}>
                  <Calendar className="w-3.5 h-3.5" /> {experience.period}
                </span>
                {experience.location && (
                  <span className={`flex items-center gap-1 text-xs font-display font-bold ${
                    experience.type === 'magang' ? 'text-white/70' : 'text-charcoal/60'
                  }`}>
                    <MapPin className="w-3.5 h-3.5" /> {experience.location}
                  </span>
                )}
              </div>
            </div>

            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400 }}
              onClick={onClose}
              className={`relative z-10 p-2 rounded-xl border-2 flex-shrink-0 ${
                experience.type === 'magang'
                  ? 'bg-white/20 border-white/40 text-white hover:bg-white/30'
                  : 'bg-charcoal/15 border-charcoal/30 text-charcoal hover:bg-charcoal/25'
              } transition-colors`}
            >
              <X className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Tabs */}
          <div className="flex border-b-2 border-charcoal bg-cream-100 flex-shrink-0">
            <button
              onClick={() => setActiveTab('overview')}
              className={`flex items-center gap-2 px-5 py-3 font-display font-extrabold text-sm border-r-2 border-charcoal transition-all ${
                activeTab === 'overview'
                  ? 'bg-cream-50 text-maroon border-b-2 border-b-cream-50'
                  : 'text-charcoal/60 hover:bg-cream-50 hover:text-charcoal'
              }`}
            >
              <FileText className="w-4 h-4" /> Overview
            </button>
            {hasPhotos && (
              <button
                onClick={() => setActiveTab('dokumentasi')}
                className={`flex items-center gap-2 px-5 py-3 font-display font-extrabold text-sm transition-all ${
                  activeTab === 'dokumentasi'
                    ? 'bg-cream-50 text-maroon'
                    : 'text-charcoal/60 hover:bg-cream-50 hover:text-charcoal'
                }`}
              >
                <Images className="w-4 h-4" /> Dokumentasi
                <span className="bg-maroon text-white text-[10px] font-display font-extrabold px-1.5 py-0.5 rounded-md">
                  {photos.length}
                </span>
              </button>
            )}
          </div>

          {/* Tab Content */}
          <div className="overflow-y-auto flex-1 p-6 space-y-5">
            <AnimatePresence mode="wait">

              {/* ===== OVERVIEW TAB ===== */}
              {activeTab === 'overview' && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-5"
                >
                  {/* Long Description */}
                  {experience.longDescription && (
                    <div className="bg-cream-card rounded-2xl p-5 border-2 border-charcoal/20 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-maroon rounded-l-2xl" />
                      <p className="text-charcoal text-sm leading-relaxed pl-3">
                        {experience.longDescription}
                      </p>
                    </div>
                  )}

                  {/* Highlights */}
                  <div>
                    <h4 className="font-display font-extrabold text-sm uppercase tracking-wider text-charcoal/60 mb-3">
                      ✦ Key Highlights
                    </h4>
                    <div className="space-y-2">
                      {experience.highlights.map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.07 }}
                          className="flex items-start gap-3 bg-white rounded-xl p-3 border border-charcoal/15"
                        >
                          <div className="w-5 h-5 bg-maroon rounded-md flex items-center justify-center flex-shrink-0 mt-0.5">
                            <ChevronRight className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-charcoal text-sm font-medium">{h}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  {experience.techStack && experience.techStack.length > 0 && (
                    <div>
                      <h4 className="font-display font-extrabold text-sm uppercase tracking-wider text-charcoal/60 mb-3">
                        ✦ Tech & Tools
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.techStack.map((tech, i) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05, type: 'spring', stiffness: 300 }}
                            whileHover={{ scale: 1.1, rotate: -2 }}
                            className="bg-maroon-soft text-maroon font-display font-extrabold text-xs px-3 py-1.5 rounded-lg border border-maroon/25 cursor-default"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Footer note */}
                  <div className="flex items-center justify-between text-[11px] font-display font-bold text-charcoal/40 pt-2 border-t border-charcoal/10">
                    <span>VERIFIED EXPERIENCE</span>
                    <Sparkles className="w-3.5 h-3.5 text-mustard" />
                  </div>
                </motion.div>
              )}

              {/* ===== DOKUMENTASI TAB ===== */}
              {activeTab === 'dokumentasi' && (
                <motion.div
                  key="dokumentasi"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  {/* Main Featured Photo */}
                  <div className="relative rounded-2xl overflow-hidden border-3 border-charcoal shadow-retro group cursor-pointer"
                    onClick={() => setLightboxOpen(true)}
                  >
                    <motion.img
                      key={activePhoto}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      src={photos[activePhoto]}
                      alt={`Dokumentasi ${activePhoto + 1}`}
                      className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-charcoal/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="bg-white/90 rounded-xl px-4 py-2 flex items-center gap-2 font-display font-extrabold text-sm text-charcoal">
                        <ZoomIn className="w-4 h-4" /> Klik untuk zoom
                      </div>
                    </div>
                    {/* Counter badge */}
                    <div className="absolute bottom-3 right-3 bg-charcoal/80 text-white font-display font-bold text-xs px-2 py-1 rounded-lg backdrop-blur-sm">
                      {activePhoto + 1} / {photos.length}
                    </div>
                  </div>

                  {/* Prev/Next buttons */}
                  {photos.length > 1 && (
                    <div className="flex items-center justify-center gap-3">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setActivePhoto(p => (p - 1 + photos.length) % photos.length)}
                        className="p-2 bg-cream-card border-2 border-charcoal rounded-xl shadow-retro font-display font-extrabold text-charcoal hover:bg-white transition-colors"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </motion.button>

                      {/* Dot indicators */}
                      <div className="flex gap-2">
                        {photos.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setActivePhoto(i)}
                            className={`rounded-full transition-all ${
                              i === activePhoto
                                ? 'w-5 h-3 bg-maroon'
                                : 'w-3 h-3 bg-charcoal/30 hover:bg-charcoal/50'
                            }`}
                          />
                        ))}
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setActivePhoto(p => (p + 1) % photos.length)}
                        className="p-2 bg-cream-card border-2 border-charcoal rounded-xl shadow-retro font-display font-extrabold text-charcoal hover:bg-white transition-colors"
                      >
                        <ChevronRightIcon className="w-5 h-5" />
                      </motion.button>
                    </div>
                  )}

                  {/* Thumbnail Strip */}
                  {photos.length > 1 && (
                    <div className="grid grid-cols-4 gap-2">
                      {photos.map((photo, i) => (
                        <motion.button
                          key={i}
                          whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? -1 : 1 }}
                          whileTap={{ scale: 0.97 }}
                          onClick={() => setActivePhoto(i)}
                          className={`relative h-16 rounded-xl overflow-hidden border-2 transition-all ${
                            i === activePhoto
                              ? 'border-maroon shadow-retro-maroon'
                              : 'border-charcoal/30 hover:border-charcoal'
                          }`}
                        >
                          <img src={photo} alt={`thumb ${i+1}`} className="w-full h-full object-cover" />
                          {i === activePhoto && (
                            <div className="absolute inset-0 ring-2 ring-inset ring-maroon rounded-xl" />
                          )}
                        </motion.button>
                      ))}
                    </div>
                  )}

                  {/* Tip note */}
                  <p className="text-[11px] text-charcoal/40 font-display font-bold text-center">
                    ✦ Ganti foto lewat portfolioData.js pada array <code className="bg-cream-card px-1 rounded">photos</code>
                  </p>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>

      {/* ===== LIGHTBOX ===== */}
      {lightboxOpen && (
        <motion.div
          key="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setLightboxOpen(false)}
          className="fixed inset-0 bg-charcoal/95 z-[60] flex items-center justify-center p-4"
        >
          <motion.img
            key={`lb-${activePhoto}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            src={photos[activePhoto]}
            alt="Zoom"
            className="max-w-full max-h-full rounded-2xl border-4 border-white shadow-2xl object-contain"
            onClick={e => e.stopPropagation()}
          />

          {/* Lightbox controls */}
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 p-2 bg-white/20 text-white rounded-xl border border-white/30 hover:bg-white/30 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          {photos.length > 1 && (
            <>
              <button
                onClick={e => { e.stopPropagation(); setActivePhoto(p => (p-1+photos.length)%photos.length); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 text-white rounded-xl border border-white/30 hover:bg-white/30 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={e => { e.stopPropagation(); setActivePhoto(p => (p+1)%photos.length); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 text-white rounded-xl border border-white/30 hover:bg-white/30 transition-colors"
              >
                <ChevronRightIcon className="w-6 h-6" />
              </button>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
