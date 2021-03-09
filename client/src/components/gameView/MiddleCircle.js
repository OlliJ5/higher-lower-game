import React from "react";
import styled from "styled-components";
import checkIcon from "../../resources/checkIcon.svg";
import wrongIcon from "../../resources/wrongIcon.svg";
import { keyframes } from "styled-components";

const correctAnswerAnimation = keyframes`
  33% {
    background-color: #4BB543;
    background-size: 100% 100%;
  }
  66%  {
    background-color: #4BB543;
    background-size: 100% 100%;
  }
  100% {
    background-color: white;
    background-size: 0;
  }
`;

const falseAnswerAnimation = keyframes`
  33% {
    background-color: #F32013;
    background-size: 100% 100%;
  }
  66%  {
    background-color: #F32013;
    background-size: 100% 100%;
  }
  100% {
    background-color: white;
    background-size: 0;
  }
`;

const CircleBase = styled.div`
  border-radius: 50%;
  height: 3em;
  width: 3em;
  position: absolute;
  left: 50%;
  margin-left: -1.5em;
  margin-top: -1.5em;
  border: none;
  font-size: 1.3em;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  border: 2px solid gray;
  @media (orientation: landscape) {
    top: 50%;
  }
`;

const CircleCorrect = styled(CircleBase)`
  background-image: url(${checkIcon});
  background-position: center;
  background-size: 0;
  background-repeat: no-repeat;
  animation: ${correctAnswerAnimation} 1.5s;
`;

const CircleFalse = styled(CircleBase)`
  background-image: url(${wrongIcon});
  background-position: center;
  background-size: 0;
  background-repeat: no-repeat;
  animation: ${falseAnswerAnimation} 1.5s;
`;

const MiddleCircle = ({ iconToShow }) => {
  return (
    <div>
      {iconToShow === null && <CircleBase>VS</CircleBase>}
      {iconToShow && <CircleCorrect />}
      {iconToShow === false && <CircleFalse />}
    </div>
  );
};

export default MiddleCircle;
