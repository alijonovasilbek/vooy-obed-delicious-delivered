import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useInView } from "./useInView";
import { useState, useEffect, useCallback, useRef } from "react";

const testimonials = [
  {
    name: "Aziz Karimov",
    role: "Doimiy mijoz",
    text: "Har kuni tushlikka Vooy Obed buyurtma beraman. Taomlar doim issiq va mazali. Yetkazish vaqtida keladi!",
    stars: 5,
    avatar: "https://i.pravatar.cc/80?img=11",
  },
  {
    name: "Nilufar Rahimova",
    role: "Ofis menejeri",
    text: "Butun ofisimiz uchun buyurtma beramiz. Xodimlarimiz juda mamnun. Narxi ham qulay!",
    stars: 5,
    avatar: "https://i.pravatar.cc/80?img=5",
  },
  {
    name: "Sardor Toshmatov",
    role: "IT mutaxassis",
    text: "Telegram orqali buyurtma berish juda qulay. Menyu har kuni yangilanadi — zerikish yo'q!",
    stars: 5,
    avatar: "https://i.pravatar.cc/80?img=12",
  },
  {
    name: "Dilnoza Umarova",
    role: "Marketolog",
    text: "Sifati va narxi mos keladi. Har doim toza va chiroyli qadoqda keladi. Tavsiya qilaman!",
    stars: 5,
    avatar: "https://i.pravatar.cc/80?img=9",
  },
  {
    name: "Jamshid Aliyev",
    role: "Tadbirkor",
    text: "Biznes tushlik uchun eng yaxshi tanlov. Hamkasblarim bilan har kuni buyurtma beramiz.",
    stars: 5,
    avatar: "https://i.pravatar.cc/80?img=33",
  },
  {
    name: "Madina Yusupova",
    role: "Shifokor",
    text: "Vaqtim kam, lekin Vooy Obed tufayli har kuni mazali ovqat yeyman. Rahmat jamoaga!",
    stars: 5,
    avatar: "https://i.pravatar.cc/80?img=25",
  },
  {
    name: "Bekzod Nazarov",
    role: "Talaba",
    text: "Narxi talabalar uchun juda qulay. Porsiyalari katta va mazali. Eng yaxshi xizmat!",
    stars: 5,
    avatar: "https://i.pravatar.cc/80?img=57",
  },
  {
    name: "Shaxlo Mirzo",
    role: "Dizayner",
    text: "Har kuni yangi menyu — bu juda zo'r! Sifat doim yuqori darajada.",
    stars: 4,
    avatar: "https://i.pravatar.cc/80?img=44",
  },
];

const TestimonialsSection = () => {
  const { ref, isInView } = useInView();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const trackRef = useRef<HTMLDivElement>(null);

  const visibleCount = typeof window !== "undefined" && window.innerWidth >= 768 ? 3 : 1;

  // We duplicate items for seamless infinite scroll
  const extendedItems = [...testimonials, ...testimonials.slice(0, visibleCount)];
  const totalReal = testimonials.length;

  const next = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const prev = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  }, []);

  // When we reach the cloned end, snap back without animation
  useEffect(() => {
    if (currentIndex >= totalReal) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 500);
      return () => clearTimeout(timeout);
    }
    if (currentIndex < 0) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(totalReal - 1);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, totalReal]);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  const realIndex = ((currentIndex % totalReal) + totalReal) % totalReal;

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Fikrlar</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4">
            Mijozlarimiz <span className="text-primary">nima deydi</span>?
          </h2>
          <p className="text-muted-foreground text-lg">
            Minglab mamnun mijozlar — bizning eng katta yutuqimiz
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <button
            onClick={prev}
            className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          >
            <ChevronRight size={20} />
          </button>

          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className={`flex ${isTransitioning ? "transition-transform duration-500 ease-in-out" : ""}`}
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
              }}
            >
              {extendedItems.map((t, i) => (
                <div
                  key={`${t.name}-${i}`}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  <div
                    className={`bg-background border border-border rounded-2xl p-8 h-full shadow-sm ${
                      isInView ? "animate-fade-up" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${(i % visibleCount) * 0.08}s` }}
                  >
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: t.stars }).map((_, j) => (
                        <Star key={j} size={16} className="fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-foreground/80 mb-6 leading-relaxed text-sm">"{t.text}"</p>
                    <div className="flex items-center gap-3">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-10 h-10 rounded-full object-cover border-2 border-primary/20"
                        loading="lazy"
                        width={40}
                        height={40}
                      />
                      <div>
                        <p className="font-bold text-sm">{t.name}</p>
                        <p className="text-muted-foreground text-xs">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalReal }).map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setIsTransitioning(true);
                  setCurrentIndex(i);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === realIndex ? "bg-primary w-6" : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
