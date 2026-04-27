import { ChevronRight } from 'lucide-react';
import { WhatsAppCTA } from './WhatsAppCTA';

const services = [
  {
    id: "exterior",
    title: "Exterior Detailing",
    description: "Deep clean and decontamination restoring your paint's clarity and shine.",
    duration: "2–3 hrs",
    price: "From €100",
    bestFor: "Regular Maintenance"
  },
  {
    id: "paint-correction",
    title: "Paint Correction",
    description: "Remove swirl marks, oxidation, and hazing for a deep gloss finish.",
    duration: "6–8 hrs",
    price: "From €300",
    bestFor: "Swirl & Scratch Removal"
  },
  {
    id: "ceramic",
    title: "Ceramic Coating",
    description: "Long-lasting hydrophobic protection. Self-cleaning, UV resistant, lasting 2–5 years.",
    duration: "8–12 hrs",
    price: "From €500",
    bestFor: "Long-Term Protection"
  },
  {
    id: "ppf",
    title: "PPF / Paint Protection",
    description: "Invisible armor against stone chips, road debris, and fine scratches.",
    duration: "10–24 hrs",
    price: "From €800",
    bestFor: "New or High-Value Cars"
  },
  {
    id: "interior",
    title: "Interior Detailing",
    description: "Deep vacuum, leather conditioning, and full cabin refresh.",
    duration: "3–5 hrs",
    price: "From €150",
    bestFor: "Comfort Restoration"
  },
  {
    id: "tinting",
    title: "Window Tinting",
    description: "Block UV, reduce heat, and enhance privacy with premium films.",
    duration: "3–4 hrs",
    price: "From €200",
    bestFor: "Comfort & Privacy"
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="premium-section-dark">
      <div className="premium-container">
        <div className="max-w-xl mb-12">
          <span className="section-eyebrow">What we do</span>
          <h2 className="section-title">Premium Services</h2>
          <p className="section-subtitle">Each service is focused on a specific outcome for your vehicle. Choose one or combine them into a package.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map(service => (
            <div key={service.id} className="premium-card-dark group flex flex-col">
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#2563EB] mb-3">
                {service.bestFor}
              </div>
              <h3 className="text-base font-bold text-white mb-2">{service.title}</h3>
              <p className="text-sm text-[#6B7280] mb-6 flex-grow leading-relaxed">{service.description}</p>

              <div className="flex items-center justify-between border-t border-white/5 pt-4 mb-4">
                <span className="text-white font-semibold text-sm">{service.price}</span>
                <span className="text-[#6B7280] text-xs">{service.duration}</span>
              </div>

              <div className="flex flex-col gap-2 mt-auto">
                <a href="#quote" className="w-full flex items-center justify-center gap-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#2563EB]/30 text-white text-xs font-medium py-2 transition-all">
                  Get Quote <ChevronRight className="h-3.5 w-3.5 text-[#6B7280] group-hover:text-white" />
                </a>
                <WhatsAppCTA variant="ghost" className="w-full py-2 text-xs justify-center" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
