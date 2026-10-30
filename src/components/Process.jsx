import React from 'react';
import { processSteps } from '../data/portfolioData';

export default function Process() {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold tracking-wider uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Simple 4-Step Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            A transparent and organized workflow from your first message to website launch.
          </p>
        </div>

        {/* 4 Steps Process: Desktop Horizontal, Mobile Vertical */}
        <div className="relative">
          {/* Subtle horizontal connecting line on large screens */}
          <div className="hidden lg:block absolute top-10 left-12 right-12 h-0.5 bg-slate-200 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {processSteps.map((step, idx) => (
              <div
                key={step.step}
                className="bg-white lg:bg-transparent rounded-2xl p-6 lg:p-0 border border-slate-200/80 lg:border-0 shadow-subtle lg:shadow-none space-y-4"
              >
                {/* Step Number Circle */}
                <div className="flex items-center justify-between lg:block">
                  <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-extrabold text-lg shadow-md border-4 border-white">
                    {step.step}
                  </div>
                  <span className="lg:hidden text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                    {step.duration}
                  </span>
                </div>

                {/* Step Title & Details */}
                <div className="space-y-2">
                  <div className="hidden lg:inline-block text-[11px] font-semibold text-blue-600 uppercase tracking-wider">
                    {step.duration}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reassurance banner below process */}
        <div className="mt-14 p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-slate-900">Have questions about the timeline?</h4>
            <p className="text-xs text-slate-600">Most projects take under 7 days. Need an expedited rush delivery? Just let me know.</p>
          </div>
          <a
            href="#contact"
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg shrink-0 transition-colors"
          >
            Start Day 1
          </a>
        </div>

      </div>
    </section>
  );
}
