import { OwnerLeadSummary } from '../components/OwnerLeadSummary';

export default function SystemPreview() {
  return (
    <div className="bg-[#05070A] min-h-screen py-24">
      <div className="premium-container max-w-4xl">
        
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#2563EB] text-[10px] uppercase font-bold tracking-widest rounded-full mb-6 relative">
            <span className="absolute w-2 h-2 rounded-full bg-[#2563EB] top-1/2 -translate-y-1/2 left-2 animate-pulse"></span>
            <span className="ml-3">Owner Dashboard Preview</span>
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Behind the Scenes</h1>
          <p className="text-[#9CA3AF] font-light leading-relaxed max-w-2xl mx-auto">
            This page is not for normal customers. It demonstrates what the business owner receives instantly after a visitor completes the Smart Quote or Booking Flow. Every request becomes a structured lead.
          </p>
        </div>

        <div className="p-8 md:p-12 bg-[#0B0F14] border border-white/5 rounded-2xl shadow-2xl relative overflow-hidden">
           {/* Grid illusion behind dashboard */}
           <div className="absolute inset-0 subtle-grid-bg opacity-30 pointer-events-none"></div>
           
           <div className="relative z-10">
              <OwnerLeadSummary />
           </div>
        </div>

      </div>
    </div>
  );
}
