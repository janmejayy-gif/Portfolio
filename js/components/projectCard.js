// js/components/projectCard.js - Reusable Project Card Component

window.Components = window.Components || {};

window.Components.createProjectCard = function(project) {
  const techChips = project.technologies.map(tech => `
    <span class="px-2.5 py-1 rounded-lg bg-slate-100/90 text-slate-700 text-xs font-mono font-medium">
      ${tech}
    </span>
  `).join('');

  const demoButtonHtml = project.demoUrl 
    ? `<a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="text-xs font-semibold text-slate-900 hover:text-indigo-600 inline-flex items-center gap-1 transition-colors">
         <span>Live Demo</span>
         <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
       </a>`
    : `<span class="text-xs text-slate-400 font-mono inline-flex items-center gap-1 cursor-default" title="Deployment in progress">
         <span class="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
         <span>Demo Pending</span>
       </span>`;

  return `
    <div class="project-card glass-card rounded-3xl p-6 sm:p-8 bg-white/85 border border-slate-200/80 flex flex-col justify-between" data-category="${project.category}">
      <div>
        <!-- Card Header: Category & Status -->
        <div class="flex items-center justify-between mb-4">
          <span class="px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono font-semibold">
            ${project.categoryLabel || 'Full-Stack'}
          </span>
          <span class="text-[11px] font-mono px-2 py-0.5 rounded-md bg-emerald-50 border border-emerald-100 text-emerald-700 font-medium">
            ${project.status}
          </span>
        </div>

        <!-- Project Title -->
        <h3 class="text-xl sm:text-2xl font-bold text-slate-900 mb-2 tracking-tight">
          ${project.name}
        </h3>

        <!-- Summary -->
        <p class="text-slate-700 text-sm font-medium mb-4 leading-relaxed">
          ${project.summary}
        </p>

        <!-- Problem Statement Box -->
        <div class="p-3.5 rounded-xl bg-rose-50/50 border border-rose-100/70 mb-3 text-xs leading-relaxed text-slate-700">
          <span class="font-bold text-rose-800 uppercase tracking-wider block mb-1">Problem Statement:</span>
          ${project.problemStatement}
        </div>

        <!-- Solution Overview Box -->
        <div class="p-3.5 rounded-xl bg-indigo-50/50 border border-indigo-100/70 mb-6 text-xs leading-relaxed text-slate-700">
          <span class="font-bold text-indigo-800 uppercase tracking-wider block mb-1">Solution Overview:</span>
          ${project.solutionOverview}
        </div>

        <!-- Technologies Used -->
        <div class="mb-6">
          <span class="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">Technologies Used:</span>
          <div class="flex flex-wrap gap-1.5">
            ${techChips}
          </div>
        </div>
      </div>

      <!-- Card Action Footer -->
      <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-secondary px-3.5 py-2 rounded-xl text-xs font-medium inline-flex items-center gap-1.5 hover:text-slate-900 transition-colors">
          <i data-lucide="github" class="w-3.5 h-3.5"></i>
          <span>Repository</span>
        </a>
        <div>
          ${demoButtonHtml}
        </div>
      </div>
    </div>
  `;
};
