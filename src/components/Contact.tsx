"use client";

import { FormEvent } from "react";

export default function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("¡Mensaje enviado! Nos pondremos en contacto contigo pronto.");
    e.currentTarget.reset();
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header dark fade-in">
          <p className="subtitle">Contacto</p>
          <h2 style={{ color: "var(--fg)" }}>
            ÚNETE AL <span>EQUIPO</span>
          </h2>
        </div>
        <div className="grid">
          <form className="fade-in-left" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nombre</label>
              <input type="text" placeholder="Tu nombre" required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="tu@email.com" required />
            </div>
            <div className="form-group">
              <label>Mensaje</label>
              <textarea placeholder="¿En qué podemos ayudarte?" required />
            </div>
            <button type="submit" className="submit-btn">
              <span>Enviar Mensaje</span>
            </button>
          </form>
          <div className="fade-in-right">
            <div className="info-block" style={{ marginBottom: "2rem" }}>
              <h3>Información</h3>
              <div className="info-item">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                clubdepadelportres@gmail.com
              </div>
              <div className="info-item">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
                </svg>
                000 000 000
              </div>
              <div className="info-item">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Club de Padel Hípico del Sur
              </div>
            </div>
            <div className="info-block" style={{ marginBottom: "2rem" }}>
              <h3>Síguenos</h3>
              <div className="social-links">
                <a
                  href="https://www.instagram.com/clubdepadelx3"
                  className="social-link"
                  aria-label="Instagram"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="Facebook">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="map-placeholder">Mapa · Ubicación</div>
          </div>
        </div>
      </div>
    </section>
  );
}
