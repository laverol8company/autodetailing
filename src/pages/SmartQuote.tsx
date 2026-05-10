import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { calculateQuoteEstimate, QuoteEstimateResult } from '../lib/quoteEstimate';
import { ArrowLeft, ArrowRight, CheckCircle2, User, Phone, Calendar, MessageSquare } from 'lucide-react';
import { WhatsAppCTA } from '../components/WhatsAppCTA';
import { RevealText, FadeUp } from '../components/Reveal';

interface Step {
  id: string;
  title: string;
  type: 'question' | 'estimate' | 'contact' | 'done';
  question?: string;
  options?: string[];
}

const STEPS: Step[] = [
  { id: 'size',      title: 'Vehicle',    type: 'question', question: 'What size is your vehicle?',       options: ['Small (Hatchback, Mini)', 'Medium (Sedan, Coupe)', 'Large (SUV, Estate)', 'Extra Large (Van, 4x4)'] },
  { id: 'condition', title: 'Condition',  type: 'question', question: 'Current paint condition?',          options: ['Low — Few visible issues', 'Medium — Visible swirls & marks', 'High — Heavy scratches & fading'] },
  { id: 'service',   title: 'Service',    type: 'question', question: 'What are you looking for?',         options: ['Exterior Detailing', 'Interior Detailing', 'Ceramic Coating', 'Paint Correction', 'PPF / Paint Protection Film'] },
  { id: 'package',   title: 'Package',    type: 'question', question: 'Preferred protection level?',       options: ['Essential', 'Premium', 'Signature'] },
  { id: 'estimate',  title: 'Estimate',   type: 'estimate' },
  { id: 'contact',   title: 'Contact',    type: 'contact' },
  { id: 'done',      title: 'Done',       type: 'done' }
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
    return 'A single-stage polish will remove the light marks and restore your paint\\'s natural depth and gloss.';
  }
  if (svc === 'PPF / Paint Protection Film') return 'PPF provides self-healing, impact-resistant protection. Essential for daily-driven or performance vehicles.';
  if (svc === 'Interior Detailing') return 'A thorough extraction and conditioning treatment will refresh every surface, fabric, and leather panel in your vehicle.';
  return 'Based on your vehicle\\'s size and condition, this is the most suitable package for the outcome you\\'re looking for.';
}

export default function SmartQuote() {
  const [step, setStep]       = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [selected, setSelected] = useState<string | null>(null);
  const [estimate, setEstimate] = useState<QuoteEstimateResult | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  function scrollCard() {
    setTimeout(() => cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
  }

  function handleSelect(val: string) {
    setSelected(val);
    const nextAnswers = { ...answers, [STEPS[step].id]: val };
    setAnswers(nextAnswers);
    
    setTimeout(() => {
      setSelected(null);
      // If we just finished the last question (Step 4 / index 3), calculate estimate
      if (step === 3) {
        try {
          setEstimate(calculateQuoteEstimate({
            serviceType: nextAnswers['service'],
            vehicleSize: normaliseSize(nextAnswers['size']) as any,
            condition: normaliseCondition(nextAnswers['condition']) as any,
            packageLevel: nextAnswers['package'] as any,
          }));
        } catch {
          setEstimate({ estimatedPriceRange: 'Custom Quote', estimatedDuration: 'TBD', note: 'Contact us for an accurate estimate.' });
        }
      }
      setStep(step + 1);
      scrollCard();
    }, 180);
  }

  async function handleContactSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const fullName = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const preferredDate = formData.get('date') as string;
    const notes = formData.get('message') as string;

    // Simple lead scoring logic
    const isPremium = answers['package'] === 'Signature' || answers['service']?.includes('Ceramic');
    const score = isPremium ? 'hot' : 'warm';

    try {
      const { error } = await supabase
        .from('leads_multilingual')
        .insert([
          {
            name: fullName,
            phone: phone,
            preferred_date: preferredDate || null,
            notes: notes || null,
            vehicle_type: answers['size'],
            paint_condition: answers['condition'],
            service_requested: answers['service'],
            package_level: answers['package'],
            estimated_price: estimate?.estimatedPriceRange || 'Custom Quote',
            estimated_duration: estimate?.estimatedDuration || 'TBD',
            score: score,
            status: 'new',
            source: 'smart_quote'
          }
        ]);

      if (error) throw error;
      setStep(6); // Move to final 'Done' step
      scrollCard();
    } catch (err) {
      console.error('Error saving lead:', err);
      alert('Something went wrong. Please try again or contact us via WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  }

  function goBack() { 
    setStep(Math.max(0, step - 1)); 
    setSelected(null); 
    scrollCard(); 
  }
  
  function reset() { 
    setStep(0); 
    setAnswers({}); 
    setSelected(null); 
    setEstimate(null); 
    scrollCard(); 
  }

  const currentStepDef = STEPS[step];
  const pct = Math.round(((step + 1) / STEPS.length) * 100);

  return (
    <div className="min-h-screen bg-[var(--black)] flex flex-col">
      <div className="relative pt-36 pb-20 border-b border-[var(--border)]">
        <div className="site-container">
          <FadeUp><p className="type-label mb-6">Guided Advisor</p></FadeUp>
          <RevealText as="h1" className="type-display mb-6">Smart Quote</RevealText>
          <FadeUp delay={0.15}>
            <p className="type-lead max-w-md">
              Complete these 7 steps to get a personalised service recommendation, instant price range, and submit your request.
            </p>
          </FadeUp>
        </div>
      </div>

      <div className="flex-1 flex items-start justify-center py-16 px-4">
        <div ref={cardRef} className="w-full max-w-xl scroll-mt-32">
          
          <div className="card-luxe">
            {/* Unified Progress Bar for all 7 steps */}
            <div className="mb-12">
              <div className="flex justify-between items-center mb-4">
                <span className="type-label uppercase tracking-widest text-xs text-[var(--cyan)]">
                  Step {step + 1} of {STEPS.length} — {currentStepDef.title}
                </span>
                <span className="type-label" style={{ color: 'var(--white-dim)' }}>{pct}%</span>
              </div>
              <div className="progress-track">
                <div className="progress-fill transition-all duration-500" style={{ width: `${pct}%` }} />
              </div>
            </div>

            {/* Back button logic */}
            {step > 0 && step < 6 && (
              <button onClick={goBack} className="btn-text mb-8">
                <ArrowLeft className="w-3 h-3" /> Back
              </button>
            )}

            {/* Render views based on step type */}
            {currentStepDef.type === 'question' && (
              <>
                <h2 className="type-headline mb-8 leading-snug" style={{ fontSize: 'clamp(1.3rem, 3vw, 1.8rem)' }}>
                  {currentStepDef.question}
                </h2>
                <div className="flex flex-col gap-2">
                  {currentStepDef.options?.map(opt => (
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
              </>
            )}

            {currentStepDef.type === 'estimate' && estimate && (
              <div className="animate-fade-in">
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

                <div className="bg-[var(--cyan-faint)] border border-[var(--cyan-dim)] p-4 mb-8">
                  <p className="type-label mb-2 text-[var(--cyan)]">Why this fits</p>
                  <p className="type-body text-sm">{getReasonNote(answers)}</p>
                </div>

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

                <button onClick={() => { setStep(5); scrollCard(); }} className="btn-primary justify-center w-full">
                  <span>Continue to Next Step</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {currentStepDef.type === 'contact' && (
              <div className="animate-fade-in">
                <h2 className="type-headline mb-4">Confirm your request</h2>
                <p className="type-body text-sm mb-8 opacity-70">
                  Leave your details and we'll reach out within 24h to confirm your appointment.
                </p>

                <form onSubmit={handleContactSubmit} className="flex flex-col gap-6">
                  <div className="form-field">
                    <label className="form-label"><User className="inline w-3 h-3 mr-1" /> Full Name *</label>
                    <input name="name" type="text" required placeholder="John Doe" className="form-input" />
                  </div>
                  <div className="form-field">
                    <label className="form-label">
                      <Phone className="inline w-3 h-3 mr-1" /> Phone *
                    </label>
                    <input name="phone" type="tel" required placeholder="+380 97 671 2147" className="form-input" />
                  </div>
                  <div className="form-field">
                    <label className="form-label"><Calendar className="inline w-3 h-3 mr-1" /> Preferred Date</label>
                    <input name="date" type="date" className="form-input" />
                  </div>
                  <div className="form-field">
                    <label className="form-label"><MessageSquare className="inline w-3 h-3 mr-1" /> Vehicle & Notes</label>
                    <textarea name="message" rows={2} placeholder="Make, model, colour…" className="form-textarea" />
                  </div>

                  <div className="flex flex-col gap-3 pt-2">
                    <button type="submit" disabled={isSubmitting} className="btn-primary justify-center w-full">
                      <span>{isSubmitting ? 'Sending…' : 'Submit Request'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </div>
            )}

            {currentStepDef.type === 'done' && (
              <div className="text-center py-8 animate-fade-in">
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
                  <WhatsAppCTA
                    variant="ghost"
                    className="justify-center border border-[var(--border)]"
                    message={`Hi, I completed the Smart Quote. I'm looking for ${answers['package']} ${answers['service']} for my ${answers['size']} vehicle.`}
                  />
                  <button onClick={reset} className="btn-text justify-center mt-4">
                    Start a new quote
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
