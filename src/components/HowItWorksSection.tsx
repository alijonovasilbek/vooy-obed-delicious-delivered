import { MessageCircle, Truck, UtensilsCrossed } from "lucide-react";
import { useInView } from "./useInView";

const steps = [
  {
    icon: MessageCircle,
    title: "Telegram yoki telefon orqali buyurtma bering",
    desc: "",
  },
  {
    icon: Truck,
    title: "12:30 – 13:30 oralig'ida ishxona yoki uyingizga yetkazib beramiz",
    desc: "",
  },
  {
    icon: UtensilsCrossed,
    title: "Issiq va mazali tushliklarimizdan rohatlaning",
    desc: "",
  },
];

const HowItWorksSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="section-padding overflow-hidden relative" ref={ref}>
      {/* Watermark */}
      <div className="absolute pointer-events-none select-none overflow-hidden" style={{inset:0, width:"150%", left:"-25%"}}>
        {Array.from({ length: 8 }).map((_, row) => (
          <div key={row} className="flex">
            {Array.from({ length: 10 }).map((_, col) => (
              <span
                key={col}
                className="text-foreground/[0.035] font-black uppercase whitespace-nowrap"
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
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold">
            Buyurtma berish tartibi!
          </h2>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-start justify-center gap-0 max-w-4xl mx-auto">
          {steps.map((s, i) => (
            <div key={s.title} className="flex items-start">
              <div
                className={`flex flex-col items-center ${isInView ? "animate-fade-up" : "opacity-0"}`}
                style={{ animationDelay: `${i * 0.25}s` }}
              >
                <div className="relative mb-8">
                  <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center shadow-xl shadow-primary/25 hover:scale-110 transition-transform duration-300">
                    <s.icon className="text-primary-foreground" size={38} strokeWidth={1.8} />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-foreground text-background text-sm font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-bold text-xl mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-center max-w-[200px]">{s.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="flex items-center pt-12 px-4">
                  <div className="w-24 h-[2px] bg-gradient-to-r from-primary to-primary/40" />
                  <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-primary/40" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile */}
        <div className="md:hidden relative pl-16 max-w-sm mx-auto">
          <div className="absolute left-[27px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-primary/60 to-primary" />
          <div className="flex flex-col gap-14">
            {steps.map((s, i) => (
              <div
                key={s.title}
                className={`relative flex items-start gap-5 ${isInView ? "animate-fade-up" : "opacity-0"}`}
                style={{ animationDelay: `${i * 0.25}s` }}
              >
                <div className="absolute -left-16 top-0">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/25">
                      <s.icon className="text-primary-foreground" size={24} strokeWidth={1.8} />
                    </div>
                    <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-foreground text-background text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="font-bold text-lg mb-1">{s.title}</h3>
                  <p className="text-muted-foreground text-sm">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
