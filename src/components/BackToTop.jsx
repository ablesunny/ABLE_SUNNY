import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiArrowUp } from 'react-icons/hi'

const BackToTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-[max(2rem,env(safe-area-inset-bottom))] right-8 z-50 w-12 h-12 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer" aria-label="Back to top">
          <HiArrowUp className="text-lg" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default BackToTop
