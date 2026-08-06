import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const SectionHeading = ({ title, subtitle, align = 'left' }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const words = title.split(' ')

  return (
    <div ref={ref} className={`mb-8 sm:mb-10 md:mb-12 lg:mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-[10px] sm:text-[11px] font-[family-name:var(--font-heading)] text-[var(--color-text-muted)] tracking-[0.3em] uppercase mb-4"
        >
          — {subtitle}
        </motion.p>
      )}
      <div className="overflow-hidden pb-1">
        <h2 className="text-[clamp(2rem,8vw,7rem)] font-[family-name:var(--font-heading)] font-bold uppercase leading-[0.95] tracking-tight text-white">
          {words.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden">
              <motion.span
                className="inline-block"
                initial={{ y: '110%' }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                {word}
              </motion.span>
            </span>
          )).reduce((prev, curr, i) => i === 0 ? [curr] : [...prev, <span key={`space-${i}`} className="inline-block w-[0.25em]" />, curr], [])}
        </h2>
      </div>
    </div>
  )
}

export default SectionHeading
