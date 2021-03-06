import React from "react";
import styled from "styled-components";
import CountUp from "react-countup";
import { Card } from "../common/Card";
import { StyledText } from "../common/StyledText";

const Button = styled.button`
  width: 50%;
  display: block;
  background: rgba(0, 0, 0, 0.3);
  color: #fff989;
  font-size: 1.25em;
  font-weight: 600;
  border: 2px solid white;
  padding: 0.5em 0 0.5em 0;
  border-radius: 30px;
  margin: 0.3em auto 0.3em auto;
`;

const BottomPlayerCard = ({
  player,
  isAnswering,
  choose,
  handleCircleAnimation,
  otherPlayer,
}) => {
  return (
    <Card id={player.id} team={player.team}>
      <StyledText weight="bold" size="1.45">
        {player.name} ({player.team})
      </StyledText>
      <StyledText weight="normal" size="1.25">
        is averaging
      </StyledText>

      {isAnswering && (
        <>
          <Button onClick={() => choose("HIGHER")}>More</Button>
          <Button onClick={() => choose("LOWER")}>Less</Button>
          <StyledText weight="normal" size="1.25">
            PPG than {otherPlayer.name}
          </StyledText>
        </>
      )}
      {!isAnswering && (
        <>
          <StyledText color="#fff989" weight="bold" size="1.45">
            <CountUp
              end={player.PPG}
              decimals={1}
              suffix={" PPG"}
              onEnd={handleCircleAnimation}
            />
          </StyledText>
          <StyledText weight="normal" size="1.25">
            in the 2020-2021 season
          </StyledText>
        </>
      )}
    </Card>
  );
};

export default BottomPlayerCard;
