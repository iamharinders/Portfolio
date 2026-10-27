/**
 * =======================================================================
 * HARINDER'S CINEMATIC EDITORIAL PORTFOLIO - MAIN LOGIC
 * =======================================================================
 * Features:
 * 1. Compact rAF Scroll Zoom for Featured Video
 * 2. IntersectionObserver for Reveal Animations
 * 3. Cinema Modal Triggering (Local, Vimeo, YouTube)
 * 4. Mobile Drawer Navigation
 * 5. Interactive Email Copy & Toast Notification
 * 6. Smooth Scroll Handling
 */

document.addEventListener("DOMContentLoaded", () => {
  initFeaturedScrollZoom();
  initRevealObserver();
  initVideoModalTriggers();
  initMobileNavigation();
  initEmailCopyToast();
  initSmoothScroll();
});

/**
 * 1. Compact Scroll Zoom for Featured Video
 * Maps scroll through the container (122vh) to scale 0.78 -> 1.0 and radius 32px -> 4px
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

    // Smooth compact interpolation
    const scale = 0.78 + progress * 0.22;
    const radius = 32 - progress * 28;

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

  // Initial calculation
  updateFeatured();

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate, { passive: true });
}

/**
 * 2. Intersection Observer for Scroll Reveals
 */
function initRevealObserver() {
  const elements = document.querySelectorAll(".reveal");
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        // Once visible, don't unobserve so state stays clean
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -40px 0px"
  });

  elements.forEach(el => observer.observe(el));
}

/**
 * 3. Cinema Modal Triggers
 */
function initVideoModalTriggers() {
  if (!window.cinemaPlayer) return;

  // Trigger for Featured Card
  const featuredCard = document.getElementById("featuredCard");
  if (featuredCard) {
    featuredCard.addEventListener("click", () => {
      const featData = (typeof PORTFOLIO_DATA !== "undefined" && PORTFOLIO_DATA.featuredVideo) ? PORTFOLIO_DATA.featuredVideo : {
        badge: "FEATURED EDIT / 01",
        title: "ORANGE FILM",
        subtitle: "Editing / Colour / Sound Design / Motion",
        videoType: "local",
        videoSrc: "assets/videos/showcase_preview.mp4",
        posterImage: "assets/images/featured_orange_film.jpg"
      };

      window.cinemaPlayer.open({
        number: featData.badge,
        title: featData.title,
        role: featData.summary || featData.subtitle,
        software: "DaVinci Resolve / 4K Master",
        vimeoUrl: featData.vimeoUrl || "",
        videoType: featData.vimeoUrl ? "vimeo" : "local",
        videoSrc: featData.videoSrc,
        posterImage: featData.posterImage
      });
    });

    featuredCard.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        featuredCard.click();
      }
    });
  }

  // Trigger for Mugen Studio Case Study
  const caseStudyTrigger = document.getElementById("caseStudyTrigger");
  if (caseStudyTrigger) {
    caseStudyTrigger.addEventListener("click", () => {
      const csData = (typeof PORTFOLIO_DATA !== "undefined" && PORTFOLIO_DATA.caseStudy) ? PORTFOLIO_DATA.caseStudy : null;
      window.cinemaPlayer.open({
        number: csData?.badge || "03 / CASE STUDY",
        title: csData?.title || "MUGEN STUDIO",
        role: csData?.category || "Visual Film & Sound Direction",
        software: "ACES Color & Timeline Assembly",
        vimeoUrl: csData?.vimeoUrl || "",
        videoType: csData?.vimeoUrl ? "vimeo" : "local",
        videoSrc: csData?.videoSrc || "assets/videos/showcase_preview.mp4",
        posterImage: csData?.posterImage || "assets/images/casestudy_grade_split.jpg"
      });
    });

    caseStudyTrigger.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        caseStudyTrigger.click();
      }
    });
  }

  // Trigger for Selected Works Cards
  const projectCards = document.querySelectorAll(".project[data-project-id]");
  projectCards.forEach(card => {
    const projId = card.getAttribute("data-project-id");
    
    function handleOpen() {
      let projectData = null;
      if (typeof PORTFOLIO_DATA !== "undefined" && PORTFOLIO_DATA.selectedWorks) {
        projectData = PORTFOLIO_DATA.selectedWorks.find(p => p.id === projId);
      }

      if (!projectData) {
        // Fallback info from DOM
        const title = card.querySelector("h3") ? card.querySelector("h3").textContent : "PROJECT";
        const num = card.querySelector(".project-number") ? card.querySelector(".project-number").textContent : `[${projId}]`;
        const img = card.querySelector("img") ? card.querySelector("img").src : "";
        projectData = {
          number: num,
          title: title,
          role: "Video Editing & Colorist",
          software: "DaVinci Resolve Studio",
          vimeoUrl: "",
          videoType: "local",
          videoSrc: "assets/videos/showcase_preview.mp4",
          posterImage: img
        };
      }

      window.cinemaPlayer.open({
        ...projectData,
        videoType: projectData.vimeoUrl ? "vimeo" : "local"
      });
    }

    card.addEventListener("click", handleOpen);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleOpen();
      }
    });
  });

  // Trigger for Vertical Reels
  const reelCards = document.querySelectorAll(".reels-preview-card[data-reel-id]");
  reelCards.forEach((card, idx) => {
    const reelId = card.getAttribute("data-reel-id");
    const videoSrc = `assets/videos/${reelId}.mp4`;
    const num = `REEL / 0${idx + 1}`;

    function handleReelOpen() {
      const reelData = (typeof PORTFOLIO_DATA !== "undefined" && PORTFOLIO_DATA.reelsSection?.items)
        ? PORTFOLIO_DATA.reelsSection.items.find(r => r.id === reelId)
        : null;

      window.cinemaPlayer.open({
        number: num,
        title: reelData?.title || `CREATOR REEL 0${idx + 1}`,
        role: "9:16 Vertical Storytelling & Pacing",
        software: "Premiere Pro / After Effects",
        vimeoUrl: reelData?.vimeoUrl || "",
        videoType: reelData?.vimeoUrl ? "vimeo" : "local",
        videoSrc: reelData?.videoSrc || videoSrc,
        posterImage: "assets/images/project_creator_reel.jpg",
        isVertical: true
      });
    }

    card.addEventListener("click", handleReelOpen);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleReelOpen();
      }
    });
  });
}

/**
 * 4. Mobile Navigation Drawer
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

  // Close when clicking any nav item
  if (drawer) {
    drawer.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", closeMenu);
    });
  }

  // Close on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && document.body.classList.contains("menu-open")) {
      closeMenu();
    }
  });
}

/**
 * 5. Email Copy Pill & Toast Notification
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
 * 6. Smooth Scroll with fixed navbar offset
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 70;
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
