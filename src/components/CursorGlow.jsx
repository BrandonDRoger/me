import { useEffect, useRef } from 'react'

function CursorGlow() {
  const ref = useRef(null)

  useEffect(() => {
    function move(e) {
      ref.current.style.setProperty('--x', `${e.clientX}px`)
      ref.current.style.setProperty('--y', `${e.clientY}px`)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return <div ref={ref} className="cursor-glow" aria-hidden="true" />
}

export default CursorGlow
