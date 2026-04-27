import { Link } from 'react-router-dom';
import { Instagram, Youtube } from 'lucide-react';

/* TikTok icon not in lucide-react — using clean custom SVG */
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.16 8.16 0 004.77 1.53V6.77a4.85 4.85 0 01-1-.08z"/>
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#050505] border-t border-[rgba(255,255,255,0.06)]">
      <div className="site-container py-16">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          
          {/* Brand */}
          <div className="flex flex-col gap-4 max-w-xs">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white flex items-center justify-center flex-shrink-0">
                <span className="text-black font-black text-[11px] tracking-tighter">GC</span>
              </div>
              <span className="text-white font-semibold text-sm tracking-widest uppercase">General Cars</span>
            </div>
            <p className="text-[#8A8A8A] text-xs leading-relaxed font-light">
              Premium detailing & paint protection.<br/>By appointment only.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-2">
              <a
                href="#"
                aria-label="Instagram"
                className="text-[#8A8A8A] hover:text-white transition-all duration-200 hover:drop-shadow-[0_0_6px_rgba(200,230,255,0.3)]"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="TikTok"
                className="text-[#8A8A8A] hover:text-white transition-all duration-200 hover:drop-shadow-[0_0_6px_rgba(200,230,255,0.3)]"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="text-[#8A8A8A] hover:text-white transition-all duration-200 hover:drop-shadow-[0_0_6px_rgba(200,230,255,0.3)]"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <p className="label-xs mb-4">Services</p>
              <div className="flex flex-col gap-2.5">
                {['Enhance', 'Protect', 'Maintain', 'Restore'].map(s => (
                  <Link key={s} to="/services" className="text-[#8A8A8A] text-xs hover:text-white transition-colors">{s}</Link>
                ))}
              </div>
            </div>
            <div>
              <p className="label-xs mb-4">Book</p>
              <div className="flex flex-col gap-2.5">
                <Link to="/smart-quote" className="text-[#8A8A8A] text-xs hover:text-white transition-colors">Smart Quote</Link>
                <Link to="/booking" className="text-[#8A8A8A] text-xs hover:text-white transition-colors">Booking</Link>
                <Link to="/proof" className="text-[#8A8A8A] text-xs hover:text-white transition-colors">Results</Link>
                <Link to="/contact" className="text-[#8A8A8A] text-xs hover:text-white transition-colors">Contact</Link>
              </div>
            </div>
            <div>
              <p className="label-xs mb-4">Reach Us</p>
              <div className="flex flex-col gap-2.5">
                <a href="https://wa.me/something" target="_blank" rel="noopener noreferrer" className="text-[#8A8A8A] text-xs hover:text-white transition-colors">WhatsApp</a>
                <span className="text-[#8A8A8A] text-xs">Bucharest, Romania</span>
                <span className="text-[#8A8A8A] text-xs">By appointment only</span>
              </div>
            </div>
          </div>
        </div>

        <div className="divider-full mt-12 mb-8" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className="text-[#8A8A8A] text-xs">&copy; {year} General Cars. All rights reserved.</span>
          <Link to="/system-preview" className="text-[#8A8A8A]/30 text-[10px] uppercase tracking-widest hover:text-[#8A8A8A] transition-colors">
            Owner Preview
          </Link>
        </div>
      </div>
    </footer>
  );
}
