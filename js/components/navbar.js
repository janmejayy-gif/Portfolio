// js/components/navbar.js - Reusable Navbar Component

window.Components = window.Components || {};

window.Components.renderNavbar = function(containerId, data) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const personal = data.personal;
  const links = data.navigation;

  const navLinksHtml = links.map(link => `
    <a href="${link.href}" class="nav-item hover:text-slate-900 transition-colors text-slate-600 font-medium">
      ${link.label}
    </a>
  `).join('');

  const mobileLinksHtml = links.map(link => `
    <a href="${link.href}" class="mobile-nav-link py-2 px-3 rounded-lg hover:bg-slate-50 text-slate-700 font-medium transition-colors">
      ${link.label}
    </a>
  `).join('');

  container.innerHTML = `
    <div class="max-w-6xl mx-auto px-4 sm:px-6 pt-4">
      <nav class="glass-card rounded-2xl px-5 py-3.5 flex items-center justify-between border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] bg-white/80 backdrop-blur-md">
        
        <!-- Logo / Name: JANMEJAY -->
        <a href="#hero" class="flex items-center gap-2.5 group">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-slate-900 to-slate-700 flex items-center justify-center text-white font-mono font-bold text-sm shadow-sm group-hover:scale-105 transition-transform">
            &lt;J/&gt;
          </div>
          <div>
            <span class="font-extrabold text-slate-900 text-sm tracking-wider uppercase block font-sans">${personal.brandName}</span>
            <span class="text-[10px] text-slate-500 font-mono tracking-tight block">Full-Stack • AI/ML</span>
          </div>
        </a>

        <!-- Desktop Navigation Links -->
        <div class="hidden md:flex items-center gap-7 text-sm">
          ${navLinksHtml}
        </div>

        <!-- Action CTAs -->
        <div class="hidden md:flex items-center gap-3">
          <a href="#contact" class="btn-primary text-xs font-semibold px-4 py-2.5 rounded-xl inline-flex items-center gap-1.5 shadow-sm">
            <span>Resume</span>
            <i data-lucide="file-text" class="w-3.5 h-3.5"></i>
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button id="mobileMenuBtn" aria-label="Toggle navigation menu" class="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none">
          <i data-lucide="menu" class="w-5 h-5"></i>
        </button>
      </nav>

      <!-- Mobile Navigation Drawer -->
      <div id="mobileMenu" class="hidden md:hidden mt-2 p-4 glass-card rounded-2xl border border-slate-200/80 bg-white/95 shadow-xl flex flex-col gap-2 text-sm">
        ${mobileLinksHtml}
        <div class="pt-2 border-t border-slate-100 mt-1">
          <a href="#contact" class="btn-primary text-xs text-center py-2.5 rounded-xl block font-semibold">
            View / Download Resume
          </a>
        </div>
      </div>
    </div>
  `;

  // Attach mobile menu toggle event
  const mobileBtn = container.querySelector('#mobileMenuBtn');
  const mobileMenu = container.querySelector('#mobileMenu');
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    mobileMenu.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // Refresh Lucide icons if available
  if (window.lucide) {
    window.lucide.createIcons();
  }
};
