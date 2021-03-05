import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  right: 0;
  color: white;
  font-weight: 600;
  font-size: 1.25em;
  margin: 0.5em 0.5em 0 0;
`;

const Header = ({ score }) => <StyledHeader>Score: {score}</StyledHeader>;

export default Header;
