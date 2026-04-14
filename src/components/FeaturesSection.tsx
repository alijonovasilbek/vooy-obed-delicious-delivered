import { CalendarDays, ChefHat, Clock, ShieldCheck } from "lucide-react";
import { useInView } from "./useInView";

const features = [
  {
    icon: CalendarDays,
    title: "O'zgaruvchan Taomnoma",
    desc: "Har kuni turli xil mazali taomlar tayyorlanadi.",
  },
  {
    icon: ChefHat,
    title: "Mohir oshpazlar",
    desc: "Tajribali va professional oshpazlar jamoasi siz uchun taom tayyorlaydi.",
  },
  {
    icon: Clock,
    title: "12:30 – 13:30 yetkazish",
    desc: "Tushlik vaqtida to'g'ridan-to'g'ri sizning manzilingizga.",
  },
  {
    icon: ShieldCheck,
    title: "100% Halol va sifatli",
    desc: "Faqat barra va sifatli mahsulotlar ishlatiladi. Halolligi kafolatlanadi.",
  },
];

const FeaturesSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="features" className="section-padding bg-secondary/50 relative overflow-hidden" ref={ref}>
      {/* Watermark */}
      <div className="absolute pointer-events-none select-none overflow-hidden" style={{inset:0, width:"150%", left:"-25%"}}>
        {Array.from({ length: 8 }).map((_, row) => (
          <div key={row} className="flex">
            {Array.from({ length: 10 }).map((_, col) => (
              <span
                key={col}
                className="text-foreground/[0.04] font-black uppercase whitespace-nowrap"
                style={{
                  fontSize: "clamp(32px, 5vw, 56px)",
                  letterSpacing: "0.05em",
                  padding: "20px 28px",
                  transform: "rotate(-20deg)",
                  display: "inline-block",
                  transformOrigin: "center",
                }}
              >
                VOOYOBED
              </span>
            ))}
          </div>
        ))}
      </div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Nega aynan <span className="text-primary">Vooy Obed</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Biz bilan tushlik — har doim mazali va qulay
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`glass-strong rounded-2xl p-8 text-center hover-lift cursor-default ${
                isInView ? "animate-zoom-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <f.icon className="text-primary" size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
