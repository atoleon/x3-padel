"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Inicio", href: "#hero" },
  { label: "Sobre Nosotros", href: "#about" },
  { label: "Equipo", href: "#team" },
  { label: "Torneos", href: "#tournaments" },
  { label: "Galería", href: "#gallery" },
  { label: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="container inner">
        <Link href="#hero" onClick={(e) => handleNavClick(e, "#hero")}>
          <Image
            src="/assets/logo_x3.png"
            alt="X3 Padel Club"
            width={48}
            height={48}
            className="logo-img"
          />
        </Link>
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={(e) => handleNavClick(e, item.href)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => handleNavClick(e, item.href)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
