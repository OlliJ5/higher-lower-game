import React, { useEffect, useState } from "react";
import playerService from "./requests/players";
import GamePage from "./GamePage";
import "./reset.css";
import GameOverPage from "./GameOverPage";

const App = () => {
  const [playerList, setPlayerList] = useState(null);
  const [score, setScore] = useState(0);
  const [gameStage, setGameStage] = useState("PLAYING");

  useEffect(() => {
    async function fetchData() {
      const players = await playerService.getPlayers();
      setPlayerList(players);
    }
    fetchData();
  }, []);
  return (
    <div>
      {gameStage === "PLAYING" && (
        <GamePage
          playerList={playerList}
          setGameStage={setGameStage}
          score={score}
          setScore={setScore}
        />
      )}
      {gameStage === "GAME-OVER" && (
        <GameOverPage
          score={score}
          setScore={setScore}
          setGameStage={setGameStage}
        />
      )}
    </div>
  );
};

export default App;
