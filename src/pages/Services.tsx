import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { RevealText, FadeUp, LineReveal } from '../components/Reveal';

const CATEGORIES = [
  {
    id: 'enhance',
    label: '01',
    name: 'Enhance',
    tagline: 'Paint Correction & Gloss Refinement',
    outcome: 'Mirror-perfect finish. Swirls and scratches removed.',
    bestFor: 'Vehicles with dull paint, swirl marks, or light scratches from improper washing.',
    desc: 'We remove the evidence of time — swirl marks, light scratches, and oxidation — restoring your paint to a mirror-perfect finish.',
    img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1400',
    imgPosition: 'center 60%',
    services: [
      { name: 'Single Stage Polish',   detail: 'Removes light swirls & restores gloss', price: '€180', duration: '4–6h' },
      { name: 'Two Stage Correction',  detail: 'Eliminates 80%+ of defects',              price: '€350', duration: '1 day' },
      { name: 'Full Paint Correction', detail: 'Complete defect removal + prep',           price: '€650', duration: '2 days' },
      { name: 'Gloss Enhancement',     detail: 'Panel refinement without full correction', price: '€120', duration: '2–3h' },
    ],
  },
  {
    id: 'protect',
    label: '02',
    name: 'Protect',
    tagline: 'Ceramic Coating & Paint Film',
    outcome: 'Years of hydrophobic protection. UV resistance. Self-cleaning surface.',
    bestFor: 'New or freshly corrected vehicles whose owners want long-term protection.',
    desc: 'Nano-ceramic and polymer protection that bonds to your clear coat — repelling contaminants, UV, and the elements for years.',
    img: 'https://images.unsplash.com/photo-1600706432502-77a0e2e32790?auto=format&fit=crop&q=80&w=1400',
    imgPosition: 'center 50%',
    services: [
      { name: 'Entry Ceramic (1yr)',    detail: 'Hydrophobic base protection',         price: '€280',  duration: '1 day' },
      { name: 'Premium Ceramic (3yr)', detail: '9H hardness, deep gloss',              price: '€550',  duration: '1–2 days' },
      { name: 'Signature Ceramic (5yr)', detail: 'Maximum protection, warranty',       price: '€950',  duration: '2 days' },
      { name: 'PPF Front Impact',       detail: 'Self-healing film on high-impact zones', price: '€800', duration: '1–2 days' },
    ],
  },
  {
    id: 'maintain',
    label: '03',
    name: 'Maintain',
    tagline: 'Preservation & Upkeep',
    outcome: 'Consistently clean, protected, and showroom-ready.',
    bestFor: 'Coated or corrected vehicles requiring regular professional upkeep.',
    desc: 'Between sessions, your car deserves the same meticulous care. Our maintenance protocols keep protection active and paint flawless.',
    img: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=1400',
    imgPosition: 'center 40%',
    services: [
      { name: 'Signature Wash',         detail: 'Safe two-bucket wash + dry + dressing',   price: '€80',  duration: '2–3h' },
      { name: 'Full Interior Detail',   detail: 'Deep clean, leather & fabric care',       price: '€180', duration: '4–6h' },
      { name: 'Maintenance Package',    detail: 'Quarterly upkeep + inspection',            price: '€240', duration: '4–5h' },
      { name: 'Decontamination',        detail: 'Iron & tar removal, clay bar',            price: '€120', duration: '2–3h' },
    ],
  },
  {
    id: 'restore',
    label: '04',
    name: 'Restore',
    tagline: 'Deep Rehabilitation',
    outcome: 'Interior refreshed. Surface rehabilitated. Ready for sale or daily use.',
    bestFor: 'Neglected, high-mileage, or pre-sale vehicles requiring thorough rehabilitation.',
    desc: 'When a vehicle has been neglected or damaged, we bring it back. Interior extraction, odour elimination, full rehabilitation.',
    img: 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&q=80&w=1400',
    imgPosition: 'center 35%',
    services: [
      { name: 'Interior Extraction',    detail: 'Seat, carpet & panel deep clean',     price: '€220', duration: '5–7h' },
      { name: 'Odour Elimination',      detail: 'Ozone + enzyme treatment',             price: '€160', duration: '3–4h' },
      { name: 'Headlight Restoration',  detail: 'UV polish + sealant',                  price: '€80',  duration: '1–2h' },
      { name: 'Pre-Sale Preparation',   detail: 'Full inspection + detail package',     price: '€350', duration: '1–2 days' },
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
          <div className="relative h-[55vh] min-h-[400px] overflow-hidden">
            <img
              src={cat.img}
              alt={cat.name}
              style={{ objectPosition: cat.imgPosition }}
              className="w-full h-full object-cover"
              loading={i === 0 ? 'eager' : 'lazy'}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--black)] via-[rgba(0,0,0,0.35)] to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--black)] via-transparent to-transparent" />

            {/* Category title overlay */}
            <div className="absolute bottom-0 left-0 site-container pb-10">
              <span className="type-label mb-2 block">{cat.label}</span>
              <h2 className="type-display" style={{ fontSize: 'clamp(2.5rem, 8vw, 5.5rem)' }}>{cat.name}</h2>
            </div>
          </div>

          {/* Details */}
          <div className="site-container py-16 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Left */}
              <FadeUp>
                <p className="type-label mb-3">{cat.tagline}</p>

                {/* Outcome */}
                <p className="text-white font-medium text-base mb-3 leading-snug">{cat.outcome}</p>
                <p className="type-body mb-4">{cat.desc}</p>

                {/* Best for */}
                <div className="border-l-2 border-[var(--cyan)] pl-4 mb-8">
                  <p className="type-label mb-1 text-[var(--white-dim)]" style={{ fontSize: '0.6rem' }}>Best for</p>
                  <p className="type-body text-sm">{cat.bestFor}</p>
                </div>

                <Link to="/smart-quote" className="btn-primary">
                  <span>Get a Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </FadeUp>

              {/* Right — service list */}
              <div>
                {cat.services.map((svc, si) => (
                  <FadeUp key={svc.name} delay={si * 0.08}>
                    <div className="py-5 border-b border-[var(--border)] group">
                      <div className="flex items-start justify-between gap-4 mb-1">
                        <h3 className="text-white text-sm font-medium group-hover:text-[var(--cyan)] transition-colors flex-1">
                          {svc.name}
                        </h3>
                        {/* Price — large and prominent */}
                        <div className="text-right flex-shrink-0">
                          <p style={{ color: 'var(--white-dim)', fontSize: '0.55rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '2px' }}>from</p>
                          <p style={{ color: 'var(--cyan)', fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', lineHeight: 1 }}>
                            {svc.price}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="type-body text-xs">{svc.detail}</p>
                        <span className="type-label text-[var(--white-dim)] ml-4" style={{ fontSize: '0.6rem' }}>{svc.duration}</span>
                      </div>
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
