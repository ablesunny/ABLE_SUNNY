import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { techStack } from '../data'

const categories = Object.keys(techStack)

const TechStack = () => {
  return (
    <section id="skills" className="section-padding relative">
      <div className="container">
        <SectionHeading title="Skills" subtitle="Technologies" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {categories.map((catKey, catIdx) => (
            <motion.div
              key={catKey}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: catIdx * 0.05 }}
            >
              <h3 className="text-[10px] font-[family-name:var(--font-heading)] uppercase tracking-[0.3em] text-[var(--color-text-muted)] mb-4 sm:mb-5">
                {catKey}
              </h3>
              <div className="relative">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  style={{ originX: 0 }}
                  className="absolute top-0 inset-x-0 h-[1px] bg-white/[0.06]"
                />
                <div className="pt-[1px]">
                  {techStack[catKey].map((tech, i) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-30px" }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.04 }}
                      className="flex items-center gap-3 py-2.5 sm:py-3 relative group cursor-default hover:pl-2 transition-all duration-300"
                    >
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        style={{ originX: 0 }}
                        className="absolute bottom-0 inset-x-0 h-[1px] bg-white/[0.04]"
                      />
                      <tech.icon className="text-base text-[var(--color-text-muted)] group-hover:text-white transition-colors duration-300 shrink-0" />
                      <span className="text-xs sm:text-sm font-[family-name:var(--font-heading)] uppercase tracking-wider text-[var(--color-text-secondary)] group-hover:text-white transition-colors duration-300">
                        {tech.name}
                      </span>
                      {tech.learning && (
                        <span className="text-[8px] font-[family-name:var(--font-heading)] uppercase tracking-wider px-1.5 py-0.5 border border-white/10 text-[var(--color-text-muted)] ml-auto shrink-0">
                          Learning
                        </span>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack
