import { useEffect, useRef, useState } from 'react';

interface CounterProps {
  target: number;
  suffix?: string;
  label: string;
}

function animateValue(
  start: number,
  end: number,
  duration: number,
  callback: (v: number) => void
) {
  const startTime = performance.now();
  const step = (now: number) => {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    callback(Math.floor(eased * (end - start) + start));
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function formatValue(v: number): string {
  return v.toLocaleString('en-US');
}

export default function Counter({ target, suffix = '+', label }: CounterProps) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            animateValue(0, target, 1800, (v) => setValue(v));
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-center">
      <div className="warm-gradient whitespace-nowrap text-2xl sm:text-3xl xl:text-2xl font-extrabold tracking-tight tabular-nums">
        {formatValue(value)}{suffix}
      </div>
      <div className="text-gray-400 text-xs md:text-sm mt-1 font-medium">{label}</div>
    </div>
  );
}
