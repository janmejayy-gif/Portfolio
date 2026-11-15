// js/components/socialLinks.js - Reusable Social Links Component

window.Components = window.Components || {};

window.Components.createSocialLinks = function(links) {
  return links.map(link => {
    if (link.action === 'copy') {
      return `
        <button onclick="window.copyText('${link.url.replace('mailto:', '')}', '${link.name}')" 
                class="p-2.5 rounded-xl border border-slate-200/90 bg-white/80 hover:bg-slate-50 hover:text-slate-900 transition-all text-slate-600 shadow-xs hover:shadow-sm" 
                title="${link.label}" aria-label="${link.label}">
          <i data-lucide="${link.icon}" class="w-4 h-4"></i>
        </button>
      `;
    }
    return `
      <a href="${link.url}" target="_blank" rel="noopener noreferrer" 
         class="p-2.5 rounded-xl border border-slate-200/90 bg-white/80 hover:bg-slate-50 hover:text-slate-900 transition-all text-slate-600 shadow-xs hover:shadow-sm" 
         title="${link.label}" aria-label="${link.label}">
        <i data-lucide="${link.icon}" class="w-4 h-4"></i>
      </a>
    `;
  }).join('');
};
