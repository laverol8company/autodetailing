import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SideDock } from './components/SideDock';
import { ScrollToTop } from './components/ScrollToTop';

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
      {/* Film grain — global overlay */}
      <div className="grain-overlay" aria-hidden />

      <div className="min-h-screen flex flex-col relative w-full bg-[var(--black)]">
        <Header />
        <SideDock />

        <main className="flex-1 w-full">
          <Routes>
            <Route path="/"               element={<Home />} />
            <Route path="/services"       element={<Services />} />
            <Route path="/smart-quote"    element={<SmartQuote />} />
            <Route path="/booking"        element={<Booking />} />
            <Route path="/proof"          element={<Proof />} />
            <Route path="/contact"        element={<Contact />} />
            <Route path="/system-preview" element={<SystemPreview />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
