import React from "react";
import styled from "styled-components";
import cryingJordan from "../../resources/crying_jordan.jpg";
import { StyledText } from "../common/StyledText";

const Container = styled.div`
  text-align: center;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(${cryingJordan});
  background-size: cover;
  background-position: center;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 450px) {
    background-size: inherit;
    background-position: inherit;
    background-repeat: round;
  }
`;

const ContentContainer = styled.div`
  height: 65%;
  width: 90%;
  max-width: 450px;
  margin: 0 auto 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Button = styled.button`
  width: 70%;
  max-width: 275px;
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
  font-size: 1.25em;
  font-weight: 600;
  border: 2px solid white;
  padding: 12px 0 12px 0;
  border-radius: 30px;
  margin: 1em auto 1em auto;
`;

const GameOverPage = ({ score, setScore, setGameStage }) => {
  const resetGame = () => {
    setScore(0);
    setGameStage("PLAYING");
  };

  return (
    <Container>
      <ContentContainer>
        <StyledText size="1.45" weight="bold">
          RIP GG
        </StyledText>
        <div>
          <StyledText size="1.25" weight="normal">
            You scored:
          </StyledText>
          <StyledText size="3" weight="bold" color="#fff989">
            {score}
          </StyledText>
          <StyledText size="1.25" weight="light">
            Aliqua enim fugiat officia laboris elit quis in irure est esse
            velit.
          </StyledText>
        </div>
        <Button onClick={resetGame}>Try again</Button>
      </ContentContainer>
    </Container>
  );
};

export default GameOverPage;
