import React from "react";
import styled from "styled-components";
import cryingJordan from "./resources/crying_jordan.jpg";

const GameContainer = styled.div`
  text-align: center;
  height: 100vh;
  background-image: url(${cryingJordan});
  background-size: cover;
  background-position: center;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const GameOverPage = ({ score }) => {
  return (
    <GameContainer>
      <h1>RIP GG</h1>
      <p>You scored {score} points</p>
      <button>Try again big man</button>
    </GameContainer>
  );
};

export default GameOverPage;
