import React, { useState, useEffect } from "react"
import Navbar from "./Navbar"
import CTAFooter from "./CTAFooter"

const CONTENT_TYPES = [
  "Short-form Reels",
  "YouTube Shorts",
  "TikTok",
  "Podcast Clips",
  "Talking Head",
  "UGC",
  "Ads",
  "Other",
]

const VOLUME_OPTIONS = [
  "4–8 videos / month",
  "10–20 videos / month",
  "30+ videos / month",
  "One-time project / Single cut",
]

const BUDGET_RANGES = [
  "Under $1,000",
  "$1,000 – $2,500",
  "$2,500 – $5,000",
  "$5,000+",
  "Flexible / Custom",
]

export default function HireMe() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [brand, setBrand] = useState("")
  const [socialLink, setSocialLink] = useState("")
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [volume, setVolume] = useState("")
  const [refLink, setRefLink] = useState("")
  const [description, setDescription] = useState("")
  const [budget, setBudget] = useState("")
  const [deadline, setDeadline] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Scroll to top on page mount
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
  }, [])

  const toggleType = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 450)
  }

  // Refined subtle glass input surface
  const glassInputStyle: React.CSSProperties = {
    width: "100%",
    backgroundColor: "rgba(245, 244, 240, 0.6)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    border: "1px solid rgba(0, 0, 0, 0.12)",
    borderRadius: "14px",
    padding: "14px 18px",
    fontSize: "14.5px",
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    color: "#111111",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease",
  }

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "'Chivo Mono', monospace",
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "1.2px",
    textTransform: "uppercase",
    color: "#222222",
    marginBottom: "8px",
  }

  return (
    <div
      style={{
        backgroundColor: "#F5F4F0",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxWidth: "100vw",
        overflowX: "clip",
      }}
    >
      <Navbar />

      <main
        style={{
          flex: 1,
          width: "100%",
          maxWidth: "1040px",
          margin: "0 auto",
          padding: "135px clamp(16px, 4vw, 32px) 80px",
          boxSizing: "border-box",
        }}
      >
        {/* Hero Heading & Confident Human Copy */}
        <div style={{ textAlign: "center", marginBottom: "44px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 16px",
              borderRadius: "100px",
              backgroundColor: "rgba(0, 0, 0, 0.04)",
              border: "1px solid rgba(0, 0, 0, 0.08)",
              marginBottom: "18px",
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
            <span
              style={{
                fontFamily: "'Chivo Mono', monospace",
                fontSize: "11px",
                fontWeight: 700,
                color: "#111111",
                letterSpacing: "1.2px",
                textTransform: "uppercase",
              }}
            >
              Direct Client Onboarding
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(34px, 5.5vw, 62px)",
              fontWeight: 800,
              color: "#111111",
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              margin: "0 0 16px",
            }}
          >
            Let's Make Something{" "}
            <span
              style={{
                color: "#E55812",
              }}
            >
              Worth Watching.
            </span>
          </h1>

          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(15px, 1.4vw, 18px)",
              color: "#555555",
              maxWidth: "640px",
              margin: "0 auto 28px",
              lineHeight: 1.6,
            }}
          >
            Tell Harinder about your raw footage, channel goals, or content volume. Every inquiry is
            reviewed personally with a custom turnaround timeline and scope within 24 hours.
          </p>

          {/* Filmmaker Trust Badges */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "clamp(12px, 3vw, 24px)",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "12px",
                fontWeight: 600,
                color: "#444444",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              <span style={{ color: "#E55812" }}>⚡</span> 24hr Direct Response
            </span>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "12px",
                fontWeight: 600,
                color: "#444444",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              <span style={{ color: "#E55812" }}>🎬</span> Native Reels • TikTok • Shorts
            </span>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "12px",
                fontWeight: 600,
                color: "#444444",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              <span style={{ color: "#E55812" }}>🔄</span> Unlimited Revisions Included
            </span>
          </div>
        </div>

        {submitted ? (
          /* Polished Success Confirmation */
          <div
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid rgba(0, 0, 0, 0.09)",
              borderRadius: "28px",
              padding: "clamp(36px, 5vw, 60px)",
              textAlign: "center",
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.06)",
              maxWidth: "600px",
              margin: "0 auto",
              animation: "hireMeFadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                backgroundColor: "rgba(229, 88, 18, 0.12)",
                color: "#E55812",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                margin: "0 auto 20px",
                fontWeight: 800,
              }}
            >
              ✓
            </div>
            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "26px",
                fontWeight: 800,
                color: "#111111",
                marginBottom: "12px",
              }}
            >
              Inquiry Received!
            </h2>
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "15px",
                color: "#555555",
                lineHeight: 1.6,
                marginBottom: "28px",
              }}
            >
              Thank you, <strong style={{ color: "#111111" }}>{name || "friend"}</strong>. Your project
              details have been received. Harinder will review your references and reach out to{" "}
              <strong style={{ color: "#111111" }}>{email || "your email"}</strong> within 24 hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false)
                setName("")
                setEmail("")
                setDescription("")
              }}
              style={{
                padding: "12px 28px",
                borderRadius: "100px",
                backgroundColor: "#111111",
                color: "#FFFFFF",
                fontSize: "14px",
                fontWeight: 700,
                border: "none",
                cursor: "pointer",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                transition: "all 0.2s ease",
              }}
            >
              Submit Another Inquiry
            </button>
          </div>
        ) : (
          /* The Project Inquiry Form */
          <form
            onSubmit={handleSubmit}
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid rgba(0, 0, 0, 0.08)",
              borderRadius: "32px",
              padding: "clamp(28px, 4.5vw, 48px)",
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.04)",
              display: "flex",
              flexDirection: "column",
              gap: "26px",
              boxSizing: "border-box",
            }}
          >
            <style>{`
              @keyframes hireMeFadeIn {
                from {
                  opacity: 0;
                  transform: translateY(12px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
              .hire-field {
                animation: hireMeFadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) both;
              }
              .glass-input:focus {
                border-color: #E55812 !important;
                box-shadow: 0 0 0 3px rgba(229, 88, 18, 0.16) !important;
                background-color: #FFFFFF !important;
                color: #111111 !important;
              }
              .type-chip {
                transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
              }
              .type-chip:hover {
                transform: translateY(-2px);
                border-color: rgba(229, 88, 18, 0.4);
              }
              .send-msg-btn:hover {
                transform: translateY(-2px) scale(1.01);
                border-color: rgba(229, 88, 18, 0.6) !important;
                box-shadow: 0 12px 30px rgba(229, 88, 18, 0.22), 0 4px 12px rgba(0, 0, 0, 0.15) !important;
              }
              .send-msg-btn:active {
                transform: scale(0.98);
              }
            `}</style>

            {/* Row 1: Name & Email */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
                gap: "20px",
              }}
            >
              <div className="hire-field" style={{ animationDelay: "40ms" }}>
                <label style={labelStyle}>
                  YOUR NAME <span style={{ color: "#E55812" }}>*</span>
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Alex Johnson"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="glass-input"
                  style={glassInputStyle}
                />
              </div>

              <div className="hire-field" style={{ animationDelay: "80ms" }}>
                <label style={labelStyle}>
                  EMAIL <span style={{ color: "#E55812" }}>*</span>
                </label>
                <input
                  required
                  type="email"
                  placeholder="e.g. alex@creatorbrand.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="glass-input"
                  style={glassInputStyle}
                />
              </div>
            </div>

            {/* Row 2: Brand / Company Name & Social Link */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
                gap: "20px",
              }}
            >
              <div className="hire-field" style={{ animationDelay: "120ms" }}>
                <label style={labelStyle}>
                  BRAND / COMPANY
                </label>
                <input
                  type="text"
                  placeholder="e.g. Apex Media / @alexcreates"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  className="glass-input"
                  style={glassInputStyle}
                />
              </div>

              <div className="hire-field" style={{ animationDelay: "160ms" }}>
                <label style={labelStyle}>
                  INSTAGRAM / SOCIAL
                </label>
                <input
                  type="text"
                  placeholder="e.g. instagram.com/yourhandle or youtube.com/@handle"
                  value={socialLink}
                  onChange={(e) => setSocialLink(e.target.value)}
                  className="glass-input"
                  style={glassInputStyle}
                />
              </div>
            </div>

            {/* Field 3: WHAT DO YOU NEED EDITED? */}
            <div className="hire-field" style={{ animationDelay: "200ms" }}>
              <label style={labelStyle}>
                WHAT DO YOU NEED EDITED?
              </label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {CONTENT_TYPES.map((type) => {
                  const isSelected = selectedTypes.includes(type)
                  return (
                    <button
                      key={type}
                      type="button"
                      onClick={() => toggleType(type)}
                      className="type-chip"
                      style={{
                        padding: "8px 16px",
                        borderRadius: "100px",
                        fontSize: "13px",
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 600,
                        backgroundColor: isSelected ? "#111111" : "#F5F4F0",
                        color: isSelected ? "#FFFFFF" : "#333333",
                        border: isSelected
                          ? "1px solid #111111"
                          : "1px solid rgba(0, 0, 0, 0.1)",
                        cursor: "pointer",
                        boxShadow: isSelected
                          ? "0 4px 12px rgba(0, 0, 0, 0.14)"
                          : "0 2px 6px rgba(0, 0, 0, 0.02)",
                      }}
                    >
                      {isSelected ? "✓ " : "+ "}
                      {type}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Row 4: Monthly Volume & Budget Range */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
                gap: "20px",
              }}
            >
              <div className="hire-field" style={{ animationDelay: "240ms" }}>
                <label style={labelStyle}>
                  MONTHLY VOLUME
                </label>
                <select
                  value={volume}
                  onChange={(e) => setVolume(e.target.value)}
                  className="glass-input"
                  style={{
                    ...glassInputStyle,
                    cursor: "pointer",
                  }}
                >
                  <option value="">Select expected monthly volume...</option>
                  {VOLUME_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div className="hire-field" style={{ animationDelay: "280ms" }}>
                <label style={labelStyle}>
                  ESTIMATED BUDGET
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="glass-input"
                  style={{
                    ...glassInputStyle,
                    cursor: "pointer",
                  }}
                >
                  <option value="">Select budget range...</option>
                  {BUDGET_RANGES.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 5: Reference Link & Desired Start Date */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
                gap: "20px",
              }}
            >
              <div className="hire-field" style={{ animationDelay: "320ms" }}>
                <label style={labelStyle}>
                  REFERENCE / INSPIRATION
                </label>
                <input
                  type="text"
                  placeholder="e.g. YouTube / Reel link of editing style you like"
                  value={refLink}
                  onChange={(e) => setRefLink(e.target.value)}
                  className="glass-input"
                  style={glassInputStyle}
                />
              </div>

              <div className="hire-field" style={{ animationDelay: "360ms" }}>
                <label style={labelStyle}>
                  DESIRED TIMELINE
                </label>
                <input
                  type="text"
                  placeholder="e.g. Immediate / Next Monday / Within 2 weeks"
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                  className="glass-input"
                  style={glassInputStyle}
                />
              </div>
            </div>

            {/* Field 6: Project Description */}
            <div className="hire-field" style={{ animationDelay: "400ms" }}>
              <label style={labelStyle}>
                PROJECT DETAILS <span style={{ color: "#E55812" }}>*</span>
              </label>
              <textarea
                required
                rows={4}
                placeholder="Tell Harinder about your current raw footage, recording setup, desired pacing, captions, color style, and core objectives..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="glass-input"
                style={{
                  ...glassInputStyle,
                  minHeight: "120px",
                  resize: "vertical",
                }}
              />
            </div>

            {/* Submit Message CTA Button (Requirement 17) */}
            <div
              className="hire-field"
              style={{
                animationDelay: "440ms",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "16px",
                paddingTop: "6px",
              }}
            >
              <span
                style={{
                  fontFamily: "'Chivo Mono', monospace",
                  fontSize: "11px",
                  color: "#666666",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <span style={{ color: "#E55812" }}>⚡</span>
                <span>Direct 24hr response from Harinder Singh</span>
              </span>

              <button
                type="submit"
                disabled={isSubmitting}
                className="send-msg-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "14px 34px",
                  borderRadius: "100px",
                  backgroundColor: "rgba(15, 15, 15, 0.94)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(255, 255, 255, 0.16)",
                  color: "#FFFFFF",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "14.5px",
                  fontWeight: 700,
                  letterSpacing: "0.5px",
                  cursor: isSubmitting ? "wait" : "pointer",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.14)",
                  transition: "all 0.22s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                <span>{isSubmitting ? "SENDING..." : "Send Message"}</span>
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
              </button>
            </div>
          </form>
        )}
      </main>

      <CTAFooter />
    </div>
  )
}
