import { Briefcase, Calendar, Building2 } from 'lucide-react'

const experiences = [
  {
    company: 'Godrej Consumer Products Limited',
    role: 'Sales Executive Trainee Intern',
    duration: '2025',
    type: 'PM Internship Scheme',
    color: '#00ff88',
    description:
      'Selected under the PM Internship Scheme. Gained practical exposure in sales operations, communication, retail interaction, and professional corporate training.',
    tags: ['Sales Operations', 'Communication', 'Retail', 'Corporate Training'],
  },
  {
    company: 'InAmigos Foundation',
    role: 'Virtual Volunteer Intern',
    duration: '2024',
    type: 'NGO Internship',
    color: '#0066ff',
    description:
      'Worked on NGO website improvement ideas, social media awareness campaigns, and volunteer activities focused on education and healthcare outreach.',
    tags: ['Web Improvement', 'Social Media', 'Community Outreach', 'Volunteering'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="reveal font-mono text-xs text-primary tracking-widest mb-4">// 05. EXPERIENCE</div>
        <h2 className="reveal section-title text-slate-100 mb-4">
          Work <span className="gradient-text">History</span>
        </h2>
        <p className="reveal text-slate-500 font-mono text-sm mb-16 max-w-md">
          Real-world exposure that complements my technical journey.
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div
                key={exp.company}
                className={`reveal relative flex flex-col md:flex-row gap-8 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content card */}
                <div className="flex-1 ml-14 md:ml-0">
                  <div className="glass rounded-2xl p-6 card-glow glass-hover">
                    {/* Header */}
                    <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className="font-mono text-xs px-2 py-0.5 rounded"
                            style={{ background: `${exp.color}15`, color: exp.color, border: `1px solid ${exp.color}20` }}
                          >
                            {exp.type}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-100">{exp.role}</h3>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-500 font-mono text-xs">
                        <Calendar size={12} />
                        {exp.duration}
                      </div>
                    </div>

                    {/* Company */}
                    <div className="flex items-center gap-2 mb-4">
                      <Building2 size={15} style={{ color: exp.color }} />
                      <span className="font-semibold text-slate-300 text-sm">{exp.company}</span>
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed mb-4">{exp.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="tech-badge">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-3 md:left-1/2 top-6 md:-translate-x-1/2 flex items-center justify-center">
                  <div
                    className="w-7 h-7 rounded-full border-2 flex items-center justify-center z-10"
                    style={{ background: '#030712', borderColor: exp.color }}
                  >
                    <Briefcase size={12} style={{ color: exp.color }} />
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
