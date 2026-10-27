/**
 * =======================================================================
 * INTERACTIVE FEATURES & EDITORIAL ENHANCEMENTS
 * =======================================================================
 * - Interactive Before/After Color Grading Comparison Slider
 * - Mobile Menu Navigation Drawer
 * - One-click Email Clipboard Copy with Toast
 * - Ambient Sound / Unmute Toggles for Inline Videos
 * - Minimalist Scroll Reveal Observer
 */

document.addEventListener("DOMContentLoaded", () => {
  initGradeSlider();
  initMobileNav();
  initEmailCopy();
  initScrollReveals();
  initActiveNavSpy();
  initVideoAudioToggles();
});

/**
 * 1. INTERACTIVE COLOR GRADING BEFORE/AFTER SLIDER
 */
function initGradeSlider() {
  const container = document.getElementById("grade-comparison-container");
  const handle = document.getElementById("grade-slider-handle");
  const overlay = document.getElementById("grade-slider-overlay");

  if (!container || !handle || !overlay) return;

  let isDragging = false;

  function updateSlider(xPos) {
    const rect = container.getBoundingClientRect();
    let posX = xPos - rect.left;
    if (posX < 0) posX = 0;
    if (posX > rect.width) posX = rect.width;

    const percentage = (posX / rect.width) * 100;
    overlay.style.width = `${percentage}%`;
    handle.style.left = `${percentage}%`;
  }

  // Mouse Events
  container.addEventListener("mousedown", (e) => {
    isDragging = true;
    updateSlider(e.clientX);
  });

  window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    updateSlider(e.clientX);
  });

  window.addEventListener("mouseup", () => {
    isDragging = false;
  });

  // Touch Events
  container.addEventListener("touchstart", (e) => {
    isDragging = true;
    if (e.touches[0]) updateSlider(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    if (e.touches[0]) updateSlider(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener("touchend", () => {
    isDragging = false;
  });

  // Hover preview when moving mouse without drag
  container.addEventListener("mousemove", (e) => {
    if (isDragging) return;
    // Optional gentle snap or follow
  });
}

/**
 * 2. MOBILE NAVIGATION DRAWER
 */
function initMobileNav() {
  const toggleBtn = document.getElementById("nav-toggle-btn");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link, .mobile-hire-btn");

  if (!toggleBtn || !navMenu) return;

  function toggleNav() {
    const isOpen = navMenu.classList.toggle("is-open");
    toggleBtn.classList.toggle("is-active", isOpen);
    toggleBtn.setAttribute("aria-expanded", isOpen);
    document.body.classList.toggle("nav-locked", isOpen);
  }

  function closeNav() {
    navMenu.classList.remove("is-open");
    toggleBtn.classList.remove("is-active");
    toggleBtn.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-locked");
  }

  toggleBtn.addEventListener("click", toggleNav);

  navLinks.forEach((link) => {
    link.addEventListener("click", closeNav);
  });
}

/**
 * 3. COPY EMAIL TO CLIPBOARD WITH TOAST
 */
function initEmailCopy() {
  const copyBtns = document.querySelectorAll("[data-copy-email]");
  const toast = document.getElementById("toast-notification");

  if (!copyBtns.length) return;

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("is-visible");
    setTimeout(() => {
      toast.classList.remove("is-visible");
    }, 2800);
  }

  copyBtns.forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      e.preventDefault();
      const email = btn.getAttribute("data-email") || "iamharinders@gmail.com";
      try {
        await navigator.clipboard.writeText(email);
        showToast(`Copied ${email} to clipboard ✓`);
      } catch (err) {
        // Fallback for older browsers
        const textarea = document.createElement("textarea");
        textarea.value = email;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        showToast(`Copied ${email} to clipboard ✓`);
      }
    });
  });
}

/**
 * 4. MINIMALIST SCROLL REVEAL OBSERVER
 * Calm, controlled reveal of text blocks & editorial media
 */
function initScrollReveals() {
  const revealElements = document.querySelectorAll("[data-reveal]");

  if (!revealElements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -50px 0px"
  });

  revealElements.forEach((el) => observer.observe(el));
}

/**
 * 5. ACTIVE NAV LINK SPY
 */
function initActiveNavSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!sections.length || !navLinks.length) return;

  window.addEventListener("scroll", () => {
    let currentId = "";
    const scrollPos = window.scrollY + 200;

    sections.forEach((sec) => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      if (href === `#${currentId}`) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }, { passive: true });
}

/**
 * 6. SOUND & PLAY TOGGLES FOR INLINE VIDEOS
 */
function initVideoAudioToggles() {
  const toggleBtns = document.querySelectorAll("[data-toggle-sound]");

  toggleBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const parentContainer = btn.closest(".video-container");
      if (!parentContainer) return;
      const video = parentContainer.querySelector("video");
      if (!video) return;

      if (video.muted) {
        video.muted = false;
        btn.innerHTML = `
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          </svg>
          <span>Mute Audio</span>
        `;
      } else {
        video.muted = true;
        btn.innerHTML = `
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 5"></polygon>
            <line x1="23" y1="9" x2="17" y2="15"></line>
            <line x1="17" y1="9" x2="23" y2="15"></line>
          </svg>
          <span>Sound Off</span>
        `;
      }
    });
  });
}
