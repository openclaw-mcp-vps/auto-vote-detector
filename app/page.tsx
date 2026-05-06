export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Platform Security
        </span>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Detect Suspicious Voting Patterns
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Analyze voting data through REST endpoints and get instant risk scores with detailed reports on bots, coordinated manipulation, and fake engagement.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Get Started — $29/mo
        </a>
        <div className="mt-10 grid grid-cols-3 gap-6 text-center">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
            <div className="text-2xl font-bold text-[#58a6ff]">99.2%</div>
            <div className="text-xs text-[#8b949e] mt-1">Detection Accuracy</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
            <div className="text-2xl font-bold text-[#58a6ff]">&lt;50ms</div>
            <div className="text-xs text-[#8b949e] mt-1">API Response Time</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
            <div className="text-2xl font-bold text-[#58a6ff]">10M+</div>
            <div className="text-xs text-[#8b949e] mt-1">Votes Analyzed</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$29</div>
          <div className="text-[#8b949e] text-sm mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Unlimited API calls',
              'Real-time risk scoring',
              'Bot network detection',
              'Coordinated manipulation alerts',
              'Detailed JSON reports',
              'Email support'
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <h3 className="font-semibold text-white mb-2">How does the detection work?</h3>
            <p className="text-[#8b949e] text-sm">Our ML algorithms analyze voting velocity, account age, IP clustering, and behavioral patterns to assign a risk score from 0–100 for each voting event.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <h3 className="font-semibold text-white mb-2">What platforms does it support?</h3>
            <p className="text-[#8b949e] text-sm">Any platform that can send HTTP requests. We provide a REST API that works with forums, social networks, review sites, polling apps, and more.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <h3 className="font-semibold text-white mb-2">Can I cancel anytime?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Cancel your subscription at any time from your dashboard. No contracts, no cancellation fees.</p>
          </div>
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs">
        &copy; {new Date().getFullYear()} Auto Vote Detector. All rights reserved.
      </footer>
    </main>
  )
}
