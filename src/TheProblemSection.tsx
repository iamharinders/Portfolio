import React, { useEffect, useRef, useState } from "react"

export default function TheProblemSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [hasEntered, setHasEntered] = useState(false)
  const [viewsCount, setViewsCount] = useState(0)
  const [retentionPct, setRetentionPct] = useState(0)
  const [targetPct, setTargetPct] = useState(0)
  const [deliveryCount, setDeliveryCount] = useState(0)
  const [dropProgress, setDropProgress] = useState(0) // 0 to 1 for top-to-bottom drop curve

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setHasEntered(true)

            // RAF Count-Up and Animation System
            const duration = 1800
            const start = performance.now()

            const step = (now: number) => {
              const elapsed = now - start
              const progress = Math.min(1, elapsed / duration)
              // Ease-out cubic curve
              const ease = 1 - Math.pow(1 - progress, 3)

              // 1. Metric 1: 0 -> 120K (Audience Reach)
              setViewsCount(Math.round(ease * 120))

              // 2. Metric 2: 0% -> 37% (Average Watch Completion - RED)
              setRetentionPct(Math.round(ease * 37))

              // 3. Metric 3: 0% -> 84% (Target Pacing - GREEN)
              setTargetPct(Math.round(ease * 84))

              // 4. Metric 4: 0 -> 84K (Publishing Output)
              setDeliveryCount(Math.round(ease * 84))

              // 5. Top-to-bottom drop curve draw progress
              setDropProgress(ease)

              if (progress < 1) {
                requestAnimationFrame(step)
              }
            }
            requestAnimationFrame(step)
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="problem"
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "100vw",
        overflow: "hidden",
        padding: "clamp(80px, 10vh, 120px) 0 clamp(70px, 9vh, 110px)",
        backgroundColor: "#FFFFFF",
        boxSizing: "border-box",
      }}
      aria-label="The problem with current short-form video performance"
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 clamp(18px, 4vw, 40px)",
          boxSizing: "border-box",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Section Header */}
        <div
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "clamp(48px, 7vh, 72px)",
          }}
        >
          {/* Diagnostic Tag */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 16px",
              borderRadius: "100px",
              backgroundColor: "rgba(0, 0, 0, 0.04)",
              border: "1px solid rgba(0, 0, 0, 0.08)",
              marginBottom: "20px",
              opacity: hasEntered ? 1 : 0,
              transform: hasEntered ? "translateY(0) scale(1)" : "translateY(16px) scale(0.96)",
              transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                backgroundColor: "#8FAF91",
                animation: "gentle-status-pulse 2.2s infinite ease-in-out",
              }}
            />
            <span
              style={{
                fontFamily: "'Chivo Mono', monospace",
                fontSize: "11px",
                fontWeight: 700,
                color: "#111111",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
              }}
            >
              Diagnostic // Reality Check
            </span>
          </div>

          {/* Main Headline */}
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(32px, 4.8vw, 58px)",
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: "-0.03em",
              color: "#111111",
              margin: "0 0 16px",
              maxWidth: "850px",
              opacity: hasEntered ? 1 : 0,
              transform: hasEntered ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.1s, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
            }}
          >
            Great content,{" "}
            <span style={{ color: "#777777", fontStyle: "italic", fontWeight: 700 }}>
              but no real growth?
            </span>
          </h2>

          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(16px, 1.8vw, 22px)",
              fontWeight: 700,
              color: "#111111",
              maxWidth: "680px",
              margin: "0 0 12px",
              lineHeight: 1.45,
              opacity: hasEntered ? 1 : 0,
              transform: hasEntered ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.2s, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
            }}
          >
            “Views and likes don’t pay the bills.”
          </p>

          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(14px, 1.3vw, 16px)",
              color: "#555555",
              maxWidth: "640px",
              margin: 0,
              lineHeight: 1.6,
              opacity: hasEntered ? 1 : 0,
              transform: hasEntered ? "translateY(0)" : "translateY(18px)",
              transition: "opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.3s, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.3s",
            }}
          >
            You spend hours filming footage, but the algorithm drops your retention in the first 3 seconds. Here is why ordinary edits fail:
          </p>
        </div>

        {/* 3 Metric Performance Visualization Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
            gap: "clamp(20px, 2.5vw, 32px)",
            marginBottom: "clamp(48px, 6vh, 64px)",
          }}
        >
          {/* =========================================================================
              CARD 1: 120K AUDIENCE REACH + TOP-TO-BOTTOM 50% DROP ANIMATION
          ========================================================================= */}
          <div
            style={{
              backgroundColor: "#FAFAFA",
              border: "1px solid rgba(0, 0, 0, 0.08)",
              borderRadius: "24px",
              padding: "clamp(24px, 3vw, 32px)",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.04)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              opacity: hasEntered ? 1 : 0,
              transform: hasEntered ? "translateY(0) scale(1)" : "translateY(30px) scale(0.98)",
              transition: "opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.3s, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.3s",
            }}
          >
            <div>
              {/* Graphic Stage: 120K Views + Top-to-Bottom 50% Drop Curve */}
              <div
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "18px",
                  padding: "20px 22px",
                  border: "1px solid rgba(0, 0, 0, 0.08)",
                  marginBottom: "24px",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.03)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                  <div>
                    <span
                      style={{
                        fontFamily: "'Chivo Mono', monospace",
                        fontSize: "10px",
                        color: "#777777",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        fontWeight: 600,
                      }}
                    >
                      Audience Reach
                    </span>
                    <div
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontSize: "36px",
                        fontWeight: 800,
                        color: "#111111",
                        lineHeight: 1.1,
                      }}
                    >
                      {viewsCount}K
                    </div>
                  </div>
                  <span
                    style={{
                      fontFamily: "'Chivo Mono', monospace",
                      fontSize: "11px",
                      fontWeight: 700,
                      color: "#DC2626",
                      backgroundColor: "rgba(220, 38, 38, 0.08)",
                      padding: "4px 10px",
                      borderRadius: "100px",
                      border: "1px solid rgba(220, 38, 38, 0.2)",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <span>↓</span>
                    <span>-50% drop</span>
                  </span>
                </div>

                {/* Animated Graph Chart: Top to Bottom Drop Animation */}
                <div style={{ position: "relative", width: "100%", height: "105px", marginTop: "10px" }}>
                  {/* Tooltip Badge: "50% Viewers dropped" */}
                  <div
                    style={{
                      position: "absolute",
                      left: "54%",
                      top: "4px",
                      transform: hasEntered ? "translate(-50%, 0) scale(1)" : "translate(-50%, -10px) scale(0.9)",
                      opacity: hasEntered ? 1 : 0,
                      transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) 1s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 1s",
                      backgroundColor: "#111111",
                      color: "#FFFFFF",
                      fontFamily: "'Chivo Mono', monospace",
                      fontSize: "10px",
                      fontWeight: 700,
                      padding: "4px 10px",
                      borderRadius: "6px",
                      boxShadow: "0 6px 16px rgba(0, 0, 0, 0.16)",
                      pointerEvents: "none",
                      zIndex: 3,
                      whiteSpace: "nowrap",
                    }}
                  >
                    ↓ 50% Viewers dropped at 3s
                    <span
                      style={{
                        position: "absolute",
                        bottom: "-4px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: 0,
                        height: 0,
                        borderLeft: "4px solid transparent",
                        borderRight: "4px solid transparent",
                        borderTop: "4px solid #111111",
                      }}
                    />
                  </div>

                  <svg
                    viewBox="0 0 320 95"
                    preserveAspectRatio="none"
                    style={{ width: "100%", height: "100%", overflow: "visible" }}
                  >
                    <defs>
                      {/* Gradient fill showing steep drop */}
                      <linearGradient id="dropGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#DC2626" stopOpacity="0.22" />
                        <stop offset="70%" stopColor="#DC2626" stopOpacity="0.04" />
                        <stop offset="100%" stopColor="#DC2626" stopOpacity="0" />
                      </linearGradient>

                      {/* Top-to-Bottom Animated Reveal Clip */}
                      <clipPath id="topToBottomClip">
                        <rect
                          x="0"
                          y="0"
                          width="320"
                          height={hasEntered ? 95 * dropProgress : 0}
                          style={{ transition: "height 1.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s" }}
                        />
                      </clipPath>
                    </defs>

                    {/* Subtle Grid Guidelines with Percentage Labels */}
                    <line x1="25" y1="18" x2="315" y2="18" stroke="rgba(0, 0, 0, 0.06)" strokeDasharray="3 3" strokeWidth="1" />
                    <text x="5" y="21" fill="#999999" fontSize="8" fontFamily="'Chivo Mono', monospace">100%</text>

                    <line x1="25" y1="52" x2="315" y2="52" stroke="rgba(220, 38, 38, 0.15)" strokeDasharray="3 3" strokeWidth="1" />
                    <text x="5" y="55" fill="#DC2626" fontSize="8" fontFamily="'Chivo Mono', monospace" fontWeight="bold">50%</text>

                    <line x1="25" y1="84" x2="315" y2="84" stroke="rgba(0, 0, 0, 0.06)" strokeDasharray="3 3" strokeWidth="1" />
                    <text x="5" y="87" fill="#999999" fontSize="8" fontFamily="'Chivo Mono', monospace">0%</text>

                    {/* Faint Background Reference Curve */}
                    <path
                      d="M 30 18 C 70 18, 100 24, 160 52 C 210 74, 260 78, 315 84"
                      fill="none"
                      stroke="rgba(0, 0, 0, 0.08)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />

                    {/* Animated Drop Fill and Line (Reveals from Top to Bottom) */}
                    <g clipPath="url(#topToBottomClip)">
                      {/* Gradient Fill under the drop curve */}
                      <path
                        d="M 30 18 C 70 18, 100 24, 160 52 C 210 74, 260 78, 315 84 L 315 95 L 30 95 Z"
                        fill="url(#dropGradient)"
                      />

                      {/* Main Decline Path — High at left, plunging downward to right */}
                      <path
                        d="M 30 18 C 70 18, 100 24, 160 52 C 210 74, 260 78, 315 84"
                        fill="none"
                        stroke="#DC2626"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      {/* Data Point Dots along downward trajectory */}
                      <circle cx="30" cy="18" r="4" fill="#DC2626" stroke="#FFFFFF" strokeWidth="1.5" />
                      <circle cx="90" cy="22" r="3.5" fill="#DC2626" stroke="#FFFFFF" strokeWidth="1.5" />
                      <circle cx="160" cy="52" r="4.5" fill="#DC2626" stroke="#FFFFFF" strokeWidth="2" />
                      <circle cx="240" cy="74" r="3.5" fill="#DC2626" stroke="#FFFFFF" strokeWidth="1.5" />
                      <circle cx="315" cy="84" r="3.5" fill="#DC2626" stroke="#FFFFFF" strokeWidth="1.5" />
                    </g>
                  </svg>

                  {/* Horizontal Time Timeline Markers */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontFamily: "'Chivo Mono', monospace",
                      fontSize: "9px",
                      color: "#888888",
                      marginTop: "4px",
                      paddingLeft: "25px",
                    }}
                  >
                    <span>0S (HOOK)</span>
                    <span>3S (DROP)</span>
                    <span>15S</span>
                    <span>30S</span>
                    <span>END</span>
                  </div>
                </div>
              </div>

              {/* Title & Description */}
              <div
                style={{
                  fontFamily: "'Chivo Mono', monospace",
                  fontSize: "11px",
                  color: "#111111",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  marginBottom: "8px",
                  fontWeight: 700,
                }}
              >
                01 // RETENTION COLLAPSE
              </div>
              <h3
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "21px",
                  fontWeight: 700,
                  color: "#111111",
                  margin: "0 0 10px",
                  letterSpacing: "-0.01em",
                }}
              >
                120K Views That Never Convert
              </h3>
              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "14px",
                  color: "#555555",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                High view counts mean nothing if viewers abandon before second 4. Without psychological hooks, your audience vanishes before hearing your message.
              </p>
            </div>
          </div>

          {/* =========================================================================
              CARD 2: AVERAGE WATCH (37% RED) + TARGET PACING (84% GREEN)
          ========================================================================= */}
          <div
            style={{
              backgroundColor: "#FAFAFA",
              border: "1px solid rgba(0, 0, 0, 0.08)",
              borderRadius: "24px",
              padding: "clamp(24px, 3vw, 32px)",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.04)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              opacity: hasEntered ? 1 : 0,
              transform: hasEntered ? "translateY(0) scale(1)" : "translateY(30px) scale(0.98)",
              transition: "opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.45s, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.45s",
            }}
          >
            <div>
              {/* Graphic Stage: 37% Red & 84% Green Sliders */}
              <div
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "18px",
                  padding: "20px 22px",
                  border: "1px solid rgba(0, 0, 0, 0.08)",
                  marginBottom: "24px",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.03)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                  <span
                    style={{
                      fontFamily: "'Chivo Mono', monospace",
                      fontSize: "10px",
                      color: "#777777",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      fontWeight: 600,
                    }}
                  >
                    Avg. Watch Completion
                  </span>
                  {/* 37% Animated Percentage Counter in Red */}
                  <span
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "28px",
                      fontWeight: 800,
                      color: "#DC2626",
                    }}
                  >
                    {retentionPct}%
                  </span>
                </div>

                {/* Comparative Horizontal Progress Bars */}
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {/* Metric 2: Raw Footage Average (37% RED) */}
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#555555", marginBottom: "6px" }}>
                      <span>Raw Footage Average</span>
                      <span style={{ fontWeight: 700, color: "#DC2626" }}>{retentionPct}%</span>
                    </div>
                    <div style={{ width: "100%", height: "10px", backgroundColor: "rgba(0, 0, 0, 0.06)", borderRadius: "100px", overflow: "hidden" }}>
                      <div
                        style={{
                          width: `${hasEntered ? 37 : 0}%`,
                          height: "100%",
                          backgroundColor: "#DC2626",
                          borderRadius: "100px",
                          transition: "width 1.6s cubic-bezier(0.16, 1, 0.3, 1) 0.4s",
                        }}
                      />
                    </div>
                  </div>

                  {/* Metric 3: Harinder.MP4 Target Pacing (84% GREEN) */}
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#555555", marginBottom: "6px" }}>
                      <span>Harinder.MP4 Target Pacing</span>
                      <span style={{ fontWeight: 700, color: "#16A34A" }}>{targetPct}%</span>
                    </div>
                    <div style={{ width: "100%", height: "10px", backgroundColor: "rgba(0, 0, 0, 0.06)", borderRadius: "100px", overflow: "hidden" }}>
                      <div
                        style={{
                          width: `${hasEntered ? 84 : 0}%`,
                          height: "100%",
                          backgroundColor: "#16A34A",
                          borderRadius: "100px",
                          transition: "width 1.7s cubic-bezier(0.16, 1, 0.3, 1) 0.6s",
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Target Reveal Badge */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    marginTop: "16px",
                    paddingTop: "12px",
                    borderTop: "1px dashed rgba(0, 0, 0, 0.08)",
                    opacity: hasEntered ? 1 : 0,
                    transform: hasEntered ? "translateY(0)" : "translateY(6px)",
                    transition: "opacity 0.6s ease 0.9s, transform 0.6s ease 0.9s",
                  }}
                >
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#16A34A" }} />
                  <span style={{ fontFamily: "'Chivo Mono', monospace", fontSize: "10px", color: "#111111", fontWeight: 600 }}>
                    Harinder.MP4 Target Pacing: Active Top 5% Tier (84%)
                  </span>
                </div>
              </div>

              {/* Title & Description */}
              <div
                style={{
                  fontFamily: "'Chivo Mono', monospace",
                  fontSize: "11px",
                  color: "#111111",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  marginBottom: "8px",
                  fontWeight: 700,
                }}
              >
                02 // ALGORITHM WATCH TIME
              </div>
              <h3
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "21px",
                  fontWeight: 700,
                  color: "#111111",
                  margin: "0 0 10px",
                  letterSpacing: "-0.01em",
                }}
              >
                Watch Duration Stalls
              </h3>
              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "14px",
                  color: "#555555",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Algorithms don't push videos with poor watch duration. We re-engineer cuts around audio-driven pacing, dynamic b-roll, and visual loops that push watch-time to the top tier.
              </p>
            </div>
          </div>

          {/* =========================================================================
              CARD 3: PUBLISHING OUTPUT (84K) + 48HR CONSISTENT SCHEDULE
          ========================================================================= */}
          <div
            style={{
              backgroundColor: "#FAFAFA",
              border: "1px solid rgba(0, 0, 0, 0.08)",
              borderRadius: "24px",
              padding: "clamp(24px, 3vw, 32px)",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.04)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              opacity: hasEntered ? 1 : 0,
              transform: hasEntered ? "translateY(0) scale(1)" : "translateY(30px) scale(0.98)",
              transition: "opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.6s, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.6s",
            }}
          >
            <div>
              {/* Graphic Stage: Content Calendar / Delivery Cadence */}
              <div
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "18px",
                  padding: "20px 22px",
                  border: "1px solid rgba(0, 0, 0, 0.08)",
                  marginBottom: "24px",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.03)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                  <div>
                    <span
                      style={{
                        fontFamily: "'Chivo Mono', monospace",
                        fontSize: "10px",
                        color: "#777777",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        fontWeight: 600,
                      }}
                    >
                      Publishing Output
                    </span>
                    <div
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontSize: "28px",
                        fontWeight: 800,
                        color: "#111111",
                        lineHeight: 1.1,
                      }}
                    >
                      {deliveryCount}K
                    </div>
                  </div>
                  <span
                    style={{
                      fontFamily: "'Chivo Mono', monospace",
                      fontSize: "10px",
                      fontWeight: 700,
                      color: "#111111",
                      backgroundColor: "rgba(0, 0, 0, 0.05)",
                      padding: "5px 10px",
                      borderRadius: "6px",
                      border: "1px solid rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    48HR TURNAROUND
                  </span>
                </div>

                {/* Visual 7-day Cadence Indicators */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "6px", marginTop: "12px" }}>
                  {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => {
                    const isActive = i % 2 === 0
                    return (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: "6px",
                        }}
                      >
                        <span style={{ fontSize: "10px", fontFamily: "'Chivo Mono', monospace", color: "#888888", fontWeight: 600 }}>
                          {day}
                        </span>
                        <div
                          style={{
                            width: "100%",
                            height: "36px",
                            borderRadius: "8px",
                            backgroundColor: isActive ? "#111111" : "rgba(0, 0, 0, 0.05)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: isActive ? "#FFFFFF" : "#AAAAAA",
                            fontSize: "10px",
                            fontWeight: 700,
                            transform: hasEntered ? "scale(1)" : "scale(0.8)",
                            opacity: hasEntered ? 1 : 0,
                            transition: `transform 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${0.7 + i * 0.08}s, opacity 0.4s ease ${0.7 + i * 0.08}s`,
                          }}
                        >
                          {isActive ? "✓" : "—"}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Title & Description */}
              <div
                style={{
                  fontFamily: "'Chivo Mono', monospace",
                  fontSize: "11px",
                  color: "#111111",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  marginBottom: "8px",
                  fontWeight: 700,
                }}
              >
                03 // BURNOUT & BOTTLENECK
              </div>
              <h3
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "21px",
                  fontWeight: 700,
                  color: "#111111",
                  margin: "0 0 10px",
                  letterSpacing: "-0.01em",
                }}
              >
                Inconsistent Upload Schedule
              </h3>
              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "14px",
                  color: "#555555",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Editing fatigue leads to sporadic posting that confuses the recommendation engine. We hand you a dedicated post-production engine with 48hr delivery to post consistently.
              </p>
            </div>
          </div>
        </div>

        {/* Resolution Banner */}
        <div
          style={{
            backgroundColor: "#111111",
            borderRadius: "28px",
            padding: "clamp(30px, 4.5vw, 48px) clamp(24px, 4vw, 44px)",
            color: "#FFFFFF",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.14)",
            opacity: hasEntered ? 1 : 0,
            transform: hasEntered ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.75s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.75s",
          }}
        >
          <div style={{ maxWidth: "700px" }}>
            <div
              style={{
                fontFamily: "'Chivo Mono', monospace",
                fontSize: "11px",
                fontWeight: 700,
                color: "#8FAF91",
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                marginBottom: "8px",
              }}
            >
              The Solution // Harinder.MP4 Engine
            </div>
            <h3
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(22px, 3vw, 34px)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: "#FFFFFF",
                margin: "0 0 10px",
              }}
            >
              Retention-Engineered Post Production
            </h3>
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "15px",
                color: "rgba(255, 255, 255, 0.75)",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Every frame is timed to retain attention, every hook is cut to stop the scroll, and every color grade is rendered in professional studio ACES color space.
            </p>
          </div>

          <a
            href="#workflow"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "14px 28px",
              backgroundColor: "#FFFFFF",
              borderRadius: "100px",
              color: "#111111",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "15px",
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.25s ease, background-color 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)"
              e.currentTarget.style.backgroundColor = "#F0F0F0"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)"
              e.currentTarget.style.backgroundColor = "#FFFFFF"
            }}
          >
            <span>See The 5-Stage System</span>
            <span>↓</span>
          </a>
        </div>
      </div>
    </section>
  )
}
