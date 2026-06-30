'use client';

import { useRef, useEffect, type ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface Props { children: ReactNode; className?: string; delay?: number; direction?: 'up' | 'left' | 'right'; duration?: number }

export default function ScrollReveal({ children, className = '', delay = 0, direction = 'up', duration = 1 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const offset = direction === 'up' ? 80 : direction === 'left' ? 80 : -80;
    const axis = direction === 'up' ? 'y' : 'x';
    gsap.set(el, { opacity: 0, [axis]: offset });
    const t = gsap.to(el, { opacity: 1, [axis]: 0, duration, delay, ease: 'power3.out', paused: true });
    const st = ScrollTrigger.create({ trigger: el, start: 'top 85%', onEnter: () => t.play(), onLeaveBack: () => t.reverse() });
    return () => { t.kill(); st.kill(); };
  }, [delay, direction, duration]);
  return <div ref={ref} className={className}>{children}</div>;
}
