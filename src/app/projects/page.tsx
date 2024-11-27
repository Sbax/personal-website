import { Reveal } from "@/components/Reveal";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects | Matteo Bacci",
  description: "See my personal project portfolio.",
};

export default function Projects() {
  return (
    <section className="flex flex-col justify-center items-center h-screen">
      <h1 className="mb-2 font-bold text-2xl text-primary">
        <Reveal>RPG stuff</Reveal>
      </h1>

      <section className="gap-2 grid md:grid-cols-2 mb-8">
        <article>
          <a
            className="link link-primary"
            href="https://generanomi.maletta.space/"
          >
            generanomi
          </a>
          , (italian) name generator for spaghetti fantasy settings
        </article>

        <article>
          <a className="link link-primary" href="https://ttg.maletta.space/">
            ttg
          </a>
          , (italian) character generator for Terror Target Gemini
        </article>

        <article>
          <a className="link link-primary" href="https://yokai.maletta.space/">
            yokai
          </a>
          , (italian) character generator for Yokai Hunters Society
        </article>

        <article>
          <a className="link link-primary" href="https://pergamene.oicn.icu/">
            pergamene gialle
          </a>
          , reference list for members of the OSR italian community
        </article>

        <article>
          <a className="link link-primary" href="https://cairn.maletta.space/">
            cairn
          </a>
          , (italian) character generator for Cairn
        </article>

        <article>
          <a
            className="link link-primary"
            href="https://frontier-scum.maletta.space/"
          >
            frontier scum
          </a>
          , (english) cowboys generator for Frontier Scum
        </article>
      </section>

      <h1 className="mb-2 font-bold text-2xl text-primary">
        <Reveal>Other stuff</Reveal>
      </h1>

      <section className="gap-2 grid md:grid-cols-2 mb-8">
        <article>
          <a
            className="link link-primary"
            href="https://lostintokyo.maletta.space/"
          >
            lost in tokyo
          </a>
          , (italian) collection of places in Tokyo
        </article>

        <article>
          <a
            className="link link-primary"
            href="https://rainbow.maletta.space/"
          >
            rainbows
          </a>
          , put some colors in your MS Teams chats
        </article>
      </section>

      <h3 className="text-lg">
        <Link href="/" className="link link-primary-bg">
          back to /
        </Link>
      </h3>
    </section>
  );
}
