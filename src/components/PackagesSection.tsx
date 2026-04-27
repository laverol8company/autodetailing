import { CheckCircle2 } from 'lucide-react';
import { WhatsAppCTA } from './WhatsAppCTA';

const packages = [
  {
    id: "essential",
    level: "Essential",
    price: "From €150",
    duration: "3–4 Hours",
    bestFor: "Regular upkeep and refresh",
    features: [
      "Premium hand wash & dry",
      "Wheels & tyres deep clean",
      "Interior vacuum & wipe",
      "Glass cleaning",
      "Spray sealant application"
    ],
    highlighted: false
  },
  {
    id: "premium",
    level: "Premium",
    price: "From €450",
    duration: "1 Full Day",
    bestFor: "Deep restoration and protection",
    badge: "Most Popular",
    features: [
      "Everything in Essential",
      "1-Step Paint Correction",
      "Engine bay cleaning",
      "Leather & alcantara care",
      "6-Month protective sealant"
    ],
    highlighted: true
  },
  {
    id: "signature",
    level: "Signature",
    price: "From €900",
    duration: "2–3 Days",
    bestFor: "Full reset with ceramic coating",
    features: [
      "Everything in Premium",
      "Multi-stage Paint Correction",
      "5-Year Ceramic Coating",
      "Wheels-off coating",
      "Interior carpet extraction"
    ],
    highlighted: false
  }
];

export function PackagesSection() {
  return (
    <section id="packages" className="premium-section-graphite">
      <div className="premium-container">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="section-eyebrow justify-center">Protection Packages</span>
          <h2 className="section-title">One Package, Total Peace of Mind</h2>
          <p className="section-subtitle mx-auto">Bundled solutions designed to restore, protect, and preserve your vehicle's condition long-term.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {packages.map(pkg => (
            <div
              key={pkg.id}
              className={`relative rounded-2xl border flex flex-col p-8 transition-all duration-300 ${
                pkg.highlighted
                  ? 'border-[#2563EB]/50 bg-[#0f1929] shadow-2xl shadow-[#2563EB]/10'
                  : 'border-white/5 bg-[#0c111a]'
              }`}
            >
              {pkg.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#2563EB] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  {pkg.badge}
                </div>
              )}

              <div className="mb-1 text-[10px] font-bold uppercase tracking-widest text-[#6B7280]">{pkg.bestFor}</div>
              <h3 className="text-xl font-bold text-white mb-3">{pkg.level}</h3>

              <div className="mb-6">
                <span className="text-3xl font-extrabold text-white">{pkg.price.replace('From ', '')}</span>
                <span className="text-[#6B7280] text-xs ml-1.5">start</span>
              </div>

              <p className="text-xs text-[#6B7280] border-b border-white/5 pb-4 mb-5">Estimated: {pkg.duration}</p>

              <ul className="space-y-3 mb-8 flex-grow">
                {pkg.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-[#D8DEE9]">
                    <CheckCircle2 className={`h-4 w-4 shrink-0 mt-0.5 ${pkg.highlighted ? 'text-[#2563EB]' : 'text-[#6B7280]'}`} />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-2.5 mt-auto">
                <a
                  href="#quote"
                  className={`w-full text-center py-3 rounded-lg text-sm font-semibold transition-colors ${
                    pkg.highlighted
                      ? 'bg-[#2563EB] text-white hover:bg-[#1D4ED8] shadow-lg shadow-[#2563EB]/20'
                      : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                  }`}
                >
                  Select {pkg.level}
                </a>
                <WhatsAppCTA variant="outline" className="w-full justify-center py-2 text-xs" service={`${pkg.level} Package`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
