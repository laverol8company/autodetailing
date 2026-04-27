import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const catalog = [
  {
    id: 'enhance',
    title: 'Enhance',
    headline: 'Restore & Reveal True Clarity',
    desc: 'Remove years of imperfection from your paint. Swirls, scratches, oxidation eliminated through precision machine polishing.',
    img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200&h=500',
    services: [
      { name: 'Paint Correction', desc: 'Multi-stage machine polish removing heavy swirl marks, deep scratches, and oxidation.', price: 'From €350', duration: '1–2 Days', bestFor: 'Heavy Swirls & Fading' },
      { name: 'Gloss Enhancement', desc: 'Single-stage polish to amplify depth and clarity on well-maintained cars.', price: 'From €200', duration: '6–8 hrs', bestFor: 'Light Swirls' },
      { name: 'Premium Exterior Detail', desc: 'Decontamination, clay bar treatment, and protective sealant application.', price: 'From €160', duration: '4–6 hrs', bestFor: 'Routine Rejuvenation' },
    ],
  },
  {
    id: 'protect',
    title: 'Protect',
    headline: 'Preserve the Investment Long-Term',
    desc: 'Ceramic and film-based protection systems that lock in perfection and guard against the harshest road conditions.',
    img: 'https://images.unsplash.com/photo-1600706432502-77a0e2e32790?auto=format&fit=crop&q=80&w=1200&h=500',
    services: [
      { name: 'Ceramic Coating (5yr)', desc: 'Nano-ceramic protection permanently bonded to paint. Extreme hydrophobics and UV stability.', price: 'From €800', duration: '2 Days', bestFor: 'Long-Term Protection' },
      { name: 'PPF — Front Impact', desc: 'Optically clear film protecting the most vulnerable impact zones. Self-healing in sunlight.', price: 'From €1,200', duration: '2–3 Days', bestFor: 'Highway & Stone Chips' },
      { name: 'Glass & Wheel Coating', desc: 'Dedicated ceramic for windscreen clarity and wheel contamination resistance.', price: 'From €250', duration: '1 Day', bestFor: 'Brake Dust & Rain' },
    ],
  },
  {
    id: 'maintain',
    title: 'Maintain',
    headline: 'Keep the Finish Immaculate',
    desc: 'Regular treatments that preserve your coating investment and keep your vehicle in showroom condition.',
    img: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=1200&h=500',
    services: [
      { name: 'Maintenance Wash', desc: 'Safe two-bucket hand wash with premium pH-neutral detergents. Zero swirl risk.', price: 'From €80', duration: '2 hrs', bestFor: 'Weekly / Bi-Weekly' },
      { name: 'Interior Detail', desc: 'Full vacuum, hard surface wipe-down, glass purification, and air vent cleaning.', price: 'From €120', duration: '3 hrs', bestFor: 'Monthly Refresh' },
      { name: 'Leather Care', desc: 'pH-balanced deep clean, dye revitalization, and nourishing conditioner.', price: 'From €90', duration: '2 hrs', bestFor: 'Leather Preservation' },
    ],
  },
  {
    id: 'restore',
    title: 'Restore',
    headline: 'Bring Back What Was Lost',
    desc: 'Deep rehabilitation for heavily neglected interiors, contaminated surfaces, and vehicles needing a complete reset.',
    img: 'https://images.unsplash.com/photo-1562141961-b8e6b67b3e5e?auto=format&fit=crop&q=80&w=1200&h=500',
    services: [
      { name: 'Deep Interior Extraction', desc: 'Hot water extraction of carpets and upholstery. Removes embedded stains and organic odors.', price: 'From €200', duration: '4–6 hrs', bestFor: 'Spills, Odors, Kids' },
      { name: 'Headlight Restoration', desc: 'Multi-stage sanding, polishing, and ceramic sealing for oxidized headlights.', price: 'From €150', duration: '2 hrs', bestFor: 'Cloudy / Yellowed Lights' },
      { name: 'Pre-Sale Preparation', desc: 'Full interior and exterior refinement to maximize presentation and resale value.', price: 'From €350', duration: '1 Day', bestFor: 'Selling / Consignment' },
    ],
  },
];

export default function Services() {
  return (
    <div className="bg-[#050505]">

      {/* Header hero */}
      <section className="relative pt-40 pb-20 border-b border-[rgba(255,255,255,0.06)] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1920"
            alt="Premium Detailing"
            className="w-full h-full object-cover opacity-25"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent" />
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
          className={`border-b border-[rgba(255,255,255,0.06)] ${i % 2 === 1 ? 'bg-[#0D0D0D]' : 'bg-[#050505]'}`}
        >
          {/* Real category image banner */}
          <div className="relative h-48 md:h-64 overflow-hidden">
            <img
              src={cat.img}
              alt={cat.title}
              className="w-full h-full object-cover opacity-60 saturate-[0.85]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
            <div className="absolute inset-0 flex items-end">
              <div className="site-container pb-6">
                <h2 className="display-md text-white">{cat.title}</h2>
                <p className="text-[#CFCFCF] font-light text-sm mt-1">{cat.headline}</p>
              </div>
            </div>
          </div>

          <div className="site-container py-12 md:py-16">
            <p className="body-sm max-w-xl mb-10">{cat.desc}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[rgba(255,255,255,0.06)]">
              {cat.services.map(svc => (
                <div key={svc.name} className="service-card bg-[#050505] group flex flex-col">
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
