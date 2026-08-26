import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ZoomIn, Calendar, Sparkles } from 'lucide-react';
import { certificates } from '../data/portfolioData';
import CertificateModal from './CertificateModal';

export default function CertificatesSection() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="py-20 px-4 sm:px-8 bg-[#FAF7EE] text-charcoal border-t-2 border-charcoal/15 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-2 border-charcoal/20 pb-6">
          <div>
            <span className="font-script text-olive text-2xl font-bold block mb-1">
              pencapaian, hibah PKM & sertifikasi
            </span>
            <h2 className="font-serif font-black text-4xl sm:text-5xl text-charcoal leading-none">
              Achievements <span className="font-script font-normal italic text-4xl sm:text-5xl text-charcoal/80">& Certs</span>
            </h2>
          </div>
          <span className="bg-[#E2F86B] text-charcoal font-sans font-extrabold text-xs uppercase tracking-wider px-4 py-2 rounded-full border-2 border-charcoal shadow-sm self-start sm:self-end">
            🏆 {certificates.length} RECOGNITIONS
          </span>
        </div>

        {/* ── Certificates Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              onClick={() => setSelectedCert(cert)}
              whileHover={{ y: -6, rotate: idx % 2 === 0 ? -1 : 1 }}
              className="bg-white rounded-3xl border-3 border-charcoal shadow-retro-lg p-5 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                {/* Image Thumbnail Frame */}
                <div className="relative h-48 rounded-2xl overflow-hidden border-2 border-charcoal bg-cream-100 mb-4">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-sans font-extrabold text-xs gap-1.5">
                    <ZoomIn className="w-4 h-4 text-lime" /> Klik untuk Zoom
                  </div>
                  
                  {/* Category Pill */}
                  <span className="absolute top-2.5 left-2.5 bg-olive text-white font-sans font-extrabold text-[9px] uppercase px-2.5 py-1 rounded-full border border-charcoal">
                    {cert.category}
                  </span>
                </div>

                {/* Details */}
                <div className="space-y-1.5">
                  <span className="text-xs font-sans font-bold text-charcoal/60 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-olive" /> {cert.year} — {cert.issuer}
                  </span>
                  <h3 className="font-serif font-bold text-lg text-charcoal group-hover:text-olive transition-colors leading-snug">
                    {cert.title}
                  </h3>
                </div>
              </div>

              {/* Action Link Footer */}
              <div className="mt-4 pt-3 border-t border-dashed border-charcoal/20 flex items-center justify-between text-xs font-sans font-bold text-olive">
                <span>Lihat Bukti Sertifikat</span>
                <Sparkles className="w-3.5 h-3.5 text-olive" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Modal Popup Viewer */}
      {selectedCert && (
        <CertificateModal item={selectedCert} onClose={() => setSelectedCert(null)} />
      )}
    </section>
  );
}
