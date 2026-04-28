import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { calculateQuoteEstimate, QuoteEstimateResult } from '../lib/quoteEstimate';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { WhatsAppCTA } from '../components/WhatsAppCTA';
import { RevealText, FadeUp } from '../components/Reveal';

interface Step { id: string; question: string; options: string[]; }
const STEPS: Step[] = [
  { id: 'size',      question: 'What size is your vehicle?',       options: ['Small (Hatchback, Mini)', 'Medium (Sedan, Coupe)', 'Large (SUV, Estate)', 'Extra Large (Van, 4x4)'] },
  { id: 'condition', question: 'Current paint condition?',          options: ['Low — Few visible issues', 'Medium — Visible swirls & marks', 'High — Heavy scratches & fading'] },
  { id: 'service',   question: 'What are you looking for?',         options: ['Exterior Detailing', 'Interior Detailing', 'Ceramic Coating', 'Paint Correction', 'PPF / Paint Protection Film'] },
  { id: 'package',   question: 'Preferred protection level?',       options: ['Essential', 'Premium', 'Signature'] },
];

function normaliseSize(s: string) {
  if (s.startsWith('Small'))  return 'Small';
  if (s.startsWith('Medium')) return 'Medium';
  if (s.startsWith('Large'))  return 'Large';
  return 'Extra Large';
}
function normaliseCondition(s: string) {
  if (s.startsWith('Low'))    return 'Low';
  if (s.startsWith('Medium')) return 'Medium';
  return 'High';
}

export default function SmartQuote() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [selected, setSelected] = useState<string | null>(null);
  const [estimate, setEstimate] = useState<QuoteEstimateResult | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  function scrollCard() {
    setTimeout(() => cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
  }

  function handleSelect(val: string) {
    setSelected(val);
    const next = { ...answers, [STEPS[step].id]: val };
    setAnswers(next);
    setTimeout(() => {
      if (step < STEPS.length - 1) {
        setStep(step + 1);
        setSelected(null);
        scrollCard();
      } else {
        try {
          setEstimate(calculateQuoteEstimate({
            serviceType: next['service'],
            vehicleSize: normaliseSize(next['size']) as any,
            condition: normaliseCondition(next['condition']) as any,
            packageLevel: next['package'] as any,
          }));
        } catch {
          setEstimate({ estimatedPriceRange: 'Custom Quote', estimatedDuration: 'TBD', note: 'Contact us for an accurate estimate.' });
        }
        scrollCard();
      }
    }, 180);
  }

  function goBack()  { setStep(step - 1); setSelected(null); scrollCard(); }
  function reset()   { setStep(0); setAnswers({}); setSelected(null); setEstimate(null); scrollCard(); }

  const pct = Math.round(((step + 1) / STEPS.length) * 100);

  return (
    <div className="min-h-screen bg-[var(--black)] flex flex-col">
      {/* Page hero */}
      <div className="relative pt-36 pb-20 border-b border-[var(--border)]">
        <div className="site-container">
          <FadeUp><p className="type-label mb-6">Instant Estimate</p></FadeUp>
          <RevealText as="h1" className="type-display mb-4">Smart Quote</RevealText>
          <RevealText as="p" className="type-lead max-w-md" delay={0.12}>
            4 questions. 30 seconds. A personalised service recommendation and price range — instantly.
          </RevealText>
        </div>
      </div>

      {/* Quiz area */}
      <div className="flex-1 flex items-start justify-center py-16 px-4">
        <div ref={cardRef} className="w-full max-w-xl scroll-mt-32">

          {estimate ? (
            /* ── RESULT ── */
            <div className="card-luxe">
              <div className="flex items-center gap-3 mb-8">
                <CheckCircle2 className="w-4 h-4 text-[var(--cyan)]" />
                <span className="type-label">Recommendation ready</span>
              </div>

              <h2 className="type-headline mb-2 text-2xl">
                {answers['package']} <em>{answers['service']}</em>
              </h2>
              <p className="type-body text-sm mb-10">
                For your{' '}
                <span className="text-white">{normaliseSize(answers['size'])}</span> vehicle in{' '}
                <span className="text-white">{normaliseCondition(answers['condition'])}</span> condition.
              </p>

              <div className="grid grid-cols-2 border-t border-b border-[var(--border)] mb-10">
                <div className="py-8 pr-8 border-r border-[var(--border)]">
                  <span className="type-label block mb-2">Estimated Range</span>
                  <span className="type-display text-3xl cyan">{estimate.estimatedPriceRange}</span>
                </div>
                <div className="py-8 pl-8">
                  <span className="type-label block mb-2">Duration</span>
                  <span className="type-display text-2xl">{estimate.estimatedDuration}</span>
                </div>
              </div>

              <p className="type-body text-xs italic mb-10 opacity-60">* {estimate.note}</p>

              <div className="flex flex-col gap-3">
                <Link to="/booking" className="btn-primary justify-center w-full">
                  <span>Request Appointment</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <WhatsAppCTA
                  variant="ghost"
                  className="justify-center"
                  message={`Hi, I completed the Smart Quote. I'm looking for ${answers['package']} ${answers['service']} for my ${normaliseSize(answers['size'])} vehicle.`}
                />
                <button onClick={reset} className="btn-text justify-center mt-2">
                  Start over
                </button>
              </div>
            </div>

          ) : (
            /* ── STEP ── */
            <div className="card-luxe">
              {/* Progress */}
              <div className="mb-12">
                <div className="flex justify-between items-center mb-4">
                  <span className="type-label">Step {step + 1} of {STEPS.length}</span>
                  <span className="type-label text-[var(--white-dim)]">{pct}%</span>
                </div>
                <div className="progress-track">
                  <div className="progress-fill" style={{ width: `${pct}%` }} />
                </div>
              </div>

              {step > 0 && (
                <button
                  onClick={goBack}
                  className="btn-text mb-8"
                >
                  <ArrowLeft className="w-3 h-3" /> Back
                </button>
              )}

              <h2 className="type-headline text-xl md:text-2xl mb-8 leading-snug">
                {STEPS[step].question}
              </h2>

              <div className="flex flex-col gap-2">
                {STEPS[step].options.map(opt => (
                  <button
                    key={opt}
                    onClick={() => handleSelect(opt)}
                    disabled={selected !== null}
                    className={`step-option ${selected === opt ? 'selected' : ''}`}
                  >
                    <span>{opt}</span>
                    <ArrowRight className="w-4 h-4 flex-shrink-0 opacity-40 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
