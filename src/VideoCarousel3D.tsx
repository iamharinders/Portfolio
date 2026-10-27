import React, { useRef, useState, useEffect, useCallback } from "react"
import { CinemaVideoData } from "./CinemaModal"

export interface CarouselItem {
  id: string
  title: string
  subtitle: string
  src: string
  poster: string
  tag: string
  metric: string
  isVertical: boolean
}

const CAROUSEL_ITEMS: CarouselItem[] = [
  {
    id: "1",
    title: "BRAND COMMERCIAL CUT",
    subtitle: "HARINDER.MP4 // 01",
    src: "/assets/videos/reel_02.mp4",
    poster: "/assets/images/reel_02_poster.jpg",
    tag: "ACES Grade",
    metric: "758K Views",
    isVertical: true,
  },
  {
    id: "2",
    title: "KINETIC MOTION REEL",
    subtitle: "HARINDER.MP4 // 02",
    src: "/assets/videos/reel_03.mp4",
    poster: "/assets/images/reel_03_poster.jpg",
    tag: "Pacing & Sound",
    metric: "1.4M Views",
    isVertical: true,
  },
  {
    id: "3",
    title: "CREATOR PRODUCT REEL",
    subtitle: "HARINDER.MP4 // 03",
    src: "/assets/videos/timeline_1.mp4",
    poster: "/assets/images/timeline_1_poster.png",
    tag: "Viral Retention",
    metric: "1.8M Views",
    isVertical: true,
  },
  {
    id: "4",
    title: "MASTER SHOWCASE",
    subtitle: "HARINDER.MP4 // 04",
    src: "/assets/videos/showcase_preview.mp4",
    poster: "/assets/images/project_creator_reel.jpg",
    tag: "Algorithm Ready",
    metric: "2.1M Views",
    isVertical: false,
  },
  {
    id: "5",
    title: "CLIENT CAMPAIGN",
    subtitle: "HARINDER.MP4 // 05",
    src: "/assets/videos/rahul_reel.mp4",
    poster: "/assets/images/project_fashion_film.jpg",
    tag: "Brand Growth",
    metric: "+10K Subs",
    isVertical: true,
  },
  {
    id: "6",
    title: "CREATOR VIRAL REEL",
    subtitle: "HARINDER.MP4 // 06",
    src: "/assets/videos/reel_01.mp4",
    poster: "/assets/images/reel_01_poster.jpg",
    tag: "High Retention",
    metric: "1.2M Views",
    isVertical: true,
  },
  {
    id: "7",
    title: "3D MEDICAL ANIMATION",
    subtitle: "HARINDER.MP4 // 07",
    src: "/assets/videos/reel_06.mp4",
    poster: "/assets/images/reel_06_poster.png",
    tag: "3D Motion",
    metric: "2.4M Views",
    isVertical: true,
  },
  {
    id: "8",
    title: "FEATURED FILM ESSAY",
    subtitle: "HARINDER.MP4 // 08",
    src: "/assets/videos/featured_film.mp4",
    poster: "/assets/images/featured_film_poster.jpg",
    tag: "Cinematic Grade",
    metric: "Film Essay",
    isVertical: false,
  },
  {
    id: "9",
    title: "EDITORIAL SHORT",
    subtitle: "HARINDER.MP4 // 09",
    src: "/assets/videos/reel_04.mp4",
    poster: "/assets/images/reel_04_poster.jpg",
    tag: "Retention 89%",
    metric: "890K Views",
    isVertical: true,
  },
  {
    id: "10",
    title: "MEDICAL AUTHORITY REEL",
    subtitle: "HARINDER.MP4 // 10",
    src: "/assets/videos/reel_05.mp4",
    poster: "/assets/images/reel_05_poster.png",
    tag: "Authority Brand",
    metric: "940K Views",
    isVertical: true,
  },
]

// Quadrupled sequence guarantees infinite wrapping buffer in both directions
const SEAMLESS_ITEMS = [
  ...CAROUSEL_ITEMS,
  ...CAROUSEL_ITEMS,
  ...CAROUSEL_ITEMS,
  ...CAROUSEL_ITEMS,
]

interface VideoCarousel3DProps {
  onSelectVideo: (video: CinemaVideoData) => void
}

export default function VideoCarousel3D({ onSelectVideo }: VideoCarousel3DProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isDragging, setIsDragging] = useState(false)

  // Dragging & animation state refs for 60fps performance without re-render lag
  const offsetRef = useRef<number>(0)
  const isDraggingRef = useRef<boolean>(false)
  const isHoveredRef = useRef<boolean>(false)
  const startXRef = useRef<number>(0)
  const dragStartOffsetRef = useRef<number>(0)
  const hasMovedRef = useRef<boolean>(false)
  const singleSequenceWidthRef = useRef<number>(0)
  const animFrameIdRef = useRef<number>(0)
  const velocityRef = useRef<number>(0)
  const lastPointerXRef = useRef<number>(0)
  const lastTimeRef = useRef<number>(0)

  const cardWidthRef = useRef<number>(260)
  const containerWidthRef = useRef<number>(1440)
  const gapRef = useRef<number>(20)

  // Measure single sequence width
  const measureTrack = useCallback(() => {
    if (!trackRef.current || trackRef.current.children.length === 0) return
    const firstCard = trackRef.current.children[0] as HTMLElement
    cardWidthRef.current = firstCard.offsetWidth || 260
    if (containerRef.current) {
      containerWidthRef.current = containerRef.current.clientWidth || 1440
    }
    const gap = 20 // matches CSS gap
    gapRef.current = gap
    singleSequenceWidthRef.current = (cardWidthRef.current + gap) * CAROUSEL_ITEMS.length
  }, [])

  useEffect(() => {
    measureTrack()
    window.addEventListener("resize", measureTrack)
    return () => window.removeEventListener("resize", measureTrack)
  }, [measureTrack])

  // Continuous animation loop (RIGHT -> LEFT auto scroll + 3D concave arc positioning)
  useEffect(() => {
    let lastStamp = performance.now()

    const animate = (timestamp: number) => {
      const dt = Math.min((timestamp - lastStamp) / 1000, 0.1)
      lastStamp = timestamp

      if (!isDraggingRef.current) {
        // Natural inertia decay if released with drag velocity
        if (Math.abs(velocityRef.current) > 0.05) {
          offsetRef.current += velocityRef.current * dt * 60
          velocityRef.current *= Math.pow(0.92, dt * 60)
        } else {
          // Automatic right-to-left continuous scroll: fast, cinematic, constant velocity (~76px/s)
          // Continues non-stop regardless of cursor hover as specified
          const baseSpeed = 76
          offsetRef.current -= baseSpeed * dt
        }
      }

      // Infinite modulo wrapping: keep offset bounded between -singleSequenceWidth and 0
      const seqWidth = singleSequenceWidthRef.current
      if (seqWidth > 0) {
        while (offsetRef.current <= -seqWidth) {
          offsetRef.current += seqWidth
        }
        while (offsetRef.current > 0) {
          offsetRef.current -= seqWidth
        }
      }

      if (trackRef.current && containerRef.current) {
        // Translate the track horizontally with pure GPU transform
        trackRef.current.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`

        // Calculate 3D Amphitheater Concave Arc Curvature mathematically with ZERO reflow calls
        const containerWidth = containerWidthRef.current
        const cardW = cardWidthRef.current
        const gap = gapRef.current
        const step = cardW + gap
        const radius = Math.max(containerWidth * 0.46, 450)

        const cards = trackRef.current.children
        for (let i = 0; i < cards.length; i++) {
          const card = cards[i] as HTMLElement
          // Mathematical center of this card relative to container center
          const cardCenterInTrack = i * step + cardW / 2
          const cardCenterInContainer = offsetRef.current + cardCenterInTrack
          const dist = cardCenterInContainer - containerWidth / 2
          const normDist = dist / radius // -1 at left edge, 0 at center, +1 at right edge
          const clampedNorm = Math.max(-1.8, Math.min(1.8, normDist))

          const isThisHovered = card.dataset.hovered === "true"

          // 1. Rotation Y: concave curve facing inward toward viewer
          const rotY = -clampedNorm * 22

          // 2. Parabolic vertical curve: center card dips slightly lower (14px), outer cards swoop up gracefully (-26px)
          const curveY = 14 - Math.pow(Math.min(Math.abs(clampedNorm), 1.5), 1.7) * 38

          // 3. Depth translation along Z-axis (concave pushback into 3D amphitheater)
          const transZ = -Math.pow(Math.abs(clampedNorm), 1.4) * 60

          // 4. Scale tapering
          const scale = 1 - Math.pow(Math.min(Math.abs(clampedNorm), 1.5), 2) * 0.035

          if (isThisHovered) {
            card.style.transform = `translate3d(0, ${curveY - 14}px, ${transZ + 60}px) rotateY(${rotY}deg) scale(${scale * 1.05})`
            card.style.zIndex = "100"
          } else {
            card.style.transform = `translate3d(0, ${curveY}px, ${transZ}px) rotateY(${rotY}deg) scale(${scale})`
            card.style.zIndex = `${Math.round(50 - Math.abs(clampedNorm) * 20)}`
          }
        }
      }

      animFrameIdRef.current = requestAnimationFrame(animate)
    }

    animFrameIdRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animFrameIdRef.current)
  }, [])

  // Ensure all carousel videos play on mount and when user interacts
  useEffect(() => {
    const playAllCarouselVideos = () => {
      if (trackRef.current) {
        trackRef.current.querySelectorAll("video").forEach((v) => {
          v.play().catch(() => {})
        })
      }
    }
    playAllCarouselVideos()
    window.addEventListener("click", playAllCarouselVideos, { passive: true })
    window.addEventListener("touchstart", playAllCarouselVideos, { passive: true })
    return () => {
      window.removeEventListener("click", playAllCarouselVideos)
      window.removeEventListener("touchstart", playAllCarouselVideos)
    }
  }, [])

  // Pointer Drag Handlers (supports Mouse & Touch seamlessly)
  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.button !== 0 && e.pointerType === "mouse") return

    isDraggingRef.current = true
    setIsDragging(true)
    startXRef.current = e.clientX
    lastPointerXRef.current = e.clientX
    lastTimeRef.current = performance.now()
    dragStartOffsetRef.current = offsetRef.current
    hasMovedRef.current = false
    velocityRef.current = 0

    try {
      e.currentTarget.setPointerCapture(e.pointerId)
    } catch {
      // Ignore
    }
  }

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return

    const now = performance.now()
    const dt = Math.max((now - lastTimeRef.current) / 1000, 0.001)
    const currentX = e.clientX
    const deltaX = currentX - startXRef.current
    const frameDelta = currentX - lastPointerXRef.current

    if (Math.abs(deltaX) > 6) {
      hasMovedRef.current = true
    }

    offsetRef.current = dragStartOffsetRef.current + deltaX
    velocityRef.current = frameDelta / (dt * 60)
    lastPointerXRef.current = currentX
    lastTimeRef.current = now
  }

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return
    isDraggingRef.current = false
    setIsDragging(false)

    try {
      e.currentTarget.releasePointerCapture(e.pointerId)
    } catch {
      // Ignore
    }
  }

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "100vw",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* 
        3D Perspective Amphitheater Viewport:
        Preserves 3D depth perspective for the curved card arc.
      */}
      <div
        ref={containerRef}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "100vw",
          padding: "36px 0 32px",
          overflow: "hidden",
          userSelect: "none",
          boxSizing: "border-box",
          cursor: isDragging ? "grabbing" : "grab",
          touchAction: "pan-y",
          perspective: "1300px",
          perspectiveOrigin: "50% 40%",
        }}
        aria-label="3D Curved Perspective Hero Reel Showcase"
        onMouseEnter={() => {
          isHoveredRef.current = true
        }}
        onMouseLeave={() => {
          isHoveredRef.current = false
          setHoveredIndex(null)
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {/* Draggable Track Container with 3D Preservation */}
        <div
          ref={trackRef}
          style={{
            display: "flex",
            gap: "20px",
            width: "max-content",
            transformStyle: "preserve-3d",
            willChange: "transform",
          }}
        >
          {SEAMLESS_ITEMS.map((item, index) => {
            const isCardHovered = hoveredIndex === index

            return (
              <div
                key={`${item.id}-${index}`}
                data-hovered={isCardHovered ? "true" : "false"}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={(e) => {
                  if (hasMovedRef.current) {
                    e.stopPropagation()
                    return
                  }
                  // Start playing all videos across the page
                  document.querySelectorAll<HTMLVideoElement>("video").forEach((v) => {
                    if (v.muted || !v.hasAttribute("controls")) {
                      v.play().catch(() => {})
                    }
                  })
                  onSelectVideo({
                    id: item.id,
                    title: item.title,
                    category: item.tag,
                    aspect: item.isVertical ? "9:16" : "16:9",
                    src: item.src,
                    videoUrl: item.src,
                    poster: item.poster,
                    posterUrl: item.poster,
                    description: `${item.subtitle} • High-retention cinematic edit crafted by Harinder.MP4.`,
                  })
                }}
                style={{
                  position: "relative",
                  flex: "0 0 auto",
                  width: "clamp(230px, 19.8vw, 290px)",
                  aspectRatio: "9 / 16",
                  borderRadius: "24px",
                  overflow: "hidden",
                  cursor: isDragging ? "grabbing" : "pointer",
                  backgroundColor: "#111111",
                  border: isCardHovered
                    ? "2px solid #111111"
                    : "1px solid rgba(0, 0, 0, 0.1)",
                  boxShadow: isCardHovered
                    ? "0 30px 65px rgba(0, 0, 0, 0.28), 0 0 0 1px rgba(0, 0, 0, 0.1)"
                    : "0 14px 34px rgba(0, 0, 0, 0.08)",
                  transformStyle: "preserve-3d",
                  willChange: "transform",
                  transformOrigin: "center center",
                  boxSizing: "border-box",
                }}
              >
                {/* Continuous Autoplaying Loop Video */}
                <video
                  src={item.src}
                  poster={item.poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    pointerEvents: "none",
                  }}
                />

                {/* Top Tag Badges */}
                <div
                  style={{
                    position: "absolute",
                    top: "14px",
                    left: "14px",
                    right: "14px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    zIndex: 3,
                    pointerEvents: "none",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Chivo Mono', monospace",
                      fontSize: "10px",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.8px",
                      color: "#FFFFFF",
                      backgroundColor: "rgba(17, 17, 17, 0.75)",
                      backdropFilter: "blur(10px)",
                      WebkitBackdropFilter: "blur(10px)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      padding: "4px 9px",
                      borderRadius: "100px",
                    }}
                  >
                    {item.tag}
                  </span>

                  <span
                    style={{
                      fontFamily: "'Chivo Mono', monospace",
                      fontSize: "10px",
                      fontWeight: 700,
                      color: "#8FAF91",
                      backgroundColor: "rgba(17, 17, 17, 0.75)",
                      backdropFilter: "blur(10px)",
                      WebkitBackdropFilter: "blur(10px)",
                      border: "1px solid rgba(143, 175, 145, 0.35)",
                      padding: "4px 9px",
                      borderRadius: "100px",
                    }}
                  >
                    {item.metric}
                  </span>
                </div>

                {/* Bottom Vignette & Title Information */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "45px 16px 16px",
                    background:
                      "linear-gradient(to top, rgba(0, 0, 0, 0.88) 0%, rgba(0, 0, 0, 0.4) 60%, transparent 100%)",
                    zIndex: 3,
                    pointerEvents: "none",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Chivo Mono', monospace",
                      fontSize: "10px",
                      color: "#A1A1AA",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      marginBottom: "3px",
                    }}
                  >
                    {item.subtitle}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "13px",
                      fontWeight: 800,
                      color: "#FFFFFF",
                      letterSpacing: "-0.01em",
                      lineHeight: 1.25,
                    }}
                  >
                    {item.title}
                  </div>
                </div>

                {/* Click to Play Prompt Overlay */}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
                    opacity: isCardHovered ? 1 : 0,
                    transition: "opacity 0.2s ease, transform 0.2s ease",
                    zIndex: 4,
                    pointerEvents: "none",
                  }}
                >
                  <span
                    style={{
                      fontSize: "16px",
                      marginLeft: "2px",
                      color: "#111111",
                    }}
                  >
                    ▶
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* 
        3 Feature Highlights directly beneath the curved arc 
        (Matching the reference layout & drawing from ProcessSequenceAnimation)
      */}
      <div
        style={{
          width: "100%",
          maxWidth: "1080px",
          margin: "12px auto 0",
          padding: "0 clamp(16px, 3vw, 24px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
          gap: "clamp(20px, 3vw, 40px)",
          boxSizing: "border-box",
        }}
      >
        {/* Highlight 1 */}
        <div style={{ textAlign: "center" }}>
          <h4
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "16px",
              fontWeight: 800,
              color: "#111111",
              margin: "0 0 6px",
              letterSpacing: "-0.01em",
            }}
          >
            Hook & Retention Pacing
          </h4>
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "13px",
              color: "#666666",
              lineHeight: 1.5,
              margin: 0,
            }}
          >
            Dead air eliminated, hook structures engineered, and rhythmic pacing customized for 3-second retention.
          </p>
        </div>

        {/* Highlight 2 */}
        <div style={{ textAlign: "center" }}>
          <h4
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "16px",
              fontWeight: 800,
              color: "#111111",
              margin: "0 0 6px",
              letterSpacing: "-0.01em",
            }}
          >
            ACES DaVinci Color & Sound
          </h4>
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "13px",
              color: "#666666",
              lineHeight: 1.5,
              margin: 0,
            }}
          >
            Full 10-bit cinema pipeline in DaVinci Resolve Studio with bespoke sound design mixed to -14 LUFS.
          </p>
        </div>

        {/* Highlight 3 */}
        <div style={{ textAlign: "center" }}>
          <h4
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "16px",
              fontWeight: 800,
              color: "#111111",
              margin: "0 0 6px",
              letterSpacing: "-0.01em",
            }}
          >
            48-Hour Platform Delivery
          </h4>
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "13px",
              color: "#666666",
              lineHeight: 1.5,
              margin: 0,
            }}
          >
            Native 4K 9:16 vertical exports with thumbnail frames ready to upload to TikTok, Reels, and Shorts.
          </p>
        </div>
      </div>
    </div>
  )
}
