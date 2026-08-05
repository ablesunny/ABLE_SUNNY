import { motion } from 'framer-motion'

const LoadingScreen = () => {
  return (
    <motion.div
      className="loading-screen"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      role="status"
      aria-label="Loading portfolio"
    >
      <div className="relative overflow-hidden">
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="overflow-hidden"
        >
          <h1 className="text-[clamp(3.5rem,15vw,12rem)] font-[family-name:var(--font-heading)] font-bold uppercase leading-none tracking-tight text-white">
            ABLE
          </h1>
        </motion.div>
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="overflow-hidden"
        >
          <h1 className="text-[clamp(3.5rem,15vw,12rem)] font-[family-name:var(--font-heading)] font-bold uppercase leading-none tracking-tight text-white/20">
            SUNNY
          </h1>
        </motion.div>
      </div>
      <div className="loading-bar mt-8 sm:mt-10">
        <motion.div
          className="loading-bar-fill"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 2.2, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
        />
      </div>
      <motion.p
        className="text-[var(--color-text-muted)] text-[11px] tracking-[0.4em] uppercase mt-5 sm:mt-6 font-[family-name:var(--font-heading)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        aria-hidden="true"
      >
        Portfolio
      </motion.p>
    </motion.div>
  )
}

export default LoadingScreen
