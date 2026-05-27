import { useState, useEffect } from 'react'
import { featuredWriting } from '../data/content'

const SUBSTACK_RSS = 'https://callingtardis.substack.com/feed'
const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(SUBSTACK_RSS)}&count=6`

// Alternating card tints — mirrors Work/CaseStudies
const CARD_PALETTE = [
  { bg: 'bg-[#E8F1DF]', border: 'border-tgreen/60', hover: 'hover:border-tgreen' },
  { bg: 'bg-[#EDE5EF]', border: 'border-violet/25', hover: 'hover:border-violet/60' },
  { bg: 'bg-[#D8EBD0]', border: 'border-tgreen/70', hover: 'hover:border-tgreen' },
]

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}
function stripHtml(html) { return html?.replace(/<[^>]*>/g, '') ?? '' }

// Pinned external post — same light card style as Work/CaseStudies
function FeaturedCard({ post, palette }) {
  return (
    <a href={post.link} target="_blank" rel="noopener noreferrer"
      className={`group flex flex-col p-6 border rounded-2xl hover:shadow-sm transition-all duration-200 ${palette.bg} ${palette.border} ${palette.hover}`}>

      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-xs text-violet/50 mb-1.5 font-sans">{post.publication}&nbsp;·&nbsp;{post.date}</p>
          <h3 className="text-base font-semibold text-violet group-hover:text-violet/70 transition-colors leading-snug">
            {post.title}
          </h3>
        </div>
        <span className="text-violet/30 group-hover:text-violet/60 transition-colors mt-0.5 shrink-0 ml-2">↗</span>
      </div>

      <p className="text-sm text-violet/60 leading-relaxed mb-5 flex-1">{post.description}</p>

      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          {post.tags.map(tag => (
            <span key={tag} className="text-xs px-2.5 py-1 bg-white/60 text-violet border border-violet/20 font-semibold rounded-md">
              {tag}
            </span>
          ))}
        </div>
        <span className="text-xs px-2.5 py-1 bg-violet text-tgreen font-semibold rounded-md shrink-0 ml-2">Featured</span>
      </div>
    </a>
  )
}

// Regular Substack post — matches Work/CaseStudies card style
function PostCard({ post, palette }) {
  return (
    <a href={post.link} target="_blank" rel="noopener noreferrer"
      className={`group flex flex-col p-6 border rounded-2xl hover:shadow-sm transition-all duration-200 ${palette.bg} ${palette.border} ${palette.hover}`}>

      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-xs text-violet/50 mb-1.5 font-sans">{formatDate(post.pubDate)}</p>
          <h3 className="text-base font-semibold text-violet group-hover:text-violet/70 transition-colors leading-snug">
            {post.title}
          </h3>
        </div>
        <span className="text-violet/30 group-hover:text-violet/60 transition-colors mt-0.5 shrink-0 ml-2">↗</span>
      </div>

      {post.thumbnail && (
        <div className="mb-4 rounded-xl overflow-hidden aspect-video bg-tgreen/20">
          <img src={post.thumbnail} alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
        </div>
      )}

      <p className="text-sm text-violet/55 leading-relaxed line-clamp-3 mb-5 flex-1">
        {stripHtml(post.description).slice(0, 160).trim()}…
      </p>

      <div className="flex items-center gap-2">
        <span className="text-xs px-2.5 py-1 bg-white/60 text-violet border border-violet/20 font-semibold rounded-md">Substack</span>
        <span className="text-xs px-2.5 py-1 bg-violet text-tgreen font-semibold rounded-md">Read article ↗</span>
      </div>
    </a>
  )
}

function SkeletonCard() {
  return (
    <div className="p-6 border border-tgreen/40 rounded-2xl animate-pulse bg-[#E8F1DF]">
      <div className="h-3 bg-tgreen/30 rounded-md w-24 mb-3"/>
      <div className="h-4 bg-tgreen/30 rounded-md mb-2"/>
      <div className="h-4 bg-tgreen/30 rounded-md w-3/4 mb-4"/>
      <div className="h-3 bg-tgreen/30 rounded-md mb-2"/>
      <div className="h-3 bg-tgreen/30 rounded-md w-2/3"/>
    </div>
  )
}

export default function Blog() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch(API_URL)
      .then(r => r.json())
      .then(data => { if (data.status === 'ok') setPosts(data.items); else setError(true); setLoading(false) })
      .catch(() => { setError(true); setLoading(false) })
  }, [])

  return (
    <section id="writing" className="py-24 px-6 max-w-5xl mx-auto border-t border-violet/10">
      <div className="flex items-end justify-between mb-12">
        <div>
          <p className="text-xs text-violet/40 uppercase tracking-widest mb-3">Writing</p>
          <h2 className="text-3xl font-bold text-violet">Words I've put out</h2>
        </div>
        <a href="https://substack.com/@callingtardis" target="_blank" rel="noopener noreferrer"
          className="px-4 py-2 bg-violet text-tgreen text-sm font-semibold rounded-lg hover:bg-violet/80 transition-colors">
          All posts ↗
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {featuredWriting.map((post, i) => (
          <FeaturedCard key={post.id} post={post} palette={CARD_PALETTE[i % CARD_PALETTE.length]}/>
        ))}
        {loading && [1,2,3].map(i => <SkeletonCard key={i}/>)}
        {error && (
          <div className="col-span-full text-center py-12 text-violet/50">
            <p className="mb-3">Couldn't load Substack posts right now.</p>
            <a href="https://substack.com/@callingtardis" target="_blank" rel="noopener noreferrer"
              className="px-4 py-2 bg-violet text-tgreen text-sm font-semibold rounded-lg hover:bg-violet/80 transition-colors">Read directly on Substack ↗</a>
          </div>
        )}
        {!loading && !error && posts.map((post, i) => (
          <PostCard key={post.guid} post={post} palette={CARD_PALETTE[(featuredWriting.length + i) % CARD_PALETTE.length]}/>
        ))}
      </div>
    </section>
  )
}
