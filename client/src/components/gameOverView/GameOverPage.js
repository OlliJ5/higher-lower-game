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
`;

const ContentContainer = styled.div`
  margin: 0 5% 0 5%;
  height: 65%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Button = styled.button`
  width: 70%;
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
  font-size: 1.25em;
  font-weight: 600;
  border: 2px solid white;
  padding: 0.7em 0 0.7em 0;
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
