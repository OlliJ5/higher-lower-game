import styled from "styled-components";
import colorPicker from "../../utils/colorPicker";

export const Card = styled.div`
  height: 50%;
  background: ${(props) =>
    `
    url(https://cdn.nba.com/headshots/nba/latest/1040x760/${props.id}.png)`};

  background-color: ${(props) => colorPicker.mainTeamColor(props.team)};
  background-position: center bottom;
  background-size: auto 100%;
  background-repeat: no-repeat;

  @media (orientation: landscape) {
    width: 50%;
    height: 100%;
  }
`;
