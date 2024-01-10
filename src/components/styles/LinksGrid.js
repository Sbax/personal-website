import styled from "styled-components";
import { breakpoints } from "../../theme";

const LinksGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
  }

  grid-gap: 1em;

  flex-direction: column;
  font-size: 1em;
  padding: 1em;
`;

export default LinksGrid;
