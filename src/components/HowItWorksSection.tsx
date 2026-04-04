import { MessageCircle, Car, UtensilsCrossed } from "lucide-react";
import { useInView } from "./useInView";

const steps = [
  {
    icon: MessageCircle,
    title: "Buyurtma bering",
    desc: "Telegram yoki telefon orqali buyurtma bering",
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
    <section className="section-padding overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold">
            Qanday <span className="text-primary italic">Buyurtma</span> Beraman?
          </h2>
        </div>

        {/* Desktop */}
        <div className="hidden md:block max-w-5xl mx-auto relative">
          <div className="flex items-center justify-between relative">
            {/* Step 1 - left edge */}
            <div
              className={`flex flex-col items-center ${isInView ? "animate-fade-up" : "opacity-0"}`}
            >
              <div className="relative mb-8">
                <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center shadow-xl shadow-primary/25 hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="text-primary-foreground" size={38} strokeWidth={1.8} />
                </div>
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-foreground text-background text-sm font-bold flex items-center justify-center">
                  1
                </span>
              </div>
              <h3 className="font-bold text-xl mb-2">{steps[0].title}</h3>
              <p className="text-muted-foreground text-center max-w-[200px]">{steps[0].desc}</p>
            </div>

            {/* Connecting line with car */}
            <div className="flex-1 mx-8 relative">
              <div className="h-[2px] bg-gradient-to-r from-primary via-primary/60 to-primary w-full" />
              <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
                  isInView ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: "0.3s" }}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                  <Car className="text-primary" size={26} />
                </div>
                <p className="text-xs text-muted-foreground text-center mt-2 font-medium whitespace-nowrap">
                  12:30 – 13:30
                </p>
              </div>
            </div>

            {/* Step 2 - right edge */}
            <div
              className={`flex flex-col items-center ${isInView ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: "0.5s" }}
            >
              <div className="relative mb-8">
                <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center shadow-xl shadow-primary/25 hover:scale-110 transition-transform duration-300">
                  <UtensilsCrossed className="text-primary-foreground" size={38} strokeWidth={1.8} />
                </div>
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-foreground text-background text-sm font-bold flex items-center justify-center">
                  2
                </span>
              </div>
              <h3 className="font-bold text-xl mb-2">{steps[1].title}</h3>
              <p className="text-muted-foreground text-center max-w-[200px]">{steps[1].desc}</p>
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden relative pl-16 max-w-sm mx-auto">
          <div className="absolute left-[27px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-primary/60 to-primary" />

          {/* Car icon in middle of line */}
          <div className="absolute left-[14px] top-1/2 -translate-y-1/2 z-10">
            <div className="w-8 h-8 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center bg-background">
              <Car className="text-primary" size={14} />
            </div>
          </div>

          <div className="flex flex-col gap-14">
            {steps.map((s, i) => (
              <div
                key={s.title}
                className={`relative flex items-start gap-5 ${isInView ? "animate-fade-up" : "opacity-0"}`}
                style={{ animationDelay: `${i * 0.3}s` }}
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
