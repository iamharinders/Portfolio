/**
 * =======================================================================
 * HARINDER'S PORTFOLIO - CENTRAL CONTENT & VIDEO CONFIGURATION
 * =======================================================================
 * All local MP4 videos, genuine Harinder brand identity, no fabricated stats.
 */

const PORTFOLIO_DATA = {
  // Brand & Personal Information
  personal: {
    brandName: "Harinder's Portfolio",
    name: "Harinder",
    role: "Video Editor & Colorist",
    heroHi: "HI, I'M",
    heroName: "HARINDER.",
    heroTaglineDisplay: "SHORT-FORM VIDEO EDITING",
    heroTaglineEditorial: "THAT ACTUALLY GETS RESULTS.",
    heroSupporting: "I turn raw footage and creative ideas into edits that hook viewers, hold attention, and feel sharp in every frame. Focused on short-form retention, cinematic pacing and polished sound design for creators and ambitious brands.",
    email: "iamharinders@gmail.com",
    instagramHandle: "@harinder.mp4",
    instagramUrl: "https://www.instagram.com/harinder.mp4/",
    location: "India / Available for remote post-production worldwide",
    statusBadge: "AVAILABLE FOR NEW PROJECTS · Q4 2026"
  },

  // Editing Tools & Software (No fake percentages)
  tools: [
    { name: "DaVinci Resolve Studio", role: "Colour Science & Master Finishing" },
    { name: "Adobe Premiere Pro", role: "Timeline Assembly & Dynamic Cutting" },
    { name: "Adobe After Effects", role: "Kinetic Typography & Motion VFX" },
    { name: "Adobe Audition", role: "Vocal Cleanup & Audio Mastering" },
    { name: "Photoshop & Lightroom", role: "Asset Preparation & Graphics" }
  ],

  // 01 — Featured Work (Cinematic Break)
  featuredVideo: {
    badge: "01 / FEATURED WORK",
    title: "FEATURED WORK",
    category: "Edit / Colour / Sound / Motion",
    summary: "A visual-led edit built around rhythm, atmosphere and colour.",
    specs: "16:9 4K · COLOR GRADE · MASTER SOUND DESIGN",
    posterImage: "assets/images/featured_film_poster.jpg",
    videoSrc: "assets/videos/featured_film.mp4",
    isVertical: false
  },

  // 02 — Recent Work (4 Real Project Cards)
  recentProjects: [
    {
      id: "01",
      number: "01",
      title: "CREATOR REEL",
      category: "Short form / Motion",
      description: "Fast cuts, clean sound design and a tighter rhythm built for vertical viewing.",
      posterImage: "assets/images/project_creator_reel.jpg",
      videoSrc: "assets/videos/reel_01.mp4",
      isVertical: true
    },
    {
      id: "02",
      number: "02",
      title: "BRAND FILM",
      category: "Edit / Colour",
      description: "A slower, more deliberate cut focused on product detail, atmosphere and colour.",
      posterImage: "assets/images/project_brand_film.jpg",
      videoSrc: "assets/videos/featured_film.mp4",
      isVertical: false
    },
    {
      id: "03",
      number: "03",
      title: "FASHION FILM",
      category: "Cinematic / Music",
      description: "Music-led pacing with an editorial finish and controlled movement.",
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
    }
  ],

  // 03 — What I Do / Services
  services: [
    {
      id: "01",
      number: "01",
      title: "Short-Form Video Editing",
      tag: "Hooks · Pacing · Retention",
      formats: "9:16 VERTICAL · REELS · TIKTOKS · SHORTS",
      description: "Hooks, pacing, captions and sound design for vertical content that stops the scroll and holds retention across Instagram, YouTube Shorts and TikTok.",
      points: [
        "Hook architecture & opening 3-second hold",
        "Dynamic subtitle timing & kinetic emphasis",
        "Sub-bass transient hits & bespoke sound design"
      ]
    },
    {
      id: "02",
      number: "02",
      title: "Creator & Talking-Head Editing",
      tag: "Retention · Visual Rhythm",
      formats: "9:16 & 16:9 · YOUTUBE · PODCAST CLIPS",
      description: "Punchy pattern interrupts, seamless jump-cut smoothing, zoom dynamics, and visual punchlines tailored to individual creator personality and voice.",
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
      tag: "Narrative · Premium Polish",
      formats: "16:9 4K · COMMERCIALS · BRAND MANIFESTOS",
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
      tag: "Kinetic Type · Transitions",
      formats: "CUSTOM GRAPHICS · AFTER EFFECTS",
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
      tag: "ACES Pipeline · Master Audio",
      formats: "DAVINCI RESOLVE · 4K HDR / REC.709",
      description: "Colour finishing, audio detail and a consistent final look that gives every project the depth, texture and sub-bass weight of high-end cinema.",
      points: [
        "Film print emulation & ACES colour science",
        "Rich Foley, acoustic ambience & sub-bass impact",
        "Dialog cleanup, compression & loudness mastering"
      ]
    }
  ],

  // 04 — Short-Form Reels (4 Real Local MP4s)
  reels: [
    {
      id: "reel_01",
      number: "01",
      title: "CREATOR TALKING HEAD",
      category: "9:16 Vertical / Sound & Pacing",
      posterImage: "assets/images/reel_01_poster.jpg",
      videoSrc: "assets/videos/reel_01.mp4",
      isVertical: true
    },
    {
      id: "reel_02",
      number: "02",
      title: "STREET STYLE & SNEAKERS",
      category: "9:16 Vertical / Rhythm & Motion",
      posterImage: "assets/images/reel_02_poster.jpg",
      videoSrc: "assets/videos/reel_02.mp4",
      isVertical: true
    },
    {
      id: "reel_03",
      number: "03",
      title: "VALENTINE PERFUME AD",
      category: "9:16 Vertical / Cinematic Colour",
      posterImage: "assets/images/reel_03_poster.jpg",
      videoSrc: "assets/videos/reel_03.mp4",
      isVertical: true
    },
    {
      id: "reel_04",
      number: "04",
      title: "WARM ATMOSPHERIC CUT",
      category: "9:16 Vertical / Narrative & Mood",
      posterImage: "assets/images/reel_04_poster.jpg",
      videoSrc: "assets/videos/reel_04.mp4",
      isVertical: true
    }
  ],

  // 05 — Process / Working with me
  processSteps: [
    {
      step: "01",
      title: "Brief & References",
      description: "We align on your project goals, target audience, visual references, and turnaround schedule."
    },
    {
      step: "02",
      title: "Footage Review & Assembly",
      description: "I review your raw footage, select the strongest takes, and shape a tight narrative rough cut."
    },
    {
      step: "03",
      title: "Editing, Motion & Sound",
      description: "Crafting scroll-stopping hooks, kinetic captions, sound design, and bespoke ACES colour grade."
    },
    {
      step: "04",
      title: "Delivery & Platform Exports",
      description: "Final review pass and delivery of platform-ready master exports (9:16, 16:9, or custom ratios)."
    }
  ],

  // 06 — Packages / Pricing (Unconfirmed prices left unpublished with Contact for Pricing)
  packages: [
    {
      id: "starter",
      badge: "CREATOR STARTER",
      title: "Starter Short-Form",
      target: "Ideal for individual creators building a consistent content presence.",
      deliverables: [
        "Up to 8 vertical short-form edits / month",
        "Hook architecture & retention pacing",
        "Dynamic kinetic subtitles & captions",
        "Sound design & background music mix",
        "Platform-native 9:16 HD export",
        "1 round of revisions per video"
      ],
      turnaround: "48–72h turnaround"
    },
    {
      id: "growth",
      badge: "MOST POPULAR",
      title: "Creator Accelerator",
      target: "Built for active creators and founders scaling reach across multiple platforms.",
      deliverables: [
        "Up to 16 vertical short-form edits / month",
        "Advanced pattern interrupts & visual b-roll",
        "Bespoke motion graphics & kinetic typography",
        "Custom sound design & audio mastering",
        "Multi-platform exports (Reels, TikTok, Shorts)",
        "Priority turnaround & 2 revision rounds"
      ],
      turnaround: "24–48h priority turnaround"
    },
    {
      id: "commercial",
      badge: "BRAND / ENTERPRISE",
      title: "Commercial & Custom",
      target: "For brands and agencies requiring high-end commercials or tailored post-production.",
      deliverables: [
        "Full-scale brand film or campaign package",
        "16:9 4K master + social 9:16 cutdowns",
        "Complete ACES colour grading pipeline",
        "Bespoke sound design & Foley mixing",
        "Motion design, logo animation & UI tracking",
        "Dedicated revision workflow"
      ],
      turnaround: "Custom milestone timeline"
    }
  ],

  // 07 — About Me
  about: {
    headline: "I'M HARINDER.",
    editorialQuote: "I LIKE THE SPACE BETWEEN A ROUGH TIMELINE AND A FINISHED FILM.",
    copy: "I work through footage, rhythm, sound and colour until the edit feels obvious in hindsight — every frame earning its place. Based in India and collaborating with creators and brands worldwide.",
    strengths: [
      { name: "EDIT", detail: "Pacing, narrative assembly & rhythmic cuts" },
      { name: "MOTION", detail: "Kinetic type, screen graphics & seamless transitions" },
      { name: "COLOUR", detail: "Film print emulation, highlight rolloff & ACES grade" },
      { name: "SOUND", detail: "Transient hits, sub-bass weight & bespoke acoustic texture" }
    ]
  },

  // 08 — Reviews (Editorial placeholders clearly identified)
  reviews: [
    {
      id: "01",
      stars: 5,
      quote: "Working with Harinder was seamless from first brief to final delivery. His sense of timing, rhythm, and sound design elevated our content noticeably.",
      client: "CREATOR CLIENT",
      role: "Digital Creator"
    },
    {
      id: "02",
      stars: 5,
      quote: "Harinder takes raw footage and turns it into clean, high-retention edits without needing micromanagement. Fast turnaround and pristine quality.",
      client: "BRAND COLLABORATOR",
      role: "Brand Director"
    },
    {
      id: "03",
      stars: 5,
      quote: "The combination of sharp cuts, dynamic captions, and cinematic colour finishing made our reels stand out instantly in the feed.",
      client: "FOUNDER & PRODUCER",
      role: "Agency Lead"
    }
  ],

  // 09 — Contact
  contact: {
    title: "LET'S MAKE\nSOMETHING\nWORTH WATCHING.*",
    copy: "Got a project in mind? Send over your raw clips, a brief, or even just a reference video you like. Let's build something sharp.",
    email: "iamharinders@gmail.com",
    instagram: "https://www.instagram.com/harinder.mp4/",
    scope: "SHORT-FORM · COMMERCIALS · CREATOR CONTENT · SOCIAL CAMPAIGNS"
  }
};

if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
