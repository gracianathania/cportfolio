import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT", href: "#about" },
    { name: "JOURNEY", href: "#journey" },
    { name: "PROJECTS", href: "#projects" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FAF7EE]/95 backdrop-blur-md border-b border-charcoal/15 py-3 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo — Beyond the Birds style */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="font-serif font-extrabold text-xl sm:text-2xl tracking-tight text-charcoal">
            <span>CHACA</span><span className="font-sans text-olive">.SPACE</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-sans font-bold text-xs tracking-widest text-charcoal/80 hover:text-olive transition-colors relative py-1"
            >
              {link.name}
            </a>
          ))}

          {/* "WORK WITH ME" Pill Button */}
          <motion.a
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.96 }}
            href="#contact"
            className="flex items-center gap-1.5 bg-[#D4F34A] text-charcoal font-sans font-extrabold text-xs tracking-wider px-4 py-2 rounded-full border-2 border-charcoal shadow-sm hover:shadow-md transition-all"
          >
            <Sparkles className="w-3.5 h-3.5" />
            CONNECT WITH ME
          </motion.a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-full border border-charcoal/30 bg-white text-charcoal"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-3 pt-3 border-t border-charcoal/15 flex flex-col gap-2 pb-2"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-sans font-bold text-sm tracking-wider text-charcoal hover:text-olive py-2 px-3 rounded-lg hover:bg-cream-100 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 bg-[#D4F34A] text-charcoal font-sans font-extrabold text-xs tracking-wider py-2.5 rounded-full border-2 border-charcoal mt-2 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5" />
              CONNECT WITH ME
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
