/**
 * =======================================================================
 * HARINDER'S PORTFOLIO - MAIN INTERACTION & MOTION LOGIC
 * =======================================================================
 * 1. Minimal Navigation Scroll State (Transparent -> Glass on scroll)
 * 2. Full-Width Compact Scroll Zoom for Featured Work
 * 3. 3D Floating Character Depth & Soft Mouse Parallax
 * 4. Hero Character Eye / Pupil Tracking (Desktop Only, Subtle Warp)
 * 5. About Section Scroll Photo Animation (Scale, Translate, Rotate)
 * 6. Continuous Autoplay Moving Reels & Vertical Cinema Modal (Local Reel 01)
 * 7. Full Video Modal Triggers (Featured, Recent Work, 9:16 Reels)
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
 * Transparent at the top; becomes subtle translucent cream glass past 50px of scroll
 */
function initNavbarScrollState() {
  const nav = document.getElementById("siteNav");
  if (!nav) return;

  function onScroll() {
    if (window.scrollY > 50) {
      nav.classList.add("is-scrolled");
    } else {
      nav.classList.remove("is-scrolled");
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/**
 * 2. Compact Scroll Zoom for Featured Video
 * Expands smoothly from framed card to a cinematic full-width visual (100vw, 94vh)
 * Short, smooth scroll progression using cubic-bezier(.22,.8,.24,1)
 */
function initFeaturedScrollZoom() {
  const card = document.getElementById("featuredCard");
  const zoom = document.getElementById("featuredZoomContainer");

  if (!card || !zoom) return;

  let ticking = false;

  function clamp(v, min, max) {
    return Math.min(max, Math.max(min, v));
  }

  function updateFeatured() {
    const rect = zoom.getBoundingClientRect();
    const distance = Math.max(zoom.offsetHeight - window.innerHeight, 1);
    const progress = clamp(-rect.top / distance, 0, 1);

    // Eased progression using unified cubic-bezier(.22,.8,.24,1) approximation
    const eased = progress < 0.5 
      ? 2 * progress * progress 
      : 1 - Math.pow(-2 * progress + 2, 2) / 2;

    const scale = 0.92 + eased * 0.08;
    const radius = 20 - eased * 20;
    const widthVw = 92 + eased * 8; // Expands to 100vw
    const heightVh = 82 + eased * 14; // Expands to 96vh

    card.style.transform = `scale(${scale.toFixed(4)})`;
    card.style.borderRadius = `${radius.toFixed(1)}px`;
    card.style.width = `${widthVw.toFixed(1)}vw`;
    card.style.height = `${heightVh.toFixed(1)}vh`;
    if (eased > 0.85) {
      card.style.maxWidth = "100vw";
    } else {
      card.style.maxWidth = "1360px";
    }

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
          category: "Edit / Colour / Sound / Motion",
          vimeoUrl: "https://vimeo.com/1224390608",
          videoSrc: "assets/videos/featured_film.mp4",
          posterImage: "assets/images/featured_film_poster.jpg"
        };

    window.cinemaPlayer.open({
      number: feat.badge,
      title: feat.title,
      role: feat.summary || feat.category,
      software: "DaVinci Resolve / 4K Timeline",
      vimeoUrl: feat.vimeoUrl || "",
      videoType: feat.vimeoUrl ? "vimeo" : "local",
      videoSrc: feat.videoSrc,
      posterImage: feat.posterImage,
      isVertical: false
    });
  });

  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      card.click();
    }
  });
}

/**
 * 3. 3D Floating Character Cutout & Soft Mouse Parallax
 * Desktop only: subtle perspective tilt and depth displacement
 * Does not cancel ambient 3D floating animation
 */
function initCharacter3DParallax() {
  const stage = document.querySelector(".hero-character-stage");
  const img = document.getElementById("characterCutoutImg");
  const splash = document.querySelector(".character-brush-splash");
  const frame = document.querySelector(".character-graphic-frame");
  const heroIntro = document.querySelector(".hero-intro");

  if (!stage || !img) return;

  const isFinePointer = window.matchMedia("(pointer: fine)").matches && window.innerWidth > 820;

  if (isFinePointer) {
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let isMoving = false;

    function clamp(val, min, max) {
      return Math.min(Math.max(val, min), max);
    }

    function onMouseMove(e) {
      const rect = stage.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      targetX = clamp((e.clientX - centerX) / (window.innerWidth / 2), -1, 1);
      targetY = clamp((e.clientY - centerY) / (window.innerHeight / 2), -1, 1);
      if (!isMoving) {
        isMoving = true;
        requestAnimationFrame(renderParallax);
      }
    }

    function renderParallax() {
      // Smooth subtle interpolation
      mouseX += (targetX - mouseX) * 0.06;
      mouseY += (targetY - mouseY) * 0.06;

      const rotY = mouseX * 1.5; // -1.5deg to +1.5deg max
      const rotX = -mouseY * 1.0;
      const transX = mouseX * 4; // -4px to +4px
      const transY = mouseY * 4;

      img.style.transform = `translate3d(${transX.toFixed(2)}px, ${transY.toFixed(2)}px, 0) rotateY(${rotY.toFixed(2)}deg) rotateX(${rotX.toFixed(2)}deg)`;

      // Background splash moves in opposite direction (depth separation)
      if (splash) {
        splash.style.transform = `translate3d(${(-transX * 0.4).toFixed(2)}px, ${(-transY * 0.4).toFixed(2)}px, 0)`;
      }

      // Graphic frame shifts slightly
      if (frame) {
        frame.style.transform = `translate3d(${(transX * 0.25).toFixed(2)}px, ${(transY * 0.25).toFixed(2)}px, 0)`;
      }

      // Typography shifts 1px max
      if (heroIntro) {
        heroIntro.style.transform = `translate3d(${(transX * 0.1).toFixed(2)}px, ${(transY * 0.1).toFixed(2)}px, 0)`;
      }

      if (Math.abs(targetX - mouseX) > 0.001 || Math.abs(targetY - mouseY) > 0.001) {
        requestAnimationFrame(renderParallax);
      } else {
        isMoving = false;
      }
    }

    window.addEventListener("mousemove", onMouseMove, { passive: true });
  }
}

/**
 * 4. Hero Character Eye / Pupil Tracking (Desktop Mouse Only)
 * Subtle micro-movement (2–5px) following cursor direction with gentle rAF lerp.
 * Strictly limited to eye socket, preserving 100% of character art fidelity.
 * On mobile/touch: disabled completely.
 */
function initHeroEyeTracking() {
  const canvas = document.getElementById("characterEyeCanvas");
  const img = document.getElementById("characterCutoutImg");
  const stage = document.querySelector(".hero-character-stage");
  if (!canvas || !img || !stage) return;

  // Strictly disabled on touch/mobile devices
  const isFinePointer = window.matchMedia("(pointer: fine)").matches && window.innerWidth > 820;
  if (!isFinePointer) {
    canvas.style.display = "none";
    return;
  }

  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) return;

  // Pixel coordinates in 999x1024 original character image:
  // Left eye center: (316, 582), radius R=40
  // Right eye center: (510, 556), radius R=44
  const eyeLeft = { cx: 316, cy: 582, r: 40, x0: 270, y0: 536, w: 92, h: 92 };
  const eyeRight = { cx: 510, cy: 556, r: 44, x0: 460, y0: 506, w: 100, h: 100 };

  let baseLeftData = null;
  let baseRightData = null;
  let isReady = false;

  function prepareEyeBuffers() {
    if (isReady) return;
    try {
      const offCanvas = document.createElement("canvas");
      offCanvas.width = 999;
      offCanvas.height = 1024;
      const offCtx = offCanvas.getContext("2d");
      offCtx.drawImage(img, 0, 0, 999, 1024);

      baseLeftData = offCtx.getImageData(eyeLeft.x0, eyeLeft.y0, eyeLeft.w, eyeLeft.h);
      baseRightData = offCtx.getImageData(eyeRight.x0, eyeRight.y0, eyeRight.w, eyeRight.h);
      isReady = true;
    } catch (e) {
      console.warn("Eye tracking buffer init:", e);
    }
  }

  if (img.complete && img.naturalWidth > 0) {
    prepareEyeBuffers();
  } else {
    img.addEventListener("load", prepareEyeBuffers);
  }

  let targetDx = 0;
  let targetDy = 0;
  let currentDx = 0;
  let currentDy = 0;
  let isRunning = false;

  function onMouseMove(e) {
    if (!isReady) return;
    const rect = img.getBoundingClientRect();
    if (!rect.width || !rect.height) return;

    // Approximate face center in viewport coordinates
    const faceX = rect.left + rect.width * 0.41;
    const faceY = rect.top + rect.height * 0.56;

    // Normalized offset from face center (-1 to +1)
    const normX = Math.max(-1, Math.min(1, (e.clientX - faceX) / (window.innerWidth * 0.45)));
    const normY = Math.max(-1, Math.min(1, (e.clientY - faceY) / (window.innerHeight * 0.45)));

    // Maximum 2–4.5px subtle movement in canvas pixels
    targetDx = normX * 4.2;
    targetDy = normY * 3.2;

    if (!isRunning) {
      isRunning = true;
      requestAnimationFrame(renderPupils);
    }
  }

  function onMouseLeave() {
    targetDx = 0;
    targetDy = 0;
  }

  function warpEyePatch(baseData, eye, dx, dy) {
    const w = eye.w;
    const h = eye.h;
    const output = ctx.createImageData(w, h);
    const src = baseData.data;
    const dst = output.data;
    const R = eye.r;
    const halfPi = Math.PI / 2;

    for (let py = 0; py < h; py++) {
      const globalY = eye.y0 + py;
      for (let px = 0; px < w; px++) {
        const globalX = eye.x0 + px;
        const dist = Math.hypot(globalX - eye.cx, globalY - eye.cy);
        const idx = (py * w + px) * 4;

        if (dist >= R) {
          // Outside socket: 0 displacement
          dst[idx] = src[idx];
          dst[idx + 1] = src[idx + 1];
          dst[idx + 2] = src[idx + 2];
          dst[idx + 3] = src[idx + 3];
        } else {
          // Smooth bell curve displacement
          const weight = Math.pow(Math.cos((dist / R) * halfPi), 2);
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

          for (let c = 0; c < 4; c++) {
            const val = (1 - fx) * (1 - fy) * src[i00 + c] +
                        fx * (1 - fy) * src[i10 + c] +
                        (1 - fx) * fy * src[i01 + c] +
                        fx * fy * src[i11 + c];
            dst[idx + c] = Math.round(val);
          }
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

    // Delayed smooth easing
    currentDx += (targetDx - currentDx) * 0.08;
    currentDy += (targetDy - currentDy) * 0.08;

    const diff = Math.hypot(targetDx - currentDx, targetDy - currentDy);
    const mag = Math.hypot(currentDx, currentDy);

    if (mag < 0.06 && diff < 0.04) {
      // Clear canvas so the resting original artwork shines through with 0 CPU
      ctx.clearRect(0, 0, 999, 1024);
      isRunning = false;
      return;
    }

    ctx.clearRect(0, 0, 999, 1024);

    const leftWarped = warpEyePatch(baseLeftData, eyeLeft, currentDx, currentDy);
    ctx.putImageData(leftWarped, eyeLeft.x0, eyeLeft.y0);

    const rightWarped = warpEyePatch(baseRightData, eyeRight, currentDx, currentDy);
    ctx.putImageData(rightWarped, eyeRight.x0, eyeRight.y0);

    requestAnimationFrame(renderPupils);
  }

  window.addEventListener("mousemove", onMouseMove, { passive: true });
  window.addEventListener("mouseleave", onMouseLeave, { passive: true });
}

/**
 * 5. About Section - Scroll-Driven Photo Animation
 * As the section enters viewport, portrait starts smaller (0.90) and lower (translateY 40px)
 * and smoothly scales to 1.00, translateY to 0px, subtle rotate -2deg -> 0deg.
 * The background watermark graphic "04" moves subtly in the opposite direction.
 */
function initAboutScrollPhotoAnimation() {
  const aboutSection = document.getElementById("about");
  const portrait = document.getElementById("aboutScrollPortrait");
  const bgGraphic = document.getElementById("aboutScrollBgGraphic");
  if (!aboutSection || !portrait) return;

  function clamp(v, min, max) {
    return Math.min(max, Math.max(min, v));
  }

  let ticking = false;

  function updateAboutScroll() {
    const rect = aboutSection.getBoundingClientRect();
    const windowH = window.innerHeight;

    // Progress from 0 (when top of about section enters bottom of viewport)
    // to 1 (when about section center aligns in viewport)
    const totalDist = windowH + rect.height * 0.4;
    const scrollIn = windowH - rect.top;
    const progress = clamp(scrollIn / totalDist, 0, 1);

    // Eased progression using unified cubic-bezier(.22,.8,.24,1) approximation
    const eased = progress < 0.5 
      ? 2 * progress * progress 
      : 1 - Math.pow(-2 * progress + 2, 2) / 2;

    const scale = 0.90 + eased * 0.10;
    const transY = 40 * (1 - eased);
    const rot = -2 * (1 - eased);

    portrait.style.transform = `scale(${scale.toFixed(4)}) translateY(${transY.toFixed(1)}px) rotate(${rot.toFixed(2)}deg)`;

    if (bgGraphic) {
      const bgY = -24 * eased;
      bgGraphic.style.transform = `translateY(${bgY.toFixed(1)}px)`;
    }

    ticking = false;
  }

  function requestScroll() {
    if (!ticking) {
      requestAnimationFrame(updateAboutScroll);
      ticking = true;
    }
  }

  updateAboutScroll();
  window.addEventListener("scroll", requestScroll, { passive: true });
  window.addEventListener("resize", requestScroll, { passive: true });
}

/**
 * 6. Intersection Observer for Scroll Reveals
 */
function initRevealObserver() {
  const elements = document.querySelectorAll(".reveal");
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -30px 0px"
  });

  elements.forEach(el => observer.observe(el));
}

/**
 * 7. Recent Projects Modal Triggers
 */
function initRecentProjectsTriggers() {
  const projectCards = document.querySelectorAll(".recent-project-card[data-project-id]");
  projectCards.forEach(card => {
    const projId = card.getAttribute("data-project-id");

    function openProjectModal() {
      if (!window.cinemaPlayer) return;

      let projectData = null;
      if (typeof PORTFOLIO_DATA !== "undefined" && PORTFOLIO_DATA.recentProjects) {
        projectData = PORTFOLIO_DATA.recentProjects.find(p => p.id === projId);
      }

      if (!projectData) {
        const titleEl = card.querySelector(".project-card-title");
        const title = titleEl ? titleEl.textContent : "PROJECT";
        const img = card.querySelector("img") ? card.querySelector("img").src : "";
        projectData = {
          number: `0${projId}`,
          title: title,
          category: "Video Editing & Colour",
          description: "Fast cuts, clean sound design and intentional rhythm.",
          vimeoUrl: "",
          videoType: "local",
          videoSrc: "assets/videos/featured_film.mp4",
          posterImage: img,
          isVertical: false
        };
      }

      window.cinemaPlayer.open({
        number: `PROJECT / ${projectData.number}`,
        title: projectData.title,
        role: projectData.description || projectData.category,
        software: "DaVinci Resolve / 4K Timeline",
        vimeoUrl: projectData.vimeoUrl || "",
        videoType: projectData.vimeoUrl ? "vimeo" : "local",
        videoSrc: projectData.videoSrc,
        posterImage: projectData.posterImage,
        isVertical: Boolean(projectData.isVertical)
      });
    }

    card.addEventListener("click", openProjectModal);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openProjectModal();
      }
    });
  });
}

/**
 * 8. Continuous Autoplay Moving Reels & Modal Trigger
 * - All 4 reels continuously autoplay muted on loop with NO play buttons
 * - IntersectionObserver pauses videos only when far offscreen to conserve CPU/battery
 * - Clicking any reel pauses background preview and opens EXACT local video in cinema modal
 * - Reel 01 uses DIRECT local MP4 assets/videos/reel_01.mp4 (NO Vimeo!)
 * - Clicking allows unmuted sound as an authorized user gesture
 */
function initReelsPlaybackAndModal() {
  const reelCards = document.querySelectorAll(".reel-card[data-reel-id]");

  // Setup continuous autoplay on all reel videos
  reelCards.forEach((card) => {
    const video = card.querySelector("video");
    if (video) {
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      video.setAttribute("playsinline", "");
      video.setAttribute("muted", "");
      video.setAttribute("loop", "");
      const p = video.play();
      if (p !== undefined) {
        p.catch(() => {
          // If browser policy delays autoplay, retry on first interaction
          const retryPlay = () => {
            video.play().catch(() => {});
            document.removeEventListener("touchstart", retryPlay);
            document.removeEventListener("click", retryPlay);
          };
          document.addEventListener("touchstart", retryPlay, { once: true, passive: true });
          document.addEventListener("click", retryPlay, { once: true, passive: true });
        });
      }
    }
  });

  // IntersectionObserver: pause videos only when far outside viewport
  if ("IntersectionObserver" in window) {
    const reelObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const video = entry.target.querySelector("video");
        if (!video) return;
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    }, {
      rootMargin: "300px 0px 300px 0px",
      threshold: 0.05
    });

    reelCards.forEach(card => reelObserver.observe(card));
  }

  // Click & Keydown Handlers to open Modal with sound
  reelCards.forEach((card, idx) => {
    const reelId = card.getAttribute("data-reel-id");
    const video = card.querySelector("video");

    function openReelModal(e) {
      if (e) e.preventDefault();
      if (!window.cinemaPlayer) return;

      // Pause all background reel videos
      reelCards.forEach(c => {
        const v = c.querySelector("video");
        if (v) v.pause();
      });

      let reelData = null;
      if (typeof PORTFOLIO_DATA !== "undefined" && PORTFOLIO_DATA.reels) {
        reelData = PORTFOLIO_DATA.reels.find(r => r.id === reelId);
      }

      // Reel 01 is strictly local MP4 (no Vimeo)
      let videoSrc = reelData?.videoSrc || `assets/videos/${reelId}.mp4`;
      let vimeoUrl = reelData?.vimeoUrl || "";
      if (reelId === "reel_01") {
        vimeoUrl = "";
        videoSrc = "assets/videos/reel_01.mp4";
      }

      const poster = reelData?.posterImage || (video ? video.poster : "");

      window.cinemaPlayer.open({
        number: `REEL / 0${idx + 1}`,
        title: reelData?.title || `REEL 0${idx + 1}`,
        role: reelData?.category || "9:16 Vertical Short-Form",
        software: "Premiere Pro / After Effects",
        vimeoUrl: vimeoUrl,
        videoType: vimeoUrl ? "vimeo" : "local",
        videoSrc: videoSrc,
        posterImage: poster,
        isVertical: true
      });
    }

    card.addEventListener("click", openReelModal);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        openReelModal(e);
      }
    });
  });
}

/**
 * 9. Mobile Navigation Drawer
 */
function initMobileNavigation() {
  const menuBtn = document.getElementById("menuToggle");
  const drawer = document.getElementById("mobileNavDrawer");
  if (!menuBtn) return;

  function toggleMenu() {
    const isOpen = document.body.classList.toggle("menu-open");
    menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    menuBtn.textContent = isOpen ? "✕" : "☰";
  }

  function closeMenu() {
    document.body.classList.remove("menu-open");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.textContent = "☰";
  }

  menuBtn.addEventListener("click", toggleMenu);

  if (drawer) {
    drawer.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", closeMenu);
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && document.body.classList.contains("menu-open")) {
      closeMenu();
    }
  });
}

/**
 * 10. Email Copy Pill & Toast Notification
 */
function initEmailCopyToast() {
  const btn = document.getElementById("copyEmailBtn");
  const toast = document.getElementById("toastNotification");
  if (!btn || !toast) return;

  let toastTimeout = null;

  btn.addEventListener("click", async () => {
    const email = "iamharinders@gmail.com";
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = email;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }

      toast.textContent = `Copied ${email} to clipboard!`;
      toast.classList.add("is-visible");

      clearTimeout(toastTimeout);
      toastTimeout = setTimeout(() => {
        toast.classList.remove("is-visible");
      }, 2600);
    } catch (err) {
      console.error("Clipboard copy failed:", err);
      window.location.href = `mailto:${email}`;
    }
  });
}

/**
 * 11. Smooth Scroll with fixed navbar offset
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      const targetId = this.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 65;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    });
  });
}
