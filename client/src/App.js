import React, { useEffect, useState } from "react";
import playerService from "./requests/players";
import GamePage from "./GamePage";
import "./reset.css";
import GameOverPage from "./GameOverPage";

const App = () => {
  const [playerList, setPlayerList] = useState(null);
  const [gameStage, setGameStage] = useState("PLAYING");

  useEffect(() => {
    async function fetchData() {
      const players = await playerService.getPlayers();
      console.log(players);
      setPlayerList(players);
    }
    fetchData();
  }, []);
  return (
    <div>
      {gameStage === "PLAYING" && (
        <GamePage playerList={playerList} setGameStage={setGameStage} />
      )}
      {gameStage === "GAME-OVER" && <GameOverPage />}
    </div>
  );
};

export default App;
