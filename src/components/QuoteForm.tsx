import { useState } from 'react';
import { WhatsAppCTA } from './WhatsAppCTA';

export function QuoteForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    
    // Strict Validation
    if (!name || name.trim().length < 2) {
      setErrorMsg('Please enter a valid name.');
      return;
    }
    if (!phone || phone.trim().length < 6) {
      setErrorMsg('Please enter a valid phone number.');
      return;
    }

    setErrorMsg('');
    setStatus('submitting');
    
    // Mock integration - no real credentials should be used as per rules.
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="bg-card border border-success/30 rounded-xl p-8 max-w-lg mx-auto text-center">
        <h3 className="text-2xl font-bold text-white mb-2">Request Received</h3>
        <p className="text-slate-400 mb-6">Thank you. Our team will review your details and contact you shortly with a personalized quote.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-2 rounded-md font-medium"
        >
          Submit Another
        </button>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-xl p-8 max-w-lg mx-auto">
      <h3 className="text-2xl font-bold text-white mb-6">Get a Custom Quote</h3>
      
      {errorMsg && (
        <div className="bg-red-500/10 border border-red-500/50 text-red-500 text-sm p-3 rounded-md mb-6">
          {errorMsg}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">Name <span className="text-red-500">*</span></label>
          <input name="name" type="text" className="w-full bg-slate-900 border border-border rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="John Doe" />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">Phone Number <span className="text-red-500">*</span></label>
          <input name="phone" type="tel" className="w-full bg-slate-900 border border-border rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="+1 (555) 000-0000" />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Car Brand</label>
            <input name="brand" type="text" className="w-full bg-slate-900 border border-border rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Porsche" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Model</label>
            <input name="model" type="text" className="w-full bg-slate-900 border border-border rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="911 GT3" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">Service Needed</label>
          <select name="service" className="w-full bg-slate-900 border border-border rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
            <option>Ceramic Coating</option>
            <option>Paint Correction</option>
            <option>PPF / Protection</option>
            <option>Interior Detailing</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">Additional Notes</label>
          <textarea name="message" rows={3} className="w-full bg-slate-900 border border-border rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Any specific issues or questions?"></textarea>
        </div>
        
        <button 
          disabled={status === 'submitting'}
          type="submit" 
          className="w-full bg-primary hover:bg-primary-hover text-white font-medium py-3 rounded-md transition-colors mt-2"
        >
          {status === 'submitting' ? 'Submitting...' : 'Request Quote'}
        </button>

        <div className="mt-4 flex items-center justify-center gap-2">
          <span className="text-sm text-slate-400">Or reach out directly:</span>
          <WhatsAppCTA variant="outline" className="h-8 py-1 rounded text-xs" />
        </div>
      </form>
    </div>
  );
}
