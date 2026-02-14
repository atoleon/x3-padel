"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

interface Registration {
  id: number;
  player_a: string;
  player_b: string;
  created_at: string;
}

export default function TablaInscripciones() {
  const [inscripciones, setInscripciones] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
        .from("registrations")
        .select("*")
        .order("created_at", { ascending: true });

      if (error) {
        setError(error.message);
      } else {
        setInscripciones(data ?? []);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <p style={{ color: "rgba(255,255,255,0.6)", textAlign: "center" }}>
        Cargando inscripciones...
      </p>
    );
  }

  if (error) {
    return (
      <p style={{ color: "var(--red)", textAlign: "center" }}>
        Error al cargar las inscripciones: {error}
      </p>
    );
  }

  return (
    <table className="tabla-inscripcion">
      <thead>
        <tr>
          <th className="col-numero">#</th>
          <th>Jugador A</th>
          <th>Jugador B</th>
        </tr>
      </thead>
      <tbody>
        {inscripciones.length > 0 ? (
          inscripciones.map((pareja, i) => (
            <tr key={pareja.id ?? i}>
              <td className="col-numero">{i + 1}</td>
              <td>{pareja.player_a}</td>
              <td>{pareja.player_b}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3} style={{ textAlign: "center" }}>
              Pendiente
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
