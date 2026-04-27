import { useState } from 'react';
import { Link } from 'react-router-dom';
import { calculateQuoteEstimate, QuoteEstimateResult } from '../lib/quoteEstimate';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { WhatsAppCTA } from '../components/WhatsAppCTA';

interface Step { id: string; question: string; options: string[]; }
const STEPS: Step[] = [
  { id: 'size', question: 'What size is your vehicle?', options: ['Small (Hatchback, Mini)', 'Medium (Sedan, Coupe)', 'Large (SUV, Estate)', 'Extra Large (Van, 4x4)'] },
  { id: 'condition', question: 'Current paint condition?', options: ['Low — Few visible issues', 'Medium — Visible swirls & marks', 'High — Heavy scratches & fading'] },
  { id: 'service', question: 'What are you looking for?', options: ['Exterior Detailing', 'Interior Detailing', 'Ceramic Coating', 'Paint Correction', 'PPF / Paint Protection Film'] },
  { id: 'package', question: 'Preferred protection level?', options: ['Essential', 'Premium', 'Signature'] },
];

function normaliseSize(s: string): string {
  if (s.startsWith('Small')) return 'Small';
  if (s.startsWith('Medium')) return 'Medium';
  if (s.startsWith('Large')) return 'Large';
  return 'Extra Large';
}
function normaliseCondition(s: string): string {
  if (s.startsWith('Low')) return 'Low';
  if (s.startsWith('Medium')) return 'Medium';
  return 'High';
}

export default function SmartQuote() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [estimate, setEstimate] = useState<QuoteEstimateResult | null>(null);

  function handleSelect(val: string) {
    const next = { ...answers, [STEPS[step].id]: val };
    setAnswers(next);
    if (step < STEPS.length - 1) {
      setStep(step + 1);
    } else {
      try {
        const result = calculateQuoteEstimate({
          serviceType: next['service'],
          vehicleSize: normaliseSize(next['size']) as any,
          condition: normaliseCondition(next['condition']) as any,
          packageLevel: next['package'] as any,
        });
        setEstimate(result);
      } catch {
        setEstimate({ estimatedPriceRange: 'Custom Quote', estimatedDuration: 'TBD', note: 'Contact us for an accurate estimate.' });
      }
    }
  }

  function reset() { setStep(0); setAnswers({}); setEstimate(null); }

  const pct = Math.round(((step + 1) / STEPS.length) * 100);

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center py-32 px-4">
      <div className="w-full max-w-xl">

        {estimate ? (
          /* ─── RESULT CARD ─── */
          <div className="quote-card">
            <div className="flex items-center gap-3 mb-8">
              <CheckCircle2 className="w-5 h-5 text-[#CFCFCF] flex-shrink-0" />
              <span className="label-xs">Recommendation ready</span>
            </div>
            <h2 className="display-md mb-2">{answers['package']} {answers['service']}</h2>
            <p className="body-sm mb-10">Based on your {normaliseSize(answers['size'])} vehicle in {normaliseCondition(answers['condition'])} condition.</p>

            <div className="grid grid-cols-2 gap-px bg-[rgba(255,255,255,0.06)] mb-10">
              <div className="bg-[#050505] p-6">
                <span className="label-xs block mb-2">Estimated Range</span>
                <span className="text-white font-black text-2xl">{estimate.estimatedPriceRange}</span>
              </div>
              <div className="bg-[#050505] p-6">
                <span className="label-xs block mb-2">Duration</span>
                <span className="text-white font-semibold text-lg">{estimate.estimatedDuration}</span>
              </div>
            </div>

            <p className="body-sm text-xs italic mb-10 pb-10 border-b border-[rgba(255,255,255,0.06)]">
              * {estimate.note}
            </p>

            <div className="flex flex-col gap-3">
              <Link to="/booking" className="btn-primary justify-center">
                Request Appointment
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
          /* ─── STEP CARD ─── */
          <div className="quote-card">
            {/* Progress */}
            <div className="mb-10">
              <div className="flex justify-between items-center mb-3">
                <span className="label-xs">Step {step + 1} of {STEPS.length}</span>
                <span className="label-xs">{pct}%</span>
              </div>
              <div className="progress-bar-track">
                <div className="progress-bar-fill" style={{ width: `${pct}%` }} />
              </div>
            </div>

            {/* Back */}
            {step > 0 && (
              <button
                onClick={() => setStep(step - 1)}
                className="flex items-center gap-2 text-[#8A8A8A] hover:text-white transition-colors text-xs uppercase tracking-widest font-medium mb-8"
              >
                <ArrowLeft className="w-3 h-3" /> Back
              </button>
            )}

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 leading-snug">
              {STEPS[step].question}
            </h2>

            <div className="flex flex-col gap-2">
              {STEPS[step].options.map(opt => (
                <button
                  key={opt}
                  onClick={() => handleSelect(opt)}
                  className="flex items-center justify-between px-5 py-4 bg-[#171717] border border-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.25)] hover:bg-[#232323] text-white text-sm font-medium text-left transition-all duration-200 group"
                >
                  <span className="text-[#CFCFCF] group-hover:text-white transition-colors">{opt}</span>
                  <ArrowRight className="w-4 h-4 text-[#8A8A8A] group-hover:text-white group-hover:translate-x-1 transition-all flex-shrink-0" />
                </button>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
