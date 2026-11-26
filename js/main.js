// js/main.js - Phase 3: Interactions, Animations & Accessibility Orchestration

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

  // 4. Initialize Lucide Icons & Brand Icons Polyfill
  window.renderBrandIcons = function() {
    const brandIcons = {
      github: `<svg class="w-4 h-4 inline-block shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`,
      linkedin: `<svg class="w-4 h-4 inline-block shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>`
    };
    document.querySelectorAll('[data-lucide="github"]').forEach(el => {
      el.outerHTML = brandIcons.github;
    });
    document.querySelectorAll('[data-lucide="linkedin"]').forEach(el => {
      el.outerHTML = brandIcons.linkedin;
    });
  };

  if (window.lucide) {
    window.lucide.createIcons();
  }
  window.renderBrandIcons();

  // 5. Toast Notification System
  window.showToast = function(message, isSuccess = true, duration = 3200) {
    let toast = document.getElementById('toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast';
      toast.className = 'fixed bottom-6 right-6 z-50 transform transition-all duration-300 ease-out translate-y-12 opacity-0 flex items-center gap-3 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-2xl text-sm font-medium border border-slate-700/60 max-w-md';
      document.body.appendChild(toast);
    }
    const indicatorColor = isSuccess ? 'bg-emerald-400' : 'bg-rose-400';
    toast.innerHTML = `
      <span class="w-2 h-2 rounded-full ${indicatorColor} shrink-0"></span>
      <span class="leading-snug">${message}</span>
    `;
    toast.classList.remove('translate-y-12', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');

    setTimeout(() => {
      toast.classList.remove('translate-y-0', 'opacity-100');
      toast.classList.add('translate-y-12', 'opacity-0');
    }, duration);
  };

  // 6. Copy Text Helper with User Feedback
  window.copyText = function(text, label = 'Information') {
    navigator.clipboard.writeText(text).then(() => {
      window.showToast(`${label} copied to clipboard!`, true);
    }).catch(() => {
      window.showToast('Copied to clipboard!', true);
    });
  };

  // 7. Active Section Spy (Navbar Active State)
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-item');

  const updateActiveNavLink = () => {
    let currentSectionId = '';
    const scrollPosition = window.scrollY + 140;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        currentSectionId = section.getAttribute('id');
      }
    });

    if (currentSectionId) {
      navLinks.forEach(link => {
        if (link.getAttribute('data-section') === currentSectionId) {
          link.classList.add('active');
          link.setAttribute('aria-current', 'page');
        } else {
          link.classList.remove('active');
          link.removeAttribute('aria-current');
        }
      });
    }
  };

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });
  updateActiveNavLink();

  // 8. Scroll Reveal Animations (IntersectionObserver)
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback for older browsers
    revealElements.forEach(el => el.classList.add('is-visible'));
  }

  // 9. Project Category Filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-slate-900', 'text-white', 'shadow-sm');
        b.classList.add('bg-white/80', 'text-slate-600');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('bg-slate-900', 'text-white', 'shadow-sm');
      btn.classList.remove('bg-white/80', 'text-slate-600');
      btn.setAttribute('aria-pressed', 'true');

      const filter = btn.dataset.filter;
      const cards = document.querySelectorAll('.project-card');

      cards.forEach(card => {
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

  // 10. Contact Form: Input Validation & Transparent Email Dispatch
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    const nameInput = document.getElementById('formName');
    const emailInput = document.getElementById('formEmail');
    const messageInput = document.getElementById('formMessage');

    const clearError = (input) => {
      input.classList.remove('input-error');
      const errEl = document.getElementById(`${input.id}-error`);
      if (errEl) errEl.remove();
    };

    const setError = (input, message) => {
      clearError(input);
      input.classList.add('input-error');
      const errEl = document.createElement('div');
      errEl.id = `${input.id}-error`;
      errEl.className = 'field-error-text';
      errEl.setAttribute('role', 'alert');
      errEl.innerHTML = `<i data-lucide="alert-circle" class="w-3.5 h-3.5 shrink-0 inline-block"></i> <span>${message}</span>`;
      input.parentNode.appendChild(errEl);
      if (window.lucide) window.lucide.createIcons();
    };

    // Live validation cleanup on input
    [nameInput, emailInput, messageInput].forEach(field => {
      if (field) {
        field.addEventListener('input', () => clearError(field));
      }
    });

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // 1. Name Check
      const nameVal = nameInput ? nameInput.value.trim() : '';
      if (!nameVal) {
        setError(nameInput, 'Please enter your name.');
        isValid = false;
      } else if (nameVal.length < 2) {
        setError(nameInput, 'Name must be at least 2 characters.');
        isValid = false;
      }

      // 2. Email Check
      const emailVal = emailInput ? emailInput.value.trim() : '';
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailVal) {
        setError(emailInput, 'Please enter your email address.');
        isValid = false;
      } else if (!emailRegex.test(emailVal)) {
        setError(emailInput, 'Please provide a valid email (e.g. name@domain.com).');
        isValid = false;
      }

      // 3. Message Check
      const messageVal = messageInput ? messageInput.value.trim() : '';
      if (!messageVal) {
        setError(messageInput, 'Please provide a message or inquiry.');
        isValid = false;
      } else if (messageVal.length < 10) {
        setError(messageInput, 'Message should be at least 10 characters.');
        isValid = false;
      }

      if (!isValid) {
        window.showToast('Please correct highlighted errors in the form.', false);
        return;
      }

      // Honest Handling: We do not claim a server received it.
      // We offer pre-filled email draft and direct copy.
      const subject = encodeURIComponent(`Portfolio Inquiry from ${nameVal}`);
      const body = encodeURIComponent(`Hello Janmejay,\n\nName: ${nameVal}\nEmail: ${emailVal}\n\nMessage:\n${messageVal}\n\nSent via Portfolio Website`);
      const mailtoUrl = `mailto:janam3152@gmail.com?subject=${subject}&body=${body}`;

      // Open email client with prefilled body
      window.location.href = mailtoUrl;

      // Display transparent confirmation
      window.showToast(`Draft created! Opening your email client to send to janam3152@gmail.com.`, true, 5000);

      // Offer fallback copy
      contactForm.reset();
    });
  }

  // 11. Interactive Undulating Education Timeline (GfG x OpenAI Curved Roadmap Style)
  const timelineNodes = document.querySelectorAll('.timeline-node');
  const timelineCards = document.querySelectorAll('.timeline-card');
  const wavePath = document.getElementById('wavePathActive');

  function setEducationStep(stepIndex) {
    timelineNodes.forEach(node => {
      const nodeStep = parseInt(node.getAttribute('data-step'), 10);
      if (nodeStep === stepIndex) {
        node.classList.add('active');
        node.setAttribute('aria-current', 'step');
      } else {
        node.classList.remove('active');
        node.removeAttribute('aria-current');
      }
    });

    timelineCards.forEach(card => {
      const cardStep = parseInt(card.getAttribute('data-step'), 10);
      if (cardStep === stepIndex) {
        card.classList.add('active');
      } else {
        card.classList.remove('active');
      }
    });

    if (wavePath) {
      // Stroke dashoffset: 1000 = empty, 0 = fully highlighted
      // Step 0: ~350, Step 1: ~700, Step 2: 1000
      if (stepIndex === 0) {
        wavePath.style.strokeDashoffset = '650';
      } else if (stepIndex === 1) {
        wavePath.style.strokeDashoffset = '300';
      } else {
        wavePath.style.strokeDashoffset = '0';
      }
    }
  }

  timelineNodes.forEach(node => {
    node.addEventListener('click', () => {
      const step = parseInt(node.getAttribute('data-step'), 10);
      setEducationStep(step);
    });
  });

  timelineCards.forEach(card => {
    card.addEventListener('click', () => {
      const step = parseInt(card.getAttribute('data-step'), 10);
      setEducationStep(step);
    });
  });

  // Default active step on load: Step 2 (B.Tech)
  setEducationStep(2);

  // 12. Bottom Scroll-Up Easter Egg: Dark Mode & Glowing Matrix Grid
  // "jab user page scroll krke pura neeche jaaye aur wapas jab neeche se upar scroll kare toh page dark mode pe jaye and peeche ki grid lines glow kare"
  let hasReachedBottom = false;
  let lastScrollY = window.pageYOffset || document.documentElement.scrollTop;
  let scrollUpDistance = 0;

  window.setTheme = function(isDark, showToastNotification = true) {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('portfolio_theme', 'dark');
      document.querySelectorAll('.theme-toggle-icon').forEach(icon => {
        icon.setAttribute('data-lucide', 'sun');
      });
      if (showToastNotification) {
        window.showToast('🌙 Dark Mode Activated • Glowing Matrix Grid Online', true, 4000);
      }
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('portfolio_theme', 'light');
      document.querySelectorAll('.theme-toggle-icon').forEach(icon => {
        icon.setAttribute('data-lucide', 'moon');
      });
      if (showToastNotification) {
        window.showToast('☀️ Light Mode Restored', true, 3000);
      }
    }
    if (window.lucide) {
      window.lucide.createIcons();
    }
  };

  // Restore saved theme on load (if previously toggled)
  let isManualOverride = sessionStorage.getItem('portfolio_manual_theme_override') === 'true';
  const savedTheme = localStorage.getItem('portfolio_theme');
  if (savedTheme === 'dark') {
    window.setTheme(true, false);
  }

  // Handle manual clicks on theme toggle button (Navbar desktop & mobile)
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.theme-toggle-btn');
    if (btn) {
      // User explicitly switched theme manually: lock out automatic scroll triggers
      isManualOverride = true;
      sessionStorage.setItem('portfolio_manual_theme_override', 'true');
      const isDark = document.documentElement.classList.contains('dark');
      window.setTheme(!isDark, true);
    }
  });

  // Scroll listener for bottom-to-up gesture (only active when not manually overridden)
  window.addEventListener('scroll', () => {
    if (isManualOverride) return;

    const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    // Check if user has reached bottom (within 80px)
    const isAtBottom = (currentScrollY + windowHeight) >= (docHeight - 80);

    if (isAtBottom) {
      hasReachedBottom = true;
      scrollUpDistance = 0;
    }

    // If user has reached the bottom and is now scrolling back UP
    if (hasReachedBottom && currentScrollY < lastScrollY) {
      scrollUpDistance += (lastScrollY - currentScrollY);

      // Once scrolled up noticeably (~35px) from the bottom
      if (scrollUpDistance >= 35) {
        const isCurrentlyDark = document.documentElement.classList.contains('dark');
        if (!isCurrentlyDark) {
          window.setTheme(true, true);
        } else {
          window.setTheme(false, true);
        }
        hasReachedBottom = false;
        scrollUpDistance = 0;
      }
    } else if (!isAtBottom && currentScrollY > lastScrollY && scrollUpDistance > 0) {
      scrollUpDistance = 0;
    }

    lastScrollY = currentScrollY <= 0 ? 0 : currentScrollY;
  }, { passive: true });

  // 13. Contact Section Heartbeat Ray Attention Pulse
  const contactSection = document.getElementById('contact');
  const ecgRay = document.querySelector('.contact-ecg-ray');
  if (contactSection && ecgRay && window.IntersectionObserver) {
    const contactPulseObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Immediately restart and accelerate heartbeat pulse wave when user reaches contact section
          ecgRay.style.animation = 'none';
          void ecgRay.offsetWidth; // force browser layout reflow
          ecgRay.style.animation = 'ecgRaySweep 3s cubic-bezier(0.25, 0.1, 0.25, 1) infinite';
        }
      });
    }, { threshold: 0.15 });
    contactPulseObserver.observe(contactSection);
  }

  // 14. Accessible Lightbox Modal System for Hackathon Photos & Certificate
  window.openImageModal = function(src, caption) {
    const modal = document.getElementById('imageModal');
    const img = document.getElementById('modalImage');
    const cap = document.getElementById('modalCaption');
    if (!modal || !img) return;

    img.src = src;
    img.alt = caption || 'Photo Preview';
    if (cap) cap.textContent = caption || '';

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    if (window.lucide) window.lucide.createIcons();
  };

  window.closeImageModal = function(e) {
    // If clicked on image itself, do not close
    if (e && e.target && e.target.id === 'modalImage') return;
    const modal = document.getElementById('imageModal');
    if (!modal) return;

    modal.classList.add('hidden');
    document.body.style.overflow = '';
  };

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      window.closeImageModal();
    }
  });
});
