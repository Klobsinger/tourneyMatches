import Match from "./Match"

function MatchList (props) {
  return (
    <section className="PlayerList MatchList">
<h1>Match list</h1>
{props.matchData.map((match) => (
<Match
  key={match.matchNumber}
  players={match.players}
  winner={match.winner} 
  scoreDifference={match.scoreDifference}
/>
))}
</section>
  );
}

export default MatchList;