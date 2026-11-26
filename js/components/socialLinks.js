// js/components/socialLinks.js - Reusable Social Links Component

window.Components = window.Components || {};

const BRAND_ICONS_MAP = {
  github: `<svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`,
  linkedin: `<svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>`
};

window.Components.createSocialLinks = function(links) {
  return links.map(link => {
    const iconHtml = BRAND_ICONS_MAP[link.icon] || `<i data-lucide="${link.icon}" class="w-4 h-4"></i>`;
    if (link.action === 'copy') {
      return `
        <button onclick="window.copyText('${link.url.replace('mailto:', '')}', '${link.name}')" 
                class="p-2.5 rounded-xl border border-slate-200/90 bg-white/80 hover:bg-slate-50 hover:text-slate-900 transition-all text-slate-600 shadow-xs hover:shadow-sm" 
                title="${link.label}" aria-label="${link.label}">
          ${iconHtml}
        </button>
      `;
    }
    return `
      <a href="${link.url}" target="_blank" rel="noopener noreferrer" 
         class="p-2.5 rounded-xl border border-slate-200/90 bg-white/80 hover:bg-slate-50 hover:text-slate-900 transition-all text-slate-600 shadow-xs hover:shadow-sm" 
         title="${link.label}" aria-label="${link.label}">
        ${iconHtml}
      </a>
    `;
  }).join('');
};
