import React, { useState } from "react"
import { Link } from "react-router-dom"

interface PricingCardProps {
  slots?: string[]
}

export default function PricingCard({ slots = [] }: PricingCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isPressed, setIsPressed] = useState(false)

  const planName = slots[0] ?? "Starter"
  const planSubtitle = slots[1] ?? "Perfect for creators just getting started"
  const planPrice = slots[2] ?? "$699"
  const planPeriod = slots[3] ?? "/ month"

  const isPopular = planName.toLowerCase().includes("professional")

  const features = [
    { icon: slots[4], text: slots[5] ?? "Up to 8 short-form videos/month" },
    { icon: slots[6], text: slots[7] ?? "Basic editing + captions" },
    { icon: slots[8], text: slots[9] ?? "Max 60s video length" },
    { icon: slots[10], text: slots[11] ?? "Platform-ready formats (Reels, TikTok, Shorts)" },
    { icon: slots[12], text: slots[13] ?? "Standard export quality" },
    { icon: slots[14], text: slots[15] ?? "Email support" },
  ]

  const buttonText = slots[16] ?? "Get Started Now"

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setIsPressed(false)
      }}
      style={{
        position: "relative",
        width: "100%",
        backgroundColor: "#FFFFFF",
        border: isPopular
          ? isHovered
            ? "1.5px solid #111111"
            : "1.5px solid rgba(17, 17, 17, 0.55)"
          : isHovered
            ? "1px solid rgba(0, 0, 0, 0.22)"
            : "1px solid rgba(0, 0, 0, 0.08)",
        borderRadius: "24px",
        padding: "clamp(28px, 3.5vw, 36px) clamp(22px, 3vw, 30px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: isHovered
          ? "0 26px 50px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.06)"
          : isPopular
            ? "0 16px 40px rgba(0, 0, 0, 0.07)"
            : "0 8px 25px rgba(0, 0, 0, 0.03)",
        transform: isHovered
          ? isPopular
            ? "translateY(-10px) scale(1.03)"
            : "translateY(-6px) scale(1.015)"
          : isPopular
            ? "translateY(-3px) scale(1.015)"
            : "translateY(0) scale(1)",
        transition: "transform 220ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 220ms ease, border-color 220ms ease",
        boxSizing: "border-box",
      }}
    >
      {/* Popular Badge */}
      {isPopular && (
        <div
          style={{
            position: "absolute",
            top: "-12px",
            right: "24px",
            backgroundColor: "#111111",
            color: "#FFFFFF",
            fontFamily: "'Chivo Mono', monospace",
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            padding: "4px 14px",
            borderRadius: "100px",
            boxShadow: "0 4px 14px rgba(0, 0, 0, 0.2)",
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <span
            style={{
              width: "5px",
              height: "5px",
              borderRadius: "50%",
              backgroundColor: "#E55812",
            }}
          />
          <span>Most Popular</span>
        </div>
      )}

      <div>
        {/* Plan Header */}
        <div style={{ marginBottom: "20px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "6px" }}>
            <h4
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "24px",
                fontWeight: 800,
                color: "#111111",
                margin: 0,
                letterSpacing: "-0.01em",
              }}
            >
              {planName}
            </h4>
          </div>

          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "13.5px",
              color: "#666666",
              margin: 0,
              lineHeight: 1.5,
              minHeight: "40px",
            }}
          >
            {planSubtitle}
          </p>

          {/* Consistent, intentional Orange Accent Line */}
          <div
            style={{
              width: "36px",
              height: "3px",
              borderRadius: "2px",
              backgroundColor: "#E55812",
              marginTop: "16px",
              marginBottom: "18px",
            }}
          />

          {/* Price Section */}
          <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
            <span
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "42px",
                fontWeight: 800,
                color: "#111111",
                letterSpacing: "-0.03em",
                lineHeight: 1,
              }}
            >
              {planPrice}
            </span>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "14px",
                fontWeight: 500,
                color: "#777777",
              }}
            >
              {planPeriod}
            </span>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            backgroundColor: "rgba(0, 0, 0, 0.08)",
            margin: "20px 0 24px",
          }}
        />

        {/* Feature List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "32px" }}>
          {features.map((feat, fIdx) => (
            <div key={fIdx} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
              <span
                style={{
                  width: "18px",
                  height: "18px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(22, 163, 74, 0.12)",
                  color: "#16A34A",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "11px",
                  fontWeight: 700,
                  flexShrink: 0,
                  marginTop: "2px",
                }}
              >
                ✓
              </span>
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "13.5px",
                  color: "#333333",
                  lineHeight: 1.5,
                }}
              >
                {feat.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Get Started Button */}
      <div>
        <Link
          to="/hire-me"
          onMouseDown={() => setIsPressed(true)}
          onMouseUp={() => setIsPressed(false)}
          onTouchStart={() => setIsPressed(true)}
          onTouchEnd={() => setIsPressed(false)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            width: "100%",
            padding: "14px 20px",
            borderRadius: "100px",
            backgroundColor: isPopular ? "rgba(15, 15, 15, 0.95)" : "rgba(25, 25, 25, 0.88)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(255, 255, 255, 0.18)",
            color: "#FFFFFF",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "14.5px",
            fontWeight: 700,
            textDecoration: "none",
            boxShadow: isPressed
              ? "0 2px 6px rgba(0, 0, 0, 0.2)"
              : isHovered
                ? "0 10px 28px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(255, 255, 255, 0.25)"
                : "0 4px 14px rgba(0, 0, 0, 0.15)",
            transform: isPressed
              ? "scale(0.97)"
              : isHovered
                ? "translateY(-2px) scale(1.01)"
                : "translateY(0) scale(1)",
            transition: "all 200ms cubic-bezier(0.16, 1, 0.3, 1)",
            boxSizing: "border-box",
            cursor: "pointer",
          }}
        >
          <span>{buttonText}</span>
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
        </Link>
      </div>
    </div>
  )
}
