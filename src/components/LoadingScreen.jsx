import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const LoadingScreen = () => {
  const [count, setCount] = useState(0)
  const columns = 5; // Number of strips for the reveal effect

  useEffect(() => {
    let start = 0;
    const end = 100;
    const duration = 2200; // ms
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
      className="fixed inset-0 z-50 flex pointer-events-none"
      exit={{ 
        transition: { staggerChildren: 0.1, delayChildren: 0.5 }
      }}
      role="status"
      aria-label="Loading portfolio"
    >
      {/* Staggered Background Columns */}
      <div className="absolute inset-0 flex w-full h-full z-10">
        {[...Array(columns)].map((_, i) => (
          <motion.div
            key={i}
            className="flex-1 h-full bg-[#050505] origin-top border-r border-white/[0.02]"
            exit={{ 
              scaleY: 0,
              transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: i * 0.1 }
            }}
          />
        ))}
      </div>

      {/* Main Content (Disappears before strips slide up) */}
      <motion.div 
        className="absolute inset-0 z-20 flex flex-col items-center justify-center overflow-hidden"
        exit={{ opacity: 0, transition: { duration: 0.4 } }}
      >
        {/* 3D Mathematical Graph Loop */}
        <div className="absolute inset-0 flex items-center justify-center z-10 opacity-60" style={{ perspective: 1000 }}>
          {[...Array(15)].map((_, i) => {
            const size = 15 + (i * 3); // Base size in vw
            return (
              <motion.div
                key={i}
                className="absolute border-[1px] border-white rounded-full mix-blend-screen"
                style={{
                  width: `${size}vw`,
                  height: `${size}vw`,
                  minWidth: `${size * 3}px`,
                  minHeight: `${size * 3}px`,
                  opacity: 0.05 + (i * 0.015),
                }}
                animate={{
                  rotateX: [0, 360, 0],
                  rotateY: [0, 360, 0],
                  rotateZ: [0, 180, 0],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.15,
                }}
              />
            );
          })}
        </div>

        {/* Brand / Loading Text */}
        <div className="relative flex flex-col items-center justify-center mix-blend-difference z-30">
          <div className="overflow-hidden mb-2 md:mb-4">
            <motion.h1 
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
              className="text-4xl md:text-8xl font-[family-name:var(--font-heading)] font-black text-white tracking-widest text-center"
            >
              RENDERING
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1], delay: 0.4 }}
              className="text-xl md:text-5xl font-[family-name:var(--font-heading)] font-bold text-transparent bg-clip-text bg-gradient-to-r from-white/80 to-white/20 tracking-[0.3em] text-center"
            >
              CREATIVITY
            </motion.h2>
          </div>
        </div>

        {/* Counter & Progress */}
        <div className="absolute bottom-12 md:bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center w-[80%] max-w-[300px] gap-6 z-30">
          <motion.div 
            className="text-5xl md:text-7xl font-[family-name:var(--font-heading)] font-light text-white tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {count.toString().padStart(3, '0')}<span className="text-2xl md:text-3xl text-white/40 ml-1">%</span>
          </motion.div>
          <div className="w-full h-[2px] bg-white/10 relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-white"
              initial={{ width: '0%' }}
              animate={{ width: `${count}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default LoadingScreen
