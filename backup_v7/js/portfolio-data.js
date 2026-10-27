/**
 * =======================================================================
 * HARINDER'S PORTFOLIO - CENTRAL CONTENT & VIDEO CONFIGURATION
 * =======================================================================
 * Direct local MP4 videos, human copy, no Vimeo for Reel 01.
 * Real local video files inside assets/videos/.
 */

const PORTFOLIO_DATA = {
  // ==========================================
  // BRAND & PERSONAL INFO
  // ==========================================
  personal: {
    brandName: "Harinder's Portfolio",
    name: "Harinder",
    role: "Video Editor",
    heroHi: "HI, I'M",
    heroName: "HARINDER.",
    heroTaglineDisplay: "SHORT-FORM VIDEO EDITING",
    heroTaglineEditorial: "THAT ACTUALLY GETS RESULTS.",
    heroSupporting: "I turn raw footage into edits that feel sharp, intentional and easy to keep watching.",
    email: "iamharinders@gmail.com",
    instagramHandle: "@harinder.mp4",
    instagramUrl: "https://www.instagram.com/harinder.mp4/",
    location: "India / Available for remote projects worldwide",
    statusBadge: "AVAILABLE FOR NEW COMMISSIONS · Q4 2026"
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
  // 01 — FEATURED WORK (FULL-WIDTH CINEMATIC SCREENSAVER)
  // ==========================================
  featuredVideo: {
    badge: "01 / FEATURED WORK",
    title: "FEATURED WORK",
    category: "Edit / Colour / Sound / Motion",
    summary: "A visual-led edit built around rhythm, atmosphere and colour.",
    vimeoUrl: "", // Direct local playback
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
      vimeoUrl: "",
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
  // 03 — SHORT-FORM REELS (REAL 9:16 LOCAL VIDEOS, NO VIMEO FOR REEL 01)
  // ==========================================
  reels: [
    {
      id: "reel_01",
      number: "01",
      title: "CREATOR TALKING HEAD",
      category: "9:16 Vertical / Sound & Pacing",
      vimeoUrl: "", // Direct local MP4
      posterImage: "assets/images/reel_01_poster.jpg",
      videoSrc: "assets/videos/reel_01.mp4",
      isVertical: true
    },
    {
      id: "reel_02",
      number: "02",
      title: "STREET STYLE & SNEAKERS",
      category: "9:16 Vertical / Rhythm & Motion",
      vimeoUrl: "",
      posterImage: "assets/images/reel_02_poster.jpg",
      videoSrc: "assets/videos/reel_02.mp4",
      isVertical: true
    },
    {
      id: "reel_03",
      number: "03",
      title: "VALENTINE PERFUME AD",
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
      category: "9:16 Vertical / Narrative & Mood",
      vimeoUrl: "",
      posterImage: "assets/images/reel_04_poster.jpg",
      videoSrc: "assets/videos/reel_04.mp4",
      isVertical: true
    }
  ],

  // ==========================================
  // 04 — ABOUT ME
  // ==========================================
  about: {
    headline: "I'M HARINDER.",
    editorialQuote: "I LIKE THE SPACE BETWEEN A ROUGH TIMELINE AND A FINISHED FILM.",
    copy: "I work through footage, rhythm, sound and colour until the edit feels obvious in hindsight — every frame earning its place.",
    strengths: [
      { name: "EDIT", detail: "Pacing, narrative assembly & rhythmic cuts" },
      { name: "MOTION", detail: "Kinetic type, screen graphics & seamless transitions" },
      { name: "COLOUR", detail: "Film print emulation, highlight rolloff & ACES grade" },
      { name: "SOUND", detail: "Transient hits, sub-bass weight & bespoke acoustic texture" }
    ]
  },

  // ==========================================
  // 05 — REVIEWS (WHAT PEOPLE SAY)
  // 5-Star visual ratings, clearly editable placeholders
  // ==========================================
  reviews: [
    {
      id: "01",
      stars: 5,
      quote: "REAL CLIENT QUOTE",
      client: "CLIENT NAME",
      role: "ROLE / COMPANY"
    },
    {
      id: "02",
      stars: 5,
      quote: "REAL CLIENT QUOTE",
      client: "CLIENT NAME",
      role: "ROLE / COMPANY"
    },
    {
      id: "03",
      stars: 5,
      quote: "REAL CLIENT QUOTE",
      client: "CLIENT NAME",
      role: "ROLE / COMPANY"
    }
  ],

  // ==========================================
  // 06 — CONTACT
  // ==========================================
  contact: {
    title: "LET'S MAKE\nSOMETHING\nWORTH WATCHING.*",
    copy: "Got a project in mind? Send me the footage, the rough idea or even just a reference. We can figure out the rest.",
    email: "iamharinders@gmail.com",
    instagram: "https://www.instagram.com/harinder.mp4/",
    scope: "SHORT-FORM · COMMERCIALS · MUSIC · SOCIAL"
  }
};

if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
