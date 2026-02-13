import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inscripciones = [
  { jugadorA: "Carlos García", jugadorB: "Miguel Torres" },
  { jugadorA: "David López", jugadorB: "Andrés Martín" },
  { jugadorA: "Pablo Ruiz", jugadorB: "Javier Sánchez" },
  { jugadorA: "Alberto Díaz", jugadorB: "Fernando Moreno" },
  { jugadorA: "Sergio Navarro", jugadorB: "Raúl Jiménez" },
  { jugadorA: "Luis Romero", jugadorB: "Óscar Herrera" },
];

export default function LigaInternaInscripcion() {
  return (
    <>
      <Navbar />
      <section className="liga-inscripcion">
        <div className="accent-bg" />
        <div className="lines">
          <div className="l1" />
          <div className="l2" />
          <div className="l3" />
          <div className="l4" />
        </div>

        <div className="container liga-inscripcion-content">
          <div className="section-header">
            <p className="subtitle">Temporada 2026</p>
            <h1>
              LIGA INTERNA <span>X3</span>
            </h1>
            <div className="divider" />
            <h2 className="liga-sub">
              Inscripción Jornada 1 - 20 Febrero 2026
            </h2>
          </div>

          <div className="tabla-wrapper">
            <table className="tabla-inscripcion">
              <thead>
                <tr>
                  <th className="col-numero">#</th>
                  <th>Jugador A</th>
                  <th>Jugador B</th>
                </tr>
              </thead>
              <tbody>
                {inscripciones.map((pareja, i) => (
                  <tr key={i}>
                    <td className="col-numero">{i + 1}</td>
                    <td>{pareja.jugadorA}</td>
                    <td>{pareja.jugadorB}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
