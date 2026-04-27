import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppCTA } from './components/WhatsAppCTA';
import { ScrollToTop } from './components/ScrollToTop';

// Simple scaffolding of pages, they will be built out in the next steps.
import Home from './pages/Home';
import Services from './pages/Services';
import SmartQuote from './pages/SmartQuote';
import Booking from './pages/Booking';
import Proof from './pages/Proof';
import Contact from './pages/Contact';
import SystemPreview from './pages/SystemPreview';


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col relative w-full">
        <Header />
        
        <main className="flex-1 w-full">
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/smart-quote" element={<SmartQuote />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/proof" element={<Proof />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/system-preview" element={<SystemPreview />} />
          </Routes>
        </main>

        <Footer />
        
        <WhatsAppCTA variant="sticky" className="md:hidden" />
      </div>
    </BrowserRouter>
  );
}

export default App;
