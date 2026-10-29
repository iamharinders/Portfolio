import React, { useState, useEffect, useRef } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"

interface NavbarProps {
  slots?: string[]
}

export default function Navbar({ slots = [] }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const location = useLocation()
  const navigate = useNavigate()

  const [navVisible, setNavVisible] = useState(true)
  const lastScrollYRef = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrolled(currentScrollY > 30)

      // Mobile smart auto-hide on scroll down to prevent obscuring headings and text
      if (window.innerWidth < 768) {
        if (currentScrollY <= 60) {
          setNavVisible(true)
        } else if (currentScrollY > lastScrollYRef.current + 12) {
          // Scrolling down: hide floating navbar so page content remains completely visible
          if (!mobileMenuOpen) {
            setNavVisible(false)
          }
        } else if (currentScrollY < lastScrollYRef.current - 10) {
          // Scrolling up: reveal navbar immediately
          setNavVisible(true)
        }
      } else {
        setNavVisible(true)
      }
      lastScrollYRef.current = currentScrollY
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [mobileMenuOpen])

  // Section-aware IntersectionObserver for active orange glass indicator
  useEffect(() => {
    if (location.pathname === "/work" || location.pathname === "/all-works") {
      setActiveSection("work")
      return
    }
    if (location.pathname === "/hire-me" || location.pathname === "/contact") {
      setActiveSection("hire")
      return
    }

    // Homepage section tracking
    const sectionIds = ["services", "work", "pricing", "contact"]

    const observerCallback: IntersectionObserverCallback = (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const id = entry.target.id
          if (id === "services" || id === "platforms") {
            setActiveSection("services")
          } else if (id === "work" || id === "results") {
            setActiveSection("work")
          } else if (id === "pricing") {
            setActiveSection("pricing")
          } else if (id === "contact") {
            setActiveSection("hire")
          }
        }
      }
    }

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "-25% 0px -45% 0px",
      threshold: [0.1, 0.25],
    })

    // Observe targets
    for (const id of sectionIds) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }

    // Also clear active section when right at top / Hero
    const handleTopScroll = () => {
      if (window.scrollY < 260) {
        setActiveSection(null)
      }
    }
    window.addEventListener("scroll", handleTopScroll, { passive: true })
    handleTopScroll()

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", handleTopScroll)
    }
  }, [location.pathname])

  // Reset to top behavior when Harinder.MP4 brand is clicked
  const handleBrandClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    if (location.pathname !== "/" && location.pathname !== "/home") {
      navigate("/")
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" })
      }, 30)
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }
  }

  const handleNavClick = (hashId: string) => {
    setMobileMenuOpen(false)
    const id = hashId.replace("#", "")
    if (location.pathname !== "/" && location.pathname !== "/home") {
      navigate(`/#${id}`)
      setTimeout(() => {
        const target = document.getElementById(id)
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" })
      }, 80)
      return
    }
    const target =
      document.getElementById(id) ||
      (id === "services" ? (document.getElementById("services") || document.getElementById("platforms")) : null)
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const isDarkPage = location.pathname === "/work" || location.pathname === "/all-works"

  // Refined Apple/iOS-inspired orange glass styling
  const getGlassLinkStyle = (isActive: boolean): React.CSSProperties => {
    if (isActive) {
      return {
        padding: "7px 16px",
        fontSize: "13.5px",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontWeight: 700,
        color: isDarkPage ? "#FFFFFF" : "#111111",
        backgroundColor: isDarkPage
          ? "rgba(229, 88, 18, 0.22)"
          : "rgba(229, 88, 18, 0.14)",
        border: isDarkPage
          ? "1px solid rgba(229, 88, 18, 0.42)"
          : "1px solid rgba(229, 88, 18, 0.28)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        boxShadow: "0 2px 10px rgba(229, 88, 18, 0.16)",
        borderRadius: "100px",
        textDecoration: "none",
        transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
        display: "inline-flex",
        alignItems: "center",
      }
    }
    return {
      padding: "7px 16px",
      fontSize: "13.5px",
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      fontWeight: 600,
      color: isDarkPage ? "rgba(255, 255, 255, 0.82)" : "#333333",
      backgroundColor: "transparent",
      border: "1px solid transparent",
      borderRadius: "100px",
      textDecoration: "none",
      transition: "all 0.2s ease",
      display: "inline-flex",
      alignItems: "center",
    }
  }

  return (
    <header
      style={{
        position: "fixed",
        top: "max(12px, env(safe-area-inset-top, 12px))",
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        zIndex: 9999,
        padding: "0 16px",
        pointerEvents: "none",
        boxSizing: "border-box",
        transform: navVisible ? "translateY(0)" : "translateY(-130%)",
        transition: "transform 0.32s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <nav
        className="floating-glass-navbar"
        style={{
          pointerEvents: "auto",
          width: "min(840px, 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "7px 12px 7px 20px",
          borderRadius: "100px",
          backgroundColor: isDarkPage
            ? scrolled
              ? "rgba(18, 18, 18, 0.88)"
              : "rgba(14, 14, 14, 0.78)"
            : scrolled
              ? "rgba(255, 255, 255, 0.78)"
              : "rgba(255, 255, 255, 0.65)",
          backdropFilter: "blur(16px) saturate(130%)",
          WebkitBackdropFilter: "blur(16px) saturate(130%)",
          border: isDarkPage
            ? "1px solid rgba(255, 255, 255, 0.12)"
            : "1px solid rgba(0, 0, 0, 0.08)",
          boxShadow: isDarkPage
            ? scrolled
              ? "0 10px 30px rgba(0, 0, 0, 0.6)"
              : "0 4px 20px rgba(0, 0, 0, 0.4)"
            : scrolled
              ? "0 8px 25px rgba(0, 0, 0, 0.07)"
              : "0 4px 16px rgba(0, 0, 0, 0.03)",
          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          boxSizing: "border-box",
        }}
      >
        {/* 1. Primary Portfolio Wordmark: Harinder.MP4 */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <a
            href="/"
            onClick={handleBrandClick}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2px",
              textDecoration: "none",
              cursor: "pointer",
            }}
            title="Reset to Top"
          >
            <span
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "17.5px",
                letterSpacing: "-0.02em",
                color: isDarkPage ? "#FFFFFF" : "#111111",
                display: "inline-flex",
                alignItems: "baseline",
              }}
            >
              <span style={{ fontWeight: 800 }}>Harinder</span>
              <span
                style={{
                  fontFamily: "'Chivo Mono', monospace",
                  fontWeight: 600,
                  fontSize: "12px",
                  letterSpacing: "0.5px",
                  color: "#E55812",
                  marginLeft: "1px",
                }}
              >
                .MP4
              </span>
            </span>
          </a>
        </div>

        {/* 2. Desktop Navigation Links (Home is REMOVED) */}
        <div
          className="navbar-desktop-links"
          style={{
            alignItems: "center",
            gap: "4px",
          }}
        >
          <a
            href="/#services"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick("#services")
            }}
            className="nav-link-glass"
            style={getGlassLinkStyle(activeSection === "services")}
          >
            Services
          </a>

          <Link
            to="/work"
            className="nav-link-glass"
            style={getGlassLinkStyle(activeSection === "work")}
          >
            Work
          </Link>

          <a
            href="/#pricing"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick("#pricing")
            }}
            className="nav-link-glass"
            style={getGlassLinkStyle(activeSection === "pricing")}
          >
            Pricing
          </a>
        </div>

        {/* 3. Right CTA / Hire Me Button with Active Orange State */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Link
            to="/hire-me"
            className="hire-me-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "8px 18px",
              borderRadius: "100px",
              backgroundColor:
                activeSection === "hire"
                  ? "#E55812"
                  : isDarkPage
                    ? "rgba(255, 255, 255, 0.12)"
                    : "#111111",
              border:
                activeSection === "hire"
                  ? "1px solid #E55812"
                  : isDarkPage
                    ? "1px solid rgba(255, 255, 255, 0.2)"
                    : "1px solid #111111",
              color: "#FFFFFF",
              fontSize: "13.5px",
              fontWeight: 700,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              textDecoration: "none",
              whiteSpace: "nowrap",
              boxShadow:
                activeSection === "hire"
                  ? "0 4px 18px rgba(229, 88, 18, 0.4)"
                  : "0 2px 10px rgba(0, 0, 0, 0.12)",
              transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <span>Hire Me</span>
            <svg
              width="12"
              height="12"
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

          {/* Mobile hamburger menu toggle */}
          <button
            className="mobile-nav-burger"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            style={{
              background: isDarkPage ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.04)",
              border: isDarkPage ? "1px solid rgba(255, 255, 255, 0.15)" : "1px solid rgba(0, 0, 0, 0.08)",
              borderRadius: "100px",
              color: isDarkPage ? "#FFFFFF" : "#111111",
              padding: "7px 11px",
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            {mobileMenuOpen ? (
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M2 2L12 12M12 2L2 12" />
              </svg>
            ) : (
              <svg width="15" height="12" viewBox="0 0 15 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                <path d="M1 2.5H14M1 9.5H14" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer (No Home Link) */}
      {mobileMenuOpen && (
        <div
          className="mobile-nav-drawer"
          style={{
            position: "absolute",
            top: "calc(100% + 10px)",
            width: "calc(100% - 32px)",
            maxWidth: "380px",
            backgroundColor: isDarkPage ? "rgba(18, 18, 18, 0.95)" : "rgba(255, 255, 255, 0.92)",
            backdropFilter: "blur(20px) saturate(130%)",
            WebkitBackdropFilter: "blur(20px) saturate(130%)",
            border: isDarkPage ? "1px solid rgba(255, 255, 255, 0.12)" : "1px solid rgba(0, 0, 0, 0.08)",
            borderRadius: "24px",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.25)",
            pointerEvents: "auto",
          }}
        >
          <a
            href="/#services"
            style={{
              ...getGlassLinkStyle(activeSection === "services"),
              width: "100%",
              justifyContent: "space-between",
              boxSizing: "border-box",
            }}
            onClick={(e) => {
              e.preventDefault()
              handleNavClick("#services")
            }}
          >
            <span>Services</span>
            <span style={{ opacity: 0.5, fontSize: "12px" }}>01</span>
          </a>

          <Link
            to="/work"
            style={{
              ...getGlassLinkStyle(activeSection === "work"),
              width: "100%",
              justifyContent: "space-between",
              boxSizing: "border-box",
            }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>Work</span>
            <span style={{ opacity: 0.5, fontSize: "12px" }}>02</span>
          </Link>

          <a
            href="/#pricing"
            style={{
              ...getGlassLinkStyle(activeSection === "pricing"),
              width: "100%",
              justifyContent: "space-between",
              boxSizing: "border-box",
            }}
            onClick={(e) => {
              e.preventDefault()
              handleNavClick("#pricing")
            }}
          >
            <span>Pricing</span>
            <span style={{ opacity: 0.5, fontSize: "12px" }}>03</span>
          </a>

          <Link
            to="/hire-me"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              backgroundColor: "#E55812",
              color: "#FFFFFF",
              padding: "12px 20px",
              borderRadius: "100px",
              fontWeight: 700,
              fontSize: "14.5px",
              textDecoration: "none",
              marginTop: "6px",
              boxShadow: "0 4px 16px rgba(229, 88, 18, 0.35)",
            }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>Hire Me</span>
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
      )}
    </header>
  )
}
