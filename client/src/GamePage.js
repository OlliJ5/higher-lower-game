import React, { useState, useEffect } from "react";
import styled from "styled-components";
import playerService from "./requests/players";

const GameContainer = styled.div`
  text-align: center;
  height: 100vh;
`;

// const GameHeader = styled.header`
//   height: 10%;
// `;

const Versus = styled.div`
  border-radius: 50%;
  height: 60px;
  width: 60px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -30px;
  margin-top: -30px;
  border: none;
  font-size: 1.3em;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
`;

const Option = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: ${(props) =>
    `url(https://cdn.nba.com/headshots/nba/latest/1040x760/${props.playerId}.png)`};
  background-position: center;
  background-size: cover;
`;

const GamePage = ({ playerList }) => {
  const [firstOption, setFirstOption] = useState(null);
  const [secondOption, setSecondOption] = useState(null);

  useEffect(() => {
    if (!playerList) {
      return;
    }

    async function fetchData() {
      const firstId = Math.floor(Math.random() * Math.floor(playerList.length));
      const secondId = Math.floor(
        Math.random() * Math.floor(playerList.length)
      );

      console.log(playerList[firstId]);
      console.log(playerList[secondId]);

      const firstPlayer = await playerService.getPlayerInfo(
        playerList[firstId].id
      );
      const secondPlayer = await playerService.getPlayerInfo(
        playerList[secondId].id
      );

      console.log(firstPlayer);
      console.log(secondPlayer);

      setFirstOption(firstPlayer);
      setSecondOption(secondPlayer);
    }

    fetchData();
  }, [playerList]);

  if (!firstOption || !secondOption) {
    return null;
  }
  return (
    <GameContainer>
      {/* <GameHeader>
        <h1>HIGHER OR LOWER</h1>
      </GameHeader> */}
      <Option playerId={firstOption.PLAYER_ID} team={firstOption.team}>
        <h2>
          {firstOption.PLAYER_NAME} ({firstOption.team})
        </h2>
      </Option>
      <Versus>VS</Versus>
      <Option playerId={secondOption.PLAYER_ID} team={secondOption.team}>
        <h2>
          {secondOption.PLAYER_NAME} ({secondOption.team})
        </h2>
      </Option>
    </GameContainer>
  );
};

export default GamePage;
