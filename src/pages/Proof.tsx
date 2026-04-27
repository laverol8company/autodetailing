import { ArrowRight, ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    car: "Porsche 911 GT3 RS",
    color: "Guards Red",
    problem: "Heavy track day debris, light swirl marks from improper washing, dull gloss.",
    service: "Multi-Stage Paint Correction & 5-Year Ceramic Protection",
    result: "Flawless mirror finish. Restored deep red saturation and added extreme hydrophobic layer.",
    duration: "3 Days",
    tag: "Restoration"
  },
  {
    car: "Range Rover Autobiography",
    color: "Santorini Black",
    problem: "Severe hologramming from dealership prep, water spots on glass and paint.",
    service: "Gloss Enhancement & Glass Ceramic Coating",
    result: "Removed 95% of imperfections. Intense black depth achieved. Glass fully sealed.",
    duration: "2 Days",
    tag: "Enhancement"
  },
  {
    car: "Mercedes G63 AMG",
    color: "Matte Magno",
    problem: "Greasy fingerprints, UV exposure risks, light dirt embedded in matte texture.",
    service: "Specialized Matte Paint Preparation & Matte Ceramic Coating",
    result: "Preserved factory satin sheen while locking out UV rays and oils. Self-cleaning effect added.",
    duration: "1.5 Days",
    tag: "Protection"
  }
];

export default function Proof() {
  return (
    <div className="flex flex-col bg-[#05070A]">
      
      <section className="pt-24 pb-16 border-b border-white/5">
        <div className="premium-container max-w-3xl pl-4 md:pl-8">
          <span className="section-eyebrow">Portfolio</span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6">The Proof.</h1>
          <p className="text-lg font-light text-[#9CA3AF] leading-relaxed">
            Every vehicle that enters our studio is treated as a clinical pursuit of perfection. Browse our recent case studies and see the invisible made visible.
          </p>
        </div>
      </section>

      <section className="py-20 premium-section-graphite">
        <div className="premium-container">
          <div className="space-y-16">
            
            {caseStudies.map((work, idx) => (
              <div key={idx} className="flex flex-col lg:flex-row gap-8 lg:gap-12 pb-16 border-b border-white/5 last:border-0 last:pb-0">
                
                {/* Visual Placeholder */}
                <div className="lg:w-1/2">
                  <div className="w-full aspect-[4/3] rounded-xl bg-[#05070A] border border-white/10 overflow-hidden relative group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#2563EB]/10 to-transparent opacity-50"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-[#111827]">
                       <ImageIcon className="w-16 h-16" />
                    </div>
                    {/* Before/After Fake Slider line */}
                    <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/30 truncate"></div>
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                      <span className="bg-black/80 backdrop-blur text-[10px] text-white uppercase font-bold tracking-widest px-3 py-1.5 rounded">Before</span>
                      <span className="bg-[#2563EB] shadow-lg text-[10px] text-white uppercase font-bold tracking-widest px-3 py-1.5 rounded">After</span>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="lg:w-1/2 flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase font-bold tracking-widest text-[#D8DEE9] mb-6 w-max">
                    {work.tag}
                  </span>
                  
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{work.car}</h2>
                  <p className="text-sm text-[#9CA3AF] mb-8 font-medium">{work.color}</p>

                  <div className="space-y-5 flex-grow">
                    <div>
                      <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#6B7280] mb-1">Incoming Condition</h4>
                      <p className="text-sm text-[#D8DEE9] font-light leading-relaxed">{work.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#6B7280] mb-1">Prescribed Service</h4>
                      <p className="text-sm text-[#2563EB] font-medium leading-relaxed">{work.service}</p>
                    </div>
                    <div className="p-4 bg-[#05070A] border border-white/5 rounded-lg">
                      <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#6B7280] mb-1">Outcome</h4>
                      <p className="text-sm text-white font-medium leading-relaxed">{work.result}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/5">
                    <span className="text-xs font-semibold text-[#9CA3AF]">Turnaround: <span className="text-white">{work.duration}</span></span>
                    <Link to="/smart-quote" className="text-[10px] uppercase font-bold tracking-widest text-[#2563EB] hover:text-white transition-colors flex items-center gap-1">
                      Request Similar Result <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      <section className="py-24 text-center">
        <h2 className="text-2xl text-white font-bold mb-6">Ready to transform your vehicle?</h2>
        <Link to="/booking" className="premium-button-primary">Request an Appointment</Link>
      </section>

    </div>
  );
}
