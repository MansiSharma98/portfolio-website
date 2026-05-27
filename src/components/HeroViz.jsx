import { useState } from 'react'

const VIOLET = '#58355E'
const TGREEN = '#C4D6B0'

const CIRCLES = [
  {
    id:           'builder',
    label:        'BUILDER',
    sub:          'Shipping 0 → 1',
    cx:           200, cy: 150,
    lx:           200, ly: 64,   labelAnchor: 'middle',
    fill:         VIOLET,  fillOpacity: 0.11,
    stroke:       VIOLET,  strokeOpacity: 0.28,
    dur:          '4.3s',  begin: '0s',
  },
  {
    id:           'product',
    label:        'PRODUCT',
    sub:          'User-first thinking',
    cx:           148, cy: 244,
    lx:           80,  ly: 298,  labelAnchor: 'middle',
    fill:         TGREEN, fillOpacity: 0.20,
    stroke:       TGREEN, strokeOpacity: 0.45,
    dur:          '3.9s',  begin: '0.6s',
  },
  {
    id:           'strategy',
    label:        'STRATEGY',
    sub:          'Systems that scale',
    cx:           252, cy: 244,
    lx:           320, ly: 298,  labelAnchor: 'middle',
    fill:         VIOLET,  fillOpacity: 0.11,
    stroke:       VIOLET,  strokeOpacity: 0.22,
    dur:          '4.6s',  begin: '1.1s',
  },
]

export default function HeroViz() {
  const [active, setActive] = useState(null)

  const toggle = (id) => setActive(prev => prev === id ? null : id)

  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div
        className="relative mx-auto aspect-square w-full max-w-[420px] rounded-full border border-violet/10"
        style={{ background: 'linear-gradient(135deg, #E8F1DF88 0%, #EDE5EF55 100%)' }}
      >
        <svg viewBox="0 0 400 400" className="w-full h-full" aria-hidden="true">
          <defs>
            <filter id="cglow" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="10" result="blur"/>
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>

          {/* ── Venn circles ────────────────────────────────── */}
          {CIRCLES.map((c) => {
            const isActive  = active === c.id
            const isDimmed  = active !== null && !isActive

            return (
              <g
                key={c.id}
                onClick={() => toggle(c.id)}
                style={{ cursor: 'pointer', transition: 'opacity 0.35s ease', opacity: isDimmed ? 0.38 : 1 }}
              >
                {/* Clickable circle */}
                <circle
                  cx={c.cx} cy={c.cy} r={88}
                  fill={c.fill}     fillOpacity={isActive ? 0.28 : c.fillOpacity}
                  stroke={c.stroke} strokeOpacity={isActive ? 0.6 : c.strokeOpacity}
                  strokeWidth={isActive ? 1.8 : 1.2}
                  style={{
                    transformBox:    'fill-box',
                    transformOrigin: 'center',
                    transform:       isActive ? 'scale(1.16)' : 'scale(1)',
                    transition:      'transform 0.45s cubic-bezier(0.34,1.56,0.64,1), fill-opacity 0.3s ease, stroke-opacity 0.3s ease',
                  }}
                >
                  {/* Breathing — only when not active */}
                  {!isActive && (
                    <animate
                      attributeName="r"
                      values="85;92;85"
                      dur={c.dur}
                      begin={c.begin}
                      repeatCount="indefinite"
                      calcMode="spline"
                      keySplines="0.45 0 0.55 1;0.45 0 0.55 1"
                    />
                  )}
                </circle>

                {/* Label */}
                <text
                  x={c.lx} y={c.ly}
                  textAnchor={c.labelAnchor}
                  fontSize="10.5"
                  fontWeight="700"
                  fontFamily="Inter,system-ui,sans-serif"
                  fill={VIOLET}
                  fillOpacity={isActive ? 0.95 : 0.7}
                  letterSpacing="0.08em"
                  style={{ transition: 'fill-opacity 0.3s ease', pointerEvents: 'none', userSelect: 'none' }}
                >
                  {c.label}
                </text>

                {/* Sub-label — fades in on click */}
                {isActive && (
                  <text
                    x={c.lx} y={c.ly + 14}
                    textAnchor={c.labelAnchor}
                    fontSize="8.5"
                    fontWeight="500"
                    fontFamily="Inter,system-ui,sans-serif"
                    fill={VIOLET}
                    fillOpacity="0.55"
                    letterSpacing="0.03em"
                    style={{ pointerEvents: 'none', userSelect: 'none' }}
                  >
                    {c.sub}
                    <animate attributeName="opacity" values="0;1" dur="0.3s" fill="freeze"/>
                  </text>
                )}
              </g>
            )
          })}

          {/* ── Centre intersection glow ─────────────────────── */}
          <circle
            cx="200" cy="213" r="24"
            fill={TGREEN} fillOpacity="0.3"
            filter="url(#cglow)"
            style={{ pointerEvents: 'none' }}
          >
            <animate attributeName="fillOpacity" values="0.2;0.55;0.2" dur="3.8s"
              repeatCount="indefinite" calcMode="spline"
              keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
            <animate attributeName="r" values="20;30;20" dur="3.8s"
              repeatCount="indefinite" calcMode="spline"
              keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
          </circle>

          {/* ── Tap hint (shown only before any interaction) ─── */}
          {active === null && (
            <text
              x="200" y="390"
              textAnchor="middle"
              fontSize="8"
              fontFamily="Inter,system-ui,sans-serif"
              fill={VIOLET}
              fillOpacity="0.3"
              letterSpacing="0.06em"
              style={{ pointerEvents: 'none', userSelect: 'none' }}
            >
              TAP A CIRCLE
            </text>
          )}
        </svg>
      </div>
    </div>
  )
}
