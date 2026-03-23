import { useEffect, useRef } from 'react'

export default function Particles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let W = canvas.width  = window.innerWidth
    let H = canvas.height = window.innerHeight
    let animId

    const BLUE = '79,142,247'
    const COUNT = Math.min(60, Math.floor(W / 20))

    const particles = Array.from({ length: COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.5 + .3,
      vx: (Math.random() - .5) * .4,
      vy: (Math.random() - .5) * .4,
      o: Math.random() * .5 + .1,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, W, H)

      // Lignes entre particules proches
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(${BLUE},${.12 * (1 - dist / 120)})`
            ctx.lineWidth = .6
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      // Points
      particles.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${BLUE},${p.o})`
        ctx.fill()
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > W) p.vx *= -1
        if (p.y < 0 || p.y > H) p.vy *= -1
      })

      animId = requestAnimationFrame(draw)
    }

    draw()

    const resize = () => {
      W = canvas.width  = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', resize)

    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])

  return <canvas ref={canvasRef} id="particles-canvas" />
}
