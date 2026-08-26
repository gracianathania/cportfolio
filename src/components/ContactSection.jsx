import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Figma, Dribbble, Instagram, FolderDown, Heart, Sparkles, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ContactSection() {
  const socials = [
    { href: personalInfo.socials.github, icon: <Github className="w-5 h-5" />, label: 'GitHub' },
    { href: personalInfo.socials.linkedin, icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn' },
    { href: personalInfo.socials.instagram, icon: <Instagram className="w-5 h-5" />, label: 'Instagram' },
  ].filter(s => s.href && s.href !== '#');

  return (
    <section id="contact" className="py-20 px-4 sm:px-8 bg-[#FAF7EE] relative overflow-hidden">

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">

        {/* ── Main Studio Invitation Card (Olive Green Banner) ── */}
        <div className="bg-olive-theme text-white rounded-[36px] border-4 border-charcoal shadow-retro-lg p-8 sm:p-14 relative overflow-hidden">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">

            {/* Left Column: Text & CTA Buttons */}
            <div className="lg:col-span-8 space-y-6">

              <div className="inline-flex items-center gap-2 bg-[#D4F34A] text-charcoal font-sans font-extrabold text-xs uppercase tracking-widest px-4 py-2 rounded-full border-2 border-charcoal shadow-sm">
                <Sparkles className="w-3.5 h-3.5" /> WORK WITH ME ✦
              </div>

              <h2 className="font-serif font-black text-4xl sm:text-6xl tracking-tight text-white leading-tight">
                Let's CONNECT & <br className="hidden sm:inline" />
                <span className="font-script font-bold italic text-cream-100 text-4xl sm:text-6xl">SAY HI TO CHACA!</span>
              </h2>

              <p className="text-cream-100/90 font-sans text-base sm:text-lg max-w-lg leading-relaxed font-normal">
                Kotak masuk email dan media sosialku selalu terbuka ramah! Mau ajak berdiskusi, bertukar ide, atau sekadar mau nyapa aja? Feel free to reach out anytime yaa!
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <motion.a
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  href={`mailto:${personalInfo.socials.email}`}
                  className="flex items-center gap-2 bg-[#D4F34A] hover:bg-[#E2F86B] text-charcoal font-sans font-extrabold text-sm uppercase tracking-wider px-7 py-4 rounded-full border-2 border-charcoal shadow-retro transition-all"
                >
                  <Mail className="w-4 h-4" /> Kirim Email ke Chaca
                </motion.a>
              </div>

              {/* Social Media Links */}
              <div className="pt-6 border-t border-white/20 flex flex-wrap items-center gap-3">
                <span className="font-sans font-bold text-xs uppercase tracking-wider text-cream-200 w-full mb-1">
                  Temukan Chaca di:
                </span>
                {socials.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-white text-charcoal rounded-full border-2 border-charcoal shadow-sm hover:bg-[#D4F34A] transition-colors"
                    title={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>

            </div>

            {/* Right Column: Polaroid Portrait */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <motion.div
                whileHover={{ rotate: 0, scale: 1.03 }}
                className="bg-white p-3.5 rounded-3xl border-3 border-charcoal shadow-polaroid rotate-3 max-w-xs w-full text-charcoal"
              >
                <div className="rounded-2xl overflow-hidden bg-olive-soft border border-charcoal/20">
                  <img
                    src="/chaca-photo.jpg"
                    alt="Chaca"
                    className="w-full h-72 object-cover object-top"
                  />
                </div>
                <div className="pt-3 text-center">
                  <p className="font-serif font-bold text-sm">{personalInfo.fullName}</p>
                  <p className="font-script text-olive text-base font-bold -mt-0.5">always ready for new ideas ✦</p>
                </div>
              </motion.div>
            </div>

          </div>

        </div>

        {/* ── Footer Bottom Bar ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans font-semibold text-charcoal/60">

          <p className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-olive" />
            © {new Date().getFullYear()} CHACA.SPACE. All rights reserved.
          </p>
        </div>

      </div>

    </section>
  );
}
