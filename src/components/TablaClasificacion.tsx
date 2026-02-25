"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

interface ClasificacionRow {
  id: number;
  player_id: number;
  player: { name: string; team: string };
  points: number;
  sets_f: number;
  sets_a: number;
  games_f: number;
  games_a: number;
}

export default function TablaClasificacion() {
  const [rows, setRows] = useState<ClasificacionRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
        .from("liga_interna_table")
        .select(
          "id, player_id, points, sets_f, sets_a, games_f, games_a, player:players!player_id(name, team)",
        )
        .order("points", { ascending: false })
        .order("sets_f", { ascending: false })
        //.order("sets_a", { ascending: true })
        .order("games_f", { ascending: false });
      //.order("games_a", { ascending: true });

      if (error) {
        setError(error.message);
      } else {
        setRows(data as unknown as ClasificacionRow[]);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) return <p className="tabla-estado">Cargando clasificación...</p>;
  if (error) return <p className="tabla-estado tabla-error">Error: {error}</p>;
  if (rows.length === 0)
    return <p className="tabla-estado">No hay datos disponibles.</p>;

  return (
    <table className="tabla-inscripcion tabla-clasificacion">
      <thead>
        <tr>
          <th className="col-numero">Pos</th>
          <th>Jugador</th>
          <th className="col-stat">Pts</th>
          <th className="col-stat">SF</th>
          <th className="col-stat">SA</th>
          <th className="col-stat">GF</th>
          <th className="col-stat">GA</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={row.id} className={index < 2 ? "row-lider" : ""}>
            <td className="col-numero">{index + 1}</td>
            <td>{`${row.player.name} (${row.player.team})`}</td>
            <td className="col-stat col-pts">{row.points}</td>
            <td className="col-stat">{row.sets_f}</td>
            <td className="col-stat">{row.sets_a}</td>
            <td className="col-stat">{row.games_f}</td>
            <td className="col-stat">{row.games_a}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
