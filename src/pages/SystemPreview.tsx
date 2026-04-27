import { generateSuggestedReply, followUpTemplates } from '../lib/suggestedReply';
import { Copy, Phone, User, Car, Clock, Zap } from 'lucide-react';

const lead = {
  name: 'Alex M.',
  phone: '+1 555-019-2342',
  car: 'Porsche 911 GT3',
  color: 'Guards Red',
  service: 'Ceramic Coating',
  package: 'Signature',
  estimate: '€800 – €1,200',
  urgency: 'This week',
  score: 'Hot',
  source: 'Smart Quote Advisor',
  submitted: 'Just now',
};

const sheetRows = [
  { date: 'Just now', client: lead.name, service: lead.service, value: '€800+', priority: 'Hot', status: 'New' },
  { date: 'Yesterday', client: 'Michael B.', service: 'Exterior Detail', value: '€150', priority: 'Warm', status: 'Booked' },
  { date: '2d ago', client: 'Sophie K.', service: 'PPF Front', value: '€1,400', priority: 'Hot', status: 'Confirmed' },
];

export default function SystemPreview() {
  const reply = generateSuggestedReply({ clientName: lead.name, car: lead.car, service: lead.service, packageLevel: lead.package });

  return (
    <div className="bg-[#050505] min-h-screen">
      <div className="site-container pt-40 pb-24">

        {/* Page Header */}
        <div className="max-w-2xl mb-16">
          <span className="label-xs block mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse inline-block" />
            Owner Dashboard Preview
          </span>
          <h1 className="display-md mb-4">What the owner receives after every request.</h1>
          <p className="body-lead">
            Every visitor request becomes a structured lead — with service interest, urgency, estimated value, lead score, and a suggested reply ready to send.
          </p>
        </div>

        {/* Telegram Alert Mock */}
        <div className="card-dark mb-4 max-w-3xl">
          <div className="flex items-start justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white flex items-center justify-center flex-shrink-0">
                <Zap className="w-4 h-4 text-black" />
              </div>
              <div>
                <p className="label-xs mb-0.5">Hot Lead — Telegram Notification</p>
                <h3 className="text-white font-semibold">{lead.service} — {lead.score} Priority</h3>
              </div>
            </div>
            <div className="text-right flex-shrink-0">
              <p className="text-white font-black text-xl">{lead.estimate}</p>
              <p className="label-xs">Estimated value</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[rgba(255,255,255,0.06)]">
            <div className="flex items-start gap-3">
              <User className="w-4 h-4 text-[#8A8A8A] mt-0.5 flex-shrink-0" />
              <div>
                <span className="label-xs block mb-1">Client</span>
                <p className="text-white text-sm font-medium">{lead.name}</p>
                <p className="body-sm text-xs">{lead.phone}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Car className="w-4 h-4 text-[#8A8A8A] mt-0.5 flex-shrink-0" />
              <div>
                <span className="label-xs block mb-1">Vehicle</span>
                <p className="text-white text-sm font-medium">{lead.car}</p>
                <p className="body-sm text-xs">{lead.color} · {lead.package} Package</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-[#8A8A8A] mt-0.5 flex-shrink-0" />
              <div>
                <span className="label-xs block mb-1">Urgency</span>
                <p className="text-white text-sm font-medium">{lead.urgency}</p>
                <p className="body-sm text-xs">{lead.source}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Suggested Reply */}
        <div className="card-dark mb-4 max-w-3xl">
          <div className="flex items-center justify-between mb-4">
            <span className="label-xs">Suggested Reply</span>
            <button className="flex items-center gap-1.5 label-xs text-[#CFCFCF] hover:text-white transition-colors">
              <Copy className="w-3 h-3" /> Copy
            </button>
          </div>
          <p className="body-sm text-sm italic leading-relaxed mb-6 pb-6 border-b border-[rgba(255,255,255,0.06)]">
            "{reply}"
          </p>
          <button className="flex items-center gap-2 btn-ghost text-xs px-5 py-2.5">
            <Phone className="w-3.5 h-3.5" /> Send via WhatsApp
          </button>
        </div>

        {/* Follow-up Templates */}
        <div className="card-dark mb-4 max-w-3xl">
          <span className="label-xs block mb-6">Follow-Up Templates</span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[rgba(255,255,255,0.06)]">
            {followUpTemplates.map((t, i) => (
              <div key={i} className="bg-[#050505] p-5 group">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-white text-xs font-semibold">{t.title}</p>
                  <Copy className="w-3 h-3 text-[#8A8A8A] opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer" />
                </div>
                <p className="body-sm text-xs line-clamp-3">{t.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Google Sheets Pipeline */}
        <div className="card-dark max-w-3xl overflow-x-auto">
          <span className="label-xs block mb-6">CRM — Lead Pipeline (Google Sheets Sync)</span>
          <div className="min-w-[560px]">
            <div className="grid grid-cols-6 gap-4 text-[10px] uppercase tracking-widest text-[#8A8A8A] pb-3 border-b border-[rgba(255,255,255,0.06)] font-medium">
              <span>Date</span><span>Client</span><span>Service</span><span>Value</span><span>Priority</span><span>Status</span>
            </div>
            {sheetRows.map((r, i) => (
              <div key={i} className={`grid grid-cols-6 gap-4 py-3 border-b border-[rgba(255,255,255,0.04)] text-xs ${i === 0 ? 'text-white' : 'text-[#8A8A8A]'}`}>
                <span>{r.date}</span>
                <span className={i === 0 ? 'font-semibold' : ''}>{r.client}</span>
                <span>{r.service}</span>
                <span className={i === 0 ? 'text-white font-bold' : ''}>{r.value}</span>
                <span className={`font-semibold ${r.priority === 'Hot' ? 'text-white' : 'text-[#CFCFCF]'}`}>{r.priority}</span>
                <span className={`font-medium ${r.status === 'New' ? 'text-white' : 'text-[#8A8A8A]'}`}>{r.status}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
