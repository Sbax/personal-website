import { Reveal } from "@/components/Reveal";
import { loadPostData } from "@/lib/posts";
import { marked } from "marked";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await loadPostData(slug);

  return {
    title: post.title,
    description: `Read this post titled "${post.title}" published on ${post.date}.`,
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;

  try {
    const post = await loadPostData(slug);

    const { title, date, tags, content } = post;

    return (
      <section className="space-y-4 max-w-xl">
        <section className="flex justify-between h-fit">
          <Link className="link link-primary-bg" href="/posts">
            see all /posts
          </Link>

          {process.env.NODE_ENV === "development" && (
            <Link className="link link-neutral" href={`/editor/${slug}`}>
              /editor
            </Link>
          )}
        </section>

        <h1 className="font-bold text-2xl text-primary md:text-4xl">
          <Reveal>{title}</Reveal>
        </h1>

        <section className="flex justify-between">
          <div>{date}</div>
          <div className="space-x-2">
            {tags.map((tag) => (
              <Link
                className="link link-neutral"
                href={`/posts?tag=${tag}`}
                key={tag}
              >
                #{tag}
              </Link>
            ))}
          </div>
        </section>

        <section
          lang="it"
          className="prose"
          dangerouslySetInnerHTML={{ __html: marked(content) }}
        />
      </section>
    );
  } catch {
    notFound();
  }
}
