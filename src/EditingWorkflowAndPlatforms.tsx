import React, { useRef, useState, useEffect } from "react"

export default function EditingWorkflowAndPlatforms() {
  const platformsRef = useRef<HTMLDivElement>(null)
  const [platformsEntered, setPlatformsEntered] = useState(false)

  // Observer for Platform Section Scroll Entrance
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setPlatformsEntered(true)
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    )

    if (platformsRef.current) {
      observer.observe(platformsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="services"
      ref={platformsRef}
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "100vw",
        backgroundColor: "#FFFFFF",
        padding: "clamp(28px, 4vh, 48px) 0 clamp(32px, 4.5vh, 52px)",
        boxSizing: "border-box",
        borderTop: "1px solid rgba(0, 0, 0, 0.06)",
      }}
      aria-label="Native platform conversion suite for YouTube Shorts, Instagram Reels, and TikTok"
    >
      <div
        id="platforms"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 clamp(18px, 4vw, 40px)",
          boxSizing: "border-box",
        }}
      >
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "clamp(20px, 3vh, 32px)" }}>
          <div style={{ marginBottom: "12px" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 16px",
                borderRadius: "100px",
                backgroundColor: "rgba(0, 0, 0, 0.04)",
                border: "1px solid rgba(0, 0, 0, 0.08)",
                fontFamily: "'Chivo Mono', monospace",
                fontSize: "11px",
                fontWeight: 700,
                color: "#111111",
                letterSpacing: "1.2px",
                textTransform: "uppercase",
              }}
            >
              Native Multi-Platform Mastery
            </span>
          </div>

          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(30px, 4.5vw, 54px)",
              fontWeight: 800,
              color: "#111111",
              margin: "0 0 14px",
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              opacity: platformsEntered ? 1 : 0,
              transform: platformsEntered ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
            }}
          >
            Engineered for High-Conversion Platforms.
          </h2>
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(14px, 1.3vw, 17px)",
              color: "#555555",
              maxWidth: "640px",
              margin: "0 auto",
              lineHeight: 1.6,
              opacity: platformsEntered ? 1 : 0,
              transform: platformsEntered ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.15s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.15s",
            }}
          >
            Customized around each platform’s algorithmic distribution model with native vertical framing and high-engagement retention pacing.
          </p>
        </div>

        {/* 3 Horizontal Platform Logo Cards (YouTube Shorts, Instagram Reels, TikTok) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
            gap: "clamp(24px, 3vw, 36px)",
          }}
        >
          {/* PLATFORM 1: YOUTUBE SHORTS */}
          <div
            style={{
              backgroundColor: "#FAFAFA",
              border: "1px solid rgba(0, 0, 0, 0.08)",
              borderRadius: "28px",
              padding: "clamp(28px, 3.5vw, 40px)",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.04)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              opacity: platformsEntered ? 1 : 0,
              transform: platformsEntered ? "translateY(0) scale(1)" : "translateY(24px) scale(0.92)",
              transition: platformsEntered
                ? "transform 180ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 180ms ease, border-color 180ms ease"
                : "opacity 0.5s ease 0.1s, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
              cursor: "pointer",
              willChange: "transform, box-shadow",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px) scale(1.03)"
              e.currentTarget.style.borderColor = "rgba(0, 0, 0, 0.25)"
              e.currentTarget.style.boxShadow = "0 24px 50px rgba(0, 0, 0, 0.12)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)"
              e.currentTarget.style.borderColor = "rgba(0, 0, 0, 0.08)"
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.04)"
            }}
          >
            {/* Original 3D Logo Asset with authentic original brand colors */}
            <div
              style={{
                width: "160px",
                height: "160px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              <img
                src="/assets/images/youtube_shorts_3d.png"
                alt="YouTube Shorts 3D Logo"
                style={{
                  maxHeight: "150px",
                  width: "auto",
                  objectFit: "contain",
                  filter: "drop-shadow(0 14px 25px rgba(255, 0, 0, 0.25))",
                  transition: "transform 0.25s ease",
                }}
              />
            </div>

            <span
              style={{
                fontFamily: "'Chivo Mono', monospace",
                fontSize: "11px",
                fontWeight: 700,
                color: "#111111",
                letterSpacing: "1.2px",
                textTransform: "uppercase",
                marginBottom: "8px",
              }}
            >
              Search & Browse Velocity
            </span>

            <h3
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "26px",
                fontWeight: 800,
                color: "#111111",
                margin: "0 0 12px",
              }}
            >
              YouTube Shorts
            </h3>

            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "14px",
                color: "#555555",
                lineHeight: 1.6,
                margin: "0 0 20px",
              }}
            >
              Hook-driven edits designed for high click-through rates, continuous looping, and algorithmic browse recommendations.
            </p>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 14px",
                backgroundColor: "#FFFFFF",
                borderRadius: "100px",
                border: "1px solid rgba(0, 0, 0, 0.08)",
                fontFamily: "'Chivo Mono', monospace",
                fontSize: "11px",
                fontWeight: 600,
                color: "#111111",
                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.03)",
              }}
            >
              <span>1.2M+ Views Avg</span>
              <span style={{ color: "#888888" }}>•</span>
              <span>88.4% Retention</span>
            </div>
          </div>

          {/* PLATFORM 2: INSTAGRAM REELS */}
          <div
            style={{
              backgroundColor: "#FAFAFA",
              border: "1px solid rgba(0, 0, 0, 0.08)",
              borderRadius: "28px",
              padding: "clamp(28px, 3.5vw, 40px)",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.04)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              opacity: platformsEntered ? 1 : 0,
              transform: platformsEntered ? "translateY(0) scale(1)" : "translateY(24px) scale(0.92)",
              transition: platformsEntered
                ? "transform 180ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 180ms ease, border-color 180ms ease"
                : "opacity 0.5s ease 0.2s, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
              cursor: "pointer",
              willChange: "transform, box-shadow",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px) scale(1.03)"
              e.currentTarget.style.borderColor = "rgba(0, 0, 0, 0.25)"
              e.currentTarget.style.boxShadow = "0 24px 50px rgba(0, 0, 0, 0.12)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)"
              e.currentTarget.style.borderColor = "rgba(0, 0, 0, 0.08)"
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.04)"
            }}
          >
            {/* Original 3D Logo Asset with authentic Instagram gradient */}
            <div
              style={{
                width: "160px",
                height: "160px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              <img
                src="/assets/images/instagram_reels_3d.png"
                alt="Instagram Reels 3D Logo"
                style={{
                  maxHeight: "150px",
                  width: "auto",
                  objectFit: "contain",
                  filter: "drop-shadow(0 14px 25px rgba(225, 48, 108, 0.25))",
                  transition: "transform 0.25s ease",
                }}
              />
            </div>

            <span
              style={{
                fontFamily: "'Chivo Mono', monospace",
                fontSize: "11px",
                fontWeight: 700,
                color: "#111111",
                letterSpacing: "1.2px",
                textTransform: "uppercase",
                marginBottom: "8px",
              }}
            >
              Aesthetic & Save Rate
            </span>

            <h3
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "26px",
                fontWeight: 800,
                color: "#111111",
                margin: "0 0 12px",
              }}
            >
              Instagram Reels
            </h3>

            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "14px",
                color: "#555555",
                lineHeight: 1.6,
                margin: "0 0 20px",
              }}
            >
              ACES color-graded visuals, kinetic typography, and shareable hooks optimized for the Instagram Explore algorithm and save loops.
            </p>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 14px",
                backgroundColor: "#FFFFFF",
                borderRadius: "100px",
                border: "1px solid rgba(0, 0, 0, 0.08)",
                fontFamily: "'Chivo Mono', monospace",
                fontSize: "11px",
                fontWeight: 600,
                color: "#111111",
                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.03)",
              }}
            >
              <span>4.8x Share Ratio</span>
              <span style={{ color: "#888888" }}>•</span>
              <span>+22K Followers</span>
            </div>
          </div>

          {/* PLATFORM 3: TIKTOK */}
          <div
            style={{
              backgroundColor: "#FAFAFA",
              border: "1px solid rgba(0, 0, 0, 0.08)",
              borderRadius: "28px",
              padding: "clamp(28px, 3.5vw, 40px)",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.04)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              opacity: platformsEntered ? 1 : 0,
              transform: platformsEntered ? "translateY(0) scale(1)" : "translateY(24px) scale(0.92)",
              transition: platformsEntered
                ? "transform 180ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 180ms ease, border-color 180ms ease"
                : "opacity 0.5s ease 0.3s, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.3s",
              cursor: "pointer",
              willChange: "transform, box-shadow",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px) scale(1.03)"
              e.currentTarget.style.borderColor = "rgba(0, 0, 0, 0.25)"
              e.currentTarget.style.boxShadow = "0 24px 50px rgba(0, 0, 0, 0.12)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)"
              e.currentTarget.style.borderColor = "rgba(0, 0, 0, 0.08)"
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.04)"
            }}
          >
            {/* Original 3D Logo Asset with authentic black, cyan, and red/pink accents */}
            <div
              style={{
                width: "160px",
                height: "160px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              <img
                src="/assets/images/tiktok_videos_3d.png"
                alt="TikTok Videos 3D Logo"
                style={{
                  maxHeight: "150px",
                  width: "auto",
                  objectFit: "contain",
                  filter: "drop-shadow(0 14px 25px rgba(0, 242, 234, 0.25))",
                  transition: "transform 0.4s ease",
                }}
              />
            </div>

            <span
              style={{
                fontFamily: "'Chivo Mono', monospace",
                fontSize: "11px",
                fontWeight: 700,
                color: "#111111",
                letterSpacing: "1.2px",
                textTransform: "uppercase",
                marginBottom: "8px",
              }}
            >
              High-Velocity Algorithm
            </span>

            <h3
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "26px",
                fontWeight: 800,
                color: "#111111",
                margin: "0 0 12px",
              }}
            >
              TikTok Videos
            </h3>

            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "14px",
                color: "#555555",
                lineHeight: 1.6,
                margin: "0 0 20px",
              }}
            >
              Immediate 0-second pattern interrupts, rapid speed-ramping, and viral pacing tuned to the TikTok For You recommendation engine.
            </p>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 14px",
                backgroundColor: "#FFFFFF",
                borderRadius: "100px",
                border: "1px solid rgba(0, 0, 0, 0.08)",
                fontFamily: "'Chivo Mono', monospace",
                fontSize: "11px",
                fontWeight: 600,
                color: "#111111",
                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.03)",
              }}
            >
              <span>92.1% Completion</span>
              <span style={{ color: "#888888" }}>•</span>
              <span>Viral Velocity</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
