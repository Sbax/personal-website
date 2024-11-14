import Reveal from "@/components/Reveal";
import getAge from "@/lib/getAge";
import Link from "next/link";

export default function Home() {
  const age = getAge();

  return (
    <section className="flex flex-col justify-center items-center space-y-2 h-screen text-center">
      <h1 className="font-bold text-3xl text-primary">
        <Reveal>Matteo Bacci</Reveal>
      </h1>

      <h2>
        <p>I'm a {age}yo developer from Imola, Italy</p>
        <p>
          <Reveal>
            I love movies, obscure music and games, expecially tabletop rpgs
          </Reveal>
        </p>
      </h2>
      <h2>
        <p>
          You can find me on{" "}
          <a className="link link-primary-bg" href="https://github.com/sbax">
            <Reveal>Github</Reveal>
          </a>
          ,{" "}
          <a className="link link-primary-bg" href="https://sbax.itch.io/">
            <Reveal>Itch</Reveal>
          </a>
          ,{" "}
          <a
            className="link link-primary-bg"
            href="https://www.instagram.com/heysbax/"
          >
            <Reveal>Instagram</Reveal>
          </a>
          ,{" "}
          <a
            className="link link-primary-bg"
            href="https://www.linkedin.com/in/matteo-bacci-22418387"
          >
            <Reveal>LinkedIn</Reveal>
          </a>
          , or{" "}
          <a className="link link-primary-bg" href="http://telegram.me/sbaxxx">
            <Reveal>Telegram</Reveal>
          </a>
        </p>
      </h2>
      <h2>
        <p>Some of my projects below</p>
      </h2>

      <section className="text-left">
        <article>
          <a
            className="link link-primary-bg"
            href="https://officinacoboldi.it/"
          >
            officina coboldi
          </a>
          , for the rpg organization I'm part of
        </article>

        <article>
          <a
            className="link link-primary-bg"
            href="https://baccanale.maletta.space/"
          >
            baccanale
          </a>
          , to store and search menus in a yearly local festival
        </article>

        <article>
          <a
            className="link link-primary-bg"
            href="https://generanomi.maletta.space/"
          >
            generanomi
          </a>
          , an (italian) name generator for spaghetti fantasy settings
        </article>
      </section>

      <h3 className="text-lg">
        <Link href="/projects" className="link link-primary-bg">
          see more /projects
        </Link>
      </h3>
    </section>
  );
}
