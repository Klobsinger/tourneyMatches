import Player from "./Player";

function PlayerList (props)  {
  return (
    <section className="PlayerList">
    <h1>Current participating players</h1>
    {props.playerData.map((player) =>(
    <Player 
    key={player.gamerTag}
    firstName ={player.firstName} 
    lastName= {player.lastName} 
    gamerTag={player.gamerTag} 
    wins={player.wins}/>
    ))}
  </section>
  )
}

export default PlayerList;