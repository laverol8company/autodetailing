import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { WhatsAppCTA } from '../components/WhatsAppCTA';

const PATHS = [
  { title: 'I Need a Quote', desc: 'Get an instant estimation through our guided 4-step advisor.', to: '/smart-quote', num: '01' },
  { title: 'I Know the Service', desc: 'Browse our full catalog of detailing and protection services.', to: '/services', num: '02' },
  { title: 'I Want to Book', desc: 'Request a specific appointment slot directly.', to: '/booking', num: '03' },
  { title: "I'm Not Sure", desc: 'Answer a few questions — we recommend the right service.', to: '/smart-quote', num: '04' },
];

const SERVICES = [
  {
    name: 'Enhance',
    sub: 'Paint Correction & Gloss',
    detail: 'Remove swirl marks, oxidation, and dullness through multi-stage machine polishing.',
    examples: ['Paint Correction', 'Gloss Enhancement', 'Panel Preparation'],
  },
  {
    name: 'Protect',
    sub: 'Coating & Film',
    detail: 'Ceramic and film protection systems that guard paint from the harshest road conditions.',
    examples: ['Ceramic Coating', 'PPF', 'Glass Coating'],
  },
  {
    name: 'Maintain',
    sub: 'Upkeep & Care',
    detail: 'Regular treatments that preserve your coating investment and interior quality.',
    examples: ['Premium Wash', 'Interior Detail', 'Leather Care'],
  },
  {
    name: 'Restore',
    sub: 'Deep Rehabilitation',
    detail: 'Complete reset for heavily neglected interiors, stained upholstery, or pre-sale prep.',
    examples: ['Interior Extraction', 'Odor Removal', 'Headlight Restoration'],
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">

      {/* ── 1. HERO ──────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#050505]">

        {/* Ambient orbs */}
        <div className="ambient-orb-blue" style={{ top: '-10%', right: '-5%' }} />
        <div className="ambient-orb-violet" style={{ bottom: '-20%', left: '-5%' }} />

        {/* Studio sweep + grain */}
        <div className="studio-sweep" />
        <div className="grain-overlay" />
        <div className="cinematic-vignette" />

        {/* Dark base gradients for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/50 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/90 via-[#050505]/40 to-transparent pointer-events-none" />

        {/* Decorative vertical line */}
        <div className="absolute right-1/3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[rgba(255,255,255,0.04)] to-transparent hidden lg:block" />

        <div className="relative z-10 site-container pt-32 pb-24">
          <p className="eyebrow mb-8 flex items-center gap-3">
            <span className="w-8 h-px bg-[rgba(255,255,255,0.2)] inline-block" />
            Premium Auto Detailing & Protection
          </p>
          <h1 className="display-xl mb-8 max-w-4xl">
            Premium Detailing<br />
            <span className="text-[#CFCFCF] font-light italic">&amp; Protection</span><br />
            Without Compromise.
          </h1>
          <p className="body-lead max-w-lg mb-12">
            Choose the right service, get a fast estimate, and request your appointment through a premium guided system.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link to="/smart-quote" className="btn-primary cta-glow">
              Get a Quote
            </Link>
            <Link to="/services" className="btn-ghost">
              Explore Services
            </Link>
            <WhatsAppCTA variant="text" className="mt-2 sm:mt-0" />
          </div>

          {/* Ambient line below CTA */}
          <div className="ambient-line mt-16 max-w-xs" />
        </div>

        {/* Horizontal scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.2)] animate-bounce" style={{ animationDuration: '2s' }} />
        </div>
      </section>

      {/* ── 2. CHOOSE YOUR PATH ───────────────────── */}
      <section className="bg-[#0D0D0D] border-t border-[rgba(255,255,255,0.06)]">
        <div className="site-container py-20 md:py-28">
          <div className="mb-14">
            <span className="eyebrow">Where to start</span>
            <h2 className="display-md">Choose your path.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[rgba(255,255,255,0.06)]">
            {PATHS.map(p => (
              <Link
                key={p.num}
                to={p.to}
                className="path-card group bg-[#0D0D0D] hover:bg-[#171717] ambient-border-hover"
              >
                <span className="text-[#1E1E1E] text-5xl font-black leading-none select-none">{p.num}</span>
                <div>
                  <h3 className="text-white font-semibold text-base mb-2 group-hover:text-[#CFCFCF] transition-colors">{p.title}</h3>
                  <p className="body-sm text-xs">{p.desc}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-[#8A8A8A] group-hover:text-white group-hover:translate-x-1 transition-all mt-auto" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. SIGNATURE SERVICES ───────────────── */}
      <section className="bg-[#050505] border-t border-[rgba(255,255,255,0.06)]">
        <div className="site-container py-20 md:py-28">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
            <div>
              <span className="eyebrow">Our Disciplines</span>
              <h2 className="display-md">Signature Services.</h2>
            </div>
            <Link to="/services" className="btn-text whitespace-nowrap">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[rgba(255,255,255,0.06)]">
            {SERVICES.map(s => (
              <Link
                key={s.name}
                to="/services"
                className="service-card group bg-[#050505] hover:bg-[#0D0D0D] ambient-border-hover"
              >
                {/* Luxury image strip */}
                <div className="luxury-image-panel w-full h-20 mb-6" />

                <div className="mb-auto">
                  <h3 className="text-white font-bold text-xl mb-1 group-hover:text-[#CFCFCF] transition-colors">{s.name}</h3>
                  <p className="text-[#8A8A8A] text-xs mb-4">{s.sub}</p>
                  <p className="text-[#8A8A8A] text-xs leading-relaxed mb-6 hidden md:block">{s.detail}</p>
                  <ul className="flex flex-col gap-1.5">
                    {s.examples.map(e => (
                      <li key={e} className="text-[#8A8A8A] text-xs flex items-center gap-2">
                        <span className="w-3 h-px bg-[#8A8A8A]" />
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8 pt-6 border-t border-[rgba(255,255,255,0.06)] flex items-center justify-between">
                  <span className="label-xs">Explore</span>
                  <ArrowRight className="w-3 h-3 text-[#8A8A8A] group-hover:text-white group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. PROOF PREVIEW ─────────────────────── */}
      <section className="bg-[#0D0D0D] border-t border-[rgba(255,255,255,0.06)]">
        <div className="site-container py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="eyebrow">Results</span>
              <h2 className="display-md mb-6">Perfection is in the details.</h2>
              <p className="body-lead mb-8">
                We document every transformation. Real vehicles, real problems, real outcomes — before you decide.
              </p>
              <Link to="/proof" className="btn-ghost">View Case Studies</Link>
            </div>

            {/* Before/After split visual */}
            <div className="relative">
              <div className="aspect-[3/2] bg-[#0D0D0D] border border-[rgba(255,255,255,0.08)] flex relative overflow-hidden">
                {/* Before */}
                <div className="flex-1 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #171717, #0D0D0D)' }}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                    {/* Simulated scratch lines */}
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-full h-px opacity-20"
                        style={{ background: '#CFCFCF', transform: `rotate(${-30 + i * 2}deg) scaleX(${0.5 + Math.random() * 0.5})` }}
                      />
                    ))}
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <span className="label-xs text-[#8A8A8A]/50">Before</span>
                  </div>
                </div>
                {/* Divider */}
                <div className="w-px bg-[rgba(255,255,255,0.12)]" />
                {/* After */}
                <div className="flex-1 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #232323, #0D0D0D)' }}>
                  <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 30%, rgba(200,230,255,0.06), transparent 70%)' }} />
                  <div className="absolute bottom-3 right-3">
                    <span className="label-xs text-[#8A8A8A]/50">After</span>
                  </div>
                </div>
              </div>
              <p className="text-[#8A8A8A] text-xs mt-3 text-right">Porsche 911 GT3 · Paint Correction + Ceramic</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. SMART QUOTE PREVIEW ────────────────── */}
      <section className="relative bg-[#050505] border-t border-[rgba(255,255,255,0.06)] overflow-hidden">
        <div className="ambient-orb-ice" style={{ top: '-20%', left: '50%' }} />
        <div className="grain-overlay" />
        <div className="site-container py-20 md:py-28 text-center relative z-10 max-w-3xl mx-auto">
          <span className="eyebrow">Guided System</span>
          <h2 className="display-md mb-6">Not sure where to start?</h2>
          <p className="body-lead mb-10">
            Our Smart Quote advisor guides you through 4 quick questions — returning a recommended service, package, and instant price estimate.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-[#8A8A8A] text-xs uppercase tracking-widest font-medium mb-12">
            <span className="text-white">Car</span>
            <span className="text-[#232323]">→</span>
            <span className="text-white">Condition</span>
            <span className="text-[#232323]">→</span>
            <span className="text-white">Service</span>
            <span className="text-[#232323]">→</span>
            <span className="text-white">Quote</span>
          </div>
          <Link to="/smart-quote" className="btn-primary cta-glow">
            Start Smart Quote
          </Link>
        </div>
      </section>

      {/* ── 6. FINAL CTA ──────────────────────────── */}
      <section className="relative py-32 bg-[#0D0D0D] border-t border-[rgba(255,255,255,0.06)] overflow-hidden">
        {/* Ambient edge lighting */}
        <div className="absolute top-0 left-0 right-0 h-px ambient-line" />
        <div className="ambient-orb-violet" style={{ bottom: '-30%', right: '-5%', opacity: '0.6' }} />
        <div className="site-container text-center relative z-10">
          <h2 className="display-lg mb-4 max-w-2xl mx-auto">Ready to give your car the attention it deserves?</h2>
          <p className="body-lead mb-10">Book an appointment or start with our Smart Quote for an instant estimate.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/smart-quote" className="btn-primary cta-glow">Start Smart Quote</Link>
            <Link to="/booking" className="btn-ghost">Request Appointment</Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px ambient-line" />
      </section>

    </div>
  );
}
