import { CalendarCheck, Send } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Uzbek cuisine spread"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="glass-dark inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 animate-fade-up">
          <span className="text-lg">🍛</span>
          <span className="text-primary-foreground font-semibold text-sm">
            <span className="text-primary">Vooy</span> Obed
          </span>
        </div>

        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-black text-primary-foreground mb-6 leading-tight animate-fade-up"
          style={{ animationDelay: "0.15s" }}
        >
          Tushlik kerakmi?
        </h1>

        <div
          className="glass-dark inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-6 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-primary-foreground/90 text-sm font-medium">
            09:00 – 14:00 | Yetkazish: 12:30 – 13:30
          </span>
        </div>

        <p
          className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          Har kuni o'zgaruvchan taomnoma, tez va sifatli yetkazib berish
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.55s" }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform shadow-lg shadow-primary/30"
          >
            <CalendarCheck size={20} />
            Buyurtma berish
          </a>
          <a
            href="https://t.me/vooyobed"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 glass text-primary-foreground px-8 py-4 rounded-full text-lg font-medium hover:scale-105 transition-transform"
          >
            <Send size={20} />
            Telegram orqali yozish
          </a>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 rounded-full bg-primary-foreground/60 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
