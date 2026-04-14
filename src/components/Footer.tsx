const Footer = () => (
  <footer className="py-10 bg-foreground text-background">
    <div className="container mx-auto px-4">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-2 text-xl font-bold shrink-0">
          <img
            src="/logo.png"
            alt="Vooy Obed"
            className="w-9 h-9 rounded-full object-cover"
          />
          <span>
            <span className="text-primary">Vooy</span> Obed
          </span>
        </a>
        <p className="text-background/50 text-sm text-center sm:text-left">
          Tez, mazali va ishonchli ovqat yetkazib berish
        </p>
        <p className="text-background/30 text-xs shrink-0">
          © 2026 Vooy Obed
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
