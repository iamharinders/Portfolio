import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function Navbar({ slots = [] }: { slots?: string[] }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const handleNavClick = (hashId: string) => {
    setMobileMenuOpen(false)
    if (location.pathname !== "/") {
      window.location.href = `/${hashId}`
      return
    }
    const el = document.getElementById(hashId.replace("#", ""))
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className={styles["desktop"]} style={{ position: "relative" }}>
      <div className={styles["container"]}>
        <div className={styles["logo-container"]}>
          <Link className={styles["logo-container-2"]} to="/" onClick={() => setMobileMenuOpen(false)}>
            <div className={styles["logo"]}>
              <div className={styles["div"]}>
                <SvgGraphic
                  className={styles["svg"]}
                  html={
                    '<svg style="width:100%;height:100%;" viewBox="0 0 24 24" preserveAspectRatio="none" width="100%" height="100%" data-f2c-idx="12"><use href="#svg-1084292861_3485" data-f2c-idx="13"></use></svg>'
                  }
                />
              </div>
            </div>
            <div className={styles["logo-title-text"]}>
              <p className={styles["p"]}>{slots[0] ?? "Harinder.mp4"}</p>
            </div>
          </Link>
        </div>

        {/* Desktop Menu Items */}
        <div className={styles["menu-items"]}>
          <div className={styles["reviews-text"]}>
            <div className={styles["p-2"]}>
              <a className={styles["a"]} href="/#services" onClick={(e) => { e.preventDefault(); handleNavClick("#services") }}>
                {slots[1] ?? "Services"}
              </a>
            </div>
          </div>
          <div className={styles["reviews-text-2"]}>
            <div className={styles["p-3"]}>
              <Link className={styles["a"]} to="/all-works">
                {slots[2] ?? "Work"}
              </Link>
            </div>
          </div>
          <div className={styles["reviews-text-3"]}>
            <div className={styles["p-4"]}>
              <a className={styles["a"]} href="/#pricing" onClick={(e) => { e.preventDefault(); handleNavClick("#pricing") }}>
                {slots[3] ?? "Pricing"}
              </a>
            </div>
          </div>
          <div className={styles["reviews-text-4"]}>
            <div className={styles["p-5"]}>
              <Link className={styles["a"]} to="/contact">
                {slots[4] ?? "Contact"}
              </Link>
            </div>
          </div>
        </div>

        {/* Right Action CTA */}
        <div className={styles["div-2"]}>
          <Link className={styles["variant-1"]} to="/contact">
            <div className={styles["text"]}>
              <div className={styles["text-2"]}>
                <div className={styles["promo-button-label"]}>
                  <p className={styles["p-6"]}>{slots[5] ?? "Start a Project"}</p>
                </div>
                <div className={styles["promo-button-label-2"]}>
                  <p className={styles["p-7"]}>{slots[6] ?? "Start a Project ↗"}</p>
                </div>
              </div>
              <div className={styles["arrow"]}>
                <div className={styles["arrow-2"]}>
                  <div className={styles["div-3"]}>
                    <SvgGraphic
                      className={styles["svg-2"]}
                      html={
                        '<svg style="width:100%;height:100%;" viewBox="0 0 24 24" preserveAspectRatio="none" width="100%" height="100%" data-f2c-idx="40"><use href="#svg1883890042_373" data-f2c-idx="41"></use></svg>'
                      }
                    />
                  </div>
                </div>
                <div className={styles["arrow-3"]}>
                  <div className={styles["div-3"]}>
                    <SvgGraphic
                      className={styles["svg-2"]}
                      html={
                        '<svg style="width:100%;height:100%;" viewBox="0 0 24 24" preserveAspectRatio="none" width="100%" height="100%" data-f2c-idx="44"><use href="#svg1883890042_373" data-f2c-idx="45"></use></svg>'
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button
          className="mobile-nav-toggle"
          onClick={() => setMobileMenuOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          style={{
            display: "none",
            background: "rgba(255, 255, 255, 0.08)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            borderRadius: "100px",
            color: "#fff",
            padding: "8px 14px",
            fontSize: "13px",
            cursor: "pointer",
          }}
        >
          {mobileMenuOpen ? "✕ Close" : "☰ Menu"}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            marginTop: "8px",
            backgroundColor: "rgba(16, 11, 8, 0.98)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            borderRadius: "20px",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.8)",
            zIndex: 100,
          }}
        >
          <a
            href="/#services"
            style={{ color: "#fff", fontSize: "16px", textDecoration: "none" }}
            onClick={(e) => { e.preventDefault(); handleNavClick("#services") }}
          >
            Services
          </a>
          <Link
            to="/all-works"
            style={{ color: "#fff", fontSize: "16px", textDecoration: "none" }}
            onClick={() => setMobileMenuOpen(false)}
          >
            Work
          </Link>
          <a
            href="/#pricing"
            style={{ color: "#fff", fontSize: "16px", textDecoration: "none" }}
            onClick={(e) => { e.preventDefault(); handleNavClick("#pricing") }}
          >
            Pricing
          </a>
          <Link
            to="/contact"
            style={{ color: "#fff", fontSize: "16px", textDecoration: "none" }}
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/contact"
            style={{
              display: "inline-block",
              textAlign: "center",
              backgroundColor: "rgb(207, 103, 42)",
              color: "#fff",
              padding: "12px 20px",
              borderRadius: "100px",
              fontWeight: 500,
              textDecoration: "none",
            }}
            onClick={() => setMobileMenuOpen(false)}
          >
            Start a Project ↗
          </Link>
        </div>
      )}
    </nav>
  )
}
