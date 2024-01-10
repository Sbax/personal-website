import styled from "styled-components";
import theme from "../../theme";

export const Title = styled.h1`
  text-align: center;
  font-size: 2em;
`;

export const Subtitle = styled.h2`
  text-align: center;
  font-size: 1.2em;

  color: ${theme.grey};

  > * + * {
    margin-top: 0.25em;
  }
`;
