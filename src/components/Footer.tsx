import { Link } from 'react-router-dom';

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
