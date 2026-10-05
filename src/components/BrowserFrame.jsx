export default function BrowserFrame({ src, alt, className = '', imgClassName = '', eager = false }) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-line-strong bg-surface-2 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
      </div>
      <div className="aspect-[16/9] overflow-hidden bg-surface">
        <img
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          className={`h-full w-full object-cover object-top ${imgClassName}`}
        />
      </div>
    </div>
  )
}
