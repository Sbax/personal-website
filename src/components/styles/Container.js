import styled from "styled-components";
import { breakpoints } from "../../theme";

const Container = styled.main`
  max-width: ${breakpoints.desktop};
  padding: 1rem;
  margin: auto;

  height: 100%;

  @media (min-width: ${breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  > * + * {
    margin-top: 1rem;
  }
`;

export default Container;
