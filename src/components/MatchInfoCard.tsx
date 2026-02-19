interface Registration {
  id: number;
  player_a: string;
  player_b: string;
}

interface ResultSets {
  [key: string]: [string, string];
}

export interface MatchData {
  id: number;
  date: string;
  time: string;
  court: string;
  result: ResultSets;
  team1: Registration;
  team2: Registration;
}

export default function MatchInfoCard({ match }: { match: MatchData }) {
  const sets = [match.result["1"], match.result["2"], match.result["3"]];
  const hasScores = sets.some(
    (s) => s && s[0] !== "-" && s[1] !== "-"
  );

  return (
    <div className="match-info-card">
      <div className="match-info-header">
        <span className="match-info-date">{match.date}</span>
        <span className="match-info-time">{match.time}</span>
        <span className="match-info-court">Pista {match.court}</span>
      </div>

      <div className="match-info-body">
        <div className="match-info-teams">
          <div className="match-info-team">
            <span>{match.team1.player_a}</span>
            <span>{match.team1.player_b}</span>
          </div>
          <div className="match-info-divider" />
          <div className="match-info-team">
            <span>{match.team2.player_a}</span>
            <span>{match.team2.player_b}</span>
          </div>
        </div>

        {hasScores && (
          <div className="match-info-scores">
            {sets.map((set, i) => {
              if (!set || (set[0] === "-" && set[1] === "-")) return null;
              const s1 = Number(set[0]);
              const s2 = Number(set[1]);
              return (
                <div key={i} className="match-info-set">
                  <span className={s1 > s2 ? "set-winner" : ""}>{set[0]}</span>
                  <span className={s2 > s1 ? "set-winner" : ""}>{set[1]}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
