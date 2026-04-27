import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onQuoteClick: () => void;
  onServiceClick: () => void;
}

export function HeroSection({ onQuoteClick, onServiceClick }: HeroProps) {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#070A0F]">
      {/* Subtle grid texture */}
      <div className="absolute inset-0 subtle-grid-bg opacity-100 pointer-events-none" />
      
      {/* Light sweep */}
      <div className="showroom-light-sweep" />

      {/* Blue glow */}
      <div className="blue-glow" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#070A0F] to-transparent pointer-events-none" />

      <div className="relative z-10 premium-container text-center flex flex-col items-center pt-16 pb-20">

        {/* Eyebrow */}
        <div className="section-eyebrow mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB] animate-pulse" />
          Premium Auto Care System
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-white max-w-4xl">
          Your Vehicle Deserves<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#D8DEE9]">A Perfect Finish</span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-base md:text-lg text-[#6B7280] max-w-xl mx-auto leading-relaxed">
          Premium detailing, paint correction & ceramic protection. Tell us about your car and get a structured quote in minutes.
        </p>

        {/* CTA block */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-3 w-full justify-center">
          <button onClick={onQuoteClick} className="premium-button-primary w-full sm:w-auto gap-2 px-8 py-3.5 text-sm">
            Get a Quote <ArrowRight className="h-4 w-4" />
          </button>
          <button onClick={onServiceClick} className="premium-button-secondary w-full sm:w-auto px-8 py-3.5 text-sm">
            Choose a Service
          </button>
        </div>

        {/* WhatsApp tertiary */}
        <p className="mt-6 text-xs text-[#6B7280]">
          Or{' '}
          <a
            href={`https://wa.me/something?text=${encodeURIComponent("Hi, I'd like a quote for detailing.")}`}
            target="_blank" rel="noopener noreferrer"
            className="text-[#D8DEE9] hover:text-white underline underline-offset-2 transition-colors"
          >
            message us on WhatsApp
          </a>
        </p>

        {/* Trust strip */}
        <div className="mt-14 flex flex-wrap justify-center items-center gap-6 text-xs text-[#6B7280] border-t border-white/5 pt-8 w-full">
          <span>✦ Certified Products</span>
          <span>✦ Premium Facilities</span>
          <span>✦ Expert Technicians</span>
          <span>✦ Transparent Pricing</span>
        </div>
      </div>
    </section>
  );
}
