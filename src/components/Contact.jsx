import { useState } from 'react'
import { Mail, Phone, Github, Linkedin, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass = `
    w-full bg-dark-800 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 text-sm
    font-mono placeholder:text-slate-600 outline-none
    focus:border-primary/50 focus:ring-1 focus:ring-primary/20
    transition-all duration-300
  `

  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="reveal font-mono text-xs text-primary tracking-widest mb-4">// 07. CONTACT</div>
        <h2 className="reveal section-title text-slate-100 mb-4">
          Let&apos;s <span className="gradient-text">Connect</span>
        </h2>
        <p className="reveal text-slate-500 font-mono text-sm mb-12 max-w-md">
          Have a project in mind or want to collaborate? I&apos;m open to new opportunities.
        </p>

        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: Mail, label: 'Email', value: 'rahulkumarkanpdigital@gmail.com', href: 'mailto:rahulkumarkanpdigital@gmail.com', color: '#00ff88' },
              { icon: Phone, label: 'Phone', value: '+91 9006347510', href: 'tel:+919006347510', color: '#0066ff' },
              { icon: Github, label: 'GitHub', value: 'github.com/Rahulkumar622', href: 'https://github.com/Rahulkumar622', color: '#8b5cf6' },
              { icon: Linkedin, label: 'LinkedIn', value: 'Rahul Kumar', href: 'https://www.linkedin.com/in/rahul-kumar-475156360', color: '#f59e0b' },
            ].map(({ icon: Icon, label, value, href, color }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="reveal glass rounded-xl p-4 flex items-center gap-4 card-glow glass-hover group"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${color}12`, border: `1px solid ${color}25` }}
                >
                  <Icon size={18} style={{ color }} />
                </div>
                <div>
                  <p className="font-mono text-xs text-slate-500">{label}</p>
                  <p className="text-sm text-slate-200 font-semibold">{value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="lg:col-span-3 reveal">
            {status === 'sent' ? (
              <div className="glass rounded-2xl p-8 flex flex-col items-center justify-center text-center h-full min-h-64 card-glow">
                <CheckCircle size={48} className="text-primary mb-4" />
                <h3 className="text-xl font-bold text-slate-100 mb-2">Message Sent!</h3>
                <p className="text-slate-400 text-sm">Thank you for reaching out. I will get back to you soon.</p>
                <button onClick={() => setStatus('idle')} className="btn-outline mt-6 text-sm py-2 px-5">
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 md:p-8 card-glow space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-mono text-xs text-slate-500 block mb-2">NAME *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="font-mono text-xs text-slate-500 block mb-2">EMAIL *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className={inputClass}
                    />
                  </div>
                </div>
                <div>
                  <label className="font-mono text-xs text-slate-500 block mb-2">MESSAGE *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className={inputClass}
                    style={{ resize: 'none' }}
                  />
                </div>
                {status === 'error' && (
                  <p className="font-mono text-xs text-red-400">
                    Something went wrong. Please email me directly at rahulkumarkanpdigital@gmail.com
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary w-full justify-center"
                >
                  <Send size={16} />
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
                <p className="font-mono text-xs text-slate-600 text-center">
                  * Replace YOUR_FORM_ID in Contact.jsx with your Formspree ID to activate.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
