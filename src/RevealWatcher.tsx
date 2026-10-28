"use client"

import { useEffect } from "react"

/**
 * Robust scroll-reveal engine that ensures animations trigger smoothly,
 * handles route transitions, prevents elements from staying frozen at opacity 0,
 * and respects reduced motion.
 */
export default function RevealWatcher() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const revealElement = (el: Element) => {
      if (!el.hasAttribute("data-in")) {
        el.setAttribute("data-in", "")
      }
    }

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      document.querySelectorAll("[data-reveal]").forEach(revealElement)
      return
    }

    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            revealElement(entry.target)
            observer.unobserve(entry.target)
          }
        }
      },
      { rootMargin: "450px 0px 450px 0px", threshold: 0 }
    )

    const observeAll = () => {
      const els = document.querySelectorAll("[data-reveal]:not([data-in]), [class*='rv-']:not([data-in])")
      els.forEach(el => {
        observer.observe(el)
      })
    }

    observeAll()

    // Mutation observer for dynamically rendered components & route switches
    const mutObs = new MutationObserver(() => {
      observeAll()
    })

    mutObs.observe(document.body, { childList: true, subtree: true })

    // Progressive safety fallbacks: ensure content is never trapped at opacity 0
    const fallbackTimer1 = setTimeout(() => {
      observeAll()
    }, 300)

    const fallbackTimer2 = setTimeout(() => {
      document.querySelectorAll("[data-reveal]:not([data-in]), [class*='rv-']:not([data-in])").forEach(revealElement)
    }, 900)

    return () => {
      observer.disconnect()
      mutObs.disconnect()
      clearTimeout(fallbackTimer1)
      clearTimeout(fallbackTimer2)
    }
  }, [])

  return null
}
