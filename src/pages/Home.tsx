import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { WhatsAppCTA } from '../components/WhatsAppCTA';

const PATHS = [
  { title: 'I Need a Quote', desc: 'Get an instant estimation through our guided 4-step advisor.', to: '/smart-quote', num: '01' },
  { title: 'I Know the Service', desc: 'Browse our full catalog of detailing and protection services.', to: '/services', num: '02' },
  { title: 'I Want to Book', desc: 'Request a specific appointment slot directly.', to: '/booking', num: '03' },
  { title: "I'm Not Sure", desc: 'Answer a few questions — we will recommend the right service.', to: '/smart-quote', num: '04' },
];

const SERVICES = [
  { name: 'Enhance', sub: 'Paint Correction & Gloss', examples: ['Paint Correction', 'Gloss Enhancement', 'Panel Preparation'] },
  { name: 'Protect', sub: 'Coating & Film', examples: ['Ceramic Coating', 'PPF', 'Glass Coating'] },
  { name: 'Maintain', sub: 'Upkeep & Care', examples: ['Premium Wash', 'Interior Detail', 'Leather Care'] },
  { name: 'Restore', sub: 'Deep Rehabilitation', examples: ['Interior Extraction', 'Odor Removal', 'Headlight Restoration'] },
];

export default function Home() {
  return (
    <div className="flex flex-col">

      {/* ── 1. HERO ──────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#050505]">
        <div className="studio-sweep" />
        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/60 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 site-container pt-32 pb-24">
          <p className="eyebrow mb-8">Premium Auto Detailing & Protection</p>
          <h1 className="display-xl mb-8 max-w-4xl">
            Premium Detailing<br />
            <span className="text-[#CFCFCF] font-light">&amp; Protection</span><br />
            Without Compromise.
          </h1>
          <p className="body-lead max-w-lg mb-12">
            Choose the right service, get a fast estimate, and request your appointment through a premium guided system.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link to="/smart-quote" className="btn-primary">
              Get a Quote
            </Link>
            <Link to="/services" className="btn-ghost">
              Explore Services
            </Link>
            <WhatsAppCTA variant="text" className="mt-2 sm:mt-0" />
          </div>
        </div>
      </section>

      {/* ── 2. CHOOSE YOUR PATH ───────────────────── */}
      <section className="section-mid">
        <div className="site-container">
          <div className="mb-14">
            <span className="eyebrow">Where to start</span>
            <h2 className="display-md">Choose your path.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[rgba(255,255,255,0.06)]">
            {PATHS.map(p => (
              <Link key={p.num} to={p.to} className="path-card group bg-[#0D0D0D] hover:bg-[#171717]">
                <span className="text-[#232323] text-5xl font-black leading-none">{p.num}</span>
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

      {/* ── 3. SIGNATURE SERVICES PREVIEW ───────── */}
      <section className="section-dark border-t border-[rgba(255,255,255,0.06)]">
        <div className="site-container">
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
              <Link key={s.name} to="/services" className="service-card group bg-[#050505] hover:bg-[#0D0D0D]">
                <div className="mb-auto">
                  <h3 className="text-white font-bold text-xl mb-1 group-hover:text-[#CFCFCF] transition-colors">{s.name}</h3>
                  <p className="text-[#8A8A8A] text-xs mb-6">{s.sub}</p>
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
      <section className="section-charcoal border-t border-[rgba(255,255,255,0.06)]">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="eyebrow">Results</span>
              <h2 className="display-md mb-6">Perfection is in the details.</h2>
              <p className="body-lead mb-8">
                We document every transformation so you can see real vehicles, real problems, and real outcomes before making a decision.
              </p>
              <Link to="/proof" className="btn-ghost">
                View Case Studies
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[3/2] bg-[#0D0D0D] border border-[rgba(255,255,255,0.08)] flex items-end relative overflow-hidden">
                {/* Before/After visual placeholder */}
                <div className="absolute inset-0 flex">
                  <div className="flex-1 flex items-center justify-center border-r border-[rgba(255,255,255,0.08)]">
                    <span className="text-[#232323] text-5xl font-black">B</span>
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <span className="text-[#232323] text-5xl font-black">A</span>
                  </div>
                </div>
                <div className="relative z-10 w-full flex justify-between items-end px-4 pb-4">
                  <span className="label-xs text-[#8A8A8A]/60">Before</span>
                  <span className="label-xs text-[#8A8A8A]/60">After</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. SMART QUOTE PREVIEW ────────────────── */}
      <section className="section-dark border-t border-[rgba(255,255,255,0.06)]">
        <div className="site-container max-w-3xl text-center mx-auto">
          <span className="eyebrow">Guided System</span>
          <h2 className="display-md mb-6">Not sure where to start?</h2>
          <p className="body-lead mb-10">
            Our Smart Quote advisor guides you through 4 quick questions and returns a recommended service, package, and an instant price estimate.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap text-[#8A8A8A] text-xs uppercase tracking-widest font-medium mb-12">
            <span className="text-white">Car</span>
            <span>→</span>
            <span className="text-white">Condition</span>
            <span>→</span>
            <span className="text-white">Service</span>
            <span>→</span>
            <span className="text-white">Quote</span>
          </div>
          <Link to="/smart-quote" className="btn-primary">
            Start Smart Quote
          </Link>
        </div>
      </section>

      {/* ── 6. FINAL CTA ──────────────────────────── */}
      <section className="py-32 bg-[#0D0D0D] border-t border-[rgba(255,255,255,0.06)]">
        <div className="site-container text-center">
          <h2 className="display-lg mb-4 max-w-2xl mx-auto">Ready to give your car the attention it deserves?</h2>
          <p className="body-lead mb-10">Book an appointment or start with our Smart Quote for an instant estimate.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/smart-quote" className="btn-primary">Start Smart Quote</Link>
            <Link to="/booking" className="btn-ghost">Request Appointment</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
