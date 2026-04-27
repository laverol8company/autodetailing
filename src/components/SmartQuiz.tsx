import { useState } from 'react';
import { calculateQuoteEstimate, QuoteEstimateResult } from '../lib/quoteEstimate';
import { ChevronRight, CheckCircle2 } from 'lucide-react';

const steps = [
  { id: 'size', question: 'What size is your vehicle?', options: ['Small', 'Medium', 'Large', 'Extra Large'] },
  { id: 'condition', question: 'What is the current condition?', options: ['Low', 'Medium', 'High'] },
  { id: 'service', question: 'Which service are you interested in?', options: ['Exterior Detailing', 'Interior Detailing', 'Ceramic Coating', 'Paint Correction', 'PPF'] },
  { id: 'package', question: 'What level of care do you prefer?', options: ['Essential', 'Premium', 'Signature'] },
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
      // Calculate
      try {
        const est = calculateQuoteEstimate({
          serviceType: newAnswers['service'],
          vehicleSize: newAnswers['size'] as any,
          condition: newAnswers['condition'] as any,
          packageLevel: newAnswers['package'] as any,
        });
        setEstimate(est);
      } catch {
        // Safe handling, no technical error message to user
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
      <div className="bg-card border border-primary/40 rounded-xl p-8 max-w-lg mx-auto shadow-2xl shadow-primary/10">
        <div className="flex items-center justify-center mb-6">
          <div className="bg-success/20 p-3 rounded-full">
             <CheckCircle2 className="h-8 w-8 text-success" />
          </div>
        </div>
        <h3 className="text-2xl font-bold text-center text-white mb-2">Your Recommendation</h3>
        <p className="text-center text-slate-400 mb-8">Based on your answers, here is our suggested plan.</p>
        
        <div className="space-y-4 mb-8 bg-slate-800/50 p-6 rounded-lg">
          <div>
            <span className="block text-xs uppercase text-slate-500 font-semibold mb-1">Recommended Package</span>
            <span className="text-lg font-medium text-white">{answers['package']} {answers['service']}</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="block text-xs uppercase text-slate-500 font-semibold mb-1">Estimated Range</span>
              <span className="text-xl font-bold text-primary">{estimate.estimatedPriceRange}</span>
            </div>
            <div>
              <span className="block text-xs uppercase text-slate-500 font-semibold mb-1">Est. Duration</span>
              <span className="text-white">{estimate.estimatedDuration}</span>
            </div>
          </div>
          <p className="text-xs text-muted italic mt-4">{estimate.note}</p>
        </div>
        
        <div className="flex flex-col gap-3">
          <button 
            onClick={() => onComplete(estimate)}
            className="w-full bg-primary hover:bg-primary-hover text-white font-medium py-3 rounded-md transition-colors shadow-lg shadow-primary/20"
          >
            Request Appointment
          </button>
          <button 
            onClick={() => { setEstimate(null); setCurrentStep(0); setAnswers({}); }}
            className="w-full bg-transparent hover:bg-slate-800 text-slate-300 py-3 font-medium rounded-md transition-colors"
          >
            Start Over
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-xl p-8 max-w-lg mx-auto">
      <div className="mb-8">
        <span className="text-xs font-semibold text-primary uppercase tracking-wider mb-2 block">
          Step {currentStep + 1} of {steps.length}
        </span>
        <h3 className="text-2xl font-bold text-white mb-2">{steps[currentStep].question}</h3>
        <div className="w-full bg-slate-800 h-1.5 rounded-full mt-6">
          <div 
            className="bg-primary h-1.5 rounded-full transition-all duration-300"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          ></div>
        </div>
      </div>
      
      <div className="space-y-3">
        {steps[currentStep].options.map((opt) => (
          <button
            key={opt}
            onClick={() => handleSelect(opt)}
            className="w-full flex items-center justify-between text-left p-4 rounded-lg border border-border bg-slate-800/30 hover:bg-slate-800 hover:border-primary/50 text-white transition-all group"
          >
            <span className="font-medium text-slate-300 group-hover:text-white">{opt}</span>
            <ChevronRight className="h-5 w-5 text-slate-600 group-hover:text-primary transition-colors" />
          </button>
        ))}
      </div>
    </div>
  );
}
