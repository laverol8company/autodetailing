import { Link } from 'react-router-dom';
import { MessageCircle, Calendar, Instagram, Youtube } from 'lucide-react';

/* TikTok SVG */
function TikTokIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.16 8.16 0 004.77 1.53V6.77a4.85 4.85 0 01-1-.08z"/>
    </svg>
  );
}

/**
 * Otto Kraftor-style floating side dock — WhatsApp, Booking, Socials
 */
export function SideDock() {
  return (
    <div className="side-dock hidden lg:flex" aria-label="Quick contact">
      <a
        href="https://wa.me/40700000000"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="side-dock-item"
        title="WhatsApp"
      >
        <MessageCircle className="w-4 h-4" />
      </a>
      <Link
        to="/booking"
        aria-label="Book appointment"
        className="side-dock-item"
        title="Booking"
      >
        <Calendar className="w-4 h-4" />
      </Link>
      <a href="#" aria-label="Instagram" className="side-dock-item" title="Instagram">
        <Instagram className="w-4 h-4" />
      </a>
      <a href="#" aria-label="TikTok" className="side-dock-item" title="TikTok">
        <TikTokIcon size={15} />
      </a>
      <a href="#" aria-label="YouTube" className="side-dock-item" title="YouTube">
        <Youtube className="w-4 h-4" />
      </a>
    </div>
  );
}
