import { Rocket, Trophy, Cpu, Globe } from 'lucide-react'

const achievements = [
  {
    icon: Globe,
    title: 'Frontend Project Deployments',
    desc: 'Successfully deployed multiple production-grade websites including a school management system and NGO platform on custom domains.',
    color: '#00ff88',
    metric: '3+',
    metricLabel: 'Live Projects',
  },
  {
    icon: Trophy,
    title: 'Internship Selection',
    desc: 'Selected for the prestigious PM Internship Scheme at Godrej Consumer Products Limited — a competitive national-level program.',
    color: '#f59e0b',
    metric: '2+',
    metricLabel: 'Internships',
  },
  {
    icon: Cpu,
    title: 'AI Workshop Participation',
    desc: 'Participated in an Agentic AI Workshop, gaining exposure to cutting-edge AI tools, frameworks, and real-world agentic systems.',
    color: '#8b5cf6',
    metric: '1',
    metricLabel: 'AI Workshop',
  },
  {
    icon: Rocket,
    title: 'Website Development Experience',
    desc: 'Hands-on experience building and deploying real-world websites from scratch — portfolio sites, management systems, and NGO platforms.',
    color: '#ff3366',
    metric: '5+',
    metricLabel: 'Certs Earned',
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="reveal font-mono text-xs text-primary tracking-widest mb-4">// 06. ACHIEVEMENTS</div>
        <h2 className="reveal section-title text-slate-100 mb-4">
          Key <span className="gradient-text">Milestones</span>
        </h2>
        <p className="reveal text-slate-500 font-mono text-sm mb-12 max-w-md">
          Highlights from my journey so far.
        </p>

        <div className="grid sm:grid-cols-2 gap-5">
          {achievements.map((ach, i) => {
            const Icon = ach.icon
            return (
              <div
                key={ach.title}
                className="reveal glass rounded-2xl p-6 card-glow glass-hover group flex gap-5"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                {/* Metric */}
                <div className="shrink-0 text-center">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-2 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${ach.color}12`, border: `1px solid ${ach.color}25` }}
                  >
                    <Icon size={24} style={{ color: ach.color }} />
                  </div>
                  <div className="font-bold text-lg" style={{ color: ach.color }}>{ach.metric}</div>
                  <div className="font-mono text-xs text-slate-600 leading-tight">{ach.metricLabel}</div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-bold text-slate-100 text-base mb-2 group-hover:text-primary transition-colors">
                    {ach.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{ach.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
