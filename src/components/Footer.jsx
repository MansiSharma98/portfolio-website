const LINKS = [
  { label: 'Substack', href: 'https://substack.com/@callingtardis' },
  { label: 'Topmate',  href: 'https://topmate.io/callingtardis' },
  { label: 'LinkedIn', href: '#' },
  { label: 'GitHub',   href: '#' },
]

export default function Footer() {
  return (
    <footer className="border-t border-violet/10 py-12 px-6 bg-[#F4F8F1]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-sm font-semibold text-violet mb-1">Mansi Sharma</p>
          <p className="text-xs text-violet/50">Builder · Engineer · Strategist</p>
        </div>

        <div className="flex items-center gap-6 flex-wrap justify-center">
          {LINKS.map(l => (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
              className="text-sm text-violet/50 hover:text-violet transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <a href="https://topmate.io/callingtardis" target="_blank" rel="noopener noreferrer"
          className="px-5 py-2.5 bg-violet text-tgreen text-sm font-semibold rounded-lg hover:bg-violet/80 transition-colors">
          Book a call ↗
        </a>
      </div>

      <div className="max-w-5xl mx-auto mt-8 pt-6 border-t border-violet/8 text-center">
        <p className="text-xs text-violet/30">© {new Date().getFullYear()} Mansi Sharma</p>
      </div>
    </footer>
  )
}
