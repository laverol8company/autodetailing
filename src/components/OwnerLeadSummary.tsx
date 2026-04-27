import { generateSuggestedReply, followUpTemplates } from '../lib/suggestedReply';
import { Copy, Phone, User, Car, Clock } from 'lucide-react';

export function OwnerLeadSummary() {
  const sampleLead = {
    source: "Smart Quiz",
    name: "Alex",
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
    <div className="bg-[#0b101a] border border-border rounded-xl p-6 md:p-8 max-w-3xl mx-auto font-sans relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px] pointer-events-none"></div>
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-6 border-b border-border mb-6">
        <div>
          <span className="inline-flex items-center rounded-full bg-red-500/10 px-2.5 py-0.5 text-xs font-semibold text-red-500 mb-2">
            🔥 {sampleLead.leadScore} Lead
          </span>
          <h2 className="text-2xl font-bold text-white">New Lead: {sampleLead.service}</h2>
          <p className="text-sm text-muted flex items-center mt-1">Source: {sampleLead.source}</p>
        </div>
        <div className="text-right mt-4 md:mt-0">
          <p className="text-lg font-bold text-success">{sampleLead.estimate}</p>
          <p className="text-xs text-slate-500">Estimated Value</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="space-y-4">
          <div className="flex items-start text-slate-300">
            <User className="h-5 w-5 mr-3 text-slate-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-white">{sampleLead.name}</p>
              <p className="text-sm">{sampleLead.phone}</p>
            </div>
          </div>
          <div className="flex items-start text-slate-300">
            <Car className="h-5 w-5 mr-3 text-slate-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-white">{sampleLead.car}</p>
              <p className="text-sm">{sampleLead.package}</p>
            </div>
          </div>
          <div className="flex items-start text-slate-300">
            <Clock className="h-5 w-5 mr-3 text-slate-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-white">Urgency</p>
              <p className="text-sm">{sampleLead.urgency}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-5">
          <h4 className="text-sm font-semibold text-white mb-2 flex items-center justify-between">
            Suggested Reply
            <button className="text-primary hover:text-primary-hover flex items-center text-xs">
              <Copy className="h-3 w-3 mr-1" /> Copy
            </button>
          </h4>
          <p className="text-sm text-slate-400 italic bg-slate-950 p-3 rounded-md mb-4 border border-slate-800/50">
            "{reply}"
          </p>
          <button className="w-full bg-success hover:bg-green-700 text-white font-medium py-2 rounded transition-colors text-sm flex items-center justify-center">
            <Phone className="h-4 w-4 mr-2" /> Message on WhatsApp
          </button>
        </div>
      </div>

      <div className="border-t border-border pt-6 mt-6">
        <h4 className="text-sm font-semibold text-white mb-4">Follow-Up Templates</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {followUpTemplates.map((template, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 rounded-md p-3 group">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-semibold text-slate-300">{template.title}</span>
                <button className="text-slate-500 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Copy className="h-4 w-4" />
                </button>
              </div>
              <p className="text-xs text-slate-500 line-clamp-2">{template.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
