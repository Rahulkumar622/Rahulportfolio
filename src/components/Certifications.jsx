import { Award, Code2, Brain, Shield, Heart } from 'lucide-react'

const certs = [
  {
    title: 'Google Digital Marketing',
    issuer: 'Google',
    icon: Award,
    color: '#00ff88',
    desc: 'Fundamentals of digital marketing, SEO, and online advertising strategies.',
  },
  {
    title: 'Java Programming Internship',
    issuer: 'Training Institute',
    icon: Code2,
    color: '#0066ff',
    desc: 'Hands-on Java programming internship covering OOP, data structures, and algorithms.',
  },
  {
    title: 'Agentic AI Workshop',
    issuer: 'AI Foundation',
    icon: Brain,
    color: '#ff3366',
    desc: 'Participation in an advanced workshop on agentic AI systems and modern AI tooling.',
  },
  {
    title: 'CompTIA A+ & N+ Workshop',
    issuer: 'CompTIA',
    icon: Shield,
    color: '#f59e0b',
    desc: 'Workshop covering hardware fundamentals, networking concepts, and IT infrastructure.',
  },
  {
    title: 'Volunteer Internship',
    issuer: 'InAmigos Foundation',
    icon: Heart,
    color: '#8b5cf6',
    desc: 'Virtual volunteer internship focused on social impact, NGO operations, and community outreach.',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="reveal font-mono text-xs text-primary tracking-widest mb-4">// 04. CERTIFICATIONS</div>
        <h2 className="reveal section-title text-slate-100 mb-4">
          Credentials & <span className="gradient-text">Training</span>
        </h2>
        <p className="reveal text-slate-500 font-mono text-sm mb-12 max-w-md">
          Certifications and workshops that shaped my skillset.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certs.map((cert, i) => {
            const Icon = cert.icon
            return (
              <div
                key={cert.title}
                className="reveal glass rounded-2xl p-6 card-glow glass-hover group"
                style={{ transitionDelay: `${i * 0.07}s` }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}25` }}
                >
                  <Icon size={22} style={{ color: cert.color }} />
                </div>

                {/* Badge */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: cert.color }} />
                  <span className="font-mono text-xs text-slate-500">{cert.issuer}</span>
                </div>

                <h3 className="font-bold text-slate-100 text-base mb-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{cert.desc}</p>

                {/* Bottom accent */}
                <div
                  className="h-0.5 w-0 group-hover:w-full mt-4 transition-all duration-500 rounded-full"
                  style={{ background: `linear-gradient(90deg, ${cert.color}, transparent)` }}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
