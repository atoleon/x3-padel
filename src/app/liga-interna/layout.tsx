import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LigaInternaNav from "@/components/LigaInternaNav";

export default function LigaInternaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
              Inscripción Jornada 2 - 6 de Marzo 2026
            </h2>
            <LigaInternaNav />
          </div>
          {children}
        </div>
      </section>
      <Footer />
    </>
  );
}
