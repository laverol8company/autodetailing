import { Link } from 'react-router-dom';
import { WhatsAppCTA } from './WhatsAppCTA';

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl tracking-tight text-white">General <span className="text-primary">Cars</span></span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-muted">
          <Link to="#services" className="transition-colors hover:text-foreground">Services</Link>
          <Link to="#packages" className="transition-colors hover:text-foreground">Packages</Link>
          <Link to="#proof" className="transition-colors hover:text-foreground">Proof</Link>
          <Link to="#reviews" className="transition-colors hover:text-foreground">Reviews</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <WhatsAppCTA variant="outline" className="hidden md:inline-flex" />
          <button className="md:hidden text-foreground">Menu</button>
        </div>
      </div>
    </header>
  );
}
