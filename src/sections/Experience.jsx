import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { milestones, education } from '../data'

const Experience = () => {
  return (
    <section id="journey" className="section-padding relative">
      <div className="container">
        <SectionHeading title="Journey" subtitle="My Path" />

        {/* Education Cards */}
        <div className="mb-16 md:mb-24">
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-[family-name:var(--font-heading)] uppercase tracking-[0.3em] text-[var(--color-text-muted)] mb-8"
          >
            Education
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-6">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                className="border border-white/[0.06] p-6 sm:p-8 hover:border-white/15 transition-all duration-500 group"
              >
                <span className="text-[10px] font-[family-name:var(--font-heading)] uppercase tracking-[0.3em] text-[var(--color-text-muted)]">{edu.period}</span>
                <h4 className="text-base sm:text-lg font-[family-name:var(--font-heading)] font-bold uppercase tracking-wider text-white mt-3 leading-tight">{edu.degree}</h4>
                {edu.department && (
                  <p className="text-[10px] font-[family-name:var(--font-heading)] uppercase tracking-[0.15em] text-white/50 mt-1">{edu.department}</p>
                )}
                <p className="text-xs text-[var(--color-text-secondary)] mt-2 leading-relaxed">{edu.institution}</p>
                {edu.university && (
                  <p className="text-[10px] text-[var(--color-text-muted)] mt-1">{edu.university}</p>
                )}
                {edu.score && (
                  <div className="mt-4 flex items-center gap-2">
                    <span className="text-2xl font-[family-name:var(--font-heading)] font-bold text-white group-hover:text-white/90">{edu.score}</span>
                  </div>
                )}
                {edu.status && (
                  <div className="mt-4">
                    <span className="text-[9px] font-[family-name:var(--font-heading)] uppercase tracking-wider px-2.5 py-1 border border-white/20 text-white/60">
                      {edu.status}
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline & Photo Section */}
        <div className="grid md:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Column: Timeline */}
          <div className="md:col-span-7 lg:col-span-8">
            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[10px] font-[family-name:var(--font-heading)] uppercase tracking-[0.3em] text-[var(--color-text-muted)] mb-8"
            >
              Timeline
            </motion.h3>
            
            <div className="relative">
              {/* Vertical line */}
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                style={{ originY: 0 }}
                className="absolute left-[15px] md:left-[19px] top-0 bottom-0 w-[1px] bg-white/[0.06]"
              />

              {milestones.map((milestone, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.06 }}
                  className="grid grid-cols-[30px_1fr] md:grid-cols-[40px_1fr] gap-4 sm:gap-6 md:gap-8 py-6 sm:py-8 group"
                >
                  {/* Timeline dot */}
                  <div className="flex justify-center pt-1.5">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 200, damping: 15, delay: i * 0.08 }}
                      className="w-3 h-3 md:w-4 md:h-4 rounded-full border-2 border-white/20 group-hover:border-white/60 transition-colors duration-500 bg-[#0A0A0A] relative z-10"
                    />
                  </div>

                  <div className="space-y-3">
                    <div className="flex flex-wrap items-baseline gap-3">
                      <span className="text-lg sm:text-xl font-[family-name:var(--font-heading)] font-bold text-white/25 group-hover:text-white/60 transition-colors duration-500">
                        {milestone.period}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-[family-name:var(--font-heading)] font-bold uppercase tracking-wider text-white leading-tight">{milestone.title}</h3>
                    <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">{milestone.description}</p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                      {milestone.highlights.map((h, j) => (
                        <span key={j} className="text-[8px] sm:text-[9px] font-[family-name:var(--font-heading)] uppercase tracking-wider px-2 sm:px-2.5 py-0.5 sm:py-1 border border-white/[0.06] text-[var(--color-text-muted)] hover:border-white/20 hover:text-white/60 transition-all duration-300">{h}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: User Photo (Sticky) */}
          <div className="md:col-span-5 lg:col-span-4 relative mt-12 md:mt-0">
            <motion.div
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="sticky top-32 w-full aspect-[3/4] bg-white/[0.02] border border-white/5 overflow-hidden flex items-end justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent z-10 pointer-events-none" />
              <img 
                src="/hero-cutout.png" 
                alt="Able Sunny" 
                className="w-full h-auto object-cover object-bottom opacity-80 mix-blend-lighten"
              />
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Experience
