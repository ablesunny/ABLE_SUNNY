import { useEffect, useRef, useCallback } from 'react'

const isTouchDevice = () =>
  typeof window !== 'undefined' &&
  (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window)

const CustomCursor = ({ variant }) => {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const mousePos = useRef({ x: -100, y: -100 })
  const dotPos = useRef({ x: -100, y: -100 })
  const ringPos = useRef({ x: -100, y: -100 })
  const visible = useRef(false)
  const rafId = useRef(null)
  const currentVariant = useRef(variant)

  currentVariant.current = variant

  const lerp = (start, end, factor) => start + (end - start) * factor

  const animate = useCallback(() => {
    // Dot follows tightly
    dotPos.current.x = lerp(dotPos.current.x, mousePos.current.x, 0.35)
    dotPos.current.y = lerp(dotPos.current.y, mousePos.current.y, 0.35)

    // Ring follows with more lag
    ringPos.current.x = lerp(ringPos.current.x, mousePos.current.x, 0.15)
    ringPos.current.y = lerp(ringPos.current.y, mousePos.current.y, 0.15)

    const isHover = currentVariant.current === 'hover'

    if (dotRef.current) {
      const dotScale = isHover ? 3 : 1
      dotRef.current.style.transform = `translate3d(${dotPos.current.x - 4}px, ${dotPos.current.y - 4}px, 0) scale(${dotScale})`
      dotRef.current.style.opacity = visible.current ? '1' : '0'
    }

    if (ringRef.current) {
      const ringScale = isHover ? 1.5 : 1
      ringRef.current.style.transform = `translate3d(${ringPos.current.x - 20}px, ${ringPos.current.y - 20}px, 0) scale(${ringScale})`
      ringRef.current.style.opacity = visible.current ? '1' : '0'
    }

    rafId.current = requestAnimationFrame(animate)
  }, [])

  useEffect(() => {
    if (isTouchDevice()) return

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
      if (!visible.current) visible.current = true
    }

    const handleMouseLeave = () => { visible.current = false }
    const handleMouseEnter = () => { visible.current = true }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    rafId.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
      if (rafId.current) cancelAnimationFrame(rafId.current)
    }
  }, [animate])

  if (typeof window !== 'undefined' && isTouchDevice()) return null

  return (
    <>
      <div ref={dotRef} className="custom-cursor" style={{ opacity: 0 }} />
      <div ref={ringRef} className="custom-cursor-ring" style={{ opacity: 0, transition: 'width 0.3s, height 0.3s' }} />
    </>
  )
}

export default CustomCursor
