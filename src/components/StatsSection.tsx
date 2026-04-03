import { useInView } from "./useInView";

const stats = [
  { number: "5 000+", label: "Mamnun mijozlar" },
  { number: "365", label: "Kun davomida xizmat" },
  { number: "50+", label: "Xilma-xil taomlar" },
  { number: "30 daq", label: "O'rtacha yetkazish" },
];

const StatsSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="glass-strong rounded-3xl p-10 md:p-16 max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`text-center ${isInView ? "animate-count-up" : "opacity-0"}`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="text-3xl md:text-5xl font-black text-primary mb-2">
                  {s.number}
                </div>
                <p className="text-muted-foreground text-sm font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
