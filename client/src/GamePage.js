import React from "react";
import styled from "styled-components";

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
`;

const TopOption = styled(Option)`
  background-image: url("https://cdn.nba.com/headshots/nba/latest/1040x760/203500.png");
  background-color: blue;
  background-position: center;
  background-size: cover;
`;

const BottomOption = styled(Option)`
  background: red;
`;

const GamePage = ({ playerList }) => {
  if (!playerList) {
    return null;
  }
  return (
    <GameContainer>
      {/* <GameHeader>
        <h1>HIGHER OR LOWER</h1>
      </GameHeader> */}
      <TopOption>
        <h2>{playerList[0].full_name}</h2>
      </TopOption>
      <Versus>VS</Versus>
      <BottomOption>
        <h2>{playerList[1].full_name}</h2>
      </BottomOption>
    </GameContainer>
  );
};

export default GamePage;
