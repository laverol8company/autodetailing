import { useState } from 'react';
import { Calendar, Clock, CheckCircle2, ShieldCheck, MapPin, Watch } from 'lucide-react';

export default function Booking() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const required = ['service', 'date', 'time', 'name', 'phone'];
    const missing = required.filter(f => !(fd.get(f) as string)?.trim());
    
    if (missing.length) { 
      setErrorMsg('Please complete all required fields (*).'); 
      return; 
    }
    
    setErrorMsg('');
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 1200);
  };

  return (
    <div className="flex flex-col bg-[#05070A] py-16 md:py-24">
      <div className="premium-container">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* LEFT: Trust / Info Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <span className="section-eyebrow">Reservation</span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">Request<br/>Appointment</h1>
            <p className="text-[#9CA3AF] text-base mb-12 font-light leading-relaxed">
              We operate strictly by appointment to ensure every vehicle receives uninterrupted, meticulous attention.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <ShieldCheck className="w-5 h-5 text-[#2563EB]" />
                </div>
                <div>
                  <h3 className="text-white text-sm font-bold mb-1">What happens next?</h3>
                  <p className="text-[#9CA3AF] text-xs leading-relaxed">Your request will be reviewed by our lead technician. We'll contact you to confirm the exact date and finalize the details of your package.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Watch className="w-5 h-5 text-[#2563EB]" />
                </div>
                <div>
                  <h3 className="text-white text-sm font-bold mb-1">Secure your slot</h3>
                  <p className="text-[#9CA3AF] text-xs leading-relaxed">Our calendar fills up weeks in advance, especially for multi-day ceramic and paint correction services.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <MapPin className="w-5 h-5 text-[#2563EB]" />
                </div>
                <div>
                  <h3 className="text-white text-sm font-bold mb-1">Studio Location</h3>
                  <p className="text-[#9CA3AF] text-xs leading-relaxed">Premium Auto Sector<br/>Bucharest, Romania</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Form Column */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            
            {status === 'success' ? (
              <div className="glass-panel text-center py-16 flex flex-col items-center justify-center h-full">
                <div className="h-16 w-16 rounded-full bg-[#2563EB]/10 flex items-center justify-center mb-6">
                  <CheckCircle2 className="h-8 w-8 text-[#2563EB]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Request Submitted</h3>
                <p className="text-sm text-[#9CA3AF] mb-8 max-w-md mx-auto leading-relaxed">
                  Your reservation request has been securely lodged in our system. A technician will review your vehicle details and contact you shortly.
                </p>
                <button onClick={() => setStatus('idle')} className="text-[10px] text-[#2563EB] uppercase font-bold tracking-widest hover:text-white transition-colors">
                  Submit another vehicle
                </button>
              </div>
            ) : (
              <div className="glass-panel">
                <h3 className="text-lg font-bold text-white mb-8 border-b border-white/10 pb-6">Vehicle & Timeslot</h3>

                {errorMsg && (
                  <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-xs p-4 rounded-md mb-6">{errorMsg}</div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Service Selection */}
                  <div className="p-5 bg-[#05070A] border border-white/5 rounded-xl space-y-5">
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest font-bold text-[#6B7280] mb-2">Intent <span className="text-[#2563EB]">*</span></label>
                      <select name="service" className="w-full bg-[#0B0F14] border border-white/10 rounded-md px-4 py-3 text-[#D8DEE9] text-sm focus:outline-none focus:border-[#2563EB]/50 transition-colors">
                        <option value="">Select primary service…</option>
                        <option value="Ceramic Coating">Ceramic Coating</option>
                        <option value="Paint Correction">Paint Correction</option>
                        <option value="PPF">Paint Protection Film</option>
                        <option value="Maintenance Wash">Maintenance Wash</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[10px] uppercase tracking-widest font-bold text-[#6B7280] mb-2 flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> Preferred Date <span className="text-[#2563EB]">*</span>
                        </label>
                        <input name="date" type="date" className="w-full bg-[#0B0F14] border border-white/10 rounded-md px-4 py-3 text-[#D8DEE9] text-sm focus:outline-none focus:border-[#2563EB]/50 transition-colors" />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase tracking-widest font-bold text-[#6B7280] mb-2 flex items-center gap-1">
                          <Clock className="w-3 h-3" /> Preferred Window <span className="text-[#2563EB]">*</span>
                        </label>
                        <select name="time" className="w-full bg-[#0B0F14] border border-white/10 rounded-md px-4 py-3 text-[#D8DEE9] text-sm focus:outline-none focus:border-[#2563EB]/50 transition-colors">
                          <option value="">Select time…</option>
                          <option value="Morning">Morning (09:00 - 12:00)</option>
                          <option value="Afternoon">Afternoon (12:00 - 16:00)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Personal Details */}
                  <div className="p-5 bg-[#05070A] border border-white/5 rounded-xl space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[10px] uppercase tracking-widest font-bold text-[#6B7280] mb-2">Full Name <span className="text-[#2563EB]">*</span></label>
                        <input name="name" type="text" placeholder="John Doe" className="w-full bg-[#0B0F14] border border-white/10 rounded-md px-4 py-3 text-white text-sm focus:outline-none focus:border-[#2563EB]/50 placeholder-[#6B7280] transition-colors" />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase tracking-widest font-bold text-[#6B7280] mb-2">Phone <span className="text-[#2563EB]">*</span></label>
                        <input name="phone" type="tel" placeholder="+1..." className="w-full bg-[#0B0F14] border border-white/10 rounded-md px-4 py-3 text-white text-sm focus:outline-none focus:border-[#2563EB]/50 placeholder-[#6B7280] transition-colors" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-widest font-bold text-[#6B7280] mb-2">Vehicle Details & Notes</label>
                      <textarea name="message" rows={3} placeholder="Make, model, color, and any specific concerns..." className="w-full bg-[#0B0F14] border border-white/10 rounded-md px-4 py-3 text-white text-sm focus:outline-none focus:border-[#2563EB]/50 placeholder-[#6B7280] resize-none transition-colors" />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button disabled={status === 'submitting'} type="submit" className="premium-button-primary w-full justify-center py-4 text-xs tracking-widest uppercase">
                      {status === 'submitting' ? 'Processing...' : 'Request Appointment'}
                    </button>
                    <p className="text-center text-[10px] text-[#6B7280] mt-4 font-medium uppercase tracking-widest">
                      No payment required until inspection.
                    </p>
                  </div>
                </form>
              </div>
            )}
            
          </div>
        </div>

      </div>
    </div>
  );
}
