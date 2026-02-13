const galleryItems = [
  {
    label: "Americano",
    classes: "span-2-col span-2-row",
    img: "/fotos_x3/americano.jpeg",
  },
  {
    label: "Equipo Masculino A",
    classes: "span-2-col",
    img: "/fotos_x3/masculino A.jpeg",
  },
  { label: "Diego & Mingo", classes: "", img: "/fotos_x3/diego-mingo.jpg" },
  { label: "Caricatura", classes: "", img: "/fotos_x3/caricatura.jpeg" },
  {
    label: "Gosadera",
    classes: "span-2-col span-2-row",
    img: "/fotos_x3/gosadera.jpeg",
  },
  {
    label: "Equipo Femenino",
    classes: "span-2-col",
    img: "/fotos_x3/femenino.jpeg",
  },
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
              <img
                src={item.img}
                alt={item.label}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
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
