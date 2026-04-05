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
      {/* Watermark */}
      <div className="absolute inset-0 z-[4] pointer-events-none overflow-hidden select-none">
        {Array.from({ length: 6 }).map((_, row) => (
          <div key={row} className="flex" style={{ marginTop: row === 0 ? "5%" : 0 }}>
            {Array.from({ length: 4 }).map((_, col) => (
              <span
                key={col}
                className="text-white/[0.07] font-black uppercase whitespace-nowrap"
                style={{
                  fontSize: "clamp(28px, 5vw, 52px)",
                  letterSpacing: "0.05em",
                  padding: "18px 24px",
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
        {/* Hide badge on mobile */}
        <div className="hidden md:inline-flex glass-dark items-center gap-2 px-4 py-2 rounded-full mb-8 animate-fade-up">
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
          className="glass-dark inline-flex items-center gap-2 px-4 py-2.5 rounded-full mb-6 animate-fade-up whitespace-nowrap"
          style={{ animationDelay: "0.3s" }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
          <span className="text-primary-foreground/90 text-xs md:text-sm font-medium">
            09:00 – 14:00 &nbsp;|&nbsp; Yetkazish: 12:30 – 13:30
          </span>
        </div>

        <p
          className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          Har kuni o'zgaruvchan taomnoma, tez va sifatli yetkazib berish
        </p>

        <div
          className="flex flex-row items-center justify-center gap-3 animate-fade-up"
          style={{ animationDelay: "0.55s" }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-full text-sm font-bold hover:scale-105 transition-transform shadow-lg shadow-primary/30"
          >
            <CalendarCheck size={16} />
            Buyurtma berish
          </a>
          <a
            href="https://t.me/vooyobedadmin"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 glass text-primary-foreground px-5 py-3 rounded-full text-sm font-medium hover:scale-105 transition-transform"
          >
            <Send size={16} />
            Telegram
          </a>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
