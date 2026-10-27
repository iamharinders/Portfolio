/**
 * =======================================================================
 * HARINDER'S PORTFOLIO - MAIN INTERACTION & MOTION LOGIC
 * =======================================================================
 * 1. Minimal Navigation Scroll State & Mobile Drawer
 * 2. Compact Smooth Scroll Zoom for Featured Work
 * 3. Single-Active Hover & Viewport Playback for Reels
 * 4. Video Modal Triggers (Featured, Recent Work, Vertical Reels)
 * 5. Subtle Character Floating Parallax
 * 6. Interactive Email Copy & Toast Notification
 * 7. Intersection Observer for Scroll Reveals
 */

document.addEventListener("DOMContentLoaded", () => {
  initNavbarScrollState();
  initFeaturedScrollZoom();
  initRevealObserver();
  initRecentProjectsTriggers();
  initReelsPlaybackAndModal();
  initCharacterParallax();
  initMobileNavigation();
  initEmailCopyToast();
  initSmoothScroll();
});

/**
 * 1. Navigation Scroll State
 * Keeps navigation minimal and visually quiet, with subtle background elevation on scroll
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
 * 2. Compact Scroll Zoom for Featured Video
 * Maps scroll through the container (118vh) to scale 0.82 -> 1.0 and radius 28px -> 4px
 * Intentionally fast, ~1 viewport, remains quick to browse
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

    // Eased cubic progression
    const eased = progress < 0.5 
      ? 2 * progress * progress 
      : 1 - Math.pow(-2 * progress + 2, 2) / 2;

    const scale = 0.82 + eased * 0.18;
    const radius = 28 - eased * 24;

    card.style.transform = `scale(${scale})`;
    card.style.borderRadius = `${radius}px`;

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

  // Open modal on click
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
      software: "DaVinci Resolve / 4K Master",
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
 * 3. Intersection Observer for Scroll Reveals
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
    threshold: 0.12,
    rootMargin: "0px 0px -40px 0px"
  });

  elements.forEach(el => observer.observe(el));
}

/**
 * 4. Recent Projects Modal Triggers
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
        const num = `0${projId}`;
        const img = card.querySelector("img") ? card.querySelector("img").src : "";
        projectData = {
          number: `0${projId}`,
          title: title,
          role: "Video Editing & Colorist",
          software: "DaVinci Resolve / Premiere Pro",
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
 * 5. Reels Playback & Vertical Modal Trigger
 * Ensures ONLY ONE reel plays at a time, smooth hover/viewport playback
 */
function initReelsPlaybackAndModal() {
  const reelCards = document.querySelectorAll(".reel-card[data-reel-id]");
  let currentlyPlayingVideo = null;

  reelCards.forEach((card, idx) => {
    const reelId = card.getAttribute("data-reel-id");
    const video = card.querySelector("video");

    if (video) {
      card.addEventListener("mouseenter", () => {
        // Pause any previously playing reel
        if (currentlyPlayingVideo && currentlyPlayingVideo !== video) {
          currentlyPlayingVideo.pause();
        }
        video.play().catch(() => {});
        currentlyPlayingVideo = video;
      });

      card.addEventListener("mouseleave", () => {
        video.pause();
        if (currentlyPlayingVideo === video) {
          currentlyPlayingVideo = null;
        }
      });
    }

    // Modal Trigger for Reel
    function openReelModal() {
      if (!window.cinemaPlayer) return;

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
        e.preventDefault();
        openReelModal();
      }
    });
  });
}

/**
 * 6. Subtle Parallax for Character Cutout on Mouse Movement & Scroll
 * Gentle, cinematic, non-distracting
 */
function initCharacterParallax() {
  const wrap = document.getElementById("characterCutoutWrap");
  if (!wrap) return;

  // Subtle scroll parallax
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    if (scrollY < 900) {
      const translateY = scrollY * 0.04;
      wrap.style.transform = `translate3d(0, ${translateY.toFixed(2)}px, 0)`;
    }
  }, { passive: true });
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
        const headerOffset = 60;
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
