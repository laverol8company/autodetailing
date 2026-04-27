import { CheckCircle2 } from 'lucide-react';
import { WhatsAppCTA } from './WhatsAppCTA';

const packages = [
  {
    id: "essential",
    level: "Essential",
    price: "From €150",
    duration: "3-4 Hours",
    bestFor: "Basic care and deep cleaning",
    features: [
      "Premium hand wash & dry",
      "Wheels & tires deep clean",
      "Interior vacuum & wipe down",
      "Glass cleaning",
      "Spray wax application"
    ],
    highlighted: false
  },
  {
    id: "premium",
    level: "Premium",
    price: "From €450",
    duration: "1 Day",
    bestFor: "Deeper transformation & protection",
    badge: "Most Popular",
    features: [
      "Everything in Essential",
      "1-Step Paint Correction",
      "Engine bay detail",
      "Leather/Alcantara treatment",
      "6-Month sealant protection"
    ],
    highlighted: true
  },
  {
    id: "signature",
    level: "Signature",
    price: "From €900",
    duration: "2-3 Days",
    bestFor: "High-end full reset & ceramic",
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
    <section id="packages" className="py-20 bg-slate-900 border-y border-border/20">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Protection Packages</h2>
          <p className="text-muted max-w-2xl mx-auto">Comprehensive solutions designed to elevate and preserve your vehicle's condition.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {packages.map(pkg => (
            <div 
              key={pkg.id} 
              className={`rounded-2xl border p-8 flex flex-col relative ${
                pkg.highlighted 
                ? 'border-primary bg-card/80 shadow-2xl shadow-primary/10 scale-100 md:scale-105 z-10' 
                : 'border-border bg-card'
              }`}
            >
              {pkg.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                  {pkg.badge}
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-white mb-2">{pkg.level}</h3>
              <p className="text-sm text-slate-400 mb-6">{pkg.bestFor}</p>
              
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-white">{pkg.price.replace('From ', '')}</span>
                <span className="text-slate-400 text-sm ml-2">start</span>
              </div>
              
              <p className="text-sm border-b border-border/50 pb-4 mb-4 text-muted">Est. Duration: {pkg.duration}</p>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm text-slate-300">
                    <CheckCircle2 className={`h-5 w-5 mr-3 shrink-0 ${pkg.highlighted ? 'text-primary' : 'text-slate-500'}`} />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-col gap-3 mt-auto">
                <button className={`w-full py-3 rounded-lg font-medium transition-colors ${
                  pkg.highlighted 
                  ? 'bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/25' 
                  : 'bg-slate-800 text-white hover:bg-slate-700'
                }`}>
                  Select {pkg.level}
                </button>
                <WhatsAppCTA variant="outline" className="w-full text-xs" service={`${pkg.level} Package`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
