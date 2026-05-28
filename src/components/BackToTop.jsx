import { ArrowUp } from 'lucide-react'

export default function BackToTop({ scrollY }) {
  if (scrollY < 400) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-8 z-50 w-11 h-11 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-primary/30"
      style={{ background: 'linear-gradient(135deg, #00ff88, #0066ff)' }}
      aria-label="Back to top"
    >
      <ArrowUp size={18} className="text-dark-900 font-bold" />
    </button>
  )
}
