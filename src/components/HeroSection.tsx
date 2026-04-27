import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { WhatsAppCTA } from './WhatsAppCTA';

interface HeroProps {
  onQuoteClick: () => void;
  onServiceClick: () => void;
}

export function HeroSection({ onQuoteClick, onServiceClick }: HeroProps) {
  return (
    <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-card">
      {/* Background sweep / Cinematic effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card z-0"></div>
      
      {/* Light sweep animation wrapper - simple CSS radial gradient moving */}
      <div className="absolute inset-0 z-0 opacity-30 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/40 via-background to-background animate-pulse"></div>
      
      <div className="container relative z-10 px-4 text-center max-w-4xl mx-auto flex flex-col items-center">
        <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-8 backdrop-blur-sm">
          <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
          Premium Booking & Lead System
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 drop-shadow-lg">
          Master Your Vehicle's <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Perfect Finish</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto drop-shadow">
          We restore gloss, protect paint, and deliver high-end automotive care. Experience the ultimate in vehicle refinement.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
          <button 
            onClick={onQuoteClick}
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-primary text-white h-12 px-8 font-medium hover:bg-primary-hover transition-colors shadow-lg shadow-primary/20"
          >
            Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
          </button>
          
          <button 
            onClick={onServiceClick}
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-md border border-slate-700 bg-slate-800/50 backdrop-blur-sm text-white h-12 px-8 font-medium hover:bg-slate-700/50 hover:text-white transition-colors"
          >
            Choose a Service
          </button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4 text-sm text-slate-400">
          <span className="flex items-center"><CheckCircle2 className="mr-1 h-4 w-4 text-primary" /> Certified Experts</span>
          <span className="flex items-center"><CheckCircle2 className="mr-1 h-4 w-4 text-primary" /> Premium Products</span>
          <span className="flex items-center cursor-pointer hover:text-white transition-colors">
             <WhatsAppCTA variant="outline" className="h-8 py-1 rounded-full text-xs" />
          </span>
        </div>
      </div>
      
      {/* Decorative glass bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background to-transparent z-0 pointer-events-none"></div>
    </section>
  );
}
