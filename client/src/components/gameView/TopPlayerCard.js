import React from "react";
import { StyledText } from "../common/StyledText";
import { Card } from "../common/Card";
import { Dimmer } from "../common/Dimmer";

const TopPlayerCard = ({ player }) => {
  return (
    <Card id={player.id} team={player.team}>
      <Dimmer>
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
      </Dimmer>
    </Card>
  );
};

export default TopPlayerCard;
