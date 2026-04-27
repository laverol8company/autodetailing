import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV = [
  { label: 'Services', to: '/services' },
  { label: 'Smart Quote', to: '/smart-quote' },
  { label: 'Booking', to: '/booking' },
  { label: 'Proof', to: '/proof' },
  { label: 'Contact', to: '/contact' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#050505]/95 backdrop-blur-md border-b border-[rgba(255,255,255,0.06)]' : 'bg-transparent'
        }`}
      >
        <div className="site-container flex items-center justify-between h-20">

          {/* Brand */}
          <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-8 h-8 bg-white flex items-center justify-center">
              <span className="text-black font-black text-[11px] tracking-tighter">GC</span>
            </div>
            <span className="text-white font-semibold text-sm tracking-widest uppercase hidden sm:block">
              General Cars
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {NAV.map(n => (
              <Link
                key={n.to}
                to={n.to}
                className={`nav-link ${location.pathname === n.to ? 'active' : ''}`}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/system-preview" className="label-xs text-[#8A8A8A]/50 hover:text-[#8A8A8A] transition-colors">
              Owner
            </Link>
            <Link to="/smart-quote" className="btn-primary text-xs px-6 py-3">
              Get a Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(v => !v)}
            className="md:hidden text-white p-2 -mr-2"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-[#050505]" onClick={() => setOpen(false)} />
        
        {/* Drawer content */}
        <div className="absolute top-20 left-0 right-0 bottom-0 flex flex-col px-6 pt-8 pb-12 gap-0">
          {NAV.map((n, i) => (
            <Link
              key={n.to}
              to={n.to}
              className={`text-2xl font-semibold text-white py-4 border-b border-[rgba(255,255,255,0.06)] block transition-opacity ${
                open ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: open ? `${i * 60}ms` : '0ms' }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/system-preview"
            className="text-base text-[#8A8A8A] py-4 border-b border-[rgba(255,255,255,0.06)] block"
          >
            System Preview
          </Link>
          <div className="mt-auto flex flex-col gap-3 pt-8">
            <Link to="/smart-quote" className="btn-primary justify-center">
              Get a Quote
            </Link>
            <a
              href="https://wa.me/something"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost justify-center"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
