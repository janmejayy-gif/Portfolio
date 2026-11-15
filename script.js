// script.js - Portfolio Interaction and Animations

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 1. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking any link
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // 2. Interactive Code Tabs (Java DSA vs MERN Backend)
  const codeTabs = document.querySelectorAll('.code-tab-btn');
  const codePanels = document.querySelectorAll('.code-panel');

  codeTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.dataset.target;

      codeTabs.forEach(t => {
        t.classList.remove('active', 'border-b-2', 'border-indigo-600', 'text-slate-900', 'bg-white');
        t.classList.add('text-slate-500');
      });
      tab.classList.add('active', 'border-b-2', 'border-indigo-600', 'text-slate-900', 'bg-white');
      tab.classList.remove('text-slate-500');

      codePanels.forEach(panel => {
        if (panel.id === targetId) {
          panel.classList.remove('hidden');
        } else {
          panel.classList.add('hidden');
        }
      });
    });
  });

  // 3. Project Filter Tabs
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

      projectCards.forEach(card => {
        const category = card.dataset.category;
        if (filter === 'all' || category.includes(filter)) {
          card.style.display = 'flex';
          card.classList.add('animate-fadeIn');
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 4. Animated Stats Counter (Counter-Up on Scroll)
  const statElements = document.querySelectorAll('.counter-val');
  let counted = false;

  const animateCounters = () => {
    statElements.forEach(el => {
      const target = +el.getAttribute('data-target');
      const suffix = el.getAttribute('data-suffix') || '';
      let count = 0;
      const speed = target / 40;

      const updateCount = () => {
        count += speed;
        if (count < target) {
          el.innerText = Math.ceil(count) + suffix;
          requestAnimationFrame(updateCount);
        } else {
          el.innerText = target + suffix;
        }
      };
      updateCount();
    });
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !counted) {
        counted = true;
        animateCounters();
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.getElementById('dsa-stats');
  if (statsSection) {
    observer.observe(statsSection);
  }

  // 5. Toast Notification System
  const showToast = (message, icon = 'check') => {
    let toast = document.getElementById('toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast';
      toast.className = 'fixed bottom-6 right-6 z-50 transform transition-all duration-300 ease-out translate-y-12 opacity-0 flex items-center gap-3 bg-slate-900 text-white px-5 py-3 rounded-xl shadow-xl text-sm font-medium';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<span class="w-2 h-2 rounded-full bg-emerald-400"></span> <span>${message}</span>`;
    toast.classList.remove('translate-y-12', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');

    setTimeout(() => {
      toast.classList.remove('translate-y-0', 'opacity-100');
      toast.classList.add('translate-y-12', 'opacity-0');
    }, 2800);
  };

  // 6. Copy to Clipboard Utility
  window.copyText = (text, label = 'Item') => {
    navigator.clipboard.writeText(text).then(() => {
      showToast(`${label} copied to clipboard!`);
    }).catch(() => {
      showToast('Copied!');
    });
  };

  // 7. Interactive DSA Complexity Checker Tool
  const dsaSelector = document.getElementById('dsaTopicSelector');
  const dsaComplexityDisplay = document.getElementById('dsaComplexityDisplay');

  const dsaData = {
    'binary-search': {
      time: 'O(log N)',
      space: 'O(1)',
      desc: 'Halves the search space each step. Essential for sorted arrays and search-on-answer problems.'
    },
    'quicksort': {
      time: 'O(N log N) avg / O(N²) worst',
      space: 'O(log N)',
      desc: 'Partitioning array around pivot. In-place, cache-friendly divide and conquer.'
    },
    'dijkstra': {
      time: 'O((V + E) log V)',
      space: 'O(V)',
      desc: 'Greedy shortest path in non-negative weighted graphs using Min-Heap / PriorityQueue in Java.'
    },
    'dp-knapsack': {
      time: 'O(N × W)',
      space: 'O(W)',
      desc: '0/1 Knapsack optimized to 1D array space state transitions.'
    },
    'lru-cache': {
      time: 'Get & Put: O(1)',
      space: 'O(Capacity)',
      desc: 'HashMap + Custom Doubly LinkedList for instant lookup and fast eviction.'
    }
  };

  if (dsaSelector && dsaComplexityDisplay) {
    dsaSelector.addEventListener('change', (e) => {
      const selected = dsaData[e.target.value];
      if (selected) {
        dsaComplexityDisplay.innerHTML = `
          <div class="grid grid-cols-2 gap-3 mb-2">
            <div class="p-2.5 rounded-lg bg-emerald-50 border border-emerald-100/80">
              <span class="text-xs text-emerald-700 font-semibold uppercase tracking-wider block">Time Complexity</span>
              <span class="text-sm font-mono font-bold text-emerald-900">${selected.time}</span>
            </div>
            <div class="p-2.5 rounded-lg bg-indigo-50 border border-indigo-100/80">
              <span class="text-xs text-indigo-700 font-semibold uppercase tracking-wider block">Space Complexity</span>
              <span class="text-sm font-mono font-bold text-indigo-900">${selected.space}</span>
            </div>
          </div>
          <p class="text-xs text-slate-600 leading-relaxed">${selected.desc}</p>
        `;
      }
    });
  }

  // 8. Contact Form Handling
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('formName').value;
      const btn = contactForm.querySelector('button[type="submit"]');
      const originalText = btn.innerHTML;
      
      btn.disabled = true;
      btn.innerHTML = `<span class="inline-block animate-spin mr-2">⟳</span> Sending...`;

      setTimeout(() => {
        showToast(`Thank you ${name || 'friend'}, message received!`);
        contactForm.reset();
        btn.disabled = false;
        btn.innerHTML = originalText;
      }, 900);
    });
  }
});
