/**
 * =======================================================================
 * HARINDER'S CINEMATIC PORTFOLIO - MASTER SCROLL TIMELINE ENGINE
 * =======================================================================
 * Built with GSAP & ScrollTrigger.
 * Every major section is a PINNED SCROLL SCENE where:
 * 
 *     SCROLL POSITION = ANIMATION TIMELINE
 *     scrub: true (Scrubbing forward = advances, Scrubbing backward = reverses)
 * 
 * 11 INDEPENDENT PINNED SCENES:
 * 01 — Hero (0% to 100% continuous scrub)
 * 02 — Identity (4 evolving typographic states)
 * 03 — Featured Project (Expanding cinematic film)
 * 04 — Project Morph (Project 01 morphs into Project 02 while pinned)
 * 05 — Instagram (@harinder.mp4 3D vertical reel carousel)
 * 06 — Cinematic Essays (Dynamic anamorphic slit/clip-path expansion)
 * 07 — Photography (Multi-directional expanding photo story)
 * 08 — About (Progressive word build: I EDIT IMAGES INTO EXPERIENCES)
 * 09 — Capabilities (One dominant discipline transforms into the next)
 * 10 — Process (Vertical scroll drives horizontal stage & focus)
 * 11 — Contact (Progressive reveal of final film statement + HIRE ME NOW)
 */

(function () {
  // Register ScrollTrigger plugin
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  } else {
    console.error("GSAP or ScrollTrigger not loaded!");
    return;
  }

  window.addEventListener("DOMContentLoaded", () => {
    initScrollEngine();
  });

  function initScrollEngine() {
    initScene01Hero();
    initScene02Identity();
    initScene03FeaturedProject();
    initScene04ProjectMorph();
    initScene05InstagramReels();
    initScene06CinematicEssays();
    initScene07Photography();
    initScene08AboutWordBuild();
    initScene09Capabilities();
    initScene10ProcessHorizontal();
    initScene11Contact();
  }

  // =====================================================================
  // SCENE 01 — HERO
  // =====================================================================
  function initScene01Hero() {
    const trigger = document.getElementById("scene-hero");
    const pinStage = trigger?.querySelector(".scene-pinned-stage");
    if (!trigger || !pinStage) return;

    const portrait = pinStage.querySelector(".hero-portrait-frame");
    const headlineWords = pinStage.querySelectorAll(".hero-headline-word");
    const supporting = pinStage.querySelector(".hero-supporting-block");
    const ctaGroup = pinStage.querySelector(".hero-cta-group");
    const ambientGlow = pinStage.querySelector(".hero-ambient-orb");
    const transitionHint = pinStage.querySelector(".hero-transition-hint");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger,
        start: "top top",
        end: "bottom bottom",
        pin: pinStage,
        scrub: 0.5,
        anticipatePin: 1
      }
    });

    // 0% -> 20%: Typography starts moving and separating
    tl.to(headlineWords[0], { x: -80, opacity: 0.9, ease: "none" }, 0)
      .to(headlineWords[1], { scale: 1.15, color: "#ff5d22", textShadow: "0 0 40px rgba(255,93,34,0.6)", ease: "none" }, 0)
      .to(headlineWords[2], { x: 80, opacity: 0.9, ease: "none" }, 0)
      .to(ambientGlow, { scale: 1.4, opacity: 0.4, ease: "none" }, 0);

    // 20% -> 40%: Main image changes scale and crop
    tl.to(portrait, {
      scale: 1.22,
      borderRadius: "8px",
      borderColor: "rgba(255,93,34,0.6)",
      boxShadow: "0 25px 80px rgba(0,0,0,0.95), 0 0 60px rgba(255,93,34,0.35)",
      ease: "none"
    }, 0.2);

    // 40% -> 60%: Statement moves & transforms
    tl.to(supporting, {
      y: -60,
      scale: 1.05,
      color: "#ffffff",
      ease: "none"
    }, 0.4);

    // 60% -> 80%: CTAs and metadata transition
    tl.to(ctaGroup, {
      opacity: 0.3,
      y: 30,
      ease: "none"
    }, 0.6)
    .to(headlineWords, {
      letterSpacing: "0.15em",
      opacity: 0.4,
      ease: "none"
    }, 0.6);

    // 80% -> 100%: Visually transforms toward next scene
    tl.to(portrait, {
      scale: 1.5,
      opacity: 0.15,
      filter: "blur(12px)",
      ease: "none"
    }, 0.8)
    .to(supporting, {
      opacity: 0,
      y: -100,
      ease: "none"
    }, 0.8)
    .to(transitionHint, {
      opacity: 1,
      y: 0,
      ease: "none"
    }, 0.85);
  }

  // =====================================================================
  // SCENE 02 — IDENTITY (4 EVOLVING TYPOGRAPHIC STATES)
  // =====================================================================
  function initScene02Identity() {
    const trigger = document.getElementById("scene-identity");
    const pinStage = trigger?.querySelector(".scene-pinned-stage");
    if (!trigger || !pinStage) return;

    const state1 = pinStage.querySelector(".identity-state-1");
    const state2 = pinStage.querySelector(".identity-state-2");
    const state3 = pinStage.querySelector(".identity-state-3");
    const state4 = pinStage.querySelector(".identity-state-4");
    const progressBar = pinStage.querySelector(".identity-progress-bar-fill");
    const badgeText = pinStage.querySelector(".identity-stage-badge");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger,
        start: "top top",
        end: "bottom bottom",
        pin: pinStage,
        scrub: 0.5,
        anticipatePin: 1
      }
    });

    // Initial: State 1 is visible
    gsap.set(state1, { opacity: 1, scale: 1, y: 0 });
    gsap.set([state2, state3, state4], { opacity: 0, scale: 0.9, y: 60 });

    // Progress bar fill across the entire section
    tl.to(progressBar, { width: "100%", ease: "none" }, 0);

    // Transition State 1 -> State 2 (VIDEO EDITOR + FILMMAKER)
    tl.to(state1, { opacity: 0, y: -80, scale: 1.08, ease: "none" }, 0.2)
      .to(state2, { opacity: 1, y: 0, scale: 1, ease: "none" }, 0.25)
      .call(() => { if (badgeText) badgeText.textContent = "02 / FILMMAKER"; }, null, 0.25);

    // Transition State 2 -> State 3 (FILMMAKER + PHOTO EDITOR)
    tl.to(state2, { opacity: 0, y: -80, scale: 1.08, ease: "none" }, 0.5)
      .to(state3, { opacity: 1, y: 0, scale: 1, ease: "none" }, 0.55)
      .call(() => { if (badgeText) badgeText.textContent = "03 / PHOTO EDITOR"; }, null, 0.55);

    // Transition State 3 -> State 4 (VISUAL STORYTELLER)
    tl.to(state3, { opacity: 0, y: -80, scale: 1.08, ease: "none" }, 0.75)
      .to(state4, { opacity: 1, y: 0, scale: 1.15, ease: "none" }, 0.8)
      .call(() => { if (badgeText) badgeText.textContent = "04 / VISUAL STORYTELLER"; }, null, 0.8);
  }

  // =====================================================================
  // SCENE 03 — FEATURED PROJECT (EXPANDING ORANGE FILM)
  // =====================================================================
  function initScene03FeaturedProject() {
    const trigger = document.getElementById("scene-featured");
    const pinStage = trigger?.querySelector(".scene-pinned-stage");
    if (!trigger || !pinStage) return;

    const card = pinStage.querySelector(".featured-scrub-card");
    const headerOverlay = pinStage.querySelector(".featured-scrub-header");
    const metaRow = pinStage.querySelector(".featured-scrub-meta");
    const desc = pinStage.querySelector(".featured-scrub-desc");
    const ambientBack = pinStage.querySelector(".featured-ambient-back");
    const playPill = pinStage.querySelector(".featured-scrub-play");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger,
        start: "top top",
        end: "bottom bottom",
        pin: pinStage,
        scrub: 0.4,
        anticipatePin: 1
      }
    });

    // 1. Starts small & centered, expands to dominant viewport size
    tl.fromTo(card, {
      scale: 0.72,
      width: "60vw",
      borderRadius: "28px",
      boxShadow: "0 20px 60px rgba(0,0,0,0.8)"
    }, {
      scale: 1.12,
      width: "94vw",
      borderRadius: "4px",
      boxShadow: "0 40px 140px rgba(0,0,0,0.98), 0 0 80px rgba(255,93,34,0.45)",
      ease: "none"
    }, 0);

    // 2. Background transforms
    tl.to(ambientBack, {
      opacity: 0.8,
      scale: 1.3,
      ease: "none"
    }, 0);

    // 3. Title & description move gracefully into cinema position
    tl.to(headerOverlay, {
      y: -30,
      scale: 0.9,
      ease: "none"
    }, 0.2);

    tl.fromTo(desc, { opacity: 0, y: 20 }, { opacity: 1, y: 0, ease: "none" }, 0.3)
      .fromTo(metaRow, { opacity: 0, y: 20 }, { opacity: 1, y: 0, ease: "none" }, 0.4)
      .fromTo(playPill, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, ease: "none" }, 0.5);

    // Final exit transition as user finishes scrub
    tl.to([headerOverlay, desc, metaRow], {
      opacity: 0.2,
      y: -40,
      ease: "none"
    }, 0.85);
  }

  // =====================================================================
  // SCENE 04 — PROJECT MORPH (PROJECT 01 -> PROJECT 02 WHILE PINNED)
  // =====================================================================
  function initScene04ProjectMorph() {
    const trigger = document.getElementById("scene-morph");
    const pinStage = trigger?.querySelector(".scene-pinned-stage");
    if (!trigger || !pinStage) return;

    const proj1 = pinStage.querySelector(".morph-proj-1");
    const proj2 = pinStage.querySelector(".morph-proj-2");
    const title1 = pinStage.querySelector(".morph-title-1");
    const title2 = pinStage.querySelector(".morph-title-2");
    const indicator = pinStage.querySelector(".morph-indicator");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger,
        start: "top top",
        end: "bottom bottom",
        pin: pinStage,
        scrub: 0.5,
        anticipatePin: 1
      }
    });

    // Initial state: Proj 1 dominant, Proj 2 offscreen right
    gsap.set(proj1, { xPercent: 0, scale: 1, opacity: 1 });
    gsap.set(proj2, { xPercent: 120, scale: 0.85, opacity: 0 });
    gsap.set(title1, { opacity: 1, y: 0 });
    gsap.set(title2, { opacity: 0, y: 40 });

    // Midpoint: Proj 1 scales & slides away left, title 1 fades
    tl.to(proj1, {
      xPercent: -80,
      scale: 0.75,
      opacity: 0.2,
      borderRadius: "20px",
      ease: "none"
    }, 0)
    .to(title1, {
      opacity: 0,
      y: -40,
      ease: "none"
    }, 0)
    // Proj 2 enters from right, scales up and takes over dominant center
    .to(proj2, {
      xPercent: 0,
      scale: 1,
      opacity: 1,
      ease: "none"
    }, 0.3)
    .to(title2, {
      opacity: 1,
      y: 0,
      ease: "none"
    }, 0.4)
    .call(() => {
      if (indicator) indicator.textContent = "[PROJECT 02 / BRAND FILM]";
    }, null, 0.45);
  }

  // =====================================================================
  // SCENE 05 — INSTAGRAM (@harinder.mp4 3D VERTICAL REELS)
  // =====================================================================
  function initScene05InstagramReels() {
    const trigger = document.getElementById("scene-instagram");
    const pinStage = trigger?.querySelector(".scene-pinned-stage");
    if (!trigger || !pinStage) return;

    const reels = pinStage.querySelectorAll(".instagram-scrub-reel");
    const reelCounter = pinStage.querySelector(".reel-active-number");
    if (!reels.length) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger,
        start: "top top",
        end: "bottom bottom",
        pin: pinStage,
        scrub: 0.5,
        anticipatePin: 1
      }
    });

    // 4 Reels in 3D perspective space:
    // Initial: Reel 1 focused in center
    gsap.set(reels[0], { xPercent: 0, scale: 1.05, opacity: 1, rotateY: 0, zIndex: 10 });
    gsap.set(reels[1], { xPercent: 120, scale: 0.82, opacity: 0.4, rotateY: -18, zIndex: 5 });
    gsap.set(reels[2], { xPercent: 240, scale: 0.7, opacity: 0.2, rotateY: -25, zIndex: 2 });
    gsap.set(reels[3], { xPercent: 360, scale: 0.6, opacity: 0, rotateY: -30, zIndex: 1 });

    // Step 1: Reel 1 shifts left, Reel 2 centers
    tl.to(reels[0], { xPercent: -120, scale: 0.82, opacity: 0.4, rotateY: 18, zIndex: 5, ease: "none" }, 0.25)
      .to(reels[1], { xPercent: 0, scale: 1.05, opacity: 1, rotateY: 0, zIndex: 10, ease: "none" }, 0.25)
      .to(reels[2], { xPercent: 120, scale: 0.82, opacity: 0.4, rotateY: -18, zIndex: 5, ease: "none" }, 0.25)
      .call(() => { if (reelCounter) reelCounter.textContent = "02 / 04"; }, null, 0.25);

    // Step 2: Reel 2 shifts left, Reel 3 centers
    tl.to(reels[1], { xPercent: -120, scale: 0.82, opacity: 0.4, rotateY: 18, zIndex: 5, ease: "none" }, 0.55)
      .to(reels[2], { xPercent: 0, scale: 1.05, opacity: 1, rotateY: 0, zIndex: 10, ease: "none" }, 0.55)
      .to(reels[3], { xPercent: 120, scale: 0.82, opacity: 0.4, rotateY: -18, zIndex: 5, ease: "none" }, 0.55)
      .call(() => { if (reelCounter) reelCounter.textContent = "03 / 04"; }, null, 0.55);

    // Step 3: Reel 3 shifts left, Reel 4 centers
    tl.to(reels[2], { xPercent: -120, scale: 0.82, opacity: 0.4, rotateY: 18, zIndex: 5, ease: "none" }, 0.85)
      .to(reels[3], { xPercent: 0, scale: 1.05, opacity: 1, rotateY: 0, zIndex: 10, ease: "none" }, 0.85)
      .call(() => { if (reelCounter) reelCounter.textContent = "04 / 04"; }, null, 0.85);
  }

  // =====================================================================
  // SCENE 06 — CINEMATIC ESSAYS (ANAMORPHIC MASK EXPANSION)
  // =====================================================================
  function initScene06CinematicEssays() {
    const trigger = document.getElementById("scene-essays");
    const pinStage = trigger?.querySelector(".scene-pinned-stage");
    if (!trigger || !pinStage) return;

    const media = pinStage.querySelector(".essay-media-container");
    const title = pinStage.querySelector(".essay-main-title");
    const meta = pinStage.querySelector(".essay-meta-block");
    const quote = pinStage.querySelector(".essay-quote");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger,
        start: "top top",
        end: "bottom bottom",
        pin: pinStage,
        scrub: 0.5,
        anticipatePin: 1
      }
    });

    // Start: Narrow cropped slit (inset 40% top and bottom)
    tl.fromTo(media, {
      clipPath: "inset(38% 18% 38% 18%)",
      scale: 1.15
    }, {
      clipPath: "inset(0% 0% 0% 0%)",
      scale: 1,
      ease: "none"
    }, 0);

    // Title and quotes enter as the frame opens up
    tl.fromTo(title, { opacity: 0, y: 50 }, { opacity: 1, y: 0, ease: "none" }, 0.3)
      .fromTo(meta, { opacity: 0, y: 30 }, { opacity: 1, y: 0, ease: "none" }, 0.4)
      .fromTo(quote, { opacity: 0, x: -30 }, { opacity: 1, x: 0, ease: "none" }, 0.55);

    // Pan across camera focal plane
    tl.to(media.querySelector("img"), {
      scale: 1.12,
      xPercent: -5,
      ease: "none"
    }, 0.5);

    // Graceful exit
    tl.to([title, meta, quote], {
      opacity: 0,
      y: -40,
      ease: "none"
    }, 0.85);
  }

  // =====================================================================
  // SCENE 07 — PHOTOGRAPHY (MULTI-DIRECTIONAL EXPANDING STORY)
  // =====================================================================
  function initScene07Photography() {
    const trigger = document.getElementById("scene-photography");
    const pinStage = trigger?.querySelector(".scene-pinned-stage");
    if (!trigger || !pinStage) return;

    const photo1 = pinStage.querySelector(".photo-card-1");
    const photo2 = pinStage.querySelector(".photo-card-2");
    const photo3 = pinStage.querySelector(".photo-card-3");
    const infoText = pinStage.querySelector(".photo-editorial-info");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger,
        start: "top top",
        end: "bottom bottom",
        pin: pinStage,
        scrub: 0.5,
        anticipatePin: 1
      }
    });

    // Photo 1: starts centered small -> expands -> dominates -> exits top-left
    tl.fromTo(photo1, {
      scale: 0.6,
      opacity: 0,
      y: 80
    }, {
      scale: 1,
      opacity: 1,
      y: 0,
      ease: "none"
    }, 0)
    .to(photo1, {
      xPercent: -70,
      yPercent: -30,
      scale: 0.75,
      opacity: 0.35,
      ease: "none"
    }, 0.3);

    // Photo 2: enters from bottom-right -> expands -> dominates center
    tl.fromTo(photo2, {
      xPercent: 60,
      yPercent: 80,
      scale: 0.7,
      opacity: 0
    }, {
      xPercent: 0,
      yPercent: 0,
      scale: 1.05,
      opacity: 1,
      ease: "none"
    }, 0.25)
    .to(photo2, {
      xPercent: 70,
      yPercent: -30,
      scale: 0.75,
      opacity: 0.35,
      ease: "none"
    }, 0.6);

    // Photo 3: enters with slight rotation and scales into full focus
    tl.fromTo(photo3, {
      yPercent: 100,
      scale: 0.8,
      rotation: 4,
      opacity: 0
    }, {
      yPercent: 0,
      scale: 1,
      rotation: 0,
      opacity: 1,
      ease: "none"
    }, 0.55);

    // Editorial info bar changes metadata
    tl.to(infoText, {
      opacity: 1,
      ease: "none"
    }, 0.1);
  }

  // =====================================================================
  // SCENE 08 — ABOUT (TYPOGRAPHIC WORD BUILD)
  // I EDIT -> I EDIT IMAGES -> I EDIT IMAGES INTO -> I EDIT IMAGES INTO EXPERIENCES.
  // =====================================================================
  function initScene08AboutWordBuild() {
    const trigger = document.getElementById("scene-about");
    const pinStage = trigger?.querySelector(".scene-pinned-stage");
    if (!trigger || !pinStage) return;

    const word1 = pinStage.querySelector(".about-word-1"); // "I EDIT"
    const word2 = pinStage.querySelector(".about-word-2"); // "IMAGES"
    const word3 = pinStage.querySelector(".about-word-3"); // "INTO"
    const word4 = pinStage.querySelector(".about-word-4"); // "EXPERIENCES."
    const supporting = pinStage.querySelector(".about-supporting-card");
    const portraitPill = pinStage.querySelector(".about-portrait-pill");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger,
        start: "top top",
        end: "bottom bottom",
        pin: pinStage,
        scrub: 0.5,
        anticipatePin: 1
      }
    });

    // 0%: "I EDIT" is prominent
    gsap.set(word1, { opacity: 1, y: 0 });
    gsap.set([word2, word3, word4], { opacity: 0, y: 30 });
    gsap.set([supporting, portraitPill], { opacity: 0, y: 50 });

    // Step 1: "IMAGES" reveals
    tl.to(word2, { opacity: 1, y: 0, color: "#ffffff", ease: "none" }, 0.25);

    // Step 2: "INTO" reveals
    tl.to(word3, { opacity: 1, y: 0, color: "#9a9aa0", ease: "none" }, 0.45);

    // Step 3: "EXPERIENCES." reveals in burnt orange with atmospheric glow
    tl.to(word4, {
      opacity: 1,
      y: 0,
      color: "#ff5d22",
      textShadow: "0 0 50px rgba(255,93,34,0.6)",
      ease: "none"
    }, 0.65);

    // Step 4: Supporting paragraph and portrait card slide into view
    tl.to(supporting, { opacity: 1, y: 0, ease: "none" }, 0.8)
      .to(portraitPill, { opacity: 1, y: 0, ease: "none" }, 0.85);
  }

  // =====================================================================
  // SCENE 09 — CAPABILITIES (ONE DOMINANT DISCIPLINE AT A TIME)
  // =====================================================================
  function initScene09Capabilities() {
    const trigger = document.getElementById("scene-capabilities");
    const pinStage = trigger?.querySelector(".scene-pinned-stage");
    if (!trigger || !pinStage) return;

    const cards = pinStage.querySelectorAll(".capability-slide");
    const activeBadge = pinStage.querySelector(".cap-active-badge");
    if (!cards.length) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger,
        start: "top top",
        end: "bottom bottom",
        pin: pinStage,
        scrub: 0.5,
        anticipatePin: 1
      }
    });

    // Initial: Card 0 dominant
    gsap.set(cards[0], { opacity: 1, scale: 1, y: 0 });
    for (let i = 1; i < cards.length; i++) {
      gsap.set(cards[i], { opacity: 0, scale: 0.85, y: 100 });
    }

    // Step through each capability
    // 0: VIDEO EDITING -> 1: FILMMAKING -> 2: PHOTO EDITING -> 3: COLOR -> 4: VISUAL STORYTELLING
    const stepSize = 1 / (cards.length - 1);

    cards.forEach((card, idx) => {
      if (idx === 0) return;
      const prevCard = cards[idx - 1];
      const startT = (idx - 1) * stepSize;
      const endT = idx * stepSize;

      tl.to(prevCard, { opacity: 0, y: -80, scale: 1.1, ease: "none" }, startT + 0.05)
        .to(card, { opacity: 1, y: 0, scale: 1, ease: "none" }, endT - 0.05)
        .call(() => {
          if (activeBadge) {
            const names = ["VIDEO EDITING", "FILMMAKING", "PHOTO EDITING", "COLOR", "VISUAL STORYTELLING"];
            activeBadge.textContent = `[0${idx + 1} / ${names[idx]}]`;
          }
        }, null, endT);
    });
  }

  // =====================================================================
  // SCENE 10 — PROCESS (VERTICAL SCROLL DRIVES HORIZONTAL TIMELINE)
  // =====================================================================
  function initScene10ProcessHorizontal() {
    const trigger = document.getElementById("scene-process");
    const pinStage = trigger?.querySelector(".scene-pinned-stage");
    if (!trigger || !pinStage) return;

    const track = pinStage.querySelector(".process-horizontal-track");
    const cards = pinStage.querySelectorAll(".process-step-slide");
    const progressBar = pinStage.querySelector(".process-line-progress");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger,
        start: "top top",
        end: "bottom bottom",
        pin: pinStage,
        scrub: 0.5,
        anticipatePin: 1
      }
    });

    // Calculate total horizontal travel
    // Shift track left as vertical scroll progresses
    tl.to(track, {
      xPercent: -62,
      ease: "none"
    }, 0);

    tl.to(progressBar, {
      width: "100%",
      ease: "none"
    }, 0);

    // Active stage highlighting
    cards.forEach((card, i) => {
      const pos = i / (cards.length - 1);
      tl.to(card, {
        borderColor: "rgba(255,93,34,0.6)",
        scale: 1.04,
        boxShadow: "0 20px 50px rgba(0,0,0,0.8), 0 0 40px rgba(255,93,34,0.25)",
        ease: "none"
      }, Math.max(0, pos - 0.15))
      .to(card, {
        borderColor: "rgba(255,255,255,0.08)",
        scale: 1,
        boxShadow: "none",
        ease: "none"
      }, Math.min(1, pos + 0.2));
    });
  }

  // =====================================================================
  // SCENE 11 — CONTACT (PROGRESSIVE TEXT REVEAL + HIRE ME NOW)
  // =====================================================================
  function initScene11Contact() {
    const trigger = document.getElementById("scene-contact");
    const pinStage = trigger?.querySelector(".scene-pinned-stage");
    if (!trigger || !pinStage) return;

    const lines = pinStage.querySelectorAll(".contact-reveal-line");
    const ctaBox = pinStage.querySelector(".contact-cta-wrapper");
    const ambientBack = pinStage.querySelector(".contact-ambient-light");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger,
        start: "top top",
        end: "bottom bottom",
        pin: pinStage,
        scrub: 0.5,
        anticipatePin: 1
      }
    });

    // Progressive line-by-line reveal of:
    // LET'S MAKE
    // SOMETHING
    // WORTH REMEMBERING.
    tl.fromTo(lines[0], { opacity: 0.15, y: 30 }, { opacity: 1, y: 0, ease: "none" }, 0.1)
      .fromTo(lines[1], { opacity: 0.15, y: 30 }, { opacity: 1, y: 0, ease: "none" }, 0.3)
      .fromTo(lines[2], { opacity: 0.15, y: 30 }, {
        opacity: 1,
        y: 0,
        color: "#ff5d22",
        textShadow: "0 0 60px rgba(255,93,34,0.5)",
        ease: "none"
      }, 0.5);

    // Background light glows
    tl.to(ambientBack, {
      opacity: 0.8,
      scale: 1.4,
      ease: "none"
    }, 0.4);

    // Final CTA: "HIRE ME NOW" pops up
    tl.fromTo(ctaBox, {
      opacity: 0,
      scale: 0.85,
      y: 50
    }, {
      opacity: 1,
      scale: 1,
      y: 0,
      ease: "none"
    }, 0.7);
  }

  window.initScrollEngine = initScrollEngine;
})();
