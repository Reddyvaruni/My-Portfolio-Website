import React, { useState, useEffect } from 'react';
import { personalInfo, contactOptions } from '../data/portfolioData';
import {
  IconMail,
  IconPhone,
  IconWhatsApp,
  IconInstagram,
  IconLinkedIn,
  IconCheckCircle,
  IconArrowRight,
  IconClock
} from './Icons';

export default function Contact({ preselectedService, preselectedPackage }) {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    businessType: '',
    websiteType: 'Business Website',
    budgetRange: '₹2,000 – ₹5,000',
    projectDescription: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync preselected options if clicked from services or pricing
  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({
        ...prev,
        websiteType: preselectedService.includes('E-Commerce') ? 'E-Commerce' :
                     preselectedService.includes('Landing') ? 'Landing Page' :
                     preselectedService.includes('Portfolio') ? 'Portfolio' :
                     preselectedService.includes('Redesign') ? 'Website Redesign' :
                     'Business Website',
        projectDescription: prev.projectDescription || `I'm interested in the ${preselectedService} package.`,
      }));
    }
  }, [preselectedService]);

  useEffect(() => {
    if (preselectedPackage) {
      setFormData((prev) => ({
        ...prev,
        budgetRange: preselectedPackage === 'Starter' ? 'Under ₹2,000' :
                     preselectedPackage === 'Business' ? '₹2,000 – ₹5,000' :
                     '₹5,000 – ₹10,000',
        projectDescription: prev.projectDescription || `I would like to inquire about the ${preselectedPackage} package.`,
      }));
    }
  }, [preselectedPackage]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-level error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone or WhatsApp number.';
    } else if (formData.phone.replace(/\D/g, '').length < 8) {
      newErrors.phone = 'Please enter a valid phone number (at least 8 digits).';
    }
    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = 'Please briefly describe your website or project goals.';
    } else if (formData.projectDescription.trim().length < 10) {
      newErrors.projectDescription = 'Please provide a little more detail (at least 10 characters).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate backend submission delay (easily connected to Formspree, EmailJS, Google Sheets, or custom API)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  // Generate direct WhatsApp link with form responses pre-filled
  const getPrefilledWhatsAppUrl = () => {
    const message = `*New Website Inquiry from Portfolio Form*:\n` +
      `• *Name*: ${formData.name}\n` +
      `• *Email*: ${formData.email}\n` +
      `• *Phone*: ${formData.phone}\n` +
      `• *Business*: ${formData.businessName || 'Not specified'}\n` +
      `• *Website Type*: ${formData.websiteType}\n` +
      `• *Budget*: ${formData.budgetRange}\n` +
      `• *Description*: ${formData.projectDescription}`;
    return `https://wa.me/${personalInfo.whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold tracking-wider uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Let's Collaborate
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Let's Build Your Website
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Tell me about your project and I'll get back to you with the next steps and a free estimate.
          </p>
        </div>

        {/* 2-Column Layout: Direct Contact Info (Left) & Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact & Guarantees */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                Prefer to chat directly?
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Whether you have an urgent deadline, want to discuss a custom feature, or need advice on domain and hosting, reach out anytime.
              </p>
            </div>

            {/* Direct Channels */}
            <div className="space-y-4">
              {/* WhatsApp direct card */}
              <a
                href={personalInfo.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-emerald-200 bg-emerald-50/50 hover:bg-emerald-50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                  <IconWhatsApp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider">Fastest Response</div>
                  <div className="text-base font-bold text-slate-900">Chat on WhatsApp</div>
                  <div className="text-xs text-slate-500">{personalInfo.phone}</div>
                </div>
              </a>

              {/* Email direct card */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-slate-100 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                  <IconMail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-blue-800 uppercase tracking-wider">Email Inquiry</div>
                  <div className="text-base font-bold text-slate-900">{personalInfo.email}</div>
                  <div className="text-xs text-slate-500">Detailed proposals & queries</div>
                </div>
              </a>
            </div>

            {/* Social Links */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                Connect on Social Platforms
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-slate-100 text-slate-600 hover:text-pink-600 hover:bg-pink-50 flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <IconInstagram className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-slate-100 text-slate-600 hover:text-blue-700 hover:bg-blue-50 flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <IconLinkedIn className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 flex items-center justify-center transition-colors"
                  aria-label="GitHub"
                >
                  <IconPhone className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Reassurance */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-3 text-xs text-slate-600">
              <IconClock className="w-5 h-5 text-blue-600 shrink-0" />
              <span>
                <strong>Prompt Response Guarantee:</strong> I usually reply to quote inquiries within 2 to 4 business hours.
              </span>
            </div>
          </div>

          {/* Right Column: Lead Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-card p-6 sm:p-8">
              
              {isSubmitted ? (
                /* Success Message */
                <div className="text-center py-10 space-y-5 animate-fadeIn">
                  <div className="flex justify-center">
                    <IconCheckCircle className="w-16 h-16 text-emerald-500" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-slate-900">
                      Quote Request Received!
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto">
                      Thank you, <strong>{formData.name}</strong>. I will review your requirements and respond within 24 hours via email or phone.
                    </p>
                  </div>

                  {/* Immediate WhatsApp option with pre-filled text */}
                  <div className="pt-4 max-w-sm mx-auto space-y-3">
                    <p className="text-xs text-slate-500 font-medium">
                      Want an instant reply? Send your inquiry directly to my WhatsApp:
                    </p>
                    <a
                      href={getPrefilledWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-xl shadow-sm transition-all"
                    >
                      <IconWhatsApp className="w-4 h-4 text-white" />
                      <span>Continue to WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          businessName: '',
                          businessType: '',
                          websiteType: 'Business Website',
                          budgetRange: '₹2,000 – ₹5,000',
                          projectDescription: '',
                        });
                      }}
                      className="text-xs font-semibold text-blue-600 hover:underline pt-2 block mx-auto"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                </div>
              ) : (
                /* Contact / Lead Generation Form */
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all ${
                          errors.name ? 'border-red-400 bg-red-50/30' : 'border-slate-300 bg-white'
                        }`}
                        required
                      />
                      {errors.name && <p className="text-xs text-red-600 mt-1 font-medium">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all ${
                          errors.email ? 'border-red-400 bg-red-50/30' : 'border-slate-300 bg-white'
                        }`}
                        required
                      />
                      {errors.email && <p className="text-xs text-red-600 mt-1 font-medium">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Phone & Business Name Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Phone / WhatsApp <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all ${
                          errors.phone ? 'border-red-400 bg-red-50/30' : 'border-slate-300 bg-white'
                        }`}
                        required
                      />
                      {errors.phone && <p className="text-xs text-red-600 mt-1 font-medium">{errors.phone}</p>}
                    </div>

                    <div>
                      <label htmlFor="businessName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Business Name <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        id="businessName"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="Doe Enterprises"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Website Type & Budget Range Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="websiteType" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Website Type
                      </label>
                      <select
                        id="websiteType"
                        name="websiteType"
                        value={formData.websiteType}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      >
                        {contactOptions.websiteTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="budgetRange" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Budget Range
                      </label>
                      <select
                        id="budgetRange"
                        name="budgetRange"
                        value={formData.budgetRange}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      >
                        {contactOptions.budgetRanges.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label htmlFor="projectDescription" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Project Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="projectDescription"
                      name="projectDescription"
                      rows={4}
                      value={formData.projectDescription}
                      onChange={handleChange}
                      placeholder="Briefly describe what your business does, how many pages you need, any example websites you like, or special features required..."
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all ${
                        errors.projectDescription ? 'border-red-400 bg-red-50/30' : 'border-slate-300 bg-white'
                      }`}
                      required
                    ></textarea>
                    {errors.projectDescription && (
                      <p className="text-xs text-red-600 mt-1 font-medium">{errors.projectDescription}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:opacity-75 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all"
                    >
                      {isSubmitting ? (
                        <span>Submitting Request...</span>
                      ) : (
                        <>
                          <span>Request a Free Quote</span>
                          <IconArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-center text-slate-400 mt-2">
                      Zero commitment. 100% free consultation and project estimate.
                    </p>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
