import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaTimes, FaArrowRight } from 'react-icons/fa'
import SectionHeading from '../components/SectionHeading'
import { projects } from '../data'

const ProjectModal = ({ project, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
    className="modal-overlay"
    onClick={onClose}
    role="dialog"
    aria-modal="true"
  >
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 40, scale: 0.98 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      onClick={(e) => e.stopPropagation()}
      className="max-w-3xl w-full bg-[#111] border border-white/[0.06] overflow-y-auto max-h-[85svh] overscroll-contain"
    >
      <div className="relative">
        <img src={project.image} alt={project.title} className="w-full aspect-[16/9] object-cover" loading="lazy" />
        <button onClick={onClose} className="absolute top-4 right-4 w-10 h-10 bg-black/60 flex items-center justify-center text-white hover:bg-black/80 transition-colors cursor-pointer" aria-label="Close">
          <FaTimes />
        </button>
      </div>
      <div className="p-6 sm:p-8 space-y-5">
        <div>
          <span className="text-[9px] font-[family-name:var(--font-heading)] uppercase tracking-[0.3em] text-[var(--color-text-muted)]">{project.category}</span>
          <h3 className="text-2xl sm:text-3xl font-[family-name:var(--font-heading)] font-bold uppercase mt-1">{project.title}</h3>
          {project.subtitle && <p className="text-xs font-[family-name:var(--font-heading)] uppercase tracking-[0.15em] text-[var(--color-text-muted)] mt-1">{project.subtitle}</p>}
        </div>
        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="text-[10px] font-[family-name:var(--font-heading)] uppercase tracking-wider px-3 py-1.5 border border-white/10 text-[var(--color-text-muted)]">{t}</span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 pt-2">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-secondary btn-sm flex items-center gap-2">
            <FaGithub /> Source Code
          </a>
          {project.live === '#' ? (
            <button disabled className="btn-primary btn-sm opacity-30 cursor-not-allowed" onClick={(e) => e.preventDefault()} aria-label="Live Demo Unavailable">
              <span className="flex items-center gap-2"><FaExternalLinkAlt /> Live Demo</span>
            </button>
          ) : (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-primary btn-sm">
              <span className="flex items-center gap-2"><FaExternalLinkAlt /> Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  </motion.div>
)

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    if (selectedProject) {
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = originalOverflow
      }
    }
  }, [selectedProject])

  return (
    <section id="projects" className="section-padding relative">
      <div className="container">
        <SectionHeading title="Projects" subtitle="Selected Work" />

        <div className="space-y-20 md:space-y-32">
          {projects.map((project, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer text-left w-full block appearance-none bg-transparent border-none p-0 m-0"
              onClick={() => setSelectedProject(project)}
              aria-label={`View ${project.title} details`}
            >
              {/* Alternating layout */}
              <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${i % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}>
                
                {/* Image */}
                <div className={`overflow-hidden relative ${i % 2 === 1 ? 'lg:[direction:ltr]' : ''}`}>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.6 }}
                    className="aspect-[16/10] overflow-hidden"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </motion.div>
                  {/* Project number overlay */}
                  <span className="absolute top-4 left-4 text-[10px] font-[family-name:var(--font-heading)] uppercase tracking-[0.3em] text-white/40 bg-black/40 backdrop-blur-sm px-3 py-1.5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Content */}
                <div className={`space-y-5 ${i % 2 === 1 ? 'lg:[direction:ltr]' : ''}`}>
                  <div>
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="text-[10px] font-[family-name:var(--font-heading)] uppercase tracking-[0.3em] text-[var(--color-text-muted)] block mb-3"
                    >
                      {project.category}
                    </motion.span>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-heading)] font-bold uppercase leading-[0.95] tracking-tight group-hover:text-white transition-colors duration-500">
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <p className="text-xs font-[family-name:var(--font-heading)] uppercase tracking-[0.15em] text-[var(--color-text-muted)] mt-2">
                        {project.subtitle}
                      </p>
                    )}
                  </div>

                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-lg">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[9px] font-[family-name:var(--font-heading)] uppercase tracking-wider px-2.5 py-1 border border-white/[0.08] text-[var(--color-text-muted)] group-hover:border-white/20 transition-colors duration-300">
                        {t}
                      </span>
                    ))}
                  </div>

                  {project.role && (
                    <p className="text-[9px] font-[family-name:var(--font-heading)] uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                      Role: {project.role}
                    </p>
                  )}

                  <div className="pt-2">
                    <span className="text-[11px] font-[family-name:var(--font-heading)] uppercase tracking-[0.2em] text-[var(--color-text-muted)] group-hover:text-white transition-colors duration-300 flex items-center gap-2">
                      View Details <FaArrowRight className="text-[9px] group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom separator */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                style={{ originX: i % 2 === 0 ? 0 : 1 }}
                className="h-[1px] bg-white/[0.06] mt-12 md:mt-16"
              />
            </motion.button>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedProject && (<ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />)}
      </AnimatePresence>
    </section>
  )
}

export default Projects
