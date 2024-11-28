import { Reveal } from "@/components/Reveal";
import { Cousine } from "@/fonts";
import { Post, loadPostData } from "@/lib/posts";
import { marked } from "marked";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const { date, language, tags, title, summary } = await loadPostData(slug);

  const localeMap = new Map<Post["language"], string>([
    ["italian", "it_IT"],
    ["english", "en_GB"],
  ]);

  const locale = localeMap.get(language);

  const description =
    summary || `Read this post titled "${title}" published on ${date}.`;

  return {
    title,
    description,
    keywords: [...tags],
    openGraph: {
      locale,
      type: "article",
      title,
      description,
      url: `/posts/${slug}`,
    },
    alternates: {
      canonical: `/posts/${slug}`,
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;

  try {
    const post = await loadPostData(slug);

    const { date, tags, language, title, content } = post;

    const languageMap = new Map<Post["language"], string>([
      ["italian", "it"],
      ["english", "en"],
    ]);

    const lang = languageMap.get(language);

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
          lang={lang}
          className={`prose ${Cousine.className}`}
          dangerouslySetInnerHTML={{ __html: marked(content) }}
        />
      </section>
    );
  } catch {
    notFound();
  }
}
