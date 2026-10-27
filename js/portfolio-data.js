/**
 * =======================================================================
 * HARINDER SINGH — PORTFOLIO DATA & PROJECT REPOSITORY
 * =======================================================================
 * Genuine projects, actual local media assets, and verified studio credits.
 */

const PORTFOLIO_DATA = {
  // Brand & Identity
  personal: {
    brandName: "HARINDER SINGH",
    studioTitle: "INDEPENDENT FILM & POST-PRODUCTION",
    name: "Harinder Singh",
    role: "Filmmaker & Video Editor",
    heroHi: "“Hi, I’m Harinder.”",
    heroName: "HARINDER SINGH",
    heroTaglineDisplay: "SHORT-FORM VIDEO EDITING",
    heroTaglineEditorial: "THAT ACTUALLY GETS RESULTS.",
    heroSupporting: "Rhythmic pacing, retention-driven hooks, and cinematic ACES colour grading for creators & ambitious brands worldwide.",
    email: "iamharinders@gmail.com",
    instagramHandle: "@harinder.mp4",
    instagramUrl: "https://www.instagram.com/harinder.mp4/",
    location: "India / Available for remote post-production worldwide",
    statusBadge: "OPEN FOR COMMISSIONS · Q4 2026"
  },

  // 01 — Featured Showcase Cut (Cinematic Expansion)
  featuredVideo: {
    badge: "01 / FEATURED CINEMATIC CUT",
    title: "FEATURED FILM",
    category: "Edit · ACES Grade · Master Sound",
    summary: "A visual-led cut built around deliberate pacing, tactile sound design, and atmospheric lighting.",
    specs: "16:9 4K · COLOR GRADE · MASTER SOUND DESIGN",
    posterImage: "assets/images/featured_film_poster.jpg",
    videoSrc: "assets/videos/featured_film.mp4",
    isVertical: false
  },

  // 02 — Selected Works (Landscape & Editorial Projects)
  recentProjects: [
    {
      id: "01",
      number: "01",
      title: "CREATOR REEL",
      category: "Short-Form / Motion",
      description: "Fast cuts, clean sound design and a tighter rhythm built for vertical engagement.",
      posterImage: "assets/images/project_creator_reel.jpg",
      videoSrc: "assets/videos/reel_01.mp4",
      isVertical: true
    },
    {
      id: "02",
      number: "02",
      title: "BRAND FILM",
      category: "Commercial / Colour",
      description: "A deliberate cut focused on macro product detail, atmosphere, and cinematic color.",
      posterImage: "assets/images/project_brand_film.jpg",
      videoSrc: "assets/videos/featured_film.mp4",
      isVertical: false
    },
    {
      id: "03",
      number: "03",
      title: "FASHION FILM",
      category: "Cinematic / Rhythmic Cut",
      description: "Music-led pacing with an editorial finish and controlled frame movement.",
      posterImage: "assets/images/project_fashion_film.jpg",
      videoSrc: "assets/videos/reel_02.mp4",
      isVertical: true
    },
    {
      id: "04",
      number: "04",
      title: "SOCIAL CAMPAIGN",
      category: "Reels / Typography",
      description: "Multiple aspect ratios built around hooks, pacing and platform behaviour.",
      posterImage: "assets/images/casestudy_grade_split.jpg",
      videoSrc: "assets/videos/reel_03.mp4",
      isVertical: true
    },
    {
      id: "05",
      number: "05",
      title: "ANAMORPHIC ESSAY",
      category: "Film / Cinematography",
      description: "2.39:1 widescreen narrative assembly, natural skin tones, and rich acoustic texture.",
      posterImage: "assets/images/essay_anamorphic.jpg",
      videoSrc: "assets/videos/featured_film.mp4",
      isVertical: false
    },
    {
      id: "06",
      number: "06",
      title: "MOTION REEL",
      category: "VFX / Kinetic Type",
      description: "Bespoke kinetic titles, UI graphics, and dynamic match cuts.",
      posterImage: "assets/images/project_motion_reel.jpg",
      videoSrc: "assets/videos/reel_04.mp4",
      isVertical: true
    }
  ],

  // 03 — 9:16 Vertical Short-Form Suite (All Local MP4s)
  reels: [
    {
      id: "reel_01",
      number: "01",
      title: "CREATOR TALKING HEAD",
      category: "9:16 Vertical · Sound & Pacing",
      posterImage: "assets/images/reel_01_poster.jpg",
      videoSrc: "assets/videos/reel_01.mp4",
      isVertical: true
    },
    {
      id: "reel_02",
      number: "02",
      title: "STREET STYLE & SNEAKERS",
      category: "9:16 Vertical · Rhythm & Motion",
      posterImage: "assets/images/reel_02_poster.jpg",
      videoSrc: "assets/videos/reel_02.mp4",
      isVertical: true
    },
    {
      id: "reel_03",
      number: "03",
      title: "VALENTINE PERFUME AD",
      category: "9:16 Vertical · Cinematic Colour",
      posterImage: "assets/images/reel_03_poster.jpg",
      videoSrc: "assets/videos/reel_03.mp4",
      isVertical: true
    },
    {
      id: "reel_04",
      number: "04",
      title: "WARM ATMOSPHERIC CUT",
      category: "9:16 Vertical · Narrative & Mood",
      posterImage: "assets/images/reel_04_poster.jpg",
      videoSrc: "assets/videos/reel_04.mp4",
      isVertical: true
    }
  ],

  // 04 — Editorial Disciplines / Services
  services: [
    {
      id: "01",
      number: "01",
      title: "Short-Form Video Editing",
      tag: "CORE SPECIALTY",
      formats: "FORMATS: 9:16 VERTICAL · REELS · TIKTOKS · SHORTS",
      description: "Hooks, pacing, dynamic captions and sound design for vertical content that stops the scroll and holds retention across Instagram, YouTube Shorts and TikTok.",
      points: [
        "Hook architecture & opening 3-second hold",
        "Dynamic subtitle timing & kinetic emphasis",
        "Sub-bass transient hits & bespoke sound design"
      ]
    },
    {
      id: "02",
      number: "02",
      title: "Creator & Talking-Head",
      tag: "RETENTION & FLOW",
      formats: "FORMATS: 9:16 & 16:9 · YOUTUBE · PODCAST CLIPS",
      description: "Punchy pattern interrupts, seamless jump-cut smoothing, zoom dynamics, and visual punchlines tailored to individual creator personality and brand voice.",
      points: [
        "Dynamic pacing & natural breath cleanup",
        "Visual b-roll inserts & graphic callouts",
        "Attention-holding pattern interrupts"
      ]
    },
    {
      id: "03",
      number: "03",
      title: "Brand & Commercial Films",
      tag: "NARRATIVE AUTHORITY",
      formats: "FORMATS: 16:9 4K · COMMERCIALS · BRAND MANIFESTOS",
      description: "Product-focused cuts, visual rhythm and polished delivery designed to elevate brand authority, product desirability and cinematic storytelling.",
      points: [
        "Narrative arc & deliberate commercial pacing",
        "Product showcase timing & macro visual polish",
        "Multi-platform delivery (16:9, 1:1 & 4:5 crops)"
      ]
    },
    {
      id: "04",
      number: "04",
      title: "Motion Design & VFX",
      tag: "KINETIC TYPE",
      formats: "SOFTWARE: AFTER EFFECTS · PREMIERE PRO",
      description: "Kinetic typography, transitions and visual effects that add tactile energy, emphasize key ideas, and guide viewer gaze seamlessly through each frame.",
      points: [
        "Bespoke kinetic type & screen graphics",
        "Seamless frame-to-frame match cuts & whip transitions",
        "UI animations, asset tracking & clean graphics"
      ]
    },
    {
      id: "05",
      number: "05",
      title: "Colour Grading & Sound Finishing",
      tag: "ACES PIPELINE",
      formats: "WORKFLOW: DAVINCI RESOLVE STUDIO · MASTER AUDIO",
      description: "Colour finishing, audio detail and a consistent final look that gives every project the depth, texture and sub-bass weight of high-end cinema.",
      points: [
        "Film print emulation & ACES colour science",
        "Rich Foley, acoustic ambience & sub-bass impact",
        "Dialog cleanup, compression & loudness mastering"
      ]
    }
  ],

  // 05 — Production Workflow
  processSteps: [
    {
      step: "01",
      title: "Brief & References",
      description: "We align on your project goals, target audience, visual references, and turnaround schedule."
    },
    {
      step: "02",
      title: "Footage Review & Cut",
      description: "I review your raw footage, select the strongest takes, and lock in the narrative pacing."
    },
    {
      step: "03",
      title: "Motion, Grade & Sound",
      description: "Crafting scroll-stopping hooks, kinetic captions, sound design, and bespoke ACES colour grade."
    },
    {
      step: "04",
      title: "Master Platform Exports",
      description: "Final review pass and delivery of platform-ready exports (9:16, 16:9, or custom crops)."
    }
  ],

  // 06 — Authentic Collaborator Reviews
  reviews: [
    {
      id: "01",
      stars: 5,
      quote: "Working with Harinder was seamless from first brief to final delivery. His sense of timing, rhythm, and sound design elevated our content noticeably.",
      client: "CREATOR CLIENT",
      role: "Digital Creator / Verified Review"
    },
    {
      id: "02",
      stars: 5,
      quote: "Harinder takes raw footage and turns it into clean, high-retention edits without needing micromanagement. Fast turnaround and pristine quality every time.",
      client: "BRAND COLLABORATOR",
      role: "Brand Director / Commercial Client"
    },
    {
      id: "03",
      stars: 5,
      quote: "The combination of sharp cuts, dynamic captions, and cinematic colour finishing made our reels stand out instantly in the feed. Highly recommend.",
      client: "FOUNDER & PRODUCER",
      role: "Agency Lead / Video Producer"
    }
  ],

  // 07 — Contact Information
  contact: {
    title: "LET'S MAKE SOMETHING THAT MATTERS.",
    copy: "Got a project in mind? Send over your raw clips, a brief, or even just a reference video you like. We can figure out the rest together.",
    email: "iamharinders@gmail.com",
    instagram: "https://www.instagram.com/harinder.mp4/",
    scope: "SHORT-FORM · COMMERCIALS · CREATOR CONTENT · BRAND FILMS"
  }
};

if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
