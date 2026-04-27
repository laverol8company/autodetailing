import { Link } from 'react-router-dom';
import { ArrowRight, Search, Zap, Calendar, Wrench, Shield, Droplets, Sparkles, Image as ImageIcon } from 'lucide-react';
import { WhatsAppCTA } from '../components/WhatsAppCTA';

const goals = [
  { title: "I need a quote", desc: "Get an instant structured estimate.", icon: <Search className="w-5 h-5" />, link: "/smart-quote" },
  { title: "I know the service", desc: "Browse our signature packages.", icon: <Wrench className="w-5 h-5" />, link: "/services" },
  { title: "I want to book", desc: "Reserve your slot immediately.", icon: <Calendar className="w-5 h-5" />, link: "/booking" },
  { title: "I'm not sure", desc: "Let our smart advisor guide you.", icon: <Zap className="w-5 h-5" />, link: "/smart-quote" },
];

const servicePreviews = [
  { title: "Enhance", desc: "Paint Correction & Gloss Restoration", icon: <Sparkles className="w-5 h-5 text-[#2563EB]" /> },
  { title: "Protect", desc: "Ceramic Coating & PPF Films", icon: <Shield className="w-5 h-5 text-[#2563EB]" /> },
  { title: "Maintain", desc: "Premium Hand Wash & Interior", icon: <Droplets className="w-5 h-5 text-[#2563EB]" /> },
  { title: "Restore", desc: "Deep Extraction & Revitalisation", icon: <Wrench className="w-5 h-5 text-[#2563EB]" /> },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* 1. CINEMATIC HERO */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden premium-section-dark border-b border-white/5">
        <div className="subtle-grid-bg absolute inset-0 opacity-100" />
        <div className="showroom-light-sweep" />
        <div className="blue-glow" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05070A] via-[#05070A]/80 to-transparent" />

        <div className="relative z-10 premium-container text-center max-w-4xl pt-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 tracking-tight">
            Premium Detailing & Protection<br/>
            <span className="text-[#D8DEE9] font-light">For Cars That Deserve More</span>
          </h1>
          <p className="text-base md:text-lg text-[#9CA3AF] mb-10 max-w-2xl mx-auto font-light">
            Choose the right service, get a fast estimate, and request an appointment through a guided premium booking system.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/smart-quote" className="premium-button-primary w-full sm:w-auto text-[13px] tracking-wide">
              Get a Quote
            </Link>
            <Link to="/services" className="premium-button-secondary w-full sm:w-auto text-[13px] tracking-wide">
              Explore Services
            </Link>
          </div>
          <div className="mt-8">
            <WhatsAppCTA variant="outline" className="text-xs tracking-wider uppercase border-none text-[#9CA3AF] hover:text-white" />
          </div>
        </div>
      </section>

      {/* 2. CHOOSE YOUR GOAL */}
      <section className="premium-section-graphite border-b border-white/5 relative z-20 -mt-16 bg-transparent py-0">
        <div className="premium-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {goals.map((g, i) => (
              <Link key={i} to={g.link} className="glass-panel group hover:border-[#2563EB]/40 flex flex-col p-6 shadow-2xl">
                <div className="h-10 w-10 bg-white/5 rounded-full flex items-center justify-center text-[#2563EB] mb-4 group-hover:scale-110 group-hover:bg-[#2563EB] group-hover:text-white transition-all">
                  {g.icon}
                </div>
                <h3 className="text-sm font-bold text-white mb-2">{g.title}</h3>
                <p className="text-[#9CA3AF] text-xs leading-relaxed flex-grow">{g.desc}</p>
                <div className="mt-4 flex items-center text-[10px] uppercase tracking-widest text-[#2563EB] font-bold group-hover:block transition-all opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0">
                  Select <ArrowRight className="inline-block w-3 h-3 ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SIGNATURE SERVICES PREVIEW */}
      <section className="premium-section-dark">
        <div className="premium-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="section-eyebrow">Our Discipline</span>
              <h2 className="section-title">Signature Services</h2>
            </div>
            <Link to="/services" className="text-xs uppercase tracking-widest font-bold text-[#2563EB] hover:text-white transition-colors flex items-center gap-2">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicePreviews.map((s, i) => (
              <Link to="/services" key={i} className="premium-card-dark group">
                <div className="mb-6">{s.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-[#9CA3AF] mb-8">{s.desc}</p>
                <span className="text-[10px] uppercase font-bold text-[#D8DEE9] group-hover:text-[#2563EB] transition-colors">Explore Category →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROOF PREVIEW */}
      <section className="premium-section-graphite border-y border-white/5">
        <div className="premium-container">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <span className="section-eyebrow">The Proof</span>
              <h2 className="section-title leading-tight">Perfection is<br/>in the details.</h2>
              <p className="section-subtitle">We document our transformations so you don't have to guess the outcome. See real vehicles, real problems, and real results.</p>
              <Link to="/proof" className="premium-button-secondary mt-4">View Case Studies</Link>
            </div>
            <div className="flex-1 relative">
              <div className="aspect-[4/3] w-full rounded-2xl bg-[#05070A] border border-white/10 overflow-hidden flex items-center justify-center relative group">
                 {/* Placeholder for Cinematic Before/After Teaser */}
                 <ImageIcon className="w-16 h-16 text-[#111827]" />
                 <div className="absolute inset-0 bg-gradient-to-tr from-[#2563EB]/10 to-transparent mix-blend-overlay"></div>
                 <div className="absolute bottom-6 left-6 right-6 flex justify-between text-[10px] uppercase font-bold tracking-widest text-[#D8DEE9]">
                    <span>Before</span>
                    <span>After</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SMART QUOTE PREVIEW */}
      <section className="premium-section-dark">
        <div className="premium-container max-w-3xl text-center">
          <span className="section-eyebrow justify-center">Guided Booking</span>
          <h2 className="section-title mb-6">Smart Quote Flow</h2>
          <p className="section-subtitle mx-auto mb-12">
            Answer a few quick questions. We evaluate your vehicle's condition and automatically route you to the correct structured package with an instant price estimation.
          </p>
          <div className="flex items-center justify-center gap-2 md:gap-4 text-[10px] uppercase tracking-widest font-bold text-[#6B7280] mb-12 flex-wrap">
            <span className="text-white">Car</span> <ArrowRight className="w-3 h-3" />
            <span className="text-white">Goal</span> <ArrowRight className="w-3 h-3" />
            <span className="text-[#2563EB]">Package</span> <ArrowRight className="w-3 h-3" />
            <span className="text-white">Quote</span>
          </div>
          <Link to="/smart-quote" className="premium-button-primary">Start Smart Quote</Link>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="py-24 bg-[#05070A] border-t border-white/5 relative overflow-hidden">
        <div className="blue-glow opacity-50" />
        <div className="relative z-10 premium-container text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Ready to get your car inspected?</h2>
          <div className="flex items-center justify-center gap-4">
             <Link to="/smart-quote" className="premium-button-primary text-sm px-8 py-3.5">Start Smart Quote</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
