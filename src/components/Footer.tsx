const Footer = () => (
  <footer className="py-12 bg-foreground text-background">
    <div className="container mx-auto px-4 text-center">
      <div className="flex items-center justify-center gap-2 mb-4">
        <span className="text-2xl">🍛</span>
        <span className="text-xl font-bold">
          <span className="text-primary">Vooy</span> Obed
        </span>
      </div>
      <p className="text-background/60 text-sm max-w-md mx-auto mb-4">
        Vooy Obed — tez, mazali va ishonchli ovqat yetkazib berish xizmati
      </p>
      <p className="text-background/30 text-xs">
        © 2026 Vooy Obed. Barcha huquqlar himoyalangan.
      </p>
    </div>
  </footer>
);

export default Footer;
