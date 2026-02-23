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
  console.log(sets);

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
        <div className="match-info-scores">
          <div className="match-info-set">
            <span>{sets[0][0]}</span>
            <span>{sets[1][0]}</span>
            <span>{sets[2][0]}</span>
          </div>
          <div className="match-info-divider" />
          <div className="match-info-set">
            <span>{sets[0][1]}</span>
            <span>{sets[1][1]}</span>
            <span>{sets[2][1]}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
