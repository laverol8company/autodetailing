import { ArrowRight } from 'lucide-react';

const proofItems = [
  {
    car: "Porsche 911 GT3",
    service: "Paint Correction & Ceramic Coating",
    result: "Removed 90% of swirl marks. Deep gloss restored. 5-year protection applied.",
    time: "2 Days"
  },
  {
    car: "Range Rover Sport",
    service: "Full Interior Restoration",
    result: "Leather fully cleaned and conditioned. Stains extracted. Cabin refreshed.",
    time: "6 Hours"
  }
];

export function BeforeAfter() {
  return (
    <section id="proof" className="premium-section-dark">
      <div className="premium-container">
        <div className="max-w-xl mb-12">
          <span className="section-eyebrow">Real Results</span>
          <h2 className="section-title">We Let the Work Speak</h2>
          <p className="section-subtitle">Documented transformations carried out in our studio. Swipe each card to see the before and after.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {proofItems.map((item, idx) => (
            <div key={idx} className="premium-card-dark group overflow-hidden">
              {/* Before/After image mock */}
              <div className="relative h-56 w-full bg-[#0c111a] rounded-xl border border-white/5 mb-6 overflow-hidden">
                <div className="absolute inset-0 flex">
                  <div className="w-1/2 bg-[#0a0e17] flex items-end justify-start p-3 border-r border-white/10">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#6B7280] bg-black/40 px-2 py-1 rounded">Before</span>
                  </div>
                  <div className="w-1/2 bg-[#111827] flex items-end justify-end p-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white bg-black/50 px-2 py-1 rounded">After</span>
                  </div>
                </div>
                {/* Slider handle */}
                <div className="absolute top-0 bottom-0 left-1/2 w-px bg-[#2563EB]/40 flex items-center justify-center -translate-x-1/2">
                  <div className="h-7 w-7 rounded-full bg-white border-2 border-[#2563EB]/50 shadow-lg flex items-center justify-center">
                    <div className="w-3 h-px bg-[#6B7280]" />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-base font-bold text-white">{item.car}</h3>
                <p className="text-sm text-[#2563EB] font-medium mt-1 mb-4">{item.service}</p>

                <div className="grid grid-cols-3 gap-4 text-sm bg-[#0c111a] rounded-xl p-4 border border-white/5 mb-5">
                  <div className="col-span-2">
                    <span className="block text-[10px] uppercase text-[#6B7280] font-semibold mb-1">Result</span>
                    <span className="text-[#D8DEE9] text-xs leading-relaxed">{item.result}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase text-[#6B7280] font-semibold mb-1">Time</span>
                    <span className="text-white font-semibold text-sm">{item.time}</span>
                  </div>
                </div>

                <a href="#quote" className="flex items-center gap-1.5 text-sm font-medium text-[#D8DEE9] hover:text-white transition-colors group-hover:translate-x-1 transform duration-200">
                  Get a Similar Result <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
