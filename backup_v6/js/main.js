/**
 * =======================================================================
 * HARINDER'S PORTFOLIO - MAIN INTERACTION & MOTION LOGIC
 * =======================================================================
 * 1. Minimal Navigation Scroll State (Transparent -> Glass on scroll)
 * 2. Full-Width Compact Scroll Zoom for Featured Work
 * 3. 3D Floating Character Depth & Interactive Mouse Parallax
 * 4. Single-Active Hover & Viewport Playback for Reels
 * 5. Full Video Modal Triggers (Featured, Recent Work, 9:16 Reels)
 * 6. Interactive Email Copy Pill & Toast Notification
 * 7. Intersection Observer for Scroll Reveals
 * 8. Mobile Navigation Drawer
 */

document.addEventListener("DOMContentLoaded", () => {
  initNavbarScrollState();
  initFeaturedScrollZoom();
  initCharacter3DParallax();
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
 * Expands from initial framed video card to essentially full viewport width (100vw)
 * Intentionally fast and compact (~1 viewport scroll), remaining quick to browse
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

    const scale = 0.88 + eased * 0.12;
    const radius = 24 - eased * 24;
    const widthVw = 90 + eased * 10; // Expands to 100vw

    card.style.transform = `scale(${scale.toFixed(4)})`;
    card.style.borderRadius = `${radius.toFixed(1)}px`;
    card.style.width = `${widthVw.toFixed(1)}vw`;
    if (eased > 0.9) {
      card.style.maxWidth = "100vw";
    } else {
      card.style.maxWidth = "1320px";
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
 * 3. 3D Floating Character Cutout & Mouse Parallax
 * Desktop only: subtle perspective tilt and depth displacement
 */
function initCharacter3DParallax() {
  const stage = document.querySelector(".hero-character-stage");
  const cutoutWrap = document.getElementById("characterCutoutWrap");
  const splash = document.querySelector(".character-brush-splash");
  const frame = document.querySelector(".character-graphic-frame");
  const heroIntro = document.querySelector(".hero-intro");

  if (!stage || !cutoutWrap) return;

  const isFinePointer = window.matchMedia("(pointer: fine)").matches && window.innerWidth > 820;

  if (isFinePointer) {
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let isMoving = false;

    function onMouseMove(e) {
      const rect = stage.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      targetX = clamp((e.clientX - centerX) / (window.innerWidth / 2), -1, 1);
      targetY = clamp((e.clientY - centerY) / (window.innerHeight / 2), -1, 1);
      if (!isMoving) {
        isMoving = true;
        cutoutWrap.style.animation = "none"; // Switch to mouse-guided 3D
        requestAnimationFrame(renderParallax);
      }
    }

    function clamp(val, min, max) {
      return Math.min(Math.max(val, min), max);
    }

    function renderParallax() {
      // Smooth interpolation
      mouseX += (targetX - mouseX) * 0.08;
      mouseY += (targetY - mouseY) * 0.08;

      const rotY = mouseX * 3.5; // -3.5deg to +3.5deg
      const rotX = -mouseY * 3.5;
      const transX = mouseX * 8; // -8px to +8px
      const transY = mouseY * 8;

      cutoutWrap.style.transform = `perspective(900px) translate3d(${transX.toFixed(2)}px, ${transY.toFixed(2)}px, 15px) rotateY(${rotY.toFixed(2)}deg) rotateX(${rotX.toFixed(2)}deg)`;

      // Background splash moves in opposite direction (depth separation)
      if (splash) {
        splash.style.transform = `translate3d(${(-transX * 0.45).toFixed(2)}px, ${(-transY * 0.45).toFixed(2)}px, 0)`;
      }

      // Graphic frame shifts slightly
      if (frame) {
        frame.style.transform = `translate3d(${(transX * 0.25).toFixed(2)}px, ${(transY * 0.25).toFixed(2)}px, 0)`;
      }

      // Typography shifts 1–2px max
      if (heroIntro) {
        heroIntro.style.transform = `translate3d(${(transX * 0.15).toFixed(2)}px, ${(transY * 0.15).toFixed(2)}px, 0)`;
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
 * 4. Intersection Observer for Scroll Reveals
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
 * 5. Recent Projects Modal Triggers
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
 * 6. Reels Playback & Vertical Modal Trigger
 * FIXES ALL CLICK/HOVER BUGS:
 * - Only ONE reel preview plays at a time on hover (muted, loop)
 * - Mouseleave pauses preview
 * - Click pauses preview and opens the EXACT reel video in modal with unmuted audio allowed!
 */
function initReelsPlaybackAndModal() {
  const reelCards = document.querySelectorAll(".reel-card[data-reel-id]");
  let currentlyPlayingPreview = null;

  reelCards.forEach((card, idx) => {
    const reelId = card.getAttribute("data-reel-id");
    const video = card.querySelector("video");

    if (video) {
      card.addEventListener("mouseenter", () => {
        // Pause any previously playing preview video
        if (currentlyPlayingPreview && currentlyPlayingPreview !== video) {
          currentlyPlayingPreview.pause();
        }
        video.muted = true;
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {});
        }
        currentlyPlayingPreview = video;
      });

      card.addEventListener("mouseleave", () => {
        video.pause();
        if (currentlyPlayingPreview === video) {
          currentlyPlayingPreview = null;
        }
      });
    }

    // Modal Trigger for Reel
    function openReelModal(e) {
      if (e) e.preventDefault();
      if (!window.cinemaPlayer) return;

      // Pause the active preview immediately
      if (video) {
        video.pause();
      }
      if (currentlyPlayingPreview) {
        currentlyPlayingPreview.pause();
        currentlyPlayingPreview = null;
      }

      let reelData = null;
      if (typeof PORTFOLIO_DATA !== "undefined" && PORTFOLIO_DATA.reels) {
        reelData = PORTFOLIO_DATA.reels.find(r => r.id === reelId);
      }

      const videoSrc = reelData?.videoSrc || `assets/videos/${reelId}.mp4`;
      const poster = reelData?.posterImage || (video ? video.poster : "");

      window.cinemaPlayer.open({
        number: `REEL / 0${idx + 1}`,
        title: reelData?.title || `REEL 0${idx + 1}`,
        role: reelData?.category || "9:16 Vertical Short-Form",
        software: "Premiere Pro / After Effects",
        vimeoUrl: reelData?.vimeoUrl || "",
        videoType: reelData?.vimeoUrl ? "vimeo" : "local",
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
 * 7. Mobile Navigation Drawer
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
 * 8. Email Copy Pill & Toast Notification
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
 * 9. Smooth Scroll with fixed navbar offset
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
