import { projects } from '../data/content'

// Three distinct palette-derived tints — one per card
const CARD_PALETTE = [
  { bg: 'bg-[#E8F1DF]', border: 'border-tgreen/60',   hover: 'hover:border-tgreen' },   // Tea Green tint
  { bg: 'bg-[#EDE5EF]', border: 'border-violet/25',   hover: 'hover:border-violet/60' }, // Violet tint
  { bg: 'bg-[#D8EBD0]', border: 'border-tgreen/70',   hover: 'hover:border-tgreen' },   // Deeper Tea Green
]

function ProjectCard({ project, palette }) {
  return (
    <a href={project.link} target="_blank" rel="noopener noreferrer"
      className={`group flex flex-col p-6 border rounded-2xl hover:shadow-sm transition-all duration-200 ${palette.bg} ${palette.border} ${palette.hover}`}>

      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-xs text-violet/50 mb-1.5">{project.company}&nbsp;·&nbsp;{project.year}</p>
          <h3 className="text-base font-semibold text-violet group-hover:text-violet/70 transition-colors leading-snug">
            {project.title}
          </h3>
        </div>
        <span className="text-violet/30 group-hover:text-violet/60 transition-colors mt-0.5 shrink-0 ml-2">↗</span>
      </div>

      <p className="text-sm text-violet/60 leading-relaxed mb-5 flex-1">{project.description}</p>

      <div className="flex flex-wrap gap-1.5">
        {project.tags.map(tag => (
          <span key={tag} className="text-xs px-2.5 py-1 bg-white/60 text-violet border border-violet/20 font-semibold rounded-md">
            {tag}
          </span>
        ))}
      </div>
    </a>
  )
}

export default function Work() {
  return (
    <section id="work" className="py-24 px-6 max-w-5xl mx-auto border-t border-violet/10">
      <div className="mb-12">
        <p className="text-xs text-violet/40 uppercase tracking-widest mb-3">Work</p>
        <h2 className="text-3xl font-bold text-violet">Things I've built</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} palette={CARD_PALETTE[i % CARD_PALETTE.length]} />
        ))}
      </div>
    </section>
  )
}
