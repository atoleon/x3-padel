"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import MatchInfoCard, { type MatchData } from "@/components/MatchInfoCard";

export default function PartidosPage() {
  const [matches, setMatches] = useState<MatchData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
        .from("matches")
        .select(
          "id, date, time, court, result, team1:registrations!partner_1(id, player_a, player_b), team2:registrations!partner_2(id, player_a, player_b)"
        )
        .order("time", { ascending: true });

      if (error) {
        setError(error.message);
      } else {
        setMatches(data as unknown as MatchData[]);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <p style={{ color: "rgba(255,255,255,0.6)", textAlign: "center" }}>
        Cargando partidos...
      </p>
    );
  }

  if (error) {
    return (
      <p style={{ color: "var(--red)", textAlign: "center" }}>
        Error al cargar los partidos: {error}
      </p>
    );
  }

  if (matches.length === 0) {
    return (
      <p style={{ color: "rgba(255,255,255,0.6)", textAlign: "center" }}>
        No hay partidos disponibles.
      </p>
    );
  }

  const grouped = new Map<string, MatchData[]>();
  for (const match of matches) {
    const key = match.time;
    if (!grouped.has(key)) grouped.set(key, []);
    grouped.get(key)!.push(match);
  }

  return (
    <div className="partidos-wrapper">
      {Array.from(grouped.entries()).map(([time, timeMatches]) => (
        <div key={time} className="turno-block">
          <div className="turno-header">
            <span className="turno-hora">{time}</span>
          </div>
          <div className="partidos-grid">
            {timeMatches.map((match) => (
              <MatchInfoCard key={match.id} match={match} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
