// js/components/footer.js - Reusable Footer Component

window.Components = window.Components || {};

window.Components.renderFooter = function(containerId, data) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const personal = data.personal;
  const currentYear = new Date().getFullYear();

  container.innerHTML = `
    <footer class="py-12 px-4 sm:px-6 border-t border-slate-200/80 bg-white/70 backdrop-blur-md">
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        <!-- Brand & Tagline -->
        <div class="flex items-center gap-3 text-center md:text-left">
          <div class="w-8 h-8 rounded-lg bg-slate-900 text-white font-mono font-bold text-xs flex items-center justify-center">
            &lt;J/&gt;
          </div>
          <div>
            <div class="font-bold text-slate-900 text-sm tracking-wide uppercase">${personal.brandName}</div>
            <div class="text-xs text-slate-500">${personal.positioning}</div>
          </div>
        </div>

        <!-- Center Note: Theme & Philosophy -->
        <div class="text-xs text-slate-500 text-center font-mono">
          <span>Subtle White Ambiance • Clean Code • Problem Solver</span>
        </div>

        <!-- Copyright -->
        <div class="text-xs text-slate-500 font-mono text-center md:text-right">
          © ${currentYear} ${personal.name}. All rights reserved.
        </div>

      </div>
    </footer>
  `;
};
