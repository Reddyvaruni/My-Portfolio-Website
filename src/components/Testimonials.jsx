import React from 'react';
import { testimonialsData } from '../data/portfolioData';
import { IconStar } from './Icons';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold tracking-wider uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Client Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            What Clients Say
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Read sample feedback from small business owners and creators who worked with me.
          </p>
        </div>

        {/* Testimonials 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50/60 rounded-2xl p-7 border border-slate-200/80 shadow-subtle flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <IconStar key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Quote Text */}
                <blockquote className="text-sm sm:text-base text-slate-700 leading-relaxed italic">
                  "{item.quote}"
                </blockquote>
              </div>

              {/* Author & Placeholder Badge */}
              <div className="pt-4 border-t border-slate-200/70 space-y-2">
                <div className="flex items-center gap-3">
                  {/* Initials Avatar */}
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center border border-blue-200">
                    {item.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 leading-tight">
                      {item.name}
                    </h4>
                    <p className="text-xs text-slate-500">
                      {item.role}, {item.company}
                    </p>
                  </div>
                </div>

                {/* Transparency notice badge */}
                <div className="text-[10px] text-slate-400 font-medium pt-1">
                  * Placeholder review (update in portfolioData.js)
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Notice for genuine feedback */}
        <div className="mt-12 text-center text-xs text-slate-500 max-w-xl mx-auto">
          <p>
            * These reviews are illustrative templates. As you complete projects for your clients, replace them in <code className="text-slate-700 font-mono text-[11px] bg-slate-100 px-1 py-0.5 rounded">src/data/portfolioData.js</code> with genuine reviews!
          </p>
        </div>

      </div>
    </section>
  );
}
