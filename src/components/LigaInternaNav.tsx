"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function LigaInternaNav() {
  const [active, setActive] = useState("inscripcion");

  return (
    <div className="liga-interna-nav">
      <div className="inline-flex my-5">
        <button className="bg-sky-800 hover:bg-sky-900 text-white font-bold py-2 px-4 rounded-l">
          <Link href="/liga-interna">Clasificación</Link>
        </button>
        <button className="bg-sky-800 hover:bg-sky-900 text-white font-bold py-2 px-4">
          <Link href="/liga-interna/inscritos">Inscripción</Link>
        </button>
        <button className="bg-sky-800 hover:bg-sky-900 text-white font-bold py-2 px-4 rounded-r">
          <Link href="/liga-interna/partidos">Partidos</Link>
        </button>
      </div>
    </div>
  );
}
