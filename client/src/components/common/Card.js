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