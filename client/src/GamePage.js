import React, { useState, useEffect } from "react";
import styled from "styled-components";
import playerService from "./requests/players";
import colorPicker from "./utils/colorPicker";

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
  background-color: ${(props) => colorPicker.mainTeamColor(props.team)};
`;

const TextContainer = styled.div`
  color: #fff;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  line-height: 1.5;
`;

const PlayerName = styled.h2`
  font-size: 1.45em;
  font-weight: 600;
`;

const PlayerPoints = styled.h3`
  font-size: 1.45em;
  font-weight: 600;
  color: #fff989;
`;

const Text = styled.p`
  font-size: 1.25em;
  font-weight: 400;
`;

const Button = styled.button`
  width: 50%;
  background: none;
  color: #fff989;
  font-size: 1.45em;
  border: 2px solid white;
  padding: 0.3em 0 0.3em 0;
  border-radius: 30px;
`;

const GamePage = ({ playerList }) => {
  const [firstOption, setFirstOption] = useState(null);
  const [secondOption, setSecondOption] = useState(null);

  useEffect(() => {
    if (!playerList) {
      return;
    }

    async function fetchInitialPlayers() {
      const firstId = Math.floor(Math.random() * Math.floor(playerList.length));
      const secondId = Math.floor(
        Math.random() * Math.floor(playerList.length)
      );

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

    fetchInitialPlayers();
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
        <TextContainer>
          <PlayerName>
            {firstOption.PLAYER_NAME} ({firstOption.team})
          </PlayerName>
          <Text>is averaging</Text>
          <PlayerPoints>{firstOption.PTS} PPG</PlayerPoints>
          <Text>in the 2020-2021 season</Text>
        </TextContainer>
      </Option>
      <Versus>VS</Versus>
      <Option playerId={secondOption.PLAYER_ID} team={secondOption.team}>
        <TextContainer>
          <PlayerName>
            {secondOption.PLAYER_NAME} ({secondOption.team})
          </PlayerName>
          <Text>is averaging</Text>
          <Button>More</Button>
          <br />
          <Button>Less</Button>
          <Text>PPG than {firstOption.PLAYER_NAME}</Text>
        </TextContainer>
      </Option>
    </GameContainer>
  );
};

export default GamePage;
