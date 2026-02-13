const players = [
  { name: "Carlos Ruiz", position: "Drive", wins: 48, ranking: "#3" },
  { name: "Miguel Torres", position: "Revés", wins: 52, ranking: "#1" },
  { name: "Andrés López", position: "Drive", wins: 35, ranking: "#7" },
  { name: "David Martín", position: "Revés", wins: 41, ranking: "#5" },
  { name: "Javier Sánchez", position: "Drive", wins: 39, ranking: "#6" },
  { name: "Pablo Fernández", position: "Revés", wins: 45, ranking: "#4" },
];

export default function Team() {
  return (
    <section className="team" id="team">
      <div className="top-line" />
      <div className="container">
        <div className="section-header fade-in">
          <p className="subtitle">Nuestros Jugadores</p>
          <h2>
            EL <span>ROSTER</span>
          </h2>
        </div>
        <div className="players-grid">
          {players.map((player, i) => {
            const initials = player.name
              .split(" ")
              .map((n) => n[0])
              .join("");
            return (
              <div
                key={player.name}
                className="player-card fade-in"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="avatar-area">
                  <div className="initials">{initials}</div>
                  <div className="ranking">
                    <span>{player.ranking}</span>
                  </div>
                </div>
                <div className="info">
                  <h3>{player.name}</h3>
                  <p className="position">{player.position}</p>
                  <div className="wins-row">
                    <div>
                      <p className="wins-label">Victorias</p>
                      <p className="wins-value">{player.wins}</p>
                    </div>
                    <div className="wins-bar" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
