import { ArrowRight } from 'lucide-react';

const proofItems = [
  {
    car: "Porsche 911 GT3",
    service: "Paint Correction & Ceramic",
    result: "Removed 90% of swirl marks, deep gloss restored.",
    time: "2 Days"
  },
  {
    car: "Range Rover Sport",
    service: "Interior Restoration",
    result: "Leather cleaned and conditioned, spills extracted.",
    time: "6 Hours"
  }
];

export function BeforeAfter() {
  return (
    <section id="proof" className="py-20 bg-background">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Results That Speak</h2>
          <p className="text-muted max-w-2xl mx-auto">Seeing is believing. Explore real transformations achieved in our studio.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {proofItems.map((item, idx) => (
            <div key={idx} className="group rounded-xl border border-border bg-card overflow-hidden flex flex-col">
              {/* Mock Image Area */}
              <div className="relative h-64 w-full bg-slate-800 border-b border-border">
                <div className="absolute inset-0 flex">
                  <div className="w-1/2 bg-slate-700 flex items-center justify-center border-r border-slate-600/50">
                    <span className="text-sm font-medium text-slate-400 bg-black/40 px-3 py-1 rounded">Before</span>
                  </div>
                  <div className="w-1/2 flex items-center justify-center bg-slate-800">
                    <span className="text-sm font-medium text-white bg-black/40 px-3 py-1 rounded shadow-lg">After</span>
                  </div>
                </div>
                {/* Mock Slider Handle */}
                <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-primary/50 cursor-ew-resize flex items-center justify-center transform -translate-x-1/2">
                  <div className="h-8 w-8 rounded-full bg-white shadow flex items-center justify-center">
                    <div className="w-4 h-[2px] bg-slate-400"></div>
                  </div>
                </div>
              </div>
              
              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">{item.car}</h3>
                <p className="text-sm text-primary font-medium mb-4">{item.service}</p>
                
                <div className="flex gap-4 text-sm text-slate-300 mb-4 bg-slate-800/50 p-4 rounded-lg">
                  <div className="w-full">
                    <span className="block text-xs uppercase text-slate-500 font-semibold mb-1">Result</span>
                    {item.result}
                  </div>
                  <div className="min-w-[80px]">
                    <span className="block text-xs uppercase text-slate-500 font-semibold mb-1">Time</span>
                    {item.time}
                  </div>
                </div>
                
                <button className="text-sm font-medium text-white hover:text-primary transition-colors flex items-center mt-2 group-hover:translate-x-1 transform duration-300">
                  Get Similar Result <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
