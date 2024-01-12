import React, { useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "wouter";
import { breakpoints } from "../theme";
import useKonami from "../utils/useKonami";
import { Loader } from "./Loader";
import Reveal from "./Reveal";
import Container from "./styles/Container";
import Links from "./styles/LinksGrid";
import { Subtitle, Title } from "./styles/Typography";

const Char = styled.span`
  padding: 0.25em;
  opacity: 0.5;

  &.active {
    opacity: 1;
  }
`;

const DesktopOnly = styled.section`
  display: none;

  @media (min-width: ${breakpoints.tablet}) {
    display: block;
  }
`;

function Main({ title, description }) {
  const [fontLoaded, setFontLoaded] = useState(false);

  document.fonts.ready.then(() => setFontLoaded(true));

  const [, setLocation] = useLocation();
  const { input } = useKonami(() => fontLoaded && setLocation("/more"));

  const code = ["↑", "↑", "↓", "↓", "←", "→", "←", "→", "B", "A"];

  if (!fontLoaded) {
    return (
      <Container>
        <Title>
          <Loader />
        </Title>
      </Container>
    );
  }

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

      <DesktopOnly>
        <Title>
          {code.map((char, index) => (
            <Char className={input.length >= index + 1 ? "active" : ""}>
              {char}
            </Char>
          ))}
        </Title>
      </DesktopOnly>

      <Subtitle>
        <Link to="/more">see more</Link>
      </Subtitle>
    </Container>
  );
}

export default Main;
