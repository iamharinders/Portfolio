import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import styles from "./styles.module.css"
import States from "./States"
import RevealWatcher from "./RevealWatcher"
import { SvgGraphic } from "./RichText"
import Navbar from "./Navbar"
import VideoCarousel3D from "./VideoCarousel3D"
import CinemaModal, { CinemaVideoData } from "./CinemaModal"
import EditingWorkflowAndPlatforms from "./EditingWorkflowAndPlatforms"
import ProcessSequenceAnimation from "./ProcessSequenceAnimation"
import FAQSection from "./FAQSection"
import RealVideosScrollGallery from "./RealVideosScrollGallery"
import ContactButton from "./ContactButton"
import SubText from "./SubTextBanner"
import PrimaryButton from "./PrimaryButton"
import SecondaryButton from "./SecondaryButton"
import Video from "./Video"
import Video2 from "./Video2"
import Video3 from "./Video3"
import Video4 from "./Video4"
import Video5 from "./Video5"
import Video6 from "./Video6"
import Video7 from "./Video7"
import Video8 from "./Video8"
import Subtext from "./Subtext"
import Card1 from "./Card1"
import AnimatedNumberCounter from "./AnimatedNumberCounter"
import Vector from "./Vector"
import Card2 from "./Card2"
import AnimatedNumberCounter2 from "./AnimatedNumberCounter2"
import Circle from "./Circle"
import PlayButton from "./PlayButton"
import Card3 from "./Card3"
import Vector2 from "./Vector2"
import NumberCard from "./NumberCard"
import AnimatedNumberCounter3 from "./AnimatedNumberCounter3"
import AnimatedNumberCounter4 from "./AnimatedNumberCounter4"
import AnimatedNumberCounter5 from "./AnimatedNumberCounter5"
import SarviceCard from "./SarviceCard"
import PrimaryButton2 from "./PrimaryButton2"
import TextWithIcon from "./TextWithIcon"
import TextWithIcon2 from "./TextWithIcon2"
import SocialMedia from "./SocialMedia"
import Video9 from "./Video9"
import Subtext2 from "./Subtext2"
import ResaltCard from "./ResaltCard"
import ResaltCard2 from "./ResaltCard2"
import Subtext3 from "./Subtext3"
import UploadYourContent from "./UploadYourContent"
import WeCraftYourContent from "./WeCraftYourContent"
import AudioWave from "./AudioWave"
import WatchYourContentCard from "./WatchYourContentCard"
import Video10 from "./Video10"
import Vector3 from "./Vector3"
import Vector4 from "./Vector4"
import Testimonial from "./Testimonial"
import ImageTab from "./ImageTab"
import PricingCard from "./PricingCard"
import SecondaryButton2 from "./SecondaryButton2"
import PrimaryButton3 from "./PrimaryButton3"
import Subtext4 from "./Subtext4"
import Subtext5 from "./Subtext5"
import LightTickerForToolsWeUse from "./LightTickerForToolsWeUse"
import SmoothScroll from "./SmoothScroll"
import CTAFooter from "./CTAFooter"
import NavbarFooterCTA2 from "./NavbarFooterCTA2"
import SocialMedia2 from "./SocialMedia2"
import Video11 from "./Video11"
import Framer from "./Framer"
import Text from "./Text"
import LetSTalkAnimtaion from "./LetSTalkAnimtaion"
import OvalsAnimation from "./OvalsAnimation"
import FormButton from "./FormButton"

export default function Home({ slots = [] }: { slots?: string[] }) {
  const [activeVideo, setActiveVideo] = useState<CinemaVideoData | null>(null)

  useEffect(() => {
    // Guarantees page starts at top Hero section on refresh or load unless an anchor hash was clicked
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual"
    }
    if (window.location.hash) {
      const hash = window.location.hash.replace("#", "")
      setTimeout(() => {
        const el =
          document.getElementById(hash) ||
          (hash === "services" ? document.getElementById("workflow") : null)
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
      }, 150)
    } else {
      window.scrollTo(0, 0)
    }
  }, [])

  // Ensure all videos play when user clicks or interacts with the page
  useEffect(() => {
    const playAllVideos = () => {
      const videos = document.querySelectorAll<HTMLVideoElement>("video")
      videos.forEach((vid) => {
        if (vid.muted || !vid.hasAttribute("controls")) {
          vid.muted = true
          vid.play().catch(() => {})
        }
      })
    }

    window.addEventListener("click", playAllVideos, { passive: true })
    window.addEventListener("touchstart", playAllVideos, { passive: true })
    playAllVideos()

    return () => {
      window.removeEventListener("click", playAllVideos)
      window.removeEventListener("touchstart", playAllVideos)
    }
  }, [])

  return (
    <>
      <RevealWatcher />
      <CinemaModal video={activeVideo} onClose={() => setActiveVideo(null)} />
      <div className={styles["div-143"]}>
        <div className={styles["div-144"]}>
          <div className={styles["div-145"]}>
            <div className={styles["div-146"]}>
              <Navbar slots={["Harinder.mp4","Services","Work","Pricing","Contact","Hire me","Get Started"]} />
            </div>
          </div>
          <div className={styles["div-147"]}>
            <header
              id="hero"
              className={styles["hero-section"]}
              style={{
                height: "auto",
                minHeight: "auto",
                overflow: "visible",
                width: "100%",
                maxWidth: "100vw",
                paddingBottom: "clamp(40px, 6vh, 64px)",
                paddingTop: "clamp(96px, 14vh, 150px)",
              }}
            >
              <div
                className={styles["containar"]}
                style={{
                  height: "auto",
                  minHeight: "auto",
                  overflow: "visible",
                  width: "100%",
                  maxWidth: "1360px",
                  gap: "32px",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    paddingTop: "clamp(12px, 2.5vh, 28px)",
                  }}
                >
                  {/* Subtle Top Editorial Markers (Fashion / Luxury Studio Style) */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: "8px",
                      width: "100%",
                      maxWidth: "1080px",
                      marginBottom: "16px",
                      padding: "0 8px",
                      opacity: 0.65,
                      boxSizing: "border-box",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Chivo Mono', monospace",
                        fontSize: "clamp(10px, 2.8vw, 11px)",
                        letterSpacing: "1.4px",
                        color: "#666666",
                        textTransform: "uppercase",
                      }}
                    >
                      Harinder.MP4 // Video Editor
                    </span>
                    <span
                      style={{
                        fontFamily: "'Chivo Mono', monospace",
                        fontSize: "clamp(10px, 2.8vw, 11px)",
                        letterSpacing: "1.4px",
                        color: "#666666",
                        textTransform: "uppercase",
                      }}
                    >
                      Edit • Motion • Story
                    </span>
                  </div>

                  {/* Editorial Category Pill */}
                  <div style={{ marginBottom: "18px" }}>
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "6px 18px",
                        borderRadius: "100px",
                        backgroundColor: "rgba(0, 0, 0, 0.04)",
                        border: "1px solid rgba(0, 0, 0, 0.08)",
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.02)",
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
                          fontWeight: 700,
                          fontSize: "11px",
                          letterSpacing: "1.5px",
                          color: "#111111",
                          textTransform: "uppercase",
                        }}
                      >
                        SHORT-FORM SPECIALIST
                      </span>
                    </div>
                  </div>

                  {/* Oversized Editorial Main Headline */}
                  <h1
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "clamp(30px, 6.8vw, 84px)",
                      fontWeight: 800,
                      letterSpacing: "-0.035em",
                      lineHeight: 1.08,
                      color: "#111111",
                      maxWidth: "1040px",
                      margin: "0 auto 18px",
                      textTransform: "uppercase",
                    }}
                  >
                    <span>Short-form video</span>
                    <br />
                    <span>editing that gets </span>
                    <span
                      style={{
                        color: "#E55812",
                      }}
                    >
                      watched.
                    </span>
                  </h1>

                  {/* Supporting Copy */}
                  <p
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: "clamp(14px, 1.35vw, 18px)",
                      color: "#555555",
                      maxWidth: "640px",
                      margin: "0 auto 28px",
                      lineHeight: 1.6,
                      fontWeight: 500,
                      padding: "0 8px",
                    }}
                  >
                    High-retention edits for creators, brands and businesses across Instagram,
                    YouTube Shorts and TikTok.
                  </p>

                  {/* CTA Action Buttons with Consistent Glass Design */}
                  <div
                    className="hero-buttons-container"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "14px",
                      flexWrap: "wrap",
                      marginBottom: "10px",
                      width: "100%",
                    }}
                  >
                    <Link
                      to="/hire-me"
                      className="hero-btn-primary"
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
                    </Link>

                    <Link
                      to="/work"
                      className="hero-btn-secondary"
                    >
                      <span>Explore Selected Work</span>
                      <span style={{ fontSize: "15px", lineHeight: 1 }}>↓</span>
                    </Link>
                  </div>
                </div>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    maxWidth: "100vw",
                    zIndex: 5,
                    overflow: "hidden",
                  }}
                >
                  <VideoCarousel3D onSelectVideo={setActiveVideo} />
                </div>

                {/* Subtle Editorial Transition Divider */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "8px",
                    width: "100%",
                    maxWidth: "1280px",
                    margin: "12px auto 0",
                    padding: "0 clamp(18px, 4vw, 40px)",
                    boxSizing: "border-box",
                    opacity: 0.7,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Chivo Mono', monospace",
                      fontSize: "10.5px",
                      letterSpacing: "1.4px",
                      color: "#666666",
                      textTransform: "uppercase",
                    }}
                  >
                    SELECTED WORK // 2026 ARCHIVE
                  </span>
                  <span
                    style={{
                      fontFamily: "'Chivo Mono', monospace",
                      fontSize: "10.5px",
                      letterSpacing: "1.4px",
                      color: "#666666",
                      textTransform: "uppercase",
                    }}
                  >
                    INSTAGRAM • YOUTUBE • TIKTOK
                  </span>
                </div>
              </div>

              {/* Pure White Background Ambient Texture */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  pointerEvents: "none",
                  zIndex: 1,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "5%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "min(1200px, 100vw)",
                    height: "550px",
                    borderRadius: "50%",
                    background:
                      "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(0, 0, 0, 0.02) 0%, transparent 70%)",
                    filter: "blur(60px)",
                  }}
                />
              </div>
            </header>
            <section className={styles["how-we-fix-section"]} id="results" style={{ padding: "40px 0 20px" }}>
              <div className={styles["containar-3"]}>
                <div style={{ textAlign: "center", marginBottom: "36px" }}>
                  <div style={{ marginBottom: "12px" }}>
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
                        padding: "5px 14px",
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
                      MEASURABLE EDITORIAL IMPACT
                    </span>
                  </div>
                  <h2
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "clamp(26px, 3.5vw, 42px)",
                      fontWeight: 800,
                      color: "#111111",
                      letterSpacing: "-0.02em",
                      margin: "0 0 10px",
                    }}
                  >
                    Engineered for Retention & Growth.
                  </h2>
                  <p
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: "clamp(14px, 1.2vw, 16px)",
                      color: "#666666",
                      maxWidth: "540px",
                      margin: "0 auto",
                    }}
                  >
                    Every video cut is backed by real creator metrics, retention curves, and algorithmic delivery benchmarks.
                  </p>
                </div>
                <div className={styles["number-cards"]}>
                  <div className={styles["div-145"]}>
                    <div className={styles["div-171"] + " " + styles["rv-23"]} data-reveal style={{ transitionDelay: "1242ms" }}>
                      <NumberCard slots={["Avg. Retention Rate","68%","68%","Hook-driven edits that keep viewers watching past the first 3 seconds."]} />
                    </div>
                  </div>
                  <div className={styles["div-145"]}>
                    <div className={styles["div-171"] + " " + styles["rv-23"]} data-reveal style={{ transitionDelay: "1328ms" }}>
                      <NumberCard slots={["Videos Delivered","500+","500+","From solo creators to full agencies — delivered on time, every time."]} />
                    </div>
                  </div>
                  <div className={styles["div-145"]}>
                    <div className={styles["div-171"] + " " + styles["rv-23"]} data-reveal style={{ transitionDelay: "1405ms" }}>
                      <NumberCard slots={["Avg. Engagement Increased","3X","3X","More comments, shares, and saves — not just views."]} />
                    </div>
                  </div>
                  <div className={styles["div-145"]}>
                    <div className={styles["div-171"] + " " + styles["rv-23"]} data-reveal style={{ transitionDelay: "1566ms" }}>
                      <NumberCard slots={["Turnaround Time","48hr","48hr","Send clips today. Get your video back tomorrow."]} />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <EditingWorkflowAndPlatforms />
            <RealVideosScrollGallery onSelectVideo={setActiveVideo} />
            <ProcessSequenceAnimation />
            <section className={styles["testimonial-cards"]}>
              <div className={styles["div-145"]}>
                <div className={styles["div-196"]}>
                  <Testimonial />
                </div>
              </div>
            </section>
            <section
              id="pricing"
              style={{
                width: "100%",
                maxWidth: "100vw",
                padding: "clamp(50px, 7vh, 80px) 0 clamp(40px, 6vh, 60px)",
                backgroundColor: "#F5F4F0",
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
                {/* Intentional Editorial Pricing Header */}
                <div style={{ textAlign: "center", marginBottom: "clamp(40px, 5vh, 56px)" }}>
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
                        padding: "5px 16px",
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
                      PRICING // TRANSPARENT MONTHLY PLANS
                    </span>
                  </div>

                  <h2
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "clamp(32px, 4.5vw, 54px)",
                      fontWeight: 800,
                      color: "#111111",
                      letterSpacing: "-0.025em",
                      lineHeight: 1.15,
                      margin: "0 0 14px",
                    }}
                  >
                    Flexible plans built to grow your content.
                  </h2>

                  <p
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: "clamp(15px, 1.3vw, 17px)",
                      color: "#555555",
                      maxWidth: "620px",
                      margin: "0 auto",
                      lineHeight: 1.6,
                    }}
                  >
                    Choose a plan that fits your volume and velocity. High-retention short-form editing, custom sound design, and revisions included.
                  </p>
                </div>

                {/* 3 Pricing Cards Grid — Exactly ~50px Intentional Spacing Below Header */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
                    gap: "28px",
                    alignItems: "stretch",
                  }}
                >
                  <PricingCard slots={["Starter","Perfect for creators just getting started","$699","/ month","https://framerusercontent.com/images/t4NZZMcbKSULu3efn5nCK44pM.png?width=64&height=64","Up to 8 short-form videos/month","https://framerusercontent.com/images/t4NZZMcbKSULu3efn5nCK44pM.png?width=64&height=64","Basic editing + captions","https://framerusercontent.com/images/t4NZZMcbKSULu3efn5nCK44pM.png?width=64&height=64","Max 60s video length","https://framerusercontent.com/images/t4NZZMcbKSULu3efn5nCK44pM.png?width=64&height=64","Platform-ready formats (Reels, TikTok, Shorts)","https://framerusercontent.com/images/t4NZZMcbKSULu3efn5nCK44pM.png?width=64&height=64","Standard export quality","https://framerusercontent.com/images/t4NZZMcbKSULu3efn5nCK44pM.png?width=64&height=64","Email support","Get Started Now","Get Started Now"]} />
                  <PricingCard slots={["Professional","For creators & brands ready to grow consistently","$1,499","/ month","https://framerusercontent.com/images/t4NZZMcbKSULu3efn5nCK44pM.png?width=64&height=64","Up to 20 short-form videos/month","https://framerusercontent.com/images/t4NZZMcbKSULu3efn5nCK44pM.png?width=64&height=64","Advanced editing + captions","https://framerusercontent.com/images/t4NZZMcbKSULu3efn5nCK44pM.png?width=64&height=64","Hook & storytelling optimization","https://framerusercontent.com/images/t4NZZMcbKSULu3efn5nCK44pM.png?width=64&height=64","Priority export (HD 1080p)","https://framerusercontent.com/images/t4NZZMcbKSULu3efn5nCK44pM.png?width=64&height=64","Unlimited revisions","https://framerusercontent.com/images/t4NZZMcbKSULu3efn5nCK44pM.png?width=64&height=64","Performance insights (monthly)","Get Started Now","Get Started Now"]} />
                  <PricingCard slots={["Business","Best for teams scaling content at volume","$2799","/ month","https://framerusercontent.com/images/t4NZZMcbKSULu3efn5nCK44pM.png?width=64&height=64","30+ short-form videos/month","https://framerusercontent.com/images/t4NZZMcbKSULu3efn5nCK44pM.png?width=64&height=64","Full editing + content optimization","https://framerusercontent.com/images/t4NZZMcbKSULu3efn5nCK44pM.png?width=64&height=64","Strategy support & content planning","https://framerusercontent.com/images/t4NZZMcbKSULu3efn5nCK44pM.png?width=64&height=64","Priority delivery (48hr)","https://framerusercontent.com/images/t4NZZMcbKSULu3efn5nCK44pM.png?width=64&height=64","Unlimited revisions","https://framerusercontent.com/images/t4NZZMcbKSULu3efn5nCK44pM.png?width=64&height=64","Dedicated support","Get Started Now","Get Started Now"]} />
                </div>
              </div>
            </section>
            <FAQSection />
            <section style={{ height: "auto", minHeight: "auto", padding: "10px 0 20px", width: "100%", maxWidth: "100vw", overflow: "hidden" }}>
              <LightTickerForToolsWeUse />
            </section>
          </div>
          <CTAFooter />
        </div>
      </div>
    </>
  )
}
