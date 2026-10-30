import React, { useEffect } from 'react';
import { IconX, IconCheck, IconArrowRight, IconExternalLink } from './Icons';

export default function ProjectModal({ project, onClose, onSelectProject }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      {/* Modal Card */}
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full border border-slate-200 shadow-2xl overflow-hidden relative transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header / Bar */}
        <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
              {project.categoryDisplay || project.category}
            </span>
            {project.isPlaceholder && (
              <span className="text-[11px] font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                Sample Showcase
              </span>
            )}
          </div>
          
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <IconX className="w-5 h-5" />
          </button>
        </div>

        {/* Project Visual Banner */}
        <div className={`p-8 bg-gradient-to-br ${project.accentColor} text-white flex flex-col justify-end min-h-[160px] relative overflow-hidden`}>
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <svg className="w-48 h-48" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
          </div>
          <div className="relative z-10 space-y-1">
            <h3 className="text-2xl font-bold tracking-tight text-white drop-shadow-sm">
              {project.title}
            </h3>
            <p className="text-blue-100 text-xs sm:text-sm max-w-lg">
              {project.description}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Detailed Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Project Overview
            </h4>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Key Deliverables / Features */}
          {project.features && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Key Deliverables & Capabilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    <IconCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Tags */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Technologies & Architecture
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-md">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Placeholder Replacement Note */}
          {project.isPlaceholder && (
            <div className="p-3 bg-amber-50/70 border border-amber-200/80 rounded-xl text-xs text-amber-800 space-y-1">
              <span className="font-bold">Note for Website Owner:</span>
              <p>This is a sample project template. To update or replace with your genuine client case studies, simply modify the `portfolioProjects` array inside <code className="bg-amber-100/70 px-1 py-0.5 rounded font-mono text-[11px]">src/data/portfolioData.js</code>.</p>
            </div>
          )}

          {/* Modal Actions */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors text-center"
            >
              Close Preview
            </button>

            <a
              href="#contact"
              onClick={() => {
                onClose();
                if (onSelectProject) onSelectProject(project.title);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg shadow-sm transition-all"
            >
              <span>Request a Website Like This</span>
              <IconArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
