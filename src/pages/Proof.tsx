import { useState, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { RevealText, FadeUp } from '../components/Reveal';

/* ─────────────────────────────────────────────────────────────
   Before / After Slider Component
   Uses a clip-path reveal approach: "after" image is clipped by
   position, revealing the "before" image underneath.
───────────────────────────────────────────────────────────── */
interface BeforeAfterSliderProps {
  beforeImg: string;
  afterImg:  string;
  beforeAlt?: string;
  afterAlt?:  string;
}

function BeforeAfterSlider({ beforeImg, afterImg, beforeAlt = 'Before', afterAlt = 'After' }: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50); // 0-100 percentage
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  }, [updatePosition]);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragging.current) return;
    updatePosition(e.clientX);
  }, [updatePosition]);

  const onPointerUp = useCallback(() => {
    dragging.current = false;
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full select-none touch-none overflow-hidden"
      style={{ aspectRatio: '16/9', cursor: 'ew-resize', userSelect: 'none' }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      aria-label="Before and after comparison slider"
    >
      {/* BEFORE image — always full width underneath */}
      <img
        src={beforeImg}
        alt={beforeAlt}
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
        style={{ filter: 'saturate(0.5) brightness(0.7)' }}
      />

      {/* AFTER image — clipped to right portion */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <img
          src={afterImg}
          alt={afterAlt}
          className="absolute inset-0 h-full object-cover"
          draggable={false}
          style={{ width: `${10000 / position}%`, maxWidth: 'none' }}
        />
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-px bg-[var(--cyan)] pointer-events-none"
        style={{ left: `${position}%` }}
      >
        {/* Drag handle */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[var(--cyan)] flex items-center justify-center shadow-[0_0_20px_rgba(0,229,255,0.5)]"
          style={{ pointerEvents: 'none' }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="black" aria-hidden>
            <path d="M5 2L1 8l4 6M11 2l4 6-4 6" stroke="black" strokeWidth="2" fill="none" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 pointer-events-none">
        <span
          className="px-2 py-1 text-white"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.6rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            background: 'rgba(0,0,0,0.7)',
            backdropFilter: 'blur(4px)',
          }}
        >
          Before
        </span>
      </div>
      <div className="absolute top-4 right-4 pointer-events-none">
        <span
          className="px-2 py-1"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.6rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--cyan)',
            background: 'rgba(0,0,0,0.7)',
            backdropFilter: 'blur(4px)',
          }}
        >
          After
        </span>
      </div>

      {/* Touch hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none">
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.55rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.35)',
        }}>
          drag to compare
        </span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Case studies data
───────────────────────────────────────────────────────────── */
const CASES = [
  {
    vehicle: 'Porsche 911 GT3',
    color: 'Guards Red',
    tag: 'Paint Correction + 5yr Ceramic',
    issue: 'Track day debris, heavy swirl marks, dull clearcoat from improper washing over 3 years.',
    service: 'Multi-Stage Paint Correction + 5yr Ceramic Coating',
    result: 'Flawless mirror finish with fully restored red saturation. Hydrophobic ceramic layer locked in.',
    days: '3 days',
    beforeImg: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=1400',
    afterImg: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1400',
  },
  {
    vehicle: 'Range Rover Autobiography',
    color: 'Santorini Black',
    tag: 'Gloss Enhancement + Glass Ceramic',
    issue: 'Severe hologramming from dealership prep. Heavy water spots on glass and bodywork.',
    service: 'Gloss Enhancement + Glass Ceramic Coating',
    result: 'Intense black depth fully restored. Glass sealed and bead-rolling. Showroom condition.',
    days: '2 days',
    beforeImg: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=1400',
    afterImg: 'https://images.unsplash.com/photo-1550340499-a6c60fc8287c?auto=format&fit=crop&q=80&w=1400',
  },
  {
    vehicle: 'Mercedes G63 AMG',
    color: 'Matte Magno Black',
    tag: 'Matte-Safe Prep + Matte Ceramic',
    issue: 'Fingerprints embedded in matte texture. UV exposure beginning to break down finish.',
    service: 'Matte-Safe Decontamination + Matte Ceramic Coating',
    result: 'Factory satin texture preserved. Self-cleaning properties added without altering sheen level.',
    days: '2 days',
    beforeImg: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&q=80&w=1400',
    afterImg: 'https://images.unsplash.com/photo-1611821064430-0d40291d0f0b?auto=format&fit=crop&q=80&w=1400',
  },
];

/* ─────────────────────────────────────────────────────────────
   Proof page
───────────────────────────────────────────────────────────── */
export default function Proof() {
  return (
    <div className="bg-[var(--black)]">

      {/* Header */}
      <section className="relative pt-40 pb-24 border-b border-[var(--border)] overflow-hidden">
        <div className="site-container relative z-10">
          <FadeUp>
            <p className="type-label mb-6">Portfolio</p>
          </FadeUp>
          <RevealText as="h1" className="type-display">The Proof.</RevealText>
          <RevealText as="h1" className="type-display mb-10" delay={0.1}>
            <em>Results that speak.</em>
          </RevealText>
          <FadeUp delay={0.3}>
            <p className="type-lead max-w-md">
              Every case below is a real vehicle that came through our studio.
              Drag the slider to compare before and after.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Cases */}
      <section>
        {CASES.map((c, i) => (
          <div
            key={i}
            className={`border-b border-[var(--border)] ${i % 2 === 1 ? 'bg-[var(--black-2)]' : ''}`}
          >
            <div className="site-container py-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                {/* Before / After slider */}
                <FadeUp className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <BeforeAfterSlider
                    beforeImg={c.beforeImg}
                    afterImg={c.afterImg}
                    beforeAlt={`${c.vehicle} before detailing`}
                    afterAlt={`${c.vehicle} after detailing`}
                  />
                </FadeUp>

                {/* Case details */}
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <FadeUp delay={0.1}>
                    <p className="type-label mb-4">{c.tag}</p>
                    <h2 className="type-headline mb-1" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)' }}>
                      {c.vehicle}
                    </h2>
                    <p className="type-body text-sm mb-10">{c.color}</p>
                  </FadeUp>

                  <div className="flex flex-col gap-6">
                    <FadeUp delay={0.15}>
                      <div>
                        <p className="type-label mb-2">Problem</p>
                        <p className="type-body text-sm">{c.issue}</p>
                      </div>
                    </FadeUp>
                    <FadeUp delay={0.2}>
                      <div>
                        <p className="type-label mb-2">Process</p>
                        <p className="text-white text-sm font-medium leading-relaxed">{c.service}</p>
                      </div>
                    </FadeUp>
                    <FadeUp delay={0.25}>
                      <div className="border border-[var(--cyan-dim)] bg-[var(--cyan-faint)] p-5">
                        <p className="type-label mb-2" style={{ color: 'var(--cyan)' }}>Result</p>
                        <p className="text-white text-sm leading-relaxed">{c.result}</p>
                      </div>
                    </FadeUp>
                  </div>

                  <FadeUp delay={0.3}>
                    <div className="flex items-center justify-between pt-8 mt-8 border-t border-[var(--border)]">
                      <p className="type-body text-xs">
                        Time: <span className="text-white font-medium">{c.days}</span>
                      </p>
                      <Link
                        to="/smart-quote"
                        className="btn-text"
                      >
                        Get Similar Result <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </FadeUp>
                </div>

              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="py-32 text-center border-t border-[var(--border)]">
        <div className="site-container">
          <RevealText as="h2" className="type-display mb-10">
            Your vehicle deserves this.
          </RevealText>
          <FadeUp delay={0.2} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/booking" className="btn-primary">
              <span>Request Appointment</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/smart-quote" className="btn-ghost">
              Get a Quote First
            </Link>
          </FadeUp>
        </div>
      </section>

    </div>
  );
}
