import { useState } from 'react';

export function QuoteForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get('name') as string;
    const phone = fd.get('phone') as string;

    if (!name || name.trim().length < 2) { setErrorMsg('Please enter a valid name.'); return; }
    if (!phone || phone.trim().length < 6) { setErrorMsg('Please enter a valid phone number.'); return; }
    setErrorMsg('');
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 1400);
  };

  if (status === 'success') return (
    <div className="glass-panel text-center py-10">
      <p className="text-2xl mb-2">✓</p>
      <h3 className="text-lg font-bold text-white mb-2">Request Received</h3>
      <p className="text-sm text-[#6B7280] mb-6">Our team will review your details and send a personalised quote shortly.</p>
      <button onClick={() => setStatus('idle')} className="text-xs text-[#2563EB] hover:text-white transition-colors">Submit another</button>
    </div>
  );

  return (
    <div className="glass-panel">
      <h3 className="text-lg font-bold text-white mb-1">Get a Custom Quote</h3>
      <p className="text-xs text-[#6B7280] mb-6">We'll review your vehicle details and reply with an accurate estimate.</p>

      {errorMsg && (
        <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-xs p-3 rounded-lg mb-4">{errorMsg}</div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-[10px] uppercase tracking-widest font-semibold text-[#6B7280] mb-1.5">Name <span className="text-red-500">*</span></label>
            <input name="name" type="text" placeholder="Alex" className="w-full bg-[#0c111a] border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#2563EB] focus:border-[#2563EB]/50 placeholder-[#6B7280]" />
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-widest font-semibold text-[#6B7280] mb-1.5">Phone <span className="text-red-500">*</span></label>
            <input name="phone" type="tel" placeholder="+1 555..." className="w-full bg-[#0c111a] border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#2563EB] focus:border-[#2563EB]/50 placeholder-[#6B7280]" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-[10px] uppercase tracking-widest font-semibold text-[#6B7280] mb-1.5">Car Brand</label>
            <input name="brand" type="text" placeholder="Porsche" className="w-full bg-[#0c111a] border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#2563EB] placeholder-[#6B7280]" />
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-widest font-semibold text-[#6B7280] mb-1.5">Model</label>
            <input name="model" type="text" placeholder="911 GT3" className="w-full bg-[#0c111a] border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#2563EB] placeholder-[#6B7280]" />
          </div>
        </div>

        <div>
          <label className="block text-[10px] uppercase tracking-widest font-semibold text-[#6B7280] mb-1.5">Service</label>
          <select name="service" className="w-full bg-[#0c111a] border border-white/10 rounded-lg px-3 py-2.5 text-[#D8DEE9] text-sm focus:outline-none focus:ring-1 focus:ring-[#2563EB]">
            <option>Ceramic Coating</option>
            <option>Paint Correction</option>
            <option>PPF / Protection</option>
            <option>Interior Detailing</option>
            <option>Exterior Detailing</option>
          </select>
        </div>

        <div>
          <label className="block text-[10px] uppercase tracking-widest font-semibold text-[#6B7280] mb-1.5">Notes</label>
          <textarea name="message" rows={2} placeholder="Any specific issues or questions?" className="w-full bg-[#0c111a] border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#2563EB] placeholder-[#6B7280] resize-none" />
        </div>

        <button disabled={status === 'submitting'} type="submit" className="premium-button-primary w-full justify-center py-3 text-sm">
          {status === 'submitting' ? 'Sending…' : 'Request Quote'}
        </button>
      </form>
    </div>
  );
}
