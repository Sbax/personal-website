import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: sans-serif;
    font-size: 20px;
    background: #191a1a;
    color: #d4d4cf;

    h1 {
      margin: 0;
    }

    a {
      display: inline-block;
      color: #174FF5;

      &:hover {
        animation-name: shake;
        animation-duration: 100ms;
        transform-origin: 50% 50%;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
      }
    }

    @keyframes shake {
      0% {
        transform: translate(0px, 0px) rotate(0deg);
      }
      10% {
        transform: translate(1px, 0px) rotate(-2deg);
      }
      20% {
        transform: translate(1px, 1px) rotate(2deg);
      }
      30% {
        transform: translate(0px, 1px) rotate(0deg);
      }
      40% {
        transform: translate(0px, -1px) rotate(2deg);
      }
      50% {
        transform: translate(-1px, -1px) rotate(-2deg);
      }
      60% {
        transform: translate(-1px, 0px) rotate(0deg);
      }
      70% {
        transform: translate(0px, 0px) rotate(-2deg);
      }
      80% {
        transform: translate(0px, 1px) rotate(2deg);
      }
      90% {
        transform: translate(1px, 1px) rotate(0deg);
      }
      100% {
        transform: translate(1px, 0px) rotate(-2deg);
      }
    }
  }
`;

const About = styled.section`
  p + p {
    margin-top: 0.7rem;
  }
`;

const Portfolio = styled.section`
  > * + * {
    margin-top: 1rem;
  }
`;

const Item = styled.article`
  p {
    font-size: 1rem;
    margin-bottom: 0;
  }

  > * + * {
    margin-top: 0.5rem;
  }
`;

function App() {
  return (
    <main>
      <About id="about">
        <GlobalStyle />
        <h1>Matteo Bacci</h1>
        <p>I am a developer from Imola, Italy.</p>
        <p>
          I love movies, obscure music, games and being extremely unpleasant.
        </p>
        <p>
          You can find me on{" "}
          <a href="https://www.instagram.com/heysbax/">Instagram</a>,{" "}
          <a href="https://www.linkedin.com/in/matteo-bacci-22418387">
            LinkedIn
          </a>
          , <a href="http://telegram.me/sbaxxx">Telegram</a> or{" "}
          <a data-mail="mb@cocaine.ninja" href="mailto:mb@cocaine.ninja">
            mail me
          </a>
        </p>
        <p>
          Also I make kinda good websites like <s>not this one</s>
        </p>
      </About>
      <Portfolio id="portfolio">
        <Item>
          <a href="https://baccanale.maletta.space">baccanale.maletta.space</a>
          <p>
            this I made to store and search menus in a yearly local festival
          </p>
        </Item>
        <Item>
          <a href="https://podcast.doddophonique.com">
            podcast.doddophonique.com
          </a>
          <p>this I made for a friend's podcast</p>
        </Item>
        <Item>
          <a href="http://places.maletta.space">places.maletta.space</a>
          <p>
            this I made to keep track of the coolest places I visit or want to
          </p>
        </Item>
      </Portfolio>
    </main>
  );
}

export default App;
