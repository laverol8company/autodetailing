import { useState } from 'react';
import { Link } from 'react-router-dom';
import { calculateQuoteEstimate, QuoteEstimateResult } from '../lib/quoteEstimate';
import { ChevronRight, ArrowLeft, CheckCircle2, Phone } from 'lucide-react';

const steps = [
  { id: 'size', question: 'What size is your vehicle?', options: ['Small', 'Medium', 'Large', 'Extra Large'] },
  { id: 'condition', question: 'What is the current condition?', options: ['Low', 'Medium', 'High'] },
  { id: 'service', question: 'Which service are you considering?', options: ['Exterior Detailing', 'Interior Detailing', 'Ceramic Coating', 'Paint Correction', 'PPF'] },
  { id: 'package', question: 'Preferred protection level?', options: ['Essential', 'Premium', 'Signature'] },
];

export default function SmartQuote() {
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

  const reset = () => {
    setEstimate(null);
    setCurrentStep(0);
    setAnswers({});
  };

  return (
    <div className="flex flex-col min-h-[90vh] bg-[#05070A] py-16">
      <div className="premium-container flex-grow flex items-center justify-center">
        
        {estimate ? (
          <div className="smart-flow-card w-full">
            <div className="flex flex-col items-center justify-center text-center mb-8 border-b border-white/5 pb-8">
              <div className="h-12 w-12 rounded-full bg-[#2563EB]/20 flex items-center justify-center mb-4">
                <CheckCircle2 className="h-6 w-6 text-[#2563EB]" />
              </div>
              <p className="text-[10px] text-[#6B7280] font-bold uppercase tracking-widest mb-2">Recommendation Ready</p>
              <h2 className="text-3xl font-bold text-white">Your Tailored Plan</h2>
            </div>

            <div className="bg-[#05070A] rounded-xl border border-white/10 p-6 mb-8 text-center shadow-inner">
              <span className="block text-[10px] text-[#6B7280] uppercase tracking-widest font-semibold mb-2">Recommended Setup</span>
              <span className="font-bold text-white text-xl block mb-6">{answers['package']} {answers['service']}</span>
              
              <div className="grid grid-cols-2 gap-4 divide-x divide-white/5">
                <div>
                  <span className="block text-[10px] text-[#6B7280] uppercase tracking-widest font-semibold mb-1">Estimated Value</span>
                  <span className="text-2xl font-extrabold text-[#2563EB] tracking-tight">{estimate.estimatedPriceRange}</span>
                </div>
                <div>
                  <span className="block text-[10px] text-[#6B7280] uppercase tracking-widest font-semibold mb-1">Duration</span>
                  <span className="text-base text-[#D8DEE9] font-medium">{estimate.estimatedDuration}</span>
                </div>
              </div>
            </div>
            
            <p className="text-xs text-[#9CA3AF] italic text-center mb-10 leading-relaxed max-w-sm mx-auto">
              * {estimate.note}
            </p>

            <div className="flex flex-col gap-3">
              <Link to="/booking" className="premium-button-primary py-4 w-full justify-center text-[13px] tracking-wide uppercase">
                Submit Formal Request
              </Link>
              <a 
                href={`https://wa.me/something?text=${encodeURIComponent(`Hi, I completed the Smart Quote. I'm looking at ${answers['package']} ${answers['service']} for my ${answers['size']} car.`)}`}
                target="_blank" rel="noopener noreferrer"
                className="premium-button-secondary border-none hover:bg-white/5 text-[11px] tracking-wide uppercase group"
              >
                <Phone className="w-3.5 h-3.5 text-[#6B7280] group-hover:text-white" /> Continue on WhatsApp
              </a>
              <button onClick={reset} className="mt-4 text-[10px] uppercase font-bold tracking-widest text-[#6B7280] hover:text-white transition-colors">
                Start Over
              </button>
            </div>
          </div>
        ) : (
          <div className="smart-flow-card w-full">
            <div className="mb-8">
              <button 
                onClick={() => currentStep > 0 && setCurrentStep(currentStep - 1)}
                className={`flex items-center text-[10px] uppercase font-bold tracking-widest mb-6 transition-colors ${currentStep > 0 ? 'text-[#9CA3AF] hover:text-white' : 'text-transparent pointer-events-none'}`}
              >
                <ArrowLeft className="w-3 h-3 mr-1" /> Back
              </button>
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold text-[#2563EB] uppercase tracking-widest">Step {currentStep + 1} of {steps.length}</span>
                <span className="text-[10px] font-bold text-[#6B7280]">{Math.round(((currentStep + 1) / steps.length) * 100)}%</span>
              </div>
              <div className="w-full bg-[#05070A] border border-white/5 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-[#2563EB] h-full transition-all duration-500 ease-out"
                  style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mt-8 leading-tight">{steps[currentStep].question}</h3>
            </div>

            <div className="space-y-3">
              {steps[currentStep].options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleSelect(opt)}
                  className="w-full flex items-center justify-between text-left px-5 py-4 rounded-xl border border-white/5 bg-[#05070A] hover:border-[#2563EB]/50 hover:bg-[#2563EB]/5 text-white transition-all group shadow-sm"
                >
                  <span className="text-sm font-semibold text-[#D8DEE9] group-hover:text-white tracking-wide">{opt}</span>
                  <ChevronRight className="h-4 w-4 text-[#6B7280] group-hover:text-[#2563EB] transition-colors" />
                </button>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
