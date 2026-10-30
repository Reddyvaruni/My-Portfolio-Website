import React from 'react';
import { servicesData } from '../data/portfolioData';
import {
  IconBuilding2,
  IconUserCheck,
  IconRocket,
  IconShoppingCart,
  IconRefreshCw,
  IconWrench,
  IconCheck,
  IconArrowRight
} from './Icons';

export default function Services({ onSelectService }) {
  // Helper to render icon by name
  const renderIcon = (name) => {
    switch (name) {
      case 'Building2':
        return <IconBuilding2 className="w-6 h-6 text-blue-600" />;
      case 'UserCheck':
        return <IconUserCheck className="w-6 h-6 text-blue-600" />;
      case 'Rocket':
        return <IconRocket className="w-6 h-6 text-blue-600" />;
      case 'ShoppingCart':
        return <IconShoppingCart className="w-6 h-6 text-blue-600" />;
      case 'RefreshCw':
        return <IconRefreshCw className="w-6 h-6 text-blue-600" />;
      case 'Wrench':
        return <IconWrench className="w-6 h-6 text-blue-600" />;
      default:
        return <IconBuilding2 className="w-6 h-6 text-blue-600" />;
    }
  };

  const handleServiceClick = (serviceTitle) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-50/60 border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold tracking-wider uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            What I Can Build For You
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Services I Offer
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Everything you need to build a professional online presence that earns client trust and converts visitors into leads.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-subtle hover:shadow-card-hover transition-all duration-200 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                  {renderIcon(service.icon)}
                </div>

                {/* Service Title & Description */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Bullet Points */}
                <div className="pt-2 border-t border-slate-100 space-y-2">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Included Highlights
                  </span>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                        <IconCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-6 mt-6 border-t border-slate-100">
                <a
                  href="#contact"
                  onClick={() => handleServiceClick(service.title)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 group-hover:translate-x-0.5 transition-all"
                >
                  <span>{service.ctaText}</span>
                  <IconArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
