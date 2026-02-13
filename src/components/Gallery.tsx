const galleryItems = [
  { label: "Entrenamiento", classes: "span-2-col span-2-row" },
  { label: "Torneo Regional", classes: "" },
  { label: "Celebración", classes: "" },
  { label: "Equipo Completo", classes: "span-2-col" },
  { label: "Partido Final", classes: "" },
  { label: "Preparación", classes: "" },
];

export default function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="section-header fade-in">
          <p className="subtitle">Momentos</p>
          <h2>
            GALERÍA <span>FOTOGRÁFICA</span>
          </h2>
        </div>
        <div className="grid">
          {galleryItems.map((item, i) => (
            <div
              key={item.label}
              className={`gallery-item fade-in ${item.classes}`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="placeholder">Foto</div>
              <div className="overlay">
                <span>{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
