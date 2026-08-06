import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { navLinks } from '../data'

const Navbar = ({ onCursorEnter, onCursorLeave }) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('#home')

  const { scrollYProgress } = useScroll()
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Active section detection via IntersectionObserver
  useEffect(() => {
    const sections = navLinks.map(link => document.querySelector(link.href)).filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleClick = useCallback((href) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 sm:px-6 md:px-12 lg:px-20 py-5 transition-all duration-500 ${
          scrolled ? 'border-b border-white/[0.06] bg-[#0A0A0A]/90 backdrop-blur-md py-4' : ''
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleClick('#home') }}
          onMouseEnter={onCursorEnter}
          onMouseLeave={onCursorLeave}
          className="text-sm font-[family-name:var(--font-heading)] font-semibold uppercase tracking-[0.15em] text-white hover:opacity-70 transition-opacity"
        >
          Able Sunny
        </a>
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleClick(link.href) }}
              onMouseEnter={onCursorEnter}
              onMouseLeave={onCursorLeave}
              className={`text-[11px] font-medium uppercase tracking-[0.15em] transition-colors duration-300 relative group ${
                activeSection === link.href
                  ? 'text-white'
                  : 'text-[var(--color-text-muted)] hover:text-white'
              }`}
            >
              {link.name}
              <span
                className={`absolute -bottom-1 left-0 h-[1px] bg-white transition-all duration-300 ${
                  activeSection === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </a>
          ))}
        </div>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white text-xl cursor-pointer"
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>

        {/* Scroll progress bar */}
        <motion.div
          className="scroll-progress"
          style={{ scaleX }}
        />
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0A0A0A] flex flex-col items-center justify-center gap-6"
            role="dialog"
            aria-label="Navigation menu"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleClick(link.href) }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={`text-3xl sm:text-4xl font-[family-name:var(--font-heading)] font-bold uppercase tracking-wider transition-colors ${
                  activeSection === link.href
                    ? 'text-white'
                    : 'text-white/40 hover:text-white'
                }`}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
