import { useEffect } from 'react';

let observer;

function getObserver() {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
  }
  return observer;
}

/**
 * Observes all [data-reveal] elements not yet revealed and animates them
 * into view on scroll. Pass deps to re-scan after dynamic content renders.
 */
export default function useReveal(deps = []) {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      document
        .querySelectorAll('[data-reveal]')
        .forEach((el) => el.classList.add('revealed'));
      return;
    }
    const obs = getObserver();
    document
      .querySelectorAll('[data-reveal]:not(.revealed)')
      .forEach((el) => obs.observe(el));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
