import { useInView } from "./useInView";

const SloganSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="py-16 overflow-hidden relative bg-background border-y border-border/40" ref={ref}>
      {/* Watermark */}
      <div className="absolute pointer-events-none select-none overflow-hidden" style={{inset:0, width:"150%", left:"-25%"}}>
        {Array.from({ length: 8 }).map((_, row) => (
          <div key={row} className="flex">
            {Array.from({ length: 10 }).map((_, col) => (
              <span
                key={col}
                className="text-foreground/[0.04] font-black uppercase whitespace-nowrap"
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

      <div className="container mx-auto px-4 text-center">
        <div className={`${isInView ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-muted-foreground text-xs font-medium uppercase tracking-[0.3em] mb-5">
            Vooy Obed bilan
          </p>
          <h2
            className="font-black text-foreground leading-none"
            style={{ fontSize: "clamp(1.8rem, 5vw, 3.5rem)", letterSpacing: "-0.03em" }}
          >
            Yaxshi Amal Uchun{" "}
            <span className="text-primary">Taomlaning</span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default SloganSection;
