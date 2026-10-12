import React, { useState } from 'react';
import { SITE_DATA, UI_STRINGS } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { ArrowDown, ArrowUpRight, Sparkles, User } from 'lucide-react';
import { WhatsAppIcon, FacebookIcon, EmailIcon } from './SocialIcons';

interface HeroProps {
  onExploreServices: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreServices, onContactClick }) => {
  const { t, lang, isBengali } = useLanguage();
  const [imgError, setImgError] = useState(false);

  // Clean, modern portrait photo card (designed to look premium, minimal, and uncluttered)
  const renderPortrait = (maxWidthClass: string = 'max-w-[360px]') => (
    <div className={`relative w-full ${maxWidthClass} mx-auto`}>
      {/* Outer Card with subtle border and modern shadow */}
      <div className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-[#202720] border-2 border-[#202720] shadow-[0_16px_36px_rgba(32,39,32,0.12)]">
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#181E18]">
          {!imgError ? (
            <img
              src={SITE_DATA.personal.profilePhoto}
              alt={`${t(SITE_DATA.personal.name)} — ${t(SITE_DATA.personal.title)}`}
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover object-top filter contrast-[1.02]"
              loading="eager"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-white/80">
              <User className="w-14 h-14 mb-3 stroke-1 text-[#B7F34A]" />
              <span className="text-base font-bold text-white">{t(SITE_DATA.personal.name)}</span>
              <span className="text-xs text-white/60 mt-1">{t(SITE_DATA.personal.title)}</span>
            </div>
          )}

          {/* Minimal Bottom Scrim with role and experience */}
          <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-5 bg-gradient-to-t from-black/90 via-black/60 to-transparent text-white">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-white tracking-wide">
                {t(SITE_DATA.personal.title)}
              </span>
              <span className="text-[11px] font-mono text-[#B7F34A] bg-[#202720]/80 px-2 py-0.5 rounded border border-[#B7F34A]/30">
                {t(SITE_DATA.personal.experience)}
              </span>
            </div>
          </div>
        </div>

        {/* Lime Accent Edge */}
        <div className="h-1 w-full bg-[#B7F34A]" />
      </div>

      {/* Availability Status Strip */}
      <div className="mt-2.5 flex items-center justify-between text-[11px] font-medium text-[#646E63] px-1">
        <span>{t(SITE_DATA.personal.location)}</span>
        <span className="flex items-center gap-1.5 text-[#202720] font-semibold">
          <span className="w-2 h-2 rounded-full bg-[#B7F34A] animate-pulse" />
          <span>{t(SITE_DATA.personal.availability)}</span>
        </span>
      </div>
    </div>
  );

  return (
    <section className="relative pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24 w-full overflow-hidden bg-[#F5F5F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Main Grid: Clean & Well-Aligned */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          
          {/* Content Column */}
          <div className="md:col-span-7 space-y-5 sm:space-y-6 w-full min-w-0">
            
            {/* Top Badge: Role & Experience */}
            <div className="flex items-center justify-between sm:justify-start gap-2">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full border border-[#202720]/15 bg-white text-xs font-semibold text-[#202720] shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-[#202720] shrink-0" />
                <span className={`tracking-wide text-[10px] sm:text-xs truncate ${isBengali ? 'tracking-normal' : 'uppercase'}`}>
                  {t(UI_STRINGS.hero.badgeRole)}
                </span>
              </div>

              {/* Compact location marker on mobile */}
              <span className="text-[11px] font-mono text-[#646E63] sm:hidden">
                {t(SITE_DATA.personal.location)}
              </span>
            </div>

            {/* MOBILE ONLY: Authentic Picture positioned cleanly above the name */}
            <div className="block md:hidden my-2 w-full">
              {renderPortrait('max-w-[260px] sm:max-w-[280px]')}
            </div>

            {/* ONE-LINE NAME: Md Mahdi Hasan / মো মাহদি হাসান */}
            <div className="w-full">
              <h1
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-[#202720] tracking-tight leading-tight ${
                  isBengali ? 'font-bengali' : 'font-english'
                }`}
              >
                {t(SITE_DATA.personal.name)}
              </h1>
            </div>

            {/* Core Value Proposition Headline */}
            <div className="space-y-1">
              <h2
                className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-[#202720] leading-snug ${
                  isBengali ? 'leading-normal font-bengali' : 'tracking-tight'
                }`}
              >
                <span>{t(SITE_DATA.hero.headlineLine1)}</span>{' '}
                <span className="bg-[#B7F34A] px-2 py-0.5 rounded text-[#202720] inline-block font-extrabold">
                  {t(SITE_DATA.hero.headlineLine2)}
                </span>
              </h2>
            </div>

            {/* Supporting Bio Paragraph */}
            <p
              className={`text-sm sm:text-base text-[#646E63] leading-relaxed max-w-xl ${
                isBengali ? 'leading-[1.7]' : ''
              }`}
            >
              {t(SITE_DATA.hero.subheadline)}
            </p>

            {/* Quick Social & Contact Icons Bar: WhatsApp, Email, Facebook */}
            <div className="pt-1">
              <div className="flex flex-wrap items-center gap-2.5">
                {/* WhatsApp Action Button with Icon */}
                <a
                  href={SITE_DATA.personal.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 bg-white hover:bg-[#25D366] hover:text-white border border-[#E2E5DC] hover:border-[#25D366] rounded-xl text-xs font-semibold text-[#202720] transition-all duration-200 shadow-2xs group cursor-pointer"
                  title="WhatsApp"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366] group-hover:text-white transition-colors" />
                  <span>WhatsApp</span>
                </a>

                {/* Email Action Button with Icon */}
                <a
                  href={`mailto:${SITE_DATA.personal.email}`}
                  className="inline-flex items-center gap-2 px-3.5 py-2 bg-white hover:bg-[#202720] hover:text-white border border-[#E2E5DC] hover:border-[#202720] rounded-xl text-xs font-semibold text-[#202720] transition-all duration-200 shadow-2xs group cursor-pointer"
                  title="Email"
                >
                  <EmailIcon className="w-4 h-4 text-[#202720] group-hover:text-white transition-colors" />
                  <span>Email</span>
                </a>

                {/* Facebook Action Button with Icon */}
                <a
                  href={SITE_DATA.personal.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 bg-white hover:bg-[#1877F2] hover:text-white border border-[#E2E5DC] hover:border-[#1877F2] rounded-xl text-xs font-semibold text-[#202720] transition-all duration-200 shadow-2xs group cursor-pointer"
                  title="Facebook"
                >
                  <FacebookIcon className="w-4 h-4 text-[#1877F2] group-hover:text-white transition-colors" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-2 w-full">
              {/* Primary CTA: Let's Work Together */}
              <button
                onClick={onContactClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[44px] text-xs sm:text-sm font-bold text-[#202720] bg-[#B7F34A] hover:bg-[#a6e636] rounded-xl transition-all duration-200 shadow-sm active:scale-[0.98] cursor-pointer w-full sm:w-auto"
              >
                <span>{t(SITE_DATA.hero.secondaryCtaText)}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              {/* Secondary CTA: Explore Services */}
              <button
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[44px] text-xs sm:text-sm font-semibold text-[#202720] bg-white hover:bg-[#EAEAE4] border border-[#E2E5DC] hover:border-[#202720]/30 rounded-xl transition-all duration-200 cursor-pointer shadow-xs active:scale-[0.98] w-full sm:w-auto"
              >
                <span>{t(SITE_DATA.hero.primaryCtaText)}</span>
                <ArrowDown className="w-4 h-4 text-[#646E63]" />
              </button>
            </div>

            {/* Discipline Chips */}
            <div className="pt-3 border-t border-[#E2E5DC] w-full">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                {UI_STRINGS.hero.disciplineTags.map((tag, idx) => (
                  <span
                    key={idx}
                    className={`inline-block px-2.5 py-1 bg-white border border-[#E2E5DC] rounded-full text-[10px] sm:text-[11px] font-semibold text-[#646E63] shadow-2xs ${
                      isBengali ? 'tracking-normal' : 'tracking-wider uppercase'
                    }`}
                  >
                    {tag[lang] || tag.en}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* TABLET & DESKTOP: Right Column Portrait */}
          <div className="hidden md:flex md:col-span-5 justify-center md:justify-end w-full min-w-0">
            {renderPortrait('max-w-[340px] lg:max-w-[380px]')}
          </div>

        </div>
      </div>
    </section>
  );
};
