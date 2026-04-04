import { Phone, Send, Instagram } from "lucide-react";
import { useInView } from "./useInView";

const ContactSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="container mx-auto px-4 text-center">
        <h2
          className={`text-3xl md:text-5xl font-bold mb-4 ${isInView ? "animate-fade-up" : "opacity-0"}`}
        >
          Buyurtma <span className="text-primary">bering</span>
        </h2>
        <p
          className={`text-muted-foreground text-lg mb-12 max-w-lg mx-auto ${
            isInView ? "animate-fade-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.1s" }}
        >
          Qo'ng'iroq qiling yoki Telegram orqali yozing — tez javob beramiz!
        </p>

        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-5 ${
            isInView ? "animate-fade-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.2s" }}
        >
          <a
            href="tel:+998333161313"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-2xl text-lg font-bold hover:scale-105 transition-transform shadow-lg shadow-primary/25 w-full sm:w-auto justify-center"
          >
            <Phone size={22} />
            +998 33 316 13 13
          </a>

          <a
            href="https://t.me/vooyobed"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-2xl text-lg font-bold hover:scale-105 transition-transform shadow-lg w-full sm:w-auto justify-center"
          >
            <Send size={22} />
            Telegram
          </a>

          <a
            href="https://instagram.com/vooyobed"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 glass-strong px-8 py-4 rounded-2xl text-lg font-bold hover:scale-105 transition-transform w-full sm:w-auto justify-center"
          >
            <Instagram size={22} />
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
