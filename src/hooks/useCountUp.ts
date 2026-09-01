import { useState, useEffect } from 'react';

interface UseCountUpOptions {
  end: number;
  start?: number;
  duration?: number;
  enabled?: boolean;
}

export function useCountUp({
  end,
  start = 0,
  duration = 1800,
  enabled = true,
}: UseCountUpOptions): number {
  const [count, setCount] = useState<number>(start);

  useEffect(() => {
    if (!enabled) return;

    let current = start;
    const stepTime = 20;
    const totalSteps = duration / stepTime;
    const increment = (end - start) / totalSteps;

    const timer = setInterval(() => {
      current += increment;
      if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [end, start, duration, enabled]);

  return count;
}
