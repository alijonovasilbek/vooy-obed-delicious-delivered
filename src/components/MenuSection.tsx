import { useInView } from "./useInView";
import { Utensils, Sandwich, Salad, Droplets, CalendarX } from "lucide-react";

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
    <section id="menu" className="section-padding bg-secondary/50 relative overflow-hidden" ref={ref}>
      {/* Watermark */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {Array.from({ length: 5 }).map((_, row) => (
          <div key={row} className="flex">
            {Array.from({ length: 4 }).map((_, col) => (
              <span
                key={col}
                className="text-primary/[0.04] font-black uppercase whitespace-nowrap"
                style={{
                  fontSize: "clamp(32px, 5vw, 56px)",
                  letterSpacing: "0.05em",
                  padding: "20px 28px",
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
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Bugungi <span className="text-primary">menyu</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Har bir taom — sevgi bilan tayyorlangan
          </p>
        </div>

        {/* Menu grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto mb-12">
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
              <div className="p-3">
                <h3 className="font-bold text-sm mb-1 leading-tight">{item.name}</h3>
                <div className="grid grid-cols-2 gap-1 mb-2">
                  {bonusTags.map(({ label, icon: Icon }) => (
                    <span
                      key={label}
                      className="inline-flex items-center gap-1 text-xs px-1.5 py-0.5 rounded-full bg-secondary text-muted-foreground font-medium"
                    >
                      <Icon size={9} />
                      {label}
                    </span>
                  ))}
                </div>
                <div className="text-primary font-black text-sm">{item.price} so'm</div>
              </div>
            </div>
          ))}
        </div>

        {/* Info strip — styled like section content, not floating banners */}
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Bonus info */}
          <div className={`flex items-start gap-4 bg-background rounded-2xl p-5 border border-border shadow-sm ${isInView ? "animate-fade-left" : "opacity-0"}`} style={{ animationDelay: "0.3s" }}>
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Utensils size={18} className="text-primary" />
            </div>
            <div>
              <p className="font-bold text-sm mb-1.5">Har bir setga bonus</p>
              <div className="flex flex-wrap gap-1.5">
                {bonusTags.map(({ label, icon: Icon }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-semibold"
                  >
                    <Icon size={10} />
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sunday notice */}
          <div className={`flex items-start gap-4 bg-background rounded-2xl p-5 border border-border shadow-sm ${isInView ? "animate-fade-right" : "opacity-0"}`} style={{ animationDelay: "0.45s" }}>
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
              <CalendarX size={18} className="text-amber-600" />
            </div>
            <div>
              <p className="font-bold text-sm mb-1">Yakshanba — tozalik kuni 🧹</p>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Har yakshanba dam olamiz. Bu kunda zakazlar qabul qilinmaydi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
