import React, { useEffect, useRef, useState } from "react"

interface NumberCardProps {
  slots?: string[]
}

function parseMetric(val: string): { num: number; prefix: string; suffix: string } {
  // e.g. "68%", "500+", "3X", "48hr", "2,000,000+", "37%"
  const clean = val.replace(/,/g, "")
  const match = clean.match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/)
  if (!match) return { num: 0, prefix: "", suffix: val }
  return {
    prefix: match[1] || "",
    num: parseFloat(match[2]),
    suffix: match[3] || "",
  }
}

export default function NumberCard({ slots = [] }: NumberCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  const [displayValue, setDisplayValue] = useState(0)

  const rawTarget = slots[1] || slots[2] || "68%"
  const { num: targetNum, prefix, suffix } = parseMetric(rawTarget)

  useEffect(() => {
    let animId: number
    let safetyTimer: number

    const prefersReducedMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) {
      setInView(true)
      setDisplayValue(targetNum)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true)
            if (safetyTimer) clearTimeout(safetyTimer)
            if (animId) cancelAnimationFrame(animId)

            // Animate counter from 0 to targetNum smoothly
            const startTime = performance.now()
            const duration = 1200 // 1.2s smooth interpolation

            const animate = (currentTime: number) => {
              const elapsed = currentTime - startTime
              const progress = Math.min(elapsed / duration, 1)
              // Premium cubic ease-out
              const easeProgress = 1 - Math.pow(1 - progress, 3)
              const currentVal = Math.round(easeProgress * targetNum)
              setDisplayValue(currentVal)

              if (progress < 1) {
                animId = requestAnimationFrame(animate)
              }
            }

            animId = requestAnimationFrame(animate)

            // Safety fallback: ensure final value is exact after animation duration
            safetyTimer = window.setTimeout(() => {
              setDisplayValue(targetNum)
            }, duration + 300)
          } else {
            // Replay when scrolling back into view
            setInView(false)
            setDisplayValue(0)
            if (animId) cancelAnimationFrame(animId)
            if (safetyTimer) clearTimeout(safetyTimer)
          }
        }
      },
      { threshold: 0.1, rootMargin: "60px 0px 60px 0px" }
    )

    if (cardRef.current) observer.observe(cardRef.current)

    return () => {
      observer.disconnect()
      if (safetyTimer) clearTimeout(safetyTimer)
      if (animId) cancelAnimationFrame(animId)
    }
  }, [targetNum])

  const title = slots[0] ?? "Avg. Retention Rate"
  const description = slots[3] ?? "Hook-driven edits that keep viewers watching past the first 3 seconds."

  return (
    <div
      ref={cardRef}
      style={{
        backgroundColor: "#FAFAFA",
        border: "1px solid rgba(0, 0, 0, 0.08)",
        borderRadius: "24px",
        padding: "32px 28px",
        boxShadow: "0 12px 35px rgba(0, 0, 0, 0.04)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "230px",
        height: "auto",
        overflow: "visible",
        boxSizing: "border-box",
        position: "relative",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease",
      }}
      className="metric-number-card-glass"
    >
      <div>
        <div
          style={{
            fontFamily: "'Chivo Mono', monospace",
            fontSize: "12px",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "1px",
            color: "#666666",
            marginBottom: "12px",
          }}
        >
          {title}
        </div>

        {/* Big unclipped metric number with animated counter */}
        <div
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(46px, 5vw, 68px)",
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: "-0.03em",
            color: "#111111",
            margin: "0 0 14px",
            display: "flex",
            alignItems: "baseline",
            gap: "2px",
            overflow: "visible",
            paddingBottom: "4px",
          }}
        >
          {prefix && <span style={{ color: "#111111" }}>{prefix}</span>}
          <span
            style={{
              color: "#111111",
            }}
          >
            {inView ? displayValue.toLocaleString() : "0"}
          </span>
          <span style={{ color: "#111111", fontSize: "0.85em" }}>{suffix}</span>
        </div>
      </div>

      <div
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: "14px",
          color: "#555555",
          lineHeight: 1.55,
          borderTop: "1px solid rgba(0, 0, 0, 0.08)",
          paddingTop: "16px",
          margin: 0,
        }}
      >
        {description}
      </div>
    </div>
  )
}
