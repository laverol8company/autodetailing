import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { WhatsAppCTA } from './WhatsAppCTA';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Packages', href: '#packages' },
    { label: 'Results', href: '#proof' },
    { label: 'Contact', href: '#quote' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/5 bg-[#070A0F]/95 backdrop-blur-md">
      <div className="premium-container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-md bg-[#2563EB] flex items-center justify-center font-black text-white text-xs tracking-tighter">GC</div>
          <span className="font-bold text-base tracking-tight text-white">General <span className="text-[#2563EB]">Cars</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(l => (
            <a key={l.label} href={l.href} className="text-sm text-[#6B7280] hover:text-white transition-colors font-medium">
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <WhatsAppCTA variant="outline" />
          <a href="#quote" className="premium-button-primary text-xs px-4 py-2">Get a Quote</a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setMenuOpen(v => !v)} className="md:hidden text-white p-1" aria-label="Toggle menu">
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/5 bg-[#111827] px-4 py-6 flex flex-col gap-4">
          {navLinks.map(l => (
            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)} className="text-sm text-[#D8DEE9] font-medium py-1">
              {l.label}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-2 border-t border-white/10">
            <WhatsAppCTA variant="outline" className="justify-center" />
            <a href="#quote" onClick={() => setMenuOpen(false)} className="premium-button-primary justify-center text-sm">Get a Quote</a>
          </div>
        </div>
      )}
    </header>
  );
}
