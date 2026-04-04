import { useInView } from "./useInView";
import { Utensils, Sandwich, Salad, Droplets, Gift, CalendarX } from "lucide-react";

import foodPlov from "@/assets/food-plov.jpg";
import foodChicken from "@/assets/food-chicken.jpg";
import foodGolubtsi from "@/assets/food-golubtsi.jpg";
import foodLagman from "@/assets/food-lagman.jpg";
import foodShashlik from "@/assets/food-shashlik.jpg";
import foodManti from "@/assets/food-manti.jpg";
import foodSomsa from "@/assets/food-somsa.jpg";
import foodKabob from "@/assets/food-kabob.jpg";

const bonusTags = [
  { label: "Taom", icon: Utensils },
  { label: "Non", icon: Sandwich },
  { label: "Salat", icon: Salad },
  { label: "Suv", icon: Droplets },
];

const menuItems = [
  { name: "Osh (Palov)", price: "40 000", img: foodPlov },
  { name: "Tovuq gril", price: "40 000", img: foodChicken },
  { name: "Golubtsi", price: "40 000", img: foodGolubtsi },
  { name: "Lag'mon", price: "40 000", img: foodLagman },
  { name: "Shashlik", price: "40 000", img: foodShashlik },
  { name: "Manti", price: "40 000", img: foodManti },
  { name: "Somsa", price: "40 000", img: foodSomsa },
  { name: "Qozon kabob", price: "40 000", img: foodKabob },
];

const MenuSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="menu" className="section-padding bg-secondary/50" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Bugungi <span className="text-primary">menyu</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-6">
            Har bir taom — sevgi bilan tayyorlangan
          </p>

          {/* Bonus info */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 bg-primary/10 border border-primary/20 rounded-2xl px-5 py-3 mb-4">
            <Gift size={16} className="text-primary shrink-0" />
            <span className="text-sm font-semibold text-primary">Har bir setga bonus:</span>
            {bonusTags.map(({ label, icon: Icon }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-primary text-primary-foreground font-medium"
              >
                <Icon size={11} />
                {label}
              </span>
            ))}
          </div>

          {/* Sunday notice */}
          <div className="flex items-center justify-center gap-2 bg-amber-50 border border-amber-200 rounded-2xl px-5 py-3 max-w-md mx-auto">
            <CalendarX size={16} className="text-amber-600 shrink-0" />
            <span className="text-sm text-amber-700 font-medium">
              Har <strong>yakshanba</strong> — tozalik kuni 🧹 Zakazlar qabul qilinmaydi
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {menuItems.map((item, i) => (
            <div
              key={item.name}
              className={`glass-strong rounded-2xl overflow-hidden hover-lift group cursor-pointer ${
                isInView ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  loading="lazy"
                  width={640}
                  height={640}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-3 md:p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-sm md:text-base">{item.name}</h3>
                  <span className="text-primary font-bold text-xs md:text-sm whitespace-nowrap ml-1">
                    {item.price} so'm
                  </span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {bonusTags.map(({ label, icon: Icon }) => (
                    <span
                      key={label}
                      className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground font-medium"
                    >
                      <Icon size={10} />
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
