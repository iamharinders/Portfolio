import { useEffect, useRef } from "react"

export interface CinemaVideoData {
  id?: string
  title: string
  subtitle?: string
  category?: string
  client?: string
  src?: string
  videoUrl?: string
  poster?: string
  posterUrl?: string
  isVertical?: boolean
  aspect?: string
  specs?: string
  description?: string
}

interface CinemaModalProps {
  video: CinemaVideoData | null
  onClose: () => void
}

export default function CinemaModal({ video, onClose }: CinemaModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (video) {
      document.body.style.overflow = "hidden"
      window.addEventListener("keydown", handleKeyDown)
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [video, onClose])

  // Explicitly trigger playback when video opens
  useEffect(() => {
    if (video && videoRef.current) {
      const vid = videoRef.current
      const playPromise = vid.play()
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn("Autoplay restricted, attempting fallback play:", err)
          vid.muted = true
          vid.play().catch((e) => console.error("Playback failed:", e))
        })
      }
    }
  }, [video])

  if (!video) return null

  const isVertical = video.isVertical ?? true

  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        backgroundColor: "rgba(5, 2, 1, 0.92)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: "relative",
          width: isVertical ? "min(420px, 92vw)" : "min(960px, 94vw)",
          maxHeight: "92vh",
          backgroundColor: "#100b08",
          border: "1px solid rgba(235, 89, 5, 0.3)",
          borderRadius: "24px",
          overflow: "hidden",
          boxShadow: "0 30px 80px rgba(0, 0, 0, 0.9), 0 0 40px rgba(235, 89, 5, 0.2)",
          display: "flex",
          flexDirection: "column",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px 22px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            backgroundColor: "rgba(255, 255, 255, 0.02)",
          }}
        >
          <div>
            <span
              style={{
                fontSize: "11px",
                letterSpacing: "1.2px",
                textTransform: "uppercase",
                color: "#e86726",
                fontWeight: 600,
              }}
            >
              {video.subtitle ?? video.client ?? "HARINDER.MP4 // REEL PREVIEW"}
            </span>
            <h3
              style={{
                margin: "4px 0 0",
                fontSize: "18px",
                fontWeight: 600,
                color: "#fff",
                fontFamily: "PP Neue Montreal Medium, sans-serif",
              }}
            >
              {video.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{
              background: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              color: "#fff",
              borderRadius: "50%",
              width: "36px",
              height: "36px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "16px",
              cursor: "pointer",
              transition: "background 0.2s",
            }}
          >
            ✕
          </button>
        </div>

        {/* Video Player Stage */}
        <div
          style={{
            position: "relative",
            backgroundColor: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            maxHeight: isVertical ? "72vh" : "65vh",
          }}
        >
          <video
            ref={videoRef}
            src={video.src || video.videoUrl}
            poster={video.poster || video.posterUrl}
            controls
            autoPlay
            playsInline
            style={{
              width: "100%",
              height: "100%",
              maxHeight: isVertical ? "72vh" : "65vh",
              objectFit: "contain",
              display: "block",
            }}
          />
        </div>

        {/* Footer info */}
        <div
          style={{
            padding: "12px 22px",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: "12px",
            color: "rgba(255, 255, 255, 0.6)",
          }}
        >
          <span>{video.specs ?? "Vertical 9:16 · High-Retention Pace · Master Grade"}</span>
          <span style={{ fontSize: "11px", color: "rgba(255, 255, 255, 0.4)" }}>Press ESC to close</span>
        </div>
      </div>
    </div>
  )
}
