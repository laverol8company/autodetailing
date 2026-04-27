import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const cases = [
  {
    vehicle: 'Porsche 911 GT3',
    color: 'Guards Red',
    issue: 'Track day debris, light swirl marks, dull clearcoat from improper washing.',
    service: 'Multi-Stage Paint Correction + 5yr Ceramic',
    result: 'Flawless mirror finish with fully restored red saturation. Hydrophobic ceramic layer added.',
    days: '3',
    tag: 'Restoration + Protection',
    img: 'https://images.unsplash.com/photo-1503371476100-9bf725b801de?auto=format&fit=crop&q=80&w=800',
  },
  {
    vehicle: 'Range Rover Autobiography',
    color: 'Santorini Black',
    issue: 'Severe hologramming from dealership prep. Heavy water spots on glass.',
    service: 'Gloss Enhancement + Glass Ceramic',
    result: 'Intense black depth fully restored. Glass sealed and bead-rolling.',
    days: '2',
    tag: 'Enhancement + Protection',
    img: 'https://images.unsplash.com/photo-1550340499-a6c60fc8287c?auto=format&fit=crop&q=80&w=800',
  },
  {
    vehicle: 'Mercedes G63 AMG',
    color: 'Matte Magno Black',
    issue: 'Fingerprints embedded in matte texture. UV exposure breaking down finish.',
    service: 'Matte-Safe Prep + Matte Ceramic',
    result: 'Factory satin texture preserved. Self-cleaning properties added without altering sheen.',
    days: '2',
    tag: 'Matte Protection',
    img: 'https://images.unsplash.com/photo-1611821064430-0d402241afe4?auto=format&fit=crop&q=80&w=800',
  },
];

export default function Proof() {
  return (
    <div className="bg-[#050505]">

      {/* Header */}
      <section className="relative pt-40 pb-20 border-b border-[rgba(255,255,255,0.06)] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1920" 
            alt="Proof" 
            className="w-full h-full object-cover opacity-15 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
          <div className="grain-overlay" />
        </div>
        <div className="site-container relative z-10">
          <span className="eyebrow">Portfolio</span>
          <h1 className="display-xl text-white">The Proof.</h1>
        </div>
      </section>

      {/* Cases */}
      <section className="py-0">
        {cases.map((c, i) => (
          <div key={i} className={`border-b border-[rgba(255,255,255,0.06)] ${i % 2 === 1 ? 'bg-[#0D0D0D]' : 'bg-[#050505]'}`}>
            <div className="site-container py-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                {/* Visual */}
                <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="aspect-[4/3] bg-[#171717] border border-[rgba(255,255,255,0.06)] flex items-end relative overflow-hidden group">
                    <div className="absolute inset-0 flex">
                      {/* Before (Left, muted/dull) */}
                      <div className="flex-1 relative border-r border-[rgba(255,255,255,0.06)] overflow-hidden">
                        <img src={c.img} alt="Before" className="absolute inset-0 w-[200%] max-w-none h-full object-cover opacity-35 blur-[2px]" />
                        <div className="absolute inset-0 bg-[#050505]/40" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-[#8A8A8A] text-xl font-black opacity-30">BEFORE</span>
                        </div>
                      </div>
                      {/* After (Right, clean/rich) */}
                      <div className="flex-1 relative overflow-hidden">
                        <img src={c.img} alt="After" className="absolute inset-0 w-[200%] max-w-none h-full object-cover -translate-x-1/2 opacity-80" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-80" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-white text-xl font-black opacity-70 drop-shadow-md">AFTER</span>
                        </div>
                      </div>
                    </div>
                    <div className="relative z-10 w-full flex justify-between px-5 pb-5 pointer-events-none">
                      <span className="label-xs text-[#8A8A8A]/50 bg-[#050505]/40 px-2 py-1 rounded backdrop-blur">Before</span>
                      <span className="label-xs text-white/70 bg-[#050505]/40 px-2 py-1 rounded backdrop-blur">After</span>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <span className="label-xs block mb-6">{c.tag}</span>
                  <h2 className="display-md mb-1">{c.vehicle}</h2>
                  <p className="text-[#CFCFCF] text-sm mb-8">{c.color}</p>

                  <div className="flex flex-col gap-6">
                    <div>
                      <span className="label-xs block mb-2">Incoming Condition</span>
                      <p className="body-sm">{c.issue}</p>
                    </div>
                    <div>
                      <span className="label-xs block mb-2">Service Performed</span>
                      <p className="text-[#CFCFCF] text-sm font-medium">{c.service}</p>
                    </div>
                    <div className="card-dark p-5">
                      <span className="label-xs block mb-2">Outcome</span>
                      <p className="text-white text-sm leading-relaxed">{c.result}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-8 mt-8 border-t border-[rgba(255,255,255,0.06)]">
                    <span className="body-sm text-xs">Turnaround: <span className="text-white font-medium">{c.days} days</span></span>
                    <Link to="/smart-quote" className="flex items-center gap-2 text-[#8A8A8A] hover:text-white transition-colors text-xs uppercase tracking-widest font-medium group">
                      Get Similar Result <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="py-24 text-center border-t border-[rgba(255,255,255,0.06)]">
        <div className="site-container">
          <h2 className="display-md mb-6">Your vehicle deserves this treatment.</h2>
          <Link to="/booking" className="btn-primary">Request Appointment</Link>
        </div>
      </section>

    </div>
  );
}
