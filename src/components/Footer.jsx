import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const navLinks = ['About', 'Skills', 'Projects', 'Certifications', 'Experience', 'Contact']

export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-slate-800/50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="font-mono text-xl font-bold text-primary mb-3">&lt;RK /&gt;</div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              B.Sc. IT Student & Frontend Developer from Patna, Bihar. Building digital experiences
              with passion and precision.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="font-mono text-xs text-slate-500 tracking-widest mb-4">NAVIGATION</p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(link)}
                    className="text-sm text-slate-400 hover:text-primary transition-colors font-mono"
                  >
                    → {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="font-mono text-xs text-slate-500 tracking-widest mb-4">FIND ME ON</p>
            <div className="flex gap-3">
              {[
                { icon: Github, href: 'https://github.com/Rahulkumar622', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/rahul-kumar-475156360', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:rahulkumarkanpdigital@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="glass p-3 rounded-xl text-slate-400 hover:text-primary hover:border-primary/30 transition-all hover:-translate-y-1"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <div className="mt-6 glass rounded-xl p-3">
              <p className="font-mono text-xs text-slate-500 mb-1">LOCATION</p>
              <p className="text-sm text-slate-300">📍 Patna, Bihar, India</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800/50 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600 font-mono">
          <p>© {new Date().getFullYear()} Rahul Kumar. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Made with <Heart size={12} className="text-accent fill-accent" /> by Rahul Kumar
          </p>
        </div>
      </div>
    </footer>
  )
}
