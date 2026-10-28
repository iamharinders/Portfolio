import React from "react"

export interface ToolItem {
  id: string
  name: string
  category: string
  spec: string
  icon: string
}

// Single source of truth: self-contained items with verified icon + name pairing
export const EDITING_TOOLS: ToolItem[] = [
  {
    id: "premiere-pro",
    name: "Adobe Premiere Pro",
    category: "Assembly & Pacing",
    spec: "Multi-Track Sync • Proxy Pipeline",
    icon: "https://framerusercontent.com/images/RxRN4dYaIJXRXRICKs9sDxqI8.png?scale-down-to=512&width=2828&height=2784",
  },
  {
    id: "after-effects",
    name: "Adobe After Effects",
    category: "Motion & Tracking",
    spec: "Subtitles • Kinetic Graphics",
    icon: "https://framerusercontent.com/images/3DuzLXpCz1tC2Z2cmQXzLQKDM4Y.png?scale-down-to=512&width=1442&height=1393",
  },
  {
    id: "final-cut-pro",
    name: "Final Cut Pro",
    category: "Turnaround Speed",
    spec: "Magnetic Timeline • 4K Render",
    icon: "https://framerusercontent.com/images/Erw35rzxrUKFiFk9noh9vHv9Hw4.png?scale-down-to=512&width=2800&height=2776",
  },
  {
    id: "davinci-resolve",
    name: "DaVinci Resolve",
    category: "Color Grading & ACES",
    spec: "10-Bit 4:2:2 • Film Print LUTs",
    icon: "https://framerusercontent.com/images/7ZRBRLRod8VYH8EIX6OcgXjs.png?scale-down-to=512&width=2814&height=2778",
  },
  {
    id: "photoshop",
    name: "Adobe Photoshop",
    category: "Thumbnail & Art",
    spec: "High-CTR Frame Composition",
    icon: "/assets/logos/photoshop.svg",
  },
  {
    id: "filmora",
    name: "Filmora",
    category: "Rapid Assembly",
    spec: "Smart Cutout • Motion Presets",
    icon: "https://framerusercontent.com/images/lijp6D89ayghoHQznbwyPNIV3Y.png?scale-down-to=512&width=946&height=935",
  },
  {
    id: "capcut",
    name: "CapCut Pro",
    category: "Short-Form & Viral",
    spec: "Auto-Captions • Trend Templates",
    icon: "https://framerusercontent.com/images/vDUrKOg6oVR52HvQ3e8nqWGDY.png?scale-down-to=1024&width=2780&height=2788",
  },
  {
    id: "illustrator",
    name: "Adobe Illustrator",
    category: "Vector Graphics",
    spec: "Custom Badges • SVG Typography",
    icon: "/assets/logos/illustrator.svg",
  },
  {
    id: "lightroom",
    name: "Lightroom",
    category: "Color Science",
    spec: "Batch Grading • RAW Film Presets",
    icon: "/assets/logos/lightroom.svg",
  },
]

// Base set for seamless infinite -50% to 0% marquee
const TOOL_SET = EDITING_TOOLS

export default function LightTickerForToolsWeUse({ slots }: { slots?: string[] } = {}) {
  const sectionRef = React.useRef<HTMLElement>(null)
  const trackRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (trackRef.current) {
            trackRef.current.style.animationPlayState = entry.isIntersecting ? "running" : "paused"
          }
        }
      },
      { threshold: 0.05, rootMargin: "100px 0px 100px 0px" }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="tools"
      ref={sectionRef}
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "100vw",
        overflow: "hidden",
        padding: "clamp(50px, 7vh, 80px) 0 clamp(40px, 6vh, 70px)",
        backgroundColor: "#FFFFFF",
        boxSizing: "border-box",
      }}
      aria-label="Industry standard software suite compatibility showcase"
    >
      {/* Scoped Marquee Animation Styles — Continuous Non-Stop Left -> Right */}
      <style>{`
        @keyframes toolsMarqueeL2R {
          from {
            transform: translate3d(-50%, 0, 0);
          }
          to {
            transform: translate3d(0, 0, 0);
          }
        }

        .tools-marquee-viewport {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding: 12px 0 28px;
        }

        .tools-marquee-track {
          display: flex;
          gap: 22px;
          width: max-content;
          animation: toolsMarqueeL2R 28s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
          transform: translate3d(-50%, 0, 0);
        }

        /* The marquee track NEVER pauses on hover, focus, or click */
        .tools-marquee-track:hover,
        .tools-marquee-track:focus,
        .tools-marquee-track:active {
          animation-play-state: running !important;
        }

        /* Individual card hover pop effect — Track keeps moving! */
        .software-tool-card {
          position: relative;
          flex: 0 0 auto;
          width: 220px;
          min-height: 220px;
          background-color: #FAFAFA;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 20px;
          padding: 22px 18px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          text-align: center;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);
          transform: translateY(0) scale(1);
          transition: transform 200ms cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 200ms ease,
                      border-color 200ms ease,
                      background-color 200ms ease;
          cursor: pointer;
          box-sizing: border-box;
          backface-visibility: hidden;
        }

        @media (max-width: 600px) {
          .software-tool-card {
            width: 175px !important;
            min-height: 185px !important;
            padding: 16px 12px 14px !important;
            border-radius: 16px !important;
          }
          .software-tool-card .software-tool-icon-img {
            width: 44px !important;
            height: 44px !important;
            max-width: 44px !important;
            max-height: 44px !important;
          }
          .tools-marquee-track {
            gap: 14px !important;
            animation: toolsMarqueeL2R 24s linear infinite !important;
          }
        }

        .software-tool-card:hover {
          transform: translateY(-6px) scale(1.04);
          background-color: #FFFFFF;
          border-color: #111111;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.12);
        }

        .software-tool-card:hover .software-tool-spec {
          background-color: rgba(0, 0, 0, 0.06);
          color: #111111;
        }

        .software-tool-card:hover .software-tool-icon-img {
          transform: scale(1.06);
        }

        /* Reduced motion: gracefully switch to a centered wrappable grid */
        @media (prefers-reduced-motion: reduce) {
          .tools-marquee-track {
            animation: none !important;
            flex-wrap: wrap !important;
            justify-content: center !important;
            width: 100% !important;
            transform: none !important;
            max-width: 1200px !important;
            margin: 0 auto !important;
          }
          .tools-duplicate-half {
            display: none !important;
          }
        }
      `}</style>

      {/* Header Container */}
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
        <div style={{ textAlign: "center", marginBottom: "clamp(32px, 5vh, 48px)" }}>
          <div style={{ marginBottom: "14px" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "11px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "1.5px",
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
                }}
              />
              INDUSTRY-STANDARD SUITE
            </span>
          </div>

          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              color: "#111111",
              margin: "0 0 12px",
            }}
          >
            Compatible with every major editing tool.
          </h2>

          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(14px, 1.3vw, 17px)",
              color: "#555555",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            From native ACES color nodes in DaVinci to kinetic tracking in After Effects. Seamless workflow across all industry software.
          </p>
        </div>
      </div>

      {/* Marquee Viewport — Edge-to-Edge Without Blurred Fades */}
      <div className="tools-marquee-viewport">
        {/* Continuous Left-to-Right Marquee Track — Never pauses on hover */}
        <div ref={trackRef} className="tools-marquee-track">
          {/* First Half (Original) */}
          <div style={{ display: "flex", gap: "22px" }}>
            {TOOL_SET.map((tool, index) => (
              <div
                key={`orig-${tool.id}-${index}`}
                className="software-tool-card"
              >
                {/* 1. Software Icon First — 56px Consistent Container */}
                <div
                  style={{
                    width: "58px",
                    height: "58px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "2px",
                    flexShrink: 0,
                  }}
                >
                  <img
                    className="software-tool-icon-img"
                    src={tool.icon}
                    alt={`${tool.name} Logo`}
                    style={{
                      width: "56px",
                      height: "56px",
                      maxWidth: "56px",
                      maxHeight: "56px",
                      objectFit: "contain",
                      filter: "drop-shadow(0 4px 10px rgba(0, 0, 0, 0.08))",
                      transition: "transform 200ms ease",
                    }}
                  />
                </div>

                {/* 2. Software Name & Category Below */}
                <div style={{ width: "100%", margin: "8px 0 4px" }}>
                  <h3
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "14.5px",
                      fontWeight: 800,
                      color: "#111111",
                      margin: "0 0 4px",
                      lineHeight: 1.25,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {tool.name}
                  </h3>

                  <span
                    style={{
                      fontFamily: "'Chivo Mono', monospace",
                      fontSize: "10px",
                      fontWeight: 600,
                      color: "#777777",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                      display: "block",
                      lineHeight: 1.3,
                    }}
                  >
                    {tool.category}
                  </span>
                </div>

                {/* Subtle Spec Tag */}
                <span
                  className="software-tool-spec"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "10.5px",
                    fontWeight: 600,
                    color: "#888888",
                    backgroundColor: "rgba(0, 0, 0, 0.04)",
                    padding: "3px 8px",
                    borderRadius: "6px",
                    transition: "all 200ms ease",
                    whiteSpace: "nowrap",
                  }}
                >
                  {tool.spec.split("•")[0].trim()}
                </span>
              </div>
            ))}
          </div>

          {/* Second Half (Duplicate for seamless infinite -50% -> 0% loop) */}
          <div className="tools-duplicate-half" style={{ display: "flex", gap: "22px" }} aria-hidden="true">
            {TOOL_SET.map((tool, index) => (
              <div
                key={`dup-${tool.id}-${index}`}
                className="software-tool-card"
              >
                {/* 1. Software Icon First — 56px Consistent Container */}
                <div
                  style={{
                    width: "58px",
                    height: "58px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "2px",
                    flexShrink: 0,
                  }}
                >
                  <img
                    className="software-tool-icon-img"
                    src={tool.icon}
                    alt={`${tool.name} Logo`}
                    style={{
                      width: "56px",
                      height: "56px",
                      maxWidth: "56px",
                      maxHeight: "56px",
                      objectFit: "contain",
                      filter: "drop-shadow(0 4px 10px rgba(0, 0, 0, 0.08))",
                      transition: "transform 200ms ease",
                    }}
                  />
                </div>

                {/* 2. Software Name & Category Below */}
                <div style={{ width: "100%", margin: "8px 0 4px" }}>
                  <h3
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "14.5px",
                      fontWeight: 800,
                      color: "#111111",
                      margin: "0 0 4px",
                      lineHeight: 1.25,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {tool.name}
                  </h3>

                  <span
                    style={{
                      fontFamily: "'Chivo Mono', monospace",
                      fontSize: "10px",
                      fontWeight: 600,
                      color: "#777777",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                      display: "block",
                      lineHeight: 1.3,
                    }}
                  >
                    {tool.category}
                  </span>
                </div>

                {/* Subtle Spec Tag */}
                <span
                  className="software-tool-spec"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "10.5px",
                    fontWeight: 600,
                    color: "#888888",
                    backgroundColor: "rgba(0, 0, 0, 0.04)",
                    padding: "3px 8px",
                    borderRadius: "6px",
                    transition: "all 200ms ease",
                    whiteSpace: "nowrap",
                  }}
                >
                  {tool.spec.split("•")[0].trim()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
