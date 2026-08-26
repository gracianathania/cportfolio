import React from 'react';
import { motion } from 'framer-motion';
import { X, Award, Calendar } from 'lucide-react';

export default function CertificateModal({ item, onClose }) {
  if (!item) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/80 backdrop-blur-sm"
    >
      <motion.div 
        initial={{ scale: 0.8, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-cream-card rounded-2xl border-4 border-charcoal shadow-retro-lg max-w-2xl w-full overflow-hidden relative max-h-[90vh] flex flex-col"
      >
        
        {/* Modal Header Bar */}
        <div className="bg-maroon text-white p-4 border-b-3 border-charcoal flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-mustard" />
            <span className="font-extrabold text-sm uppercase tracking-wider">{item.category}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded bg-white/20 hover:bg-white/40 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-4">
          
          {/* Certificate Image Frame */}
          <div className="rounded-xl border-3 border-charcoal overflow-hidden shadow-retro bg-white">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-auto max-h-80 object-contain mx-auto"
            />
          </div>

          {/* Details */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-maroon mb-1">
              <Calendar className="w-3.5 h-3.5" /> Tahun {item.year} — {item.issuer}
            </div>
            <h3 className="font-serif font-extrabold text-2xl text-charcoal">
              {item.title}
            </h3>
            <p className="text-charcoal-light text-sm mt-2 font-normal leading-relaxed">
              {item.description}
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-cream-100 border-t-2 border-charcoal flex justify-end">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
            className="bg-charcoal text-white font-extrabold text-xs px-5 py-2.5 rounded-lg border-2 border-charcoal shadow-retro hover:bg-charcoal-light"
          >
            Tutup Preview
          </motion.button>
        </div>

      </motion.div>
    </motion.div>
  );
}
