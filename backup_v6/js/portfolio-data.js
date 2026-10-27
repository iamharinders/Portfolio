/**
 * =======================================================================
 * HARINDER'S PORTFOLIO - CENTRAL CONTENT & VIDEO CONFIGURATION
 * =======================================================================
 * Human-written copy, reusable Vimeo & local video integration.
 * No fake clients, no fake percentages, no fake projects.
 */

const PORTFOLIO_DATA = {
  // ==========================================
  // BRAND & PERSONAL INFO
  // ==========================================
  personal: {
    brandName: "Harinder's Portfolio",
    name: "Harinder",
    role: "Video Editor",
    heroHi: "HI,",
    heroName: "HARINDER.",
    heroTaglineDisplay: "SHORT-FORM VIDEO EDITING",
    heroTaglineEditorial: "THAT ACTUALLY GETS RESULTS.",
    heroSupporting: "I turn raw footage into edits that feel sharp, intentional and easy to keep watching.",
    email: "iamharinders@gmail.com",
    instagramHandle: "@harinder.mp4",
    instagramUrl: "https://www.instagram.com/harinder.mp4/",
    location: "India / Available for remote projects worldwide",
    statusBadge: "AVAILABLE FOR PROJECTS"
  },

  // ==========================================
  // SOFTWARE LIST (NO FAKE PERCENTAGES)
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
  // 01 — FEATURED WORK (LANDSCAPE MASTER)
  // ==========================================
  featuredVideo: {
    badge: "01 / FEATURED WORK",
    title: "FEATURED WORK",
    category: "Edit / Colour / Sound / Motion",
    summary: "A visual-led edit built around rhythm, atmosphere and colour.",
    vimeoUrl: "https://vimeo.com/1224390608",
    posterImage: "assets/images/featured_film_poster.jpg",
    videoSrc: "assets/videos/featured_film.mp4"
  },

  // ==========================================
  // 02 — RECENT WORK (4 REAL PROJECT CARDS)
  // ==========================================
  recentProjects: [
    {
      id: "01",
      number: "01",
      title: "CREATOR REEL",
      category: "Short form / Motion",
      description: "Fast cuts, clean sound design and a tighter rhythm built for vertical viewing.",
      vimeoUrl: "https://vimeo.com/1224390608",
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
      vimeoUrl: "",
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
      vimeoUrl: "",
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
      vimeoUrl: "",
      posterImage: "assets/images/casestudy_grade_split.jpg",
      videoSrc: "assets/videos/reel_03.mp4",
      isVertical: true
    }
  ],

  // ==========================================
  // 03 — SHORT-FORM REELS (9:16 VERTICAL REAL VIDEOS)
  // ==========================================
  reels: [
    {
      id: "reel_01",
      number: "01",
      title: "CREATOR TALKING HEAD REEL",
      category: "9:16 Vertical / Sound & Pacing",
      vimeoUrl: "https://vimeo.com/1224390608",
      posterImage: "assets/images/reel_01_poster.jpg",
      videoSrc: "assets/videos/reel_01.mp4",
      isVertical: true
    },
    {
      id: "reel_02",
      number: "02",
      title: "STREET STYLE & SNEAKERS REEL",
      category: "9:16 Vertical / Rhythm & Motion",
      vimeoUrl: "",
      posterImage: "assets/images/reel_02_poster.jpg",
      videoSrc: "assets/videos/reel_02.mp4",
      isVertical: true
    },
    {
      id: "reel_03",
      number: "03",
      title: "VALENTINE PERFUME COMMERCIAL",
      category: "9:16 Vertical / Cinematic Colour",
      vimeoUrl: "",
      posterImage: "assets/images/reel_03_poster.jpg",
      videoSrc: "assets/videos/reel_03.mp4",
      isVertical: true
    },
    {
      id: "reel_04",
      number: "04",
      title: "WARM ATMOSPHERIC CUT",
      category: "Cinematic Grade & Mood",
      vimeoUrl: "",
      posterImage: "assets/images/featured_film_poster.jpg",
      videoSrc: "assets/videos/featured_film.mp4",
      isVertical: false
    }
  ],

  // ==========================================
  // 04 — ABOUT
  // ==========================================
  about: {
    headline: "HI, I'M HARINDER.",
    copy: "I'm an editor who enjoys turning messy footage into something that feels obvious in hindsight. I care about rhythm, sound, colour and the small decisions that make a cut feel right.",
    meta: [
      { label: "FOCUS", value: "Editing" },
      { label: "FOCUS", value: "Motion" },
      { label: "FOCUS", value: "Colour" },
      { label: "FOCUS", value: "Sound" },
      { label: "TOOLS", value: "DaVinci / Premiere / AE" },
      { label: "FORMAT", value: "Social / Commercial / Narrative" }
    ]
  },

  // ==========================================
  // 05 — REVIEWS (WHAT PEOPLE SAY)
  // Polished placeholders — no fake names or companies
  // ==========================================
  reviews: [
    {
      id: "01",
      quote: "REAL CLIENT QUOTE",
      client: "CLIENT NAME",
      role: "ROLE / COMPANY"
    },
    {
      id: "02",
      quote: "REAL CLIENT QUOTE",
      client: "CLIENT NAME",
      role: "ROLE / COMPANY"
    },
    {
      id: "03",
      quote: "REAL CLIENT QUOTE",
      client: "CLIENT NAME",
      role: "ROLE / COMPANY"
    }
  ],

  // ==========================================
  // 06 — CONTACT
  // ==========================================
  contact: {
    title: "LET'S MAKE SOMETHING WORTH WATCHING.",
    copy: "Got a project in mind? Send me the footage, the idea or even just a rough reference. We can figure out the rest.",
    email: "iamharinders@gmail.com",
    instagram: "https://www.instagram.com/harinder.mp4/"
  }
};

if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
