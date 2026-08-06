import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { services } from '../data'
import { FaArrowRight } from 'react-icons/fa'

const Services = () => {
  return (
    <section className="section-padding relative">
      <div className="container">
        <SectionHeading title="What I Do" subtitle="Services" />
        <div className="max-w-4xl space-y-0">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
              className="grid grid-cols-[40px_1fr] sm:grid-cols-[60px_1fr] md:grid-cols-[80px_1fr] gap-4 sm:gap-6 md:gap-10 py-8 sm:py-10 md:py-12 relative group cursor-default"
            >
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                style={{ originX: 0 }}
                className="absolute bottom-0 inset-x-0 h-[1px] bg-white/[0.06]"
              />
              <div>
                <span className="text-3xl sm:text-4xl md:text-5xl font-[family-name:var(--font-heading)] font-bold text-white/10 group-hover:text-white/25 transition-colors duration-500">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start sm:items-center justify-between gap-4">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-[family-name:var(--font-heading)] font-bold uppercase tracking-wider text-white">{service.title}</h3>
                  <FaArrowRight className="text-[10px] text-[var(--color-text-muted)] group-hover:text-white group-hover:translate-x-1.5 transition-all duration-300 shrink-0 mt-1 sm:mt-0" />
                </div>
                <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">{service.description}</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1 sm:pt-2">
                  {service.features.map((f, j) => (
                    <span key={j} className="text-[8px] sm:text-[9px] font-[family-name:var(--font-heading)] uppercase tracking-wider px-2 sm:px-2.5 py-0.5 sm:py-1 border border-white/[0.06] text-[var(--color-text-muted)]">{f}</span>
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

export default Services
