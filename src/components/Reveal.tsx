import { useEffect, useRef, ReactNode, ElementType } from 'react';

interface RevealTextProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: ElementType;
}

export function RevealText({ children, delay = 0, className = '', as: TagName = 'div' }: RevealTextProps) {
  const wrapRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const inner = el.querySelector('.reveal-text') as HTMLElement | null;
    if (!inner) return;
    if (delay) inner.style.transitionDelay = `${delay}s`;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { inner.classList.add('is-visible'); obs.unobserve(el); }
      },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Tag = TagName as any;
  return (
    <Tag
      ref={wrapRef}
      className={`reveal-wrap ${className}`}
      style={{ paddingBottom: '0.15em', overflow: 'visible' }}
    >
      <span
        className="reveal-text"
        style={{ display: 'block', paddingBottom: '0.1em' }}
      >
        {children}
      </span>
    </Tag>
  );
}

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: ElementType;
}

export function FadeUp({ children, delay = 0, className = '', as: TagName = 'div' }: FadeUpProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (delay) el.style.transitionDelay = `${delay}s`;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { el.classList.add('is-visible'); obs.unobserve(el); }
      },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Tag = TagName as any;
  return <Tag ref={ref} className={`fade-up ${className}`}>{children}</Tag>;
}

interface LineRevealProps {
  delay?: number;
  className?: string;
}

export function LineReveal({ delay = 0, className = '' }: LineRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (delay) el.style.transitionDelay = `${delay}s`;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { el.classList.add('is-visible'); obs.unobserve(el); }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`line-reveal h-px bg-[var(--cyan)] ${className}`} />
  );
}
