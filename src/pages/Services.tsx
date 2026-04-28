import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { RevealText, FadeUp, LineReveal } from '../components/Reveal';

const CATEGORIES = [
  {
    id: 'enhance',
    label: '01',
    name: 'Enhance',
    tagline: 'Paint Correction & Gloss Refinement',
    desc: 'We remove the evidence of time — swirl marks, light scratches, and oxidation — restoring your paint to a mirror-perfect finish.',
    img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1400',
    services: [
      { name: 'Single Stage Polish', detail: 'Removes light swirls & restores gloss', price: 'from €180' },
      { name: 'Two Stage Correction', detail: 'Eliminates 80%+ of defects', price: 'from €350' },
      { name: 'Full Paint Correction', detail: 'Complete defect removal + prep', price: 'from €650' },
      { name: 'Gloss Enhancement', detail: 'Panel refinement without full correction', price: 'from €120' },
    ],
  },
  {
    id: 'protect',
    label: '02',
    name: 'Protect',
    tagline: 'Ceramic Coating & Paint Film',
    desc: 'Nano-ceramic and polymer protection that bonds to your clear coat — repelling contaminants, UV, and the elements for years.',
    img: 'https://images.unsplash.com/photo-1600706432502-77a0e2e32790?auto=format&fit=crop&q=80&w=1400',
    services: [
      { name: 'Entry Ceramic (1yr)', detail: 'Hydrophobic base protection', price: 'from €280' },
      { name: 'Premium Ceramic (3yr)', detail: '9H hardness, deep gloss', price: 'from €550' },
      { name: 'Signature Ceramic (5yr)', detail: 'Maximum protection, warranty', price: 'from €950' },
      { name: 'PPF Front Impact', detail: 'Self-healing film on high-impact zones', price: 'from €800' },
    ],
  },
  {
    id: 'maintain',
    label: '03',
    name: 'Maintain',
    tagline: 'Preservation & Upkeep',
    desc: 'Between sessions, your car deserves the same meticulous care. Our maintenance protocols keep protection active and paint flawless.',
    img: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=1400',
    services: [
      { name: 'Signature Wash', detail: 'Safe two-bucket wash + dry + dressing', price: 'from €80' },
      { name: 'Full Interior Detail', detail: 'Deep clean, leather & fabric care', price: 'from €180' },
      { name: 'Maintenance Package', detail: 'Quarterly upkeep + inspection', price: 'from €240' },
      { name: 'Decontamination', detail: 'Iron & tar removal, clay bar', price: 'from €120' },
    ],
  },
  {
    id: 'restore',
    label: '04',
    name: 'Restore',
    tagline: 'Deep Rehabilitation',
    desc: 'When a vehicle has been neglected or damaged, we bring it back. Interior extraction, odour elimination, full rehabilitation.',
    img: 'https://images.unsplash.com/photo-1611821064430-0d40291d0f0b?auto=format&fit=crop&q=80&w=1400',
    services: [
      { name: 'Interior Extraction', detail: 'Seat, carpet & panel deep clean', price: 'from €220' },
      { name: 'Odour Elimination', detail: 'Ozone + enzyme treatment', price: 'from €160' },
      { name: 'Headlight Restoration', detail: 'UV polish + sealant', price: 'from €80' },
      { name: 'Pre-Sale Preparation', detail: 'Full inspection + detail package', price: 'from €350' },
    ],
  },
];

export default function Services() {
  return (
    <div className="bg-[var(--black)]">

      {/* Page header */}
      <section className="relative pt-40 pb-24 border-b border-[var(--border)] overflow-hidden">
        <div className="site-container">
          <FadeUp>
            <p className="type-label mb-6">What We Do</p>
          </FadeUp>
          <RevealText as="h1" className="type-display max-w-3xl">
            Bespoke Services
          </RevealText>
          <RevealText as="h1" className="type-display max-w-3xl mb-10" delay={0.1}>
            <em>for demanding clients.</em>
          </RevealText>
          <LineReveal delay={0.4} className="max-w-xs mb-10" />
          <FadeUp delay={0.3} className="max-w-lg">
            <p className="type-lead">
              Four disciplines. One standard — flawless.
              Every service is performed by appointment with full technician dedication.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Service categories — full-bleed alternating */}
      {CATEGORIES.map((cat, i) => (
        <section
          key={cat.id}
          id={cat.id}
          className="border-b border-[var(--border)]"
        >
          {/* Image banner */}
          <div className="relative h-[50vh] min-h-[360px] overflow-hidden">
            <img
              src={cat.img}
              alt={cat.name}
              className="w-full h-full object-cover saturate-75"
              loading={i === 0 ? 'eager' : 'lazy'}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--black)] via-[rgba(0,0,0,0.4)] to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--black)] via-transparent to-transparent" />

            {/* Category title overlay */}
            <div className="absolute bottom-0 left-0 site-container pb-10">
              <span className="type-label mb-2 block">{cat.label}</span>
              <h2 className="type-display text-4xl md:text-6xl">{cat.name}</h2>
            </div>
          </div>

          {/* Details */}
          <div className="site-container py-16 md:py-20">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Left */}
              <FadeUp>
                <p className="type-label mb-4">{cat.tagline}</p>
                <p className="type-lead mb-8">{cat.desc}</p>
                <Link to="/booking" className="btn-primary">
                  <span>Book This Service</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </FadeUp>

              {/* Right — service list */}
              <div>
                {cat.services.map((svc, si) => (
                  <FadeUp key={svc.name} delay={si * 0.08}>
                    <div className="flex items-start justify-between py-5 border-b border-[var(--border)] group">
                      <div>
                        <h3 className="text-white text-sm font-medium mb-1 group-hover:text-[var(--cyan)] transition-colors">
                          {svc.name}
                        </h3>
                        <p className="type-body text-xs">{svc.detail}</p>
                      </div>
                      <span className="type-label ml-6 whitespace-nowrap text-[10px]">{svc.price}</span>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="py-32">
        <div className="site-container text-center">
          <RevealText as="h2" className="type-display mb-10">
            Not sure which service?
          </RevealText>
          <FadeUp delay={0.2} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/smart-quote" className="btn-primary">
              <span>Start Smart Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/booking" className="btn-ghost">
              Book Consultation
            </Link>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
