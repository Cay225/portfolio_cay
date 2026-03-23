import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dot  = useRef(null)
  const ring = useRef(null)

  useEffect(() => {
    const move = (e) => {
      const x = e.clientX, y = e.clientY
      if (dot.current)  { dot.current.style.left  = x + 'px'; dot.current.style.top  = y + 'px' }
      if (ring.current) { ring.current.style.left = x + 'px'; ring.current.style.top = y + 'px' }
    }
    const enter = () => ring.current?.classList.add('hover')
    const leave = () => ring.current?.classList.remove('hover')

    window.addEventListener('mousemove', move)
    document.querySelectorAll('a,button,[data-hover]').forEach(el => {
      el.addEventListener('mouseenter', enter)
      el.addEventListener('mouseleave', leave)
    })
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      <div ref={dot}  className="cursor-dot"  />
      <div ref={ring} className="cursor-ring" />
    </>
  )
}
