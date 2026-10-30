import React from 'react';
import { whyChooseMeData } from '../data/portfolioData';
import {
  IconSmartphone,
  IconSparkles,
  IconClock,
  IconCoins,
  IconCheck,
  IconShield,
  IconArrowRight
} from './Icons';

export default function WhyChooseMe() {
  const renderIcon = (name) => {
    switch (name) {
      case 'Smartphone':
        return <IconSmartphone className="w-6 h-6 text-blue-600" />;
      case 'Sparkles':
        return <IconSparkles className="w-6 h-6 text-blue-600" />;
      case 'Clock':
        return <IconClock className="w-6 h-6 text-blue-600" />;
      case 'Coins':
        return <IconCoins className="w-6 h-6 text-blue-600" />;
      default:
        return <IconSparkles className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="why-me" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold tracking-wider uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            The Freelance Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {whyChooseMeData.heading}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            {whyChooseMeData.subheading}
          </p>
        </div>

        {/* 4 Benefit Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {whyChooseMeData.cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-slate-50/60 hover:bg-white rounded-2xl p-6 border border-slate-200/80 shadow-subtle hover:shadow-card-hover transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center shadow-xs">
                  {renderIcon(card.icon)}
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* "Built Around Your Business" Feature Card */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-8 sm:p-10 lg:p-12 shadow-xl border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold border border-blue-400/30">
                <IconShield className="w-4 h-4 text-blue-400" />
                <span>Custom Strategy & No Cookie-Cutter Templates</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {whyChooseMeData.deepDive.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {whyChooseMeData.deepDive.description}
              </p>

              {/* Realistic business focus note */}
              <div className="pt-2 text-xs text-slate-400 italic">
                * No fake promises or unrealistic claims like "100% instant sales." Instead, I build high-speed, intuitive, and trustworthy websites that make it easy for your real customers to take action.
              </div>
            </div>

            {/* Bullets List */}
            <div className="lg:col-span-5 bg-slate-800/80 rounded-xl p-6 border border-slate-700/80 space-y-3.5">
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block border-b border-slate-700 pb-2">
                What You Get Working With Me
              </span>
              <ul className="space-y-3">
                {whyChooseMeData.deepDive.bulletPoints.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <IconCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-3">
                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-lg transition-colors"
                >
                  <span>Discuss Your Project</span>
                  <IconArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
