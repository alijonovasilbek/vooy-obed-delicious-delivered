const GlobalWatermark = () => (
  <div
    className="fixed pointer-events-none select-none z-0"
    style={{
      top: "-50%",
      left: "-50%",
      right: "-50%",
      bottom: "-50%",
      display: "grid",
      gridTemplateColumns: "repeat(8, 1fr)",
      gridTemplateRows: "repeat(16, 1fr)",
      transform: "rotate(-20deg)",
      transformOrigin: "center",
      opacity: 0.045,
    }}
  >
    {Array.from({ length: 128 }).map((_, i) => (
      <span
        key={i}
        className="font-black uppercase text-foreground flex items-center justify-center whitespace-nowrap"
        style={{ fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "0.06em" }}
      >
        VOOYOBED
      </span>
    ))}
  </div>
);

export default GlobalWatermark;
