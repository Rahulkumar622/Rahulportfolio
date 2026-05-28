import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, ChevronDown, Download, Eye } from 'lucide-react'

const titles = [
  'Software Developer',
  'Frontend Developer',
  'UI/UX Enthusiast',
  'IT Student',
  'React Developer',
]

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = titles[titleIndex]
    let timeout

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setTitleIndex((i) => (i + 1) % titles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, titleIndex])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden"
    >
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/3 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 animate-fadeIn">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-slow" />
          <span className="font-mono text-xs text-slate-400 tracking-widest">AVAILABLE FOR OPPORTUNITIES</span>
        </div>

        {/* Main heading */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold mb-4 leading-none tracking-tight animate-slideUp">
          <span className="text-slate-100">Rahul</span>
          <br />
          <span className="gradient-text">Kumar</span>
        </h1>

        {/* Animated title */}
        <div className="h-10 flex items-center justify-center mb-6">
          <span className="font-mono text-lg md:text-xl text-primary tracking-wider">
            {displayed}
            <span className="typing-cursor" />
          </span>
        </div>

        {/* Tagline */}
        <p className="max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed mb-10 animate-fadeIn">
          Passionate about building{' '}
          <span className="text-primary font-semibold">modern web applications</span> and
          solving real-world problems using technology.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            <Eye size={16} />
            View Projects
          </button>
          <a
            href="/resume.pdf"
            download
            className="btn-outline"
          >
            <Download size={16} />
            Download Resume
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-5 mb-16">
          {[
            { href: 'https://github.com/Rahulkumar622', icon: Github, label: 'GitHub' },
            { href: 'https://www.linkedin.com/in/rahul-kumar-475156360', icon: Linkedin, label: 'LinkedIn' },
            { href: 'mailto:rahulkumarkanpdigital@gmail.com', icon: Mail, label: 'Email' },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={label !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="glass p-3 rounded-xl text-slate-400 hover:text-primary hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
              aria-label={label}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mb-12">
          {[
            { n: '3+', label: 'Projects Built' },
            { n: '5+', label: 'Certifications' },
            { n: '2+', label: 'Internships' },
          ].map(({ n, label }) => (
            <div key={label} className="glass rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-primary">{n}</div>
              <div className="text-xs text-slate-500 font-mono mt-1">{label}</div>
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex flex-col items-center gap-2 text-slate-600 hover:text-primary transition-colors mx-auto"
          aria-label="Scroll down"
        >
          <span className="font-mono text-xs tracking-widest">SCROLL</span>
          <ChevronDown size={18} className="animate-bounce" />
        </button>
      </div>
    </section>
  )
}
