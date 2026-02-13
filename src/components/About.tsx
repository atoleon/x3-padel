export default function About() {
  return (
    <section className="about" id="about">
      <div className="red-bar" />
      <div className="container">
        <div className="grid">
          <div className="fade-in-left">
            <p className="subtitle">Quiénes Somos</p>
            <h2>
              Más que un <span>club</span>
            </h2>
            <p className="desc">
              X3 Pádel es un equipo con mentalidad ganadora, espíritu
              competitivo y una fuerte cultura de trabajo. Nos exigimos en cada
              entrenamiento y en cada partido, cuidamos la estrategia, la
              preparación física y la cohesión dentro de la pista. Competimos
              con intensidad, respeto y ambición, siempre buscando superarnos y
              representar nuestros colores con orgullo.
            </p>
            <p className="desc">
              Pero X3 es mucho más que competición. Creemos que el verdadero
              espíritu del pádel también se vive fuera de la pista: compartiendo
              risas, celebrando cada logro y fortaleciendo la amistad que nos
              une como equipo. Disfrutamos del deporte, del compañerismo y de
              cada momento juntos, porque para nosotros ganar es importante,
              pero disfrutar el camino lo es aún más.
            </p>
          </div>
          <div className="stats-grid fade-in-right">
            <div className="stat-card">
              <div className="top-bar" />
              <svg
                className="stat-icon"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <p className="stat-value">4+</p>
              <p className="stat-label">Años Activos</p>
            </div>
            <div className="stat-card">
              <div className="top-bar" />
              <svg
                className="stat-icon"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <p className="stat-value">70+</p>
              <p className="stat-label">Miembros</p>
            </div>
            <div className="stat-card">
              <div className="top-bar" />
              <svg
                className="stat-icon"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5C7 4 6 9 6 9Z" />
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5C17 4 18 9 18 9Z" />
                <path d="M4 22h16" />
                <path d="M10 22V8l-4 1" />
                <path d="M14 22V8l4 1" />
                <path d="M8 6h8" />
                <path d="M12 6V2" />
              </svg>
              <p className="stat-value">3</p>
              <p className="stat-label">Categorías Distintas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
