import { ExternalLink, Github, Monitor, Globe, Users } from 'lucide-react'

const projects = [
  {
    title: 'School Management System',
    description:
      'A responsive school management website developed to manage student and school information with a modern UI and user-friendly experience.',
    live: 'https://www.rahulschool.me/',
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    icon: Monitor,
    gradient: 'from-primary/20 to-secondary/10',
    border: 'border-primary/20',
    accentColor: '#00ff88',
    category: 'Web App',
  },
  {
    title: 'Personal Portfolio Website',
    description:
      'A modern responsive portfolio website showcasing skills, certifications, achievements, and frontend development projects.',
    live: 'https://shimmering-melomakarona-3c747b.netlify.app/',
    tech: ['HTML', 'CSS', 'JavaScript', 'Netlify'],
    icon: Globe,
    gradient: 'from-secondary/20 to-accent/10',
    border: 'border-secondary/20',
    accentColor: '#0066ff',
    category: 'Portfolio',
  },
  {
    title: 'InAmigos Foundation NGO Website',
    description:
      'A responsive NGO website for InAmigos Foundation to spread awareness about education, healthcare, women empowerment, and volunteer activities.',
    live: 'https://ngo.rahulschool.me/',
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    icon: Users,
    gradient: 'from-accent/20 to-primary/10',
    border: 'border-accent/20',
    accentColor: '#ff3366',
    category: 'NGO',
  },
]

function ProjectCard({ project, index }) {
  const Icon = project.icon
  return (
    <div
      className="reveal glass rounded-2xl overflow-hidden card-glow group transition-all duration-500 hover:-translate-y-2 flex flex-col"
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {/* Top visual */}
      <div className={`relative h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center border-b ${project.border}`}>
        {/* Grid pattern */}
        <div className="absolute inset-0 grid-bg opacity-40" />
        {/* Glow circle */}
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center relative z-10 transition-transform duration-300 group-hover:scale-110"
          style={{ background: `${project.accentColor}15`, border: `1px solid ${project.accentColor}30` }}
        >
          <Icon size={32} style={{ color: project.accentColor }} />
        </div>
        {/* Category badge */}
        <div className="absolute top-4 right-4">
          <span className="font-mono text-xs px-3 py-1 rounded-full"
            style={{ background: `${project.accentColor}15`, color: project.accentColor, border: `1px solid ${project.accentColor}30` }}>
            {project.category}
          </span>
        </div>
        {/* Number */}
        <div className="absolute bottom-4 left-4 font-mono text-5xl font-black opacity-5 text-white select-none">
          0{index + 1}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span key={t} className="tech-badge text-xs">{t}</span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <a
            href="https://github.com/Rahulkumar622"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-mono text-slate-400 border border-slate-700 hover:border-slate-500 hover:text-slate-200 transition-all"
          >
            <Github size={15} />
            GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-mono font-bold text-dark-900 transition-all hover:opacity-90"
            style={{ background: `linear-gradient(135deg, ${project.accentColor}, #0066ff)` }}
          >
            <ExternalLink size={15} />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="reveal font-mono text-xs text-primary tracking-widest mb-4">// 03. PROJECTS</div>
        <h2 className="reveal section-title text-slate-100 mb-4">
          Featured <span className="gradient-text">Work</span>
        </h2>
        <p className="reveal text-slate-500 font-mono text-sm mb-12 max-w-md">
          A selection of real-world projects I've designed and built.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* View more CTA */}
        <div className="reveal text-center mt-12">
          <a
            href="https://github.com/Rahulkumar622"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex"
          >
            <Github size={16} />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
