import { ChevronRight } from 'lucide-react';
import { WhatsAppCTA } from './WhatsAppCTA';

const services = [
  {
    id: "exterior",
    title: "Exterior Detailing",
    description: "Deep clean and restoration of exterior surfaces, removing contaminants.",
    duration: "2-3 hours",
    price: "From €100",
    bestFor: "Regular Maintenance"
  },
  {
    id: "paint-correction",
    title: "Paint Correction",
    description: "Restore gloss and remove swirl marks for a deeper, cleaner finish.",
    duration: "6-8 hours",
    price: "From €300",
    bestFor: "Swirl Marks & Haze"
  },
  {
    id: "ceramic",
    title: "Ceramic Coating",
    description: "Long-lasting hydrophobic protection against elements and minor scratches.",
    duration: "8-12 hours",
    price: "From €500",
    bestFor: "Long-term Protection"
  },
  {
    id: "ppf",
    title: "Paint Protection Film",
    description: "Invisible shield against rock chips, scratches, and road debris.",
    duration: "10-24 hours",
    price: "From €800",
    bestFor: "New Vehicles"
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Premium Services</h2>
          <p className="text-muted max-w-2xl mx-auto">Select the perfect treatment to restore and protect your vehicle.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(service => (
            <div key={service.id} className="rounded-xl border border-border bg-card p-6 flex flex-col hover:border-primary/50 transition-colors group">
              <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-primary">
                {service.bestFor}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-sm text-slate-400 mb-6 flex-grow">{service.description}</p>
              
              <div className="flex items-center justify-between text-sm mb-6 border-t border-border pt-4">
                <span className="text-white font-medium">{service.price}</span>
                <span className="text-muted">{service.duration}</span>
              </div>
              
              <div className="flex flex-col gap-2 mt-auto">
                <button className="w-full flex items-center justify-center text-sm font-medium bg-slate-800 hover:bg-slate-700 text-white rounded-md py-2 transition-colors">
                  Get Quote <ChevronRight className="ml-1 h-4 w-4 text-slate-400 group-hover:text-white" />
                </button>
                <WhatsAppCTA variant="outline" className="w-full h-9 py-1 text-xs" service={service.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
