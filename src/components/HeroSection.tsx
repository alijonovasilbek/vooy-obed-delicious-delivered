import { useState, useEffect } from "react";
import { CalendarCheck, Send } from "lucide-react";
import heroBg1 from "@/assets/hero-bg.webp";
import heroBg2 from "@/assets/hero-bg-2.webp";
import heroBg3 from "@/assets/hero-bg-3.webp";
import heroBg1Mobile from "@/assets/hero-bg-mobile.webp";
import heroBg2Mobile from "@/assets/hero-bg-2-mobile.webp";
import heroBg3Mobile from "@/assets/hero-bg-3-mobile.webp";

const images = [
  { desktop: heroBg1, mobile: heroBg1Mobile },
  { desktop: heroBg2, mobile: heroBg2Mobile },
  { desktop: heroBg3, mobile: heroBg3Mobile },
];

// Preload first hero image for LCP
const preloadLink = document.createElement("link");
preloadLink.rel = "preload";
preloadLink.as = "image";
preloadLink.type = "image/webp";
preloadLink.href = heroBg1Mobile; // mobile first
document.head.appendChild(preloadLink);

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
                src={src.desktop}
                srcSet={`${src.mobile} 768w, ${src.desktop} 1920w`}
                sizes="100vw"
                alt="Uzbek cuisine"
                width={1920}
                height={1080}
                className="w-full h-full object-cover"
                loading={i === 0 ? "eager" : "lazy"}
                fetchPriority={i === 0 ? "high" : "low"}
                decoding={i === 0 ? "sync" : "async"}
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
          <img src="/logo.png" alt="Vooy Obed" className="w-7 h-7 rounded-full object-cover" />
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
            Buyurtma qabul qilish 9:00 - 11:30 &nbsp;|&nbsp; Yetkazish: 12:30 - 13:30
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
