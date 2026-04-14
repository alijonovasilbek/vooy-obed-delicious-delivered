import { useInView } from "./useInView";

const SloganSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="py-20 overflow-hidden relative bg-primary" ref={ref}>
      <div className="container mx-auto px-4 text-center">
        <div
          className={`${isInView ? "animate-fade-up" : "opacity-0"}`}
        >
          <p className="text-primary-foreground/70 text-sm font-semibold uppercase tracking-[0.25em] mb-4">
            Vooy Obed bilan
          </p>
          <h2
            className="font-black text-primary-foreground leading-tight"
            style={{
              fontSize: "clamp(2.2rem, 7vw, 5rem)",
              letterSpacing: "-0.02em",
              textShadow: "0 2px 24px rgba(0,0,0,0.18)",
            }}
          >
            Yaxshi Amal Uchun{" "}
            <span
              style={{
                display: "inline-block",
                background: "rgba(255,255,255,0.18)",
                borderRadius: "0.3em",
                padding: "0 0.18em",
                boxDecorationBreak: "clone",
              }}
            >
              Taomlaning
            </span>{" "}
            <span style={{ fontSize: "0.85em" }}>😊</span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default SloganSection;
