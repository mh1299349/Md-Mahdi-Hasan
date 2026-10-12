import React from 'react';
import { SITE_DATA, UI_STRINGS } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUpRight } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const { t, lang } = useLanguage();

  return (
    <section id="services" className="py-20 sm:py-24 border-t border-[#E2E5DC] bg-[#F5F5F0] w-full overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 sm:mb-16">
          <div className="text-xs uppercase tracking-widest text-[#646E63] font-semibold mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B7F34A]" />
            <span>{t(UI_STRINGS.services.badge)}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202720] tracking-tight">
            {t(UI_STRINGS.services.heading)}
          </h2>
          <p className="text-base text-[#646E63] mt-3 leading-relaxed">
            {t(UI_STRINGS.services.subheading)}
          </p>
        </div>

        {/* Minimal Editorial Services List */}
        <div className="divide-y divide-[#E2E5DC] border-t border-b border-[#E2E5DC] w-full">
          {SITE_DATA.services.map((service) => (
            <div
              key={service.number}
              className="py-10 lg:py-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start group hover:bg-white/80 transition-colors px-3 sm:px-5 rounded-2xl"
            >
              {/* Number and Title */}
              <div className="lg:col-span-5 flex items-baseline gap-4 sm:gap-6">
                <span className="font-mono text-sm sm:text-base font-bold text-[#646E63] shrink-0">
                  {service.number}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#202720] group-hover:text-black transition-colors">
                  {t(service.title)}
                </h3>
              </div>

              {/* Description and Deliverables */}
              <div className="lg:col-span-5 space-y-4">
                <p className="text-sm sm:text-base text-[#646E63] leading-relaxed">
                  {t(service.description)}
                </p>

                {/* Scope & Deliverables */}
                <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-[#202720]/75">
                  {service.deliverables.map((item, dIdx) => (
                    <React.Fragment key={dIdx}>
                      <span>{item[lang] || item.en}</span>
                      {dIdx < service.deliverables.length - 1 && <span className="text-[#646E63]">/</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Direct Inquiry Action */}
              <div className="lg:col-span-2 flex lg:justify-end items-center">
                <button
                  type="button"
                  onClick={() => onSelectService(t(service.title))}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#202720] hover:text-black py-2.5 px-3.5 rounded-xl border border-transparent hover:border-[#E2E5DC] bg-white sm:bg-transparent sm:hover:bg-white transition-all cursor-pointer shadow-2xs"
                >
                  <span>{t(UI_STRINGS.services.inquire)}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
