import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Afzalliklar", href: "#features" },
    { label: "Menyu", href: "#menu" },
    { label: "Buyurtma", href: "#contact" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong py-2 md:py-3 shadow-lg" : "glass-dark py-3 md:py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-8">
        <a href="#" className="flex items-center gap-2 text-xl font-bold">
          <img
            src="https://instagram.fbze2-1.fna.fbcdn.net/v/t51.2885-19/457288872_891453429685268_8633200824892464891_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.fbze2-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2AHSEMwJyBlKiGQRm5E6b7sJMCCqwvIoN9l4L-fRjEYRo2J6m3PMlPIzMEJjN6gXIELWWBxFPm4CyzmIFw5d_f8C&_nc_ohc=j2BwlLPFZdsQ7kNvgFKAFCo&_nc_gid=KarLwnlbSXFfZcS5t-B5MQ&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AYHqhWBjZKMF-sZJ-Tv-LFDlHaViNn32hS_PFBvneFOIKw&oe=6848A9A2&_nc_sid=8b3546"
            alt="Vooy Obed"
            className="w-8 h-8 rounded-full object-cover"
            onError={(e) => { (e.target as HTMLImageElement).style.display='none'; }}
          />
          <span className={scrolled ? "text-foreground" : "text-primary-foreground"}>
            <span className="text-primary">Vooy</span> Obed
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                scrolled ? "text-foreground" : "text-primary-foreground/90"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Buyurtma
          </a>
        </nav>

        <button
          className={`md:hidden ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden glass-strong mt-2 mx-4 rounded-2xl p-6 animate-scale-in">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-foreground font-medium hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block mt-4 bg-primary text-primary-foreground text-center px-5 py-3 rounded-full font-semibold"
          >
            Buyurtma
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
