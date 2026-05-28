export default function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="relative">
        {/* Outer rotating ring */}
        <div className="w-20 h-20 border-2 border-transparent rounded-full animate-spin-slow"
          style={{ borderTopColor: '#00ff88', borderRightColor: 'rgba(0,255,136,0.2)' }} />
        {/* Inner pulsing dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-primary animate-pulse-slow" />
        </div>
      </div>
      <div className="text-center">
        <p className="font-mono text-sm text-primary tracking-widest mb-4">
          &lt; Initializing... /&gt;
        </p>
        <div className="loading-bar">
          <div className="loading-bar-fill" />
        </div>
      </div>
      <p className="font-mono text-xs text-slate-500 tracking-wider">RAHUL KUMAR • PORTFOLIO</p>
    </div>
  )
}
