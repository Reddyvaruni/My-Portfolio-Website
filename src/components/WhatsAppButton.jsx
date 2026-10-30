import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { IconWhatsApp } from './Icons';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  // Construct URL with encoded message
  const whatsappUrl = `https://wa.me/${personalInfo.whatsappNumber}?text=${encodeURIComponent(
    personalInfo.defaultWhatsAppMessage
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip badge */}
      {showTooltip && (
        <div className="hidden sm:block bg-slate-900 text-white text-xs font-semibold py-1.5 px-3 rounded-lg shadow-lg animate-fadeIn whitespace-nowrap">
          Quick WhatsApp Chat 👋
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="w-14 h-14 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-200"
        aria-label="Chat on WhatsApp"
        title="Chat with me directly on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400"></span>
        </span>
        <IconWhatsApp className="w-7 h-7 text-white" />
      </a>
    </div>
  );
}
