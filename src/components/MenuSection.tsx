import { useInView } from "./useInView";

import foodPlov from "@/assets/food-plov.jpg";
import foodChicken from "@/assets/food-chicken.jpg";
import foodGolubtsi from "@/assets/food-golubtsi.jpg";
import foodLagman from "@/assets/food-lagman.jpg";
import foodShashlik from "@/assets/food-shashlik.jpg";
import foodManti from "@/assets/food-manti.jpg";
import foodSomsa from "@/assets/food-somsa.jpg";
import foodKabob from "@/assets/food-kabob.jpg";

const menuItems = [
  { name: "Osh (Palov)", price: "40 000", img: foodPlov, tags: ["Taom", "Non", "Salat", "Suv"] },
  { name: "Tovuq gril", price: "40 000", img: foodChicken, tags: ["Taom", "Non", "Salat", "Suv"] },
  { name: "Golubtsi", price: "40 000", img: foodGolubtsi, tags: ["Taom", "Non", "Salat", "Suv"] },
  { name: "Lag'mon", price: "40 000", img: foodLagman, tags: ["Taom", "Non", "Salat", "Suv"] },
  { name: "Shashlik", price: "45 000", img: foodShashlik, tags: ["Taom", "Non", "Salat", "Suv"] },
  { name: "Manti", price: "40 000", img: foodManti, tags: ["Taom", "Non", "Salat", "Suv"] },
  { name: "Somsa", price: "25 000", img: foodSomsa, tags: ["Taom", "Non", "Salat", "Suv"] },
  { name: "Qozon kabob", price: "45 000", img: foodKabob, tags: ["Taom", "Non", "Salat", "Suv"] },
];

const MenuSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="menu" className="section-padding bg-secondary/50" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Bugungi <span className="text-primary">menyu</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Har bir taom — sevgi bilan tayyorlangan
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
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
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-base">{item.name}</h3>
                  <span className="text-primary font-bold text-sm whitespace-nowrap">
                    {item.price} so'm
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-secondary text-muted-foreground font-medium"
                    >
                      {tag}
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
