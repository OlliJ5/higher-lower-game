import React from "react";
import styled from "styled-components";
import colorPicker from "../../utils/colorPicker";

export const Card = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${(props) =>
    `linear-gradient(
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.3)
    ), 
    url(https://cdn.nba.com/headshots/nba/latest/1040x760/${props.id}.png)`};

  background-color: ${(props) => colorPicker.mainTeamColor(props.team)};
  background-position: center;
  background-size: cover;
`;

const fontWeight = {
  light: 400,
  normal: 500,
  bold: 600,
};

export const StyledText = styled.p`
  line-height: 1.5;
  color: ${({ color }) => (color ? color : "#fff")};
  font-weight: ${({ weight }) => fontWeight[weight]};
  font-size: ${({ size }) => `${size}em`};
`;

const PlayerCard = ({ player }) => {
  return (
    <Card id={player.id} team={player.team}>
      <StyledText weight="bold" size="1.45">
        {player.name} ({player.team})
      </StyledText>
      <StyledText weight="normal" size="1.25">
        is averaging
      </StyledText>
      <StyledText color="#fff989" weight="bold" size="1.45">
        {player.PPG} PPG
      </StyledText>
      <StyledText weight="normal" size="1.25">
        in the 2020-2021 season
      </StyledText>
    </Card>
  );
};

export default PlayerCard;
