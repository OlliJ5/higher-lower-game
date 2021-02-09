import React, { useEffect, useState } from "react";
import playerService from "./requests/players";
import GamePage from "./GamePage";
import "./reset.css";

const App = () => {
  const [playerList, setPlayerList] = useState(null);

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
      <GamePage playerList={playerList} />
    </div>
  );
};

export default App;
