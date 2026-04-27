import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Shield, Droplets, Wrench } from 'lucide-react';

const categories = [
  {
    id: "enhance",
    title: "Enhance",
    subtitle: "Paint Correction & Refinement",
    icon: <Sparkles className="w-8 h-8 text-[#2563EB] mb-6" />,
    services: [
      { name: "Paint Correction", desc: "Removes heavy swirl marks, oxidation, and scratches to restore absolute clarity.", price: "From €350", duration: "1–2 Days", bestFor: "Heavy Swirls & Fading" },
      { name: "Gloss Enhancement", desc: "A single-stage machine polish to amplify gloss and clarity on well-maintained cars.", price: "From €200", duration: "6–8 Hrs", bestFor: "Light Swirls" },
      { name: "Premium Pre-Sale Detail", desc: "Full interior and exterior refinement to maximize your vehicle's resale value.", price: "From €400", duration: "1 Day", bestFor: "Selling" }
    ]
  },
  {
    id: "protect",
    title: "Protect",
    subtitle: "Ceramic & PPF Solutions",
    icon: <Shield className="w-8 h-8 text-[#2563EB] mb-6" />,
    services: [
      { name: "5-Year Ceramic Coating", desc: "Permanent adhesion protecting paint from UV, chemicals, and minor scratches.", price: "From €800", duration: "2 Days", bestFor: "Long-Term Protection" },
      { name: "Front Impact PPF", desc: "Clear protective film guarding the bumper, hood, and fenders from stone chips.", price: "From €1,200", duration: "3 Days", bestFor: "Highway Driving" },
      { name: "Wheels-Off Ceramic", desc: "Deep wheel cleaning and high-temp ceramic application inside the barrels and calipers.", price: "From €250", duration: "1 Day", bestFor: "Brake Dust Resistance" }
    ]
  },
  {
    id: "maintain",
    title: "Maintain",
    subtitle: "Regular Upkeep & Care",
    icon: <Droplets className="w-8 h-8 text-[#2563EB] mb-6" />,
    services: [
      { name: "Signature Maintenance Wash", desc: "Safe, two-bucket hand wash with premium pH-neutral chemicals and air dry.", price: "From €80", duration: "2 Hrs", bestFor: "Regular Care" },
      { name: "Interior Reset", desc: "Thorough vacuum, hard surface wipe down, and glass purification.", price: "From €120", duration: "3 Hrs", bestFor: "Monthly Refresh" },
      { name: "Leather Conditioning", desc: "Deep clean and nourishment to prevent cracking and restore matte finish.", price: "From €80", duration: "2 Hrs", bestFor: "Leather Integrity" }
    ]
  },
  {
    id: "restore",
    title: "Restore",
    subtitle: "Deep Rehabilitation",
    icon: <Wrench className="w-8 h-8 text-[#2563EB] mb-6" />,
    services: [
      { name: "Deep Interior Extraction", desc: "Wet extraction of carpets and seats to remove deep stains and odors.", price: "From €200", duration: "4 Hrs", bestFor: "Spills & Odors" },
      { name: "Headlight Restoration", desc: "Sanding and polishing oxidized lenses, followed by protective ceramic coating.", price: "From €150", duration: "2 Hrs", bestFor: "Cloudy Lights" },
      { name: "Engine Bay Detail", desc: "Safe degreasing and dressing of plastics under the hood.", price: "From €100", duration: "2 Hrs", bestFor: "Show Prep" }
    ]
  }
];

export default function Services() {
  return (
    <div className="flex flex-col bg-[#05070A]">
      {/* HEADER */}
      <section className="pt-24 pb-16 border-b border-white/5">
        <div className="premium-container max-w-3xl pl-4 md:pl-8">
          <span className="section-eyebrow">Our Disciplines</span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6">Mastery<br />In Every Detail.</h1>
          <p className="text-lg font-light text-[#9CA3AF] leading-relaxed">
            We don't just wash cars. We categorize our expertise into actionable outcomes: 
            Enhancing clarity, Protecting investments, Maintaining perfection, and Restoring dignity.
          </p>
        </div>
      </section>

      {/* CATEGORIES */}
      {categories.map((cat, idx) => (
        <section key={cat.id} className={`py-20 border-b border-white/5 ${idx % 2 !== 0 ? 'bg-[#0B0F14]' : 'bg-[#05070A]'}`}>
          <div className="premium-container">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
              
              {/* Category Sticky Header */}
              <div className="lg:w-1/3">
                <div className="sticky top-32">
                  {cat.icon}
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{cat.title}</h2>
                  <p className="text-[#9CA3AF] font-light text-base mb-8">{cat.subtitle}</p>
                </div>
              </div>
              
              {/* Service Cards */}
              <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                {cat.services.map((svc, sIdx) => (
                  <div key={sIdx} className="service-card-premium">
                    <div className="text-[10px] uppercase font-bold tracking-widest text-[#6B7280] mb-3 border-b border-white/5 pb-2">
                       Outcome: {svc.bestFor}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{svc.name}</h3>
                    <p className="text-[#9CA3AF] text-sm leading-relaxed mb-8 flex-grow font-light">{svc.desc}</p>
                    
                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                      <div>
                        <span className="block text-[10px] uppercase tracking-widest text-[#6B7280] mb-1">Start at</span>
                        <span className="text-white font-medium text-sm">{svc.price}</span>
                      </div>
                      <div className="text-right">
                         <span className="block text-[10px] uppercase tracking-widest text-[#6B7280] mb-1">Duration</span>
                         <span className="text-[#D8DEE9] font-medium text-sm">{svc.duration}</span>
                      </div>
                    </div>
                    
                    <Link to="/smart-quote" className="mt-6 flex items-center justify-center gap-2 w-full py-3 rounded border border-white/10 hover:border-white/30 text-white text-xs font-semibold uppercase tracking-widest transition-colors">
                      Get Quote <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>
      ))}

      {/* BOTTOM CTA */}
      <section className="py-24 text-center">
        <h2 className="text-2xl text-white font-bold mb-6">Need a custom package?</h2>
        <Link to="/smart-quote" className="premium-button-primary">Build Your Plan</Link>
      </section>

    </div>
  );
}
