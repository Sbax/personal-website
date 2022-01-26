import styled from "styled-components";
import { breakpoints } from "../theme/theme";

export const Container = styled.main`
  max-width: ${breakpoints.desktop};
  padding: 1rem;
  margin: auto;

  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > * + * {
    margin-top: 1rem;
  }
`;
