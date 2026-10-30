import React from 'react';
import { IconArrowRight } from './Icons';

export default function CallToAction() {
  return (
    <section className="py-16 bg-blue-600 text-white relative overflow-hidden">
      {/* Subtle decorative background circles */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-blue-500/50 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-80 h-80 bg-blue-700/50 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <span className="inline-block px-3.5 py-1 rounded-full bg-blue-500/40 text-blue-100 text-xs font-semibold tracking-wider uppercase border border-blue-400/40">
          Ready To Get Started?
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Have a project in mind?
        </h2>

        <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto font-normal">
          Let's turn your idea into a professional website. Share your requirements and get a free, transparent quote today.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 hover:bg-slate-50 active:bg-slate-100 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-150"
          >
            <span>Get a Free Quote</span>
            <IconArrowRight className="w-5 h-5 text-blue-600" />
          </a>
        </div>
      </div>
    </section>
  );
}
