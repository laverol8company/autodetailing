import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { WhatsAppCTA } from './WhatsAppCTA';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Services', href: '/services' },
    { label: 'Smart Quote', href: '/smart-quote' },
    { label: 'Booking', href: '/booking' },
    { label: 'Proof', href: '/proof' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/5 bg-[#05070A]/90 backdrop-blur-md">
      <div className="premium-container flex h-20 items-center justify-between">
        {/* Logo Monogram */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="h-8 w-8 border border-white/20 bg-[#0B0F14] flex items-center justify-center font-serif font-black text-white text-xs tracking-tighter group-hover:border-[#2563EB] transition-colors">GC</div>
          <span className="font-bold text-sm tracking-widest text-[#D8DEE9] uppercase">General <span className="text-[#2563EB]">Cars</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(l => (
            <Link key={l.label} to={l.href} className={`text-[11px] uppercase tracking-widest font-semibold transition-colors ${location.pathname === l.href ? 'text-white' : 'text-[#9CA3AF] hover:text-[#D8DEE9]'}`}>
              {l.label}
            </Link>
          ))}
          <Link to="/system-preview" className="text-[10px] text-white/20 hover:text-white/50 tracking-widest uppercase ml-4 border-l border-white/5 pl-4">Sys</Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/smart-quote" className="premium-button-primary text-[11px] px-6 py-2.5 uppercase tracking-widest">Get a Quote</Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setMenuOpen(v => !v)} className="md:hidden text-white p-2" aria-label="Toggle menu">
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 border-b border-white/5 bg-[#05070A] px-6 py-8 flex flex-col gap-6 shadow-2xl h-screen">
          {navLinks.map(l => (
            <Link key={l.label} to={l.href} onClick={() => setMenuOpen(false)} className="text-lg text-white font-medium tracking-wide">
              {l.label}
            </Link>
          ))}
          <Link to="/system-preview" onClick={() => setMenuOpen(false)} className="text-sm text-[#9CA3AF] font-medium tracking-wide">System Preview</Link>
          
          <div className="flex flex-col gap-4 pt-4 mt-4 border-t border-white/10">
            <Link to="/smart-quote" onClick={() => setMenuOpen(false)} className="premium-button-primary justify-center">Get a Quote</Link>
            <WhatsAppCTA variant="outline" className="justify-center border-white/20 text-white" />
          </div>
        </div>
      )}
    </header>
  );
}
