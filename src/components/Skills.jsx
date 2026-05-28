import { useEffect, useRef, useState } from 'react'

const skillGroups = [
  {
    category: 'Frontend',
    icon: '⚡',
    skills: [
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 85 },
      { name: 'JavaScript', level: 78 },
      { name: 'React.js', level: 75 },
      { name: 'Tailwind CSS', level: 82 },
    ],
  },
  {
    category: 'Tools & Platforms',
    icon: '🛠',
    skills: [
      { name: 'GitHub', level: 80 },
      { name: 'VS Code', level: 90 },
      { name: 'Netlify', level: 75 },
      { name: 'Vercel', level: 72 },
      { name: 'Canva', level: 85 },
    ],
  },
  {
    category: 'Other Skills',
    icon: '🎯',
    skills: [
      { name: 'Responsive Design', level: 88 },
      { name: 'UI/UX Design', level: 72 },
      { name: 'AI Tools', level: 70 },
      { name: 'Website Deployment', level: 80 },
    ],
  },
]

function SkillBar({ name, level, animate }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-mono text-slate-300">{name}</span>
        <span className="text-xs font-mono text-primary">{level}%</span>
      </div>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: animate ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const [animate, setAnimate] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="relative py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="reveal font-mono text-xs text-primary tracking-widest mb-4">// 02. SKILLS</div>
        <h2 className="reveal section-title text-slate-100 mb-4">
          My <span className="gradient-text">Expertise</span>
        </h2>
        <p className="reveal text-slate-500 font-mono text-sm mb-12 max-w-md">
          Technologies I work with to bring ideas to life.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <div
              key={group.category}
              className="reveal glass rounded-2xl p-6 card-glow glass-hover"
              style={{ transitionDelay: `${gi * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{group.icon}</span>
                <h3 className="font-bold text-slate-100 text-lg">{group.category}</h3>
              </div>
              {group.skills.map((skill) => (
                <SkillBar key={skill.name} {...skill} animate={animate} />
              ))}
            </div>
          ))}
        </div>

        {/* Tech logos row */}
        <div className="reveal mt-12 glass rounded-2xl p-6">
          <p className="text-xs font-mono text-slate-500 tracking-widest text-center mb-6">TECH STACK</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['HTML5','CSS3','JavaScript','React','Tailwind','GitHub','VS Code','Netlify','Vercel','Canva','Figma','Git'].map((tech) => (
              <span key={tech} className="tech-badge hover:bg-primary/15 transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
