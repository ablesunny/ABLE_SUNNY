import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { personalInfo } from '../data'

const tocItems = [
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
]

const About = () => {
  const introRef = useRef(null)
  const isInView = useInView(introRef, { once: true, margin: '-100px' })

  const { scrollYProgress } = useScroll({
    target: introRef,
    offset: ["start end", "end start"]
  })
  const imageY = useTransform(scrollYProgress, [0, 1], [-40, 40])
  const imageScale = useTransform(scrollYProgress, [0, 1], [0.95, 1.05])

  const handleClick = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="about" className="section-padding relative">
      <div className="container">
        <SectionHeading title="About" subtitle="Who I Am" />

        {/* Quick nav pills */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {tocItems.map((item, i) => (
            <motion.button
              key={item.label}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              onClick={() => handleClick(item.href)}
              className="pill-button"
            >
              {item.label}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ originX: 0 }}
          className="separator mb-16"
        />

        <div ref={introRef} className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Photo with parallax */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[3/4] max-h-[500px] overflow-hidden border border-white/[0.05]">
              <motion.img
                src="/about-photo.jpg"
                alt="Able Sunny"
                className="w-full h-full object-cover object-center"
                style={{
                  y: imageY, 
                  scale: imageScale,
                  filter: 'grayscale(0.6) contrast(1.05) brightness(0.95)',
                }}
              />
            </div>
          </motion.div>

          {/* Text content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-2xl sm:text-3xl font-[family-name:var(--font-heading)] font-bold uppercase leading-tight">
                Enthusiastic BCA Student <br />
                <span className="text-white/40">& Web Developer</span>
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                Enthusiastic Bachelor of Computer Applications (BCA) student with a strong interest in software development, artificial intelligence, and modern web technologies. Experienced in developing websites and digital solutions using AI-assisted development tools. Skilled in problem-solving, adapting to new technologies, and creating user-focused applications.
              </p>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                Passionate about building innovative software solutions and seeking opportunities to apply technical knowledge in real-world projects while continuously expanding expertise in the IT industry.
              </p>
            </motion.div>

            {/* Personal details grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="grid grid-cols-2 gap-4"
            >
              <div>
                <span className="text-[9px] font-[family-name:var(--font-heading)] uppercase tracking-[0.25em] text-[var(--color-text-muted)] block mb-1">Location</span>
                <span className="text-sm text-white">{personalInfo.location}</span>
              </div>
              <div>
                <span className="text-[9px] font-[family-name:var(--font-heading)] uppercase tracking-[0.25em] text-[var(--color-text-muted)] block mb-1">Education</span>
                <span className="text-sm text-white">BCA (2023–2026)</span>
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <span className="text-[9px] font-[family-name:var(--font-heading)] uppercase tracking-[0.25em] text-[var(--color-text-muted)] block mb-3">Languages</span>
              <div className="flex flex-wrap gap-2">
                {personalInfo.languages.map((lang) => (
                  <span key={lang} className="text-[9px] font-[family-name:var(--font-heading)] uppercase tracking-wider px-2.5 py-1 border border-white/[0.08] text-[var(--color-text-secondary)]">{lang}</span>
                ))}
              </div>
            </motion.div>

            {/* Interests & Hobbies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              <div>
                <span className="text-[9px] font-[family-name:var(--font-heading)] uppercase tracking-[0.25em] text-[var(--color-text-muted)] block mb-3">Interests</span>
                <div className="flex flex-wrap gap-1.5">
                  {personalInfo.interests.map((item) => (
                    <span key={item} className="text-[8px] font-[family-name:var(--font-heading)] uppercase tracking-wider px-2 py-0.5 border border-white/[0.06] text-[var(--color-text-muted)]">{item}</span>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-[9px] font-[family-name:var(--font-heading)] uppercase tracking-[0.25em] text-[var(--color-text-muted)] block mb-3">Beyond Code</span>
                <div className="flex flex-wrap gap-1.5">
                  {personalInfo.hobbies.map((item) => (
                    <span key={item} className="text-[8px] font-[family-name:var(--font-heading)] uppercase tracking-wider px-2 py-0.5 border border-white/[0.06] text-[var(--color-text-muted)]">{item}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Core Strengths */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.65 }}
            >
              <span className="text-[9px] font-[family-name:var(--font-heading)] uppercase tracking-[0.25em] text-[var(--color-text-muted)] block mb-3">Core Strengths</span>
              <div className="flex flex-wrap gap-2">
                {personalInfo.strengths.map((s) => (
                  <span key={s} className="text-[9px] font-[family-name:var(--font-heading)] uppercase tracking-wider px-2.5 py-1 border border-white/10 text-white/50 hover:text-white hover:border-white/30 transition-all duration-300">{s}</span>
                ))}
              </div>
            </motion.div>

            {/* View Projects CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.75 }}
            >
              <a href="#projects" className="btn-primary inline-flex" onClick={(e) => { e.preventDefault(); handleClick('#projects'); }}>
                <span>View Projects</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
