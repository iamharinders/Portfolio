import React, { useEffect, useRef, useState } from "react"
import { CinemaVideoData } from "./CinemaModal"

interface ResultReelItem {
  id: string
  title: string
  views: string
  growthMetric: string
  description: string
  videoSrc: string
  poster: string
  tag: string
  isVertical: boolean
}

const RESULT_REELS: ResultReelItem[] = [
  {
    id: "r1",
    title: "3D Scientific & Anatomy Motion",
    views: "2.4M Views",
    growthMetric: "+22K Followers In 14 Days",
    description: "3D anatomical render breakdown with synchronized spatial sound effects",
    videoSrc: "/assets/videos/reel_06.mp4",
    poster: "/assets/images/reel_06_poster.png",
    tag: "3D Animation",
    isVertical: true,
  },
  {
    id: "r2",
    title: "Commercial Product Spotlight",
    views: "758K Views",
    growthMetric: "2.3X Engagement Growth",
    description: "Optimized content structure for maximum completion rate",
    videoSrc: "/assets/videos/reel_02.mp4",
    poster: "/assets/images/reel_02_poster.jpg",
    tag: "ACES Grade",
    isVertical: true,
  },
  {
    id: "r3",
    title: "Algorithm Hook & Creator Retention",
    views: "1.8M Views",
    growthMetric: "+10K Followers In 30 Days",
    description: "Attention-grabbing opening 3-seconds with dynamic product pacing & sound",
    videoSrc: "/assets/videos/timeline_1.mp4",
    poster: "/assets/images/timeline_1_poster.png",
    tag: "Algorithm Ready",
    isVertical: true,
  },
  {
    id: "r4",
    title: "Healthcare & Expert Authority Reel",
    views: "940K Views",
    growthMetric: "4.8X Save Rate",
    description: "High-trust educational format built for medical & professional creators",
    videoSrc: "/assets/videos/reel_05.mp4",
    poster: "/assets/images/reel_05_poster.png",
    tag: "Authority Brand",
    isVertical: true,
  },
  {
    id: "r5",
    title: "Pacing & Speed Ramp Edit",
    views: "1.4M Views",
    growthMetric: "4.1X Watch Duration",
    description: "Fast-cut narrative pacing synced to custom rhythmic soundscape",
    videoSrc: "/assets/videos/reel_03.mp4",
    poster: "/assets/images/reel_03_poster.jpg",
    tag: "Sound Design",
    isVertical: true,
  },
  {
    id: "r6",
    title: "Client Campaign Delivery",
    views: "623K Views",
    growthMetric: "+5K Followers In 1 Month",
    description: "Content system built for audience conversion and organic reach",
    videoSrc: "/assets/videos/rahul_reel.mp4",
    poster: "/assets/images/project_fashion_film.jpg",
    tag: "Brand Campaign",
    isVertical: true,
  },
  {
    id: "r7",
    title: "High-Retention Creator Hook",
    views: "1.2M Views",
    growthMetric: "+10K Followers In 30 Days",
    description: "Viral hook format with kinetic subtitles & dynamic sound design",
    videoSrc: "/assets/videos/reel_01.mp4",
    poster: "/assets/images/reel_01_poster.jpg",
    tag: "Viral Edit",
    isVertical: true,
  },
  {
    id: "r8",
    title: "Short-Form Aesthetic Cut",
    views: "890K Views",
    growthMetric: "3.2X Share Rate",
    description: "Color-graded cinematic short with refined editorial typography",
    videoSrc: "/assets/videos/reel_04.mp4",
    poster: "/assets/images/reel_04_poster.jpg",
    tag: "Kinetic Cut",
    isVertical: true,
  },
]

interface RealVideosScrollGalleryProps {
  onSelectVideo: (video: CinemaVideoData) => void
}

export default function RealVideosScrollGallery({
  onSelectVideo,
}: RealVideosScrollGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null)
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({})

  // Responsive check
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 900)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Desktop horizontal scroll transform mapping
  useEffect(() => {
    if (isMobile) return

    const handleScroll = () => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const totalScrollable = rect.height - window.innerHeight

      if (totalScrollable <= 0) return

      const progress = Math.max(0, Math.min(1, -rect.top / totalScrollable))
      setScrollProgress(progress)

      if (trackRef.current) {
        const trackWidth = trackRef.current.scrollWidth
        const viewWidth = window.innerWidth
        const maxTranslate = Math.max(0, trackWidth - viewWidth + 80)
        trackRef.current.style.transform = `translate3d(${-progress * maxTranslate}px, 0, 0)`
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isMobile])

  // Visibility-managed video playback (pauses offscreen to prevent phone overheating)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            Object.values(videoRefs.current).forEach((vid) => {
              if (vid && vid.paused) {
                vid.play().catch(() => {})
              }
            })
          } else {
            Object.values(videoRefs.current).forEach((vid) => {
              if (vid && !vid.paused) {
                vid.pause()
              }
            })
          }
        }
      },
      { threshold: 0.05, rootMargin: "100px 0px 100px 0px" }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Play video on hover/focus
  const handleMouseEnter = (id: string) => {
    setActiveVideoId(id)
    const vid = videoRefs.current[id]
    if (vid) {
      vid.play().catch(() => {})
    }
  }

  const handleMouseLeave = (id: string) => {
    if (activeVideoId === id) {
      setActiveVideoId(null)
    }
  }

  return (
    <div
      ref={containerRef}
      id="work"
      style={{
        position: "relative",
        height: isMobile ? "auto" : "240vh",
        backgroundColor: "#FFFFFF",
        maxWidth: "100vw",
        boxSizing: "border-box",
      }}
    >
      {/* Sticky pinned viewport container on desktop */}
      <div
        style={{
          position: isMobile ? "relative" : "sticky",
          top: 0,
          left: 0,
          width: "100%",
          height: isMobile ? "auto" : "100vh",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: isMobile ? "60px 16px" : "40px 0 30px",
          boxSizing: "border-box",
        }}
      >
        {/* Section Header */}
        <div
          style={{
            maxWidth: "1280px",
            width: "100%",
            margin: "0 auto",
            padding: "0 clamp(18px, 4vw, 40px)",
            boxSizing: "border-box",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: isMobile ? "24px" : "36px",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <div>
            <div style={{ marginBottom: "12px" }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "11px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "1.5px",
                  color: "#111111",
                  backgroundColor: "rgba(0, 0, 0, 0.04)",
                  border: "1px solid rgba(0, 0, 0, 0.08)",
                  padding: "5px 14px",
                  borderRadius: "100px",
                  fontFamily: "'Chivo Mono', monospace",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    backgroundColor: "#8FAF91",
                  }}
                />
                Client Results & Work
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(28px, 4.2vw, 52px)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "#111111",
                margin: "0 0 10px",
              }}
            >
              Real videos,{" "}
              <span style={{ color: "#777777", fontStyle: "italic", fontWeight: 700 }}>
                Real numbers.
              </span>
            </h2>
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(13px, 1.4vw, 16px)",
                color: "#555555",
                maxWidth: "600px",
                margin: 0,
                lineHeight: 1.5,
              }}
            >
              Every video below was edited and retention-optimized by Harinder. The performance metrics speak for themselves.
            </p>
          </div>

          <a
            href="/all-works"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "12px 24px",
              backgroundColor: "#111111",
              borderRadius: "100px",
              color: "#FFFFFF",
              fontSize: "14px",
              fontWeight: 700,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              textDecoration: "none",
              transition: "all 0.25s ease",
              boxShadow: "0 6px 18px rgba(0, 0, 0, 0.12)",
            }}
          >
            <span>See All Works</span>
            <svg
              width="13"
              height="13"
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              style={{ display: "inline-block", flexShrink: 0 }}
            >
              <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" />
            </svg>
          </a>
        </div>

        {/* Horizontal Reel Gallery Track */}
        <div
          style={{
            position: "relative",
            width: "100%",
            overflow: isMobile ? "auto" : "visible",
            scrollSnapType: isMobile ? "x mandatory" : "none",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            padding: isMobile ? "10px 16px 20px" : "10px 0",
            boxSizing: "border-box",
          }}
        >
          <div
            ref={trackRef}
            style={{
              display: "flex",
              gap: "clamp(18px, 2.2vw, 28px)",
              paddingLeft: isMobile ? "0" : "clamp(24px, 5vw, 80px)",
              paddingRight: isMobile ? "16px" : "clamp(24px, 5vw, 80px)",
              width: "max-content",
              transition: isMobile ? "none" : "transform 0.08s cubic-bezier(0.1, 0.9, 0.2, 1)",
              willChange: "transform",
            }}
          >
            {RESULT_REELS.map((reel) => {
              const isActive = activeVideoId === reel.id

              return (
                <div
                  key={reel.id}
                  onClick={() => {
                    // Trigger all videos on the page to play
                    document.querySelectorAll<HTMLVideoElement>("video").forEach((v) => {
                      if (v.muted || !v.hasAttribute("controls")) {
                        v.play().catch(() => {})
                      }
                    })
                    onSelectVideo({
                      id: reel.id,
                      title: reel.title,
                      category: reel.tag,
                      aspect: "9:16",
                      src: reel.videoSrc,
                      videoUrl: reel.videoSrc,
                      poster: reel.poster,
                      posterUrl: reel.poster,
                      description: `${reel.growthMetric} • ${reel.description}`,
                    })
                  }}
                  onMouseEnter={() => handleMouseEnter(reel.id)}
                  onMouseLeave={() => handleMouseLeave(reel.id)}
                  style={{
                    position: "relative",
                    flex: "0 0 auto",
                    width: isMobile ? "clamp(240px, 76vw, 300px)" : "clamp(280px, 22vw, 340px)",
                    aspectRatio: "9 / 16",
                    borderRadius: "26px",
                    overflow: "hidden",
                    cursor: "pointer",
                    scrollSnapAlign: isMobile ? "center" : "none",
                    backgroundColor: "#151A17",
                    border: isActive
                      ? "2px solid #111111"
                      : "1px solid rgba(0, 0, 0, 0.1)",
                    boxShadow: isActive
                      ? "0 28px 60px rgba(0, 0, 0, 0.2)"
                      : "0 14px 35px rgba(0, 0, 0, 0.08)",
                    transform: isActive ? "translateY(-6px) scale(1.02)" : "translateY(0) scale(1)",
                    transition:
                      "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease, border-color 0.3s ease",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  {/* Poster Image Fallback (Guarantees card is never a black rectangle) */}
                  <img
                    src={reel.poster}
                    alt={reel.title}
                    loading="lazy"
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      zIndex: 1,
                    }}
                  />

                  {/* Video Element */}
                  <video
                    ref={(el) => {
                      videoRefs.current[reel.id] = el
                    }}
                    src={reel.videoSrc}
                    poster={reel.poster}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    onLoadedData={(e) => {
                      e.currentTarget.style.opacity = "1"
                    }}
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      zIndex: 2,
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                    }}
                  />

                  {/* Gradient overlays for readability */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to bottom, rgba(15, 18, 16, 0.65) 0%, transparent 35%, rgba(15, 18, 16, 0.88) 100%)",
                      zIndex: 2,
                      pointerEvents: "none",
                    }}
                  />

                  {/* Top Bar: Views Badge + Tag (NO Serial Number) */}
                  <div
                    style={{
                      position: "relative",
                      zIndex: 3,
                      padding: "16px 16px 0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        backgroundColor: "rgba(15, 18, 16, 0.7)",
                        backdropFilter: "blur(12px)",
                        padding: "5px 12px",
                        borderRadius: "100px",
                        border: "1px solid rgba(243, 240, 232, 0.15)",
                      }}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#F3F0E8"
                        strokeWidth="2"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                      <span
                        style={{
                          fontFamily: "'Syne', sans-serif",
                          fontWeight: 700,
                          fontSize: "12px",
                          color: "#F3F0E8",
                        }}
                      >
                        {reel.views}
                      </span>
                    </div>

                    <span
                      style={{
                        fontSize: "10px",
                        fontFamily: "'Chivo Mono', monospace",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.8px",
                        color: "#F3F0E8",
                        backgroundColor: "rgba(101, 122, 104, 0.8)",
                        padding: "4px 10px",
                        borderRadius: "100px",
                      }}
                    >
                      {reel.tag}
                    </span>
                  </div>

                  {/* Center Play Button Icon (reveals on hover) */}
                  <div
                    style={{
                      position: "relative",
                      zIndex: 3,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      opacity: isActive ? 0.95 : 0.6,
                      transition: "opacity 0.25s ease",
                    }}
                  >
                    <div
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(32, 38, 34, 0.75)",
                        backdropFilter: "blur(12px)",
                        border: "1px solid rgba(243, 240, 232, 0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="#F3F0E8">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                  {/* Bottom Metric & Editing Outcome (NO creator handle) */}
                  <div
                    style={{
                      position: "relative",
                      zIndex: 3,
                      padding: "16px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                      backgroundColor: "rgba(15, 18, 16, 0.75)",
                      backdropFilter: "blur(12px)",
                      borderTop: "1px solid rgba(243, 240, 232, 0.1)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontWeight: 700,
                        fontSize: "15px",
                        color: "#F3F0E8",
                        lineHeight: 1.25,
                      }}
                    >
                      {reel.growthMetric}
                    </span>
                    <p
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: "12px",
                        color: "#C5B8A5",
                        margin: 0,
                        lineHeight: 1.4,
                      }}
                    >
                      {reel.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
