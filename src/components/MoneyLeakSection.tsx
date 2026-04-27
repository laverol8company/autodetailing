const problems = [
  {
    icon: "❓",
    title: "Visitors don't know what they need",
    desc: "They scroll your page, can't find the right service, and leave without enquiring."
  },
  {
    icon: "💬",
    title: '"How much?" — then they disappear',
    desc: "Unqualified enquiries waste your time and rarely convert into booked appointments."
  },
  {
    icon: "📲",
    title: "Leads get lost in WhatsApp & DMs",
    desc: "No structure, no follow-up system, no way to track what happened to each request."
  },
  {
    icon: "📦",
    title: "Premium packages are invisible",
    desc: "Your best services aren't presented. Clients default to the cheapest option — or leave."
  }
];

export function MoneyLeakSection() {
  return (
    <section className="premium-section-graphite border-y border-white/5">
      <div className="premium-container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-eyebrow justify-center">The Problem</span>
          <h2 className="section-title">Where Detailing Studios Lose Premium Leads</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {problems.map((p, i) => (
            <div key={i} className="glass-panel flex flex-col gap-3">
              <span className="text-2xl">{p.icon}</span>
              <h3 className="text-sm font-bold text-white leading-snug">{p.title}</h3>
              <p className="text-xs text-[#6B7280] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Resolution card */}
        <div className="relative rounded-2xl border border-[#2563EB]/20 bg-[#0f1929] px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB]/5 to-transparent pointer-events-none" />
          <div className="relative">
            <p className="text-sm font-semibold text-[#D8DEE9] max-w-lg leading-relaxed">
              This system fixes that — guiding every visitor through a smart service advisor, into a qualified quote, and delivering a structured lead directly to you.
            </p>
          </div>
          <a href="#quiz" className="relative premium-button-primary shrink-0 px-6 py-3 text-sm whitespace-nowrap">
            See How It Works
          </a>
        </div>
      </div>
    </section>
  );
}
