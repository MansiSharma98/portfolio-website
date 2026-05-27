import HeroViz from './HeroViz'

const COMPANIES = [
  { name: 'Accenture',   domain: 'accenture.com' },
  { name: 'Outplay',     domain: 'outplay.ai' },
  { name: 'SureConnect', domain: 'sureconnect.ai' },
]

function CompanyLogo({ domain, name }) {
  return (
    <img
      src={`https://logo.clearbit.com/${domain}`}
      alt={name}
      className="w-5 h-5 rounded object-contain"
      onError={e => { e.target.style.display = 'none' }}
    />
  )
}

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto relative">
      <div className="pt-24 pb-20 md:pt-32 md:pb-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Right column — visualization */}
        <div className="hidden md:flex items-center justify-center order-last h-[480px] lg:h-[540px]">
          <HeroViz />
        </div>

        {/* Left column — text */}
        <div className="order-first">

        {/* Avatar */}
        <div className="mb-5 w-48 h-48 rounded-2xl overflow-hidden border border-violet/15 bg-[#F4F8F1]">
          <img
            src="./avatar.jpeg"
            alt="Mansi Sharma"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 10%', transform: 'scale(0.88)', transformOrigin: 'center 18%', mixBlendMode: 'multiply' }}
          />
        </div>

        <p className="text-lg md:text-xl text-violet/75 mb-4 tracking-wide">Hi, I'm</p>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-violet leading-none mb-5">
          Mansi Sharma
        </h1>

        {/* Tea Green accent line */}
        <div className="w-16 h-0.5 bg-tgreen rounded-full mb-6" />

        <p className="text-2xl md:text-3xl font-semibold text-violet/70 mb-8 tracking-tight">
          Builder&nbsp;&nbsp;·&nbsp;&nbsp;Engineer&nbsp;&nbsp;·&nbsp;&nbsp;Strategist
        </p>

        <p className="text-base md:text-lg text-violet/60 max-w-lg leading-relaxed mb-10">
          5 years shipping AI systems from idea to production — B2B sales tools, eCommerce
          platforms, and the gritty founding work nobody talks about. I move between strategy
          and implementation without losing either.
        </p>

        <div className="flex flex-wrap gap-3 mb-16">
          <a href="https://topmate.io/callingtardis" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-violet text-tgreen text-sm font-semibold rounded-lg hover:bg-violet/80 transition-colors">
            Book a call ↗
          </a>
          <a href="#work"
            className="inline-flex items-center px-6 py-3 bg-violet text-tgreen text-sm font-semibold rounded-lg hover:bg-violet/80 transition-colors">
            See my work ↓
          </a>
        </div>

        {/* Company row with logos */}
        <div className="flex items-center flex-wrap gap-x-5 gap-y-3">
          <span className="text-sm text-violet/50">Previously at</span>
          {COMPANIES.map((co, i) => (
            <span key={co.name} className="flex items-center gap-2">
              {i > 0 && <span className="text-tgreen text-xs">·</span>}
              <CompanyLogo domain={co.domain} name={co.name} />
              <span className="text-sm text-violet/80 font-medium">{co.name}</span>
            </span>
          ))}
        </div>

        </div>{/* end left column */}
      </div>{/* end grid */}

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-violet/30">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7"/>
        </svg>
      </div>
    </section>
  )
}
