import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LoadingScreen = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0;
    const end = 100;
    const duration = 2400; // ms
    const incrementTime = (duration / end);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
      exit={{ 
        opacity: 0,
        transition: { duration: 0.1, delay: 1.2 } 
      }}
      role="status"
      aria-label="Loading portfolio"
    >
      {/* Top Curtain */}
      <motion.div
        className="absolute top-0 left-0 w-full h-[50vh] bg-[#050505] origin-top border-b border-white/[0.05] z-10"
        exit={{ y: '-100%', transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } }}
      />
      {/* Bottom Curtain */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-[50vh] bg-[#050505] origin-bottom border-t border-white/[0.05] z-10"
        exit={{ y: '100%', transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } }}
      />
      
      {/* Kinetic Text Center */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden z-20 mix-blend-difference">
        <motion.div
          animate={{
            y: ['150%', '0%', '-150%'],
            scale: [0.5, 1, 0.5],
            filter: ['blur(10px)', 'blur(0px)', 'blur(10px)']
          }}
          transition={{ duration: 1.6, ease: [0.76, 0, 0.24, 1] }}
          className="absolute"
        >
          <h1 className="text-[clamp(3rem,15vw,12rem)] font-[family-name:var(--font-heading)] font-black text-white whitespace-nowrap">
            CRAFTING
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ y: '150%', scale: 0.5, filter: 'blur(10px)' }}
          animate={{
            y: ['150%', '0%', '-150%'],
            scale: [0.5, 1, 0.5],
            filter: ['blur(10px)', 'blur(0px)', 'blur(10px)']
          }}
          transition={{ duration: 1.6, ease: [0.76, 0, 0.24, 1], delay: 0.8 }}
          className="absolute"
        >
          <h1 className="text-[clamp(3rem,15vw,12rem)] font-[family-name:var(--font-heading)] font-black text-white whitespace-nowrap">
            VISUALS
          </h1>
        </motion.div>
      </div>

      {/* Counter */}
      <motion.div
        className="absolute right-6 bottom-6 md:right-12 md:bottom-12 z-30 flex items-end gap-1"
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
      >
        <span className="text-7xl md:text-[8rem] font-[family-name:var(--font-heading)] font-bold text-white leading-none tracking-tighter">
          {count}
        </span>
        <span className="text-xl md:text-3xl text-white/40 mb-2 md:mb-4 font-[family-name:var(--font-heading)]">%</span>
      </motion.div>

      {/* Progress Bar */}
      <motion.div 
        className="absolute bottom-0 left-0 h-[2px] bg-white z-40"
        initial={{ width: '0%' }}
        animate={{ width: `${count}%` }}
        exit={{ opacity: 0 }}
      />
    </motion.div>
  )
}

export default LoadingScreen
