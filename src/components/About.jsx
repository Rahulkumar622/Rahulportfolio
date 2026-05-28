import { MapPin, GraduationCap, Code2, Heart } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <div className="reveal font-mono text-xs text-primary tracking-widest mb-4">// 01. ABOUT_ME</div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <h2 className="reveal section-title text-slate-100 mb-6">
              Building things for the{' '}
              <span className="gradient-text">digital world</span>
            </h2>

            <p className="reveal text-slate-400 leading-relaxed text-lg mb-6">
              I'm a passionate and self-driven IT student currently pursuing{' '}
              <span className="text-slate-200 font-semibold">B.Sc. Information Technology</span> from
              Patliputra University. I enjoy frontend development, UI/UX design, and building
              responsive web applications that make an impact.
            </p>

            <p className="reveal text-slate-400 leading-relaxed mb-8">
              I've built experience creating portfolio websites, NGO platforms, and management systems
              while continuously learning modern technologies and AI tools. Every project is an
              opportunity to push the boundaries of what's possible.
            </p>

            {/* Info cards */}
            <div className="reveal grid sm:grid-cols-2 gap-4">
              <div className="glass rounded-xl p-4 flex items-start gap-3 glass-hover card-glow">
                <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-mono text-slate-500 mb-1">LOCATION</p>
                  <p className="text-sm text-slate-200 font-semibold">Patna, Bihar, India</p>
                </div>
              </div>
              <div className="glass rounded-xl p-4 flex items-start gap-3 glass-hover card-glow">
                <GraduationCap size={18} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-mono text-slate-500 mb-1">EDUCATION</p>
                  <p className="text-sm text-slate-200 font-semibold">B.Sc. IT</p>
                  <p className="text-xs text-slate-500">Patliputra University</p>
                </div>
              </div>
              <div className="glass rounded-xl p-4 flex items-start gap-3 glass-hover card-glow">
                <Code2 size={18} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-mono text-slate-500 mb-1">FOCUS</p>
                  <p className="text-sm text-slate-200 font-semibold">Frontend Dev</p>
                  <p className="text-xs text-slate-500">React · Tailwind</p>
                </div>
              </div>
              <div className="glass rounded-xl p-4 flex items-start gap-3 glass-hover card-glow">
                <Heart size={18} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-mono text-slate-500 mb-1">BATCH</p>
                  <p className="text-sm text-slate-200 font-semibold">2023 – 2026</p>
                  <p className="text-xs text-slate-500">3rd Year Student</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="reveal flex justify-center">
            <div className="relative">
              {/* Spinning border */}
              <div
                className="w-72 h-72 rounded-full border border-primary/20 animate-spin-slow absolute inset-0 -m-6"
                style={{ borderStyle: 'dashed' }}
              />
              {/* Card */}
              <div className="w-72 h-72 glass rounded-2xl p-6 flex flex-col items-center justify-center text-center relative z-10 card-glow">
                {/* Avatar initials */}
                <div className="w-24 h-24 rounded-full flex items-center justify-center mb-4 text-3xl font-bold text-dark-900"
                  style={{ background: 'linear-gradient(135deg, #00ff88, #0066ff)' }}>
                  RK
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-1">Rahul Kumar</h3>
                <p className="font-mono text-xs text-primary mb-4">Software Developer</p>
                <div className="flex gap-2">
                  {['React', 'Tailwind', 'JS'].map((t) => (
                    <span key={t} className="tech-badge">{t}</span>
                  ))}
                </div>
              </div>
              {/* Floating dots */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full animate-pulse-slow" />
              <div className="absolute -bottom-4 -left-4 w-3 h-3 bg-secondary rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
