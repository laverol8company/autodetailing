import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Menu } from 'lucide-react';

const LINKS = [
  { label: 'Services',    to: '/services' },
  { label: 'Smart Quote', to: '/smart-quote' },
  { label: 'Our Work',   to: '/proof' },
  { label: 'Booking',    to: '/booking' },
  { label: 'Contact',    to: '/contact' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[rgba(0,0,0,0.92)] backdrop-blur-md border-b border-[var(--border)]'
            : 'bg-transparent'
        }`}
      >
        <div className="site-container flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-8 h-8 border border-[var(--cyan)] flex items-center justify-center">
              <span className="font-mono text-[10px] font-bold tracking-widest text-[var(--cyan)]">GC</span>
            </div>
            <span className="hidden sm:block font-body text-xs tracking-[0.2em] uppercase text-white font-medium">
              General Cars
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {LINKS.map(l => (
              <Link
                key={l.to}
                to={l.to}
                className={`nav-link ${location.pathname === l.to ? 'active' : ''}`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link to="/booking" className="btn-primary py-2.5 px-6 text-[10px]">
              <span>Book Now</span>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(o => !o)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-white"
            aria-label="Toggle menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Mobile fullscreen overlay */}
      <div
        className={`fixed inset-0 z-[200] bg-black flex flex-col transition-all duration-500 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="site-container flex items-center justify-between h-16">
          <span className="type-label cyan">Menu</span>
          <button
            onClick={() => setOpen(false)}
            className="w-10 h-10 flex items-center justify-center text-white"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex flex-col justify-center flex-1 site-container gap-8 pb-20">
          {LINKS.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              style={{ transitionDelay: open ? `${i * 0.07}s` : '0s' }}
              className={`type-headline transition-all duration-500 ${
                open ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
              } hover:text-[var(--cyan)] transition-colors`}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/booking" className="btn-primary mt-4 w-fit">
            <span>Book Now</span>
          </Link>
        </nav>
      </div>
    </>
  );
}
