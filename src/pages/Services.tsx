import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const catalog = [
  {
    id: 'enhance',
    title: 'Enhance',
    headline: 'Restore & Reveal True Clarity',
    desc: 'Remove years of imperfection from your paint. Swirls, scratches, and oxidation eliminated through precision machine polishing.',
    services: [
      { name: 'Paint Correction', desc: 'Multi-stage machine polish removing heavy swirl marks, deep scratches, and oxidation. Results in a flawless mirror finish.', price: 'From €350', duration: '1–2 Days', bestFor: 'Heavy Swirls & Fading' },
      { name: 'Gloss Enhancement', desc: 'Single-stage polish to amplify depth and clarity on well-maintained cars. Significant visual improvement in hours.', price: 'From €200', duration: '6–8 hrs', bestFor: 'Light Swirls' },
      { name: 'Premium Exterior Detail', desc: 'Thorough exterior decontamination, clay bar treatment, and protective sealant application.', price: 'From €160', duration: '4–6 hrs', bestFor: 'Routine Rejuvenation' },
    ],
  },
  {
    id: 'protect',
    title: 'Protect',
    headline: 'Preserve the Investment Long-Term',
    desc: 'Ceramic and film-based protection systems that lock in perfection, repel contamination, and guard against the harshest road conditions.',
    services: [
      { name: 'Ceramic Coating (5yr)', desc: 'Nano-ceramic protection permanently bonded to paint. Extreme hydrophobics, UV stability, and chemical resistance.', price: 'From €800', duration: '2 Days', bestFor: 'Long-Term Protection' },
      { name: 'PPF — Front Impact', desc: 'Optically clear polyurethane film protecting the most vulnerable impact zones. Self-healing in sunlight.', price: 'From €1,200', duration: '2–3 Days', bestFor: 'Highway & Stone Chips' },
      { name: 'Glass & Wheel Coating', desc: 'Dedicated ceramic coating for windscreen clarity and wheel contamination resistance.', price: 'From €250', duration: '1 Day', bestFor: 'Brake Dust & Rain' },
    ],
  },
  {
    id: 'maintain',
    title: 'Maintain',
    headline: 'Keep the Finish Immaculate',
    desc: 'Regular treatments that preserve your coating investment, maintain interior cleanliness, and keep your vehicle in showroom condition.',
    services: [
      { name: 'Maintenance Wash', desc: 'Safe two-bucket hand wash with premium pH-neutral detergents. Zero swirl risk. Protection topper applied.', price: 'From €80', duration: '2 hrs', bestFor: 'Weekly / Bi-Weekly' },
      { name: 'Interior Detail', desc: 'Full vacuum, hard surface wipe-down, glass purification, and air vent cleaning. Leave feeling clean.', price: 'From €120', duration: '3 hrs', bestFor: 'Monthly Refresh' },
      { name: 'Leather Care', desc: 'pH-balanced deep clean, dye revitalization, and nourishing conditioner to prevent cracking.', price: 'From €90', duration: '2 hrs', bestFor: 'Leather Preservation' },
    ],
  },
  {
    id: 'restore',
    title: 'Restore',
    headline: 'Bring Back What Was Lost',
    desc: 'Deep rehabilitation services for heavily neglected interiors, contaminated surfaces, and vehicles that need a complete reset before sale.',
    services: [
      { name: 'Deep Interior Extraction', desc: 'Hot water extraction of carpets, upholstery, and headlining. Removes embedded stains and organic odors completely.', price: 'From €200', duration: '4–6 hrs', bestFor: 'Spills, Odors, Kids' },
      { name: 'Headlight Restoration', desc: 'Multi-stage sanding, polishing, and ceramic sealing for oxidized headlights. Restores clarity and safety.', price: 'From €150', duration: '2 hrs', bestFor: 'Cloudy / Yellowed Lights' },
      { name: 'Pre-Sale Preparation', desc: 'Full interior and exterior refinement to maximize your vehicle\'s presentation and resale value.', price: 'From €350', duration: '1 Day', bestFor: 'Selling / Consignment' },
    ],
  },
];

export default function Services() {
  return (
    <div className="bg-[#050505]">

      {/* Header */}
      <section className="relative pt-40 pb-20 border-b border-[rgba(255,255,255,0.06)] overflow-hidden">
        {/* Visual Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=1920" 
            alt="Premium Detailing" 
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505]" />
          <div className="grain-overlay" />
        </div>
        
        <div className="site-container relative z-10">
          <span className="eyebrow">Our Disciplines</span>
          <h1 className="display-xl max-w-4xl">
            Mastery in<br />
            <span className="text-[#CFCFCF] font-light">every detail.</span>
          </h1>
        </div>
      </section>

      {/* Categories */}
      {catalog.map((cat, i) => (
        <section
          key={cat.id}
          className={`py-20 md:py-28 border-b border-[rgba(255,255,255,0.06)] ${i % 2 === 1 ? 'bg-[#0D0D0D]' : 'bg-[#050505]'}`}
        >
          <div className="site-container">
            {/* Category intro */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
              <div className="lg:col-span-1">
                <h2 className="display-md mb-3">{cat.title}</h2>
                <p className="text-[#CFCFCF] font-light text-sm mb-4">{cat.headline}</p>
                <p className="body-sm">{cat.desc}</p>
              </div>
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-px bg-[rgba(255,255,255,0.06)]">
                {cat.services.map(svc => (
                  <div key={svc.name} className="service-card bg-[#050505] group flex flex-col">
                    <div className="luxury-image-panel w-full h-32 mb-6" />
                    <div className="flex-grow">
                      <div className="label-xs mb-4 flex items-center gap-2">
                        <span className="w-4 h-px bg-[rgba(255,255,255,0.15)]" />
                        {svc.bestFor}
                      </div>
                      <h3 className="text-white font-semibold text-base mb-3">{svc.name}</h3>
                      <p className="body-sm text-xs leading-relaxed">{svc.desc}</p>
                    </div>
                    <div className="mt-8 pt-6 border-t border-[rgba(255,255,255,0.06)]">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <span className="label-xs block mb-1">From</span>
                          <span className="text-white font-semibold text-sm">{svc.price}</span>
                        </div>
                        <div className="text-right">
                          <span className="label-xs block mb-1">Time</span>
                          <span className="text-[#CFCFCF] text-sm">{svc.duration}</span>
                        </div>
                      </div>
                      <Link to="/smart-quote" className="flex items-center justify-between w-full text-[#8A8A8A] hover:text-white transition-colors text-xs font-medium uppercase tracking-widest group">
                        <span>Get Quote</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="py-24 text-center">
        <div className="site-container">
          <h2 className="display-md mb-4">Need a custom package?</h2>
          <p className="body-lead mb-8">Our advisor builds a plan tailored to your vehicle and goals.</p>
          <Link to="/smart-quote" className="btn-primary">Build Your Plan</Link>
        </div>
      </section>

    </div>
  );
}
