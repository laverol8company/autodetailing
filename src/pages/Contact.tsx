import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { WhatsAppCTA } from '../components/WhatsAppCTA';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'pending' | 'done'>('idle');
  const [error, setError] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const missing = ['name', 'phone'].filter(f => !(fd.get(f) as string)?.trim());
    if (missing.length) { setError('Please fill in your name and phone number.'); return; }
    setError('');
    setStatus('pending');
    setTimeout(() => setStatus('done'), 1000);
  }

  return (
    <div className="bg-[#050505] min-h-screen">
      <div className="site-container pt-40 pb-24">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Info */}
          <div className="lg:col-span-5">
            <span className="eyebrow">Connect</span>
            <h1 className="display-md mb-6">Get in touch.</h1>
            <p className="body-lead mb-12">
              We respond to all enquiries within 24 hours. For the fastest reply, message us on WhatsApp.
            </p>

            <div className="flex flex-col gap-6">
              <div className="card-dark">
                <p className="label-xs mb-3">WhatsApp (Fastest)</p>
                <WhatsAppCTA variant="ghost" className="w-full justify-center" />
              </div>
              <div className="card-dark">
                <p className="label-xs mb-3">Studio</p>
                <p className="body-sm text-xs">Premium Auto Sector<br />Bucharest, Romania</p>
              </div>
              <div className="card-dark">
                <p className="label-xs mb-3">Hours</p>
                <p className="body-sm text-xs">Monday — Saturday<br />09:00 — 18:00<br />By appointment only</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            {status === 'done' ? (
              <div className="card-dark flex flex-col items-center justify-center text-center py-20 min-h-[420px]">
                <CheckCircle2 className="w-8 h-8 text-[#CFCFCF] mb-6" />
                <h3 className="text-white text-xl font-bold mb-3">Message Received</h3>
                <p className="body-sm max-w-xs mx-auto mb-6">We'll be in touch within 24 hours.</p>
                <button onClick={() => setStatus('idle')} className="btn-text">Send another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card-dark">
                <h3 className="text-white font-bold text-lg mb-8 pb-6 border-b border-[rgba(255,255,255,0.06)]">Send a message</h3>

                {error && <div className="mb-6 px-4 py-3 border border-[rgba(255,255,255,0.15)] text-[#CFCFCF] text-xs">{error}</div>}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="form-field">
                    <label className="form-label">Name <span className="text-[#CFCFCF]">*</span></label>
                    <input name="name" type="text" placeholder="John Doe" className="form-input" />
                  </div>
                  <div className="form-field">
                    <label className="form-label">Phone <span className="text-[#CFCFCF]">*</span></label>
                    <input name="phone" type="tel" placeholder="+40 700…" className="form-input" />
                  </div>
                </div>

                <div className="form-field mb-6">
                  <label className="form-label">Service of Interest</label>
                  <input name="service" type="text" placeholder="e.g. Ceramic Coating, Paint Correction" className="form-input" />
                </div>

                <div className="form-field mb-8">
                  <label className="form-label">Message</label>
                  <textarea name="message" rows={4} placeholder="Your vehicle, your questions, or anything you'd like to discuss…" className="form-textarea" />
                </div>

                <button type="submit" disabled={status === 'pending'} className="btn-primary">
                  {status === 'pending' ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
