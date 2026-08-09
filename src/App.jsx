import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import LoadingScreen from './components/LoadingScreen'
import CustomCursor from './components/CustomCursor'
import BackToTop from './components/BackToTop'
import MouseGlow from './components/MouseGlow'
import Hero from './sections/Hero'
import About from './sections/About'
import TechStack from './sections/TechStack'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Services from './sections/Services'
import GitHubSection from './sections/GitHubSection'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {
  const [loading, setLoading] = useState(true)
  const [cursorVariant, setCursorVariant] = useState('default')

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2400)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (loading) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window
    if (prefersReducedMotion || isTouchDevice) return

    const lenis = new Lenis({
      duration: 1.6,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.5,
    })
    
    let rafId
    function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    
    rafId = requestAnimationFrame(raf)
    
    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [loading])

  const handleCursorEnter = useCallback(() => setCursorVariant('hover'), [])
  const handleCursorLeave = useCallback(() => setCursorVariant('default'), [])

  return (
    <>
      <CustomCursor variant={cursorVariant} />
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <MouseGlow />
            <Navbar onCursorEnter={handleCursorEnter} onCursorLeave={handleCursorLeave} />
            <main>
              <Hero onCursorEnter={handleCursorEnter} onCursorLeave={handleCursorLeave} />
              <About />
              <TechStack />
              <Projects />
              <Experience />
              <Services />
              <GitHubSection />
              <Contact />
            </main>
            <Footer />
            <BackToTop />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default App
