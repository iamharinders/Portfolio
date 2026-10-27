/**
 * =======================================================================
 * HARINDER'S PORTFOLIO - CENTRAL CONTENT & VIDEO CONFIGURATION
 * =======================================================================
 * Human-written copy, reusable Vimeo video integration & modular content.
 * 
 * To add your real Vimeo videos:
 * Simply paste your Vimeo link into the `vimeoUrl` fields below!
 * Example: vimeoUrl: "https://vimeo.com/76979871"
 * If left empty (""), the website seamlessly uses local previews.
 */

const PORTFOLIO_DATA = {
  // ==========================================
  // PERSONAL & BRAND INFORMATION
  // ==========================================
  personal: {
    name: "Harinder's Portfolio",
    editorName: "Harinder",
    role: "Video Editor",
    // Hero human copy:
    heroHeadline: "HI, I'M\nHARINDER.",
    heroSubline: "I edit for the moment people decide whether to keep watching.",
    heroBio: "From fast social cuts to cinematic brand films, I care about pacing, sound and the details that make a frame feel right.",
    email: "iamharinders@gmail.com",
    instagramHandle: "@harinder.mp4",
    instagramUrl: "https://www.instagram.com/harinder.mp4/",
    location: "India / Available for remote projects worldwide",
    statusBadge: "CURRENTLY AVAILABLE FOR PROJECTS",
    characterImage: "assets/images/harinder_character.png",
  },

  // ==========================================
  // SOFTWARE STRIP (NO PERCENTAGES)
  // ==========================================
  softwareList: [
    "DaVinci Resolve",
    "Premiere Pro",
    "After Effects",
    "Photoshop",
    "Lightroom",
    "Final Cut Pro"
  ],

  // ==========================================
  // 01 — FEATURED WORK (ORANGE FILM)
  // ==========================================
  featuredVideo: {
    badge: "01 / FEATURED WORK",
    title: "ORANGE FILM",
    category: "Visual Narrative",
    summary: "A visual-led edit built around rhythm, atmosphere and colour.",
    // Connected Vimeo URL:
    vimeoUrl: "https://vimeo.com/1224390608", 
    // Fallback poster & local video:
    posterImage: "assets/images/featured_orange_film.jpg",
    videoSrc: "assets/videos/showcase_preview.mp4"
  },

  // ==========================================
  // 02 — SELECTED CUTS
  // Distinct, project-specific descriptions
  // ==========================================
  selectedWorks: [
    {
      id: "01",
      number: "01",
      title: "CREATOR REEL",
      category: "Short-Form",
      description: "Fast cuts, clean sound design and a tighter rhythm built for vertical viewing.",
      tags: ["RHYTHM", "SOUND DESIGN", "PACING"],
      // Connected Vimeo URL:
      vimeoUrl: "https://vimeo.com/1224390608",
      posterImage: "assets/images/project_creator_reel.jpg",
      videoSrc: "assets/videos/showcase_preview.mp4"
    },
    {
      id: "02",
      number: "02",
      title: "BRAND FILM",
      category: "Commercial",
      description: "A slower, more deliberate cut focused on product detail, atmosphere and colour.",
      tags: ["COMMERCIAL", "COLOUR FINISH", "ATMOSPHERE"],
      // PASTE PROJECT 02 VIMEO URL HERE:
      vimeoUrl: "",
      posterImage: "assets/images/project_brand_film.jpg",
      videoSrc: "assets/videos/showcase_preview.mp4"
    },
    {
      id: "03",
      number: "03",
      title: "FASHION FILM",
      category: "Editorial",
      description: "Music-led pacing with an editorial finish and controlled movement.",
      tags: ["EDITORIAL", "MUSIC SYNC", "CHIAROSCURO"],
      // PASTE PROJECT 03 VIMEO URL HERE:
      vimeoUrl: "",
      posterImage: "assets/images/project_fashion_film.jpg",
      videoSrc: "assets/videos/showcase_preview.mp4"
    },
    {
      id: "04",
      number: "04",
      title: "MOTION REEL",
      category: "Motion Design",
      description: "Type, transitions and visual effects designed to hit with the soundtrack.",
      tags: ["MOTION", "TYPOGRAPHY", "VFX"],
      // PASTE PROJECT 04 VIMEO URL HERE:
      vimeoUrl: "",
      posterImage: "assets/images/project_motion_reel.jpg",
      videoSrc: "assets/videos/showcase_preview.mp4"
    },
    {
      id: "05",
      number: "05",
      title: "SOCIAL CAMPAIGN",
      category: "Multi-Platform",
      description: "Multiple aspect ratios built around hooks, pacing and platform behaviour.",
      tags: ["HOOKS", "9:16 & 16:9", "RETENTION"],
      vimeoUrl: "",
      posterImage: "assets/images/casestudy_grade_split.jpg",
      videoSrc: "assets/videos/showcase_preview.mp4"
    },
    {
      id: "06",
      number: "06",
      title: "VISUAL ESSAY",
      category: "Cinematic Film",
      description: "Atmosphere, composition and cinematic colour built around a visual idea.",
      tags: ["ANAMORPHIC", "COMPOSITION", "COLOUR"],
      vimeoUrl: "",
      posterImage: "assets/images/essay_anamorphic.jpg",
      videoSrc: "assets/videos/showcase_preview.mp4"
    }
  ],

  // ==========================================
  // 03 — MUGEN STUDIO CASE STUDY
  // Structured project breakdown
  // ==========================================
  caseStudy: {
    badge: "03 / CASE STUDY",
    title: "MUGEN STUDIO",
    category: "Visual Film & Sound Direction",
    // PASTE MUGEN STUDIO VIMEO URL HERE:
    vimeoUrl: "",
    posterImage: "assets/images/casestudy_grade_split.jpg",
    videoSrc: "assets/videos/showcase_preview.mp4",
    aboutEdit: "A visual breakdown focused on pacing, frame composition and sonic weight. Taking raw multi-camera takes and shaping them into a focused, rhythm-driven edit.",
    myRole: "Lead Editor, Sound Design & Color Finishing",
    whatIChanged: "Re-timed transitions to acoustic transients, trimmed loose footage between narrative beats, and applied custom highlight rolloff.",
    finalResult: "A tight, intentional edit with zero visual filler, designed to hold attention across the full duration."
  },

  // ==========================================
  // 04 — ABOUT ME
  // Distinct personal perspective
  // ==========================================
  about: {
    headline: "HI,\nI'M HARINDER.",
    copy: "I'm an editor who likes the space between a good idea and a finished film. I work with footage, rhythm, sound and colour until the piece feels like it knows exactly where it wants to go.",
    skills: [
      { label: "FOCUS", title: "Editing" },
      { label: "FOCUS", title: "Motion" },
      { label: "FOCUS", title: "Colour" },
      { label: "FOCUS", title: "Sound" },
      { label: "TOOLS", title: "DaVinci / Premiere / AE" },
      { label: "FORMAT", title: "Social / Commercial / Narrative" }
    ]
  },

  // ==========================================
  // 05 — CLIENT REVIEWS / TESTIMONIALS
  // 3 editable slots — NO fake names or companies
  // ==========================================
  testimonials: [
    {
      id: "01",
      quote: "[Real client quote goes here.]",
      client: "Client Name",
      role: "ROLE / COMPANY"
    },
    {
      id: "02",
      quote: "[Real client quote goes here.]",
      client: "Client Name",
      role: "ROLE / COMPANY"
    },
    {
      id: "03",
      quote: "[Real client quote goes here.]",
      client: "Client Name",
      role: "ROLE / COMPANY"
    }
  ],

  // ==========================================
  // 06 — SHORT-FORM / REELS
  // Specifically for vertical social work
  // ==========================================
  reelsSection: {
    badge: "06 / SHORT-FORM",
    title: "SHORT-FORM, WITHOUT THE SHORTCUTS.",
    copy: "Hooks, pacing, captions, sound design and movement — built for people who scroll fast.",
    items: [
      { 
        id: "reel_01", 
        label: "REEL / 01", 
        title: "SHORT-FORM REEL 01", 
        vimeoUrl: "https://vimeo.com/1224390608", 
        posterImage: "assets/images/vimeo_1224390608.jpg",
        videoSrc: "assets/videos/reel_01.mp4", 
        isVertical: true 
      },
      { id: "reel_02", label: "REEL / 02", title: "SHORT-FORM REEL 02", vimeoUrl: "", videoSrc: "assets/videos/reel_02.mp4", isVertical: true },
      { id: "reel_03", label: "REEL / 03", title: "SHORT-FORM REEL 03", vimeoUrl: "", videoSrc: "assets/videos/reel_03.mp4", isVertical: true }
    ]
  },

  // ==========================================
  // 07 — CONTACT
  // Clear, human call to action
  // ==========================================
  contact: {
    badge: "07 / LET'S WORK",
    title: "LET'S MAKE\nSOMETHING\nWORTH WATCHING.",
    copy: "Got a project in mind? Send me the footage, the idea or even just a rough reference. We can figure out the rest.",
    email: "iamharinders@gmail.com",
    instagram: "@harinder.mp4",
    instagramUrl: "https://www.instagram.com/harinder.mp4/"
  }
};

// Make accessible to all scripts
if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
