import { useState } from 'react';
import { calculateQuoteEstimate, QuoteEstimateResult } from '../lib/quoteEstimate';
import { ChevronRight, CheckCircle2 } from 'lucide-react';

const steps = [
  { id: 'size', question: 'Vehicle size?', options: ['Small', 'Medium', 'Large', 'Extra Large'] },
  { id: 'condition', question: 'Current condition?', options: ['Low', 'Medium', 'High'] },
  { id: 'service', question: 'Service needed?', options: ['Exterior Detailing', 'Interior Detailing', 'Ceramic Coating', 'Paint Correction', 'PPF'] },
  { id: 'package', question: 'Preferred level?', options: ['Essential', 'Premium', 'Signature'] },
];

export function SmartQuiz({ onComplete }: { onComplete: (estimate: QuoteEstimateResult) => void }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [estimate, setEstimate] = useState<QuoteEstimateResult | null>(null);

  const handleSelect = (val: string) => {
    const newAnswers = { ...answers, [steps[currentStep].id]: val };
    setAnswers(newAnswers);

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      try {
        const est = calculateQuoteEstimate({
          serviceType: newAnswers['service'],
          vehicleSize: newAnswers['size'] as any,
          condition: newAnswers['condition'] as any,
          packageLevel: newAnswers['package'] as any,
        });
        setEstimate(est);
      } catch {
        setEstimate({
          estimatedPriceRange: 'Custom Quote Required',
          estimatedDuration: 'To be determined',
          note: 'Please contact us directly for an accurate estimate.'
        });
      }
    }
  };

  if (estimate) {
    return (
      <div className="glass-panel max-w-md mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-9 w-9 rounded-full bg-[#2563EB]/20 flex items-center justify-center">
            <CheckCircle2 className="h-5 w-5 text-[#2563EB]" />
          </div>
          <div>
            <p className="text-xs text-[#6B7280] font-semibold uppercase tracking-widest">Recommendation Ready</p>
            <h3 className="text-base font-bold text-white">Your Suggested Plan</h3>
          </div>
        </div>

        <div className="bg-[#0c111a] rounded-xl border border-white/5 p-5 mb-6 space-y-3">
          <div>
            <span className="block text-[10px] text-[#6B7280] uppercase font-semibold mb-0.5">Recommended</span>
            <span className="font-semibold text-white text-sm">{answers['package']} {answers['service']}</span>
          </div>
          <div className="grid grid-cols-2 gap-3 pt-2 border-t border-white/5">
            <div>
              <span className="block text-[10px] text-[#6B7280] uppercase font-semibold mb-0.5">Estimated Range</span>
              <span className="text-xl font-extrabold text-[#2563EB]">{estimate.estimatedPriceRange}</span>
            </div>
            <div>
              <span className="block text-[10px] text-[#6B7280] uppercase font-semibold mb-0.5">Duration</span>
              <span className="text-sm text-[#D8DEE9] font-medium">{estimate.estimatedDuration}</span>
            </div>
          </div>
          <p className="text-[10px] text-[#6B7280] italic pt-2 border-t border-white/5">{estimate.note}</p>
        </div>

        <div className="flex flex-col gap-2">
          <button onClick={() => onComplete(estimate)} className="premium-button-primary w-full justify-center py-3 text-sm">
            Request Appointment
          </button>
          <button
            onClick={() => { setEstimate(null); setCurrentStep(0); setAnswers({}); }}
            className="w-full py-2 text-xs text-[#6B7280] hover:text-white transition-colors"
          >
            Start over
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-panel max-w-md mx-auto">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-semibold text-[#2563EB] uppercase tracking-widest">Step {currentStep + 1} of {steps.length}</span>
          <span className="text-[10px] text-[#6B7280]">{Math.round(((currentStep + 1) / steps.length) * 100)}%</span>
        </div>
        <div className="w-full bg-white/5 h-1 rounded-full">
          <div
            className="bg-[#2563EB] h-1 rounded-full transition-all duration-500"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          />
        </div>
        <h3 className="text-lg font-bold text-white mt-5">{steps[currentStep].question}</h3>
      </div>

      <div className="space-y-2">
        {steps[currentStep].options.map((opt) => (
          <button
            key={opt}
            onClick={() => handleSelect(opt)}
            className="w-full flex items-center justify-between text-left px-4 py-3.5 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-[#2563EB]/40 text-white transition-all group"
          >
            <span className="text-sm font-medium text-[#D8DEE9] group-hover:text-white">{opt}</span>
            <ChevronRight className="h-4 w-4 text-[#6B7280] group-hover:text-[#2563EB] transition-colors" />
          </button>
        ))}
      </div>
    </div>
  );
}
