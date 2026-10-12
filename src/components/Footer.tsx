import React from 'react';
import { SITE_DATA, UI_STRINGS } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUp, BookOpen, ArrowUpRight } from 'lucide-react';
import { WhatsAppIcon, FacebookIcon, EmailIcon } from './SocialIcons';

interface FooterProps {
  onOpenGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenGuide }) => {
  const { t, isBengali } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F5F5F0] border-t border-[#E2E5DC] pt-14 sm:pt-16 pb-12 w-full overflow-hidden text-[#202720]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Three-Column Desktop Grid with subtle vertical separators */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-0 pb-12 border-b border-[#E2E5DC] w-full">
          
          {/* Column 1: Brand & Identity */}
          <div className="md:col-span-12 lg:col-span-5 lg:pr-10 lg:border-r border-[#E2E5DC] space-y-4">
            {/* MH Monogram & Name Lockup */}
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl bg-[#202720] text-white flex items-center justify-center font-bold text-sm tracking-wider font-english shadow-xs relative shrink-0 border border-[#202720]"
                aria-hidden="true"
              >
                <span>MH</span>
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#B7F34A] border-2 border-[#F5F5F0]" />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#202720] leading-tight truncate">
                  {t(SITE_DATA.personal.name)}
                </h3>
                <span className="text-[11px] uppercase tracking-wider text-[#646E63] font-medium font-english">
                  Portfolio · {currentYear}
                </span>
              </div>
            </div>

            {/* Role & Experience */}
            <p className="text-sm text-[#4A544A] leading-relaxed font-medium">
              {t(SITE_DATA.personal.title)} — {t(SITE_DATA.personal.experience)}.
            </p>

            {/* Location & Availability Status */}
            <div className="flex items-center gap-2 text-xs text-[#646E63] flex-wrap">
              <span className="inline-block w-2 h-2 rounded-full bg-[#B7F34A] animate-pulse shrink-0" />
              <span>
                {t(UI_STRINGS.hero.basedIn)} {t(SITE_DATA.personal.location)} · {t(SITE_DATA.personal.availability)}
              </span>
            </div>

            {/* Quick Brand Social Icons */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href={SITE_DATA.personal.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Profile"
                className="w-8 h-8 rounded-lg bg-white border border-[#E2E5DC] flex items-center justify-center text-[#202720] hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-all shadow-2xs"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={SITE_DATA.personal.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-lg bg-white border border-[#E2E5DC] flex items-center justify-center text-[#202720] hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all shadow-2xs"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={`mailto:${SITE_DATA.personal.email}`}
                aria-label="Email"
                className="w-8 h-8 rounded-lg bg-white border border-[#E2E5DC] flex items-center justify-center text-[#202720] hover:bg-[#B7F34A] hover:border-[#B7F34A] transition-all shadow-2xs"
              >
                <EmailIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Column */}
          <div className="md:col-span-5 lg:col-span-3 lg:px-8 lg:border-r border-[#E2E5DC] space-y-4">
            <div className="text-xs uppercase tracking-widest text-[#7A867A] font-bold">
              {t(UI_STRINGS.footer.quickNav)}
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#services"
                  className="group flex items-center gap-2 text-[#4A544A] hover:text-[#202720] font-medium transition-colors"
                >
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#A4AEA3] group-hover:text-[#202720] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  <span>{t(UI_STRINGS.nav.work)}</span>
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="group flex items-center gap-2 text-[#4A544A] hover:text-[#202720] font-medium transition-colors"
                >
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#A4AEA3] group-hover:text-[#202720] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  <span>{t(UI_STRINGS.nav.services)}</span>
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="group flex items-center gap-2 text-[#4A544A] hover:text-[#202720] font-medium transition-colors"
                >
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#A4AEA3] group-hover:text-[#202720] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  <span>{t(UI_STRINGS.nav.about)}</span>
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="group flex items-center gap-2 text-[#4A544A] hover:text-[#202720] font-medium transition-colors"
                >
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#A4AEA3] group-hover:text-[#202720] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  <span>{t(UI_STRINGS.nav.contact)}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Direct Channels */}
          <div className="md:col-span-7 lg:col-span-4 lg:pl-8 space-y-4">
            <div className="text-xs uppercase tracking-widest text-[#7A867A] font-bold">
              {t(UI_STRINGS.footer.directChannels)}
            </div>
            
            <div className="space-y-3">
              {/* Email */}
              <a
                href={`mailto:${SITE_DATA.personal.email}`}
                className="group flex items-start gap-3 text-sm text-[#4A544A] hover:text-[#202720] transition-colors min-w-0"
              >
                <span className="w-8 h-8 rounded-lg bg-white border border-[#E2E5DC] flex items-center justify-center text-[#202720] group-hover:bg-[#B7F34A] group-hover:border-[#B7F34A] transition-all shrink-0 mt-0.5 shadow-2xs">
                  <EmailIcon className="w-3.5 h-3.5 text-[#202720]" />
                </span>
                <div className="min-w-0 flex-1">
                  <span className="block text-[11px] uppercase tracking-wider text-[#7A867A] font-semibold">
                    {isBengali ? 'ইমেইল' : 'Email'}
                  </span>
                  <span className="block font-medium text-xs sm:text-sm text-[#202720] break-all leading-snug">
                    {SITE_DATA.personal.email}
                  </span>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={SITE_DATA.personal.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 text-sm text-[#4A544A] hover:text-[#202720] transition-colors min-w-0"
              >
                <span className="w-8 h-8 rounded-lg bg-white border border-[#E2E5DC] flex items-center justify-center text-[#202720] group-hover:bg-[#25D366] group-hover:text-white group-hover:border-[#25D366] transition-all shrink-0 mt-0.5 shadow-2xs">
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                </span>
                <div className="min-w-0 flex-1">
                  <span className="block text-[11px] uppercase tracking-wider text-[#7A867A] font-semibold">
                    WhatsApp
                  </span>
                  <span className="flex items-center gap-1 font-medium text-xs sm:text-sm text-[#202720]">
                    {SITE_DATA.personal.phone}
                    <ArrowUpRight className="w-3 h-3 text-[#A4AEA3] group-hover:text-[#202720] transition-colors" />
                  </span>
                </div>
              </a>

              {/* Facebook Profile */}
              <a
                href={SITE_DATA.personal.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 text-sm text-[#4A544A] hover:text-[#202720] transition-colors min-w-0"
              >
                <span className="w-8 h-8 rounded-lg bg-white border border-[#E2E5DC] flex items-center justify-center text-[#202720] group-hover:bg-[#1877F2] group-hover:text-white group-hover:border-[#1877F2] transition-all shrink-0 mt-0.5 shadow-2xs">
                  <FacebookIcon className="w-3.5 h-3.5" />
                </span>
                <div className="min-w-0 flex-1">
                  <span className="block text-[11px] uppercase tracking-wider text-[#7A867A] font-semibold">
                    Facebook Profile
                  </span>
                  <span className="flex items-center gap-1 font-medium text-xs sm:text-sm text-[#202720] truncate">
                    fb.com/MdMahdiHasan.Official
                    <ArrowUpRight className="w-3 h-3 text-[#A4AEA3] group-hover:text-[#202720] transition-colors shrink-0" />
                  </span>
                </div>
              </a>
            </div>

            {/* Site Guide & Asset Checklist Button */}
            <div className="pt-2">
              <button
                id="site-guide-trigger"
                onClick={onOpenGuide}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-semibold text-[#202720] bg-white hover:bg-[#F5F5F0] hover:border-[#202720] px-3.5 py-2.5 rounded-xl border border-[#E2E5DC] transition-all cursor-pointer shadow-2xs group"
              >
                <BookOpen className="w-3.5 h-3.5 text-[#202720]" />
                <span>{t(UI_STRINGS.footer.siteGuide)}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#B7F34A] group-hover:scale-125 transition-transform" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#646E63] w-full">
          <div className="text-center sm:text-left">
            © {currentYear} {t(SITE_DATA.personal.name)}. {t(UI_STRINGS.footer.allRights)}
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 font-medium text-[#4A544A] hover:text-[#202720] transition-colors cursor-pointer group py-1"
          >
            <span>{t(UI_STRINGS.footer.backToTop)}</span>
            <span className="w-6 h-6 rounded-full bg-white border border-[#E2E5DC] flex items-center justify-center group-hover:bg-[#B7F34A] group-hover:border-[#B7F34A] transition-all shadow-2xs">
              <ArrowUp className="w-3 h-3 text-[#202720] group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};
