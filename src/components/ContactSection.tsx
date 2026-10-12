import React, { useState } from 'react';
import { SITE_DATA, UI_STRINGS } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUpRight, CheckCircle2, Send, Copy, Check } from 'lucide-react';
import { WhatsAppIcon, FacebookIcon, EmailIcon } from './SocialIcons';

interface ContactSectionProps {
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedService }) => {
  const { t, isBengali } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: preselectedService || (isBengali ? 'ব্র্যান্ড আইডেন্টিটি ও লোগো ডিজাইন' : 'Brand Identity & Logo Design'),
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const projectTypes = [
    t(UI_STRINGS.works.categories.brand),
    t(UI_STRINGS.works.categories.logo),
    t(UI_STRINGS.works.categories.social),
    t(UI_STRINGS.works.categories.poster),
    t(UI_STRINGS.works.categories.thumbnail),
    t(UI_STRINGS.works.categories.video),
    isBengali ? 'একাধিক / অন্যান্য কাজ' : 'Multiple / Other Creative Work'
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SITE_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const constructMailtoUrl = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType} — ${formData.name || 'New Client'}`);
    const body = encodeURIComponent(
      `Hello Md Mahdi Hasan,\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Project Type: ${formData.projectType}\n\n` +
      `Project Details:\n${formData.message}\n\n` +
      `Best regards,\n${formData.name}`
    );
    return `mailto:${SITE_DATA.personal.email}?subject=${subject}&body=${body}`;
  };

  const constructWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hello Md Mahdi Hasan! I would like to inquire about a project:\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Service:* ${formData.projectType}\n` +
      `*Details:* ${formData.message}`
    );
    return `https://wa.me/8801718014437?text=${text}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 border-t border-[#E2E5DC] bg-[#F5F5F0] w-full overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 sm:mb-16">
          <div className="text-xs uppercase tracking-widest text-[#646E63] font-semibold mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B7F34A]" />
            <span>{t(UI_STRINGS.contact.badge)}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#202720] tracking-tight">
            {t(UI_STRINGS.contact.heading)}
          </h2>
          <p className="text-base sm:text-lg text-[#646E63] mt-3 leading-relaxed">
            {t(UI_STRINGS.contact.subheading)}
          </p>
        </div>

        {/* 2-Column Split: Direct Channels & Interactive Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start w-full">
          {/* Left Column: Direct Communication Channels */}
          <div className="lg:col-span-5 space-y-5 w-full">
            {/* Email Card */}
            <div className="p-6 bg-white rounded-2xl border border-[#E2E5DC] shadow-xs">
              <div className="flex items-center justify-between mb-3 text-xs text-[#646E63]">
                <div className="flex items-center gap-2 font-semibold text-[#202720]">
                  <span className="w-7 h-7 rounded-lg bg-[#F5F5F0] border border-[#E2E5DC] flex items-center justify-center text-[#202720] shrink-0">
                    <EmailIcon className="w-3.5 h-3.5 text-[#202720]" />
                  </span>
                  <span>{t(UI_STRINGS.contact.directEmail)}</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1 hover:text-[#202720] transition-colors cursor-pointer"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? t(UI_STRINGS.contact.copied) : t(UI_STRINGS.contact.copy)}</span>
                </button>
              </div>
              <a
                href={`mailto:${SITE_DATA.personal.email}`}
                className="text-lg sm:text-xl font-bold text-[#202720] hover:underline block break-all"
              >
                {SITE_DATA.personal.email}
              </a>
              <p className="text-xs text-[#646E63] mt-2">
                {t(UI_STRINGS.contact.responseNotice)}
              </p>
            </div>

            {/* WhatsApp Card */}
            <div className="p-6 bg-white rounded-2xl border border-[#E2E5DC] shadow-xs">
              <div className="flex items-center gap-2 font-semibold text-[#202720] mb-3 text-xs">
                <span className="w-7 h-7 rounded-lg bg-[#25D366]/15 border border-[#25D366]/20 flex items-center justify-center text-[#25D366] shrink-0">
                  <WhatsAppIcon className="w-4 h-4" />
                </span>
                <span>{t(UI_STRINGS.contact.whatsappTitle)}</span>
              </div>
              <a
                href={SITE_DATA.personal.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg sm:text-xl font-bold text-[#202720] hover:underline flex items-center justify-between group"
              >
                <span>{SITE_DATA.personal.phone}</span>
                <ArrowUpRight className="w-4 h-4 text-[#646E63] group-hover:text-[#202720] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
              <p className="text-xs text-[#646E63] mt-2">
                {t(UI_STRINGS.contact.whatsappNotice)}
              </p>
            </div>

            {/* Facebook Card */}
            <div className="p-6 bg-white rounded-2xl border border-[#E2E5DC] shadow-xs">
              <div className="flex items-center gap-2 font-semibold text-[#202720] mb-3 text-xs">
                <span className="w-7 h-7 rounded-lg bg-[#1877F2]/15 border border-[#1877F2]/20 flex items-center justify-center text-[#1877F2] shrink-0">
                  <FacebookIcon className="w-4 h-4" />
                </span>
                <span>{t(UI_STRINGS.contact.facebookTitle)}</span>
              </div>
              <a
                href={SITE_DATA.personal.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-lg font-bold text-[#202720] hover:underline flex items-center justify-between group"
              >
                <span>fb.com/MdMahdiHasan.Official</span>
                <ArrowUpRight className="w-4 h-4 text-[#646E63] group-hover:text-[#202720] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
              <p className="text-xs text-[#646E63] mt-2">
                {t(UI_STRINGS.contact.facebookNotice)}
              </p>
            </div>

            {/* Availability Indicator */}
            <div className="p-4 bg-white rounded-xl border border-[#E2E5DC] flex items-center gap-3 text-xs text-[#646E63] shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#B7F34A] shrink-0" />
              <span>{t(UI_STRINGS.contact.acceptingFreelance)}</span>
            </div>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 md:p-9 rounded-2xl border border-[#E2E5DC] shadow-xs w-full">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5 w-full">
                <div>
                  <h3 className="text-xl font-bold text-[#202720]">
                    {t(UI_STRINGS.contact.formTitle)}
                  </h3>
                  <p className="text-xs text-[#646E63] mt-1">
                    {t(UI_STRINGS.contact.formSubtitle)}
                  </p>
                </div>

                {/* Name & Email Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-[#202720] mb-2">
                      {t(UI_STRINGS.contact.nameLabel)}
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder={t(UI_STRINGS.contact.namePlaceholder)}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F5F5F0] border border-[#E2E5DC] rounded-xl text-base sm:text-sm text-[#202720] placeholder:text-[#646E63]/60 focus:outline-none focus:border-[#202720] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-[#202720] mb-2">
                      {t(UI_STRINGS.contact.emailLabel)}
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder={t(UI_STRINGS.contact.emailPlaceholder)}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F5F5F0] border border-[#E2E5DC] rounded-xl text-base sm:text-sm text-[#202720] placeholder:text-[#646E63]/60 focus:outline-none focus:border-[#202720] transition-colors"
                    />
                  </div>
                </div>

                {/* Project Type */}
                <div className="w-full">
                  <label htmlFor="projectType" className="block text-xs font-semibold text-[#202720] mb-2">
                    {t(UI_STRINGS.contact.projectTypeLabel)}
                  </label>
                  <select
                    id="projectType"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 bg-[#F5F5F0] border border-[#E2E5DC] rounded-xl text-base sm:text-sm text-[#202720] focus:outline-none focus:border-[#202720] transition-colors cursor-pointer"
                  >
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message / Details */}
                <div className="w-full">
                  <label htmlFor="message" className="block text-xs font-semibold text-[#202720] mb-2">
                    {t(UI_STRINGS.contact.detailsLabel)}
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder={t(UI_STRINGS.contact.detailsPlaceholder)}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-[#F5F5F0] border border-[#E2E5DC] rounded-xl text-base sm:text-sm text-[#202720] placeholder:text-[#646E63]/60 focus:outline-none focus:border-[#202720] transition-colors resize-y"
                  />
                </div>

                {/* Submit Action: Primary Lime Green Button */}
                <div className="pt-2 w-full">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[44px] text-sm font-bold text-[#202720] bg-[#B7F34A] hover:bg-[#a6e636] rounded-xl transition-all duration-200 shadow-sm active:scale-[0.99] cursor-pointer"
                  >
                    <span>{t(UI_STRINGS.contact.submitBtn)}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            ) : (
              /* Success / Direct Transmission Fallback */
              <div className="space-y-6 py-4 animate-in fade-in w-full">
                <div className="w-12 h-12 rounded-full bg-[#B7F34A]/30 flex items-center justify-center text-[#202720]">
                  <CheckCircle2 className="w-6 h-6 text-[#202720]" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#202720]">
                    {t(UI_STRINGS.contact.successHeading)}
                  </h3>
                  <p className="text-sm text-[#646E63] mt-1 leading-relaxed">
                    {t(UI_STRINGS.contact.successText)}
                  </p>
                </div>

                <div className="space-y-3 pt-2 w-full">
                  <a
                    href={constructMailtoUrl()}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 min-h-[44px] text-sm font-bold text-[#202720] bg-[#B7F34A] hover:bg-[#a6e636] rounded-xl transition-all shadow-sm"
                  >
                    <EmailIcon className="w-4 h-4 text-[#202720]" />
                    <span>{t(UI_STRINGS.contact.sendEmailBtn)}</span>
                  </a>

                  <a
                    href={constructWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 min-h-[44px] text-sm font-semibold text-[#202720] bg-[#F5F5F0] hover:bg-[#EAEAE4] border border-[#E2E5DC] rounded-xl transition-all"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                    <span>{t(UI_STRINGS.contact.sendWhatsappBtn)}</span>
                  </a>
                </div>

                <div className="pt-4 border-t border-[#E2E5DC] flex items-center justify-between text-xs text-[#646E63]">
                  <span>{isBengali ? 'পরিবর্তন করতে চান?' : 'Need to edit something?'}</span>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-[#202720] font-semibold underline cursor-pointer"
                  >
                    {t(UI_STRINGS.contact.editInfo)}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
