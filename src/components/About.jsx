import { experience, skills } from '../data/content'

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto border-t border-violet/10">
      <div className="mb-12">
        <p className="text-xs text-violet/40 uppercase tracking-widest mb-3">About</p>
        <h2 className="text-3xl font-bold text-violet">A little more</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Bio */}
        <div className="space-y-5 text-violet/65 leading-relaxed text-[15px] font-sans">
          <p>
            I'm a generalist who's spent 5 years at the intersection of engineering, product,
            and strategy — building AI systems that actually ship.
          </p>
          <p>
            At <strong className="text-violet font-semibold">Accenture</strong>, I shipped
            eCommerce infrastructure for European markets. At{' '}
            <strong className="text-violet font-semibold">Outplay</strong>, I designed and
            built AI features for B2B sales workflows across North American and Indian markets.
            Most recently, I was a{' '}
            <strong className="text-violet font-semibold">Founding Engineer & AI Consultant at SureConnect</strong>,
            where I worked directly with stakeholders to scope AI solutions and learned what it really means to go from idea to production.
          </p>
          <p>
            I care about systems that work at scale, decisions that hold up under pressure,
            and teams that build things they're proud of.
          </p>
          <p>
            When I'm not building, I write about AI, product, and the craft of engineering
            on my Substack — <em className="text-violet/80">Calling Tardis</em>.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <a href="https://topmate.io/callingtardis" target="_blank" rel="noopener noreferrer"
              className="px-5 py-2.5 bg-violet text-tgreen text-sm font-semibold rounded-lg hover:bg-violet/80 transition-colors">
              Book a call ↗
            </a>
            <a href="https://substack.com/@callingtardis" target="_blank" rel="noopener noreferrer"
              className="px-5 py-2.5 bg-violet text-tgreen text-sm font-semibold rounded-lg hover:bg-violet/80 transition-colors">
              Read my writing ↗
            </a>
          </div>
        </div>

        <div className="space-y-8">
          {/* Experience — bold card style */}
          <div>
            <p className="text-xs text-violet/40 uppercase tracking-widest mb-4 font-sans">Experience</p>
            <div className="space-y-3">
              {experience.map(exp => (
                <div key={exp.company}
                  className="flex items-center justify-between p-4 rounded-xl bg-violet/5 border border-violet/10">
                  <div>
                    <p className="text-base font-bold text-violet font-sans">{exp.role}</p>
                    <p className="text-sm font-medium text-violet/60 mt-0.5 font-sans">{exp.company}</p>
                  </div>
                  <span className="text-xs font-semibold text-violet bg-tgreen px-3 py-1.5 rounded-md shrink-0 ml-4 font-sans">
                    {exp.period}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Skills — box style */}
          <div>
            <p className="text-xs text-violet/40 uppercase tracking-widest mb-4 font-sans">I work on</p>
            <div className="flex flex-wrap gap-2">
              {skills.map(tag => (
                <span key={tag}
                  className="text-sm px-4 py-2 bg-tgreen/20 text-violet border border-tgreen/40 font-semibold rounded-lg font-sans">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
