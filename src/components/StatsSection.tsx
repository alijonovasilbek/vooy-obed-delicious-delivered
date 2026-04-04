import { useEffect, useState, useRef } from "react";
import { useInView } from "./useInView";

const stats = [
  { target: 5000, suffix: "+", label: "Mamnun mijozlar", countUp: true },
  { target: 365, suffix: "", label: "Kun davomida xizmat", countUp: true },
  { target: 50, suffix: "+", label: "Xilma-xil taomlar", countUp: true },
  { target: 30, suffix: " daq", label: "O'rtacha yetkazish", countUp: false },
];

function useCountUp(target: number, isInView: boolean, countUp: boolean, duration = 2000) {
  const [value, setValue] = useState(countUp ? 0 : 60);
  const started = useRef(false);

  useEffect(() => {
    if (!isInView || started.current) return;
    started.current = true;

    const start = countUp ? 0 : 60;
    const end = target;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(start + (end - start) * eased);
      setValue(current);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, target, countUp, duration]);

  return value;
}

const StatItem = ({ stat, index, isInView }: { stat: typeof stats[0]; index: number; isInView: boolean }) => {
  const value = useCountUp(stat.target, isInView, stat.countUp);

  const formatted = stat.target >= 1000
    ? value.toLocaleString("ru-RU").replace(/\s/g, " ")
    : value.toString();

  return (
    <div
      className={`text-center ${isInView ? "animate-count-up" : "opacity-0"}`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="text-2xl md:text-5xl font-black text-primary mb-2 whitespace-nowrap">
        {formatted}{stat.suffix}
      </div>
      <p className="text-muted-foreground text-sm font-medium">{stat.label}</p>
    </div>
  );
};

const StatsSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="glass-strong rounded-3xl p-8 md:p-16 max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((s, i) => (
              <StatItem key={s.label} stat={s} index={i} isInView={isInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
