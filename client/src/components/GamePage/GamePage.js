import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import playerService from "../../requests/players";
import MiddleCircle from "./MiddleCircle";
import Spinner from "./Spinner";
import Header from "./Header";
import TopPlayerCard from "./TopPlayerCard";
import BottomPlayerCard from "./BottomPlayerCard";

const GameContainer = styled.div`
  text-align: center;
  height: 100vh;
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

  const fetchPlayer = useCallback(async () => {
    while (true) {
      const listIndex = Math.floor(
        Math.random() * Math.floor(playerList.length)
      );
      const player = await playerService.getPlayerInfo(
        playerList[listIndex].id
      );

      if (!player.error) {
        console.log("pelaaja", player.name);
        return player;
      }
    }
  }, [playerList]);

  useEffect(() => {
    if (!playerList) {
      return;
    }

    const fetchInitialPlayers = async () => {
      const firstPlayer = await fetchPlayer();
      const secondPlayer = await fetchPlayer();

      setFirstOption(firstPlayer);
      setSecondOption(secondPlayer);
    };

    fetchInitialPlayers();
  }, [playerList, fetchPlayer]);

  const checkAnswer = (optionChosen) => {
    //if the average is the same, you get a freebie
    if (secondOption.PPG === firstOption.PPG) {
      return true;
    }

    const correctAnswer =
      secondOption.PPG > firstOption.PPG ? "HIGHER" : "LOWER";

    return correctAnswer === optionChosen;
  };

  const choose = async (optionChosen) => {
    setIsAnswering(false);
    if (checkAnswer(optionChosen)) {
      setAnswerCorrect(true);
      setScore(score + 1);
      const newFirstOption = secondOption;
      const newPlayer = await fetchPlayer();
      await sleep(3500); //countup and circle animation
      setFirstOption(newFirstOption);
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
  };

  if (!firstOption || !secondOption) {
    return <Spinner />;
  }
  return (
    <GameContainer>
      <Header score={score} />
      <TopPlayerCard player={firstOption} />
      <MiddleCircle iconToShow={iconToShow} />
      <BottomPlayerCard
        player={secondOption}
        isAnswering={isAnswering}
        choose={choose}
        handleCircleAnimation={handleCircleAnimation}
        otherPlayer={firstOption}
      />
    </GameContainer>
  );
};

export default GamePage;
