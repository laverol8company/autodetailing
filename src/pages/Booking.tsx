import { useState } from 'react';
import { CheckCircle2, Clock, MapPin, Shield } from 'lucide-react';

const SERVICES = ['Ceramic Coating (5yr)', 'Paint Correction', 'PPF — Front Impact', 'Maintenance Wash', 'Interior Detail', 'Pre-Sale Preparation'];
const TIMES = ['Morning (09:00–12:00)', 'Afternoon (12:00–16:00)', 'Late afternoon (16:00–18:00)'];

export default function Booking() {
  const [status, setStatus] = useState<'idle' | 'pending' | 'done'>('idle');
  const [error, setError] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const missing = ['service', 'date', 'time', 'name', 'phone'].filter(f => !(fd.get(f) as string)?.trim());
    if (missing.length) { setError('Please complete all required fields.'); return; }
    setError('');
    setStatus('pending');
    setTimeout(() => setStatus('done'), 1200);
  }

  return (
    <div className="bg-[#050505] min-h-screen">
      <div className="site-container pt-40 pb-24">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

          {/* ─── LEFT: Info ─── */}
          <div className="lg:col-span-4">
            <span className="eyebrow">Reserve</span>
            <h1 className="display-md mb-6">Request an appointment.</h1>
            <p className="body-lead mb-12">
              We operate strictly by appointment. Each vehicle receives uninterrupted, meticulous attention from our lead technician.
            </p>

            <div className="flex flex-col gap-8">
              <div className="flex gap-4">
                <Shield className="w-5 h-5 text-[#CFCFCF] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-white text-sm font-semibold mb-1">What comes next</h3>
                  <p className="body-sm text-xs">We review your request and contact you within 24 hours to confirm availability and finalise the details.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="w-5 h-5 text-[#CFCFCF] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-white text-sm font-semibold mb-1">Slots fill up fast</h3>
                  <p className="body-sm text-xs">Multi-day ceramic and correction services are often booked 2–3 weeks in advance. Submit early.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-[#CFCFCF] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-white text-sm font-semibold mb-1">Location</h3>
                  <p className="body-sm text-xs">Premium Auto Sector<br />Bucharest, Romania<br />By appointment only.</p>
                </div>
              </div>
            </div>
          </div>

          {/* ─── RIGHT: Form ─── */}
          <div className="lg:col-span-8">
            {status === 'done' ? (
              <div className="card-dark flex flex-col items-center justify-center text-center py-20 min-h-[500px]">
                <CheckCircle2 className="w-10 h-10 text-[#CFCFCF] mb-6" />
                <h3 className="text-white text-2xl font-bold mb-3">Request Submitted</h3>
                <p className="body-sm max-w-sm mx-auto mb-8">
                  Your request has been sent. Our team will review the details and confirm the appointment with you within 24 hours.
                </p>
                <button onClick={() => setStatus('idle')} className="btn-text">
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card-dark">
                {error && (
                  <div className="mb-6 px-4 py-3 border border-[rgba(255,255,255,0.15)] text-[#CFCFCF] text-xs">
                    {error}
                  </div>
                )}

                {/* Service */}
                <div className="form-field mb-6">
                  <label className="form-label">Service <span className="text-[#CFCFCF]">*</span></label>
                  <select name="service" className="form-select">
                    <option value="">Select service…</option>
                    {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                {/* Date + Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="form-field">
                    <label className="form-label">Preferred Date <span className="text-[#CFCFCF]">*</span></label>
                    <input name="date" type="date" className="form-input" />
                  </div>
                  <div className="form-field">
                    <label className="form-label">Preferred Time <span className="text-[#CFCFCF]">*</span></label>
                    <select name="time" className="form-select">
                      <option value="">Select window…</option>
                      {TIMES.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                {/* Name + Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="form-field">
                    <label className="form-label">Full Name <span className="text-[#CFCFCF]">*</span></label>
                    <input name="name" type="text" placeholder="John Doe" className="form-input" />
                  </div>
                  <div className="form-field">
                    <label className="form-label">Phone <span className="text-[#CFCFCF]">*</span></label>
                    <input name="phone" type="tel" placeholder="+40 700..." className="form-input" />
                  </div>
                </div>

                {/* Message */}
                <div className="form-field mb-8">
                  <label className="form-label">Vehicle & Notes</label>
                  <textarea name="message" rows={3} placeholder="Make, model, colour, and any specific concerns…" className="form-textarea" />
                </div>

                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <button type="submit" disabled={status === 'pending'} className="btn-primary">
                    {status === 'pending' ? 'Sending…' : 'Request Appointment'}
                  </button>
                  <p className="text-[#8A8A8A] text-[10px] uppercase tracking-widest self-center">
                    No payment until inspection
                  </p>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
