import React, { useState, useEffect } from "react";
import styled from "styled-components";
import playerService from "./requests/players";
import colorPicker from "./utils/colorPicker";
import CountUp from "react-countup";

const GameContainer = styled.div`
  text-align: center;
  height: 100vh;
`;

const GameHeader = styled.header`
  position: absolute;
  top: 0;
  right: 0;
  color: white;
  font-weight: 600;
  margin: 0.5em 0.5em 0 0;
`;

const Versus = styled.div`
  border-radius: 50%;
  height: 60px;
  width: 60px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -32px;
  margin-top: -32px;
  border: none;
  font-size: 1.3em;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  border: 2px solid gray;
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
  margin-top: 10%;
`;

const PlayerName = styled.h2`
  font-size: 1.45em;
  font-weight: 600;
`;

const PlayerPoints = styled.h3`
  font-size: 1.45em;
  font-weight: 600;
  color: #fff989;
  text-shadow: none;
`;

const Text = styled.p`
  font-size: 1.25em;
  font-weight: 500;
`;

const Button = styled.button`
  width: 50%;
  display: block;
  background: rgba(0, 0, 0, 0.3);
  color: #fff989;
  font-size: 1.25em;
  font-weight: 600;
  border: 2px solid white;
  padding: 0.4em 0 0.4em 0;
  border-radius: 30px;
  margin: 0.3em auto 0.3em auto;
`;

const GamePage = ({ playerList, setGameStage }) => {
  const [firstOption, setFirstOption] = useState(null);
  const [secondOption, setSecondOption] = useState(null);
  const [answering, setAnswering] = useState(true);
  const [score, setScore] = useState(0);

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

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

  const choose = async (optionChosen) => {
    setAnswering(false);
    const correctAnswer =
      secondOption.PTS > firstOption.PTS ? "HIGHER" : "LOWER";

    if (correctAnswer === optionChosen) {
      console.log("OIKEIN!!!");
      setScore(score + 1);
      await sleep(2000);
      setFirstOption(secondOption);
      const newId = Math.floor(Math.random() * Math.floor(playerList.length));
      const newPlayer = await playerService.getPlayerInfo(playerList[newId].id);
      setSecondOption(newPlayer);
      setAnswering(true);
    } else {
      console.log("VÄÄRIN!!!");
      setGameStage("GAME-OVER");
    }
  };

  if (!firstOption || !secondOption) {
    return null;
  }
  return (
    <GameContainer>
      <GameHeader>Score: {score}</GameHeader>
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

          {answering && (
            <div>
              <Button onClick={() => choose("HIGHER")}>More</Button>
              <Button onClick={() => choose("LOWER")}>Less</Button>
              <Text>PPG than {firstOption.PLAYER_NAME}</Text>
            </div>
          )}
          {!answering && (
            <div>
              <PlayerPoints>
                <CountUp
                  end={secondOption.PTS}
                  decimals={1}
                  suffix={" PPG"}
                />
              </PlayerPoints>
              <Text>in the 2020-2021 season</Text>
            </div>
          )}
        </TextContainer>
      </Option>
    </GameContainer>
  );
};

export default GamePage;
