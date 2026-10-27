/**
 * =======================================================================
 * HARINDER SINGH — INTERACTION, 3D CAROUSEL & MOTION CONTROLLER
 * =======================================================================
 * Faithfully executing:
 * 1. 3D Cylindrical Video Carousel (Physics-based rotation, drag/touch & ambient spin)
 * 2. FAQ Interactive Accordion
 * 3. Video Modal Triggers (Result Cards, Carousel Cards & Widescreen Film)
 * 4. Email Copy Pill & Toast Notification
 * 5. Scroll Reveals & Navigation Frosted State
 * 6. Mobile Drawer Navigation
 * 7. Smooth Anchor Scrolling
 */

document.addEventListener("DOMContentLoaded", () => {
  initNavbarScrollState();
  init3DCarousel();
  initFaqAccordion();
  initResultVideoTriggers();
  initEmailCopyToast();
  initRevealObserver();
  initMobileNavigation();
  initSmoothScroll();
});

/**
 * 1. Navigation Scroll State
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
 * 2. 3D Cylindrical Video Carousel
 * Calculates precise cylindrical coordinates for 12 video cards,
 * with continuous ambient rotation, mouse/touch drag physics, and click-to-play modal.
 */
function init3DCarousel() {
  const wrapper = document.getElementById("carouselWrapper");
  const stage = document.getElementById("carouselStage");
  if (!wrapper || !stage) return;

  const cards = Array.from(stage.querySelectorAll(".carousel-3d-card"));
  const count = cards.length;
  if (!count) return;

  const step = 360 / count;
  let currentAngle = 0;
  let targetAngle = 0;
  let isDragging = false;
  let startX = 0;
  let lastX = 0;
  let velocity = 0;
  let isHovered = false;
  let animFrameId = null;

  function getRadius() {
    const w = window.innerWidth;
    if (w < 540) return 300;
    if (w < 820) return 420;
    if (w < 1200) return 520;
    return 620;
  }

  function updateCards() {
    const radius = getRadius();
    cards.forEach((card, i) => {
      const a = (i * step + currentAngle) % 360;
      const rad = (a * Math.PI) / 180;
      const cosVal = Math.cos(rad);

      // Position along 3D cylinder
      card.style.transform = `rotateY(${a.toFixed(2)}deg) translateZ(${radius}px)`;

      // Depth hierarchy
      const zIndex = Math.round((cosVal + 1) * 100);
      card.style.zIndex = zIndex;

      // Realistic opacity dropoff for rear cards
      const opacity = cosVal > 0 ? (0.35 + 0.65 * Math.pow(cosVal, 1.2)) : 0.12;
      card.style.opacity = Math.max(0.1, opacity).toFixed(3);

      // Disable clicks on cards in the background
      card.style.pointerEvents = cosVal > 0.4 ? "auto" : "none";
    });
  }

  // Animation Loop
  function tick() {
    if (!isDragging) {
      if (!isHovered) {
        // Slow ambient rotation
        targetAngle += 0.15;
      }
      // Apply momentum
      targetAngle += velocity;
      velocity *= 0.92;
    }

    // Smooth Lerp
    currentAngle += (targetAngle - currentAngle) * 0.08;
    updateCards();
    animFrameId = requestAnimationFrame(tick);
  }

  // Drag / Touch Listeners
  wrapper.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.clientX;
    lastX = e.clientX;
    velocity = 0;
  });

  window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - lastX;
    velocity = deltaX * 0.18;
    targetAngle += deltaX * 0.22;
    lastX = e.clientX;
  });

  window.addEventListener("mouseup", () => {
    isDragging = false;
  });

  // Touch Support
  wrapper.addEventListener("touchstart", (e) => {
    if (e.touches.length !== 1) return;
    isDragging = true;
    startX = e.touches[0].clientX;
    lastX = e.touches[0].clientX;
    velocity = 0;
  }, { passive: true });

  window.addEventListener("touchmove", (e) => {
    if (!isDragging || e.touches.length !== 1) return;
    const clientX = e.touches[0].clientX;
    const deltaX = clientX - lastX;
    velocity = deltaX * 0.2;
    targetAngle += deltaX * 0.25;
    lastX = clientX;
  }, { passive: true });

  window.addEventListener("touchend", () => {
    isDragging = false;
  });

  // Hover Pause
  wrapper.addEventListener("mouseenter", () => { isHovered = true; });
  wrapper.addEventListener("mouseleave", () => { isHovered = false; });

  // Open Cinema Modal on Card Click
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const videoSrc = card.getAttribute("data-video-src");
      const title = card.getAttribute("data-title") || "SHORT-FORM REEL";
      const category = card.getAttribute("data-category") || "9:16 Vertical Edit";
      const poster = card.getAttribute("data-poster") || "";

      if (window.cinemaPlayer) {
        window.cinemaPlayer.open({
          title: title,
          category: category,
          videoSrc: videoSrc,
          posterImage: poster,
          isVertical: true
        });
      }
    });
  });

  // Start rotation
  tick();
  window.addEventListener("resize", updateCards, { passive: true });
}

/**
 * 3. FAQ Interactive Accordion
 */
function initFaqAccordion() {
  const items = document.querySelectorAll(".faq-item");
  if (!items.length) return;

  items.forEach((item) => {
    const btn = item.querySelector(".faq-question-btn");
    if (!btn) return;

    btn.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");

      // Optional: close other items for single-open accordion
      items.forEach((other) => {
        if (other !== item) other.classList.remove("is-open");
      });

      item.classList.toggle("is-open", !isOpen);
    });
  });
}

/**
 * 4. Result Video Triggers & Widescreen Film Card
 */
function initResultVideoTriggers() {
  const resultCards = document.querySelectorAll(".result-video-card, .widescreen-case-card");
  if (!resultCards.length) return;

  resultCards.forEach((card) => {
    card.addEventListener("click", () => {
      const videoSrc = card.getAttribute("data-video-src") || "assets/videos/featured_film.mp4";
      const title = card.getAttribute("data-title") || "PORTFOLIO WORK";
      const category = card.getAttribute("data-category") || "Video Edit & Colour";
      const isVertical = card.getAttribute("data-vertical") === "true";
      const poster = card.getAttribute("data-poster") || "";

      if (window.cinemaPlayer) {
        window.cinemaPlayer.open({
          title: title,
          category: category,
          videoSrc: videoSrc,
          posterImage: poster,
          isVertical: isVertical
        });
      }
    });

    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        card.click();
      }
    });
  });
}

/**
 * 5. Email Copy Toast
 */
function initEmailCopyToast() {
  const copyPills = document.querySelectorAll(".interactive-email-pill, #copyEmailBtn");
  const toast = document.getElementById("emailCopyToast");
  if (!copyPills.length || !toast) return;

  let timer = null;

  copyPills.forEach((pill) => {
    pill.addEventListener("click", (e) => {
      e.preventDefault();
      const email = pill.getAttribute("data-copy-text") || "iamharinders@gmail.com";

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(() => {
          showToast(`✓ Email copied to clipboard (${email})`);
        }).catch(() => {
          showToast(email);
        });
      } else {
        showToast(email);
      }
    });
  });

  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add("is-visible");
    clearTimeout(timer);
    timer = setTimeout(() => {
      toast.classList.remove("is-visible");
    }, 2800);
  }
}

/**
 * 6. Scroll Reveal Observer
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
 * 7. Mobile Navigation Drawer
 */
function initMobileNavigation() {
  const toggleBtn = document.getElementById("menuToggle");
  const drawer = document.getElementById("mobileNavDrawer");
  const closeBtn = document.getElementById("mobileDrawerClose");
  if (!toggleBtn || !drawer) return;

  function openDrawer() {
    drawer.classList.add("is-open");
    document.body.classList.add("menu-open");
    toggleBtn.setAttribute("aria-expanded", "true");
  }

  function closeDrawer() {
    drawer.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    toggleBtn.setAttribute("aria-expanded", "false");
  }

  toggleBtn.addEventListener("click", () => {
    if (drawer.classList.contains("is-open")) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);

  drawer.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeDrawer);
  });
}

/**
 * 8. Smooth Scrolling with Offset
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function(e) {
      const targetId = this.getAttribute("href");
      if (!targetId || targetId === "#") return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const navHeight = 72;
        const targetPos = targetEl.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({
          top: targetPos,
          behavior: "smooth"
        });
      }
    });
  });
}
