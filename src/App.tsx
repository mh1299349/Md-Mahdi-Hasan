import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SiteGuideModal } from './components/SiteGuideModal';

function PortfolioApp() {
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [inquiredService, setInquiredService] = useState<string | undefined>(undefined);
  const { isBengali } = useLanguage();

  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesElement = document.getElementById('services');
    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setInquiredService(serviceTitle);
    scrollToContact();
  };

  return (
    <div className={`min-h-screen w-full max-w-full overflow-x-hidden bg-[#F5F5F0] text-[#1C221C] selection:bg-[#B7F34A] selection:text-[#202720] flex flex-col ${isBengali ? 'font-bengali' : 'font-english'}`}>
      {/* Top Navigation */}
      <Navbar onOpenContact={scrollToContact} />

      {/* Main Content Sections */}
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        {/* Minimal Hero Section with single-line name, mobile-first clean layout & social icons */}
        <Hero
          onExploreServices={scrollToServices}
          onContactClick={scrollToContact}
        />

        {/* Services & Capabilities */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* About Me, Verified Photo, Philosophy, Methodology & Tools */}
        <AboutSection />

        {/* High-Conversion Contact Section */}
        <ContactSection preselectedService={inquiredService} />
      </main>

      {/* Footer */}
      <Footer onOpenGuide={() => setIsGuideOpen(true)} />

      {/* Designer Handover & Deployment Guide Modal */}
      <SiteGuideModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <PortfolioApp />
    </LanguageProvider>
  );
}
