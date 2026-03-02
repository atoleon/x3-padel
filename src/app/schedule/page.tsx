"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/lib/supabase";
import s from "./style.module.css";

interface ScheduleMatch {
  id: number;
  matchweek: number;
  date: string;
  time: string;
  home_team: string;
  away_team: string;
}

const SEASON = "Temporada 2026";

export default function SchedulePage() {
  const [matches, setMatches] = useState<ScheduleMatch[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
        .from("schedule")
        .select("id, matchweek, date, time, home_team, away_team")
        .order("matchweek", { ascending: true })
        .order("date", { ascending: true });

      if (error) {
        setError(error.message);
      } else {
        setMatches(data as ScheduleMatch[]);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  const grouped = new Map<number, ScheduleMatch[]>();
  for (const match of matches) {
    if (!grouped.has(match.matchweek)) grouped.set(match.matchweek, []);
    grouped.get(match.matchweek)!.push(match);
  }

  return (
    <>
      <Navbar />
      <div className={s.page}>
        <div className={s.container}>
          <div className={s.pageHeader}>
            <p>{SEASON}</p>
            <h1>
              CALENDARIO <span>X3</span>
            </h1>
            <div className={s.divider} />
          </div>

          {loading && <p className={s.estado}>Cargando calendario...</p>}
          {error && <p className={`${s.estado} ${s.error}`}>Error: {error}</p>}
          {!loading && !error && matches.length === 0 && (
            <p className={s.estado}>No hay partidos disponibles.</p>
          )}

          {Array.from(grouped.entries()).map(([week, weekMatches]) => (
            <div key={week} className={s.jornada}>
              <div className={s.jornadaHeader}>
                <span className={s.jornadaBadge}>Jornada {week}</span>
                <span className={s.jornadaSeason}>{SEASON}</span>
                <span className={s.jornadaLine} />
              </div>
              <div className={s.matchList}>
                {weekMatches.map((match) => (
                  <div key={match.id} className={s.matchRow}>
                    <span className={s.matchDate}>{match.date}</span>
                    <span className={s.matchTime}>{match.time}</span>
                    <span className={`${s.matchTeam} ${s.matchTeamHome}`}>
                      {match.home_team}
                    </span>
                    <span className={s.matchVs}>VS</span>
                    <span className={`${s.matchTeam} ${s.matchTeamAway}`}>
                      {match.away_team}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
