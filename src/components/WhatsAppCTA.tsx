import { Phone } from 'lucide-react';

interface WhatsAppCTAProps {
  model?: string;
  service?: string;
  className?: string;
  variant?: 'primary' | 'outline' | 'sticky';
}

export function WhatsAppCTA({ model = '[model]', service = 'detailing services', className = '', variant = 'primary' }: WhatsAppCTAProps) {
  const message = `Hi, I'd like a quote for detailing. My car is ${model}, and I'm interested in ${service}.`;
  const url = `https://wa.me/something?text=${encodeURIComponent(message)}`;

  if (variant === 'sticky') {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-5 right-5 z-50 h-13 w-13 rounded-full bg-green-600 hover:bg-green-500 text-white shadow-xl shadow-green-900/30 flex items-center justify-center transition-all hover:scale-105 ${className}`}
        style={{ height: 52, width: 52 }}
        aria-label="Chat on WhatsApp"
      >
        <Phone className="h-5 w-5" />
      </a>
    );
  }

  if (variant === 'outline') {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 rounded-lg border border-green-600/40 text-green-400 hover:text-white hover:bg-green-600/20 hover:border-green-500/60 text-sm font-medium px-4 py-2 transition-all ${className}`}
      >
        <Phone className="h-3.5 w-3.5" />
        WhatsApp
      </a>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-lg bg-green-600 hover:bg-green-500 text-white text-sm font-medium px-4 py-2 transition-all ${className}`}
    >
      <Phone className="h-3.5 w-3.5" />
      WhatsApp
    </a>
  );
}
