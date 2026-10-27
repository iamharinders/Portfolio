import React, { useState } from "react"

interface FAQItem {
  question: string
  answer: string
}

const FAQ_DATA: FAQItem[] = [
  {
    question: "What do you actually do?",
    answer:
      "We specialize in creating high-quality short-form video content for creators and brands. From editing to optimization, we turn raw footage into engaging videos that drive results.",
  },
  {
    question: "What is this service about?",
    answer:
      "We help creators and brands turn raw footage into high-performing short videos — designed to increase views, engagement, and real audience growth.",
  },
  {
    question: "Do you only edit videos or help with strategy too?",
    answer:
      "We don’t just edit — we also help with content strategy, including hooks, trends, and formats that perform best on short-form platforms.",
  },
  {
    question: "How fast is the delivery?",
    answer:
      "Delivery typically takes 24–72 hours depending on the project scope and complexity.",
  },
  {
    question: "Can I request revisions?",
    answer:
      "Yes, we offer revisions to make sure you’re fully satisfied with the final result.",
  },
  {
    question: "Which platforms do you optimize for?",
    answer:
      "We optimize content for platforms like TikTok, Instagram Reels, YouTube Shorts, and Facebook.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section
      id="faq"
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "100vw",
        backgroundColor: "#FFFFFF",
        padding: "clamp(50px, 7vh, 80px) 0 clamp(60px, 8vh, 90px)",
        boxSizing: "border-box",
        borderTop: "1px solid rgba(0, 0, 0, 0.06)",
      }}
      aria-label="Frequently Asked Questions"
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 clamp(18px, 4vw, 40px)",
          boxSizing: "border-box",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
          gap: "clamp(36px, 5vw, 64px)",
          alignItems: "flex-start",
        }}
      >
        {/* Left Column: Heading and Subtitle */}
        <div>
          <div style={{ marginBottom: "14px" }}>
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
              FAQ
            </span>
          </div>

          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(32px, 4.5vw, 54px)",
              fontWeight: 800,
              color: "#111111",
              margin: "0 0 16px",
              letterSpacing: "-0.025em",
              lineHeight: 1.12,
            }}
          >
            Everything you need to know.
          </h2>

          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(15px, 1.3vw, 17px)",
              color: "#555555",
              maxWidth: "480px",
              margin: "0 0 28px",
              lineHeight: 1.6,
            }}
          >
            Questions before you commit? We’ve answered the most common questions about our editing workflow, turnaround times, and delivery below.
          </p>

          <a
            href="/hire-me"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 24px",
              borderRadius: "100px",
              backgroundColor: "#111111",
              color: "#FFFFFF",
              textDecoration: "none",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "14px",
              fontWeight: 700,
              boxShadow: "0 4px 14px rgba(0, 0, 0, 0.12)",
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <span>Have More Questions? Let's Talk</span>
            <span style={{ fontSize: "15px" }}>↗</span>
          </a>
        </div>

        {/* Right Column: Interactive Smooth Accordion */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx

            return (
              <div
                key={idx}
                style={{
                  backgroundColor: isOpen ? "#FFFFFF" : "#FAFAFA",
                  border: isOpen
                    ? "1px solid rgba(0, 0, 0, 0.18)"
                    : "1px solid rgba(0, 0, 0, 0.08)",
                  borderRadius: "18px",
                  overflow: "hidden",
                  boxShadow: isOpen
                    ? "0 10px 30px rgba(0, 0, 0, 0.06)"
                    : "0 2px 8px rgba(0, 0, 0, 0.02)",
                  transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                {/* Accordion Question Header */}
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "16px",
                    padding: "20px 24px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    color: "#111111",
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "17px",
                    fontWeight: 700,
                    letterSpacing: "-0.01em",
                    boxSizing: "border-box",
                  }}
                >
                  <span style={{ lineHeight: 1.35 }}>{item.question}</span>

                  {/* Toggle Indicator Button */}
                  <span
                    style={{
                      width: "32px",
                      height: "32px",
                      flexShrink: 0,
                      borderRadius: "50%",
                      backgroundColor: isOpen ? "#111111" : "rgba(0, 0, 0, 0.05)",
                      color: isOpen ? "#FFFFFF" : "#111111",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "16px",
                      fontWeight: 700,
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      transition: "transform 0.25s ease, background-color 0.2s ease, color 0.2s ease",
                    }}
                  >
                    +
                  </span>
                </button>

                {/* Animated Accordion Body */}
                <div
                  style={{
                    maxHeight: isOpen ? "220px" : "0",
                    opacity: isOpen ? 1 : 0,
                    overflow: "hidden",
                    transition:
                      "max-height 0.32s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.24s ease",
                  }}
                >
                  <p
                    style={{
                      margin: "0 24px 22px",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: "14.5px",
                      color: "#555555",
                      lineHeight: 1.65,
                      borderTop: "1px solid rgba(0, 0, 0, 0.06)",
                      paddingTop: "14px",
                    }}
                  >
                    {item.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
