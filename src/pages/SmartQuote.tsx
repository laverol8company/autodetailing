import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { calculateQuoteEstimate, QuoteEstimateResult } from '../lib/quoteEstimate';
import { ArrowLeft, ArrowRight, CheckCircle2, User, Phone, Calendar, MessageSquare } from 'lucide-react';
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

/* Why this package fits */
function getReasonNote(answers: Record<string, string>): string {
  const cond = normaliseCondition(answers['condition'] || '');
  const svc = answers['service'] || '';
  const pkg = answers['package'] || '';

  if (svc === 'Ceramic Coating') {
    if (pkg === 'Signature') return 'The Signature tier gives you 5-year warranty coverage and maximum UV protection — the best long-term investment for your paint.';
    if (pkg === 'Premium') return 'Premium Ceramic offers 3-year protection with 9H hardness — an excellent balance of durability and cost.';
    return 'Entry Ceramic gives you 1-year hydrophobic protection, ideal for regular maintenance drivers.';
  }
  if (svc === 'Paint Correction') {
    if (cond === 'High') return 'Given the visible scratches and heavy swirls, a full two-stage correction is necessary to fully restore paint clarity.';
    return 'A single-stage polish will remove the light marks and restore your paint\'s natural depth and gloss.';
  }
  if (svc === 'PPF / Paint Protection Film') return 'PPF provides self-healing, impact-resistant protection. Essential for daily-driven or performance vehicles.';
  if (svc === 'Interior Detailing') return 'A thorough extraction and conditioning treatment will refresh every surface, fabric, and leather panel in your vehicle.';
  return 'Based on your vehicle\'s size and condition, this is the most suitable package for the outcome you\'re looking for.';
}

export default function SmartQuote() {
  const [step, setStep]       = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [selected, setSelected] = useState<string | null>(null);
  const [estimate, setEstimate] = useState<QuoteEstimateResult | null>(null);
  const [contactStatus, setContactStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
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

  function handleContactSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setContactStatus('sending');
    setTimeout(() => setContactStatus('sent'), 1000);
  }

  function goBack()  { setStep(step - 1); setSelected(null); scrollCard(); }
  function reset()   { setStep(0); setAnswers({}); setSelected(null); setEstimate(null); setContactStatus('idle'); scrollCard(); }

  const pct = Math.round(((step + 1) / STEPS.length) * 100);
  // avoid TS narrowing false-positive inside JSX branches
  const isSending = (contactStatus as string) === 'sending';

  return (
    <div className="min-h-screen bg-[var(--black)] flex flex-col">
      {/* Page hero */}
      <div className="relative pt-36 pb-20 border-b border-[var(--border)]">
        <div className="site-container">
          <FadeUp><p className="type-label mb-6">Instant Estimate</p></FadeUp>
          <RevealText as="h1" className="type-display mb-6">Smart Quote</RevealText>
          <FadeUp delay={0.15}>
            <p className="type-lead max-w-md">
              4 questions. 30 seconds. A personalised service recommendation and price range — instantly.
            </p>
          </FadeUp>
        </div>
      </div>

      {/* Quiz area */}
      <div className="flex-1 flex items-start justify-center py-16 px-4">
        <div ref={cardRef} className="w-full max-w-xl scroll-mt-32">

          {/* ─── SUCCESS STATE ─── */}
          {contactStatus === 'sent' ? (
            <div className="card-luxe text-center py-16">
              <div className="w-12 h-12 border border-[var(--cyan)] flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 className="w-5 h-5 text-[var(--cyan)]" />
              </div>
              <h2 className="type-headline text-2xl mb-4">Request Received</h2>
              <p className="type-body max-w-sm mx-auto mb-4">
                Your details and estimate have been sent to our team.
              </p>
              <p className="type-body text-xs max-w-sm mx-auto mb-10 opacity-60">
                We'll review your vehicle details and contact you within 24 hours to confirm the service and appointment time.
              </p>
              <div className="flex flex-col gap-3">
                <Link to="/booking" className="btn-primary justify-center w-full">
                  <span>Also Request Appointment</span>
                </Link>
                <button onClick={reset} className="btn-text justify-center mt-2">
                  Start a new quote
                </button>
              </div>
            </div>

          /* ─── CONTACT CAPTURE after estimate ─── */
          ) : estimate && contactStatus === 'idle' ? (
            <div className="card-luxe">
              {/* Estimate summary at top */}
              <div className="flex items-center gap-3 mb-8">
                <CheckCircle2 className="w-4 h-4 text-[var(--cyan)]" />
                <span className="type-label">Recommendation Ready</span>
              </div>

              <h2 className="type-headline mb-2" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}>
                {answers['package']} <em>{answers['service']}</em>
              </h2>
              <p className="type-body text-sm mb-6">
                For your <span className="text-white">{normaliseSize(answers['size'])}</span> vehicle in{' '}
                <span className="text-white">{normaliseCondition(answers['condition'])}</span> condition.
              </p>

              {/* Why it fits */}
              <div className="bg-[var(--cyan-faint)] border border-[var(--cyan-dim)] p-4 mb-8">
                <p className="type-label mb-2 text-[var(--cyan)]">Why this fits</p>
                <p className="type-body text-sm">{getReasonNote(answers)}</p>
              </div>

              {/* Price + Duration */}
              <div className="grid grid-cols-2 border border-[var(--border)] mb-8">
                <div className="p-6 border-r border-[var(--border)]">
                  <p className="type-label mb-3">Estimated Range</p>
                  <p className="text-[var(--cyan)] font-display font-light" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.5rem)', lineHeight: 1, fontFamily: 'var(--font-display)' }}>
                    {estimate.estimatedPriceRange}
                  </p>
                </div>
                <div className="p-6">
                  <p className="type-label mb-3">Duration</p>
                  <p className="text-white font-display font-light" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', lineHeight: 1, fontFamily: 'var(--font-display)' }}>
                    {estimate.estimatedDuration}
                  </p>
                </div>
              </div>

              <p className="type-body text-xs italic mb-10 opacity-50">
                * {estimate.note} Final price confirmed after inspection.
              </p>

              {/* Contact form */}
              <div className="border-t border-[var(--border)] pt-8">
                <p className="type-label mb-2">Confirm your request</p>
                <p className="type-body text-sm mb-8 opacity-70">
                  Leave your details and we'll reach out within 24h to confirm your appointment.
                </p>

                <form onSubmit={handleContactSubmit} className="flex flex-col gap-6">
                  <div className="form-field">
                    <label className="form-label">
                      <User className="inline w-3 h-3 mr-1" />
                      Full Name *
                    </label>
                    <input name="name" type="text" required placeholder="John Doe" className="form-input" />
                  </div>
                  <div className="form-field">
                    <label className="form-label">
                      <Phone className="inline w-3 h-3 mr-1" />
                      Phone *
                      <span className="ml-2 opacity-40 normal-case font-normal tracking-normal">— used only to confirm your request</span>
                    </label>
                    <input name="phone" type="tel" required placeholder="+380 97 671 2147" className="form-input" />
                  </div>
                  <div className="form-field">
                    <label className="form-label">
                      <Calendar className="inline w-3 h-3 mr-1" />
                      Preferred Date <span className="opacity-40 normal-case font-normal tracking-normal">(optional)</span>
                    </label>
                    <input name="date" type="date" className="form-input" />
                  </div>
                  <div className="form-field">
                    <label className="form-label">
                      <MessageSquare className="inline w-3 h-3 mr-1" />
                      Vehicle & Notes <span className="opacity-40 normal-case font-normal tracking-normal">(optional)</span>
                    </label>
                    <textarea name="message" rows={2} placeholder="Make, model, colour…" className="form-textarea" />
                  </div>

                  <div className="flex flex-col gap-3 pt-2">
                    <button type="submit" disabled={isSending} className="btn-primary justify-center w-full">
                      <span>{isSending ? 'Sending…' : 'Submit Request'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <WhatsAppCTA
                      variant="ghost"
                      className="justify-center"
                      message={`Hi, I completed the Smart Quote. I'm looking for ${answers['package']} ${answers['service']} for my ${normaliseSize(answers['size'])} vehicle. Estimated range: ${estimate.estimatedPriceRange}.`}
                    />
                    <button onClick={reset} className="btn-text justify-center mt-1">
                      Start over
                    </button>
                  </div>
                </form>
              </div>
            </div>

          ) : (
            /* ─── STEP CARD ─── */
            <div className="card-luxe">
              {/* Progress */}
              <div className="mb-12">
                <div className="flex justify-between items-center mb-4">
                  <span className="type-label">Step {step + 1} of {STEPS.length}</span>
                  <span className="type-label" style={{ color: 'var(--white-dim)' }}>{pct}%</span>
                </div>
                <div className="progress-track">
                  <div className="progress-fill" style={{ width: `${pct}%` }} />
                </div>
              </div>

              {step > 0 && (
                <button onClick={goBack} className="btn-text mb-8">
                  <ArrowLeft className="w-3 h-3" /> Back
                </button>
              )}

              <h2 className="type-headline mb-8 leading-snug" style={{ fontSize: 'clamp(1.3rem, 3vw, 1.8rem)' }}>
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
                    <ArrowRight className="w-4 h-4 flex-shrink-0 opacity-40" />
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
