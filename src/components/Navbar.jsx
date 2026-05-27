import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Work',         href: '#work' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Writing',      href: '#writing' },
  { label: 'About',        href: '#about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      scrolled || menuOpen
        ? 'bg-[#F4F8F1]/95 backdrop-blur-sm border-b border-violet/10'
        : 'bg-transparent'
    }`}>
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-sm font-semibold text-violet tracking-tight">
          Mansi Sharma
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href}
              className="text-sm text-violet/85 hover:text-violet transition-colors">
              {l.label}
            </a>
          ))}
          {/* Tea Green on Violet — primary CTA */}
          <a href="https://topmate.io/callingtardis" target="_blank" rel="noopener noreferrer"
            className="ml-2 px-4 py-1.5 bg-violet text-tgreen text-sm font-semibold rounded-lg hover:bg-violet/80 transition-colors">
            Book a call
          </a>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(o => !o)}
          className="md:hidden p-2 -mr-2 text-violet/60 hover:text-violet transition-colors"
          aria-label="Toggle menu">
          {menuOpen
            ? <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
            : <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/></svg>
          }
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-[#F4F8F1] border-t border-violet/10 px-6 py-5 flex flex-col gap-4">
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              className="text-sm text-violet/85 hover:text-violet transition-colors py-1">
              {l.label}
            </a>
          ))}
          <a href="https://topmate.io/callingtardis" target="_blank" rel="noopener noreferrer"
            className="mt-1 px-4 py-2.5 bg-tgreen text-violet text-sm font-semibold rounded-full text-center hover:bg-tgreen/80 transition-colors">
            Book a call
          </a>
        </div>
      )}
    </nav>
  )
}
