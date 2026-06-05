import { useState, useRef, useEffect } from 'react'
import { timeline } from '../data/content'

const TYPE_STYLE = {
  education: { dot: 'bg-tgreen border-tgreen',       badge: 'bg-tgreen text-violet',          card: 'bg-[#E8F1DF] border-tgreen/50'  },
  work:      { dot: 'bg-violet border-violet',        badge: 'bg-violet text-tgreen',          card: 'bg-[#EDE5EF] border-violet/25'  },
}

function TimelineItem({ item, index }) {
  const [open, setOpen] = useState(false)
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const s = TYPE_STYLE[item.type]

  return (
    <div
      ref={ref}
      className="relative pl-10 pb-10 last:pb-0"
      style={{
        opacity:    visible ? 1 : 0,
        transform:  visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.55s ease ${index * 120}ms, transform 0.55s ease ${index * 120}ms`,
      }}
    >
      {/* Dot */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        className={`absolute left-0 top-1 w-4 h-4 rounded-full border-2 z-10 transition-transform duration-300 ${s.dot} ${open ? 'scale-125' : 'hover:scale-110'}`}
      />

      {/* Header row — always visible */}
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full text-left group"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs text-violet/40 font-sans mb-1 tracking-wide">{item.period} · {item.location}</p>
            <h3 className="text-base font-semibold text-violet group-hover:text-violet/70 transition-colors leading-snug">
              {item.title}
            </h3>
            <p className="text-sm text-violet/55 mt-0.5 font-sans">{item.org}</p>
          </div>
          <div className="flex items-center gap-2 shrink-0 mt-1">
            <span className={`text-xs px-2.5 py-1 rounded-md font-semibold font-sans ${s.badge}`}>
              {item.type === 'education' ? 'Education' : 'Work'}
            </span>
            <span className={`text-violet/30 transition-transform duration-300 text-sm ${open ? 'rotate-180' : ''}`}>
              ↓
            </span>
          </div>
        </div>

        {!open && (
          <p className="text-xs text-violet/40 mt-1.5 font-sans">{item.summary}</p>
        )}
      </button>

      {/* Expanded card */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? 'max-h-[600px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
      >
        <div className={`p-5 rounded-2xl border space-y-4 ${s.card}`}>

          <p className="text-sm text-violet/70 leading-relaxed font-sans">{item.body}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {item.tags.map(tag => (
              <span key={tag} className="text-xs px-2.5 py-1 bg-white/60 text-violet border border-violet/20 font-semibold rounded-md font-sans">
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          {item.links.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-1">
              {item.links.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-violet text-tgreen text-xs font-semibold rounded-lg hover:bg-violet/80 transition-colors font-sans"
                  onClick={e => e.stopPropagation()}
                >
                  {l.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 px-6 max-w-5xl mx-auto border-t border-violet/10">
      <div className="mb-12">
        <p className="text-xs text-violet/40 uppercase tracking-widest mb-3">Timeline</p>
        <h2 className="text-3xl font-bold text-violet">2016 → Present</h2>
      </div>

      <div className="max-w-2xl relative">
        {/* Vertical line */}
        <div className="absolute left-[7px] top-2 bottom-0 w-px bg-violet/12" />

        {timeline.map((item, i) => (
          <TimelineItem key={item.id} item={item} index={i} />
        ))}
      </div>
    </section>
  )
}
