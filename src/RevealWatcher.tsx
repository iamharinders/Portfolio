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
      { rootMargin: "150px 0px 150px 0px", threshold: 0.05 }
    )

    const observeAll = () => {
      const els = document.querySelectorAll("[data-reveal]:not([data-in]), [class*='rv-']:not([data-in])")
      els.forEach(el => {
        // If element is already in initial viewport on mount, reveal it
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight + 100 && rect.bottom > -100) {
          revealElement(el)
        } else {
          observer.observe(el)
        }
      })
    }

    observeAll()

    // Mutation observer for dynamically rendered components & route switches
    const mutObs = new MutationObserver(() => {
      observeAll()
    })

    mutObs.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutObs.disconnect()
    }
  }, [])

  return null
}
