import { useEffect, useState, useRef } from "react";

function StatisticCounter({ value, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          const duration = 2500;
          const startTime = performance.now();
          const easeOutExpo = (t) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
          const step = Math.max(1, Math.floor(value / 20));

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = easeOutExpo(progress);
            const raw = Math.floor(eased * value);

            setCount(Math.floor(raw / step) * step);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(value);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div
      ref={ref}
      className="
        bg-white/5
        backdrop-blur-md
        p-8
        rounded-2xl
        text-center
        hover:-translate-y-1
        transition-all
        duration-300
      "
    >
      <h2 className="text-5xl font-bold text-cyan-600">
        {count}+
      </h2>
      <p className="mt-3 text-slate-200 text-lg">
        {label}
      </p>
    </div>
  );
}

export default StatisticCounter;