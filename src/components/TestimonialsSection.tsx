import { Star } from "lucide-react";
import { useInView } from "./useInView";

const testimonials = [
  {
    name: "Aziz Karimov",
    role: "Doimiy mijoz",
    text: "Har kuni tushlikka Vooy Obed buyurtma beraman. Taomlar doim issiq va mazali. Yetkazish vaqtida keladi!",
    stars: 5,
  },
  {
    name: "Nilufar Rahimova",
    role: "Ofis menejeri",
    text: "Butun ofisimiz uchun buyurtma beramiz. Xodimlarimiz juda mamnun. Narxi ham qulay!",
    stars: 5,
  },
  {
    name: "Sardor Toshmatov",
    role: "IT mutaxassis",
    text: "Telegram orqali buyurtma berish juda qulay. Menyu har kuni yangilanadi — zerikish yo'q!",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="section-padding bg-secondary/50" ref={ref}>
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`glass-strong rounded-2xl p-8 hover-lift ${
                isInView ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/80 mb-6 leading-relaxed text-sm">"{t.text}"</p>
              <div>
                <p className="font-bold text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
