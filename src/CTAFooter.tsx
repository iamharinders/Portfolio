import React, { useState } from "react"
import { Link } from "react-router-dom"

export default function CTAFooter({ slots }: { slots?: any[] } = {}) {
  const [copiedEmail, setCopiedEmail] = useState(false)

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault()
    navigator.clipboard.writeText("iamharinders@gmail.com")
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2400)
  }

  return (
    <footer
      id="contact"
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "100vw",
        backgroundColor: "#F5F4F0",
        borderTop: "1px solid rgba(0, 0, 0, 0.08)",
        padding: "clamp(48px, 6vh, 72px) 0 32px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 clamp(18px, 4vw, 40px)",
          boxSizing: "border-box",
        }}
      >
        {/* 22. FINAL WEBSITE CTA — Dark Cinematic Presentation */}
        <div
          className="dark-editorial-box"
          style={{
            position: "relative",
            backgroundColor: "#0A0A0A",
            borderRadius: "32px",
            padding: "clamp(40px, 6vw, 72px) clamp(24px, 5vw, 64px)",
            boxShadow: "0 24px 60px rgba(0, 0, 0, 0.25)",
            overflow: "hidden",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            marginBottom: "clamp(48px, 6vh, 64px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {/* Subtle warm cinematic background gradient */}
          <div
            style={{
              position: "absolute",
              top: "-50%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "600px",
              height: "400px",
              background: "radial-gradient(circle, rgba(229, 88, 18, 0.16) 0%, transparent 70%)",
              filter: "blur(70px)",
              pointerEvents: "none",
            }}
          />

          {/* Status Indicator */}
          <div style={{ position: "relative", zIndex: 2, marginBottom: "16px" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 16px",
                borderRadius: "100px",
                backgroundColor: "rgba(255, 255, 255, 0.06)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                fontFamily: "'Chivo Mono', monospace",
                fontSize: "11px",
                fontWeight: 700,
                color: "#E0E0E0",
                letterSpacing: "1.2px",
                textTransform: "uppercase",
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
              Editorial Production · Available Now
            </span>
          </div>

          {/* Heading */}
          <h2
            style={{
              position: "relative",
              zIndex: 2,
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(30px, 4.8vw, 56px)",
              fontWeight: 800,
              color: "#FFFFFF",
              letterSpacing: "-0.025em",
              lineHeight: 1.15,
              maxWidth: "760px",
              margin: "0 0 16px",
            }}
          >
            <span>Have a video that deserves </span>
            <span style={{ color: "#E55812" }}>better?</span>
          </h2>

          {/* Supporting Statement */}
          <p
            style={{
              position: "relative",
              zIndex: 2,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(15px, 1.4vw, 18px)",
              color: "#B8B8B8",
              maxWidth: "600px",
              margin: "0 0 32px",
              lineHeight: 1.6,
            }}
          >
            Let’s turn your footage into content people actually want to watch. High-retention pacing, ACES color grading, and custom sound design delivered in 24–48 hours.
          </p>

          {/* Action CTAs */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "14px",
            }}
          >
            <Link
              to="/hire-me"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "15px 36px",
                borderRadius: "100px",
                backgroundColor: "#E55812",
                color: "#FFFFFF",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "15px",
                fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 10px 30px rgba(229, 88, 18, 0.35)",
                transition: "all 0.22s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px) scale(1.02)"
                e.currentTarget.style.boxShadow = "0 14px 38px rgba(229, 88, 18, 0.45)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)"
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(229, 88, 18, 0.35)"
              }}
            >
              <span>Hire Me</span>
              <span style={{ fontSize: "16px", lineHeight: 1 }}>↗</span>
            </Link>

            <button
              onClick={handleCopyEmail}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 26px",
                borderRadius: "100px",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.16)",
                color: "#FFFFFF",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.14)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.08)"
              }}
            >
              <span>{copiedEmail ? "✓ Email Copied!" : "iamharinders@gmail.com"}</span>
              <span style={{ opacity: 0.6 }}>📋</span>
            </button>
          </div>
        </div>

        {/* 23. COMPACT EDITORIAL FOOTER */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "24px",
            paddingBottom: "24px",
            borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
          }}
        >
          {/* Brand Lockup */}
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <Link
              to="/"
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "20px",
                letterSpacing: "-0.02em",
                textDecoration: "none",
                color: "#111111",
                display: "inline-flex",
                alignItems: "baseline",
              }}
            >
              <span style={{ fontWeight: 800 }}>Harinder</span>
              <span
                style={{
                  fontFamily: "'Chivo Mono', monospace",
                  fontWeight: 600,
                  fontSize: "14px",
                  letterSpacing: "0.5px",
                  color: "#E55812",
                  marginLeft: "1px",
                }}
              >
                .MP4
              </span>
            </Link>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <img
                src="/assets/images/hari_studio_mark_black.png"
                alt="HARI STUDIO"
                style={{ width: "16px", height: "16px", objectFit: "contain", opacity: 0.8 }}
              />
              <span
                style={{
                  fontFamily: "'Chivo Mono', monospace",
                  fontSize: "11px",
                  color: "#5F5F5F",
                  letterSpacing: "0.5px",
                }}
              >
                POWERED BY HARI STUDIO
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "13px",
              fontWeight: 600,
            }}
          >
            <a
              href="https://www.instagram.com/harinder.mp4/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#111111",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <span>Instagram</span>
              <span style={{ fontSize: "11px", opacity: 0.6 }}>↗</span>
            </a>
            <a
              href="mailto:iamharinders@gmail.com"
              style={{
                color: "#5F5F5F",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <span>Email</span>
              <span style={{ fontSize: "11px", opacity: 0.6 }}>✉</span>
            </a>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div
          style={{
            paddingTop: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
            fontSize: "12px",
            color: "#888888",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          <p style={{ margin: 0 }}>
            © 2026 Harinder.MP4. All rights reserved.
          </p>
          <p style={{ margin: 0, fontFamily: "'Chivo Mono', monospace", fontSize: "11px", color: "#888888" }}>
            CREATIVE EDITORIAL // SHORT-FORM SPECIALIST
          </p>
        </div>
      </div>
    </footer>
  )
}
