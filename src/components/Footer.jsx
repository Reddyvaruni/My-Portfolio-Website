import React from 'react';
import { personalInfo } from '../data/portfolioData';
import {
  IconWhatsApp,
  IconInstagram,
  IconLinkedIn,
  IconGitHub,
  IconArrowUp
} from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href="#home"
              className="text-2xl font-bold tracking-tight text-white flex items-center gap-1.5 focus:outline-none"
            >
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-blue-500"></span>
              <span>{personalInfo.brandName}</span>
              <span className="text-blue-500">{personalInfo.brandExtension}</span>
            </a>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Building modern websites for businesses, professionals, and creators.
            </p>

            <div className="pt-1 text-xs text-slate-400 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>{personalInfo.availability}</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-blue-400 transition-colors">Portfolio</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-blue-400 transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-blue-400 transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Services Quick List */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Business Websites</li>
              <li>Portfolio Websites</li>
              <li>High-Converting Landing Pages</li>
              <li>E-Commerce Stores</li>
              <li>Website Redesign & Speed</li>
            </ul>
          </div>

          {/* Social & Connect */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Connect
            </h4>
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-emerald-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <IconWhatsApp className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-pink-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <IconInstagram className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <IconLinkedIn className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-white hover:text-slate-900 text-slate-300 flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <IconGitHub className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2 text-xs text-slate-400">
              <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors underline">
                {personalInfo.email}
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 {personalInfo.fullName}. All rights reserved.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <IconArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
