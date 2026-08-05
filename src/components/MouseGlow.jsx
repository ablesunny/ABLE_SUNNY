import { useEffect, useRef, useCallback } from 'react'

const isTouchDevice = () =>
  typeof window !== 'undefined' &&
  (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window)

const MouseGlow = () => {
  const glowRef = useRef(null)
  const rafId = useRef(null)
  const mousePos = useRef({ x: 0, y: 0 })

  const updateGlow = useCallback(() => {
    if (glowRef.current) {
      glowRef.current.style.background = `radial-gradient(600px circle at ${mousePos.current.x}px ${mousePos.current.y}px, rgba(255, 255, 255, 0.02), transparent 40%)`
    }
    rafId.current = requestAnimationFrame(updateGlow)
  }, [])

  useEffect(() => {
    if (isTouchDevice()) return

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    rafId.current = requestAnimationFrame(updateGlow)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (rafId.current) cancelAnimationFrame(rafId.current)
    }
  }, [updateGlow])

  if (typeof window !== 'undefined' && isTouchDevice()) return null

  return (
    <div
      ref={glowRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  )
}

export default MouseGlow
