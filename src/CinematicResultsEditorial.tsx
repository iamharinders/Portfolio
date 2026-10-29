import React from "react"
import { CinemaVideoData } from "./CinemaModal"

interface ResultCase {
  id: string
  title: string
  client: string
  metric: string
  metricLabel: string
  description: string
  imageSrc: string
  videoSrc?: string
  aspect: "landscape" | "portrait" | "split"
  tag: string
}

const RESULT_CASES: ResultCase[] = [
  {
    id: "case-1",
    title: "ACES Color Science & Narrative Hook",
    client: "wearnova",
    metric: "+10K",
    metricLabel: "Followers in 30 Days",
    description: "Complete post-production overhaul: split-graded in DaVinci Resolve Studio with Kodak 2383 emulation, custom sound effects, and kinetic subtitles.",
    imageSrc: "/assets/images/casestudy_grade_split.jpg",
    videoSrc: "/assets/videos/reel_01.mp4",
    aspect: "split",
    tag: "Color & Narrative",
  },
  {
    id: "case-2",
    title: "Viral Creator Commercial Cut",
    client: "techcreator",
    metric: "1.2M+",
    metricLabel: "Organic Views",
    description: "Built for peak completion rate with aggressive opening 3-second hook placement, rhythmic audio transitions, and algorithmic punch-ins.",
    imageSrc: "/assets/images/project_brand_film.jpg",
    videoSrc: "/assets/videos/reel_02.mp4",
    aspect: "landscape",
    tag: "Hook Engineering",
  },
  {
    id: "case-3",
    title: "Kinetic Motion & Speed Ramp Reel",
    client: "productbrand",
    metric: "3.4X",
    metricLabel: "Watch Duration Lift",
    description: "Speed-ramped action synced to custom sound design. Captivated viewers through pattern interrupts and dynamic visual pacing.",
    imageSrc: "/assets/images/project_creator_reel.jpg",
    videoSrc: "/assets/videos/reel_03.mp4",
    aspect: "portrait",
    tag: "Pacing & Sound",
  },
  {
    id: "case-4",
    title: "High-Fashion Editorial Aesthetic",
    client: "editorialcut",
    metric: "89%",
    metricLabel: "Average Completion Rate",
    description: "Minimalist editorial aesthetic with analog film grain, typography, and atmospheric soundscapes designed for brand authority.",
    imageSrc: "/assets/images/project_fashion_film.jpg",
    videoSrc: "/assets/videos/rahul_reel.mp4",
    aspect: "portrait",
    tag: "Editorial Cut",
  },
]

interface ResultsProps {
  onSelectVideo?: (video: CinemaVideoData) => void
}

export default function CinematicResultsEditorial({ onSelectVideo }: ResultsProps) {
  return (
    <section
      id="results"
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "100vw",
        overflow: "hidden",
        padding: "120px 0 100px",
        backgroundColor: "#050607",
        boxSizing: "border-box",
      }}
      aria-label="Editorial client results and growth case studies"
    >
      {/* Background ambient lighting */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "5%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(1, 47, 37, 0.35) 0%, rgba(6, 59, 61, 0.12) 50%, transparent 70%)",
          filter: "blur(90px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1360px",
          margin: "0 auto",
          padding: "0 clamp(16px, 4vw, 40px)",
          boxSizing: "border-box",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "24px",
            marginBottom: "60px",
          }}
        >
          <div>
            <div style={{ marginBottom: "16px" }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "11px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "1.8px",
                  color: "#FAF2A0",
                  backgroundColor: "rgba(1, 47, 37, 0.6)",
                  border: "1px solid rgba(1, 93, 103, 0.4)",
                  padding: "6px 16px",
                  borderRadius: "100px",
                  fontFamily: "'Chivo Mono', monospace",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    backgroundColor: "#F7A23B",
                    boxShadow: "0 0 8px #F7A23B",
                  }}
                />
                CLIENT RESULTS & CASE STUDIES
              </span>
            </div>

            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(34px, 5vw, 64px)",
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: "-0.03em",
                color: "#F2E8D5",
                margin: "0 0 12px",
              }}
            >
              We don't just make it look good —{" "}
              <span
                style={{
                  backgroundImage: "linear-gradient(135deg, #F2E8D5 0%, #FAF2A0 40%, #F7A23B 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                we make it work.
              </span>
            </h2>

            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "16px",
                color: "#C5B8A5",
                maxWidth: "600px",
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              Every case study below represents real projects edited with Harinder.MP4 post-production pipelines.
            </p>
          </div>

          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              color: "#F2E8D5",
              padding: "12px 24px",
              borderRadius: "100px",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "14px",
              fontWeight: 700,
              textDecoration: "none",
              backdropFilter: "blur(12px)",
              transition: "all 0.2s ease",
            }}
          >
            <span>Start a Project</span>
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

        {/* ASYMMETRIC EDITORIAL GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "28px",
          }}
        >
          {/* Case 1: Large Featured Hero Card (Span 12 cols desktop, 60/40 visual vs narrative) */}
          <div
            onClick={() => {
              if (onSelectVideo && RESULT_CASES[0].videoSrc) {
                onSelectVideo({
                  id: RESULT_CASES[0].id,
                  title: RESULT_CASES[0].title,
                  category: RESULT_CASES[0].tag,
                  aspect: "9:16",
                  videoUrl: RESULT_CASES[0].videoSrc,
                  posterUrl: RESULT_CASES[0].imageSrc,
                  description: RESULT_CASES[0].description,
                })
              }
            }}
            style={{
              gridColumn: "span 12",
              backgroundColor: "rgba(10, 16, 16, 0.7)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              borderRadius: "28px",
              padding: "clamp(24px, 4vw, 40px)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "36px",
              alignItems: "center",
              cursor: "pointer",
              transition: "border-color 0.25s ease, box-shadow 0.25s ease",
              boxShadow: "0 25px 60px rgba(0, 0, 0, 0.8)",
            }}
            className="result-card-featured"
          >
            <div style={{ position: "relative", borderRadius: "18px", overflow: "hidden", aspectRatio: "16 / 10" }}>
              <img
                src={RESULT_CASES[0].imageSrc}
                alt={RESULT_CASES[0].title}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "12px",
                  left: "12px",
                  backgroundColor: "rgba(5, 6, 7, 0.8)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  borderRadius: "8px",
                  padding: "4px 10px",
                  fontSize: "11px",
                  fontFamily: "'Chivo Mono', monospace",
                  color: "#FAF2A0",
                }}
              >
                ACES LOG VS GRADED // COMPARISON
              </div>
            </div>

            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <span style={{ fontFamily: "'Chivo Mono', monospace", fontSize: "11px", color: "#F7A23B", letterSpacing: "1px" }}>
                  CASE STUDY // {RESULT_CASES[0].client}
                </span>
                <span style={{ color: "rgba(255, 255, 255, 0.3)" }}>•</span>
                <span style={{ fontFamily: "'Chivo Mono', monospace", fontSize: "11px", color: "#FAF2A0" }}>
                  {RESULT_CASES[0].tag}
                </span>
              </div>

              <div style={{ display: "flex", alignItems: "baseline", gap: "10px", marginBottom: "12px" }}>
                <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(48px, 6vw, 68px)", fontWeight: 800, color: "#F2E8D5", lineHeight: 1 }}>
                  {RESULT_CASES[0].metric}
                </div>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "16px", fontWeight: 600, color: "#F7A23B" }}>
                  {RESULT_CASES[0].metricLabel}
                </div>
              </div>

              <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "22px", fontWeight: 700, color: "#F2E8D5", margin: "0 0 12px" }}>
                {RESULT_CASES[0].title}
              </h3>
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "15px", color: "#C5B8A5", lineHeight: 1.6, margin: "0 0 20px" }}>
                {RESULT_CASES[0].description}
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", fontFamily: "'Chivo Mono', monospace", color: "#F7A23B" }}>
                <span>▶ CLICK TO WATCH CASE EDIT</span>
                <svg
                  width="11"
                  height="11"
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
              </div>
            </div>
          </div>

          {/* Cases 2, 3, 4: Asymmetric 3-Column Split */}
          {RESULT_CASES.slice(1).map((c) => (
            <div
              key={c.id}
              onClick={() => {
                if (onSelectVideo && c.videoSrc) {
                  onSelectVideo({
                    id: c.id,
                    title: c.title,
                    category: c.tag,
                    aspect: "9:16",
                    videoUrl: c.videoSrc,
                    posterUrl: c.imageSrc,
                    description: c.description,
                  })
                }
              }}
              style={{
                gridColumn: "span 4",
                backgroundColor: "rgba(10, 16, 16, 0.65)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "24px",
                padding: "24px",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                cursor: "pointer",
                transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                boxShadow: "0 20px 45px rgba(0, 0, 0, 0.7)",
              }}
              className="result-card-editorial"
            >
              <div>
                <div style={{ position: "relative", borderRadius: "14px", overflow: "hidden", aspectRatio: "16 / 11", marginBottom: "20px" }}>
                  <img src={c.imageSrc} alt={c.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  <div
                    style={{
                      position: "absolute",
                      top: "10px",
                      left: "10px",
                      backgroundColor: "rgba(5, 6, 7, 0.8)",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      borderRadius: "6px",
                      padding: "3px 8px",
                      fontSize: "10px",
                      fontFamily: "'Chivo Mono', monospace",
                      color: "#FAF2A0",
                    }}
                  >
                    {c.tag}
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "8px" }}>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "36px", fontWeight: 800, color: "#F2E8D5", lineHeight: 1 }}>
                    {c.metric}
                  </div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "13px", fontWeight: 600, color: "#F7A23B" }}>
                    {c.metricLabel}
                  </div>
                </div>

                <h4 style={{ fontFamily: "'Syne', sans-serif", fontSize: "17px", fontWeight: 700, color: "#F2E8D5", margin: "0 0 8px" }}>
                  {c.title}
                </h4>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "13px", color: "#C5B8A5", lineHeight: 1.55, margin: 0 }}>
                  {c.description}
                </p>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", fontFamily: "'Chivo Mono', monospace", color: "#F7A23B", marginTop: "18px" }}>
                <span>PLAY REEL</span>
                <svg
                  width="11"
                  height="11"
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
