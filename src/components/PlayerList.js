import Player from "./Player";
import matchData from "../data/matchData";
import playerData from "../data/playerData";
import { preparePlayerData, addWinsToPlayers } from "../helpers/playerHelpers";

function PlayerList (props)  {
  const onePlayer = playerData["Disguised Lizard"];
  const playerDataArray = preparePlayerData(playerData);
    const parsedPlayerData = addWinsToPlayers(playerDataArray, matchData);
  return (
    <section className="PlayerList">
    <h1>Current participating players</h1>
    <Player firstName ={onePlayer.firstName} lastName= {onePlayer.lastName} gamerTag={onePlayer.gamerTag} wins={onePlayer.wins}/>
  </section>
  )
}

export default PlayerList;