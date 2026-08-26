import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Figma, Sparkles, FileText, Video, Eye, X, ArrowRight, CheckCircle2, Download } from 'lucide-react';
import { projects, projectCategories } from '../data/portfolioData';

// Project Detail Modal Component
function ProjectDetailModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState('detail'); // 'detail' | 'pdf'
  const [selectedPdf, setSelectedPdf] = useState(null);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  const getLinkIcon = (type) => {
    switch (type) {
      case 'prototype': return <Figma className="w-4 h-4 text-purple-600" />;
      case 'pdf': return <FileText className="w-4 h-4 text-red-600" />;
      case 'exe':
      case 'download': return <Download className="w-4 h-4 text-emerald-600" />;
      case 'video': return <Video className="w-4 h-4 text-blue-600" />;
      case 'github': return <Github className="w-4 h-4 text-charcoal" />;
      case 'demo': default: return <ExternalLink className="w-4 h-4 text-olive" />;
    }
  };

  const handleLinkClick = (link) => {
    if (link.url && link.url !== '#') {
      if (link.type === 'pdf') {
        window.open(link.url, '_blank');
      } else {
        window.open(link.url, '_blank');
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-charcoal/75 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-[#FAF7EE] rounded-3xl border-4 border-charcoal shadow-retro-lg w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden text-charcoal"
      >
        {/* Header */}
        <div className="p-5 border-b-3 border-charcoal flex items-start justify-between gap-4 bg-[#3E4F25] text-white">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-[#E2F86B] text-charcoal font-sans font-extrabold text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                {project.subtitle}
              </span>
              {project.year && (
                <span className="bg-white/20 text-white font-sans font-bold text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                  {project.year}
                </span>
              )}
            </div>
            <h2 className="font-serif font-black text-xl sm:text-2xl leading-tight">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/20 text-white hover:bg-white/30 transition-colors flex-shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-6 space-y-6 flex-1">
          {/* Cover Image */}
          <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden border-2 border-charcoal/20 shadow-sm">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Description */}
          <div>
            <h3 className="font-serif font-bold text-lg text-charcoal mb-2">
              Tentang Proyek
            </h3>
            <p className="font-sans text-sm text-charcoal/80 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-1">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="bg-cream-100 text-charcoal font-sans font-bold text-xs px-3 py-1 rounded-full border border-charcoal/20"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Project Links / Documentation Options */}
          <div className="bg-white rounded-2xl p-5 border-2 border-charcoal shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-charcoal/10 pb-3">
              <h4 className="font-serif font-extrabold text-sm uppercase tracking-wider text-charcoal flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-olive" /> Link & Dokumentasi Proyek
              </h4>
              <span className="text-[11px] font-sans font-bold text-charcoal/50">
                Pop-up Link Interactive
              </span>
            </div>

            {project.projectLinks && project.projectLinks.length > 0 ? (
              <div className="space-y-2.5">
                {project.projectLinks.map((link, idx) => {
                  const hasRealUrl = link.url && link.url !== '#';
                  return (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.01, x: 3 }}
                      onClick={() => handleLinkClick(link)}
                      className={`flex items-center justify-between p-3.5 rounded-xl border-2 transition-all ${
                        hasRealUrl
                          ? 'bg-[#EAF0E1] border-[#3E4F25] cursor-pointer hover:bg-[#dce6d0] shadow-sm'
                          : 'bg-cream-50 border-charcoal/20 cursor-pointer hover:border-charcoal/50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white border border-charcoal/20 flex items-center justify-center flex-shrink-0 shadow-xs">
                          {getLinkIcon(link.type)}
                        </div>
                        <div>
                          <p className="font-sans font-bold text-xs sm:text-sm text-charcoal">
                            {link.label}
                          </p>
                          <p className="font-sans text-[11px] text-charcoal/50 font-medium">
                            {hasRealUrl ? 'Klik untuk membuka dokumen/link →' : 'Link akan diisi Chaca'}
                          </p>
                        </div>
                      </div>

                      {hasRealUrl ? (
                        <span className="inline-flex items-center gap-1 bg-[#3E4F25] text-white text-xs font-bold px-3 py-1.5 rounded-lg">
                          <Eye className="w-3.5 h-3.5" /> Buka
                        </span>
                      ) : (
                        <span className="text-xs font-bold text-charcoal/40 bg-charcoal/10 px-2.5 py-1 rounded-lg">
                          Ready Link
                        </span>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-4 text-charcoal/60 font-sans text-xs">
                Link & dokumentasi untuk proyek ini akan segera di-update!
              </div>
            )}
          </div>
        </div>

        {/* Footer Note */}
        <div className="p-4 bg-cream-100 border-t-2 border-charcoal flex items-center justify-between text-xs font-sans font-bold text-charcoal/60">
          <span>✦ CHACA CREATIVE PORTFOLIO</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-full bg-charcoal text-white font-extrabold text-xs hover:bg-charcoal/80 transition-colors"
          >
            Tutup
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projects.filter(project => {
    if (activeCategory === 'all') return true;
    return project.category === activeCategory;
  });

  return (
    <section id="projects" className="py-24 px-4 sm:px-8 bg-[#FAF7EE] text-charcoal border-t-2 border-charcoal/15 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* ── Section Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-charcoal/20 pb-8">
          <div>
            <span className="font-script text-olive text-2xl sm:text-3xl font-bold block mb-1">
              koleksi karya & eksekusi desain
            </span>
            <h2 className="font-serif font-black text-4xl sm:text-6xl text-charcoal leading-none">
              Selected <span className="font-script font-normal italic text-4xl sm:text-6xl text-charcoal/80">Works</span>
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {projectCategories.map((cat) => (
              <motion.button
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.96 }}
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full font-sans font-bold text-xs uppercase tracking-wider border-2 border-charcoal transition-all ${
                  activeCategory === cat.id
                    ? 'bg-olive text-white shadow-retro'
                    : 'bg-white text-charcoal hover:bg-cream-100'
                }`}
              >
                {cat.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* ── Projects Grid ── */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: idx * 0.05 }}
                whileHover={{ y: -6, rotate: idx % 2 === 0 ? -1 : 1 }}
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="bg-white rounded-3xl border-3 border-charcoal shadow-retro-lg overflow-hidden flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  {/* Image Container with Framing */}
                  <div className="relative h-52 sm:h-56 overflow-hidden bg-charcoal border-b-3 border-charcoal">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Category Pill Tag */}
                    <span className="absolute top-3 left-3 bg-[#E2F86B] text-charcoal font-sans font-extrabold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full border border-charcoal shadow-sm">
                      {project.subtitle}
                    </span>

                    {project.year && (
                      <span className="absolute bottom-3 left-3 bg-charcoal/80 text-white font-sans font-extrabold text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full backdrop-blur-sm">
                        {project.year}
                      </span>
                    )}

                    {project.featured && (
                      <span className="absolute top-3 right-3 bg-lavender text-charcoal font-sans font-extrabold text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-charcoal flex items-center gap-1 shadow-sm">
                        <Sparkles className="w-3 h-3 text-olive" /> Featured
                      </span>
                    )}
                  </div>

                  {/* Content Box */}
                  <div className="p-6 space-y-3">
                    <h3 className="font-serif font-bold text-xl text-charcoal leading-snug group-hover:text-olive transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-charcoal-light font-sans text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-cream-100 text-charcoal font-sans font-semibold text-[11px] px-2.5 py-0.5 rounded-full border border-charcoal/20"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Link Footer (Triggers Pop-up Modal) */}
                <div className="px-6 pb-6 pt-4 border-t border-dashed border-charcoal/20 flex items-center justify-between">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#3E4F25] text-white font-sans font-extrabold text-xs py-3 px-4 rounded-full border-2 border-charcoal shadow-retro hover:bg-olive-dark transition-colors"
                  >
                    <span>Lihat Detail & Link Karya</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Project Detail / Links Pop-up Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
