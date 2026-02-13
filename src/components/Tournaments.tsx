const tournaments = [
  {
    name: "Padel x3 Femenino",
    date: "Por determinar",
    location: "Por determinar",
    status: "Próximamente",
    color: "yellow",
  },
  {
    name: "Padel x3 Masculino",
    date: "Por determinar",
    location: "Por determinar",
    status: "Próximamente",
    color: "yellow",
  },
  {
    name: "Padel x3 Masculino B",
    date: "Por determinar",
    location: "Por determinar",
    status: "Próximamente",
    color: "yellow",
  },
  // {
  //   name: "Torneo de Verano",
  //   date: "20 Jun 2026",
  //   location: "Sevilla",
  //   status: "Próximamente",
  //   color: "yellow",
  // },
];

export default function Tournaments() {
  return (
    <section className="tournaments" id="tournaments">
      <div className="container">
        <div className="section-header dark fade-in">
          <p className="subtitle">Copa Canaria por Equipos 2026</p>
          <h2 style={{ color: "var(--fg)" }}>
            CALENDARIO <span>PRÓXIMO ENCUENTRO</span>
          </h2>
        </div>
        <div className="list">
          {tournaments.map((t, i) => (
            <div
              key={t.name}
              className="tournament-card fade-in"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div style={{ flex: 1 }}>
                <h3>{t.name}</h3>
                <div className="meta">
                  <span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>{" "}
                    {t.date}
                  </span>
                  <span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>{" "}
                    {t.location}
                  </span>
                </div>
              </div>
              <div className="status-badge">
                <div className={`status-dot ${t.color}`} />
                <span className="status-text">{t.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
