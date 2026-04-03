import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { useInView } from "./useInView";

const faqs = [
  {
    q: "Buyurtmani qanday berish mumkin?",
    a: "Telefon orqali (+998 33 316 13 13) qo'ng'iroq qiling yoki Telegram (@vooyobed) orqali yozing. Biz tezda javob beramiz!",
  },
  {
    q: "Yetkazib berish qaysi hududlarga amalga oshiriladi?",
    a: "Hozirda Toshkent shahri bo'ylab yetkazib berish xizmatini ko'rsatamiz. Yangi hududlar qo'shilmoqda.",
  },
  {
    q: "Minimal buyurtma summasi qancha?",
    a: "Minimal buyurtma summasi 40 000 so'm. Har bir set tarkibida taom, non, salat va suv bor.",
  },
  {
    q: "Yetkazib berish bepulmi?",
    a: "Ha! 40 000 so'mdan yuqori buyurtmalarga yetkazib berish mutlaqo bepul.",
  },
  {
    q: "Menyu har kuni o'zgaradimi?",
    a: "Ha, har kuni yangi taomnoma tayyorlanadi. Bugungi menyuni Telegram kanalimizda ko'rishingiz mumkin.",
  },
  {
    q: "To'lov qanday usulda amalga oshiriladi?",
    a: "Naqd pul, Click, Payme va bank kartasi orqali to'lash mumkin.",
  },
];

const FAQSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="faq" className="section-padding bg-secondary/50" ref={ref}>
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm mb-2">
            <HelpCircle size={16} />
            FAQ
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Tez-tez so'raladigan savollar
          </h2>
          <p className="text-muted-foreground text-lg">
            Savollaringiz bormi? Bizda javoblar bor.
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className={`${isInView ? "animate-fade-up" : "opacity-0"}`}
        >
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border/50">
              <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div
          className={`text-center mt-12 ${isInView ? "animate-fade-up" : "opacity-0"}`}
          style={{ animationDelay: "0.3s" }}
        >
          <p className="text-muted-foreground mb-4">
            Hali ham savollaringiz bormi? Biz yordam berishga tayyormiz.
          </p>
          <a
            href="#contact"
            className="inline-flex bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-bold hover:scale-105 transition-transform"
          >
            Qo'llab-quvvatlash bilan bog'lanish
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
