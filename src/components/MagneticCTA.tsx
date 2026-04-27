import { useRef, useCallback } from 'react';

interface MagneticCTAProps {
  children: React.ReactNode;
  className?: string;
  strength?: number; // px magnetic pull, default 8
}

/**
 * Wraps any element with a subtle magnetic tracking effect.
 * On hover, the element follows cursor by `strength` pixels.
 * Falls back gracefully on touch devices (no tracking).
 * Respects prefers-reduced-motion.
 */
export function MagneticCTA({ children, className = '', strength = 8 }: MagneticCTAProps) {
  const ref = useRef<HTMLSpanElement>(null);

  const onMove = useCallback((e: React.MouseEvent<HTMLSpanElement>) => {
    if (!ref.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / rect.width;
    const dy = (e.clientY - cy) / rect.height;
    ref.current.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
  }, [strength]);

  const onLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = 'translate(0px, 0px)';
    ref.current.style.transition = 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    setTimeout(() => {
      if (ref.current) ref.current.style.transition = '';
    }, 400);
  }, []);

  return (
    <span
      ref={ref}
      className={`inline-block select-none ${className}`}
      style={{ transition: 'transform 0.1s ease-out' }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </span>
  );
}
