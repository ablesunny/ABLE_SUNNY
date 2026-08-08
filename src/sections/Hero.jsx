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
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-[#0A0A0A] pt-4 md:pt-10"
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
        
        {/* Foreground Content */}
        <div className="relative z-20 w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-8 items-center h-full pt-10 lg:pt-0">
          
          {/* Left Col: Info */}
          <div className="space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-[clamp(4rem,10vw,8rem)] font-[family-name:var(--font-heading)] font-black uppercase leading-[0.9] tracking-tighter text-white whitespace-nowrap mb-2">
                <SplitText text="ABLE" delay={1.8} /> <br />
                <span className="text-transparent" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.5)' }}>
                  <SplitText text="SUNNY" delay={2.0} />
                </span>
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl font-[family-name:var(--font-heading)] font-light text-[var(--color-text-muted)] tracking-widest uppercase mb-6 mt-4">
                BCA Student & Web Developer
              </h2>
              <p className="text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed max-w-md">
                I design and build highly performant, visually striking digital solutions. Leveraging modern AI-assisted workflows to create next-generation web applications.
              </p>
            </motion.div>

            {/* Magnetic Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-6"
            >
              <a 
                href="/ABLE SUNNY.pdf" download="Able_Sunny_Resume.pdf"
                className="btn-primary relative overflow-hidden group"
                onMouseEnter={onCursorEnter}
                onMouseLeave={onCursorLeave}
              >
                <span className="relative z-10">Download Resume</span>
                <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-0" />
                <span className="relative z-10 mix-blend-difference opacity-0 group-hover:opacity-100 transition-opacity duration-500">Download Resume</span>
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
          <div className="relative flex justify-center lg:justify-end items-end h-full perspective-[1000px]">
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
              transition={{ duration: 1.5, delay: 2.0, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[280px] sm:max-w-[350px] lg:max-w-[480px] mt-8 lg:mt-0 lg:origin-bottom lg:-translate-y-4 mx-auto lg:mx-0"
            >
              {/* Free-floating Main Photo */}
              <div 
                className="relative w-full h-auto overflow-visible group rounded-xl"
                style={{
                  WebkitMaskImage: 'radial-gradient(circle at center, black 50%, transparent 100%)',
                  maskImage: 'radial-gradient(circle at center, black 50%, transparent 100%)'
                }}
              >
                <img
                  src="/hero-character.jpg"
                  alt="Tech Character"
                  className="w-full h-auto object-contain object-bottom transition-transform duration-700 ease-out group-hover:scale-[1.03]"
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
        transition={{ delay: 3.1, duration: 1 }}
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
