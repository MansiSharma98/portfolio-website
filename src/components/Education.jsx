import { education } from '../data/content'

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 max-w-5xl mx-auto border-t border-violet/10">
      <div className="mb-12">
        <p className="text-xs text-violet/40 uppercase tracking-widest mb-3">Education & Credentials</p>
        <h2 className="text-3xl font-bold text-violet">Degrees & Certifications</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Degree cards */}
        {education.map(ed => (
          <div key={ed.school} className="p-6 rounded-2xl bg-[#E8F1DF] border border-tgreen/60 space-y-4">

            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-base font-bold text-violet font-sans leading-snug">{ed.degree}</p>
                <p className="text-sm text-violet/55 mt-1 font-sans">{ed.school}</p>
                <p className="text-xs text-violet/40 mt-0.5 font-sans">{ed.location}</p>
              </div>
              <span className="text-xs font-semibold text-violet bg-tgreen px-3 py-1.5 rounded-md shrink-0 font-sans">
                {ed.period}
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-2.5 py-1 bg-white/60 text-violet border border-violet/20 font-semibold rounded-md font-sans">
                GPA {ed.gpa}
              </span>
              <span className="text-xs px-2.5 py-1 bg-white/60 text-violet border border-violet/20 font-semibold rounded-md font-sans">
                {ed.honours}
              </span>
            </div>

            <div>
              <p className="text-xs text-violet/35 uppercase tracking-widest mb-2 font-sans">Coursework</p>
              <div className="flex flex-wrap gap-1.5">
                {ed.coursework.map(c => (
                  <span key={c} className="text-xs px-2.5 py-1 bg-tgreen/20 text-violet border border-tgreen/40 font-semibold rounded-md font-sans">
                    {c}
                  </span>
                ))}
              </div>
            </div>

          </div>
        ))}

        {/* Certifications placeholder */}
        <div className="p-6 rounded-2xl bg-[#EDE5EF] border border-violet/25 border-dashed flex flex-col items-center justify-center text-center gap-2 min-h-[180px]">
          <p className="text-sm font-semibold text-violet/50 font-sans">Certifications coming soon</p>
          <p className="text-xs text-violet/35 font-sans">Add your courses, bootcamps & certificates here</p>
        </div>

      </div>
    </section>
  )
}
