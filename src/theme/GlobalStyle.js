import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import theme from ".";
import ipsFont from "../fonts/ips.woff";

const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'IPS';
    src: local('IPS'), local('IPS'),
    url(${ipsFont}) format('woff');
    font-weight: 300;
    font-style: normal;
  }

  html, body, #root {
    height: 100%;
    overflow: auto;
  }

  body {
    font-family: "IPS", serif;
    font-size: 1.15em;
    color: ${theme.text};
    background: ${theme.mainBg};
    line-height: 1.2;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  a {
    color: ${theme.text};

    &:hover {
      background-color: ${theme.text};
      color: ${theme.mainBg};
    }
  }
`;

export default GlobalStyle;
