import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="relative pt-12 sm:pt-16 md:pt-20 pb-6 sm:pb-8 border-t border-white/[0.06] overflow-hidden" role="contentinfo">
      <div className="overflow-hidden mb-10 sm:mb-12 md:mb-16" aria-hidden="true">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="text-[clamp(3rem,12vw,10rem)] font-[family-name:var(--font-heading)] font-bold uppercase tracking-tighter text-white/[0.06] mx-4 sm:mx-6 md:mx-8 shrink-0">
              Let's Connect •
            </span>
          ))}
        </div>
      </div>
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="text-center sm:text-left">
            <span className="text-sm font-[family-name:var(--font-heading)] font-semibold uppercase tracking-[0.15em] text-white">Able Sunny</span>
            <p className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-[0.2em] mt-1">BCA Student & Web Developer</p>
          </div>
          <div className="flex items-center gap-5 sm:gap-6">
            {[
              { icon: FaGithub, href: 'https://github.com/ablesunny', label: 'GitHub' },
              { icon: FaLinkedin, href: 'https://linkedin.com/in/ablesunny', label: 'LinkedIn' },
              { icon: FaEnvelope, href: 'mailto:ablesunnyofficial@gmail.com', label: 'Email' },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-[var(--color-text-muted)] hover:text-white transition-colors text-sm"
                aria-label={social.label}
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
          <p className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-wider flex items-center gap-1.5">
            © 2026 Able Sunny. Made with <FaHeart className="text-[8px] text-white/30" aria-label="love" />
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
