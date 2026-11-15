// js/main.js - Foundation Orchestrator for Janmejay's Portfolio

document.addEventListener('DOMContentLoaded', () => {
  const data = window.PORTFOLIO_DATA;
  if (!data) {
    console.error('Portfolio data not loaded.');
    return;
  }

  // 1. Mount Modular Navbar
  if (window.Components && window.Components.renderNavbar) {
    window.Components.renderNavbar('site-header', data);
  }

  // 2. Mount Modular Footer
  if (window.Components && window.Components.renderFooter) {
    window.Components.renderFooter('site-footer', data);
  }

  // 3. Mount Projects Grid
  const projectsGrid = document.getElementById('projects-grid');
  if (projectsGrid && window.Components && window.Components.createProjectCard) {
    projectsGrid.innerHTML = data.projects.map(proj => window.Components.createProjectCard(proj)).join('');
  }

  // 4. Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 5. Toast Notification System
  window.showToast = function(message, isSuccess = true) {
    let toast = document.getElementById('toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast';
      toast.className = 'fixed bottom-6 right-6 z-50 transform transition-all duration-300 ease-out translate-y-12 opacity-0 flex items-center gap-3 bg-slate-900 text-white px-5 py-3 rounded-xl shadow-xl text-sm font-medium';
      document.body.appendChild(toast);
    }
    const indicatorColor = isSuccess ? 'bg-emerald-400' : 'bg-rose-400';
    toast.innerHTML = `<span class="w-2 h-2 rounded-full ${indicatorColor}"></span> <span>${message}</span>`;
    toast.classList.remove('translate-y-12', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');

    setTimeout(() => {
      toast.classList.remove('translate-y-0', 'opacity-100');
      toast.classList.add('translate-y-12', 'opacity-0');
    }, 2800);
  };

  // 6. Copy Text to Clipboard Helper
  window.copyText = function(text, label = 'Information') {
    navigator.clipboard.writeText(text).then(() => {
      window.showToast(`${label} copied to clipboard!`);
    }).catch(() => {
      window.showToast('Copied to clipboard!');
    });
  };

  // 7. Project Filter Handler
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-slate-900', 'text-white', 'shadow-sm');
        b.classList.add('bg-white/80', 'text-slate-600');
      });
      btn.classList.add('bg-slate-900', 'text-white', 'shadow-sm');
      btn.classList.remove('bg-white/80', 'text-slate-600');

      const filter = btn.dataset.filter;

      document.querySelectorAll('.project-card').forEach(card => {
        const category = card.dataset.category || '';
        if (filter === 'all' || category === filter || category.includes(filter)) {
          card.style.display = 'flex';
          card.classList.add('animate-fadeIn');
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 8. Contact Form Client-side Validation
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('formName');
      const emailInput = document.getElementById('formEmail');
      const messageInput = document.getElementById('formMessage');

      const name = nameInput ? nameInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const message = messageInput ? messageInput.value.trim() : '';

      if (!name || !email || !message) {
        window.showToast('Please complete all required fields.', false);
        return;
      }

      // Email format check
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        window.showToast('Please enter a valid email address.', false);
        return;
      }

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span class="inline-block animate-spin mr-2">⟳</span> Sending...`;

      setTimeout(() => {
        window.showToast(`Thank you ${name}, your message has been sent successfully!`);
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        if (window.lucide) window.lucide.createIcons();
      }, 700);
    });
  }
});
