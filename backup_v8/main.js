/**
 * =======================================================================
 * HARINDER'S PORTFOLIO - MAIN INTERACTION & MOTION LOGIC
 * =======================================================================
 * 1. Minimal Navigation Scroll State (Transparent -> Frosted Glass on scroll)
 * 2. Rapid Edge-to-Edge Scroll Expansion for Featured Video
 * 3. 3D Floating Character Depth & Soft Mouse Parallax
 * 4. Hero Character Eye / Pupil Tracking (Desktop Mouse Only, Alpha Feathered)
 * 5. About Section Scroll Photo Animation (Scale, Translate)
 * 6. Continuous Autoplay Moving Reels & Vertical Cinema Modal (All Local MP4s)
 * 7. Full Video Modal Triggers (Featured, Recent Projects, 9:16 Reels)
 * 8. Interactive Email Copy Pill & Toast Notification
 * 9. Intersection Observer for Scroll Reveals
 * 10. Mobile Navigation Drawer
 * =======================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  initNavbarScrollState();
  initFeaturedScrollZoom();
  initCharacter3DParallax();
  initHeroEyeTracking();
  initAboutScrollPhotoAnimation();
  initRevealObserver();
  initRecentProjectsTriggers();
  initReelsPlaybackAndModal();
  initMobileNavigation();
  initEmailCopyToast();
  initSmoothScroll();
});

/**
 * 1. Navigation Scroll State
 * Transparent at the top; becomes subtle translucent cream glass past 40px of scroll
 */
function initNavbarScrollState() {
  const nav = document.getElementById("siteNav");
  if (!nav) return;

  function onScroll() {
    if (window.scrollY > 40) {
      nav.classList.add("is-scrolled");
    } else {
      nav.classList.remove("is-scrolled");
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/**
 * 2. Rapid Scroll Expansion for Featured Video
 * As soon as the visitor reaches the featured section, the video is already visible
 * as a large, full-width cinematic surface (100vw, 96vh).
 * Completes early within ~0.5–1 viewport without requiring long pinned scroll.
 */
function initFeaturedScrollZoom() {
  const card = document.getElementById("featuredCard");
  const section = document.getElementById("work");
  if (!card || !section) return;

  let ticking = false;

  function updateFeatured() {
    const rect = section.getBoundingClientRect();
    const windowH = window.innerHeight;

    // Progression: starts expanding when top of section is at 80% of viewport
    // reaches full width when top of section is at 10% of viewport
    const startPoint = windowH * 0.85;
    const endPoint = windowH * 0.10;
    const progress = Math.min(1, Math.max(0, (startPoint - rect.top) / (startPoint - endPoint)));

    // Eased progression using unified cubic-bezier(.22,.8,.24,1)
    const eased = progress < 0.5 
      ? 2 * progress * progress 
      : 1 - Math.pow(-2 * progress + 2, 2) / 2;

    const scale = 0.95 + eased * 0.05;  // 0.95 -> 1.00
    const radius = 18 - eased * 18;     // 18px -> 0px
    const widthVw = 94 + eased * 6;     // 94vw -> 100vw
    const heightVh = 85 + eased * 15;   // 85vh -> 100vh

    card.style.transform = `scale(${scale.toFixed(4)})`;
    card.style.borderRadius = `${radius.toFixed(1)}px`;
    card.style.width = `${widthVw.toFixed(1)}vw`;
    card.style.height = `${heightVh.toFixed(1)}vh`;
    card.style.maxWidth = eased > 0.85 ? "100vw" : "1500px";

    ticking = false;
  }

  function requestUpdate() {
    if (!ticking) {
      requestAnimationFrame(updateFeatured);
      ticking = true;
    }
  }

  updateFeatured();
  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate, { passive: true });

  // Open modal on click (User gesture allows sound)
  card.addEventListener("click", () => {
    if (!window.cinemaPlayer) return;
    const feat = (typeof PORTFOLIO_DATA !== "undefined" && PORTFOLIO_DATA.featuredVideo) 
      ? PORTFOLIO_DATA.featuredVideo 
      : {
          badge: "01 / FEATURED WORK",
          title: "FEATURED WORK",
          summary: "A visual-led edit built around rhythm, atmosphere and colour.",
          videoSrc: "assets/videos/featured_film.mp4",
          posterImage: "assets/images/featured_film_poster.jpg",
          isVertical: false
        };
    window.cinemaPlayer.open(feat);
  });
}

/**
 * 3. Hero 3D Floating Character Depth & Soft Mouse Parallax
 * Controlled depth shifts with gentle lerp. Character floats naturally,
 * while background brush splash shifts opposite to cursor.
 */
function initCharacter3DParallax() {
  const stage = document.querySelector(".hero-character-stage");
  const characterWrap = document.querySelector(".character-cutout-wrap");
  const splash = document.querySelector(".character-brush-splash");
  const heroIntro = document.querySelector(".hero-intro");
  if (!stage || !characterWrap) return;

  const isFinePointer = window.matchMedia("(pointer: fine)").matches && window.matchMedia("(hover: hover)").matches;
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!isFinePointer || prefersReduced) return;

  let mouseX = 0;
  let mouseY = 0;
  let targetX = 0;
  let targetY = 0;
  let isMoving = false;

  function onMouseMove(e) {
    const halfW = window.innerWidth / 2;
    const halfH = window.innerHeight / 2;
    targetX = (e.clientX - halfW) / halfW;
    targetY = (e.clientY - halfH) / halfH;

    if (!isMoving) {
      isMoving = true;
      requestAnimationFrame(renderParallax);
    }
  }

  function renderParallax() {
    mouseX += (targetX - mouseX) * 0.06;
    mouseY += (targetY - mouseY) * 0.06;

    const rotY = mouseX * 4.5;
    const rotX = -mouseY * 3.5;
    const transX = mouseX * 8;
    const transY = mouseY * 6;

    // Character Cutout shifts with 3D tilt
    characterWrap.style.transform = `perspective(1000px) rotateY(${rotY.toFixed(2)}deg) rotateX(${rotX.toFixed(2)}deg) translate3d(${transX.toFixed(2)}px, ${transY.toFixed(2)}px, 12px)`;

    // Background blue splash shifts opposite
    if (splash) {
      splash.style.transform = `translate3d(${(-transX * 0.6).toFixed(2)}px, ${(-transY * 0.6).toFixed(2)}px, 0) scale(1.02)`;
    }

    // Typography subtle shift
    if (heroIntro) {
      heroIntro.style.transform = `translate3d(${(transX * 0.12).toFixed(2)}px, ${(transY * 0.12).toFixed(2)}px, 0)`;
    }

    if (Math.abs(targetX - mouseX) > 0.001 || Math.abs(targetY - mouseY) > 0.001) {
      requestAnimationFrame(renderParallax);
    } else {
      isMoving = false;
    }
  }

  window.addEventListener("mousemove", onMouseMove, { passive: true });
}

/**
 * 4. Hero Character Eye / Pupil Tracking (Desktop Mouse Only)
 * Mathematically maps mouse vector relative to each eye center on screen.
 * Strict movement limits ensure pupils remain strictly inside eye sclera.
 * Alpha-feathered mask renders ONLY moving eye interior — zero face distortion or skin seams.
 * Disabled on touch/mobile and reduced motion.
 */
function initHeroEyeTracking() {
  const canvas = document.getElementById("characterEyeCanvas");
  const img = document.getElementById("characterCutoutImg");
  const stage = document.querySelector(".hero-character-stage");
  if (!canvas || !img || !stage) return;

  const isFinePointer = window.matchMedia("(pointer: fine)").matches && window.matchMedia("(hover: hover)").matches && window.innerWidth > 820;
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!isFinePointer || prefersReduced) {
    canvas.style.display = "none";
    return;
  }

  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) return;

  // Eye geometries in 999x1024 native image space:
  // Left eye:
  // Center: (313, 582), radius X: 38, radius Y: 37, resting pupil: (315, 580)
  // Bounding patch: x0: 265, y0: 535, w: 96, h: 94
  const eyeLeft = {
    cx: 313, cy: 582, rx: 38, ry: 37,
    pupilX: 315, pupilY: 580,
    x0: 265, y0: 535, w: 96, h: 94,
    maxMove: 4.8
  };

  // Right eye:
  // Center: (482, 567), radius X: 52, radius Y: 37, resting pupil: (512, 555)
  // Bounding patch: x0: 420, y0: 520, w: 120, h: 94
  // Pupil already tucked right; more room to look left towards nose.
  const eyeRight = {
    cx: 482, cy: 567, rx: 52, ry: 37,
    pupilX: 512, pupilY: 555,
    x0: 420, y0: 520, w: 120, h: 94,
    maxMoveXLeft: 7.5, maxMoveXRight: 2.5, maxMoveY: 4.0
  };

  let baseLeftData = null;
  let baseRightData = null;
  let isReady = false;

  function prepareEyeBuffers() {
    if (isReady) return;
    try {
      const offCanvas = document.createElement("canvas");
      offCanvas.width = 999;
      offCanvas.height = 1024;
      const offCtx = offCanvas.getContext("2d", { willReadFrequently: true });
      offCtx.drawImage(img, 0, 0, 999, 1024);

      baseLeftData = offCtx.getImageData(eyeLeft.x0, eyeLeft.y0, eyeLeft.w, eyeLeft.h);
      baseRightData = offCtx.getImageData(eyeRight.x0, eyeRight.y0, eyeRight.w, eyeRight.h);
      isReady = true;
    } catch (e) {
      console.warn("Character eye tracking buffer init:", e);
    }
  }

  if (img.complete && img.naturalWidth > 0) {
    prepareEyeBuffers();
  } else {
    img.addEventListener("load", prepareEyeBuffers);
  }

  let targetDxLeft = 0;
  let targetDyLeft = 0;
  let targetDxRight = 0;
  let targetDyRight = 0;

  let currentDxLeft = 0;
  let currentDyLeft = 0;
  let currentDxRight = 0;
  let currentDyRight = 0;

  let isRunning = false;

  function onMouseMove(e) {
    if (!isReady) return;
    const rect = img.getBoundingClientRect();
    if (!rect.width || !rect.height) return;

    // Viewport position of Left Eye:
    const leftEyeScreenX = rect.left + rect.width * (eyeLeft.pupilX / 999);
    const leftEyeScreenY = rect.top + rect.height * (eyeLeft.pupilY / 1024);

    // Viewport position of Right Eye:
    const rightEyeScreenX = rect.left + rect.width * (eyeRight.pupilX / 999);
    const rightEyeScreenY = rect.top + rect.height * (eyeRight.pupilY / 1024);

    // Vector to mouse from Left Eye
    const dxL = e.clientX - leftEyeScreenX;
    const dyL = e.clientY - leftEyeScreenY;
    const distL = Math.hypot(dxL, dyL);
    const angleL = Math.atan2(dyL, dxL);

    // Soft ceiling movement
    const moveDistL = Math.min(eyeLeft.maxMove, (distL / 120) * eyeLeft.maxMove);
    targetDxLeft = Math.cos(angleL) * moveDistL;
    targetDyLeft = Math.sin(angleL) * moveDistL;

    // Vector to mouse from Right Eye
    const dxR = e.clientX - rightEyeScreenX;
    const dyR = e.clientY - rightEyeScreenY;
    const distR = Math.hypot(dxR, dyR);
    const angleR = Math.atan2(dyR, dxR);

    const cosR = Math.cos(angleR);
    const sinR = Math.sin(angleR);
    const maxMoveXR = cosR < 0 ? eyeRight.maxMoveXLeft : eyeRight.maxMoveXRight;
    const moveDistXR = Math.min(maxMoveXR, (distR / 120) * maxMoveXR);
    const moveDistYR = Math.min(eyeRight.maxMoveY, (distR / 120) * eyeRight.maxMoveY);

    targetDxRight = cosR * moveDistXR;
    targetDyRight = sinR * moveDistYR;

    if (!isRunning) {
      isRunning = true;
      requestAnimationFrame(renderPupils);
    }
  }

  function onMouseLeave() {
    targetDxLeft = 0;
    targetDyLeft = 0;
    targetDxRight = 0;
    targetDyRight = 0;
  }

  function warpEyeSocket(baseData, eye, dx, dy) {
    const w = eye.w;
    const h = eye.h;
    const output = ctx.createImageData(w, h);
    const src = baseData.data;
    const dst = output.data;
    const halfPi = Math.PI / 2;

    for (let py = 0; py < h; py++) {
      const globalY = eye.y0 + py;
      for (let px = 0; px < w; px++) {
        const globalX = eye.x0 + px;
        const normDist = Math.hypot((globalX - eye.cx) / eye.rx, (globalY - eye.cy) / eye.ry);
        const idx = (py * w + px) * 4;

        if (normDist >= 1.0) {
          // Outside socket: 100% transparent, ZERO distortion of skin
          dst[idx + 3] = 0;
        } else {
          // Feather alpha at the eyelid edge for seamless blend
          const edgeAlpha = normDist > 0.82 ? (1.0 - normDist) / 0.18 : 1.0;
          // Smooth bell curve displacement
          const weight = Math.pow(Math.cos(normDist * halfPi), 1.8);
          const srcX = px - dx * weight;
          const srcY = py - dy * weight;

          // Bilinear interpolation
          const x0 = Math.floor(srcX);
          const x1 = Math.min(w - 1, x0 + 1);
          const y0 = Math.floor(srcY);
          const y1 = Math.min(h - 1, y0 + 1);
          const fx = srcX - x0;
          const fy = srcY - y0;

          const i00 = (y0 * w + x0) * 4;
          const i10 = (y0 * w + x1) * 4;
          const i01 = (y1 * w + x0) * 4;
          const i11 = (y1 * w + x1) * 4;

          for (let c = 0; c < 3; c++) {
            const val = (1 - fx) * (1 - fy) * src[i00 + c] +
                        fx * (1 - fy) * src[i10 + c] +
                        (1 - fx) * fy * src[i01 + c] +
                        fx * fy * src[i11 + c];
            dst[idx + c] = Math.round(val);
          }
          // Apply feathered alpha
          const srcAlpha = (1 - fx) * (1 - fy) * src[i00 + 3] +
                           fx * (1 - fy) * src[i10 + 3] +
                           (1 - fx) * fy * src[i01 + 3] +
                           fx * fy * src[i11 + 3];
          dst[idx + 3] = Math.round((srcAlpha / 255) * edgeAlpha * 255);
        }
      }
    }
    return output;
  }

  function renderPupils() {
    if (!isReady) {
      isRunning = false;
      return;
    }

    currentDxLeft += (targetDxLeft - currentDxLeft) * 0.08;
    currentDyLeft += (targetDyLeft - currentDyLeft) * 0.08;
    currentDxRight += (targetDxRight - currentDxRight) * 0.08;
    currentDyRight += (targetDyRight - currentDyRight) * 0.08;

    const diffL = Math.hypot(targetDxLeft - currentDxLeft, targetDyLeft - currentDyLeft);
    const magL = Math.hypot(currentDxLeft, currentDyLeft);
    const diffR = Math.hypot(targetDxRight - currentDxRight, targetDyRight - currentDyRight);
    const magR = Math.hypot(currentDxRight, currentDyRight);

    if (magL < 0.05 && diffL < 0.03 && magR < 0.05 && diffR < 0.03) {
      ctx.clearRect(0, 0, 999, 1024);
      isRunning = false;
      return;
    }

    ctx.clearRect(0, 0, 999, 1024);

    const leftWarped = warpEyeSocket(baseLeftData, eyeLeft, currentDxLeft, currentDyLeft);
    ctx.putImageData(leftWarped, eyeLeft.x0, eyeLeft.y0);

    const rightWarped = warpEyeSocket(baseRightData, eyeRight, currentDxRight, currentDyRight);
    ctx.putImageData(rightWarped, eyeRight.x0, eyeRight.y0);

    requestAnimationFrame(renderPupils);
  }

  window.addEventListener("mousemove", onMouseMove, { passive: true });
  window.addEventListener("mouseleave", onMouseLeave, { passive: true });
}

/**
 * 5. About Section - Scroll-Driven Photo Animation
 * As the section enters viewport, portrait starts smaller (0.92) and lower (translateY 30px)
 * and smoothly scales to 1.00, translateY to 0px.
 */
function initAboutScrollPhotoAnimation() {
  const aboutSection = document.getElementById("about");
  const portrait = document.getElementById("aboutScrollPortrait");
  if (!aboutSection || !portrait) return;

  function clamp(v, min, max) {
    return Math.min(max, Math.max(min, v));
  }

  let ticking = false;

  function updateAboutAnimation() {
    const rect = aboutSection.getBoundingClientRect();
    const windowH = window.innerHeight;
    const progress = clamp((windowH - rect.top) / (windowH + rect.height * 0.5), 0, 1);

    const scale = 0.92 + progress * 0.08;
    const transY = (1 - progress) * 30;

    portrait.style.transform = `scale(${scale.toFixed(4)}) translateY(${transY.toFixed(1)}px)`;
    ticking = false;
  }

  function requestUpdate() {
    if (!ticking) {
      requestAnimationFrame(updateAboutAnimation);
      ticking = true;
    }
  }

  window.addEventListener("scroll", requestUpdate, { passive: true });
  requestUpdate();
}

/**
 * 6. Continuous Autoplay Moving Reels & Vertical Cinema Modal
 * All 4 reels continuously loop muted previews.
 * Clicking a reel card opens the cinema modal with the correct reel's local video and sound unmuted!
 * Reel 01 is strictly local MP4 (no Vimeo). Reel 04 uses the newly replaced video.
 */
function initReelsPlaybackAndModal() {
  const reelCards = document.querySelectorAll(".reel-card");
  if (!reelCards.length) return;

  reelCards.forEach((card) => {
    const video = card.querySelector("video");
    if (video) {
      video.muted = true;
      video.setAttribute("playsinline", "");
      video.setAttribute("webkit-playsinline", "");
      video.loop = true;

      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Fallback if browser blocks unmuted autoplay
          video.muted = true;
          video.play().catch(() => {});
        });
      }
    }

    card.addEventListener("click", () => {
      const reelId = card.getAttribute("data-reel-id");
      if (!reelId || typeof PORTFOLIO_DATA === "undefined" || !PORTFOLIO_DATA.reels) return;

      const reelData = PORTFOLIO_DATA.reels.find((r) => r.id === reelId);
      if (reelData && window.cinemaPlayer) {
        window.cinemaPlayer.open(reelData);
      }
    });
  });
}

/**
 * 7. Recent Work Project Cards
 * Clicks open the video in the cinema modal
 */
function initRecentProjectsTriggers() {
  const projectCards = document.querySelectorAll(".recent-project-card");
  if (!projectCards.length) return;

  projectCards.forEach((card) => {
    card.addEventListener("click", () => {
      const projId = card.getAttribute("data-project-id");
      if (!projId || typeof PORTFOLIO_DATA === "undefined" || !PORTFOLIO_DATA.recentProjects) return;

      const projData = PORTFOLIO_DATA.recentProjects.find((p) => p.id === projId);
      if (projData && window.cinemaPlayer) {
        window.cinemaPlayer.open(projData);
      }
    });
  });
}

/**
 * 8. Interactive Email Copy Toast
 */
function initEmailCopyToast() {
  const copyPills = document.querySelectorAll(".interactive-email-pill");
  const toast = document.getElementById("emailCopyToast");

  if (!copyPills.length || !toast) return;

  let toastTimer = null;

  copyPills.forEach((pill) => {
    pill.addEventListener("click", (e) => {
      e.preventDefault();
      const email = pill.getAttribute("data-copy-text") || "iamharinders@gmail.com";

      navigator.clipboard.writeText(email).then(() => {
        showToast("Email copied to clipboard!");
      }).catch(() => {
        // Fallback
        showToast("iamharinders@gmail.com");
      });
    });
  });

  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove("is-visible");
    }, 2800);
  }
}

/**
 * 9. Scroll Reveal Observer
 */
function initRevealObserver() {
  const reveals = document.querySelectorAll(".reveal");
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -40px 0px"
  });

  reveals.forEach((el) => observer.observe(el));
}

/**
 * 10. Mobile Navigation Drawer
 */
function initMobileNavigation() {
  const toggleBtn = document.getElementById("menuToggle");
  const drawer = document.getElementById("mobileNavDrawer");
  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("menu-open");
    toggleBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    toggleBtn.textContent = isOpen ? "✕" : "☰";
  });

  drawer.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      document.body.classList.remove("menu-open");
      toggleBtn.setAttribute("aria-expanded", "false");
      toggleBtn.textContent = "☰";
    });
  });
}

/**
 * 11. Smooth Scroll with Floating Navbar Offset
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function(e) {
      const targetId = this.getAttribute("href");
      if (!targetId || targetId === "#") return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const navHeight = 80;
        const targetPos = targetEl.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({
          top: targetPos,
          behavior: "smooth"
        });
      }
    });
  });
}
