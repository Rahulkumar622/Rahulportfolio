import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = ['About', 'Skills', 'Projects', 'Certifications', 'Experience', 'Contact']

export default function Navbar({ scrollY }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const isScrolled = scrollY > 60

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'glass py-3 shadow-lg' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-mono text-sm font-bold tracking-wider text-primary hover:glow-text transition-all"
          >
            &lt;RK /&gt;
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <li key={link}>
                <button
                  onClick={() => scrollTo(link)}
                  className="font-mono text-xs tracking-widest text-slate-400 hover:text-primary transition-colors uppercase"
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="https://github.com/Rahulkumar622"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex btn-outline text-xs py-2 px-4"
          >
            GitHub ↗
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-primary p-2"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="mobile-menu">
          <button
            className="absolute top-6 right-6 text-slate-400 hover:text-primary"
            onClick={() => setMenuOpen(false)}
          >
            <X size={26} />
          </button>
          <div className="font-mono text-xs text-primary tracking-widest mb-4">&lt;Navigation /&gt;</div>
          {links.map((link, i) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-2xl font-bold text-slate-200 hover:text-primary transition-colors tracking-tight"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {link}
            </button>
          ))}
          <a
            href="https://github.com/Rahulkumar622"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-4"
          >
            GitHub ↗
          </a>
        </div>
      )}
    </>
  )
}
