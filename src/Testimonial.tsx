import React, { useEffect, useRef, useState } from "react"

interface TestimonialProps {
  slots?: string[]
}

export default function Testimonial({ slots = [] }: TestimonialProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  const [multiplier, setMultiplier] = useState(0)
  const [engagement, setEngagement] = useState(0)

  useEffect(() => {
    let animId: number
    const prefersReducedMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) {
      setInView(true)
      setMultiplier(3)
      setEngagement(2000000)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true)
            const startTime = performance.now()
            const duration = 1400

            const animate = (currentTime: number) => {
              const elapsed = currentTime - startTime
              const progress = Math.min(elapsed / duration, 1)
              const ease = 1 - Math.pow(1 - progress, 3)

              setMultiplier(Math.round(ease * 3))
              setEngagement(Math.round(ease * 2000000))

              if (progress < 1) {
                animId = requestAnimationFrame(animate)
              }
            }

            animId = requestAnimationFrame(animate)

            // Safety fallback: ensure final values are reached after animation duration
            setTimeout(() => {
              setMultiplier(3)
              setEngagement(2000000)
            }, 1500)

            // Trigger once per page load to avoid repeated counter reset
            observer.disconnect()
          }
        }
      },
      { threshold: 0.05, rootMargin: "80px 0px 80px 0px" }
    )

    if (rootRef.current) observer.observe(rootRef.current)

    return () => {
      observer.disconnect()
      if (animId) cancelAnimationFrame(animId)
    }
  }, [])

  const reviewQuote =
    "Before working with Harinder, our retention was completely stagnant. He completely transformed the rhythm and pacing of our short-form content. Our average watch time jumped significantly and viewers actually stay to the end now."

  const reviewerName = "Rahul"
  const reviewerRole = "Creator & Founder"
  const reviewerPhoto = "/assets/images/rahul_testimonial.jpg"

  return (
    <div
      ref={rootRef}
      style={{
        width: "100%",
        maxWidth: "1360px",
        margin: "0 auto",
        padding: "clamp(40px, 6vh, 64px) clamp(16px, 4vw, 40px)",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
          gap: "36px",
          alignItems: "center",
        }}
      >
        {/* Left: Headline & Creator Proof Context */}
        <div className="collaboration-header-block">
          <div style={{ marginBottom: "16px" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "11px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "1.6px",
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
                  backgroundColor: "#E55812",
                }}
              />
              CREATOR REVIEWS & BENCHMARKS
            </span>
          </div>

          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(32px, 4.2vw, 54px)",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              color: "#111111",
              margin: "0 0 18px",
            }}
          >
            What creators say after working together.
          </h2>

          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "15.5px",
              color: "#555555",
              lineHeight: 1.6,
              margin: "0 0 32px",
              maxWidth: "520px",
            }}
          >
            Genuine performance results and verified feedback from creators scaling short-form presence with Harinder.MP4.
          </p>

          {/* Authentic Testimonial Quote Card */}
          <div
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid rgba(0, 0, 0, 0.08)",
              borderRadius: "24px",
              padding: "clamp(24px, 3.5vw, 32px)",
              boxShadow: "0 14px 40px rgba(0, 0, 0, 0.04)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            {/* Five Gold Stars */}
            <div
              style={{
                display: "flex",
                gap: "6px",
                color: "#D4A72C",
                marginBottom: "16px",
                fontSize: "18px",
                letterSpacing: "2px",
              }}
              aria-label="5 out of 5 stars rating"
            >
              {"★★★★★"}
            </div>

            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "15px",
                color: "#111111",
                lineHeight: 1.65,
                margin: "0 0 22px",
                fontStyle: "italic",
              }}
            >
              "{reviewQuote}"
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <img
                src={reviewerPhoto}
                alt={reviewerName}
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "2px solid #FFFFFF",
                  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                }}
              />
              <div>
                <div
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "16px",
                    fontWeight: 800,
                    color: "#111111",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {reviewerName}
                </div>
                <div
                  style={{
                    fontFamily: "'Chivo Mono', monospace",
                    fontSize: "11px",
                    fontWeight: 600,
                    color: "#666666",
                    textTransform: "uppercase",
                    letterSpacing: "0.6px",
                  }}
                >
                  {reviewerRole}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Scroll-Triggered Animated Metric Cards (3X & 2M+) */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {/* Card 1: 3X Engagement Multiplier */}
          <div
            style={{
              backgroundColor: "#FFFFFF",
              border: inView ? "1px solid rgba(0, 0, 0, 0.12)" : "1px solid rgba(0, 0, 0, 0.06)",
              borderRadius: "28px",
              padding: "clamp(28px, 4vw, 36px)",
              boxShadow: "0 14px 40px rgba(0, 0, 0, 0.04)",
              transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
              transform: inView ? "translateY(0)" : "translateY(24px)",
              opacity: inView ? 1 : 0,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
              <span style={{ fontFamily: "'Chivo Mono', monospace", fontSize: "11.5px", color: "#666666", letterSpacing: "1px", textTransform: "uppercase" }}>
                BENCHMARK METRIC // 01
              </span>
              <span style={{ fontFamily: "'Chivo Mono', monospace", fontSize: "10px", fontWeight: 700, color: "#111111", backgroundColor: "rgba(0, 0, 0, 0.05)", padding: "3px 8px", borderRadius: "6px" }}>
                VERIFIED CASE
              </span>
            </div>

            <div
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(48px, 5.5vw, 72px)",
                fontWeight: 800,
                color: "#111111",
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                margin: "10px 0 8px",
              }}
            >
              <span>{inView ? `${multiplier}X` : "0X"}</span>
            </div>

            <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "17.5px", fontWeight: 700, color: "#111111", marginBottom: "6px" }}>
              Engagement Growth Multiplier
            </div>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "14px", color: "#555555", margin: 0, lineHeight: 1.55 }}>
              Average comment, share, and completion lift recorded within 60 days of transitioning to our hook & pacing system.
            </p>
          </div>

          {/* Card 2: 2,000,000+ Total Organic Impressions */}
          <div
            style={{
              backgroundColor: "#FFFFFF",
              border: inView ? "1px solid rgba(0, 0, 0, 0.12)" : "1px solid rgba(0, 0, 0, 0.06)",
              borderRadius: "28px",
              padding: "clamp(28px, 4vw, 36px)",
              boxShadow: "0 14px 40px rgba(0, 0, 0, 0.04)",
              transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.15s",
              transform: inView ? "translateY(0)" : "translateY(24px)",
              opacity: inView ? 1 : 0,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
              <span style={{ fontFamily: "'Chivo Mono', monospace", fontSize: "11.5px", color: "#666666", letterSpacing: "1px", textTransform: "uppercase" }}>
                BENCHMARK METRIC // 02
              </span>
              <span style={{ fontFamily: "'Chivo Mono', monospace", fontSize: "10px", fontWeight: 700, color: "#111111", backgroundColor: "rgba(0, 0, 0, 0.05)", padding: "3px 8px", borderRadius: "6px" }}>
                ORGANIC REACH
              </span>
            </div>

            <div
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(40px, 4.5vw, 60px)",
                fontWeight: 800,
                color: "#111111",
                lineHeight: 1.15,
                letterSpacing: "-0.03em",
                margin: "10px 0 8px",
              }}
            >
              <span>{inView ? `${engagement.toLocaleString()}+` : "0+"}</span>
            </div>

            <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "17.5px", fontWeight: 700, color: "#111111", marginBottom: "6px" }}>
              Total Organic Video Views Generated
            </div>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "14px", color: "#555555", margin: 0, lineHeight: 1.55 }}>
              Calculated across client TikTok, Reels, and Shorts campaigns delivered through Harinder.MP4 post-production pipelines.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
