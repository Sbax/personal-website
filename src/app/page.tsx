import { LatestPosts } from "@/components/LatestPosts";
import { Reveal } from "@/components/Reveal";
import { getAge } from "@/lib/getAge";
import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400; // one day

export const metadata: Metadata = {
  openGraph: {
    type: "website",
  },
};

export default function Home() {
  const age = getAge();

  return (
    <section className="flex flex-col flex-1 justify-center items-center space-y-2 text-center">
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
          <a className="link link-primary" href="https://github.com/sbax">
            <Reveal>Github</Reveal>
          </a>
          ,{" "}
          <a className="link link-primary" href="https://sbax.itch.io/">
            <Reveal>Itch</Reveal>
          </a>
          ,{" "}
          <a
            className="link link-primary"
            href="https://www.instagram.com/heysbax/"
          >
            <Reveal>Instagram</Reveal>
          </a>
          ,{" "}
          <a
            className="link link-primary"
            href="https://www.linkedin.com/in/matteo-bacci-22418387"
          >
            <Reveal>LinkedIn</Reveal>
          </a>
          , or{" "}
          <a className="link link-primary" href="http://telegram.me/sbaxxx">
            <Reveal>Telegram</Reveal>
          </a>
        </p>
      </h2>

      <section className="gap-4 grid md:grid-cols-2 text-left">
        <section className="flex flex-col justify-between space-y-4">
          <h2>Some of my projects</h2>
          <section className="flex flex-col flex-1 justify-between text-left">
            <article>
              <a
                className="link link-primary"
                href="https://officinacoboldi.it/"
              >
                officina coboldi
              </a>
              , for the rpg organization I'm part of
            </article>

            <article>
              <a
                className="link link-primary"
                href="https://baccanale.maletta.space/"
              >
                baccanale
              </a>
              , to store and search menus in a yearly local festival
            </article>

            <article>
              <a
                className="link link-primary"
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

        <section className="flex flex-col justify-between space-y-4">
          <h2>Some of my blog posts</h2>
          <section className="flex flex-col flex-1 justify-between text-left">
            <LatestPosts count={3} />

            <h3 className="text-lg">
              <Link href="/posts" className="link link-primary-bg">
                see more /posts
              </Link>
            </h3>
          </section>
        </section>
      </section>
    </section>
  );
}
