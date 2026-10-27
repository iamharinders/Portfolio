import { useState, useEffect } from "react"
import Navbar from "./Navbar"
import CinemaModal, { CinemaVideoData } from "./CinemaModal"
import CTAFooter from "./CTAFooter"

interface WorkProject {
  id: string
  title: string
  client: string
  category: string
  views: string
  highlight: string
  videoSrc: string
  aspect: "vertical" | "wide"
  tags: string[]
  isFeatured?: boolean
}

const PROJECTS: WorkProject[] = [
  {
    id: "premiere-cut",
    title: "Retention Edit & Dynamic Cut",
    client: "ProductBrand • Hero Campaign",
    category: "Brand & Lifestyle",
    views: "1.2M+ Views",
    highlight: "+10K followers in 30 days with hook-driven edits",
    videoSrc: "/assets/videos/reel_02.mp4",
    aspect: "vertical",
    tags: ["SHORT-FORM", "REELS", "TIKTOK", "RETENTION PACING"],
    isFeatured: true,
  },
  {
    id: "3d-medical-animation",
    title: "3D Scientific & Anatomy Motion",
    client: "Science & Medical Education",
    category: "Dynamic Pacing",
    views: "2.4M Views",
    highlight: "3D anatomical render breakdown with synchronized spatial sound",
    videoSrc: "/assets/videos/reel_06.mp4",
    aspect: "vertical",
    tags: ["3D MOTION", "ANIMATION", "EDUCATIONAL"],
  },
  {
    id: "creator-product-reel",
    title: "Creator Product & Retention Cut",
    client: "Harinder • Product Showcase",
    category: "Brand & Lifestyle",
    views: "1.8M Views",
    highlight: "Cinematic pacing with Foley sound design & viral retention hook",
    videoSrc: "/assets/videos/timeline_1.mp4",
    aspect: "vertical",
    tags: ["CREATOR REEL", "COLOR GRADE", "TIKTOK"],
  },
  {
    id: "viral-hook",
    title: "Viral Hook Optimization",
    client: "wearnova • Fashion Campaign",
    category: "Viral Hooks",
    views: "758K Views",
    highlight: "2.3x engagement growth & watch-time multiplier",
    videoSrc: "/assets/videos/reel_01.mp4",
    aspect: "vertical",
    tags: ["HOOK DIRECTION", "REELS", "TIKTOK"],
  },
  {
    id: "medical-authority",
    title: "Healthcare & Expert Authority Reel",
    client: "Medical & Health Creator",
    category: "Viral Hooks",
    views: "940K Views",
    highlight: "High-trust educational pacing built for professional authority",
    videoSrc: "/assets/videos/reel_05.mp4",
    aspect: "vertical",
    tags: ["AUTHORITY", "HEALTHCARE", "REELS"],
  },
  {
    id: "consistent-strategy",
    title: "Consistent Reels Strategy",
    client: "wearnova • 30-Day Growth",
    category: "Viral Hooks",
    views: "1.2M Views",
    highlight: "+10K followers in 1 month with micro-cut rhythm",
    videoSrc: "/assets/videos/reel_03.mp4",
    aspect: "vertical",
    tags: ["SHORT-FORM", "INSTAGRAM", "REELS"],
  },
  {
    id: "creator-story",
    title: "Creator Storytelling & Flow",
    client: "Personal Brand • Series",
    category: "Dynamic Pacing",
    views: "487K Views",
    highlight: "High watch-through with subtle motion typography",
    videoSrc: "/assets/videos/rahul_reel.mp4",
    aspect: "vertical",
    tags: ["STORYTELLING", "YOUTUBE SHORTS", "PACING"],
  },
  {
    id: "content-engine",
    title: "High-Paced Content Engine",
    client: "Tech & Media Brand",
    category: "Dynamic Pacing",
    views: "623K Views",
    highlight: "System built for consistent organic discoverability",
    videoSrc: "/assets/videos/reel_04.mp4",
    aspect: "vertical",
    tags: ["REELS", "TIKTOK", "SOUND FX"],
  },
  {
    id: "atmosphere-cut",
    title: "Cinematic Atmosphere Cut",
    client: "Commercial & Editorial",
    category: "Sound Design",
    views: "890K Views",
    highlight: "4.1x save rate driven by editorial color grade",
    videoSrc: "/assets/videos/showcase_preview.mp4",
    aspect: "vertical",
    tags: ["CINEMATIC", "MICRO-CUTS", "COLOR"],
  },
]

const FILTER_CATEGORIES = [
  "All Edits",
  "Viral Hooks",
  "Brand & Lifestyle",
  "Dynamic Pacing",
  "Sound Design",
]

export default function AllWorks() {
  const [activeVideo, setActiveVideo] = useState<CinemaVideoData | null>(null)
  const [selectedFilter, setSelectedFilter] = useState("All Edits")
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
  }, [])

  // Ensure all videos play when user clicks or interacts with the page
  useEffect(() => {
    const playAllVideos = () => {
      const videos = document.querySelectorAll<HTMLVideoElement>("video")
      videos.forEach((vid) => {
        if (vid.muted || !vid.hasAttribute("controls")) {
          vid.muted = true
          vid.play().catch(() => {})
        }
      })
    }

    window.addEventListener("click", playAllVideos, { passive: true })
    window.addEventListener("touchstart", playAllVideos, { passive: true })
    playAllVideos()

    return () => {
      window.removeEventListener("click", playAllVideos)
      window.removeEventListener("touchstart", playAllVideos)
    }
  }, [])

  const filteredProjects =
    selectedFilter === "All Edits"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedFilter || p.tags.includes(selectedFilter.toUpperCase()))

  const featured = PROJECTS.find((p) => p.isFeatured) ?? PROJECTS[0]

  return (
    <div
      style={{
        backgroundColor: "#0A0A0A",
        color: "#FFFFFF",
        minHeight: "100vh",
        width: "100%",
        maxWidth: "100vw",
        overflowX: "clip",
        position: "relative",
      }}
    >
      <Navbar />
      <CinemaModal video={activeVideo} onClose={() => setActiveVideo(null)} />

      {/* Subtle Warm Amber Vignette Background Glow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth: "1280px",
          height: "600px",
          background:
            "radial-gradient(circle at 50% 120px, rgba(229, 88, 18, 0.08) 0%, rgba(10, 10, 10, 0) 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <main
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1240px",
          margin: "0 auto",
          padding: "130px clamp(18px, 4vw, 40px) 60px",
          boxSizing: "border-box",
        }}
      >
        {/* Editorial Filmmaker Studio Hero Header */}
        <section style={{ textAlign: "center", marginBottom: "clamp(40px, 6vh, 60px)" }}>
          <div style={{ marginBottom: "16px" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 18px",
                borderRadius: "100px",
                backgroundColor: "rgba(255, 255, 255, 0.06)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                fontFamily: "'Chivo Mono', monospace",
                fontSize: "11px",
                fontWeight: 700,
                color: "#FFFFFF",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: "#E55812",
                  boxShadow: "0 0 10px #E55812",
                }}
              />
              2026 EDITING STUDIO ARCHIVE
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(36px, 6vw, 68px)",
              fontWeight: 800,
              color: "#FFFFFF",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              margin: "0 0 16px",
            }}
          >
            Selected Work.{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #FFFFFF 30%, #E55812 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Cut to Create Impact.
            </span>
          </h1>

          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(15px, 1.4vw, 18px)",
              color: "#B8B8B8",
              maxWidth: "680px",
              margin: "0 auto 32px",
              lineHeight: 1.6,
            }}
          >
            This is a selection of short-form edits, campaigns, social content, and visual
            storytelling created to hold attention and communicate clearly.
          </p>

          {/* Editorial Category Filters */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            {FILTER_CATEGORIES.map((cat) => {
              const isSelected = selectedFilter === cat
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedFilter(cat)}
                  style={{
                    padding: "8px 20px",
                    borderRadius: "100px",
                    fontSize: "13px",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 600,
                    color: isSelected ? "#FFFFFF" : "#B8B8B8",
                    backgroundColor: isSelected ? "rgba(229, 88, 18, 0.2)" : "rgba(255, 255, 255, 0.04)",
                    border: isSelected
                      ? "1px solid #E55812"
                      : "1px solid rgba(255, 255, 255, 0.08)",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    boxShadow: isSelected ? "0 0 16px rgba(229, 88, 18, 0.25)" : "none",
                  }}
                >
                  {cat}
                </button>
              )
            })}
          </div>
        </section>

        {/* 1. Large Featured Premiere Reel Showcase */}
        {selectedFilter === "All Edits" && (
          <section style={{ marginBottom: "clamp(48px, 6vh, 72px)" }}>
            <div
              onClick={() =>
                setActiveVideo({
                  src: featured.videoSrc,
                  title: featured.title,
                  client: featured.client,
                  specs: "Vertical 9:16 • Master Grade • 1.2M+ Viral Reach",
                })
              }
              onMouseEnter={() => setHoveredCardId(featured.id)}
              onMouseLeave={() => setHoveredCardId(null)}
              style={{
                position: "relative",
                backgroundColor: "#141414",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                borderRadius: "28px",
                padding: "clamp(20px, 3.5vw, 36px)",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
                gap: "clamp(24px, 4vw, 48px)",
                alignItems: "center",
                boxShadow:
                  hoveredCardId === featured.id
                    ? "0 24px 60px rgba(0, 0, 0, 0.8), 0 0 35px rgba(229, 88, 18, 0.18)"
                    : "0 16px 40px rgba(0, 0, 0, 0.5)",
                transform: hoveredCardId === featured.id ? "translateY(-4px)" : "translateY(0)",
                transition: "all 220ms cubic-bezier(0.16, 1, 0.3, 1)",
                cursor: "pointer",
                boxSizing: "border-box",
              }}
            >
              {/* Left Column: Video Screen Frame */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "340px",
                  aspectRatio: "9 / 16",
                  margin: "0 auto",
                  borderRadius: "20px",
                  overflow: "hidden",
                  backgroundColor: "#000000",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  boxShadow: "0 12px 30px rgba(0, 0, 0, 0.6)",
                }}
              >
                <video
                  src={featured.videoSrc}
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />

                {/* Play Indicator Overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgba(0, 0, 0, 0.25)",
                    transition: "background-color 200ms ease",
                  }}
                >
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(229, 88, 18, 0.9)",
                      backdropFilter: "blur(10px)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#FFFFFF",
                      fontSize: "20px",
                      paddingLeft: "3px",
                      boxShadow: "0 8px 24px rgba(229, 88, 18, 0.4)",
                      transform: hoveredCardId === featured.id ? "scale(1.1)" : "scale(1)",
                      transition: "transform 200ms ease",
                    }}
                  >
                    ▶
                  </div>
                </div>

                {/* Live Pill */}
                <div
                  style={{
                    position: "absolute",
                    top: "14px",
                    left: "14px",
                    backgroundColor: "rgba(0, 0, 0, 0.75)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    borderRadius: "100px",
                    padding: "4px 12px",
                    fontSize: "11px",
                    fontWeight: 700,
                    fontFamily: "'Chivo Mono', monospace",
                    color: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      backgroundColor: "#E55812",
                    }}
                  />
                  PREMIERE REEL
                </div>
              </div>

              {/* Right Column: Project Dossier */}
              <div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "16px" }}>
                  {featured.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: "10px",
                        fontFamily: "'Chivo Mono', monospace",
                        fontWeight: 700,
                        letterSpacing: "1px",
                        color: "#E55812",
                        backgroundColor: "rgba(229, 88, 18, 0.12)",
                        border: "1px solid rgba(229, 88, 18, 0.25)",
                        padding: "4px 10px",
                        borderRadius: "100px",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h2
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "clamp(26px, 3.5vw, 42px)",
                    fontWeight: 800,
                    color: "#FFFFFF",
                    lineHeight: 1.18,
                    letterSpacing: "-0.02em",
                    margin: "0 0 10px",
                  }}
                >
                  {featured.title}
                </h2>

                <p
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "15px",
                    color: "#B8B8B8",
                    lineHeight: 1.6,
                    margin: "0 0 24px",
                  }}
                >
                  {featured.client} — {featured.highlight}
                </p>

                {/* Key Metrics Strip */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "14px",
                    padding: "18px 20px",
                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: "16px",
                    marginBottom: "28px",
                  }}
                >
                  <div>
                    <span
                      style={{
                        display: "block",
                        fontFamily: "'Syne', sans-serif",
                        fontSize: "20px",
                        fontWeight: 800,
                        color: "#FFFFFF",
                      }}
                    >
                      1.2M+
                    </span>
                    <span
                      style={{
                        fontFamily: "'Chivo Mono', monospace",
                        fontSize: "10px",
                        color: "#B8B8B8",
                        textTransform: "uppercase",
                      }}
                    >
                      Organic Views
                    </span>
                  </div>
                  <div>
                    <span
                      style={{
                        display: "block",
                        fontFamily: "'Syne', sans-serif",
                        fontSize: "20px",
                        fontWeight: 800,
                        color: "#FFFFFF",
                      }}
                    >
                      +10K
                    </span>
                    <span
                      style={{
                        fontFamily: "'Chivo Mono', monospace",
                        fontSize: "10px",
                        color: "#B8B8B8",
                        textTransform: "uppercase",
                      }}
                    >
                      Followers
                    </span>
                  </div>
                  <div>
                    <span
                      style={{
                        display: "block",
                        fontFamily: "'Syne', sans-serif",
                        fontSize: "20px",
                        fontWeight: 800,
                        color: "#E55812",
                      }}
                    >
                      84%
                    </span>
                    <span
                      style={{
                        fontFamily: "'Chivo Mono', monospace",
                        fontSize: "10px",
                        color: "#B8B8B8",
                        textTransform: "uppercase",
                      }}
                    >
                      Retention
                    </span>
                  </div>
                </div>

                {/* Watch Button */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "12px 24px",
                    borderRadius: "100px",
                    backgroundColor: "#FFFFFF",
                    color: "#111111",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "14px",
                    fontWeight: 700,
                    boxShadow: "0 4px 16px rgba(255, 255, 255, 0.12)",
                  }}
                >
                  <span>Watch in 4K Cinema Mode</span>
                  <span style={{ fontSize: "16px" }}>↗</span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 2. Asymmetrical Editorial Reel Showcase Grid */}
        <section style={{ marginBottom: "clamp(60px, 8vh, 100px)" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "28px",
              borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              paddingBottom: "16px",
            }}
          >
            <h3
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "20px",
                fontWeight: 700,
                color: "#FFFFFF",
                margin: 0,
                letterSpacing: "-0.01em",
              }}
            >
              Short-Form Archive // ({filteredProjects.length} Cuts)
            </h3>
            <span
              style={{
                fontFamily: "'Chivo Mono', monospace",
                fontSize: "11px",
                color: "#B8B8B8",
                letterSpacing: "1px",
              }}
            >
              CLICK ANY REEL FOR FULL AUDIO
            </span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))",
              gap: "clamp(20px, 3vw, 32px)",
            }}
          >
            {filteredProjects.map((project) => {
              const isHovered = hoveredCardId === project.id

              return (
                <div
                  key={project.id}
                  onClick={() =>
                    setActiveVideo({
                      src: project.videoSrc,
                      title: project.title,
                      client: project.client,
                      specs: "Vertical 9:16 • High-Paced Cut • Master Grade",
                    })
                  }
                  onMouseEnter={() => setHoveredCardId(project.id)}
                  onMouseLeave={() => setHoveredCardId(null)}
                  style={{
                    position: "relative",
                    backgroundColor: "#141414",
                    border: isHovered
                      ? "1px solid rgba(229, 88, 18, 0.5)"
                      : "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: "22px",
                    overflow: "hidden",
                    cursor: "pointer",
                    transform: isHovered ? "translateY(-6px) scale(1.02)" : "translateY(0) scale(1)",
                    boxShadow: isHovered
                      ? "0 20px 40px rgba(0, 0, 0, 0.8), 0 0 25px rgba(229, 88, 18, 0.16)"
                      : "0 10px 25px rgba(0, 0, 0, 0.4)",
                    transition: "all 200ms cubic-bezier(0.16, 1, 0.3, 1)",
                    display: "flex",
                    flexDirection: "column",
                    boxSizing: "border-box",
                  }}
                >
                  {/* Video Stage Frame */}
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      aspectRatio: "9 / 14",
                      backgroundColor: "#000000",
                      overflow: "hidden",
                    }}
                  >
                    <video
                      src={project.videoSrc}
                      autoPlay
                      muted
                      loop
                      playsInline
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        transform: isHovered ? "scale(1.05)" : "scale(1)",
                        transition: "transform 250ms ease",
                      }}
                    />

                    {/* Subtle Dark Gradient Overlay for Readability */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.7) 100%)",
                        pointerEvents: "none",
                      }}
                    />

                    {/* Views Badge */}
                    <div
                      style={{
                        position: "absolute",
                        top: "12px",
                        left: "12px",
                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                        backdropFilter: "blur(8px)",
                        border: "1px solid rgba(255, 255, 255, 0.12)",
                        borderRadius: "100px",
                        padding: "4px 10px",
                        fontSize: "11px",
                        fontWeight: 700,
                        fontFamily: "'Chivo Mono', monospace",
                        color: "#FFFFFF",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <span style={{ color: "#E55812" }}>●</span>
                      {project.views}
                    </div>

                    {/* Play Indicator on Hover */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: isHovered ? "rgba(0, 0, 0, 0.3)" : "transparent",
                        transition: "background-color 200ms ease",
                      }}
                    >
                      <div
                        style={{
                          width: "48px",
                          height: "48px",
                          borderRadius: "50%",
                          backgroundColor: "#E55812",
                          color: "#FFFFFF",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "17px",
                          paddingLeft: "3px",
                          opacity: isHovered ? 1 : 0,
                          transform: isHovered ? "scale(1)" : "scale(0.8)",
                          boxShadow: "0 8px 20px rgba(229, 88, 18, 0.5)",
                          transition: "all 200ms cubic-bezier(0.16, 1, 0.3, 1)",
                        }}
                      >
                        ▶
                      </div>
                    </div>
                  </div>

                  {/* Project Info Card Body */}
                  <div style={{ padding: "18px 18px 20px", display: "flex", flexDirection: "column", gap: "10px" }}>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      {project.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontSize: "9.5px",
                            fontFamily: "'Chivo Mono', monospace",
                            fontWeight: 700,
                            letterSpacing: "0.8px",
                            color: "#E55812",
                            backgroundColor: "rgba(229, 88, 18, 0.1)",
                            padding: "2px 8px",
                            borderRadius: "100px",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h4
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontSize: "16px",
                        fontWeight: 700,
                        color: "#FFFFFF",
                        margin: 0,
                        lineHeight: 1.25,
                      }}
                    >
                      {project.title}
                    </h4>

                    <p
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: "12.5px",
                        color: "#B8B8B8",
                        margin: 0,
                        lineHeight: 1.5,
                      }}
                    >
                      {project.client}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* 3. Studio Quality Manifesto / Reassurance */}
        <section
          style={{
            backgroundColor: "#111111",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "24px",
            padding: "clamp(30px, 4vw, 44px)",
            textAlign: "center",
            maxWidth: "880px",
            margin: "0 auto clamp(60px, 8vh, 90px)",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.5)",
          }}
        >
          <span
            style={{
              fontFamily: "'Chivo Mono', monospace",
              fontSize: "11px",
              fontWeight: 700,
              color: "#E55812",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "12px",
            }}
          >
            THE HARINDER.MP4 EDITING STANDARD
          </span>

          <h3
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(22px, 3.2vw, 34px)",
              fontWeight: 800,
              color: "#FFFFFF",
              letterSpacing: "-0.02em",
              lineHeight: 1.25,
              margin: "0 0 14px",
            }}
          >
            "Every frame has a purpose. If it doesn’t add retention or energy, it gets cut."
          </h3>

          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "14.5px",
              color: "#B8B8B8",
              lineHeight: 1.6,
              maxWidth: "640px",
              margin: "0 auto",
            }}
          >
            Timeline-level sound design (-14 LUFS standard), kinetic text pacing, and film print
            color grading tailored to keep viewers watching past the 3-second drop-off.
          </p>
        </section>
      </main>

      <CTAFooter />
    </div>
  )
}
