import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const cases = [
  {
    vehicle: 'Porsche 911 GT3',
    color: 'Guards Red',
    issue: 'Track day debris, light swirl marks, dull clearcoat from improper washing over years.',
    service: 'Multi-Stage Paint Correction + 5yr Ceramic Coating',
    result: 'Flawless mirror finish with fully restored red saturation. Hydrophobic ceramic layer added for ongoing protection.',
    days: '3',
    tag: 'Restoration + Protection',
  },
  {
    vehicle: 'Range Rover Autobiography',
    color: 'Santorini Black',
    issue: 'Severe hologramming from dealership preparation. Heavy water spots on glass and paint surfaces.',
    service: 'Gloss Enhancement + Glass & Panel Ceramic Coating',
    result: '95% of imperfections removed. Intense black depth fully restored. Glass sealed and bead-rolling within 48hrs.',
    days: '2',
    tag: 'Enhancement + Protection',
  },
  {
    vehicle: 'Mercedes G63 AMG',
    color: 'Matte Magno Black',
    issue: 'Fingerprints embedded in matte texture. UV exposure beginning to break down factory finish.',
    service: 'Matte-Safe Preparation + Ceramic Coating (Matte Formula)',
    result: 'Factory satin texture preserved. UV protection locked in. Self-cleaning properties added without altering sheen.',
    days: '2',
    tag: 'Matte Protection',
  },
];

export default function Proof() {
  return (
    <div className="bg-[#050505]">

      {/* Header */}
      <section className="pt-40 pb-20 border-b border-[rgba(255,255,255,0.06)]">
        <div className="site-container">
          <span className="eyebrow">Portfolio</span>
          <h1 className="display-xl">The Proof.</h1>
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
                      <div className="flex-1 flex items-center justify-center border-r border-[rgba(255,255,255,0.06)]">
                        <span className="text-[#232323] text-6xl font-black">B</span>
                      </div>
                      <div className="flex-1 bg-[#0D0D0D] flex items-center justify-center">
                        <span className="text-[#232323] text-6xl font-black">A</span>
                      </div>
                    </div>
                    <div className="relative z-10 w-full flex justify-between px-5 pb-5">
                      <span className="label-xs text-[#8A8A8A]/50">Before</span>
                      <span className="label-xs text-[#8A8A8A]/50">After</span>
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
