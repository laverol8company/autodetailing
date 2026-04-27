import { generateSuggestedReply, followUpTemplates } from '../lib/suggestedReply';
import { Copy, Phone, User, Car, Clock, Zap } from 'lucide-react';

export function OwnerLeadSummary() {
  const sampleLead = {
    source: "Smart Quote Advisor",
    name: "Alex M.",
    phone: "+1 555-019-2342",
    car: "Porsche 911 GT3",
    service: "Ceramic Coating",
    package: "Signature Protection",
    estimate: "€800 – €1,200",
    urgency: "This week",
    leadScore: "Hot",
  };

  const reply = generateSuggestedReply({
    clientName: sampleLead.name,
    car: sampleLead.car,
    service: sampleLead.service,
    packageLevel: sampleLead.package,
  });

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {/* Lead Alert Card (Telegram style) */}
      <div className="glass-panel border border-red-500/20 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-5">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
              <Zap className="h-4 w-4 text-red-400" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-red-400">Hot Lead</p>
              <h3 className="text-base font-bold text-white">New: {sampleLead.service}</h3>
            </div>
          </div>
          <div className="text-right">
            <p className="text-lg font-extrabold text-green-400">{sampleLead.estimate}</p>
            <p className="text-[10px] text-[#6B7280]">Estimated value</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex items-start gap-2.5">
            <User className="h-4 w-4 text-[#6B7280] mt-0.5 shrink-0" />
            <div>
              <p className="text-[10px] uppercase text-[#6B7280] font-semibold mb-0.5">Client</p>
              <p className="text-sm text-white font-medium">{sampleLead.name}</p>
              <p className="text-xs text-[#6B7280]">{sampleLead.phone}</p>
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <Car className="h-4 w-4 text-[#6B7280] mt-0.5 shrink-0" />
            <div>
              <p className="text-[10px] uppercase text-[#6B7280] font-semibold mb-0.5">Vehicle</p>
              <p className="text-sm text-white font-medium">{sampleLead.car}</p>
              <p className="text-xs text-[#6B7280]">{sampleLead.package}</p>
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <Clock className="h-4 w-4 text-[#6B7280] mt-0.5 shrink-0" />
            <div>
              <p className="text-[10px] uppercase text-[#6B7280] font-semibold mb-0.5">Urgency</p>
              <p className="text-sm text-white font-medium">{sampleLead.urgency}</p>
              <p className="text-xs text-[#6B7280]">Source: {sampleLead.source}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Suggested Reply */}
      <div className="glass-panel">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs font-semibold text-white">Suggested Reply</p>
          <button className="flex items-center gap-1 text-[10px] text-[#2563EB] hover:text-white transition-colors">
            <Copy className="h-3 w-3" /> Copy
          </button>
        </div>
        <p className="text-xs text-[#6B7280] leading-relaxed bg-[#0c111a] border border-white/5 px-4 py-3 rounded-xl mb-4 italic">
          "{reply}"
        </p>
        <button className="w-full flex items-center justify-center gap-2 rounded-lg bg-green-600/90 hover:bg-green-600 text-white text-xs font-semibold py-2.5 transition-colors">
          <Phone className="h-3.5 w-3.5" /> Send via WhatsApp
        </button>
      </div>

      {/* Follow-up templates */}
      <div className="glass-panel">
        <p className="text-xs font-semibold text-white mb-4">Follow-Up Templates</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {followUpTemplates.map((t, i) => (
            <div key={i} className="bg-[#0c111a] border border-white/5 rounded-xl p-3 group">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[10px] font-semibold text-[#D8DEE9]">{t.title}</p>
                <Copy className="h-3 w-3 text-[#6B7280] opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer" />
              </div>
              <p className="text-[10px] text-[#6B7280] leading-relaxed line-clamp-2">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
