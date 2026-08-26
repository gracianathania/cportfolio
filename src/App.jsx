import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import CertificatesSection from './components/CertificatesSection';
import ContactSection from './components/ContactSection';

export default function App() {
  return (
    <div className="min-h-screen bg-cream-50 font-sans text-charcoal selection:bg-maroon selection:text-white">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        {/* <CertificatesSection /> — Hidden as requested by Chaca */}
        <ContactSection />
      </main>
    </div>
  );
}
