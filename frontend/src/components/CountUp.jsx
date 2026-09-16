import { useEffect, useRef } from 'react';

export function CountUp({ end }) {
  const countRef = useRef(null);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!countRef.current || hasRun.current) return;
    hasRun.current = true;

    let current = 0;
    const increment = end / 60;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        current = end;
        clearInterval(timer);
      }
      if (countRef.current) {
        countRef.current.textContent = `${Math.floor(current)}+`;
      }
    }, 30);
  }, [end]);

  return <span ref={countRef}>0+</span>;
}
