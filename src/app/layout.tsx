import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "X3 Padel Club — Pasión · Competición · Excelencia",
  description:
    "X3 Padel Club - Equipo de pádel competitivo. Pasión, competición y excelencia en cada partido.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
