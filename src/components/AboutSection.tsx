import React, { useState } from 'react';
import { SITE_DATA, UI_STRINGS } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { Check, User } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [imageError, setImageError] = useState(false);
  const { t, lang, isBengali } = useLanguage();

  return (
    <section id="about" className="py-20 sm:py-24 border-t border-[#E2E5DC] bg-[#F5F5F0] w-full overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 sm:mb-16">
          <div className="text-xs uppercase tracking-widest text-[#646E63] font-semibold mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B7F34A]" />
            <span>{t(UI_STRINGS.about.badge)}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202720] tracking-tight">
            {t(UI_STRINGS.about.heading)}
          </h2>
        </div>

        {/* 2-Column Split: Authentic Photo & Narrative Biography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-20 sm:mb-24 w-full">
          {/* Left Column: Official Profile Photograph */}
          <div className="lg:col-span-5 w-full">
            <div className="relative bg-white p-3 rounded-2xl border border-[#E2E5DC] shadow-[0_4px_20px_rgba(32,39,32,0.03)] max-w-[380px] mx-auto lg:max-w-none">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#181E18]">
                {!imageError ? (
                  <img
                    src={SITE_DATA.personal.profilePhoto}
                    alt={`${t(SITE_DATA.personal.name)} — ${t(SITE_DATA.personal.title)}`}
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover object-top filter contrast-[1.02]"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-[#646E63]">
                    <User className="w-12 h-12 mb-3 stroke-1 text-[#202720]" />
                    <span className="text-sm font-semibold text-[#202720]">{t(SITE_DATA.personal.name)}</span>
                    <span className="text-xs mt-1">{t(SITE_DATA.personal.title)}</span>
                  </div>
                )}
              </div>

              {/* Verified Trust Strip under Photo */}
              <div className="mt-3 px-2 py-1 flex items-center justify-between text-xs text-[#646E63]">
                <div className="flex items-center gap-1.5 font-medium text-[#202720]">
                  <span className="w-2 h-2 rounded-full bg-[#B7F34A]" />
                  <span>{t(UI_STRINGS.about.verifiedBadge)}</span>
                </div>
                <span>{t(SITE_DATA.personal.location)}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Biography & Philosophy */}
          <div className="lg:col-span-7 space-y-6 w-full">
            <div className={`space-y-4 text-base sm:text-lg text-[#646E63] leading-relaxed ${isBengali ? 'leading-[1.7]' : ''}`}>
              {SITE_DATA.personal.bio[lang].map((paragraph, pIdx) => (
                <p key={pIdx}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Design Philosophy Callout */}
            <div className="p-6 sm:p-7 bg-white rounded-2xl border border-[#E2E5DC] mt-8 shadow-2xs">
              <div className="text-xs uppercase tracking-widest text-[#646E63] font-semibold mb-2">
                {t(UI_STRINGS.about.philosophyBadge)}
              </div>
              <blockquote className={`text-lg sm:text-xl font-bold text-[#202720] leading-snug ${isBengali ? 'leading-[1.5]' : ''}`}>
                “{t(SITE_DATA.personal.philosophy)}”
              </blockquote>
            </div>

            {/* Software Tools */}
            <div className="pt-6 w-full">
              <div className="text-xs uppercase tracking-widest text-[#646E63] font-semibold mb-4">
                {t(UI_STRINGS.about.toolsBadge)}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                {SITE_DATA.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="p-3.5 bg-white border border-[#E2E5DC] rounded-xl flex flex-col justify-between shadow-2xs"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-[#202720]">{tool.name}</span>
                      <span className="text-[11px] font-mono text-[#646E63]">{t(tool.category)}</span>
                    </div>
                    <p className="text-xs text-[#646E63] mt-1.5 leading-relaxed">
                      {t(tool.description)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Creative Process Section */}
        <div className="pt-16 border-t border-[#E2E5DC] w-full">
          <div className="max-w-2xl mb-12">
            <div className="text-xs uppercase tracking-widest text-[#646E63] font-semibold mb-2">
              {t(UI_STRINGS.about.processBadge)}
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#202720] tracking-tight">
              {t(UI_STRINGS.about.processHeading)}
            </h3>
            <p className="text-sm sm:text-base text-[#646E63] mt-2">
              {t(UI_STRINGS.about.processSub)}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
            {SITE_DATA.process.map((step) => (
              <div
                key={step.number}
                className="p-6 bg-white border border-[#E2E5DC] rounded-2xl flex flex-col justify-between space-y-4 hover:border-[#B7F34A] transition-colors shadow-2xs"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-[#646E63]">
                    {step.number}
                  </span>
                  <h4 className="text-lg font-bold text-[#202720] mt-2">
                    {t(step.name)}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#646E63] mt-2 leading-relaxed">
                    {t(step.description)}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E2E5DC] flex items-center gap-1.5 text-[11px] text-[#646E63] font-mono">
                  <Check className="w-3.5 h-3.5 text-[#202720]" />
                  <span>{isBengali ? `ধাপ ${step.number}` : `Phase ${step.number}`}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
