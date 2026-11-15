// js/components/projectCard.js - Accessible & Responsive Project Card Component

window.Components = window.Components || {};

window.Components.createProjectCard = function(project) {
  const stack = project.techStack || project.technologies || [];
  const techChips = stack.map(tech => `
    <span class="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-mono font-medium border border-slate-200/60 break-words">
      ${tech}
    </span>
  `).join('');

  const demoButtonHtml = project.demoUrl 
    ? `<a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" 
          class="text-xs font-semibold text-slate-900 hover:text-indigo-600 inline-flex items-center gap-1.5 transition-colors focus-visible:ring-2 focus-visible:ring-slate-900 rounded-lg p-1"
          aria-label="Open live demo for ${project.name}">
         <span>Live Demo</span>
         <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
       </a>`
    : `<span class="text-xs text-slate-400 font-mono inline-flex items-center gap-1.5 cursor-default select-none" title="Live demo pending deployment">
         <span class="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
         <span>Demo Pending</span>
       </span>`;

  const githubButtonHtml = project.githubUrl
    ? `<a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" 
          class="btn-secondary px-3.5 py-2 rounded-xl text-xs font-medium inline-flex items-center gap-1.5 hover:text-slate-900 transition-colors focus-visible:ring-2 focus-visible:ring-slate-900"
          aria-label="View source code repository for ${project.name}">
         <i data-lucide="github" class="w-3.5 h-3.5"></i>
         <span>Repository</span>
       </a>`
    : `<span class="text-xs text-slate-400 font-mono">Private Repo</span>`;

  return `
    <article class="project-card glass-card rounded-3xl p-6 sm:p-8 bg-white/85 border border-slate-200/80 flex flex-col justify-between transition-all" data-category="${project.category}" aria-labelledby="project-title-${project.id}">
      <div>
        <!-- Card Header: Category Tag & Status -->
        <div class="flex items-center justify-between gap-2 mb-4 flex-wrap">
          <span class="px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono font-semibold">
            ${project.categoryLabel || 'Software Project'}
          </span>
          <span class="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-emerald-50 border border-emerald-100/90 text-emerald-700 font-medium flex items-center gap-1">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            ${project.status}
          </span>
        </div>

        <!-- Project Title -->
        <h3 id="project-title-${project.id}" class="text-xl sm:text-2xl font-bold text-slate-900 mb-2 tracking-tight break-words">
          ${project.name}
        </h3>

        <!-- Summary -->
        <p class="text-slate-600 text-sm mb-5 leading-relaxed break-words">
          ${project.summary}
        </p>

        <!-- Problem Statement -->
        <div class="p-4 rounded-2xl bg-rose-50/50 border border-rose-100/80 mb-3 text-xs leading-relaxed text-slate-700 break-words">
          <div class="flex items-center gap-1.5 font-bold text-rose-800 uppercase tracking-wider mb-1.5">
            <i data-lucide="alert-circle" class="w-3.5 h-3.5 text-rose-600 shrink-0"></i>
            <span>Problem Statement</span>
          </div>
          <p>${project.problemStatement}</p>
        </div>

        <!-- Solution Overview -->
        <div class="p-4 rounded-2xl bg-indigo-50/50 border border-indigo-100/80 mb-6 text-xs leading-relaxed text-slate-700 break-words">
          <div class="flex items-center gap-1.5 font-bold text-indigo-800 uppercase tracking-wider mb-1.5">
            <i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-indigo-600 shrink-0"></i>
            <span>Solution</span>
          </div>
          <p>${project.solution || project.solutionOverview}</p>
        </div>

        <!-- Technologies Used -->
        <div class="mb-6">
          <span class="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-2.5">Technologies Used:</span>
          <div class="flex flex-wrap gap-1.5">
            ${techChips}
          </div>
        </div>
      </div>

      <!-- Card Action Footer -->
      <div class="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
        ${githubButtonHtml}
        <div>
          ${demoButtonHtml}
        </div>
      </div>
    </article>
  `;
};
