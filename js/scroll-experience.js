/**
 * =======================================================================
 * FEATURED VIDEO SCROLL-ZOOM CINEMATIC EXPERIENCE
 * =======================================================================
 * Implements GPU-accelerated scroll-progress mapping for the featured video:
 * - position: sticky container
 * - Smooth lerp interpolation with requestAnimationFrame
 * - Maps progress (0.0 -> 1.0) to:
 *   * Scale (0.82 -> 1.25 / full viewport expansion)
 *   * Border radius (24px -> 0px)
 *   * Overlay typography transforms & opacity transitions
 *   * Glow / border fade
 * - Optimized for mousewheel, trackpad, and mobile touch.
 */

(function () {
  let isInitialized = false;

  function initFeaturedScroll() {
    const section = document.getElementById("featured-scroll-experience");
    const stage = document.getElementById("featured-sticky-stage");
    const videoCard = document.getElementById("featured-video-card");
    const videoMedia = document.getElementById("featured-media-wrapper");
    const headerOverlay = document.getElementById("featured-header-overlay");
    const footerOverlay = document.getElementById("featured-footer-overlay");
    const promptIndicator = document.getElementById("featured-scroll-prompt");
    const cinemaTrigger = document.getElementById("featured-play-btn");

    if (!section || !videoCard) return;

    let targetProgress = 0;
    let currentProgress = 0;
    let ticking = false;

    // Helper: Clamp
    const clamp = (val, min, max) => Math.min(Math.max(val, min), max);

    // Calculate current scroll progress through the section
    function calculateProgress() {
      const rect = section.getBoundingClientRect();
      const totalDistance = section.offsetHeight - window.innerHeight;
      if (totalDistance <= 0) return 0;
      const scrolled = -rect.top;
      return clamp(scrolled / totalDistance, 0, 1);
    }

    // Apply styles to elements based on progress (0 to 1)
    function applyProgress(p) {
      // Ease curve for cinematic deceleration
      // Quad ease-in-out for natural camera-like zoom
      const eased = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;

      // 1. Video Card Transformation
      // At p=0: scale ~0.84, width fits card. At p=1: scales up to fill viewport
      const isMobile = window.innerWidth <= 768;
      const startScale = isMobile ? 0.88 : 0.82;
      const endScale = isMobile ? 1.18 : 1.26;
      const scale = startScale + (endScale - startScale) * eased;

      // Border radius: 24px -> 0px
      const startRadius = isMobile ? 16 : 24;
      const borderRadius = Math.max(0, startRadius * (1 - eased * 1.2));

      // Border & Glow opacity
      const glowOpacity = Math.max(0, 1 - eased * 1.5);
      const borderWidth = Math.max(0, (1 - eased) * 1);

      // Apply to video card
      videoCard.style.transform = `scale3d(${scale.toFixed(4)}, ${scale.toFixed(4)}, 1)`;
      videoCard.style.borderRadius = `${borderRadius.toFixed(1)}px`;
      videoCard.style.boxShadow = `0 20px 80px rgba(0, 0, 0, ${0.7 + eased * 0.3}), 0 0 ${Math.round(40 * glowOpacity)}px rgba(255, 93, 34, ${(0.35 * glowOpacity).toFixed(2)})`;
      videoCard.style.borderColor = `rgba(255, 93, 34, ${(0.4 * (1 - eased)).toFixed(2)})`;

      if (videoMedia) {
        videoMedia.style.borderRadius = `${borderRadius.toFixed(1)}px`;
      }

      // 2. Header Overlay Animation (Title & Badge)
      // As user scrolls, the title rises slightly and remains sleekly positioned
      if (headerOverlay) {
        const titleTranslateY = -eased * 40;
        const titleOpacity = 1 - eased * 0.35; // Stays subtly visible as an editorial cinema watermark
        headerOverlay.style.transform = `translate3d(0, ${titleTranslateY.toFixed(1)}px, 0)`;
        headerOverlay.style.opacity = Math.max(0.4, titleOpacity).toFixed(2);
      }

      // 3. Footer Overlay (Roles & Action CTA)
      if (footerOverlay) {
        const footerTranslateY = eased * 30;
        footerOverlay.style.transform = `translate3d(0, ${footerTranslateY.toFixed(1)}px, 0)`;
      }

      // 4. Scroll prompt indicator fades quickly
      if (promptIndicator) {
        const promptOpacity = Math.max(0, 1 - eased * 3.5);
        promptIndicator.style.opacity = promptOpacity.toFixed(2);
        promptIndicator.style.transform = `translate3d(0, ${(eased * 20).toFixed(1)}px, 0)`;
        promptIndicator.style.pointerEvents = promptOpacity < 0.1 ? "none" : "auto";
      }

      // 5. Cinema Trigger Button transforms into a prominent pill at peak zoom
      if (cinemaTrigger) {
        if (eased > 0.4) {
          cinemaTrigger.classList.add("is-dominant");
        } else {
          cinemaTrigger.classList.remove("is-dominant");
        }
      }
    }

    // Animation Loop with lerp smoothing for buttery feel
    function updateLoop() {
      // Lerp factor
      const lerpFactor = 0.14;
      currentProgress += (targetProgress - currentProgress) * lerpFactor;

      // Only update when change is visible
      if (Math.abs(targetProgress - currentProgress) > 0.0005) {
        applyProgress(currentProgress);
        requestAnimationFrame(updateLoop);
        ticking = true;
      } else {
        currentProgress = targetProgress;
        applyProgress(currentProgress);
        ticking = false;
      }
    }

    // Scroll Handler
    function onScroll() {
      targetProgress = calculateProgress();
      if (!ticking) {
        requestAnimationFrame(updateLoop);
        ticking = true;
      }
    }

    // Attach listeners
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", () => {
      targetProgress = calculateProgress();
      currentProgress = targetProgress;
      applyProgress(currentProgress);
    }, { passive: true });

    // Initial check
    targetProgress = calculateProgress();
    currentProgress = targetProgress;
    applyProgress(currentProgress);
  }

  // Hook into DOMContentLoaded and load
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initFeaturedScroll);
  } else {
    initFeaturedScroll();
  }

  window.initFeaturedScroll = initFeaturedScroll;
})();
