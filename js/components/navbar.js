// js/components/navbar.js - Accessible & Interactive Navbar Component

window.Components = window.Components || {};

window.Components.renderNavbar = function(containerId, data) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const personal = data.personal;
  const links = data.navigation;

  const navLinksHtml = links.map((link, idx) => `
    <a href="${link.href}" 
       class="nav-item ${idx === 0 ? 'active' : ''} text-slate-600 hover:text-slate-900 transition-colors font-medium text-xs sm:text-sm"
       data-section="${link.href.replace('#', '')}">
      ${link.label}
    </a>
  `).join('');

  const mobileLinksHtml = links.map(link => `
    <a href="${link.href}" 
       class="mobile-nav-link py-2.5 px-3 rounded-xl hover:bg-slate-50 text-slate-700 font-medium transition-colors flex items-center justify-between"
       data-section="${link.href.replace('#', '')}">
      <span>${link.label}</span>
      <i data-lucide="chevron-right" class="w-3.5 h-3.5 text-slate-400"></i>
    </a>
  `).join('');

  container.innerHTML = `
    <div class="max-w-6xl mx-auto px-4 sm:px-6 pt-4">
      <nav class="glass-card rounded-2xl px-5 py-3.5 flex items-center justify-between border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] bg-white/80 backdrop-blur-md" role="navigation" aria-label="Main Navigation">
        
        <!-- Logo / Brand: JANMEJAY -->
        <a href="#hero" class="flex items-center gap-2.5 group focus-visible:ring-2 focus-visible:ring-slate-900 rounded-xl" aria-label="${personal.name} Portfolio Home">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-slate-900 to-slate-700 flex items-center justify-center text-white font-mono font-bold text-sm shadow-sm group-hover:scale-105 transition-transform">
            &lt;J/&gt;
          </div>
          <div>
            <span class="font-extrabold text-slate-900 text-sm tracking-wider uppercase block font-sans">${personal.brandName}</span>
            <span class="text-[10px] text-slate-500 font-mono tracking-tight block">Full-Stack • AI/ML</span>
          </div>
        </a>

        <!-- Desktop Navigation Links with Active Spy -->
        <div class="hidden md:flex items-center gap-2 lg:gap-4" id="desktopNavLinks">
          ${navLinksHtml}
        </div>

        <!-- Action CTAs & Theme Toggle -->
        <div class="hidden md:flex items-center gap-2.5">
          <button type="button" 
                  class="theme-toggle-btn p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors border border-slate-200/80 focus-visible:ring-2 focus-visible:ring-slate-900" 
                  aria-label="Toggle Dark / Light Theme" 
                  title="Toggle Theme (or scroll to bottom & back up)">
            <i data-lucide="moon" class="w-4 h-4 theme-toggle-icon"></i>
          </button>
          <a href="#contact" class="btn-primary text-xs font-semibold px-4 py-2.5 rounded-xl inline-flex items-center gap-1.5 shadow-sm" aria-label="Connect and view resume details">
            <span>Resume</span>
            <i data-lucide="file-text" class="w-3.5 h-3.5"></i>
          </a>
        </div>

        <!-- Accessible Mobile Menu Button -->
        <button id="mobileMenuBtn" 
                type="button"
                aria-label="Toggle navigation menu" 
                aria-expanded="false" 
                aria-controls="mobileMenu"
                class="md:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none">
          <i data-lucide="menu" class="w-5 h-5" id="mobileMenuIcon"></i>
        </button>
      </nav>

      <!-- Accessible Mobile Navigation Drawer -->
      <div id="mobileMenu" 
           class="hidden md:hidden mt-2 p-4 glass-card rounded-2xl border border-slate-200/80 bg-white/95 shadow-xl flex flex-col gap-1 text-sm transition-all"
           role="menu" 
           aria-label="Mobile Navigation Menu">
        ${mobileLinksHtml}
        <div class="pt-3 border-t border-slate-100 mt-2 flex items-center gap-2">
          <a href="#contact" class="btn-primary text-xs text-center py-2.5 rounded-xl block font-semibold flex-1">
            View / Download Resume
          </a>
          <button type="button" 
                  class="theme-toggle-btn p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors border border-slate-200/80 focus-visible:ring-2 focus-visible:ring-slate-900 flex items-center justify-center shrink-0" 
                  aria-label="Toggle Dark / Light Theme"
                  title="Toggle Theme">
            <i data-lucide="moon" class="w-4 h-4 theme-toggle-icon"></i>
          </button>
        </div>
      </div>
    </div>
  `;

  // Mobile menu open/close handler
  const mobileBtn = container.querySelector('#mobileMenuBtn');
  const mobileMenu = container.querySelector('#mobileMenu');
  const mobileIcon = container.querySelector('#mobileMenuIcon');

  const toggleMobileMenu = (forceClose = false) => {
    if (!mobileMenu) return;
    const isCurrentlyOpen = !mobileMenu.classList.contains('hidden');
    const shouldOpen = forceClose ? false : !isCurrentlyOpen;

    if (shouldOpen) {
      mobileMenu.classList.remove('hidden');
      mobileBtn.setAttribute('aria-expanded', 'true');
    } else {
      mobileMenu.classList.add('hidden');
      mobileBtn.setAttribute('aria-expanded', 'false');
    }
  };

  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMobileMenu();
    });

    // Close when clicking any link
    mobileMenu.querySelectorAll('.mobile-nav-link, a').forEach(link => {
      link.addEventListener('click', () => {
        toggleMobileMenu(true);
      });
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileMenu.contains(e.target) && !mobileBtn.contains(e.target)) {
        toggleMobileMenu(true);
      }
    });

    // Close on Escape key press
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
        toggleMobileMenu(true);
        mobileBtn.focus();
      }
    });
  }

  // Refresh Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
};
