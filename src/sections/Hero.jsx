import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { FiArrowUpRight, FiDownload } from 'react-icons/fi'
import { BsStars } from 'react-icons/bs'

const Hero = () => {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  // Parallax for the person image
  const yImage = useTransform(scrollYProgress, [0, 1], [0, 150])

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-[100svh] w-full bg-[#121214] overflow-hidden pt-28 sm:pt-32 pb-16 flex items-center"
      role="banner"
    >
      {/* Background radial gradient to give depth */}
      <div className="absolute top-0 right-0 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none translate-x-1/4 -translate-y-1/4" />
      
      {/* Decorative thin circle arc behind the person (like the reference) */}
      <div className="absolute top-[10%] right-[-5%] w-[60vh] h-[60vh] rounded-full border border-white/5 pointer-events-none" />

      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 md:px-16 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center h-full">
        
        {/* LEFT COLUMN: Typography & Buttons */}
        <div className="md:col-span-7 lg:col-span-8 flex flex-col justify-center relative z-20">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-[9px] sm:text-[10px] md:text-xs font-[family-name:var(--font-heading)] uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-4 md:mb-6">
              Digital Experiences That Inspire
            </p>
          </motion.div>

          {/* Huge overlapping title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col relative"
          >
            <h1 className="text-[clamp(4.5rem,12vw,11rem)] font-[family-name:var(--font-heading)] font-bold uppercase leading-[0.85] tracking-tighter text-white">
              ABLE
            </h1>
            <h1 className="text-[clamp(4.5rem,12vw,11rem)] font-[family-name:var(--font-heading)] font-bold uppercase leading-[0.85] tracking-tighter text-white -mt-2 sm:-mt-4">
              SUNNY
            </h1>
          </motion.div>

          {/* Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 md:mt-10 max-w-[420px]"
          >
            <p className="text-sm md:text-base leading-relaxed text-[var(--color-text-secondary)]">
              I develop elegant, high-performing digital experiences that merge strategy, aesthetics, and AI technology.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center gap-4 sm:gap-6 mt-8 md:mt-10"
          >
            <a 
              href="#projects"
              className="group flex items-center gap-2 bg-white text-black px-6 py-3 md:px-7 md:py-3.5 rounded-sm text-[10px] md:text-xs font-bold uppercase tracking-wider hover:bg-white/90 transition-colors"
            >
              View My Work
              <FiArrowUpRight className="text-sm md:text-base group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a 
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-[var(--color-text-secondary)] px-2 py-3 rounded-sm text-[10px] md:text-xs font-bold uppercase tracking-wider hover:text-white transition-colors"
            >
              Download Resume
              <FiDownload className="text-sm md:text-base group-hover:translate-y-0.5 transition-transform" />
            </a>
          </motion.div>

        </div>

        {/* RIGHT COLUMN: The Image & Floating Badges */}
        <div className="md:col-span-5 lg:col-span-4 relative h-[50vh] md:h-[80vh] w-full flex justify-end items-end md:absolute md:right-0 md:bottom-0 md:w-[45vw] lg:w-[40vw] max-w-[700px] pointer-events-none z-10">
          
          <motion.div
            style={{ y: yImage }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full relative"
          >
            <Spline 
              scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
              className="w-full h-full object-contain"
            />
          </motion.div>

          {/* Floating 'Available for Freelance' badge */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="absolute right-0 bottom-[15%] md:bottom-[25%] text-right pointer-events-auto"
          >
            <div className="flex flex-col items-end gap-1">
              <BsStars className="text-white/40 text-lg mb-1" />
              <p className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                Available For
              </p>
              <h3 className="text-sm md:text-base font-bold uppercase tracking-wider text-white">
                Freelance
              </h3>
              <p className="text-[8px] md:text-[9px] flex items-center gap-1 uppercase tracking-[0.2em] text-[var(--color-text-muted)] mt-0.5">
                Projects <FiArrowUpRight />
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}

export default Hero
