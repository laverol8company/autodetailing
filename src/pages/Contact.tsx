import { QuoteForm } from '../components/QuoteForm';
import { WhatsAppCTA } from '../components/WhatsAppCTA';

export default function Contact() {
  return (
    <div className="flex flex-col min-h-[80vh] bg-[#05070A] py-16 md:py-24">
      <div className="premium-container max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          <div>
            <span className="section-eyebrow">Connect</span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">Get in touch.</h1>
            <p className="text-[#9CA3AF] font-light text-base leading-relaxed mb-8">
              Whether you need a custom quote for a unique vehicle, want to discuss specific protection options, or just have a general inquiry — we are at your disposal.
            </p>

            <div className="space-y-6">
              <div className="p-6 bg-[#0B0F14] border border-white/5 rounded-xl">
                <h3 className="text-white text-sm font-bold mb-2">Instant Response</h3>
                <p className="text-[#9CA3AF] text-xs leading-relaxed mb-4">
                  For the fastest replies and seamless photo sharing (to show damage or car condition), use WhatsApp.
                </p>
                <WhatsAppCTA variant="primary" />
              </div>
              
              <div className="p-6 bg-[#0B0F14] border border-white/5 rounded-xl">
                <h3 className="text-white text-sm font-bold mb-2">Visit the Studio</h3>
                <p className="text-[#9CA3AF] text-xs leading-relaxed">
                  Visits by appointment only.<br/>
                  Premium Auto Sector<br/>
                  Bucharest, Romania<br/>
                  contact@general-cars.com<br/>
                  +40 700 000 000
                </p>
              </div>
            </div>
          </div>

          <div>
             <QuoteForm />
          </div>

        </div>
      </div>
    </div>
  );
}
