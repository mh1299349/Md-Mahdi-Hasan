import React, { useState, useEffect } from 'react';
import { SITE_DATA, UI_STRINGS } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { WhatsAppIcon, FacebookIcon, EmailIcon } from './SocialIcons';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLang, t, isBengali } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: t(UI_STRINGS.nav.services), href: '#services' },
    { label: t(UI_STRINGS.nav.about), href: '#about' },
    { label: t(UI_STRINGS.nav.contact), href: '#contact' }
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 w-full ${
          isScrolled
            ? 'bg-[#F5F5F0]/95 backdrop-blur-md border-b border-[#E2E5DC] py-3.5 shadow-[0_2px_12px_rgba(32,39,32,0.04)]'
            : 'bg-[#F5F5F0] border-b border-[#E2E5DC]/60 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between gap-3 sm:gap-6">
          {/* Zone 1: Typographic Brand Wordmark */}
          <a
            href="#"
            className="text-base sm:text-lg md:text-xl font-bold text-[#202720] hover:opacity-85 transition-opacity min-w-0 flex items-center gap-2"
          >
            <span className="truncate">{t(SITE_DATA.personal.name)}</span>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#646E63]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="hover:text-[#202720] transition-colors whitespace-nowrap shrink-0 py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#202720] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: Language Switcher, Social Channels & Primary Action */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Quick Direct Icons (Desktop only) */}
            <div className="hidden lg:flex items-center gap-1 text-[#646E63] pr-1">
              <a
                href={SITE_DATA.personal.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
                aria-label="WhatsApp"
                className="p-2 hover:text-[#202720] hover:bg-black/5 rounded-lg transition-colors cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${SITE_DATA.personal.email}`}
                title="Email"
                aria-label="Email"
                className="p-2 hover:text-[#202720] hover:bg-black/5 rounded-lg transition-colors cursor-pointer"
              >
                <EmailIcon className="w-4 h-4" />
              </a>
              <a
                href={SITE_DATA.personal.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
                aria-label="Facebook"
                className="p-2 hover:text-[#202720] hover:bg-black/5 rounded-lg transition-colors cursor-pointer"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>

            {/* Minimal Language Switcher: বাংলা | English */}
            <div
              className="inline-flex items-center bg-white border border-[#E2E5DC] rounded-lg p-0.5 text-xs font-medium shadow-xs"
              role="group"
              aria-label="Language selection"
            >
              <button
                type="button"
                onClick={() => setLang('bn')}
                className={`px-2.5 py-1 rounded-md transition-all cursor-pointer text-[11px] sm:text-xs ${
                  isBengali
                    ? 'bg-[#202720] text-white font-semibold'
                    : 'text-[#646E63] hover:text-[#202720]'
                }`}
                aria-pressed={isBengali}
              >
                বাংলা
              </button>
              <span className="text-[#E2E5DC] select-none" aria-hidden="true">|</span>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded-md transition-all cursor-pointer text-[11px] sm:text-xs ${
                  !isBengali
                    ? 'bg-[#202720] text-white font-semibold'
                    : 'text-[#646E63] hover:text-[#202720]'
                }`}
                aria-pressed={!isBengali}
              >
                English
              </button>
            </div>

            {/* Primary Action Button: Lime Green (#B7F34A) with Dark text (#202720) */}
            <button
              onClick={onOpenContact}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs md:text-sm font-bold text-[#202720] bg-[#B7F34A] hover:bg-[#a6e636] rounded-xl transition-all duration-200 shadow-sm active:scale-[0.98] whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>{t(UI_STRINGS.nav.letsTalk)}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#202720] hover:bg-black/5 rounded-lg transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#F5F5F0]/98 backdrop-blur-lg pt-24 px-6 md:hidden flex flex-col justify-between pb-10 overflow-y-auto animate-in fade-in duration-200 w-full">
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#E2E5DC]">
              <span className="text-xs uppercase tracking-widest text-[#646E63] font-semibold">
                {isBengali ? 'ভাষা নির্বাচন' : 'Language'}
              </span>
              <div className="inline-flex items-center bg-white border border-[#E2E5DC] rounded-lg p-0.5 text-xs">
                <button
                  type="button"
                  onClick={() => setLang('bn')}
                  className={`px-3 py-1 rounded-md ${isBengali ? 'bg-[#202720] text-white font-semibold' : 'text-[#646E63]'}`}
                >
                  বাংলা
                </button>
                <button
                  type="button"
                  onClick={() => setLang('en')}
                  className={`px-3 py-1 rounded-md ${!isBengali ? 'bg-[#202720] text-white font-semibold' : 'text-[#646E63]'}`}
                >
                  English
                </button>
              </div>
            </div>

            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-2xl font-bold text-[#202720] py-2.5 border-b border-[#E2E5DC] flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-sm font-normal text-[#646E63]">→</span>
                </a>
              ))}
            </nav>

            {/* Quick Social & Contact Icons in Mobile Drawer */}
            <div className="pt-2">
              <span className="text-xs uppercase tracking-widest text-[#646E63] font-semibold block mb-3">
                {isBengali ? 'সরাসরি যোগাযোগ' : 'Direct Channels'}
              </span>
              <div className="grid grid-cols-3 gap-2.5">
                <a
                  href={SITE_DATA.personal.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-[#E2E5DC] rounded-xl flex flex-col items-center justify-center gap-1.5 text-xs font-semibold text-[#202720] hover:border-[#25D366] transition-colors"
                >
                  <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={`mailto:${SITE_DATA.personal.email}`}
                  className="p-3 bg-white border border-[#E2E5DC] rounded-xl flex flex-col items-center justify-center gap-1.5 text-xs font-semibold text-[#202720] hover:border-[#202720] transition-colors"
                >
                  <EmailIcon className="w-5 h-5 text-[#202720]" />
                  <span>Email</span>
                </a>
                <a
                  href={SITE_DATA.personal.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-[#E2E5DC] rounded-xl flex flex-col items-center justify-center gap-1.5 text-xs font-semibold text-[#202720] hover:border-[#1877F2] transition-colors"
                >
                  <FacebookIcon className="w-5 h-5 text-[#1877F2]" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-3 pt-6 border-t border-[#E2E5DC]">
            <a
              href={`mailto:${SITE_DATA.personal.email}`}
              className="block text-sm font-semibold text-[#202720] hover:underline break-all"
            >
              {SITE_DATA.personal.email}
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="inline-flex items-center gap-2 w-full justify-center px-5 py-3.5 text-sm font-bold text-[#202720] bg-[#B7F34A] rounded-xl shadow-sm cursor-pointer"
            >
              <span>{t(UI_STRINGS.nav.letsTalk)}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
