import { useState } from 'react';
import { CheckCircle2, Clock, MapPin, Shield } from 'lucide-react';
import { RevealText, FadeUp } from '../components/Reveal';

const SERVICES = ['Ceramic Coating (5yr)', 'Paint Correction', 'PPF — Front Impact', 'Maintenance Wash', 'Interior Detail', 'Pre-Sale Preparation'];
const TIMES = ['Morning (09:00–12:00)', 'Afternoon (12:00–16:00)', 'Late afternoon (16:00–18:00)'];

const INFO = [
  { Icon: Shield, title: 'What comes next', body: 'We review your request and contact you within 24 hours to confirm availability and finalise details.' },
  { Icon: Clock,  title: 'Slots fill up fast', body: 'Multi-day ceramic and correction services are booked 2–3 weeks in advance. Submit early.' },
  { Icon: MapPin, title: 'Location', body: 'Premium Auto Sector\nBucharest, Romania\nBy appointment only.' },
];

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
    <div className="bg-[var(--black)] min-h-screen">

      {/* Page hero */}
      <div className="relative pt-36 pb-20 border-b border-[var(--border)]">
        <div className="site-container">
          <FadeUp><p className="type-label mb-6">Reserve</p></FadeUp>
          <RevealText as="h1" className="type-display mb-4">Request an</RevealText>
          <RevealText as="h1" className="type-display" delay={0.1}><em>Appointment.</em></RevealText>
        </div>
      </div>

      {/* Content */}
      <div className="site-container py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

          {/* Left info */}
          <div className="lg:col-span-4">
            <FadeUp>
              <p className="type-lead mb-12">
                We operate strictly by appointment. Each vehicle receives uninterrupted,
                meticulous attention from our lead technician.
              </p>
            </FadeUp>
            <div className="flex flex-col gap-10">
              {INFO.map(({ Icon, title, body }, i) => (
                <FadeUp key={title} delay={i * 0.1}>
                  <div className="flex gap-5">
                    <div className="w-8 h-8 border border-[var(--cyan)] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-3.5 h-3.5 text-[var(--cyan)]" />
                    </div>
                    <div>
                      <h3 className="text-white text-sm font-medium mb-2">{title}</h3>
                      <p className="type-body text-xs whitespace-pre-line">{body}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div className="lg:col-span-8">
            {status === 'done' ? (
              <div className="card-luxe flex flex-col items-center justify-center text-center py-24 min-h-[500px]">
                <div className="w-12 h-12 border border-[var(--cyan)] flex items-center justify-center mb-8">
                  <CheckCircle2 className="w-5 h-5 text-[var(--cyan)]" />
                </div>
                <h3 className="type-headline text-2xl mb-4">Request Submitted</h3>
                <p className="type-body max-w-sm mx-auto mb-10">
                  Your request has been sent. We'll confirm the appointment within 24 hours.
                </p>
                <button onClick={() => setStatus('idle')} className="btn-text">
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card-luxe">

                {error && (
                  <div className="mb-8 px-4 py-3 border border-[rgba(255,100,100,0.3)] text-[rgba(255,150,150,0.8)] text-xs type-mono">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">

                  {/* Service */}
                  <div className="form-field md:col-span-2">
                    <label className="form-label">Service *</label>
                    <select name="service" className="form-select">
                      <option value="">Select service…</option>
                      {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  {/* Date */}
                  <div className="form-field">
                    <label className="form-label">Preferred Date *</label>
                    <input name="date" type="date" className="form-input" />
                  </div>

                  {/* Time */}
                  <div className="form-field">
                    <label className="form-label">Preferred Time *</label>
                    <select name="time" className="form-select">
                      <option value="">Select window…</option>
                      {TIMES.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>

                  {/* Name */}
                  <div className="form-field">
                    <label className="form-label">Full Name *</label>
                    <input name="name" type="text" placeholder="John Doe" className="form-input" />
                  </div>

                  {/* Phone */}
                  <div className="form-field">
                    <label className="form-label">Phone *</label>
                    <input name="phone" type="tel" placeholder="+40 700…" className="form-input" />
                  </div>

                  {/* Notes */}
                  <div className="form-field md:col-span-2">
                    <label className="form-label">Vehicle & Notes</label>
                    <textarea name="message" rows={3} placeholder="Make, model, colour, and any specific concerns…" className="form-textarea" />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start gap-6 mt-12 pt-8 border-t border-[var(--border)]">
                  <button type="submit" disabled={status === 'pending'} className="btn-primary">
                    <span>{status === 'pending' ? 'Sending…' : 'Request Appointment'}</span>
                  </button>
                  <p className="type-label text-[var(--white-dim)] self-center text-[9px]">
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
