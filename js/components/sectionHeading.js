// js/components/sectionHeading.js - Reusable Section Heading Generator

window.Components = window.Components || {};

window.Components.createSectionHeading = function({ badgeText, badgeIcon = 'sparkles', title, subtitle, align = 'center' }) {
  const alignClass = align === 'left' ? 'text-left' : 'text-center mx-auto';
  
  return `
    <div class="max-w-2xl ${alignClass} mb-12 sm:mb-14">
      <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-indigo-50 border border-indigo-200/60 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3">
        <i data-lucide="${badgeIcon}" class="w-3.5 h-3.5 text-indigo-600"></i>
        <span>${badgeText}</span>
      </div>
      <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
        ${title}
      </h2>
      ${subtitle ? `<p class="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">${subtitle}</p>` : ''}
    </div>
  `;
};
