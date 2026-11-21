/**
 * InteractiveAvatar.js
 * 
 * Reusable React + GSAP component for Janmejay Tiwari's 3D Avatar.
 * Features:
 * - Frameless, full-body character presentation with dynamic ground shadow.
 * - Smooth idle breathing & floating animation via GSAP sine loop.
 * - Cursor-driven 3D tilt & parallax translation with GSAP power2 interpolation.
 * - Natural spring-back reset on mouse leave.
 * - ScrollTrigger-driven subtle parallax elevation responding to page scroll.
 * - Pose transition system supporting future transparent PNGs with crossfade.
 * - Clean GSAP lifecycle teardown via gsap.context() in useEffect.
 * - prefers-reduced-motion & touch/mobile safety guardrails.
 */

(function () {
  'use strict';

  if (typeof React === 'undefined') {
    console.error('InteractiveAvatar: React is not loaded.');
    return;
  }

  const { useState, useEffect, useRef, useCallback } = React;

  function InteractiveAvatar({
    asset = 'public/images/janmejay-avatar.png',
    fallbackAsset = 'assets/janmejay-avatar.png',
    alt = 'Janmejay Tiwari - Full-Stack Developer & AI/ML Enthusiast',
    poses = null, // Optional map: { default: '...', wave: '...', point: '...' }
    activePose = 'default'
  }) {
    const containerRef = useRef(null);
    const avatarRef = useRef(null);
    const shadowRef = useRef(null);
    const ctxRef = useRef(null);

    const [currentSrc, setCurrentSrc] = useState(
      poses && poses[activePose] ? poses[activePose] : asset
    );
    const [reducedMotion, setReducedMotion] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    // Track active pose changes for smooth transition
    useEffect(() => {
      if (poses && poses[activePose]) {
        if (typeof gsap !== 'undefined' && avatarRef.current && !reducedMotion) {
          gsap.to(avatarRef.current, {
            opacity: 0.2,
            duration: 0.15,
            onComplete: () => {
              setCurrentSrc(poses[activePose]);
              gsap.to(avatarRef.current, { opacity: 1, duration: 0.25 });
            }
          });
        } else {
          setCurrentSrc(poses[activePose]);
        }
      }
    }, [activePose, poses, reducedMotion]);

    // Check media queries
    useEffect(() => {
      const motionQ = window.matchMedia('(prefers-reduced-motion: reduce)');
      const touchQ = window.matchMedia('(hover: none) or (pointer: coarse)');

      setReducedMotion(motionQ.matches);
      setIsTouchDevice(touchQ.matches);

      const handleMotion = (e) => setReducedMotion(e.matches);
      const handleTouch = (e) => setIsTouchDevice(e.matches);

      if (motionQ.addEventListener) {
        motionQ.addEventListener('change', handleMotion);
        touchQ.addEventListener('change', handleTouch);
      }

      return () => {
        if (motionQ.removeEventListener) {
          motionQ.removeEventListener('change', handleMotion);
          touchQ.removeEventListener('change', handleTouch);
        }
      };
    }, []);

    // GSAP Animation Engine: Idle float, Ground shadow pulse, ScrollTrigger
    useEffect(() => {
      if (typeof gsap === 'undefined') {
        console.warn('InteractiveAvatar: GSAP is not loaded. Animations falling back to static presentation.');
        return;
      }

      if (typeof ScrollTrigger !== 'undefined' && gsap.registerPlugin) {
        gsap.registerPlugin(ScrollTrigger);
      }

      // Use gsap.context() for scoped animations and clean unmounting
      ctxRef.current = gsap.context(() => {
        if (reducedMotion) return;

        // 1. Idle Floating & Breathing Loop
        gsap.to(avatarRef.current, {
          y: -10,
          duration: 2.8,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true
        });

        // Synchronized soft ground shadow breathing
        if (shadowRef.current) {
          gsap.to(shadowRef.current, {
            scaleX: 0.85,
            scaleY: 0.9,
            opacity: 0.25,
            duration: 2.8,
            ease: 'sine.inOut',
            repeat: -1,
            yoyo: true
          });
        }

        // 2. ScrollTrigger Parallax
        if (typeof ScrollTrigger !== 'undefined' && containerRef.current) {
          ScrollTrigger.create({
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
            onUpdate: (self) => {
              // Subtle scroll parallax: max 14px displacement across scroll progress
              const progress = self.progress - 0.5; // -0.5 to 0.5
              if (avatarRef.current) {
                gsap.to(avatarRef.current, {
                  translateY: progress * -18,
                  overwrite: 'auto',
                  duration: 0.3
                });
              }
            }
          });
        }
      }, containerRef);

      return () => {
        if (ctxRef.current) {
          ctxRef.current.revert(); // Automatically kills timelines, tweens and ScrollTriggers
        }
      };
    }, [reducedMotion]);

    // Mouse Tracking: Parallax & 3D Tilt
    const handleMouseMove = useCallback((e) => {
      if (reducedMotion || isTouchDevice || typeof gsap === 'undefined') return;
      if (!containerRef.current || !avatarRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;

      // Normalized coordinates (-1 to 1)
      const normX = (clientX / rect.width) * 2 - 1;
      const normY = (clientY / rect.height) * 2 - 1;

      // Subtle, natural tilt parameters
      const tiltY = normX * 12;      // Horizontal rotation (deg)
      const tiltX = -normY * 8;      // Vertical rotation (deg)
      const parallaxX = normX * 10;  // Lateral shift (px)
      const parallaxY = normY * 6;   // Vertical shift (px)

      gsap.to(avatarRef.current, {
        rotationY: tiltY,
        rotationX: tiltX,
        x: parallaxX,
        y: parallaxY,
        transformPerspective: 800,
        transformOrigin: '50% 90%',
        duration: 0.45,
        ease: 'power2.out',
        overwrite: 'auto'
      });

      if (shadowRef.current) {
        gsap.to(shadowRef.current, {
          x: parallaxX * 0.7,
          duration: 0.45,
          ease: 'power2.out',
          overwrite: 'auto'
        });
      }
    }, [reducedMotion, isTouchDevice]);

    // Smooth Reset on Mouse Leave
    const handleMouseLeave = useCallback(() => {
      if (reducedMotion || isTouchDevice || typeof gsap === 'undefined') return;
      if (!avatarRef.current) return;

      gsap.to(avatarRef.current, {
        rotationY: 0,
        rotationX: 0,
        x: 0,
        y: 0,
        duration: 0.85,
        ease: 'power3.out',
        overwrite: 'auto'
      });

      if (shadowRef.current) {
        gsap.to(shadowRef.current, {
          x: 0,
          duration: 0.85,
          ease: 'power3.out',
          overwrite: 'auto'
        });
      }
    }, [reducedMotion, isTouchDevice]);

    return React.createElement(
      'div',
      {
        ref: containerRef,
        onMouseMove: handleMouseMove,
        onMouseLeave: handleMouseLeave,
        className: 'avatar-character-stage relative w-full flex flex-col items-center justify-end select-none py-2',
        style: {
          minHeight: '340px',
          perspective: '1000px',
        },
        role: 'img',
        'aria-label': alt
      },
      // Ambient backlight glow (theme-integrated soft halo)
      React.createElement('div', {
        className: 'avatar-halo absolute pointer-events-none rounded-full blur-2xl opacity-40 dark:opacity-30',
        style: {
          width: '240px',
          height: '240px',
          top: '15%',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.45) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 75%)'
        }
      }),
      // The Full-Body Transparent Character
      React.createElement('img', {
        ref: avatarRef,
        src: currentSrc,
        alt: alt,
        className: 'avatar-character-img relative z-10 w-auto max-w-[260px] sm:max-w-[280px] h-[310px] sm:h-[350px] object-contain object-bottom pointer-events-auto cursor-pointer transition-opacity duration-300',
        draggable: false,
        loading: 'eager',
        onError: (e) => {
          if (fallbackAsset && e.target.src.indexOf(fallbackAsset) === -1) {
            e.target.src = fallbackAsset;
          }
        }
      }),
      // Ground Shadow Ellipse
      React.createElement('div', {
        ref: shadowRef,
        className: 'avatar-ground-shadow relative z-0 rounded-[100%] pointer-events-none mt-[-8px]',
        style: {
          width: '180px',
          height: '18px',
          background: 'radial-gradient(ellipse at center, rgba(15, 23, 42, 0.38) 0%, rgba(15, 23, 42, 0.12) 50%, transparent 75%)'
        }
      })
    );
  }

  // Self-mount initialization function
  function mountInteractiveAvatar() {
    const rootElement = document.getElementById('interactive-avatar-root');
    if (!rootElement) return;

    const props = {
      asset: 'public/images/janmejay-avatar.png',
      fallbackAsset: 'assets/janmejay-avatar.png',
      alt: 'Janmejay Tiwari - Full-Stack Developer & AI/ML Enthusiast',
      poses: {
        default: 'public/images/janmejay-avatar.png'
      },
      activePose: 'default'
    };

    if (typeof ReactDOM !== 'undefined' && ReactDOM.createRoot) {
      const root = ReactDOM.createRoot(rootElement);
      root.render(React.createElement(InteractiveAvatar, props));
    } else if (typeof ReactDOM !== 'undefined' && ReactDOM.render) {
      ReactDOM.render(React.createElement(InteractiveAvatar, props), rootElement);
    }
  }

  // Export to window
  window.InteractiveAvatar = InteractiveAvatar;
  window.mountInteractiveAvatar = mountInteractiveAvatar;

  // Mount on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountInteractiveAvatar);
  } else {
    mountInteractiveAvatar();
  }
})();
