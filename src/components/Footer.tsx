import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#070A0F]">
      <div className="premium-container py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded bg-[#2563EB] flex items-center justify-center text-white font-black text-[10px]">GC</div>
          <span className="text-sm font-bold text-white">General <span className="text-[#2563EB]">Cars</span></span>
        </div>
        <p className="text-xs text-[#6B7280] text-center">
          &copy; {new Date().getFullYear()} General Cars. Premium Auto Detailing & Protection.
        </p>
        <div className="flex items-center gap-5 text-xs text-[#6B7280]">
          <Link to="#" className="hover:text-white transition-colors">Privacy</Link>
          <Link to="#" className="hover:text-white transition-colors">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
