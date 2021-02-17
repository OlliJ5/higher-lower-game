import React from "react";
import styled from "styled-components";
import checkIcon from "./resources/checkIcon.svg";
import wrongIcon from "./resources/wrongIcon.svg";
import { keyframes } from "styled-components";

const correctAnswerAnimation = keyframes`
  0% {
    background-color: white;
  }
  66%  {
    background-color: #4BB543;
    background-image: url(${checkIcon});
    background-position: center;
    background-size: cover;
  }
`;

const falseAnswerAnimation = keyframes`
  0% {
    background-color: white;
  }
  66% {
    background-color: #F32013;
    background-image: url(${wrongIcon});
    background-position: center;
    background-size: cover;
  }
`;

const CircleBase = styled.div`
  border-radius: 50%;
  height: 60px;
  width: 60px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -32px;
  margin-top: -32px;
  border: none;
  font-size: 1.3em;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  border: 2px solid gray;
`;

const CircleCorrect = styled(CircleBase)`
  animation: ${correctAnswerAnimation} 1.5s;
`;

const CircleFalse = styled(CircleBase)`
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
