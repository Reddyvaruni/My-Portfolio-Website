import React, { useState } from 'react';
import { portfolioProjects, portfolioCategories } from '../data/portfolioData';
import { IconArrowRight, IconExternalLink } from './Icons';
import ProjectModal from './ProjectModal';

export default function Portfolio({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  // Filter projects according to category
  const filteredProjects = activeCategory === "All"
    ? portfolioProjects
    : portfolioProjects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-slate-50/50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold tracking-wider uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Portfolio & Case Studies
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Recent Work
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Some examples of websites and applications I've designed and developed.
          </p>
        </div>

        {/* Category Filters Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {portfolioCategories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-150 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-subtle hover:shadow-card-hover transition-all duration-200 overflow-hidden flex flex-col group"
            >
              {/* Project Mockup Card Header / Graphic Banner */}
              <div className={`h-48 bg-gradient-to-br ${project.accentColor} p-5 relative overflow-hidden flex flex-col justify-between`}>
                
                {/* Simulated browser header bar inside mockup */}
                <div className="bg-black/20 backdrop-blur-md rounded-lg px-3 py-1.5 flex items-center justify-between text-white/80 text-[11px] font-mono">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-white/60"></span>
                    <span className="w-2 h-2 rounded-full bg-white/40"></span>
                    <span className="w-2 h-2 rounded-full bg-white/40"></span>
                  </div>
                  <span className="truncate max-w-[150px]">{project.title.toLowerCase().replace(/\s+/g, '')}.com</span>
                </div>

                {/* Simulated UI layout mockup inside the card */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 text-white space-y-1.5 shadow-sm transform group-hover:-translate-y-1 transition-transform duration-200">
                  <div className="w-20 h-2 bg-white/80 rounded"></div>
                  <div className="w-32 h-1.5 bg-white/40 rounded"></div>
                  <div className="grid grid-cols-3 gap-1 pt-1">
                    <div className="h-6 bg-white/20 rounded"></div>
                    <div className="h-6 bg-white/20 rounded"></div>
                    <div className="h-6 bg-white/20 rounded"></div>
                  </div>
                </div>

                {/* Placeholder Indicator Badge */}
                {project.isPlaceholder && (
                  <div className="absolute top-2.5 right-2.5">
                    <span className="inline-block bg-slate-900/80 text-white text-[10px] font-medium px-2 py-0.5 rounded-full backdrop-blur-xs">
                      Sample Project
                    </span>
                  </div>
                )}
              </div>

              {/* Project Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-100">
                      {project.categoryDisplay || project.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action button */}
                <div className="pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 bg-slate-50 hover:bg-blue-50 hover:text-blue-600 rounded-xl border border-slate-200/80 hover:border-blue-200 transition-colors"
                  >
                    <span>View Project</span>
                    <IconExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Note on how to replace placeholders */}
        <div className="mt-12 p-4 rounded-xl bg-blue-50/70 border border-blue-100 text-center max-w-2xl mx-auto text-xs text-blue-800">
          <span className="font-semibold">Notice:</span> All 6 projects above are customizable placeholders. You can replace the project titles, images, descriptions, and links anytime in <code className="bg-blue-100 px-1.5 py-0.5 rounded font-mono text-[11px]">src/data/portfolioData.js</code>.
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onSelectProject={onSelectProject}
        />
      )}
    </section>
  );
}
