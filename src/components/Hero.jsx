import React from 'react';
import { heroData } from '../data/portfolioData';
import { IconArrowRight, IconCheck, IconSmartphone } from './Icons';

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white">
      {/* Subtle background decorative glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Subheading, CTAs & Trust Badges */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Lead badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs sm:text-sm font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              {heroData.badge}
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              {heroData.headline}
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {heroData.subheading}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <a
                href={heroData.primaryCtaLink}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
              >
                <span>{heroData.primaryCtaText}</span>
                <IconArrowRight className="w-4 h-4" />
              </a>

              <a
                href={heroData.secondaryCtaLink}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 rounded-xl transition-all duration-200"
              >
                {heroData.secondaryCtaText}
              </a>
            </div>

            {/* Trust statement */}
            <div className="pt-2 text-xs sm:text-sm font-medium text-slate-500 flex items-center justify-center lg:justify-start gap-2">
              <span>{heroData.trustStatement}</span>
            </div>

            {/* Quick Metrics / Guarantees */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center lg:text-left">
              {heroData.stats.map((stat, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="text-xl sm:text-2xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-xs text-slate-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Modern Website Browser Preview Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Browser Window Frame */}
              <div className="bg-white rounded-2xl shadow-card border border-slate-200 overflow-hidden transform transition-all duration-300 hover:shadow-card-hover">
                {/* Browser Top Bar */}
                <div className="bg-slate-100/90 px-4 py-3 border-b border-slate-200 flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-400 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-400 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block"></span>
                  </div>
                  <div className="flex-1 bg-white px-3 py-1 rounded-md text-xs text-slate-500 font-mono flex items-center justify-between border border-slate-200/70">
                    <span className="truncate">https://yourclientbusiness.com</span>
                    <span className="text-emerald-600 text-[10px] font-semibold">🔒 SSL Secure</span>
                  </div>
                </div>

                {/* Simulated Web Page Content */}
                <div className="p-5 sm:p-6 bg-slate-50/50 space-y-4">
                  {/* Mock Site Header */}
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md bg-blue-600"></div>
                      <span className="text-xs font-bold text-slate-800">Apex Growth Co.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] text-slate-500 hidden sm:inline">About</span>
                      <span className="text-[11px] text-slate-500 hidden sm:inline">Services</span>
                      <span className="px-2 py-1 text-[11px] font-medium bg-blue-600 text-white rounded">Contact</span>
                    </div>
                  </div>

                  {/* Mock Hero Banner */}
                  <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-subtle space-y-2.5">
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      High-Converting Design
                    </span>
                    <h2 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      Grow Your Local Business With A Premium Digital Presence
                    </h2>
                    <p className="text-[11px] text-slate-500 line-clamp-2">
                      Clean layouts, clear value proposition, and instant WhatsApp booking buttons designed to turn visitors into paying clients.
                    </p>
                    <div className="flex items-center gap-2 pt-1">
                      <span className="px-2.5 py-1 text-[10px] font-medium bg-blue-600 text-white rounded-md">
                        Book Consultation
                      </span>
                      <span className="px-2.5 py-1 text-[10px] font-medium bg-slate-100 text-slate-600 rounded-md">
                        Our Portfolio
                      </span>
                    </div>
                  </div>

                  {/* Mock 3-column feature grid */}
                  <div className="grid grid-cols-3 gap-2 pt-1">
                    <div className="bg-white p-2.5 rounded-lg border border-slate-200 text-center space-y-1">
                      <div className="text-xs font-bold text-blue-600">99.8%</div>
                      <div className="text-[10px] text-slate-500">Uptime</div>
                    </div>
                    <div className="bg-white p-2.5 rounded-lg border border-slate-200 text-center space-y-1">
                      <div className="text-xs font-bold text-blue-600">&lt; 1.2s</div>
                      <div className="text-[10px] text-slate-500">Fast Load</div>
                    </div>
                    <div className="bg-white p-2.5 rounded-lg border border-slate-200 text-center space-y-1">
                      <div className="text-xs font-bold text-blue-600">100%</div>
                      <div className="text-[10px] text-slate-500">Responsive</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge: Mobile Ready */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white py-2.5 px-4 rounded-xl shadow-lg border border-slate-200 flex items-center gap-3 animate-float-slow">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <IconSmartphone className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Mobile-First Layout</div>
                  <div className="text-[11px] text-slate-500">Looks great on every phone</div>
                </div>
              </div>

              {/* Floating Badge: Fast Turnaround */}
              <div className="absolute -top-4 -right-2 sm:-right-4 bg-white py-2 px-3.5 rounded-xl shadow-md border border-slate-200 flex items-center gap-2 text-xs font-semibold text-slate-800">
                <IconCheck className="w-4 h-4 text-emerald-600" />
                <span>3–7 Days Delivery</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
