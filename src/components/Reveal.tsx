import { useEffect, useRef, ReactNode } from 'react';

interface RevealTextProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

/**
 * Carbonov-style text reveal — text slides up from clipped container on scroll.
 * Uses IntersectionObserver for scroll-triggered animation.
 */
export function RevealText({ children, delay = 0, className = '', as: Tag = 'div' }: RevealTextProps) {
  const wrapRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const inner = el.querySelector('.reveal-text') as HTMLElement | null;
    if (!inner) return;

    if (delay) {
      inner.style.transitionDelay = `${delay}s`;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          inner.classList.add('is-visible');
          obs.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    // @ts-ignore — dynamic tag
    <Tag ref={wrapRef} className={`reveal-wrap ${className}`}>
      <span className="reveal-text">{children}</span>
    </Tag>
  );
}

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

/**
 * Fade + slide up on scroll entry.
 */
export function FadeUp({ children, delay = 0, className = '', as: Tag = 'div' }: FadeUpProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (delay) el.style.transitionDelay = `${delay}s`;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          obs.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  // @ts-ignore
  return <Tag ref={ref} className={`fade-up ${className}`}>{children}</Tag>;
}

interface LineRevealProps {
  delay?: number;
  className?: string;
}

/**
 * Horizontal line that grows from left on scroll.
 */
export function LineReveal({ delay = 0, className = '' }: LineRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (delay) el.style.transitionDelay = `${delay}s`;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          obs.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`line-reveal h-px bg-[var(--cyan)] ${className}`}
    />
  );
}
