import React, { useState, useMemo } from 'react';
import { SITE_DATA, PortfolioProject, UI_STRINGS } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUpRight, Play, Eye } from 'lucide-react';

interface SelectedWorksProps {
  onSelectProject: (project: PortfolioProject) => void;
}

export const SelectedWorks: React.FC<SelectedWorksProps> = ({ onSelectProject }) => {
  const [activeCategoryKey, setActiveCategoryKey] = useState<string>('all');
  const { t, lang, isBengali } = useLanguage();

  const filterOptions = [
    { key: 'all', label: t(UI_STRINGS.works.allFilter) },
    { key: 'brand', label: t(UI_STRINGS.works.categories.brand) },
    { key: 'logo', label: t(UI_STRINGS.works.categories.logo) },
    { key: 'social', label: t(UI_STRINGS.works.categories.social) },
    { key: 'poster', label: t(UI_STRINGS.works.categories.poster) },
    { key: 'thumbnail', label: t(UI_STRINGS.works.categories.thumbnail) },
    { key: 'video', label: t(UI_STRINGS.works.categories.video) }
  ];

  const filteredProjects = useMemo(() => {
    if (activeCategoryKey === 'all') {
      return SITE_DATA.projects;
    }
    return SITE_DATA.projects.filter((p) => p.categoryKey === activeCategoryKey);
  }, [activeCategoryKey]);

  return (
    <section id="work" className="py-20 sm:py-24 bg-[#202720] text-white w-full overflow-hidden border-t border-[#2F382F]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#B7F34A] font-semibold mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B7F34A]" />
              <span>{t(UI_STRINGS.works.badge)}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              {t(UI_STRINGS.works.heading)}
            </h2>
            <p className="text-base text-[#C5CEC3] mt-2.5 max-w-xl leading-relaxed">
              {t(UI_STRINGS.works.subheading)}
            </p>
          </div>

          <div className="text-xs font-mono text-[#C5CEC3] bg-[#273027] px-3.5 py-2 rounded-xl border border-[#354235] shrink-0 self-start md:self-auto">
            {isBengali ? (
              <span>মোট {SITE_DATA.projects.length}টির মধ্যে {filteredProjects.length}টি প্রদর্শিত</span>
            ) : (
              <span>SHOWING {filteredProjects.length} OF {SITE_DATA.projects.length} PROJECTS</span>
            )}
          </div>
        </div>

        {/* Minimal Category Filter Controls on Dark Background */}
        <div className="flex flex-wrap gap-2 pb-6 border-b border-[#2F382F] mb-10 sm:mb-12 w-full">
          {filterOptions.map((opt) => {
            const isActive = activeCategoryKey === opt.key;
            return (
              <button
                key={opt.key}
                type="button"
                onClick={() => setActiveCategoryKey(opt.key)}
                className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-xl transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer active:scale-[0.98] ${
                  isActive
                    ? 'bg-[#B7F34A] text-[#202720] font-bold shadow-sm'
                    : 'bg-[#273027] text-[#C5CEC3] hover:text-white border border-[#354235] hover:border-[#B7F34A]/40'
                }`}
              >
                {opt.label}
              </button>
            );
          })}
        </div>

        {/* Editorial Project Grid — Responsive & Perfectly Spaced */}
        <div
          className={`w-full ${
            filteredProjects.length === 1
              ? 'max-w-2xl mx-auto'
              : 'grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10'
          }`}
        >
          {filteredProjects.map((project) => {
            const isVideo = project.categoryKey === 'video';

            return (
              <article
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group cursor-pointer bg-[#273027] border border-[#354235] rounded-2xl overflow-hidden hover:border-[#B7F34A]/50 transition-all duration-300 flex flex-col justify-between shadow-lg"
              >
                {/* Artwork Container */}
                <div className="relative overflow-hidden bg-[#181E18]">
                  <div
                    className={`w-full overflow-hidden relative ${
                      project.aspectRatio === '16:9'
                        ? 'aspect-[16/9]'
                        : project.aspectRatio === '3:4'
                        ? 'aspect-[3/4] max-h-[460px]'
                        : 'aspect-[4/3]'
                    }`}
                  >
                    <img
                      src={project.coverImage}
                      alt={`${t(project.title)} — ${t(project.categoryName)}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                      loading="lazy"
                    />

                    {/* Minimal Overlay Indicator on Hover */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#202720] text-[#B7F34A] border border-[#B7F34A]/40 text-xs font-semibold rounded-xl shadow-xl">
                        {isVideo ? <Play className="w-3.5 h-3.5 fill-current" /> : <Eye className="w-3.5 h-3.5" />}
                        <span>{t(UI_STRINGS.works.viewBreakdown)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-5 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Unboxed Metadata on Dark */}
                    <div className="flex items-center gap-2 text-xs font-mono text-[#C5CEC3] mb-2.5">
                      <span className="font-medium text-[#B7F34A]">{t(project.categoryName)}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#B7F34A] transition-colors flex items-center justify-between gap-2">
                      <span>{t(project.title)}</span>
                      <ArrowUpRight className="w-5 h-5 text-[#C5CEC3] group-hover:text-[#B7F34A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0" />
                    </h3>

                    <p className="text-sm text-[#C5CEC3] mt-2.5 leading-relaxed">
                      {t(project.shortDescription)}
                    </p>
                  </div>

                  {/* Clean unboxed tags on Dark */}
                  <div className="pt-4 border-t border-[#354235] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#C5CEC3]">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                      {project.tags.map((tag, tIndex) => (
                        <React.Fragment key={tIndex}>
                          <span>{tag[lang] || tag.en}</span>
                          {tIndex < project.tags.length - 1 && <span aria-hidden="true" className="text-[#3F4F3F]">·</span>}
                        </React.Fragment>
                      ))}
                    </div>

                    <span className="text-xs font-semibold text-[#B7F34A] underline underline-offset-4 group-hover:text-white shrink-0 transition-colors">
                      {t(UI_STRINGS.works.caseStudy)}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
