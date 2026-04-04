import { useState, useEffect } from "react";
import { CalendarCheck, Send } from "lucide-react";
import heroBg1 from "@/assets/hero-bg.jpg";
import heroBg2 from "@/assets/hero-bg-2.jpg";
import heroBg3 from "@/assets/hero-bg-3.jpg";

const images = [heroBg1, heroBg2, heroBg3];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setPrev(current);
      setCurrent((p) => (p + 1) % images.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [current]);

  // Clear prev after transition completes
  useEffect(() => {
    if (prev === null) return;
    const t = setTimeout(() => setPrev(null), 3000);
    return () => clearTimeout(t);
  }, [prev]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background images with Ken Burns effect */}
      {images.map((src, i) => {
        const isActive = i === current;
        const isPrev = i === prev;
        const isVisible = isActive || isPrev;

        return (
          <div
            key={i}
            className="absolute inset-0"
            style={{
              opacity: isActive ? 1 : isPrev ? 0 : 0,
              transition: "opacity 3s ease-in-out",
              zIndex: isActive ? 2 : isPrev ? 1 : 0,
            }}
          >
            {isVisible && (
              <img
                src={src}
                alt="Uzbek cuisine"
                width={1920}
                height={1080}
                className="w-full h-full object-cover"
                style={{
                  animation: isActive ? "kenBurnsIn 11s ease-out forwards" : undefined,
                  transform: isPrev ? "scale(1.15)" : "scale(1)",
                }}
              />
            )}
          </div>
        );
      })}

      {/* Ken Burns keyframes */}
      <style>{`
        @keyframes kenBurnsIn {
          0% { transform: scale(1); }
          100% { transform: scale(1.15); }
        }
      `}</style>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-[3]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="glass-dark inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 animate-fade-up">
          <img src="/logo.svg" alt="Vooy Obed" className="w-6 h-6 rounded-full" />
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
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float z-10">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 rounded-full bg-primary-foreground/60 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
