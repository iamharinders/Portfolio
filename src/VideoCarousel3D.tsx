import React, { useEffect, useRef, useState, useCallback } from "react"
import { CinemaVideoData } from "./CinemaModal"

interface CarouselItem {
  id: string
  title: string
  subtitle: string
  src: string
  poster: string
  tag: string
  isVertical: boolean
}

const CAROUSEL_ITEMS: CarouselItem[] = [
  {
    id: "1",
    title: "CREATOR VIRAL REEL",
    subtitle: "HARINDER.MP4 // 01",
    src: "/assets/videos/reel_01.mp4",
    poster: "/assets/images/reel_01_poster.jpg",
    tag: "High Retention",
    isVertical: true,
  },
  {
    id: "2",
    title: "BRAND COMMERCIAL CUT",
    subtitle: "HARINDER.MP4 // 02",
    src: "/assets/videos/reel_02.mp4",
    poster: "/assets/images/reel_02_poster.jpg",
    tag: "ACES Grade",
    isVertical: true,
  },
  {
    id: "3",
    title: "KINETIC MOTION REEL",
    subtitle: "HARINDER.MP4 // 03",
    src: "/assets/videos/reel_03.mp4",
    poster: "/assets/images/reel_03_poster.jpg",
    tag: "Pacing & Sound",
    isVertical: true,
  },
  {
    id: "4",
    title: "EDITORIAL SHORT",
    subtitle: "HARINDER.MP4 // 04",
    src: "/assets/videos/reel_04.mp4",
    poster: "/assets/images/reel_04_poster.jpg",
    tag: "Short-Form",
    isVertical: true,
  },
  {
    id: "5",
    title: "FEATURED FILM",
    subtitle: "HARINDER.MP4 // 05",
    src: "/assets/videos/featured_film.mp4",
    poster: "/assets/images/featured_film_poster.jpg",
    tag: "Master Sound",
    isVertical: false,
  },
  {
    id: "6",
    title: "CLIENT CAMPAIGN",
    subtitle: "HARINDER.MP4 // 06",
    src: "/assets/videos/rahul_reel.mp4",
    poster: "/assets/images/project_fashion_film.jpg",
    tag: "Brand Growth",
    isVertical: true,
  },
  {
    id: "7",
    title: "HOOK & RETENTION CUT",
    subtitle: "HARINDER.MP4 // 07",
    src: "/assets/videos/video_50363.mp4",
    poster: "/assets/images/project_brand_film.jpg",
    tag: "Algorithm Ready",
    isVertical: true,
  },
  {
    id: "8",
    title: "SHOWCASE PREVIEW",
    subtitle: "HARINDER.MP4 // 08",
    src: "/assets/videos/showcase_preview.mp4",
    poster: "/assets/images/project_creator_reel.jpg",
    tag: "Vertical 9:16",
    isVertical: true,
  },
  {
    id: "9",
    title: "NARRATIVE PACING REEL",
    subtitle: "HARINDER.MP4 // 09",
    src: "/assets/videos/reel_01.mp4",
    poster: "/assets/images/reel_03_poster.jpg",
    tag: "Fast Cuts",
    isVertical: true,
  },
  {
    id: "10",
    title: "INSTAGRAM REELS EDIT",
    subtitle: "HARINDER.MP4 // 10",
    src: "/assets/videos/reel_02.mp4",
    poster: "/assets/images/reel_04_poster.jpg",
    tag: "Visual Hook",
    isVertical: true,
  },
]

interface VideoCarousel3DProps {
  onSelectVideo: (video: CinemaVideoData) => void
}

export default function VideoCarousel3D({ onSelectVideo }: VideoCarousel3DProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isDraggingRef = useRef(false)
  const startXRef = useRef(0)
  const currentAngleRef = useRef(0)
  const targetAngleRef = useRef(0)
  const velocityRef = useRef(0)
  const dragDistanceRef = useRef(0)
  const animFrameRef = useRef<number | null>(null)
  const [radius, setRadius] = useState(580)
  const [, setTick] = useState(0)

  const updateRadius = useCallback(() => {
    const w = window.innerWidth
    if (w < 480) setRadius(270)
    else if (w < 768) setRadius(360)
    else if (w < 1100) setRadius(480)
    else setRadius(580)
  }, [])

  useEffect(() => {
    updateRadius()
    window.addEventListener("resize", updateRadius)
    return () => window.removeEventListener("resize", updateRadius)
  }, [updateRadius])

  // Physics animation loop
  useEffect(() => {
    let lastTime = performance.now()

    const loop = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1)
      lastTime = time

      if (!isDraggingRef.current) {
        // Apply ambient continuous rotation
        targetAngleRef.current += 10 * dt
        // Apply momentum inertia
        velocityRef.current *= 0.92
        targetAngleRef.current += velocityRef.current
      }

      // Smooth lerp towards target angle
      currentAngleRef.current += (targetAngleRef.current - currentAngleRef.current) * 0.1
      setTick((t) => (t + 1) % 10000)

      animFrameRef.current = requestAnimationFrame(loop)
    }

    animFrameRef.current = requestAnimationFrame(loop)
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current)
    }
  }, [])

  // Drag handlers
  const onPointerDown = (clientX: number) => {
    isDraggingRef.current = true
    startXRef.current = clientX
    dragDistanceRef.current = 0
    velocityRef.current = 0
  }

  const onPointerMove = (clientX: number) => {
    if (!isDraggingRef.current) return
    const dx = clientX - startXRef.current
    dragDistanceRef.current += Math.abs(dx)
    startXRef.current = clientX
    const deltaAngle = (dx / window.innerWidth) * 160
    targetAngleRef.current -= deltaAngle
    velocityRef.current = -deltaAngle * 0.8
  }

  const onPointerUp = () => {
    isDraggingRef.current = false
  }

  const count = CAROUSEL_ITEMS.length
  const step = 360 / count
  const currAngle = currentAngleRef.current

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "1400px",
        height: "460px",
        margin: "0 auto",
        perspective: "1100px",
        overflow: "hidden",
        userSelect: "none",
        cursor: isDraggingRef.current ? "grabbing" : "grab",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseDown={(e) => onPointerDown(e.clientX)}
      onMouseMove={(e) => onPointerMove(e.clientX)}
      onMouseUp={onPointerUp}
      onMouseLeave={onPointerUp}
      onTouchStart={(e) => onPointerDown(e.touches[0].clientX)}
      onTouchMove={(e) => onPointerMove(e.touches[0].clientX)}
      onTouchEnd={onPointerUp}
    >
      {/* 3D Scene Cylinder */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {CAROUSEL_ITEMS.map((item, index) => {
          const angle = ((index * step + currAngle) % 360 + 360) % 360
          const rad = (angle * Math.PI) / 180
          const cosVal = Math.cos(rad)

          // 3D positioning along cylindrical ring
          const zIndex = Math.round((cosVal + 1) * 100)
          const opacity = cosVal > 0 ? 0.35 + 0.65 * Math.pow(cosVal, 1.2) : 0.08
          const isFront = cosVal > 0.35

          return (
            <div
              key={item.id}
              onClick={(e) => {
                if (dragDistanceRef.current > 8) {
                  e.preventDefault()
                  return
                }
                onSelectVideo({
                  title: item.title,
                  subtitle: item.subtitle,
                  src: item.src,
                  poster: item.poster,
                  isVertical: item.isVertical,
                })
              }}
              style={{
                position: "absolute",
                width: "250px",
                height: "360px",
                borderRadius: "20px",
                overflow: "hidden",
                border: "1px solid rgba(255, 255, 255, 0.14)",
                backgroundColor: "#130d09",
                boxShadow: isFront
                  ? "0 20px 40px rgba(0, 0, 0, 0.8), 0 0 30px rgba(235, 89, 5, 0.25)"
                  : "0 10px 20px rgba(0, 0, 0, 0.6)",
                transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                zIndex,
                opacity,
                pointerEvents: isFront ? "auto" : "none",
                transition: "box-shadow 0.2s, border-color 0.2s",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Media Container */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                }}
              >
                <video
                  src={item.src}
                  poster={item.poster}
                  muted
                  loop
                  playsInline
                  autoPlay
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                {/* Gradient vignette */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 40%, rgba(9,4,1,0.85) 100%)",
                    pointerEvents: "none",
                  }}
                />
                {/* Card Tag */}
                <div
                  style={{
                    position: "absolute",
                    top: "12px",
                    left: "12px",
                    backgroundColor: "rgba(16, 11, 8, 0.75)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    borderRadius: "100px",
                    padding: "4px 10px",
                    fontSize: "10px",
                    fontWeight: 600,
                    letterSpacing: "0.5px",
                    color: "#f8f5f2",
                  }}
                >
                  {item.tag}
                </div>
                {/* Play Icon Pill Overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: isFront ? 0.9 : 0.4,
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(207, 103, 42, 0.85)",
                      backdropFilter: "blur(6px)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 0 20px rgba(207, 103, 42, 0.6)",
                      border: "1px solid rgba(255, 255, 255, 0.4)",
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                </div>
                {/* Card Title Bottom */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "12px",
                    left: "12px",
                    right: "12px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "10px",
                      letterSpacing: "0.8px",
                      color: "#e86726",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      display: "block",
                    }}
                  >
                    {item.subtitle}
                  </span>
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#fff",
                      fontFamily: "PP Neue Montreal Medium, sans-serif",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "block",
                    }}
                  >
                    {item.title}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
