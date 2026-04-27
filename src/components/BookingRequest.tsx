import { useState } from 'react';
import { Calendar, Clock, Car } from 'lucide-react';

export function BookingRequest() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const requiredFields = ['service', 'date', 'time', 'name', 'phone'];
    
    // Safety handling and strict validation
    const missing = requiredFields.filter(f => !formData.get(f) || (formData.get(f) as string).trim() === '');
    if (missing.length > 0) {
      setErrorMsg('Please fill in all required fields.');
      return;
    }

    setErrorMsg('');
    setStatus('submitting');
    
    // Mock integration simulating Telegram/Sheets architecture
    setTimeout(() => {
      setStatus('success');
    }, 1200);
  };

  if (status === 'success') {
    return (
      <div className="bg-card border border-success/30 rounded-xl p-8 max-w-lg mx-auto text-center">
        <h3 className="text-2xl font-bold text-white mb-2">Request Sent</h3>
        <p className="text-slate-400 mb-6">
          Your request has been sent. The team will review your vehicle and service request before confirming the appointment.
        </p>
        <button 
          onClick={() => setStatus('idle')}
          className="text-primary hover:text-white transition-colors"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-xl p-8 max-w-lg mx-auto">
      <h3 className="text-2xl font-bold text-white mb-2">Request Appointment</h3>
      <p className="text-sm text-muted mb-6">Select your preferred date and time. We will confirm availability shortly.</p>
      
      {errorMsg && (
        <div className="bg-red-500/10 border border-red-500/50 text-red-500 text-sm p-3 rounded-md mb-6">
          {errorMsg}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="bg-slate-900 border border-border rounded-lg p-4 space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1 flex items-center"><Car className="h-4 w-4 mr-2" /> Service <span className="text-red-500 ml-1">*</span></label>
            <select name="service" className="w-full bg-slate-800 border border-border/50 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-primary text-sm">
              <option value="">Select a service...</option>
              <option value="Ceramic Coating">Ceramic Coating</option>
              <option value="Paint Correction">Paint Correction</option>
              <option value="Premium Wash">Premium Wash</option>
            </select>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1 flex items-center"><Calendar className="h-4 w-4 mr-2" /> Date <span className="text-red-500 ml-1">*</span></label>
              <input name="date" type="date" className="w-full bg-slate-800 border border-border/50 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-primary text-sm min-h-[38px] appearance-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1 flex items-center"><Clock className="h-4 w-4 mr-2" /> Time <span className="text-red-500 ml-1">*</span></label>
              <select name="time" className="w-full bg-slate-800 border border-border/50 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-primary text-sm">
                <option value="">Select time...</option>
                <option value="Morning (9AM-12PM)">Morning (9AM - 12PM)</option>
                <option value="Afternoon (12PM-4PM)">Afternoon (12PM - 4PM)</option>
                <option value="Late (4PM-6PM)">Late (4PM - 6PM)</option>
              </select>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Name <span className="text-red-500">*</span></label>
            <input name="name" type="text" className="w-full bg-slate-900 border border-border rounded-md px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Your Name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Phone Number <span className="text-red-500">*</span></label>
            <input name="phone" type="tel" className="w-full bg-slate-900 border border-border rounded-md px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-primary" placeholder="+1..." />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Message (Optional)</label>
            <textarea name="message" rows={2} className="w-full bg-slate-900 border border-border rounded-md px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Car details or special requests"></textarea>
          </div>
        </div>

        <button 
          disabled={status === 'submitting'}
          type="submit" 
          className="w-full bg-primary hover:bg-primary-hover text-white font-medium py-3 rounded-md transition-colors shadow-lg shadow-primary/10"
        >
          {status === 'submitting' ? 'Processing...' : 'Request Appointment'}
        </button>
      </form>
    </div>
  );
}
