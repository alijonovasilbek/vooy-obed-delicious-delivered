import { Phone, ClipboardList, Truck, Smile } from "lucide-react";
import { useInView } from "./useInView";

const steps = [
  { icon: Phone, title: "Qo'ng'iroq qiling", desc: "Telefon yoki Telegram orqali buyurtma bering" },
  { icon: ClipboardList, title: "Menyuni tanlang", desc: "Bugungi kunning mazali taomnomasi bilan tanishing" },
  { icon: Truck, title: "Yetkazib beramiz", desc: "12:30 – 13:30 oralig'ida to'g'ridan-to'g'ri sizga" },
  { icon: Smile, title: "Mazali tushlik!", desc: "Issiq va mazali taomdan rohatlanish vaqti!" },
];

const HowItWorksSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="section-padding" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Jarayon</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4">
            Qanday <span className="text-primary">buyurtma</span> berish mumkin?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Atigi 4 qadam — tez va oson
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className={`text-center ${isInView ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="relative mx-auto mb-6">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <s.icon className="text-primary" size={32} />
                </div>
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
