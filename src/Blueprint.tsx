import React, { useState } from "react"
import { Link } from "react-router-dom"

interface SectionSpec {
  id: string
  number: string
  title: string
  subtitle: string
  height: string
  position: string
  animationDir: string
  scrollBehavior: string
  movement: string
  videosLocation: string
  textLocation: string
  countersLocation: string
  stickyPinned: string
  transition: string
  keyElements: string[]
  technicalNotes: string
}

const BLUEPRINT_SECTIONS: SectionSpec[] = [
  {
    id: "hero",
    number: "01",
    title: "HERO — CINEMATIC FILM ENVIRONMENT",
    subtitle: "Opening Atmosphere & Harinder.MP4 Identity",
    height: "100vh (min 780px, max 1000px)",
    position: "Center-aligned vertical stack with absolute atmospheric backdrop layers",
    animationDir: "Staggered fade-up: Subtitle badge (delay 0.1s) → Main H1 (delay 0.25s) → Lead deck (delay 0.4s) → CTA glass buttons (delay 0.55s)",
    scrollBehavior: "Natural browser scroll. Subtle parallax fade (opacity 1 → 0.2, translateY 0 → -60px) as user scrolls into Section 2/3.",
    movement: "Subtle continuous ambient gradient drift and film grain noise. No disruptive manual jumping.",
    videosLocation: "Embedded just below the headline action deck inside the Spatial Reel Carousel.",
    textLocation: "Top center: Monospaced category pill. Middle center: High-impact editorial display headline. Bottom center: Value proposition deck.",
    countersLocation: "Available projects badge / live client availability indicator in upper glass pill.",
    stickyPinned: "Fixed top glass navigation bar with blur(20px) and 1px border. Rest of hero scrolls smoothly.",
    transition: "Soft bottom gradient feather (#050607 to #0A1010) merging seamlessly into Section 02 & 03.",
    keyElements: [
      "Editorial Title: 'Short-form video editing that actually gets results'",
      "Identity: Harinder.MP4 // Creative Post-Production",
      "Palette: Deep teal #012F25, Cinema black #050607, Warm light #F2E8D5, Amber accent #F7A23B",
      "Dual Glass CTAs: 'Start a Project' & 'See Our Works'",
      "Elimination of old saturated orange circle and white tape graphics",
    ],
    technicalNotes: "Cleaned of garish orange backgrounds. Replaced with radial teal/amber ambient light leaks and vignette."
  },
  {
    id: "reel-carousel",
    number: "02",
    title: "HERO REEL CAROUSEL — SPATIAL 3D REEL WALL",
    subtitle: "Apple Vision Pro Inspired Inertial Physics Interaction",
    height: "520px desktop / 420px mobile",
    position: "Full-width viewport horizontal track centered in hero perspective chamber",
    animationDir: "Center-out spatial depth: Center card scale(1.08) bright; Edge cards scale(0.85) rotateY(±22deg) blur(2px) darkened",
    scrollBehavior: "Does NOT trap vertical scrolling. Mouse movement controls horizontal reel field with lerped inertia.",
    movement: "Physical lerp: targetX = normalizedMouseX * range; currentX += (targetX - currentX) * damping. Stronger pull near screen edges. Direct drag & touch swipe supported.",
    videosLocation: "8 vertical cards displaying reel_01.mp4, reel_02.mp4, reel_03.mp4, reel_04.mp4, rahul_reel.mp4, timeline_1.mp4, etc.",
    textLocation: "Card bottom overlay: Project codename, duration, retention tags, and clickable expand cue.",
    countersLocation: "Retention % & view badges on each video card corner (e.g. '1.2M', 'High Retention', 'ACES Grade').",
    stickyPinned: "No pinned scroll trap. Freely interacts while staying pinned within hero container.",
    transition: "Fades into deep teal ambient void at left & right borders via linear-gradient masks.",
    keyElements: [
      "Spatial Vision Pro feel with perspective: 1200px and rotateY curvature",
      "Strict 9:16 aspect ratio: true 9:16 gets cover; non-9:16 gets contain + blurred replica behind",
      "Interaction: Edge-weighted mouse steering, drag inertia, touch swipe, click-to-expand cinema modal",
      "No endless mindless autoplay spinning: user motion drives the field",
    ],
    technicalNotes: "requestAnimationFrame lerp loop with velocity friction and smooth boundary clamping."
  },
  {
    id: "problem",
    number: "03",
    title: "GREAT CONTENT, BUT NO REAL GROWTH?",
    subtitle: "Scroll-Driven Diagnostic Reveal (No Manual Sliders)",
    height: "Auto (~900px desktop)",
    position: "Top centered diagnostic statement followed by a 3-column asymmetric glass card matrix",
    animationDir: "Scroll entry trigger: Badge → H1 'Great content,' → 'but no real growth?' → 'Likes don't pay the bills' → Cards 1, 2, 3 staggered (80ms increments)",
    scrollBehavior: "Pure scroll progress. Text and graphics animate automatically as the section crosses 20% viewport threshold.",
    movement: "Upward spring-like reveal (translateY 30px → 0px, opacity 0 → 1, blur 6px → 0). Zero manual slider dragging.",
    videosLocation: "Mini waveform / retention scrub preview graphics embedded within the diagnostic cards.",
    textLocation: "Center display heading: 'Great content, but no real growth?'. Card 1: 'Views that don't convert', Card 2: 'Views and likes don't pay the bills', Card 3: 'No system, no consistency'.",
    countersLocation: "Card 1: Retention drop metric '-68%'. Card 2: Zero revenue conversion slate. Card 3: Inconsistent frequency timeline.",
    stickyPinned: "None. Entire section is smoothly scrollable.",
    transition: "Dark cinematic divider with subtle emerald hairline border and soft ambient back-glow.",
    keyElements: [
      "No fake sliders or manual scrollbars: completely scroll-automated",
      "Fixes text clipping: no cut-off headers, full responsive line-height and bounding boxes",
      "'Views and likes don't pay the bills' is elevated to prominent headline hierarchy",
      "Glassmorphic cards with subtle hover glow and border highlights",
    ],
    technicalNotes: "Uses native IntersectionObserver triggers with CSS transform/opacity transitions for GPU performance."
  },
  {
    id: "system-delivers",
    number: "04",
    title: "SYSTEM THAT DELIVERS / PERFORMANCE NUMBERS",
    subtitle: "Done-For-You Architecture & Unclipped Animated Metrics",
    height: "Auto (~850px)",
    position: "Split layout: Left sticky headline & narrative / Right animated metric cards & proof matrix",
    animationDir: "Horizontal & vertical reveal: Left text translates right + fades; Right metric cards rise with staggered ease",
    scrollBehavior: "Scroll-triggered counter interpolation once upon entering the viewport (0% → 37%, 0 → 120+, 0 → 2,000,000+).",
    movement: "Counters interpolate smoothly via requestAnimationFrame / fast ease-out. No infinite looping or frozen text.",
    videosLocation: "Background ambient video texture behind metric slate (subtle 5% opacity film reel).",
    textLocation: "Left: 'A done-for-you editing system that delivers results'. Right: metric descriptions & case proof.",
    countersLocation: "Prominent large numbers: 37% Average Retention, 120+ Videos Delivered, 2M+ Organic Engagement, 4.2x Growth Factor.",
    stickyPinned: "Left column stays gently sticky for 300px while metrics scroll into view.",
    transition: "Deep teal vignette falloff into Section 05.",
    keyElements: [
      "Completely fixes clipped metrics: ample padding-bottom and correct box-sizing",
      "Fast, readable numeric counter animation with formatted suffixes (+, %, M)",
      "Clear editorial typography pairing: Syne display font + Chivo Mono metadata labels",
      "Replaces startup orange with deep teal #012F25 and subtle amber highlights",
    ],
    technicalNotes: "Counters implemented with requestAnimationFrame easing math: curr = start + (end - start) * (1 - Math.pow(1 - progress, 3))."
  },
  {
    id: "workflow-raw-to-post",
    number: "05",
    title: "FROM RAW CLIPS TO READY-TO-POST",
    subtitle: "Editorial Post-Production Pipeline (5-Stage Cinematic Workflow)",
    height: "Auto (~950px)",
    position: "Sequential timeline progression: RAW FOOTAGE → EDITING → COLOR → SOUND → READY TO POST",
    animationDir: "Linear scroll progression: each stage illuminates and connects via animated laser trace lines as user scrolls down",
    scrollBehavior: "Scroll-synced illumination. Active stage highlights in warm amber (#F7A23B) with subtle scale(1.02).",
    movement: "Vertical connector line draws downward from Stage 01 to Stage 05. Floating footage preview badges.",
    videosLocation: "Interactive video comparison widget: Raw camera clip (flat log) vs Graded & sound-designed final cut.",
    textLocation: "Header: 'From raw clips to ready-to-post.' Subhead: 'You send the footage. We craft the story.' Each stage has technical breakdown.",
    countersLocation: "Stage timecode indicators (00:00:00:00 → 00:00:45:00) and delivery turnaround timer (24-48h).",
    stickyPinned: "Optional sticky timeline spine while stages sequentially highlight.",
    transition: "Seamless gradient blend into the platform service cards.",
    keyElements: [
      "Editorial composition replacing generic advertising banners",
      "5 Clear Stages: 01 Raw Ingestion → 02 Story Cut → 03 ACES Color Grade → 04 Custom Soundscape → 05 Multi-Platform Export",
      "Cinematic dark surfaces with glass accents and technical production metadata",
    ],
    technicalNotes: "Interactive stage selection + scroll-progress observer for active stage activation."
  },
  {
    id: "platform-services",
    number: "06",
    title: "SERVICES — SHORTS, REELS & TIKTOK",
    subtitle: "Conversion-Focused Platform Vertical Cards",
    height: "Auto (~800px)",
    position: "3-Column balanced vertical card grid with glass depth and 3D device mockup",
    animationDir: "Staggered rise (translateY 40px → 0) with 3D tilt on mouse hover (perspective 1000px)",
    scrollBehavior: "Natural scroll entry. Device mockup parallax rotates slightly as user traverses.",
    movement: "Subtle mouse-tracking 3D tilt on individual cards. Soft glass reflections on hover.",
    videosLocation: "Inside the realistic dark titanium smartphone mockup playing a featured vertical reel.",
    textLocation: "Top: Platform badges (Instagram Reels, YouTube Shorts, TikTok). Middle: Retention specs. Bottom: Deliverables checklist.",
    countersLocation: "Platform-specific specs: 9:16 Native, 4K/1080p 60fps, 85%+ Target Retention rate.",
    stickyPinned: "Device mockup anchors alongside cards on desktop viewports.",
    transition: "Dark charcoal gradient separator with subtle audio waveform animation.",
    keyElements: [
      "Photorealistic smartphone mockup: thin bezel, dark titanium rim, subtle glass reflection, real reel looping",
      "Refined glassmorphism: rgba(255,255,255,0.04), 1px white border, backdrop-filter: blur(20px)",
      "Elimination of excessive brand rainbow colors: unified luxury cinema palette",
    ],
    technicalNotes: "CSS 3D perspective with device frame crafted in pure CSS and high-res video embed."
  },
  {
    id: "real-videos-numbers",
    number: "07",
    title: "REAL VIDEOS / REAL NUMBERS",
    subtitle: "Curated Portfolio Showcase with Harinder's Real Footage",
    height: "Auto (~900px)",
    position: "Curated masonry / asymmetric grid showcasing actual portfolio assets",
    animationDir: "Staggered card fade-in with hover zoom on video thumbnails (scale 1.0 → 1.04)",
    scrollBehavior: "Smooth scroll with horizontal drag / swipe option for mobile.",
    movement: "Hover micro-movement: sound indicator waves activate, video un-mutes preview on hover.",
    videosLocation: "reel_01.mp4, reel_02.mp4, reel_03.mp4, rahul_reel.mp4, timeline_1.mp4 with custom poster art.",
    textLocation: "Overlay on card hover: Client name, view counts, conversion rate, audio design notes.",
    countersLocation: "Prominent badges: 1.2M Views, 758K Views, 1.4M Views, 623K Views, 2.1M Views.",
    stickyPinned: "Filter pills (All, High Retention, Color Grade, Sound Design) stick to sub-nav on scroll.",
    transition: "Radial glow feathering into Case Studies / Results section.",
    keyElements: [
      "Zero stock images: populated exclusively with Harinder's project files and video clips",
      "Click-to-play Cinema Modal with full theater backdrop and audio controls",
      "Unclipped metadata: all metrics, client handles, and tags completely visible",
    ],
    technicalNotes: "IntersectionObserver pauses off-screen videos to keep CPU and memory usage minimal."
  },
  {
    id: "results-editorial",
    number: "08",
    title: "RESULTS / ASYMMETRIC CASE STUDIES",
    subtitle: "Creator Growth Evidence & Deep Dive Breakdown",
    height: "Auto (~1000px)",
    position: "Asymmetric alternating editorial layout (60/40 image-video vs narrative breakdown)",
    animationDir: "Alternating slide-in: Left visual slides right, right narrative slides left",
    scrollBehavior: "Section triggers narrative reveal as user scrolls past each case study milestone.",
    movement: "Subtle parallax on before/after grade split images (casestudy_grade_split.jpg, etc.).",
    videosLocation: "Split-screen comparison video and before/after color grading scrubber.",
    textLocation: "Large editorial case study headers, client quotes, strategy breakdown, and retention graph.",
    countersLocation: "Case metrics: '+10K followers in 30 days', '3.4x watch time increase', '89% completion rate'.",
    stickyPinned: "None. Flows naturally in editorial sequence.",
    transition: "Hairline glass divider into Section 09 (Editing Tools).",
    keyElements: [
      "Replaces generic 3-column template cards with bespoke editorial film spreads",
      "Before/After grading showcase using project assets (casestudy_grade_split.jpg)",
      "Clear distinction between Harinder's verified client projects and conceptual cuts",
    ],
    technicalNotes: "Optimized image responsive sizing and lazy loading."
  },
  {
    id: "editing-tools",
    number: "09",
    title: "EDITING TOOLS — VERTICAL FLOATING SUITE",
    subtitle: "High-Caliber Technical Stack (DaVinci, Premiere, After Effects)",
    height: "Auto (~700px)",
    position: "Editorial center headline with 3 multi-speed vertically translating columns",
    animationDir: "Column 1 translates upward (slow), Column 2 translates downward (medium), Column 3 translates upward (slow)",
    scrollBehavior: "Smooth automatic parallax coupled to scroll speed. No manual horizontal slider.",
    movement: "Continuous slow floating drift with scroll amplification. Large, recognized software insignias.",
    videosLocation: "Tool preview footage / UI workspace screenshots in tool card background at low opacity.",
    textLocation: "Top: 'Crafted in industry-standard post-production suites'. Tool cards: DaVinci Resolve Studio (ACES Color), Adobe Premiere Pro, After Effects, Photoshop, Final Cut Pro.",
    countersLocation: "Version / Bit-depth badges: '10-Bit 4:2:2', '32-Bit Float Audio', 'ACEScc Color Space'.",
    stickyPinned: "None. Vertical column motion runs in clean contained track.",
    transition: "Gradient dissolve into Testimonial & Creator Results.",
    keyElements: [
      "Replaces small, blurry horizontal ticker with impressive vertical floating software pillars",
      "Only includes genuine video tools: DaVinci Resolve, Premiere Pro, After Effects, Photoshop, Final Cut Pro",
      "Removes giant empty bars and garish mismatched colors",
    ],
    technicalNotes: "CSS translate3d transforms with will-change: transform for 60fps rendering."
  },
  {
    id: "testimonials-proof",
    number: "10",
    title: "TESTIMONIALS / CREATOR PROOF",
    subtitle: "Scroll-Triggered Growth Impact (3X & 2M+ Metric Proof)",
    height: "Auto (~850px)",
    position: "Center impact metrics flanked by curated creator quote slates",
    animationDir: "Scale up from 0.95 → 1.0 + fade in as user scrolls into center focus",
    scrollBehavior: "Scroll-triggered number animation: '3X' reveals smoothly, '2,000,000+' counts up.",
    movement: "Gentle hovering glass card elevation on cursor hover.",
    videosLocation: "Circular video avatars / thumbnail reels beside testimonials.",
    textLocation: "Huge typographic metrics ('3X', '2M+'), creator testimonials, and attribution.",
    countersLocation: "Animated numbers: 3X Growth Multiplier, 2,000,000+ Verified Organic Impressions.",
    stickyPinned: "Center metric slate remains anchored briefly while testimonials cross-fade.",
    transition: "Feathers into deep black cinematic void of final outro.",
    keyElements: [
      "Scroll-triggered 3X and 2,000,000+ engagement animation working seamlessly",
      "Clear labeling: authentic creator reviews with verified handle links",
      "No broken or clipped numbers: ample baseline clearance",
    ],
    technicalNotes: "IntersectionObserver single-trigger with easing function."
  },
  {
    id: "final-contact-footer",
    number: "11",
    title: "FINAL OUTRO — CINEMATIC CLOSING SCENE",
    subtitle: "Director's Slate, Direct Contact & High-Conversion CTA",
    height: "Auto (~750px)",
    position: "Center dramatic film slate with luminous atmospheric spotlight and bottom copyright bar",
    animationDir: "Atmospheric bloom: Center ambient light slowly expands, typography reveals like closing film credits",
    scrollBehavior: "Natural ending. Slow breath animation on ambient background light leaks.",
    movement: "Subtle interactive cursor spotlight following pointer across footer card.",
    videosLocation: "Looped ambient film grain and anamorphic flare background texture.",
    textLocation: "Giant typography: 'Ready to elevate your short-form content?'. Direct connect: iamharinders@gmail.com, Instagram: @harinder.mp4.",
    countersLocation: "Studio status badge: '● OPEN FOR SELECT COMMISSIONS — Q4 / 2026'.",
    stickyPinned: "None. Grand finale of the portfolio.",
    transition: "Pure black ground #050607.",
    keyElements: [
      "Feels like the closing scene of a cinema masterpiece",
      "Large, confident typography with Harinder.MP4 studio brand mark",
      "Direct clickable links: iamharinders@gmail.com & https://www.instagram.com/harinder.mp4/",
      "No ClipCut references anywhere: strictly Harinder.MP4",
    ],
    technicalNotes: "Clean, responsive grid with full accessibility and contrast ratios."
  }
]

export default function Blueprint() {
  const [activeTab, setActiveTab] = useState<"storyboard" | "specs" | "palette">("storyboard")
  const [selectedSection, setSelectedSection] = useState<string>("hero")

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#050607",
        color: "#F2E8D5",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        padding: "40px clamp(16px, 4vw, 60px)",
        boxSizing: "border-box",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      {/* Background ambient lighting */}
      <div
        style={{
          position: "fixed",
          top: "-150px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "1000px",
          height: "600px",
          background: "radial-gradient(circle, rgba(1, 47, 37, 0.45) 0%, rgba(247, 162, 59, 0.08) 50%, transparent 70%)",
          filter: "blur(90px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div style={{ maxWidth: "1400px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Top Header */}
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            paddingBottom: "28px",
            marginBottom: "40px",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
              <span
                style={{
                  display: "inline-block",
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "#F7A23B",
                  boxShadow: "0 0 10px #F7A23B",
                }}
              />
              <span
                style={{
                  fontFamily: "'Chivo Mono', monospace",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  color: "#C5B8A5",
                }}
              >
                PHASE 0 // SYSTEM ARCHITECTURE & UX STORYBOARD
              </span>
            </div>
            <h1
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(28px, 4vw, 44px)",
                fontWeight: 800,
                color: "#F2E8D5",
                margin: 0,
                letterSpacing: "-0.02em",
              }}
            >
              HARINDER.MP4 <span style={{ color: "#F7A23B", fontWeight: 400 }}>// Website Blueprint</span>
            </h1>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
            <Link
              to="/"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                color: "#F2E8D5",
                textDecoration: "none",
                padding: "10px 18px",
                borderRadius: "100px",
                fontSize: "13px",
                fontWeight: 600,
                backdropFilter: "blur(12px)",
                transition: "all 0.2s ease",
              }}
            >
              ← Back to Live Portfolio
            </Link>

            <div
              style={{
                display: "inline-flex",
                flexWrap: "wrap",
                gap: "4px",
                backgroundColor: "rgba(10, 16, 16, 0.8)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                borderRadius: "100px",
                padding: "4px",
                maxWidth: "100%",
                boxSizing: "border-box",
              }}
            >
              {(["storyboard", "specs", "palette"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    backgroundColor: activeTab === tab ? "rgba(1, 47, 37, 0.9)" : "transparent",
                    color: activeTab === tab ? "#F7A23B" : "#C5B8A5",
                    border: activeTab === tab ? "1px solid rgba(247, 162, 59, 0.3)" : "none",
                    borderRadius: "100px",
                    padding: "8px 14px",
                    fontSize: "11.5px",
                    fontWeight: 600,
                    cursor: "pointer",
                    textTransform: "uppercase",
                    letterSpacing: "0.8px",
                    fontFamily: "'Chivo Mono', monospace",
                    transition: "all 0.2s ease",
                  }}
                >
                  {tab === "storyboard" ? "1. Motion Storyboard" : tab === "specs" ? "2. Section Specs" : "3. Palette & Identity"}
                </button>
              ))}
            </div>
          </div>
        </header>

        {/* Tab 1: Interactive Motion Storyboard */}
        {activeTab === "storyboard" && (
          <div>
            <div
              style={{
                marginBottom: "28px",
                padding: "20px 24px",
                backgroundColor: "rgba(1, 47, 37, 0.25)",
                border: "1px solid rgba(10, 85, 87, 0.4)",
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "14px",
              }}
            >
              <div>
                <strong style={{ color: "#F7A23B", fontSize: "14px", display: "block", marginBottom: "4px" }}>
                  Storyboard Navigation Overview
                </strong>
                <p style={{ margin: 0, fontSize: "13px", color: "#C5B8A5" }}>
                  Below is the complete visual sequence of all 10 core portfolio chapters. Click any section card to inspect its exact spatial and motion parameters.
                </p>
              </div>
              <span
                style={{
                  fontFamily: "'Chivo Mono', monospace",
                  fontSize: "11px",
                  color: "#F7A23B",
                  backgroundColor: "rgba(247, 162, 59, 0.12)",
                  padding: "6px 14px",
                  borderRadius: "100px",
                  border: "1px solid rgba(247, 162, 59, 0.3)",
                }}
              >
                11 SECTIONS MAPPED // 100% SPEC COMPLIANT
              </span>
            </div>

            {/* Storyboard Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
                gap: "24px",
              }}
            >
              {BLUEPRINT_SECTIONS.map((sec) => (
                <div
                  key={sec.id}
                  onClick={() => setSelectedSection(sec.id)}
                  style={{
                    backgroundColor: selectedSection === sec.id ? "rgba(10, 24, 25, 0.85)" : "rgba(10, 16, 16, 0.55)",
                    border: selectedSection === sec.id ? "1px solid #F7A23B" : "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "24px",
                    padding: "24px",
                    cursor: "pointer",
                    position: "relative",
                    backdropFilter: "blur(16px)",
                    transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                    boxShadow: selectedSection === sec.id ? "0 20px 40px rgba(0, 0, 0, 0.6), 0 0 25px rgba(247, 162, 59, 0.15)" : "none",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                    <span
                      style={{
                        fontFamily: "'Chivo Mono', monospace",
                        fontSize: "20px",
                        fontWeight: 700,
                        color: selectedSection === sec.id ? "#F7A23B" : "#C5B8A5",
                      }}
                    >
                      {sec.number}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Chivo Mono', monospace",
                        fontSize: "11px",
                        padding: "4px 10px",
                        borderRadius: "100px",
                        backgroundColor: "rgba(255, 255, 255, 0.06)",
                        color: "#C5B8A5",
                      }}
                    >
                      {sec.height}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "#F2E8D5",
                      margin: "0 0 6px",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {sec.title}
                  </h3>
                  <p style={{ margin: "0 0 16px", fontSize: "13px", color: "#C5B8A5" }}>
                    {sec.subtitle}
                  </p>

                  {/* Wireframe Mock Box */}
                  <div
                    style={{
                      height: "130px",
                      backgroundColor: "rgba(5, 6, 7, 0.7)",
                      border: "1px dashed rgba(255, 255, 255, 0.15)",
                      borderRadius: "12px",
                      padding: "12px",
                      boxSizing: "border-box",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      marginBottom: "16px",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "10px", fontFamily: "'Chivo Mono', monospace", color: "#0A5557" }}>
                      <span>POS: {sec.position.split(" ")[0]}</span>
                      <span>DIR: {sec.animationDir.split(" ")[0]}</span>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                      {sec.videosLocation !== "None" && (
                        <span style={{ fontSize: "11px", color: "#F7A23B", backgroundColor: "rgba(247, 162, 59, 0.15)", padding: "3px 8px", borderRadius: "6px" }}>
                          ▶ VIDEO
                        </span>
                      )}
                      {sec.countersLocation !== "None" && (
                        <span style={{ fontSize: "11px", color: "#FAF2A0", backgroundColor: "rgba(250, 242, 160, 0.15)", padding: "3px 8px", borderRadius: "6px" }}>
                          # COUNTER
                        </span>
                      )}
                      <span style={{ fontSize: "11px", color: "#C5B8A5", backgroundColor: "rgba(255, 255, 255, 0.08)", padding: "3px 8px", borderRadius: "6px" }}>
                        § TEXT
                      </span>
                    </div>

                    <div style={{ fontSize: "10px", color: "#A6A19B", textAlign: "center" }}>
                      Scroll: {sec.scrollBehavior.slice(0, 48)}...
                    </div>
                  </div>

                  {/* Key highlights list */}
                  <ul style={{ margin: 0, paddingLeft: "16px", fontSize: "12px", color: "#C5B8A5", lineHeight: 1.5 }}>
                    {sec.keyElements.slice(0, 3).map((item, idx) => (
                      <li key={idx} style={{ marginBottom: "4px" }}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Detailed Section Specs */}
        {activeTab === "specs" && (
          <div style={{ display: "grid", gridTemplateColumns: "300px 1fr", gap: "32px", alignItems: "start" }}>
            {/* Sidebar section list */}
            <div
              style={{
                backgroundColor: "rgba(10, 16, 16, 0.6)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "20px",
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              {BLUEPRINT_SECTIONS.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => setSelectedSection(sec.id)}
                  style={{
                    backgroundColor: selectedSection === sec.id ? "rgba(1, 47, 37, 0.9)" : "transparent",
                    color: selectedSection === sec.id ? "#F7A23B" : "#C5B8A5",
                    border: selectedSection === sec.id ? "1px solid rgba(247, 162, 59, 0.3)" : "none",
                    borderRadius: "12px",
                    padding: "12px 16px",
                    textAlign: "left",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    transition: "all 0.2s ease",
                  }}
                >
                  <span style={{ fontFamily: "'Chivo Mono', monospace", fontSize: "12px", fontWeight: 700 }}>
                    {sec.number}
                  </span>
                  <span style={{ fontSize: "13px", fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {sec.title.split("—")[0].trim()}
                  </span>
                </button>
              ))}
            </div>

            {/* Main detail card */}
            {(() => {
              const active = BLUEPRINT_SECTIONS.find((s) => s.id === selectedSection) || BLUEPRINT_SECTIONS[0]
              return (
                <div
                  style={{
                    backgroundColor: "rgba(10, 16, 16, 0.7)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    borderRadius: "24px",
                    padding: "36px",
                    backdropFilter: "blur(20px)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
                    <span style={{ fontFamily: "'Chivo Mono', monospace", fontSize: "14px", color: "#F7A23B", fontWeight: 700 }}>
                      SECTION {active.number}
                    </span>
                    <span style={{ color: "rgba(255, 255, 255, 0.3)" }}>|</span>
                    <span style={{ fontFamily: "'Chivo Mono', monospace", fontSize: "13px", color: "#0A5557" }}>
                      HEIGHT: {active.height}
                    </span>
                  </div>

                  <h2
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "30px",
                      fontWeight: 800,
                      color: "#F2E8D5",
                      margin: "0 0 8px",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {active.title}
                  </h2>
                  <p style={{ margin: "0 0 28px", fontSize: "15px", color: "#C5B8A5" }}>
                    {active.subtitle}
                  </p>

                  {/* 10 Architectural Specs Grid */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                      gap: "20px",
                      marginBottom: "32px",
                    }}
                  >
                    <div style={{ backgroundColor: "rgba(5, 6, 7, 0.6)", padding: "16px", borderRadius: "14px", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
                      <strong style={{ display: "block", fontSize: "11px", color: "#F7A23B", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "6px", fontFamily: "'Chivo Mono', monospace" }}>
                        📍 Content Position
                      </strong>
                      <span style={{ fontSize: "13px", color: "#F2E8D5", lineHeight: 1.5 }}>{active.position}</span>
                    </div>

                    <div style={{ backgroundColor: "rgba(5, 6, 7, 0.6)", padding: "16px", borderRadius: "14px", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
                      <strong style={{ display: "block", fontSize: "11px", color: "#F7A23B", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "6px", fontFamily: "'Chivo Mono', monospace" }}>
                        🎬 Animation Direction
                      </strong>
                      <span style={{ fontSize: "13px", color: "#F2E8D5", lineHeight: 1.5 }}>{active.animationDir}</span>
                    </div>

                    <div style={{ backgroundColor: "rgba(5, 6, 7, 0.6)", padding: "16px", borderRadius: "14px", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
                      <strong style={{ display: "block", fontSize: "11px", color: "#F7A23B", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "6px", fontFamily: "'Chivo Mono', monospace" }}>
                        📜 Scroll Behaviour
                      </strong>
                      <span style={{ fontSize: "13px", color: "#F2E8D5", lineHeight: 1.5 }}>{active.scrollBehavior}</span>
                    </div>

                    <div style={{ backgroundColor: "rgba(5, 6, 7, 0.6)", padding: "16px", borderRadius: "14px", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
                      <strong style={{ display: "block", fontSize: "11px", color: "#F7A23B", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "6px", fontFamily: "'Chivo Mono', monospace" }}>
                        ↔️ Horizontal/Vertical Movement
                      </strong>
                      <span style={{ fontSize: "13px", color: "#F2E8D5", lineHeight: 1.5 }}>{active.movement}</span>
                    </div>

                    <div style={{ backgroundColor: "rgba(5, 6, 7, 0.6)", padding: "16px", borderRadius: "14px", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
                      <strong style={{ display: "block", fontSize: "11px", color: "#F7A23B", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "6px", fontFamily: "'Chivo Mono', monospace" }}>
                        🎥 Where Videos Appear
                      </strong>
                      <span style={{ fontSize: "13px", color: "#F2E8D5", lineHeight: 1.5 }}>{active.videosLocation}</span>
                    </div>

                    <div style={{ backgroundColor: "rgba(5, 6, 7, 0.6)", padding: "16px", borderRadius: "14px", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
                      <strong style={{ display: "block", fontSize: "11px", color: "#F7A23B", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "6px", fontFamily: "'Chivo Mono', monospace" }}>
                        ✍️ Where Text Appears
                      </strong>
                      <span style={{ fontSize: "13px", color: "#F2E8D5", lineHeight: 1.5 }}>{active.textLocation}</span>
                    </div>

                    <div style={{ backgroundColor: "rgba(5, 6, 7, 0.6)", padding: "16px", borderRadius: "14px", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
                      <strong style={{ display: "block", fontSize: "11px", color: "#F7A23B", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "6px", fontFamily: "'Chivo Mono', monospace" }}>
                        🔢 Where Counters Appear
                      </strong>
                      <span style={{ fontSize: "13px", color: "#F2E8D5", lineHeight: 1.5 }}>{active.countersLocation}</span>
                    </div>

                    <div style={{ backgroundColor: "rgba(5, 6, 7, 0.6)", padding: "16px", borderRadius: "14px", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
                      <strong style={{ display: "block", fontSize: "11px", color: "#F7A23B", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "6px", fontFamily: "'Chivo Mono', monospace" }}>
                        📌 Sticky/Pinned Behaviour
                      </strong>
                      <span style={{ fontSize: "13px", color: "#F2E8D5", lineHeight: 1.5 }}>{active.stickyPinned}</span>
                    </div>

                    <div style={{ backgroundColor: "rgba(5, 6, 7, 0.6)", padding: "16px", borderRadius: "14px", border: "1px solid rgba(255, 255, 255, 0.08)", gridColumn: "1 / -1" }}>
                      <strong style={{ display: "block", fontSize: "11px", color: "#F7A23B", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "6px", fontFamily: "'Chivo Mono', monospace" }}>
                        🔀 Transition Between Sections
                      </strong>
                      <span style={{ fontSize: "13px", color: "#F2E8D5", lineHeight: 1.5 }}>{active.transition}</span>
                    </div>
                  </div>

                  {/* Key Implementation Deliverables */}
                  <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)", paddingTop: "24px" }}>
                    <h4 style={{ fontFamily: "'Syne', sans-serif", fontSize: "16px", color: "#F7A23B", margin: "0 0 12px" }}>
                      Key Implementation Requirements
                    </h4>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      {active.keyElements.map((el, idx) => (
                        <div key={idx} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", color: "#C5B8A5" }}>
                          <span style={{ color: "#F7A23B" }}>✓</span>
                          <span>{el}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })()}
          </div>
        )}

        {/* Tab 3: Design Tokens & Palette */}
        {activeTab === "palette" && (
          <div
            style={{
              backgroundColor: "rgba(10, 16, 16, 0.7)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              borderRadius: "24px",
              padding: "36px",
            }}
          >
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "28px", color: "#F2E8D5", margin: "0 0 8px" }}>
              Cinematic Color System & Brand Identity
            </h2>
            <p style={{ color: "#C5B8A5", fontSize: "14px", margin: "0 0 32px" }}>
              Standardized color swatches strictly replacing all saturated startup orange backgrounds with high-end dark cinema and deep teal tones.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "20px", marginBottom: "40px" }}>
              {[
                { name: "PRIMARY BLACK", hex: "#050607", desc: "Main viewport background, deep cinematic shadow" },
                { name: "SURFACE CHARCOAL", hex: "#0A1010", desc: "Card surfaces, elevated glass backdrops" },
                { name: "SECONDARY DEEP TEAL", hex: "#012F25", desc: "Atmospheric ambient lighting & glows" },
                { name: "DARK TEAL HIGHLIGHT", hex: "#063B3D", desc: "Radial glows, borders, badge containers" },
                { name: "MUTED SLATE TEAL", hex: "#0E1718", desc: "Secondary glass layers & card containers" },
                { name: "ACCENT FILM AMBER", hex: "#F7A23B", desc: "Subtle key light accent only (NOT whole background!)" },
                { name: "MUTED PARCHMENT", hex: "#C5B8A5", desc: "Secondary editorial copy, subtitles, meta" },
                { name: "WARM HIGHLIGHT WHITE", hex: "#F2E8D5", desc: "Primary typography, headlines, active badges" },
              ].map((color) => (
                <div
                  key={color.hex}
                  style={{
                    backgroundColor: "rgba(5, 6, 7, 0.8)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: "16px",
                    overflow: "hidden",
                  }}
                >
                  <div style={{ height: "80px", backgroundColor: color.hex, borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }} />
                  <div style={{ padding: "14px" }}>
                    <div style={{ fontFamily: "'Chivo Mono', monospace", fontSize: "13px", fontWeight: 700, color: "#F2E8D5", marginBottom: "2px" }}>
                      {color.hex}
                    </div>
                    <div style={{ fontSize: "11px", fontWeight: 600, color: "#F7A23B", textTransform: "uppercase", marginBottom: "6px" }}>
                      {color.name}
                    </div>
                    <div style={{ fontSize: "11px", color: "#A6A19B", lineHeight: 1.4 }}>
                      {color.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Typography Spec */}
            <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)", paddingTop: "28px" }}>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "20px", color: "#F2E8D5", margin: "0 0 16px" }}>
                Typography Hierarchy
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
                <div style={{ padding: "20px", backgroundColor: "rgba(5, 6, 7, 0.6)", borderRadius: "14px", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
                  <div style={{ fontSize: "11px", color: "#F7A23B", fontFamily: "'Chivo Mono', monospace", marginBottom: "6px" }}>
                    DISPLAY HEADLINES
                  </div>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "24px", fontWeight: 800, color: "#F2E8D5", marginBottom: "6px" }}>
                    Syne Display 800
                  </div>
                  <div style={{ fontSize: "12px", color: "#A6A19B" }}>
                    Used for primary cinematic statements, hero H1, section titles, and case study hero text.
                  </div>
                </div>

                <div style={{ padding: "20px", backgroundColor: "rgba(5, 6, 7, 0.6)", borderRadius: "14px", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
                  <div style={{ fontSize: "11px", color: "#F7A23B", fontFamily: "'Chivo Mono', monospace", marginBottom: "6px" }}>
                    INTERFACE & BODY
                  </div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "22px", fontWeight: 600, color: "#F2E8D5", marginBottom: "6px" }}>
                    Plus Jakarta Sans
                  </div>
                  <div style={{ fontSize: "12px", color: "#A6A19B" }}>
                    Used for body descriptions, card narratives, nav links, and interactive buttons.
                  </div>
                </div>

                <div style={{ padding: "20px", backgroundColor: "rgba(5, 6, 7, 0.6)", borderRadius: "14px", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
                  <div style={{ fontSize: "11px", color: "#F7A23B", fontFamily: "'Chivo Mono', monospace", marginBottom: "6px" }}>
                    TECHNICAL METADATA & LABELS
                  </div>
                  <div style={{ fontFamily: "'Chivo Mono', monospace", fontSize: "20px", fontWeight: 600, color: "#F2E8D5", marginBottom: "6px" }}>
                    Chivo Mono
                  </div>
                  <div style={{ fontSize: "12px", color: "#A6A19B" }}>
                    Used for timecodes, badges, tags, aspect ratios (9:16), frame rates, and metric counters.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
