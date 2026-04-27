import { useState } from 'react';
import { Calendar, Clock } from 'lucide-react';

export function BookingRequest() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const required = ['service', 'date', 'time', 'name', 'phone'];
    const missing = required.filter(f => !(fd.get(f) as string)?.trim());
    if (missing.length) { setErrorMsg('Please fill in all required fields.'); return; }
    setErrorMsg('');
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 1200);
  };

  if (status === 'success') return (
    <div className="glass-panel text-center py-10">
      <p className="text-2xl mb-2">✓</p>
      <h3 className="text-lg font-bold text-white mb-2">Request Sent</h3>
      <p className="text-sm text-[#6B7280] mb-6">Your request has been sent. The team will review your vehicle and service request before confirming the appointment.</p>
      <button onClick={() => setStatus('idle')} className="text-xs text-[#2563EB] hover:text-white transition-colors">Submit another</button>
    </div>
  );

  return (
    <div className="glass-panel">
      <h3 className="text-lg font-bold text-white mb-1">Request Appointment</h3>
      <p className="text-xs text-[#6B7280] mb-6">Pick your preferred date and time. We'll confirm availability shortly.</p>

      {errorMsg && (
        <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-xs p-3 rounded-lg mb-4">{errorMsg}</div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-[10px] uppercase tracking-widest font-semibold text-[#6B7280] mb-1.5">Service <span className="text-red-500">*</span></label>
          <select name="service" className="w-full bg-[#0c111a] border border-white/10 rounded-lg px-3 py-2.5 text-[#D8DEE9] text-sm focus:outline-none focus:ring-1 focus:ring-[#2563EB]">
            <option value="">Select service…</option>
            <option value="Ceramic Coating">Ceramic Coating</option>
            <option value="Paint Correction">Paint Correction</option>
            <option value="Premium Wash">Premium Wash</option>
            <option value="Interior Detailing">Interior Detailing</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-[10px] uppercase tracking-widest font-semibold text-[#6B7280] mb-1.5 flex items-center gap-1">
              <Calendar className="h-3 w-3" /> Date <span className="text-red-500">*</span>
            </label>
            <input name="date" type="date" className="w-full bg-[#0c111a] border border-white/10 rounded-lg px-3 py-2.5 text-[#D8DEE9] text-sm focus:outline-none focus:ring-1 focus:ring-[#2563EB]" />
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-widest font-semibold text-[#6B7280] mb-1.5 flex items-center gap-1">
              <Clock className="h-3 w-3" /> Time <span className="text-red-500">*</span>
            </label>
            <select name="time" className="w-full bg-[#0c111a] border border-white/10 rounded-lg px-3 py-2.5 text-[#D8DEE9] text-sm focus:outline-none focus:ring-1 focus:ring-[#2563EB]">
              <option value="">Select…</option>
              <option value="Morning (9AM-12PM)">Morning (9–12)</option>
              <option value="Afternoon (12PM-4PM)">Afternoon (12–4)</option>
              <option value="Late (4PM-6PM)">Late (4–6)</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-[10px] uppercase tracking-widest font-semibold text-[#6B7280] mb-1.5">Name <span className="text-red-500">*</span></label>
            <input name="name" type="text" placeholder="Your Name" className="w-full bg-[#0c111a] border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#2563EB] placeholder-[#6B7280]" />
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-widest font-semibold text-[#6B7280] mb-1.5">Phone <span className="text-red-500">*</span></label>
            <input name="phone" type="tel" placeholder="+1…" className="w-full bg-[#0c111a] border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#2563EB] placeholder-[#6B7280]" />
          </div>
        </div>

        <div>
          <label className="block text-[10px] uppercase tracking-widest font-semibold text-[#6B7280] mb-1.5">Message</label>
          <textarea name="message" rows={2} placeholder="Car details or special requests…" className="w-full bg-[#0c111a] border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#2563EB] placeholder-[#6B7280] resize-none" />
        </div>

        <button disabled={status === 'submitting'} type="submit" className="premium-button-primary w-full justify-center py-3 text-sm">
          {status === 'submitting' ? 'Sending…' : 'Request Appointment'}
        </button>
      </form>
    </div>
  );
}
