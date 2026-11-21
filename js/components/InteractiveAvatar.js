/**
 * InteractiveAvatar.js
 * 
 * Reusable, high-performance React component for Janmejay Tiwari's Portfolio.
 * Implements:
 * 1. Idle Animation: Gentle vertical floating & breathing motion.
 * 2. Mouse Tracking: 3D perspective tilt, parallax photo shift & specular light sheen.
 * 3. Scroll-Based Animation: Subtle scroll parallax response.
 * 4. Interactive Hover: Smooth lift and ambient glow ring expansion.
 * 
 * Written in React JavaScript (React 18 compatible, zero-build execution).
 */

(function () {
  'use strict';

  if (typeof React === 'undefined') {
    console.error('InteractiveAvatar: React is not loaded.');
    return;
  }

  const { useState, useEffect, useRef, useCallback } = React;

  function InteractiveAvatar({
    imageSrc = 'public/images/avatar.jpg',
    alt = 'Janmejay Tiwari - Full-Stack Developer & Data Science Enthusiast',
    badgeText = 'Full-Stack • AI/ML',
    size = 'default'
  }) {
    const cardRef = useRef(null);
    const photoRef = useRef(null);
    const sheenRef = useRef(null);
    const rafIdRef = useRef(null);

    // Target and current values for smooth linear interpolation (lerp)
    const motionRef = useRef({
      targetRotateX: 0,
      targetRotateY: 0,
      currentRotateX: 0,
      currentRotateY: 0,
      sheenX: 50,
      sheenY: 50,
      sheenOpacity: 0,
      scrollYOffset: 0,
      isHovered: false
    });

    const [supportsHover, setSupportsHover] = useState(true);
    const [reducedMotion, setReducedMotion] = useState(false);

    // Check media queries for touch and reduced motion
    useEffect(() => {
      const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      const hoverQuery = window.matchMedia('(hover: hover) and (pointer: fine)');

      setReducedMotion(motionQuery.matches);
      setSupportsHover(hoverQuery.matches);

      const handleMotionChange = (e) => setReducedMotion(e.matches);
      const handleHoverChange = (e) => setSupportsHover(e.matches);

      if (motionQuery.addEventListener) {
        motionQuery.addEventListener('change', handleMotionChange);
        hoverQuery.addEventListener('change', handleHoverChange);
      }

      return () => {
        if (motionQuery.removeEventListener) {
          motionQuery.removeEventListener('change', handleMotionChange);
          hoverQuery.removeEventListener('change', handleHoverChange);
        }
      };
    }, []);

    // 60FPS RAF Animation Engine for 3D Tilt & Parallax Interpolation
    useEffect(() => {
      if (reducedMotion) return;

      let isRunning = true;
      const lerp = (start, end, factor) => start + (end - start) * factor;

      const animateLoop = () => {
        if (!isRunning) return;

        const m = motionRef.current;
        // Smoothly interpolate current rotation toward target
        m.currentRotateX = lerp(m.currentRotateX, m.targetRotateX, 0.12);
        m.currentRotateY = lerp(m.currentRotateY, m.targetRotateY, 0.12);

        if (cardRef.current && photoRef.current) {
          const card = cardRef.current;
          const photo = photoRef.current;
          const sheen = sheenRef.current;

          // Combined 3D transform with scroll parallax
          const elevation = m.isHovered ? 1.03 : 1.0;
          const translateY = m.scrollYOffset;

          card.style.transform = `perspective(1000px) rotateX(${m.currentRotateX.toFixed(2)}deg) rotateY(${m.currentRotateY.toFixed(2)}deg) translateY(${translateY.toFixed(1)}px) scale3d(${elevation}, ${elevation}, 1)`;

          // Parallax interior photo shift
          const photoShiftX = (-m.currentRotateY * 0.45).toFixed(2);
          const photoShiftY = (m.currentRotateX * 0.45).toFixed(2);
          photo.style.transform = `scale(1.05) translate3d(${photoShiftX}px, ${photoShiftY}px, 0)`;

          // Specular light sheen gradient
          if (sheen) {
            sheen.style.background = `radial-gradient(circle at ${m.sheenX}% ${m.sheenY}%, rgba(255,255,255,${m.sheenOpacity}) 0%, rgba(255,255,255,0) 65%)`;
          }
        }

        rafIdRef.current = requestAnimationFrame(animateLoop);
      };

      rafIdRef.current = requestAnimationFrame(animateLoop);

      return () => {
        isRunning = false;
        if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      };
    }, [reducedMotion]);

    // Scroll-based parallax listener
    useEffect(() => {
      if (reducedMotion) return;

      let scrollRaf = null;
      const handleScroll = () => {
        if (scrollRaf) return;
        scrollRaf = requestAnimationFrame(() => {
          scrollRaf = null;
          if (!cardRef.current) return;
          const rect = cardRef.current.getBoundingClientRect();
          const viewportH = window.innerHeight || 800;
          // Calculate progress through viewport center (-1 to 1)
          const centerDelta = (rect.top + rect.height / 2 - viewportH / 2) / (viewportH / 2);
          // Subtle gentle shift (max 8px)
          motionRef.current.scrollYOffset = Math.max(-10, Math.min(10, centerDelta * -6));
        });
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();

      return () => {
        window.removeEventListener('scroll', handleScroll);
        if (scrollRaf) cancelAnimationFrame(scrollRaf);
      };
    }, [reducedMotion]);

    // Mouse Tracking Event Handlers
    const handleMouseMove = useCallback((e) => {
      if (!supportsHover || reducedMotion || !cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const normX = (x / rect.width) * 2 - 1; // -1 to +1
      const normY = (y / rect.height) * 2 - 1; // -1 to +1

      // 3D Tilt bounds: max 12 deg Y, max 10 deg X
      motionRef.current.targetRotateX = -normY * 11;
      motionRef.current.targetRotateY = normX * 13;

      // Sheen specular highlight position
      motionRef.current.sheenX = Math.round((x / rect.width) * 100);
      motionRef.current.sheenY = Math.round((y / rect.height) * 100);
      motionRef.current.sheenOpacity = 0.35;
      motionRef.current.isHovered = true;
    }, [supportsHover, reducedMotion]);

    const handleMouseEnter = useCallback(() => {
      if (!supportsHover || reducedMotion) return;
      motionRef.current.isHovered = true;
      motionRef.current.sheenOpacity = 0.35;
    }, [supportsHover, reducedMotion]);

    const handleMouseLeave = useCallback(() => {
      if (!supportsHover || reducedMotion) return;
      motionRef.current.targetRotateX = 0;
      motionRef.current.targetRotateY = 0;
      motionRef.current.sheenOpacity = 0;
      motionRef.current.isHovered = false;
    }, [supportsHover, reducedMotion]);

    // Render tree using React.createElement (React 18 standard)
    return React.createElement(
      'div',
      {
        className: 'avatar-interactive-wrapper relative flex flex-col items-center select-none py-2',
      },
      // Floating Idle Container
      React.createElement(
        'div',
        {
          className: reducedMotion ? 'avatar-motion-node' : 'avatar-motion-node avatar-idle-float',
          style: { willChange: 'transform' }
        },
        // 3D Card Shell
        React.createElement(
          'div',
          {
            ref: cardRef,
            onMouseMove: handleMouseMove,
            onMouseEnter: handleMouseEnter,
            onMouseLeave: handleMouseLeave,
            className: 'avatar-3d-card relative cursor-pointer transition-shadow duration-300',
            style: {
              width: '260px',
              height: '320px',
              transformStyle: 'preserve-3d',
              borderRadius: '28px',
            },
            role: 'img',
            'aria-label': alt,
            tabIndex: 0
          },
          // Ambient Outer Glow Ring
          React.createElement('div', {
            className: 'avatar-glow-ring absolute -inset-1.5 rounded-[32px] opacity-75 blur-md transition-opacity duration-300 pointer-events-none'
          }),
          // Card Surface with Glass & Gradient Border
          React.createElement(
            'div',
            {
              className: 'avatar-inner-surface relative w-full h-full rounded-[28px] overflow-hidden border border-slate-200/90 dark:border-slate-700/80 bg-white/95 dark:bg-slate-800/95 shadow-xl transition-colors duration-300',
              style: { transformStyle: 'preserve-3d' }
            },
            // The Original Photograph (crisp, natural proportions, object-cover)
            React.createElement('img', {
              ref: photoRef,
              src: imageSrc,
              alt: alt,
              className: 'avatar-photo absolute inset-0 w-full h-full object-cover object-top transition-transform duration-100 ease-out',
              loading: 'eager',
              draggable: false,
              onError: (e) => {
                // Fallback to assets/avatar.jpg if public/images isn't mapped
                if (e.target.src.indexOf('assets/avatar.jpg') === -1) {
                  e.target.src = 'assets/avatar.jpg';
                }
              }
            }),
            // Bottom vignette gradient for contrast & depth
            React.createElement('div', {
              className: 'avatar-vignette absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent pointer-events-none'
            }),
            // Specular Lighting Sheen Layer (Follows cursor)
            React.createElement('div', {
              ref: sheenRef,
              className: 'avatar-specular-sheen absolute inset-0 pointer-events-none mix-blend-overlay transition-opacity duration-200',
              style: { opacity: 0.9 }
            }),
            // Top Status / Pill Tag over photo
            React.createElement(
              'div',
              {
                className: 'absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none'
              },
              React.createElement(
                'span',
                {
                  className: 'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium font-mono bg-slate-900/60 backdrop-blur-md text-emerald-400 border border-white/10 shadow-sm'
                },
                React.createElement('span', {
                  className: 'w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block'
                }),
                badgeText
              )
            )
          )
        )
      )
    );
  }

  // Self-mount initialization function
  function mountInteractiveAvatar() {
    const rootElement = document.getElementById('interactive-avatar-root');
    if (!rootElement) return;

    if (typeof ReactDOM !== 'undefined' && ReactDOM.createRoot) {
      const root = ReactDOM.createRoot(rootElement);
      root.render(
        React.createElement(InteractiveAvatar, {
          imageSrc: 'public/images/avatar.jpg',
          alt: 'Janmejay Tiwari - Full-Stack Developer & Data Science Enthusiast',
          badgeText: 'Online • SDE Ready'
        })
      );
    } else if (typeof ReactDOM !== 'undefined' && ReactDOM.render) {
      ReactDOM.render(
        React.createElement(InteractiveAvatar, {
          imageSrc: 'public/images/avatar.jpg',
          alt: 'Janmejay Tiwari - Full-Stack Developer & Data Science Enthusiast',
          badgeText: 'Online • SDE Ready'
        }),
        rootElement
      );
    }
  }

  // Export to window
  window.InteractiveAvatar = InteractiveAvatar;
  window.mountInteractiveAvatar = mountInteractiveAvatar;

  // Auto-mount on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountInteractiveAvatar);
  } else {
    mountInteractiveAvatar();
  }
})();
