import styled from "styled-components";

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
