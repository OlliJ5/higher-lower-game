import React from "react";
import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";

const SpinnerContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(#17408b 50%, #c9082a 50%);

  @media (orientation: landscape) {
    background: linear-gradient(90deg, #17408b 50%, #c9082a 50%);
  }
`;

const Spinner = () => {
  return (
    <SpinnerContainer>
      <ClipLoader color={"#FFF"} size={60} />
    </SpinnerContainer>
  );
};

export default Spinner;
