import Image from "next/image";

const footerLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Sobre Nosotros", href: "#about" },
  { label: "Equipo", href: "#team" },
  { label: "Torneos", href: "#tournaments" },
  { label: "Galería", href: "#gallery" },
  { label: "Contacto", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="inner">
          <div className="brand">
            <Image src="/assets/logo_x3.png" alt="X3 Padel Club" width={40} height={40} />
            <span>X3 PADEL CLUB</span>
          </div>
          <div className="footer-links">
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <div className="footer-socials">
            <a href="#" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="copyright">
          &copy; 2026 X3 Padel Club. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
