import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { MoneyLeakSection } from './components/MoneyLeakSection';
import { ServicesSection } from './components/ServicesSection';
import { SmartQuiz } from './components/SmartQuiz';
import { PackagesSection } from './components/PackagesSection';
import { BeforeAfter } from './components/BeforeAfter';
import { OwnerLeadSummary } from './components/OwnerLeadSummary';
import { QuoteForm } from './components/QuoteForm';
import { BookingRequest } from './components/BookingRequest';
import { Footer } from './components/Footer';
import { WhatsAppCTA } from './components/WhatsAppCTA';

function App() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#070A0F] text-[#F8FAFC] flex flex-col relative overflow-x-hidden">
        <Header />

        <main className="flex-1">

          {/* 1. HERO — Cinematic first impression */}
          <HeroSection
            onQuoteClick={() => scrollTo('quote')}
            onServiceClick={() => scrollTo('services')}
          />

          {/* 2. PROBLEM — Show what's broken in the status quo */}
          <MoneyLeakSection />

          {/* 3. SERVICES — Show what we offer */}
          <ServicesSection />

          {/* 4. SMART QUOTE FLOW — Guide visitor to a recommendation */}
          <section id="quiz" className="premium-section-graphite border-y border-white/5">
            <div className="premium-container">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Left: Explanation */}
                <div>
                  <span className="section-eyebrow">Smart Quote Advisor</span>
                  <h2 className="section-title text-3xl md:text-4xl mb-4">Not sure what<br />your car needs?</h2>
                  <p className="section-subtitle mb-8">Answer 4 quick questions. We'll recommend the right service, show you an estimated price range, and route your request directly to our team.</p>

                  <div className="space-y-5">
                    {[
                      { step: '01', title: 'Tell us about the car', desc: 'Size, condition, and service interest.' },
                      { step: '02', title: 'Get a recommendation', desc: 'We suggest the right service and package level.' },
                      { step: '03', title: 'Send a qualified request', desc: 'Your details go straight to the owner as a structured lead.' },
                    ].map(s => (
                      <div key={s.step} className="flex gap-4">
                        <span className="text-xs font-extrabold text-[#2563EB] mt-1 shrink-0 w-6">{s.step}</span>
                        <div>
                          <p className="text-sm font-semibold text-white">{s.title}</p>
                          <p className="text-xs text-[#6B7280] mt-0.5">{s.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Quiz widget */}
                <div>
                  <SmartQuiz onComplete={() => scrollTo('quote')} />
                </div>
              </div>
            </div>
          </section>

          {/* 5. PACKAGES — Premium tiered options */}
          <PackagesSection />

          {/* 6. PROOF — Before/after results */}
          <BeforeAfter />

          {/* 7. OWNER LEAD SYSTEM — Business value of the system */}
          <section className="premium-section-graphite border-y border-white/5">
            <div className="premium-container">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="section-eyebrow justify-center">Owner Lead System</span>
                <h2 className="section-title text-3xl md:text-4xl">Every request becomes<br />a structured lead</h2>
                <p className="section-subtitle mx-auto mt-4">
                  Each quote or booking request includes service interest, urgency, estimated value, lead score, and a suggested reply — sent instantly to the business owner.
                </p>
              </div>
              <OwnerLeadSummary />
            </div>
          </section>

          {/* 8. QUOTE + BOOKING — Final action area */}
          <section id="quote" className="premium-section-dark">
            <div className="premium-container">
              <div className="text-center max-w-xl mx-auto mb-12">
                <span className="section-eyebrow justify-center">Take the Next Step</span>
                <h2 className="section-title text-3xl md:text-4xl">Ready to turn interest<br />into a booked appointment?</h2>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-3xl mx-auto">
                <QuoteForm />
                <BookingRequest />
              </div>
            </div>
          </section>

          {/* 9. FINAL CTA */}
          <section className="premium-section-graphite border-t border-white/5">
            <div className="premium-container text-center max-w-2xl mx-auto">
              <span className="section-eyebrow justify-center">Still have questions?</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">We're one message away</h2>
              <p className="text-sm text-[#6B7280] mb-8">Whether you want an estimate, have a question about a service, or need advice on what your car needs — just reach out.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href="#quote" className="premium-button-primary px-8 py-3 text-sm">Get a Quote</a>
                <WhatsAppCTA variant="outline" className="px-8 py-3 text-sm" />
              </div>
            </div>
          </section>

        </main>

        <Footer />

        {/* Sticky WhatsApp — mobile only for less clutter on desktop */}
        <WhatsAppCTA variant="sticky" className="md:hidden" />
      </div>
    </BrowserRouter>
  );
}

export default App;
