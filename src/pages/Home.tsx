import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDownRight } from 'lucide-react';
import { RevealText, FadeUp, LineReveal } from '../components/Reveal';

/* ── Inline useReveal hook for hero (no IntersectionObserver needed — immediate) ── */
function useHeroReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Trigger all reveal-text elements after mount
    const items = el.querySelectorAll('.reveal-text, .fade-up, .fade-in');
    const timer = setTimeout(() => {
      items.forEach(item => item.classList.add('is-visible'));
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  return ref;
}

/* ── Services data ── */
const SERVICES = [
  {
    id: 'enhance',
    label: '01',
    name: 'Enhance',
    sub: 'Paint Correction & Gloss',
    desc: 'Remove swirls, scratches, and oxidation. Reveal the true depth of your paint.',
    img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1400',
  },
  {
    id: 'protect',
    label: '02',
    name: 'Protect',
    sub: 'Ceramic Coating & PPF',
    desc: 'Multi-year hydrophobic protection that repels water, dirt, and UV damage.',
    img: 'https://images.unsplash.com/photo-1600706432502-77a0e2e32790?auto=format&fit=crop&q=80&w=1400',
  },
  {
    id: 'maintain',
    label: '03',
    name: 'Maintain',
    sub: 'Upkeep & Care',
    desc: 'Preserve your investment with meticulous wash protocols and detailing.',
    img: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=1400',
  },
  {
    id: 'restore',
    label: '04',
    name: 'Restore',
    sub: 'Deep Rehabilitation',
    desc: 'From interior extraction to full exterior rehabilitation — any condition.',
    img: 'https://images.unsplash.com/photo-1611821064430-0d40291d0f0b?auto=format&fit=crop&q=80&w=1400',
  },
];

/* ── Stats ── */
const STATS = [
  { value: '200+', label: 'Vehicles detailed' },
  { value: '5yr',  label: 'Coating warranty' },
  { value: '48h',  label: 'Response time' },
  { value: '100%', label: 'Appointment-only' },
];

export default function Home() {
  const heroRef = useHeroReveal();

  return (
    <div className="bg-[var(--black)]">

      {/* ═══════════════════════════════════════════════════
          1. HERO — Full viewport, cinematic car + massive type
          ═══════════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col justify-end overflow-hidden"
      >
        {/* Background video — Cinematic Edit */}
        <div className="hero-bg-video">
          <video
            autoPlay
            loop
            muted
            playsInline
            src="/jdm_vs_euro.mp4"
            className="w-full h-full object-cover saturate-[0.65] brightness-50"
          />
        </div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#000] via-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.3)] z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.7)] to-transparent z-[1]" />
        <div className="scanlines" />

        {/* Top eyebrow */}
        <div className="absolute top-24 left-0 right-0 z-[3]">
          <div className="site-container">
            <div className="fade-in is-visible flex items-center gap-4">
              <div className="w-5 h-px bg-[var(--cyan)]" />
              <span className="type-label">Premium Auto Detailing Studio · Bucharest</span>
            </div>
          </div>
        </div>

        {/* Main content — bottom aligned */}
        <div className="relative z-[3] site-container pb-16 md:pb-24">

          {/* Giant headline */}
          <div className="mb-8">
            <div className="reveal-wrap overflow-hidden">
              <h1 className="type-hero reveal-text is-visible leading-none">
                GENERAL
              </h1>
            </div>
            <div className="reveal-wrap overflow-hidden">
              <span
                className="type-hero reveal-text is-visible leading-none"
                style={{
                  transitionDelay: '0.12s',
                  fontStyle: 'italic',
                  color: 'transparent',
                  WebkitTextStroke: '1px rgba(255,255,255,0.5)',
                }}
              >
                CARS
              </span>
            </div>
          </div>

          {/* Cyan accent line */}
          <div className="line-reveal is-visible h-px bg-[var(--cyan)] mb-8 max-w-xs" style={{ transitionDelay: '0.3s' }} />

          {/* Bottom row: description + CTAs */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-sm">
              <p className="fade-up is-visible type-lead" style={{ transitionDelay: '0.4s' }}>
                Bespoke detailing &amp; paint protection.<br />
                <em>Without compromise.</em>
              </p>
            </div>

            <div className="fade-up is-visible flex flex-col sm:flex-row gap-3" style={{ transitionDelay: '0.5s' }}>
              <Link to="/smart-quote" className="btn-primary">
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/services" className="btn-ghost">
                Our Services
              </Link>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="fade-in is-visible absolute bottom-8 right-8 md:right-16 flex flex-col items-center gap-2" style={{ transitionDelay: '0.8s' }}>
            <span className="type-label text-[9px] rotate-90 origin-center mb-3">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-[var(--cyan)] to-transparent animate-pulse" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          2. STATS BAR — Otto Kraftor style horizontal counter
          ═══════════════════════════════════════════════════ */}
      <section className="border-y border-[var(--border)] bg-[var(--black-2)]">
        <div className="site-container">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {STATS.map((s, i) => (
              <FadeUp
                key={s.label}
                delay={i * 0.1}
                className="border-r border-[var(--border)] last:border-r-0 p-8 md:p-10"
              >
                <div className="type-hero text-3xl md:text-5xl mb-2 cyan">{s.value}</div>
                <div className="type-label text-[var(--white-dim)] normal-case tracking-wide text-[10px]">{s.label}</div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          3. PHILOSOPHY — Carbonov large-text scroll reveal
          ═══════════════════════════════════════════════════ */}
      <section className="py-32 md:py-48">
        <div className="site-container">
          <div className="max-w-5xl">
            <FadeUp>
              <p className="type-label mb-10">Our Philosophy</p>
            </FadeUp>

            <RevealText as="h2" className="type-display mb-4">
              Every car tells
            </RevealText>
            <RevealText as="h2" className="type-display mb-4" delay={0.1}>
              a story.
            </RevealText>
            <RevealText as="h2" delay={0.2}>
              <span className="type-display" style={{ fontStyle: 'italic', color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.35)' }}>
                We make it
              </span>
              <span className="type-display cyan" style={{ fontStyle: 'italic' }}> unforgettable.</span>
            </RevealText>

            <LineReveal delay={0.6} className="mt-12 mb-12 max-w-xl" />

            <FadeUp delay={0.3} className="max-w-md">
              <p className="type-lead">
                We don't rush. We don't cut corners. Each vehicle receives
                the full attention of our lead technician — a single craftsman,
                one car at a time.
              </p>
            </FadeUp>

            <FadeUp delay={0.45} className="mt-10">
              <Link to="/proof" className="btn-text">
                View our work <ArrowDownRight className="w-3.5 h-3.5" />
              </Link>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          4. SERVICES — Mansory/Kamikaze full-height panels
          ═══════════════════════════════════════════════════ */}
      <section className="border-t border-[var(--border)]">
        <div className="site-container pb-24">
          <div className="flex items-end justify-between mb-12">
            <FadeUp>
              <p className="type-label mb-3">Disciplines</p>
              <h2 className="type-headline">Our Services</h2>
            </FadeUp>
            <FadeUp delay={0.15}>
              <Link to="/services" className="btn-text">
                View all <ArrowRight className="w-3 h-3" />
              </Link>
            </FadeUp>
          </div>

          {/* Service panels grid - updated to 16:9 cards in 2 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {SERVICES.map((s, i) => (
              <FadeUp key={s.id} delay={i * 0.1}>
                <Link
                  to="/services"
                  className="block relative overflow-hidden group border border-[var(--border)] hover:border-[var(--border-hover)] transition-colors"
                  style={{ aspectRatio: '16/9' }}
                >
                  {/* Background image */}
                  <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105">
                    <img
                      src={s.img}
                      alt={s.name}
                      className="w-full h-full object-cover saturate-[0.7]"
                      style={{ objectPosition: 'center 60%' }}
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.95)] via-[rgba(0,0,0,0.3)] to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Content */}
                  <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                    <span className="type-label mb-3 block text-[var(--cyan)]">{s.label}</span>
                    <h3 className="type-headline text-2xl md:text-3xl mb-2">{s.name}</h3>
                    <p className="type-body text-sm mb-4 opacity-80">{s.sub}</p>
                    <div className="h-0 overflow-hidden group-hover:h-[60px] transition-all duration-500 ease-out">
                      <p className="type-body text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-sm">
                        {s.desc}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 type-label text-[10px] mt-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-150 text-white">
                      Explore Service <ArrowRight className="w-3 h-3 text-[var(--cyan)]" />
                    </div>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          5. SMART QUOTE CTA — dark editorial strip
          ═══════════════════════════════════════════════════ */}
      <section className="py-32 md:py-40 border-t border-[var(--border)] bg-[var(--black-2)]">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left */}
            <div>
              <FadeUp>
                <p className="type-label mb-6">Guided Advisor</p>
              </FadeUp>
              <RevealText as="h2" className="type-display mb-8">
                Not sure where<br />to start?
              </RevealText>
              <FadeUp delay={0.2}>
                <p className="type-lead mb-10">
                  Our 4-step Smart Quote advisor analyses your vehicle's size,
                  condition, and goals — then recommends the exact service and
                  gives you an instant price estimate.
                </p>
              </FadeUp>
              <FadeUp delay={0.3} className="flex flex-col sm:flex-row gap-4">
                <Link to="/smart-quote" className="btn-primary">
                  <span>Start Smart Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/booking" className="btn-ghost">
                  Book Directly
                </Link>
              </FadeUp>
            </div>

            {/* Right — steps visual */}
            <div className="flex flex-col gap-0">
              {['Vehicle Size', 'Paint Condition', 'Service Type', 'Your Quote'].map((step, i) => (
                <FadeUp
                  key={step}
                  delay={i * 0.1}
                  className="flex items-center gap-6 border-b border-[var(--border)] py-6"
                >
                  <span className="type-label w-6">{String(i + 1).padStart(2, '0')}</span>
                  <div className="flex-1 h-px bg-[var(--border)]" />
                  <span className="type-body">{step}</span>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          6. FINAL CTA — Fullscreen image + huge text
          ═══════════════════════════════════════════════════ */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden border-t border-[var(--border)]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1580274455191-1c62238fa333?auto=format&fit=crop&q=80&w=1920"
            alt=""
            aria-hidden
            className="w-full h-full object-cover opacity-20"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-[rgba(0,0,0,0.85)] to-black" />
        </div>

        {/* Cyan horizontal accent */}
        <div className="absolute top-0 left-0 right-0 hero-accent-line" />

        <div className="relative z-10 site-container py-24 text-center">
          <RevealText as="h2" className="type-display max-w-3xl mx-auto mb-8">
            Ready to give your<br /><em>car the treatment it deserves?</em>
          </RevealText>

          <FadeUp delay={0.3} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/smart-quote" className="btn-primary">
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/booking" className="btn-ghost">
              Request Appointment
            </Link>
          </FadeUp>
        </div>

        <div className="absolute bottom-0 left-0 right-0 hero-accent-line" />
      </section>

    </div>
  );
}
