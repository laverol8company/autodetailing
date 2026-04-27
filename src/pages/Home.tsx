import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { WhatsAppCTA } from '../components/WhatsAppCTA';
import { MagneticCTA } from '../components/MagneticCTA';

const PATHS = [
  { title: 'I Need a Quote', desc: 'Get an instant estimate through our guided 4-step advisor.', to: '/smart-quote', num: '01' },
  { title: 'I Know the Service', desc: 'Browse our full catalog of detailing and protection services.', to: '/services', num: '02' },
  { title: 'I Want to Book', desc: 'Request a specific appointment slot directly.', to: '/booking', num: '03' },
  { title: "I'm Not Sure", desc: 'Answer a few questions — we recommend the right service.', to: '/smart-quote', num: '04' },
];

const SERVICES = [
  {
    name: 'Enhance',
    sub: 'Paint Correction & Gloss',
    examples: ['Paint Correction', 'Gloss Enhancement', 'Panel Preparation'],
    img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=600&h=400',
  },
  {
    name: 'Protect',
    sub: 'Coating & Film',
    examples: ['Ceramic Coating', 'PPF', 'Glass Coating'],
    img: 'https://images.unsplash.com/photo-1611821064430-0d402241afe4?auto=format&fit=crop&q=80&w=600&h=400',
  },
  {
    name: 'Maintain',
    sub: 'Upkeep & Care',
    examples: ['Premium Wash', 'Interior Detail', 'Leather Care'],
    img: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=600&h=400',
  },
  {
    name: 'Restore',
    sub: 'Deep Rehabilitation',
    examples: ['Interior Extraction', 'Odor Removal', 'Headlight Restoration'],
    img: 'https://images.unsplash.com/photo-1548092372-0d1bd40894a3?auto=format&fit=crop&q=80&w=600&h=400',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">

      {/* ── 1. HERO ──────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#050505]">

        {/* HERO REAL IMAGE — dark cinematic car */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1920"
            alt="Premium Detailing"
            className="w-full h-full object-cover opacity-35"
            loading="eager"
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/85 to-[#050505]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/60" />
        </div>

        {/* Ambient colour orbs */}
        <div className="ambient-orb-blue" style={{ top: '-10%', right: '-5%' }} />
        <div className="ambient-orb-violet" style={{ bottom: '-20%', left: '-5%' }} />

        {/* FLOATING AMBIENT LINES — clearly visible */}
        <div className="float-line float-line-1" style={{ top: '30%', left: '5%' }} />
        <div className="float-line float-line-2" style={{ top: '45%', left: '25%' }} />
        <div className="float-line float-line-3" style={{ top: '60%', left: '8%' }} />
        <div className="float-line float-line-4" style={{ top: '75%', left: '20%' }} />

        {/* Film grain */}
        <div className="grain-overlay" />
        {/* Edge vignette */}
        <div className="cinematic-vignette" />

        <div className="relative z-10 site-container pt-36 pb-24">
          <p className="eyebrow mb-8 flex items-center gap-3">
            <span className="w-8 h-px bg-[rgba(255,255,255,0.25)] inline-block" />
            Premium Auto Detailing & Protection
          </p>

          <h1 className="display-xl mb-8 max-w-3xl">
            Premium <span className="word-underline">Detailing</span><br />
            <span className="word-accent">& Protection</span><br />
            Without <span className="word-underline">Compromise.</span>
          </h1>

          <p className="body-lead max-w-lg mb-12">
            Choose the right service, get a fast estimate, and request your appointment.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <MagneticCTA strength={10}>
              <Link to="/smart-quote" className="btn-primary cta-magnetic">
                Get a Quote
              </Link>
            </MagneticCTA>
            <Link to="/services" className="btn-ghost">
              Explore Services
            </Link>
            <WhatsAppCTA variant="text" className="mt-2 sm:mt-0" />
          </div>

          <div className="ambient-line mt-16 max-w-xs" />
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.30)] animate-bounce" style={{ animationDuration: '2s' }} />
        </div>
      </section>

      {/* ── 2. CHOOSE YOUR PATH ───────────────────── */}
      <section className="bg-[#0D0D0D] border-t border-[rgba(255,255,255,0.06)]">
        <div className="site-container py-20 md:py-28">
          <div className="mb-14">
            <span className="eyebrow">Where to start</span>
            <h2 className="display-md">Choose your <span className="word-accent">path.</span></h2>
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

      {/* ── 3. SIGNATURE SERVICES (with real images) ─ */}
      <section className="bg-[#050505] border-t border-[rgba(255,255,255,0.06)]">
        <div className="site-container py-20 md:py-28">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
            <div>
              <span className="eyebrow">Our Disciplines</span>
              <h2 className="display-md">Signature <span className="word-accent">Services.</span></h2>
            </div>
            <Link to="/services" className="btn-ghost whitespace-nowrap">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[rgba(255,255,255,0.06)]">
            {SERVICES.map(s => (
              <Link
                key={s.name}
                to="/services"
                className="group bg-[#050505] hover:bg-[#0D0D0D] flex flex-col overflow-hidden border border-transparent hover:border-[rgba(255,255,255,0.10)] transition-all"
              >
                {/* REAL SERVICE IMAGE */}
                <div className="relative h-40 md:h-52 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-white font-bold text-lg mb-1 group-hover:text-[#CFCFCF] transition-colors">{s.name}</h3>
                  <p className="text-[#8A8A8A] text-xs mb-4">{s.sub}</p>
                  <ul className="flex flex-col gap-1.5 mb-auto">
                    {s.examples.map(e => (
                      <li key={e} className="text-[#8A8A8A] text-xs flex items-center gap-2">
                        <span className="w-3 h-px bg-[#8A8A8A]" />
                        {e}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-4 border-t border-[rgba(255,255,255,0.06)] flex items-center justify-between">
                    <span className="label-xs">Explore</span>
                    <ArrowRight className="w-3 h-3 text-[#8A8A8A] group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
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
              <h2 className="display-md mb-6">Perfection is in <span className="word-underline">the details.</span></h2>
              <p className="body-lead mb-8">
                Real vehicles, real problems, real outcomes — before you decide.
              </p>
              <Link to="/proof" className="btn-ghost">View Case Studies</Link>
            </div>
            {/* REAL BEFORE / AFTER WITH REAL IMAGE */}
            <div className="relative">
              <div className="aspect-[3/2] border border-[rgba(255,255,255,0.08)] overflow-hidden flex">
                {/* Before — grayscale, dark */}
                <div className="flex-1 relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1616789916666-4f2f80ed5360?auto=format&fit=crop&q=80&w=600"
                    alt="Before"
                    className="absolute inset-0 w-full h-full object-cover grayscale brightness-50"
                    loading="lazy"
                  />
                  <div className="absolute bottom-3 left-3">
                    <span className="text-[10px] uppercase tracking-widest text-white/40 bg-black/60 px-2 py-1">Before</span>
                  </div>
                </div>
                {/* Divider */}
                <div className="w-px bg-[rgba(255,255,255,0.15)]" />
                {/* After — full color */}
                <div className="flex-1 relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1616789916666-4f2f80ed5360?auto=format&fit=crop&q=80&w=600"
                    alt="After"
                    className="absolute inset-0 w-full h-full object-cover brightness-95"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/60 to-transparent" />
                  <div className="absolute bottom-3 right-3">
                    <span className="text-[10px] uppercase tracking-widest text-white bg-black/60 px-2 py-1">After</span>
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
        <div className="float-line float-line-1" style={{ top: '35%', left: '5%', opacity: 0.6 }} />
        <div className="float-line float-line-3" style={{ top: '65%', left: '20%', opacity: 0.45 }} />
        <div className="grain-overlay" />
        <div className="site-container py-20 md:py-28 text-center relative z-10 max-w-3xl mx-auto">
          <span className="eyebrow">Guided System</span>
          <h2 className="display-md mb-6">Not sure <span className="word-accent">where to start?</span></h2>
          <p className="body-lead mb-10">
            Our Smart Quote advisor guides you through 4 quick questions — returning a <span className="word-underline">recommended service</span>, package, and instant price estimate.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-[#8A8A8A] text-xs uppercase tracking-widest font-medium mb-12">
            {['Car', 'Condition', 'Service', 'Quote'].map((step, i, arr) => (
              <span key={step} className="flex items-center gap-4">
                <span className="text-white">{step}</span>
                {i < arr.length - 1 && <span className="text-[#232323]">→</span>}
              </span>
            ))}
          </div>
          <MagneticCTA strength={12}>
            <Link to="/smart-quote" className="btn-primary cta-magnetic">
              Start Smart Quote
            </Link>
          </MagneticCTA>
        </div>
      </section>

      {/* ── 6. FINAL CTA ──────────────────────────── */}
      <section className="relative py-32 overflow-hidden">
        {/* Real atmospheric car image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1580274455191-1c62238fa333?auto=format&fit=crop&q=80&w=1920"
            alt="Final CTA"
            className="w-full h-full object-cover opacity-20"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[#0D0D0D]/90" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(180,210,255,0.3), transparent)' }} />
        <div className="ambient-orb-violet" style={{ bottom: '-30%', right: '-5%', opacity: 0.6 }} />
        <div className="float-line float-line-4" style={{ top: '30%', left: '0%', opacity: 0.5 }} />
        <div className="float-line float-line-2" style={{ top: '65%', left: '25%', opacity: 0.4 }} />
        <div className="site-container text-center relative z-10">
          <h2 className="display-lg mb-4 max-w-2xl mx-auto">
            Ready to give your car the <span className="word-accent">attention it deserves?</span>
          </h2>
          <p className="body-lead mb-10">Book an appointment or start with our Smart Quote for an instant estimate.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticCTA strength={10}>
              <Link to="/smart-quote" className="btn-primary cta-magnetic">Start Smart Quote</Link>
            </MagneticCTA>
            <Link to="/booking" className="btn-ghost">Request Appointment</Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(180,210,255,0.2), transparent)' }} />
      </section>

    </div>
  );
}
