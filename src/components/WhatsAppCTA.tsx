import { Phone } from 'lucide-react';

interface WhatsAppCTAProps {
  model?: string;
  service?: string;
  className?: string;
  variant?: 'primary' | 'outline' | 'sticky';
}

export function WhatsAppCTA({ model = '[model]', service = '[service]', className = '', variant = 'primary' }: WhatsAppCTAProps) {
  const message = `Hi, I'd like a quote for detailing. My car is ${model}, and I'm interested in ${service}.`;
  const whatsappUrl = `https://wa.me/something?text=${encodeURIComponent(message)}`;

  let baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";
  
  if (variant === 'primary') {
    baseStyles += " bg-success text-white hover:bg-green-700 h-10 py-2 px-4";
  } else if (variant === 'outline') {
    baseStyles += " border border-success text-success hover:bg-success hover:text-white h-10 py-2 px-4";
  } else if (variant === 'sticky') {
    baseStyles += " fixed bottom-4 right-4 z-50 bg-success text-white hover:bg-green-700 h-14 w-14 rounded-full shadow-lg shadow-success/20";
  }

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${className}`}
    >
      <Phone className={variant === 'sticky' ? 'h-6 w-6' : 'mr-2 h-4 w-4'} />
      {variant !== 'sticky' && "WhatsApp"}
    </a>
  );
}
