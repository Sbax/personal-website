import React from "react";
import styled from "styled-components";
import { breakpoints, theme } from "../theme/theme";
import { Container } from "./Container";
import Reveal from "./Reveal";

const Title = styled.h1`
  text-align: center;
  font-size: 2em;
`;

const Subtitle = styled.h2`
  text-align: center;
  font-size: 1.2em;

  color: ${theme.grey};

  > * + * {
    margin-top: 0.25em;
  }
`;

const Links = styled.section`
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

function Main({ title, description }) {
  return (
    <Container>
      <Title>{title}</Title>

      <Subtitle>
        <p>I'm a {description}</p>
        <p>
          <Reveal>
            I love movies, obscure music and games, expecially tabletop rpgs
          </Reveal>
        </p>
      </Subtitle>
      <Subtitle>
        <p>
          <Reveal>You can find me on </Reveal>
          <a name="github" href="https://github.com/sbax">
            <Reveal>Github</Reveal>
          </a>
          <Reveal>, </Reveal>
          <a name="itch" href="https://sbax.itch.io/">
            <Reveal>Itch</Reveal>
          </a>
          <Reveal>, </Reveal>
          <a name="instagram" href="https://www.instagram.com/heysbax/">
            <Reveal>Instagram</Reveal>
          </a>
          <Reveal>, </Reveal>
          <a
            name="linkedin"
            href="https://www.linkedin.com/in/matteo-bacci-22418387"
          >
            <Reveal>LinkedIn</Reveal>
          </a>
          <Reveal>, or </Reveal>
          <a name="telegram" href="http://telegram.me/sbaxxx">
            <Reveal>Telegram</Reveal>
          </a>
        </p>
      </Subtitle>
      <Subtitle>
        <p>Some of my projects below</p>
      </Subtitle>

      <Links>
        <div>
          <a href="https://officinacoboldi.it/">officina coboldi</a>, for the
          rpg organization I'm part of
        </div>

        <div>
          <a href="https://baccanale.maletta.space/">baccanale</a>, to store and
          search menus in a yearly local festival
        </div>

        <div>
          <a href="http://places.maletta.space/">places</a>, to keep track of
          the coolest places I visit or want to
        </div>

        <div>
          <a href="https://generanomi.maletta.space/">generanomi</a>, an
          (italian) name generator for spaghetti fantasy settings
        </div>
      </Links>
    </Container>
  );
}

export default Main;
