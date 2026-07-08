import { useEffect, useRef } from 'react'

const STAR_COLORS = ['#dfe7ff', '#dfe7ff', '#9bb0ff', '#ffe9c4']

function Starfield() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const mouse = { x: 0.5, y: 0.5 }
    let stars = []
    let meteors = []
    let frame

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      stars = Array.from({ length: 220 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.7 + 0.3,
        depth: Math.random() * 0.9 + 0.1,
        phase: Math.random() * Math.PI * 2,
        color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
      }))
    }

    function spawnMeteor() {
      meteors.push({
        x: canvas.width * (0.2 + Math.random() * 0.8),
        y: -20,
        vx: -(4 + Math.random() * 3),
        vy: 4 + Math.random() * 3,
        life: 1,
      })
    }

    function draw(time) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const scroll = window.scrollY

      for (const star of stars) {
        const twinkle = 0.5 + 0.5 * Math.sin(time / 900 + star.phase)
        const px = star.x + (0.5 - mouse.x) * star.depth * 30
        let py = (star.y - scroll * star.depth * 0.08) % canvas.height
        if (py < 0) py += canvas.height
        py += (0.5 - mouse.y) * star.depth * 16
        ctx.globalAlpha = 0.2 + twinkle * 0.8
        ctx.fillStyle = star.color
        ctx.beginPath()
        ctx.arc(px, py, star.size, 0, Math.PI * 2)
        ctx.fill()
      }

      for (const m of meteors) {
        m.x += m.vx
        m.y += m.vy
        m.life -= 0.012
        const tail = ctx.createLinearGradient(m.x, m.y, m.x - m.vx * 12, m.y - m.vy * 12)
        tail.addColorStop(0, `rgba(223, 231, 255, ${Math.max(m.life, 0)})`)
        tail.addColorStop(1, 'rgba(223, 231, 255, 0)')
        ctx.globalAlpha = 1
        ctx.strokeStyle = tail
        ctx.lineWidth = 1.6
        ctx.beginPath()
        ctx.moveTo(m.x, m.y)
        ctx.lineTo(m.x - m.vx * 12, m.y - m.vy * 12)
        ctx.stroke()
      }
      meteors = meteors.filter((m) => m.life > 0 && m.y < canvas.height + 40)

      if (Math.random() < 0.004) spawnMeteor()

      if (!reduceMotion) frame = requestAnimationFrame(draw)
    }

    function onMouseMove(e) {
      mouse.x = e.clientX / window.innerWidth
      mouse.y = e.clientY / window.innerHeight
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMouseMove)
    draw(0)

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(frame)
    }
  }, [])

  return <canvas ref={canvasRef} className="starfield" aria-hidden="true" />
}

export default Starfield
