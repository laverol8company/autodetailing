import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { PackagesSection } from './components/PackagesSection';
import { BeforeAfter } from './components/BeforeAfter';
import { SmartQuiz } from './components/SmartQuiz';
import { QuoteForm } from './components/QuoteForm';
import { BookingRequest } from './components/BookingRequest';
import { OwnerLeadSummary } from './components/OwnerLeadSummary';
import { Footer } from './components/Footer';
import { WhatsAppCTA } from './components/WhatsAppCTA';

function App() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-foreground flex flex-col relative w-full overflow-x-hidden">
        <Header />
        
        <main className="flex-1 w-full">
          <HeroSection 
            onQuoteClick={() => scrollTo('quote')} 
            onServiceClick={() => scrollTo('services')} 
          />
          
          <ServicesSection />
          <PackagesSection />
          <BeforeAfter />
          
          <section id="quiz" className="py-20 bg-slate-900 border-t border-border/20">
             <div className="container px-4 mx-auto max-w-6xl">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Smart Service Advisor</h2>
                  <p className="text-muted max-w-2xl mx-auto">Not sure what you need? Take our quick quiz to get a structured recommendation.</p>
                </div>
                <SmartQuiz onComplete={() => scrollTo('booking')} />
             </div>
          </section>

          <section id="quote" className="py-20 bg-background border-t border-border/20">
             <div className="container px-4 mx-auto max-w-6xl">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready for the Next Step?</h2>
                  <p className="text-muted max-w-2xl mx-auto">Get a custom quote or request a direct appointment inspection.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <QuoteForm />
                  <div id="booking">
                    <BookingRequest />
                  </div>
                </div>
             </div>
          </section>

          {/* Owner Dashboard View Demo */}
          <section className="py-20 bg-slate-900 border-t border-border/30">
            <div className="container px-4 mx-auto max-w-6xl">
               <div className="text-center mb-12">
                  <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
                    System Architecture Demo
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Owner Lead Generation Preview</h2>
                  <p className="text-muted max-w-2xl mx-auto">This demonstrates the structured lead that the business owner receives via mock Telegram/Sheets after a submission.</p>
                </div>
                <OwnerLeadSummary />
            </div>
          </section>
        </main>

        <Footer />
        
        {/* Global Sticky WhatsApp CTA */}
        <WhatsAppCTA variant="sticky" className="bg-success hover:bg-green-600 flex items-center justify-center p-0" />
      </div>
    </BrowserRouter>
  );
}

export default App;
