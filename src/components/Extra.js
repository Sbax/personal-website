import React from "react";
import { Link } from "wouter";
import Reveal from "./Reveal";
import Container from "./styles/Container";
import LinksGrid from "./styles/LinksGrid";
import { Subtitle, Title } from "./styles/Typography";

const Extra = () => {
  return (
    <Container>
      <Title>
        <Reveal>RPG stuff</Reveal>
      </Title>
      <LinksGrid>
        <div>
          <a href="https://generanomi.maletta.space/">generanomi</a>, (italian)
          name generator for spaghetti fantasy settings
        </div>

        <div>
          <a href="https://ttg.maletta.space/">ttg</a>, (italian) character
          generator for Terror Target Gemini
        </div>

        <div>
          <a href="https://yokai.maletta.space/">yokai</a>, (italian) character
          generator for Yokai Hunters Society
        </div>

        <div>
          <a href="https://pergamene.oicn.icu/">pergamene gialle</a>, reference
          list for members of the OSR italian community
        </div>

        <div>
          <a href="https://cairn.maletta.space/">cairn</a>, (italian) character
          generator for Cairn
        </div>

        <div>
          <a href="https://frontier-scum.maletta.space/">frontier scum</a>,
          (english) cowboys generator for Frontier Scum
        </div>
      </LinksGrid>

      <Title>
        <Reveal>Other stuff</Reveal>
      </Title>
      <LinksGrid>
        <div>
          <a href="https://lostintokyo.maletta.space/">lost in tokyo</a>,
          (italian) collection of places in Tokyo
        </div>

        <div>
          <a href="https://rainbow.maletta.space/">rainbows</a>, put some colors
          in your MS Teams chats
        </div>
      </LinksGrid>

      <Subtitle>
        <Link to="/">back to /</Link>
      </Subtitle>
    </Container>
  );
};

export default Extra;
