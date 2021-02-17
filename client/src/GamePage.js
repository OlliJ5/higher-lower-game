import React, { useState, useEffect } from "react";
import styled from "styled-components";
import playerService from "./requests/players";
import colorPicker from "./utils/colorPicker";
import CountUp from "react-countup";
import MiddleCircle from "./MiddleCircle";

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
  padding: 0.5em 0 0.35em 0;
  border-radius: 30px;
  margin: 0.3em auto 0.3em auto;
`;

const GamePage = ({ playerList, setGameStage, score, setScore }) => {
  const [firstOption, setFirstOption] = useState(null);
  const [secondOption, setSecondOption] = useState(null);
  const [isAnswering, setIsAnswering] = useState(true);
  const [answerCorrect, setAnswerCorrect] = useState(null);
  const [iconToShow, setIconToShow] = useState(null);

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

      setFirstOption(firstPlayer);
      setSecondOption(secondPlayer);
    }

    fetchInitialPlayers();
  }, [playerList]);

  const checkAnswer = (optionChosen) => {
    //if same points, you get a freebie
    if (secondOption.PTS === firstOption.PTS) {
      return true;
    }

    const correctAnswer =
      secondOption.PTS > firstOption.PTS ? "HIGHER" : "LOWER";

    return correctAnswer === optionChosen;
  };

  const choose = async (optionChosen) => {
    setIsAnswering(false);
    if (checkAnswer(optionChosen)) {
      setAnswerCorrect(true);
      setScore(score + 1);
      await sleep(3500); //countup and circle animation
      setFirstOption(secondOption);
      const newId = Math.floor(Math.random() * Math.floor(playerList.length));
      const newPlayer = await playerService.getPlayerInfo(playerList[newId].id);
      setSecondOption(newPlayer);
      setIsAnswering(true);
    } else {
      setAnswerCorrect(false);
      await sleep(3600); //countup and circle animation plus some
      setGameStage("GAME-OVER");
    }
  };

  const handleCircleAnimation = async () => {
    setIconToShow(answerCorrect);
    await sleep(1500); //duration of the animation in the middle circle
    setIconToShow(null);
    handleTransitionAnimation();
  };

  const handleTransitionAnimation = () => {};

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
      <MiddleCircle iconToShow={iconToShow} />
      <Option playerId={secondOption.PLAYER_ID} team={secondOption.team}>
        <TextContainer>
          <PlayerName>
            {secondOption.PLAYER_NAME} ({secondOption.team})
          </PlayerName>
          <Text>is averaging</Text>

          {isAnswering && (
            <div>
              <Button onClick={() => choose("HIGHER")}>More</Button>
              <Button onClick={() => choose("LOWER")}>Less</Button>
              <Text>PPG than {firstOption.PLAYER_NAME}</Text>
            </div>
          )}
          {!isAnswering && (
            <div>
              <PlayerPoints>
                <CountUp
                  end={secondOption.PTS}
                  decimals={1}
                  suffix={" PPG"}
                  onEnd={handleCircleAnimation}
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
