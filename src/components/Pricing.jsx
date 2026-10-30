import React from 'react';
import { pricingPackages } from '../data/portfolioData';
import { IconCheck, IconArrowRight } from './Icons';

export default function Pricing({ onSelectPackage }) {
  const handlePackageClick = (packageName) => {
    if (onSelectPackage) {
      onSelectPackage(packageName);
    }
  };

  return (
    <section id="pricing" className="py-20 bg-slate-50/70 border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold tracking-wider uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Transparent Investment
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Simple & Flexible Pricing
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Affordable packages tailored for small businesses, startups, and individuals. Clear estimates with zero hidden agency costs.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {pricingPackages.map((pkg) => {
            const isFeatured = pkg.isPopular;

            return (
              <div
                key={pkg.id}
                className={`rounded-2xl p-8 flex flex-col justify-between transition-all duration-200 relative ${
                  isFeatured
                    ? 'bg-white border-2 border-blue-600 shadow-xl ring-4 ring-blue-50 -translate-y-1 lg:-translate-y-2'
                    : 'bg-white border border-slate-200 shadow-subtle hover:shadow-card'
                }`}
              >
                {/* Popular Badge */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm">
                    {pkg.badge}
                  </div>
                )}

                <div className="space-y-6">
                  {/* Tier Title & Subtitle */}
                  <div>
                    {!isFeatured && (
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                        {pkg.badge}
                      </span>
                    )}
                    <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                      {pkg.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1 min-h-[38px]">
                      {pkg.bestFor}
                    </p>
                  </div>

                  {/* Price display with "Starting from" label */}
                  <div className="pt-2 pb-4 border-b border-slate-100">
                    <span className="text-xs text-slate-500 block font-medium">
                      {pkg.pricePrefix}
                    </span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        {pkg.startingPrice}
                      </span>
                      {pkg.startingPrice.startsWith('₹') && (
                        <span className="text-xs text-slate-500 font-normal">/ project</span>
                      )}
                    </div>
                  </div>

                  {/* Inclusions list */}
                  <div className="space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                      What's Included
                    </span>
                    <ul className="space-y-2.5">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <IconCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-8 mt-6 border-t border-slate-100">
                  <a
                    href="#contact"
                    onClick={() => handlePackageClick(pkg.name)}
                    className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-150 ${
                      isFeatured
                        ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                    }`}
                  >
                    <span>{pkg.ctaText}</span>
                    <IconArrowRight className="w-4 h-4" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Pricing Sub-note & Custom Quote CTA */}
        <div className="mt-12 text-center space-y-4">
          <p className="text-sm text-slate-600 max-w-xl mx-auto">
            * Final pricing may adjust based on specific design complexity, extra pages, or custom APIs. You'll always receive a fixed, guaranteed quote before project kickoff.
          </p>
          <div>
            <a
              href="#contact"
              onClick={() => handlePackageClick("Custom Project")}
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 underline underline-offset-4 decoration-2"
            >
              Need something different? Get a custom quote.
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
