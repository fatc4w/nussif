import { useEffect, useRef, useState } from 'react';

/**
 * Scroll-driven parallax: returns a CSS transform value
 * that shifts the element vertically based on scroll position.
 * `speed` controls intensity (0 = no movement, 0.5 = half-speed, etc.)
 */
export function useParallax(speed = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          const rect = el.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          // How far the element's center is from viewport center
          const elementCenter = rect.top + rect.height / 2;
          const viewportCenter = windowHeight / 2;
          const distance = elementCenter - viewportCenter;
          setOffset(distance * speed);
          ticking = false;
        });
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [speed]);

  return { ref, offset, style: { transform: `translateY(${offset}px)` } };
}

/**
 * Returns scroll progress (0–1) for an element as it traverses the viewport.
 */
export function useScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          const rect = el.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          // 0 when element top enters viewport bottom, 1 when element bottom exits viewport top
          const total = windowHeight + rect.height;
          const current = windowHeight - rect.top;
          setProgress(Math.max(0, Math.min(1, current / total)));
          ticking = false;
        });
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return { ref, progress };
}

/**
 * Horizontal line that grows as user scrolls into view.
 */
export function useLineReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setWidth(100);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, style: { width: `${width}%`, transition: 'width 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)' } };
}
