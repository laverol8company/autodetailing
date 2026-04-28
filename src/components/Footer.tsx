import { Link } from 'react-router-dom';
import { Instagram, Youtube } from 'lucide-react';

function TikTokIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.16 8.16 0 004.77 1.53V6.77a4.85 4.85 0 01-1-.08z"/>
    </svg>
  );
}

const NAV = [
  { group: 'Services', links: [
    { label: 'Paint Correction', to: '/services' },
    { label: 'Ceramic Coating', to: '/services' },
    { label: 'PPF Protection', to: '/services' },
    { label: 'Interior Detail', to: '/services' },
  ]},
  { group: 'Studio', links: [
    { label: 'Our Work', to: '/proof' },
    { label: 'Smart Quote', to: '/smart-quote' },
    { label: 'Book Appointment', to: '/booking' },
    { label: 'Contact', to: '/contact' },
  ]},
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[var(--black)] border-t border-[var(--border)]">
      <div className="site-container py-20 md:py-28">

        {/* Top */}
        <div className="flex flex-col lg:flex-row justify-between gap-16">

          {/* Brand column */}
          <div className="max-w-xs">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 border border-[var(--cyan)] flex items-center justify-center">
                <span className="font-mono text-[10px] font-bold tracking-widest text-[var(--cyan)]">GC</span>
              </div>
              <span className="text-white text-xs tracking-[0.2em] uppercase font-medium">General Cars</span>
            </div>
            <p className="type-body text-sm mb-8 leading-relaxed">
              Premium auto detailing &amp; paint protection studio.<br />
              By appointment only. Bucharest, Romania.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-4">
              {[
                { Icon: Instagram, label: 'Instagram' },
                { Icon: TikTokIcon, label: 'TikTok' },
                { Icon: Youtube, label: 'YouTube' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 border border-[var(--border)] flex items-center justify-center text-[var(--white-dim)] hover:border-[var(--cyan)] hover:text-[var(--cyan)] transition-all duration-200"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 gap-12">
            {NAV.map(group => (
              <div key={group.group}>
                <p className="type-label mb-6">{group.group}</p>
                <div className="flex flex-col gap-3">
                  {group.links.map(l => (
                    <Link key={l.label} to={l.to} className="footer-link">
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA column */}
          <div className="flex flex-col gap-4">
            <p className="type-label mb-2">Ready to book?</p>
            <Link to="/smart-quote" className="btn-ghost whitespace-nowrap">
              Smart Quote →
            </Link>
            <Link to="/booking" className="btn-primary whitespace-nowrap">
              <span>Book Appointment</span>
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className="type-body text-xs opacity-40">
            © {year} General Cars. All rights reserved.
          </span>
          <Link
            to="/system-preview"
            className="text-[rgba(255,255,255,0.15)] text-[10px] tracking-widest uppercase hover:text-[rgba(255,255,255,0.4)] transition-colors"
          >
            Owner Preview
          </Link>
        </div>
      </div>
    </footer>
  );
}
