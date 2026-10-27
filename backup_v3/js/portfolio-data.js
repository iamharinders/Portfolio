/**
 * =======================================================================
 * HARINDER'S PORTFOLIO - CENTRAL CONTENT & VIDEO CONFIGURATION
 * =======================================================================
 * 
 * You don't need to know complex coding to update this website!
 * Simply change the text, video URLs, and image links in this file.
 * 
 * Video Types supported:
 *  - "local"   : Put your video file in assets/videos/ and set src to "assets/videos/your_file.mp4"
 *  - "vimeo"   : Paste your Vimeo video ID or URL (e.g. "https://vimeo.com/76979871" or "76979871")
 *  - "youtube" : Paste your YouTube video ID or URL (e.g. "https://www.youtube.com/watch?v=dQw4w9WgXcQ" or "dQw4w9WgXcQ")
 */

const PORTFOLIO_DATA = {
  // ==========================================
  // PERSONAL & BRAND INFORMATION
  // ==========================================
  personal: {
    name: "Harinder's Portfolio",
    editorName: "Harinder",
    role: "Video Editor & Colorist",
    tagline: "EDIT. COLOUR. MOVE.",
    heroBio: "I turn raw footage into sharp, cinematic edits built for brands, creators, social media and campaigns.",
    email: "iamharinders@gmail.com",
    instagramHandle: "@harinder.mp4",
    instagramUrl: "https://www.instagram.com/harinder.mp4/",
    location: "India / Available for remote projects worldwide",
    statusBadge: "Available for Q4/2026 Projects",
    // EDIT PORTRAIT IMAGE PATH HERE:
    portraitImage: "assets/images/harinder_portrait.jpg",
    aboutText: "I'm a video editor focused on cinematic storytelling, motion, colour and social-first content. From commercial campaigns to high-retention creator formats, I shape narrative pacing, sonic weight, and color grades that make audiences stop scrolling.",
  },

  // ==========================================
  // TICKER SERVICES (Moving text strip at hero bottom)
  // ==========================================
  tickerItems: [
    "VIDEO EDITING",
    "MOTION DESIGN",
    "COLOUR GRADING",
    "SHORT FORM",
    "STORYTELLING",
    "COMMERCIAL EDITING",
    "SOUND DESIGN"
  ],

  // ==========================================
  // 02 — FEATURED VIDEO / MAIN SCROLL EXPERIENCE
  // THIS IS THE MAIN SIGNATURE SCROLL-ZOOM VIDEO
  // ==========================================
  featuredVideo: {
    // EDIT FEATURED PROJECT TITLE HERE:
    badge: "FEATURED EDIT / 01",
    title: "ORANGE FILM",
    subtitle: "Editing / Colour / Sound Design / Motion",
    description: "An anamorphic cinematic narrative exploration of rhythm, desert atmospheres, and nuanced color science.",
    // VIDEO SETTINGS:
    // Video Type: "local", "vimeo", or "youtube"
    videoType: "local",
    // REPLACE THIS WITH YOUR VIDEO FILE OR URL:
    // Local: "assets/videos/showcase_preview.mp4"
    // Vimeo example: "https://vimeo.com/76979871"
    // YouTube example: "https://www.youtube.com/watch?v=ScMzIvxBSi4"
    videoSrc: "assets/videos/showcase_preview.mp4",
    // REPLACE THIS WITH YOUR POSTER IMAGE:
    posterImage: "assets/images/featured_orange_film.jpg",
    aspectRatio: "16/9"
  },

  // ==========================================
  // 03 — SELECTED WORK
  // 4–6 MAJOR EDITORIAL PROJECTS
  // ==========================================
  selectedWorks: [
    {
      id: "01",
      number: "[01]",
      // EDIT PROJECT TITLE HERE:
      title: "CREATOR REEL",
      category: "Short-form / High Energy",
      year: "2026",
      role: "Lead Editor & Sound Design",
      software: "DaVinci Resolve / Premiere Pro",
      description: "Fast-paced, retention-focused montage with dynamic sound design, precision speed ramps, and bespoke transitions built for high-engagement platforms.",
      // Video Configuration:
      videoType: "local", // "local", "vimeo", or "youtube"
      // REPLACE THIS WITH YOUR VIMEO / YOUTUBE URL OR MP4 FILE:
      videoSrc: "assets/videos/showcase_preview.mp4",
      // REPLACE THIS WITH YOUR POSTER IMAGE:
      posterImage: "assets/images/project_creator_reel.jpg",
      tags: ["Speed Ramps", "Sound Design", "Retention Pacing", "4K Master"]
    },
    {
      id: "02",
      number: "[02]",
      // EDIT PROJECT TITLE HERE:
      title: "BRAND FILM",
      category: "Commercial / Luxury",
      year: "2026",
      role: "Editorial / Colorist",
      software: "DaVinci Resolve Studio",
      description: "A high-end architectural commercial piece balancing stillness with subtle movement, utilizing custom Kodak 2383 print emulation and restraint.",
      videoType: "youtube", // Supporting YouTube placeholder
      // REPLACE THIS WITH YOUR YOUTUBE URL:
      videoSrc: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      // REPLACE THIS WITH YOUR POSTER IMAGE:
      posterImage: "assets/images/project_brand_film.jpg",
      tags: ["Commercial", "Kodak 2383", "Minimalist Cut", "Soundscapes"]
    },
    {
      id: "03",
      number: "[03]",
      // EDIT PROJECT TITLE HERE:
      title: "FASHION FILM",
      category: "Editorial / Experimental",
      year: "2026",
      role: "Creative Editor / Motion",
      software: "Premiere Pro / After Effects",
      description: "Atmospheric chiaroscuro fashion piece with fluid jump-cuts, retro timecode typography overlays, and rhythmic bass-heavy pacing.",
      videoType: "vimeo", // Supporting Vimeo placeholder
      // REPLACE THIS WITH YOUR VIMEO URL:
      videoSrc: "https://vimeo.com/76979871",
      // REPLACE THIS WITH YOUR POSTER IMAGE:
      posterImage: "assets/images/project_fashion_film.jpg",
      tags: ["Haute Couture", "Timecode VFX", "Rhythm Cuts", "Film Grain"]
    },
    {
      id: "04",
      number: "[04]",
      // EDIT PROJECT TITLE HERE:
      title: "MOTION REEL",
      category: "Motion Design / 3D VFX",
      year: "2026",
      role: "Motion Designer & Editor",
      software: "After Effects / Blender",
      description: "Kinetic abstract 3D elements colliding with typography, fluid chrome ribbons, and burnt orange refractive energy cores.",
      videoType: "local",
      // REPLACE THIS WITH YOUR VIDEO:
      videoSrc: "assets/videos/showcase_preview.mp4",
      // REPLACE THIS WITH YOUR POSTER IMAGE:
      posterImage: "assets/images/project_motion_reel.jpg",
      tags: ["3D Compositing", "Kinetic Type", "Fluid Dynamics", "Audio Sync"]
    },
    {
      id: "05",
      number: "[05]",
      // EDIT PROJECT TITLE HERE:
      title: "SOCIAL CAMPAIGN",
      category: "Multi-Platform Campaign",
      year: "2026",
      role: "Video Editor & Repurposer",
      software: "Premiere Pro / DaVinci Resolve",
      description: "A cohesive cross-platform video campaign cut into 9:16 vertical reels and 16:9 cinematic teasers optimized for visual velocity and punchy hooks.",
      videoType: "local",
      // REPLACE THIS WITH YOUR VIDEO:
      videoSrc: "assets/videos/showcase_preview.mp4",
      // REPLACE THIS WITH YOUR POSTER IMAGE:
      posterImage: "assets/images/casestudy_grade_split.jpg",
      tags: ["9:16 Vertical", "16:9 Master", "Hook Optimization", "Colour Grade"]
    }
  ],

  // ==========================================
  // 04 — MUGEN STUDIO-STYLE CASE STUDY
  // ==========================================
  caseStudy: {
    badge: "[CASE STUDY 01]",
    title: "ORANGE HORIZON",
    category: "Narrative Short Film & Commercial Cut",
    year: "2026",
    summary: "Transforming 8 hours of raw desert anamorphic LOG footage into a 90-second visceral cinematic journey with custom sound engineering and film grain.",
    roleList: [
      { name: "Video Editing", detail: "Timeline assembly, rhythm pacing & narrative structuring" },
      { name: "Motion Design", detail: "Custom typography cards & title animations" },
      { name: "Colour Grading", detail: "DaVinci Resolve ACES pipeline & Kodachrome print curve" },
      { name: "Sound Design", detail: "Sub-bass hits, organic atmospheric layers & Foley integration" }
    ],
    processStages: [
      {
        step: "01",
        title: "Research & Ingestion",
        desc: "Cataloging raw footage, selecting hero takes, analyzing camera focal lengths, and establishing tempo from temp audio stems."
      },
      {
        step: "02",
        title: "The Assembly Edit",
        desc: "Sculpting the narrative tension curve. Trimming fat, experimenting with speed ramps, and calibrating micro-pauses for impact."
      },
      {
        step: "03",
        title: "Motion & Graphics",
        desc: "Integrating bespoke minimal typography, film leader burns, and seamless directional transition whips."
      },
      {
        step: "04",
        title: "Colour Science & Grade",
        desc: "Balancing color temperatures, recovering highlight rolloff in ACES space, and dialing in the signature burnt orange and deep teal contrast."
      },
      {
        step: "05",
        title: "Sound & Final Delivery",
        desc: "Final sound mix, stereo mastering, and generating multi-format deliverable packages (DCP, ProRes 4444 XQ, and social web masters)."
      }
    ],
    // Primary Case Study Video:
    primaryVideo: {
      videoType: "local",
      videoSrc: "assets/videos/showcase_preview.mp4",
      posterImage: "assets/images/featured_orange_film.jpg"
    },
    // Interactive Grade Breakdown Images:
    gradeBreakdown: {
      title: "ACES COLOR GRADING BREAKDOWN",
      subtitle: "Interactive Split: Flat Raw LOG vs. Final Kodachrome Master",
      image: "assets/images/casestudy_grade_split.jpg",
      leftLabel: "RAW LOG FOOTAGE",
      rightLabel: "FINAL FILM GRADE"
    }
  },

  // ==========================================
  // 05 — EDITING PHILOSOPHY / PROCESS
  // ==========================================
  philosophy: {
    headline: "RAW FOOTAGE BECOMES A STORY.",
    stages: [
      {
        step: "01",
        name: "UNDERSTAND",
        items: ["Brief", "Audience", "Reference", "Footage", "Story"],
        description: "Before cutting a single clip, I dive deep into the emotional core of the project, audience psychology, and pacing references."
      },
      {
        step: "02",
        name: "BUILD",
        items: ["Editing", "Pacing", "Motion", "Sound", "Transitions"],
        description: "Where raw shots find their cadence. Cutting on action, weaving acoustic rhythm, and crafting momentum that holds viewer attention."
      },
      {
        step: "03",
        name: "FINISH",
        items: ["Colour", "Polish", "Sound", "Export", "Delivery"],
        description: "The cinematic glaze. Color grading for rich film texture, surgical sound sweetening, and immaculate technical delivery."
      }
    ]
  },

  // ==========================================
  // 06 — SOFTWARE & SKILLS
  // ==========================================
  skills: [
    {
      software: "DaVinci Resolve",
      category: "EDIT / COLOR / FUSION",
      detail: "ACES color management, node-based grading, Fairlight audio mixing & advanced conforming."
    },
    {
      software: "Premiere Pro",
      category: "NARRATIVE / COMMERCIAL / MULTICAM",
      detail: "Fast assembly, multi-camera synchronization, proxy workflows & seamless dynamic link."
    },
    {
      software: "After Effects",
      category: "MOTION / VFX / COMPOSITING",
      detail: "Kinetic typography, screen replacement, planar tracking, 2.5D animation & visual effects."
    },
    {
      software: "Photoshop",
      category: "TEXTURES / POSTER ART / MATTE",
      detail: "Custom thumbnail creation, raster textures, matte painting & film grain overlays."
    },
    {
      software: "Lightroom",
      category: "COLOR THEORY / STILLS / MOODBOARDS",
      detail: "Still frame grading, custom LUT prototyping & visual mood development."
    },
    {
      software: "Final Cut Pro",
      category: "SPEED / RHYTHM / CUTTING",
      detail: "Rapid short-form turnaround, magnetic timeline cutting & high-speed event exports."
    }
  ],

  // ==========================================
  // 07 — ABOUT SERVICES BREAKDOWN
  // ==========================================
  services: [
    {
      title: "Video Editing",
      description: "From YouTube long-form to cinematic commercials and trailers. Precision pacing that serves the emotional core."
    },
    {
      title: "Motion Design",
      description: "Tasteful kinetic typography, lower thirds, UI animation, and graphics that elevate without distracting."
    },
    {
      title: "Colour Grading",
      description: "Distinctive cinematic palettes, skin-tone preservation, film emulation (Kodak/Fuji), and look development."
    },
    {
      title: "Sound Design",
      description: "Immersive audio atmospheres, bass impacts, whooshes, riser tension, and pristine dialogue cleanup."
    },
    {
      title: "Visual Storytelling",
      description: "Structuring raw narrative arcs into high-retention stories that leave a lasting impression on your audience."
    },
    {
      title: "Social Media Editing",
      description: "Hook-driven vertical edits (Reels, TikTok, Shorts) crafted with algorithmic retention pacing."
    }
  ],

  // ==========================================
  // 08 — CONTACT SECTION
  // ==========================================
  contact: {
    heading: "LET'S MAKE SOMETHING MOVE.",
    supportingText: "Tell me what you're creating, what footage you have and where the final video will live.",
    email: "iamharinders@gmail.com",
    instagram: "@harinder.mp4",
    instagramUrl: "https://www.instagram.com/harinder.mp4/"
  },

  // ==========================================
  // 09 — FOOTER
  // ==========================================
  footer: {
    copyright: "© 2026 Harinder — Video Editor",
    location: "India / Available for remote projects",
    links: [
      { label: "Instagram", url: "https://www.instagram.com/harinder.mp4/" },
      { label: "Email", url: "mailto:iamharinders@gmail.com" },
      { label: "Top ↗", url: "#hero" }
    ]
  }
};

// Make accessible to all scripts
if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
