import { caseStudies } from '../data/content'

const CARD_PALETTE = [
  { bg: 'bg-[#EDE5EF]', border: 'border-violet/30', hover: 'hover:border-violet/60', tagBorder: 'border-violet/20', tagText: 'text-violet' },   // Violet tint
  { bg: 'bg-[#E8F1DF]', border: 'border-tgreen/60', hover: 'hover:border-tgreen',    tagBorder: 'border-tgreen/40', tagText: 'text-violet' },   // Tea Green tint
]

function CaseStudyCard({ cs, palette }) {
  return (
    <a href={cs.link}
      className={`group flex flex-col p-8 border rounded-2xl hover:shadow-sm transition-all duration-200 ${palette.bg} ${palette.border} ${palette.hover}`}>

      <div className="flex items-center justify-between mb-4">
        <p className="text-xs text-violet/50">{cs.company}&nbsp;·&nbsp;{cs.year}&nbsp;·&nbsp;{cs.readTime}</p>
        <span className="text-violet/30 group-hover:text-violet/60 transition-colors">↗</span>
      </div>

      <h3 className="text-xl font-semibold text-violet mb-2 group-hover:text-violet/70 transition-colors leading-snug">
        {cs.title}
      </h3>
      <p className="text-sm text-violet/50 italic mb-4">{cs.subtitle}</p>
      <p className="text-sm text-violet/60 leading-relaxed mb-6 flex-1">{cs.description}</p>

      <div className="flex flex-wrap gap-2">
        {cs.tags.map(tag => (
          <span key={tag}
            className={`text-xs px-2.5 py-1 bg-white/60 border rounded-md ${palette.tagBorder} ${palette.tagText}`}>
            {tag}
          </span>
        ))}
      </div>
    </a>
  )
}

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 px-6 max-w-5xl mx-auto border-t border-violet/10">
      <div className="mb-12">
        <p className="text-xs text-violet/40 uppercase tracking-widest mb-3">Case Studies</p>
        <h2 className="text-3xl font-bold text-violet">Deep dives</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {caseStudies.map((cs, i) => (
          <CaseStudyCard key={cs.id} cs={cs} palette={CARD_PALETTE[i % CARD_PALETTE.length]} />
        ))}
      </div>
    </section>
  )
}
