import { useEffect, useRef } from 'react'

function Starfield() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let stars = []
    let frame

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      stars = Array.from({ length: 160 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.6 + 0.4,
        depth: Math.random() * 0.06 + 0.02,
        phase: Math.random() * Math.PI * 2,
      }))
    }

    function draw(time) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const scroll = window.scrollY
      ctx.fillStyle = '#dfe7ff'
      for (const star of stars) {
        const twinkle = 0.5 + 0.5 * Math.sin(time / 900 + star.phase)
        let y = (star.y - scroll * star.depth) % canvas.height
        if (y < 0) y += canvas.height
        ctx.globalAlpha = 0.25 + twinkle * 0.75
        ctx.beginPath()
        ctx.arc(star.x, y, star.size, 0, Math.PI * 2)
        ctx.fill()
      }
      frame = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    frame = requestAnimationFrame(draw)

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(frame)
    }
  }, [])

  return <canvas ref={canvasRef} className="starfield" aria-hidden="true" />
}

export default Starfield
