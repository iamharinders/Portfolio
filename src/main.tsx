import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"
import Home from "./Home"
import AllWorks from "./AllWorks"
import HireMe from "./HireMe"
import Blueprint from "./Blueprint"
import "./globals.css"

// Enforce manual scroll restoration at the module evaluation level
if (typeof window !== "undefined") {
  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual"
  }
  window.scrollTo(0, 0)
}

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace("#", "")
      const target = document.getElementById(targetId)
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" })
        return
      }
    }
    // When route changes or reloads without hash, scroll instantly to top
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/work" element={<AllWorks />} />
        <Route path="/all-works" element={<AllWorks />} />
        <Route path="/hire-me" element={<HireMe />} />
        <Route path="/contact" element={<HireMe />} />
        <Route path="/blueprint" element={<Blueprint />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
