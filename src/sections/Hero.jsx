import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

// Text split animation helper
const SplitText = ({ text, delay = 0 }) => {
  return (
    <span className="inline-block overflow-hidden">
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: '100%', rotate: 10, opacity: 0 }}
          animate={{ y: 0, rotate: 0, opacity: 1 }}
          transition={{
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
            delay: delay + i * 0.04
          }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  )
}

const Hero = ({ onCursorEnter, onCursorLeave }) => {
  const sectionRef = useRef(null)
  
  // Scroll Parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  
  // Mouse Parallax
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const springConfig = { damping: 25, stiffness: 100, mass: 0.5 }
  const smoothMouseX = useSpring(mouseX, springConfig)
  const smoothMouseY = useSpring(mouseY, springConfig)
  
  const photoRotateX = useTransform(smoothMouseY, [-0.5, 0.5], [10, -10])
  const photoRotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-10, 10])
  const photoX = useTransform(smoothMouseX, [-0.5, 0.5], [-30, 30])
  const photoY = useTransform(smoothMouseY, [-0.5, 0.5], [-30, 30])

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window
      // Normalize mouse position between -0.5 and 0.5
      mouseX.set(e.clientX / innerWidth - 0.5)
      mouseY.set(e.clientY / innerHeight - 0.5)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-[#0A0A0A] pt-20"
      role="banner"
    >
      {/* Animated Mesh Gradient Background */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
      >
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.08)_0%,transparent_70%)] blur-3xl animate-[pulse_6s_infinite_alternate]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.05)_0%,transparent_70%)] blur-3xl animate-[pulse_8s_infinite_alternate_reverse]" />
      </motion.div>

      <div className="container relative z-10 w-full max-w-none px-4 sm:px-8 md:px-12 flex flex-col items-center justify-center">
        
        {/* Massive Background Typography */}
        <motion.div 
          style={{ opacity: opacityText }}
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none mix-blend-difference opacity-20 z-0"
        >
          <h1 className="text-[clamp(6rem,22vw,22rem)] font-[family-name:var(--font-heading)] font-black uppercase leading-[0.8] tracking-tighter text-white whitespace-nowrap">
            <SplitText text="ABLE" delay={2.0} />
          </h1>
          <h1 className="text-[clamp(6rem,22vw,22rem)] font-[family-name:var(--font-heading)] font-black uppercase leading-[0.8] tracking-tighter text-transparent whitespace-nowrap" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.4)' }}>
            <SplitText text="SUNNY" delay={2.1} />
          </h1>
        </motion.div>

        {/* Foreground Content */}
        <div className="relative z-20 w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-8 items-center h-full pt-10 lg:pt-0">
          
          {/* Left Col: Info */}
          <div className="space-y-8 md:space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 2.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-[family-name:var(--font-heading)] font-light text-[var(--color-text-muted)] tracking-widest uppercase mb-4">
                BCA Student & <br/> Web Developer
              </h2>
              <p className="text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed max-w-md">
                I design and build highly performant, visually striking digital solutions. Leveraging modern AI-assisted workflows to create next-generation web applications.
              </p>
            </motion.div>

            {/* Magnetic Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-6"
            >
              <a 
                href="#projects" 
                className="btn-primary relative overflow-hidden group"
                onMouseEnter={onCursorEnter}
                onMouseLeave={onCursorLeave}
              >
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-0" />
                <span className="relative z-10 mix-blend-difference opacity-0 group-hover:opacity-100 transition-opacity duration-500">View Projects</span>
              </a>

              <div className="flex gap-4">
                {[
                  { icon: FaGithub, href: 'https://github.com/ablesunny' },
                  { icon: FaLinkedin, href: 'https://linkedin.com/in/ablesunny' },
                  { icon: HiMail, href: 'mailto:ablesunnyofficial@gmail.com' },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="text-[var(--color-text-muted)] hover:text-white transition-colors p-2"
                    onMouseEnter={onCursorEnter}
                    onMouseLeave={onCursorLeave}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Col: Interactive Portrait */}
          <div className="relative flex justify-center lg:justify-end perspective-[1000px]">
            <motion.div
              style={{ 
                rotateX: photoRotateX, 
                rotateY: photoRotateY,
                x: photoX,
                y: photoY,
                transformStyle: "preserve-3d"
              }}
              initial={{ opacity: 0, scale: 0.8, filter: 'blur(20px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1.5, delay: 2.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-[80vw] sm:w-[50vw] lg:w-[35vw] max-w-[500px]"
            >
              {/* Spinning Badge */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute -top-10 -right-10 md:-top-16 md:-right-16 w-24 h-24 md:w-32 md:h-32 rounded-full border border-white/10 flex items-center justify-center z-30 bg-[#0A0A0A]/50 backdrop-blur-sm"
                style={{ transform: "translateZ(50px)" }}
              >
                <svg viewBox="0 0 100 100" className="w-full h-full p-2">
                  <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                  <text className="text-[10px] font-[family-name:var(--font-heading)] uppercase tracking-[0.3em] fill-[var(--color-text-muted)]">
                    <textPath href="#circlePath">Available For Work • </textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                </div>
              </motion.div>

              {/* Main Photo Frame */}
              <div className="relative aspect-[3/4] border border-white/[0.08] p-4 bg-[#0A0A0A] overflow-hidden group">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent z-10 opacity-60" 
                />
                <img
                  src="/hero-cutout.png"
                  alt="Able Sunny"
                  className="w-full h-full object-cover object-bottom filter grayscale brightness-90 contrast-125 transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 1 }}
        className="absolute bottom-6 md:bottom-12 right-6 md:right-12 flex flex-col items-center gap-4 z-20 mix-blend-difference"
      >
        <span className="text-[8px] md:text-[10px] font-[family-name:var(--font-heading)] uppercase tracking-[0.4em] text-white/50" style={{ writingMode: 'vertical-lr' }}>Scroll</span>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
          <FaArrowDown className="text-[10px] md:text-xs text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
