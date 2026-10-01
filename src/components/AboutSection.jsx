import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Code, Terminal, Sparkles, CheckCircle2 } from 'lucide-react';
import { personalInfo, skills } from '../data/portfolioData';

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#FAF7EE] text-charcoal py-20 px-4 sm:px-8 relative overflow-hidden">

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">

        {/* ── Section Title: MEET CHACA ── */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight text-charcoal"
          >
            MEET CHACA
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="font-sans font-extrabold text-xs sm:text-sm uppercase tracking-widest text-charcoal/80 max-w-2xl mx-auto leading-relaxed"
          >
            CREATING CUTE DIGITAL SPACES & MAKING FRIENDS ALONG THE WAY✨
          </motion.p>
        </div>

        {/* ── Main Content Grid: Scalloped Photo + Story ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* ── Left Column: Sky Blue Scalloped Frame (Image Style) ── */}
          <div className="lg:col-span-5 flex justify-center relative">

            {/* Hand-drawn cursive caption */}
            <motion.span
              animate={{ rotate: [-6, -2, -6] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 left-2 sm:-top-8 sm:left-4 font-script font-bold text-2xl sm:text-3xl text-charcoal z-20 select-none whitespace-nowrap"
            >
              i'm so happy you're here! ✦
            </motion.span>

            {/* Scalloped Postage Stamp Border Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -2 }}
              viewport={{ once: true }}
              whileHover={{ rotate: 0, scale: 1.02 }}
              className="relative p-6 sm:p-8 bg-[#BDE0F7] rounded-[36px] shadow-scallop border-3 border-charcoal max-w-xs sm:max-w-sm w-full"
            >
              {/* Decorative scalloped edges effect around frame */}
              <div className="absolute inset-2 border-2 border-dashed border-charcoal/30 rounded-[28px] pointer-events-none" />

              {/* Photo */}
              <div className="rounded-2xl overflow-hidden bg-white p-2 border-2 border-charcoal shadow-sm">
                <img
                  src="/chaca-kecil.JPG"
                  alt={personalInfo.name}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/chaca-photo.jpg";
                  }}
                  className="w-full h-80 sm:h-96 object-cover object-top rounded-xl"
                />
              </div>

              {/* Small stamp sticker */}
              <div className="mt-3 text-center">
                <span className="font-sans font-extrabold text-charcoal text-sm tracking-tight flex items-center justify-center gap-1.5">
                  yep, that's me! ✦
                </span>
              </div>
            </motion.div>

          </div>

          {/* ── Right Column: Narrative Story + Highlight ── */}
          <div className="lg:col-span-7 space-y-6">

            {/* Hand-drawn Arrow + Headline statement */}
            <div className="relative pt-2">
              {/* Curly Doodle Arrow */}
              <div className="absolute -left-8 -top-4 hidden sm:block text-charcoal">
                <svg width="40" height="40" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M10,10 C30,5 40,25 25,35 C15,40 10,25 25,20 C35,18 40,30 42,42" />
                  <polyline points="35,38 42,42 46,35" />
                </svg>
              </div>

              <h3 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-charcoal leading-snug">
                <span>Debugging <span className="font-script italic font-normal text-3xl sm:text-4xl text-charcoal/85">by day</span>,</span>
                <br />
                <span className="bg-[#E2F86B] px-2.5 py-0.5 rounded-md border border-charcoal/20 inline-block font-black mt-1.5">
                  CREATING CUTE STUFF BY NIGHT.
                </span>
              </h3>
            </div>

            {/* Story Paragraphs */}
            <div className="text-charcoal-light font-sans text-base sm:text-lg leading-relaxed space-y-5">
              <p>
                Halo! Aku <strong className="text-charcoal font-extrabold">Gracia Nathania (Chaca)</strong>, mahasiswa Teknik Informatika yang berpengalaman mengerjakan berbagai proyekan di bidang <strong className="text-charcoal font-bold">Web & Mobile Dev, UI/UX Design, Game & Animasi, hingga Machine Learning & NLP</strong>. Pengalaman proyekan ini banyak aku eksplorasi melalui tugas akademik, pengalaman magang industri, maupun keikutsertaan dalam kompetisi tingkat nasional dan internasional.
              </p>
              <p>
                Selain sibuk di dunia koding dan desain, aku juga <strong className="text-charcoal font-bold">aktif berorganisasi dan sering dipercaya di divisi acara</strong>, baik untuk event-event kampus maupun kegiatan PKM bareng dosen, mulai dari menyusun acara, dokumentasi, hingga visual desain. Karena orangnya <strong className="text-charcoal font-bold">komunikatif, kreatif, dan cepat berbaur</strong>, aku selalu antusias membawa semangat leadership, kerja sama tim, dan problem solving supaya setiap kegiatan yang digarap bersama bisa berjalan lancar dan berkesan!
              </p>
            </div>

            {/* Decorative Highlight Cloud Badge (Image Style) */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 bg-white px-5 py-3 rounded-full border-2 border-dashed border-charcoal shadow-sm">
                <Sparkles className="w-4 h-4 text-olive flex-shrink-0" />
                <span className="font-sans font-extrabold text-xs sm:text-sm uppercase tracking-widest text-charcoal">
                  CREATIVE TECH & LEADERSHIP IN ACTION
                </span>
              </div>
            </div>

            {/* Core Stack Badges */}
            <div className="pt-4 flex flex-wrap gap-2.5">
              {['Web & Mobile Dev', 'UI/UX Design', 'Game & Animation', 'Machine Learning & NLP', 'Event & Leadership'].map((tag) => (
                <span
                  key={tag}
                  className="bg-cream-100 text-charcoal font-sans font-bold text-xs px-3.5 py-1.5 rounded-full border border-charcoal/20"
                >
                  ✦ {tag}
                </span>
              ))}
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
