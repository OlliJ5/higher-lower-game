import React from "react";
import styled from "styled-components";
import cryingJordan from "../../resources/crying_jordan.jpg";

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
  justify-content: flex-start;
`;

const ContentContainer = styled.div`
  margin: 25% 5% 0 5%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  line-height: 1.5;
`;

const LargeText = styled.p`
  font-size: 1.45em;
  font-weight: 600;
`;

const Score = styled.p`
  font-size: 3em;
  font-weight: 600;
  color: #fff989;
`;

const Text = styled.p`
  font-size: 1.25em;
  font-weight: 500;
`;

const Paragraph = styled.p`
  font-size: 1.25em;
  font-weight: 400;
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
        <LargeText>RIP GG</LargeText>
        <div>
          <Text>You scored:</Text>
          <Score>{score}</Score>
          <Paragraph>
            Aliqua enim fugiat officia laboris elit quis in irure est esse
            velit.
          </Paragraph>
        </div>
        <Button onClick={resetGame}>Try again</Button>
      </ContentContainer>
    </Container>
  );
};

export default GameOverPage;
