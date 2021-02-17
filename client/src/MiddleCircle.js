import React from "react";
import styled from "styled-components";
import checkIcon from "./resources/checkIcon.svg";
import wrongIcon from "./resources/wrongIcon.svg";
import { keyframes } from "styled-components";

const correctAnswerAnimation = keyframes`
  0% {
    background-color: white;
  }
  100% {
    background-color: #4BB543;
    background-image: url(${checkIcon});
  }
`;

const falseAnswerAnimation = keyframes`
  0% {
    background-color: white;
  }
  100% {
    background-color: #F32013;
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
  /* background-image: url(${checkIcon}); */
  background-position: center;
  background-size: cover;
`;

const CircleFalse = styled(CircleBase)`
  animation: ${falseAnswerAnimation} 1.5s;
  background-image: url(${wrongIcon});
  background-position: center;
  background-size: cover;
`;

const MiddleCircle = ({ iconToShow }) => {
  console.log("icon to show", iconToShow);
  return (
    <div>
      {iconToShow === null && <CircleBase>VS</CircleBase>}
      {iconToShow && <CircleCorrect />}
      {iconToShow === false && <CircleFalse />}
    </div>
    // {iconToShow && (
    //   <img src={checkIcon} alt="check mark to indicate correct answer" />
    // )}
    // {iconToShow === false && (
    //   <img src={wrongIcon} alt="x-icon to indicate false answer" />
    // )}
  );
};

export default MiddleCircle;
