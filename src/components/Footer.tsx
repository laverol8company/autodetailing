import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 text-muted text-sm">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} General Cars. Premium Auto Detailing. 
          Prototype foundation built for testing.
        </p>
        <div className="flex space-x-4">
          <Link to="#" className="hover:text-foreground">Privacy Policy</Link>
          <Link to="#" className="hover:text-foreground">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
