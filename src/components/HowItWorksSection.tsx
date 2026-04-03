import { MessageCircle, Clock, UtensilsCrossed } from "lucide-react";
import { useInView } from "./useInView";

const steps = [
  {
    icon: MessageCircle,
    title: "Buyurtma bering",
    desc: "Telegram yoki telefon orqali buyurtma bering",
  },
  {
    icon: Clock,
    title: "Yetkazamiz",
    desc: "12:30 - 13:30 oralig'ida yetkazib beramiz",
  },
  {
    icon: UtensilsCrossed,
    title: "Mazali tushlik!",
    desc: "Issiq va mazali tushlik enjoy qiling!",
  },
];

const HowItWorksSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="section-padding bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4">
            Qanday <span className="text-primary italic">Buyurtma</span> Beraman?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className={`group text-center glass rounded-3xl p-10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ${isInView ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <div className="relative mx-auto mb-8 w-fit">
                <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/30">
                  <s.icon className="text-primary-foreground" size={40} strokeWidth={1.8} />
                </div>
                <span className="absolute -top-1 -right-1 w-9 h-9 rounded-full bg-foreground text-background text-sm font-bold flex items-center justify-center shadow-md">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-bold text-xl mb-3">{s.title}</h3>
              <p className="text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
