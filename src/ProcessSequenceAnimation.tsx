import React, { useEffect, useRef, useState } from "react"

interface ProcessStep {
  number: string
  title: string
  lead: string
  description: string
  icon: string
  tag: string
  deliverables: string[]
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Send your clips",
    lead: "Raw Ingestion & Briefing",
    description: "Drop your raw camera footage, screen recordings, or talking head clips into our private shared drive. Share your vision, references, or let us direct the narrative from scratch.",
    icon: "📥",
    tag: "CLOUD INGESTION",
    deliverables: ["Drive / Dropbox / Frame.io Link", "Asset Logging & Sync", "Style Alignment"],
  },
  {
    number: "02",
    title: "We craft your videos",
    lead: "Editorial, Grading & Sound",
    description: "We engineer each video for peak viewer retention: cutting out dead air, designing aggressive visual hooks, color grading in DaVinci Resolve, and scoring custom soundscapes.",
    icon: "⚡",
    tag: "POST-PRODUCTION",
    deliverables: ["Kinetic Word-By-Word Subtitles", "ACES Color Grading", "Rhythmic Sound FX & Beats"],
  },
  {
    number: "03",
    title: "Watch your content grow online",
    lead: "Algorithmic Delivery & Reach",
    description: "Receive your fully polished, platform-ready 9:16 vertical videos in 24 to 48 hours. Ready to upload immediately to TikTok, Instagram Reels, and YouTube Shorts.",
    icon: "📈",
    tag: "HIGH ENGAGEMENT",
    deliverables: ["4K HDR Vertical Masters", "Optimized Thumbnail Frames", "Iterative Revisions Included"],
  },
]

export default function ProcessSequenceAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeStep, setActiveStep] = useState(0)
  const [inView, setInView] = useState(false)

  const timersRef = useRef<number[]>([])

  useEffect(() => {
    const prefersReducedMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) {
      setInView(true)
      setActiveStep(3)
      return
    }

    const clearAllTimers = () => {
      timersRef.current.forEach((t) => clearTimeout(t))
      timersRef.current = []
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true)
            clearAllTimers()
            // Trigger automatic staged reveals sequentially as user scrolls in
            timersRef.current.push(window.setTimeout(() => setActiveStep(1), 150))
            timersRef.current.push(window.setTimeout(() => setActiveStep(2), 500))
            timersRef.current.push(window.setTimeout(() => setActiveStep(3), 850))
          }
        }
      },
      { threshold: 0.05, rootMargin: "60px 0px 60px 0px" }
    )

    if (containerRef.current) observer.observe(containerRef.current)

    // Safety fallback: ensure steps become active even if observer fires late
    const safetyTimer = window.setTimeout(() => {
      setInView(true)
      setActiveStep(3)
    }, 1500)

    return () => {
      observer.disconnect()
      clearAllTimers()
      clearTimeout(safetyTimer)
    }
  }, [])

  return (
    <section
      ref={containerRef}
      id="process"
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "100vw",
        overflow: "hidden",
        padding: "clamp(60px, 8vh, 110px) 0 clamp(50px, 7vh, 100px)",
        backgroundColor: "#FFFFFF",
        borderTop: "1px solid rgba(0, 0, 0, 0.08)",
        boxSizing: "border-box",
      }}
      aria-label="Step-by-step editing and delivery workflow process"
    >
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
        <div style={{ textAlign: "center", marginBottom: "65px" }}>
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
                color: "#111111",
                backgroundColor: "rgba(0, 0, 0, 0.04)",
                border: "1px solid rgba(0, 0, 0, 0.08)",
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
                  backgroundColor: "#8FAF91",
                  boxShadow: "0 0 8px rgba(143, 175, 145, 0.5)",
                }}
              />
              HOW WE DO IT // 3-STEP PIPELINE
            </span>
          </div>

          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(34px, 5.2vw, 68px)",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              color: "#111111",
              margin: "0 0 16px",
            }}
          >
            From raw clips to ready-to-post.{" "}
            <span
              style={{
                color: "#111111",
              }}
            >
              Here’s how we do it.
            </span>
          </h2>

          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(16px, 1.8vw, 20px)",
              color: "#555555",
              maxWidth: "680px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Zero complexity. You create the raw footage, we handle the entire storytelling, grading, and sound engineering pipeline.
          </p>
        </div>

        {/* 3 Sequential Step Cards (Never disappear permanently, no manual slider!) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "28px",
            alignItems: "stretch",
          }}
        >
          {PROCESS_STEPS.map((step, idx) => {
            const isVisible = activeStep >= idx + 1 || inView
            return (
              <div
                key={step.number}
                style={{
                  backgroundColor: "#FAFAFA",
                  border: isVisible ? "1px solid rgba(0, 0, 0, 0.12)" : "1px solid rgba(0, 0, 0, 0.06)",
                  borderRadius: "26px",
                  padding: "clamp(26px, 4vw, 36px) clamp(20px, 3.5vw, 30px)",
                  boxShadow: "0 12px 35px rgba(0, 0, 0, 0.04)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0) scale(1)" : "translateY(28px) scale(0.98)",
                  transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.18}s, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.18}s, border-color 0.3s ease, box-shadow 0.3s ease`,
                }}
                className="process-step-glass"
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px" }}>
                    <span
                      style={{
                        fontFamily: "'Chivo Mono', monospace",
                        fontSize: "28px",
                        fontWeight: 800,
                        color: "#111111",
                      }}
                    >
                      {step.number}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Chivo Mono', monospace",
                        fontSize: "11px",
                        color: "#111111",
                        backgroundColor: "rgba(0, 0, 0, 0.05)",
                        border: "1px solid rgba(0, 0, 0, 0.08)",
                        padding: "4px 10px",
                        borderRadius: "100px",
                      }}
                    >
                      {step.tag}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "24px",
                      fontWeight: 800,
                      color: "#111111",
                      margin: "0 0 6px",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {step.title}
                  </h3>

                  <div
                    style={{
                      fontFamily: "'Chivo Mono', monospace",
                      fontSize: "12px",
                      color: "#666666",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                      marginBottom: "16px",
                    }}
                  >
                    {step.lead}
                  </div>

                  <p
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: "14px",
                      color: "#555555",
                      lineHeight: 1.6,
                      margin: "0 0 24px",
                    }}
                  >
                    {step.description}
                  </p>
                </div>

                <div style={{ borderTop: "1px solid rgba(0, 0, 0, 0.08)", paddingTop: "18px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    {step.deliverables.map((item, dIdx) => (
                      <div key={dIdx} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", color: "#111111" }}>
                        <span style={{ color: "#111111", fontWeight: 700 }}>✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
