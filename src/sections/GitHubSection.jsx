import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { FaGithub } from 'react-icons/fa'

const GitHubSection = () => {
  return (
    <section className="section-padding relative">
      <div className="container">
        <SectionHeading title="GitHub" subtitle="Open Source" />
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              I use GitHub to manage all my projects, track my progress, and learn version control best practices. Most of my work is publicly available — feel free to explore the code.
            </p>
            <a
              href="https://github.com/ablesunny"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary btn-sm flex items-center gap-2 w-fit"
              aria-label="View GitHub profile"
            >
              <FaGithub /> View GitHub Profile
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default GitHubSection
