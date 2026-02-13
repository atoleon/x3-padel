export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="accent-bg" />
      <div className="gradient-bottom" />
      <div className="lines">
        <div className="l1" />
        <div className="l2" />
        <div className="l3" />
        <div className="l4" />
      </div>
      <div className="content">
        <img
          src="/assets/logo_x3.png"
          alt="X3 Padel Club"
          className="hero-logo"
        />
        <h1>
          X3 PADEL <span>CLUB</span>
        </h1>
        <div className="divider" />
        <p className="tagline">Pasión · Competición · Gosadera</p>
        <a href="#contact" className="cta">
          <span>Únete al equipo</span>
        </a>
      </div>
      <div className="scroll-indicator">
        <div className="dot" />
      </div>
    </section>
  );
}
