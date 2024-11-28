import { PostCard } from "@/components/PostCard";
import { Reveal } from "@/components/Reveal";
import { getPosts } from "@/lib/posts";
import { Metadata } from "next";
import Link from "next/link";

interface PostsPageProps {
  searchParams: Promise<{
    tag?: string;
    page?: string;
  }>;
}

const POSTS_PER_PAGE = 8;

const title = "Blog";
const description =
  "ramblings on OSR, code, and the chaos in between – a space for scattered thoughts, half-formed ideas, and the occasional breakthrough";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: "/posts",
  },
  alternates: {
    canonical: "/posts",
  },
};

export default async function PostsPage({ searchParams }: PostsPageProps) {
  const resolvedSearchParams = await searchParams;
  const currentTag = resolvedSearchParams?.tag || null;
  const currentPage = parseInt(resolvedSearchParams?.page || "1", 10);

  const allPosts = await getPosts();

  const filteredPosts = currentTag
    ? allPosts.filter(
        (post) => post.tags.includes(currentTag) || post.language === currentTag
      )
    : allPosts;

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <section className="flex flex-col flex-1 space-y-2">
      <header className="space-x-4 my-4">
        <Link href="/" className="link link-primary-bg">
          go to /
        </Link>

        {Boolean(currentTag) && (
          <Link href="/posts" className="link link-primary-bg">
            see all /posts
          </Link>
        )}
      </header>

      <p className="max-w-md">{description}</p>
      <h1 className="mt-4 text-2xl text-primary">
        {currentTag ? (
          <>
            posts tagged as{" "}
            <span className="text-primary underline">{currentTag}</span>{" "}
          </>
        ) : (
          <Reveal>Posts</Reveal>
        )}
      </h1>

      <section className="flex-1 gap-6 grid md:grid-cols-2">
        {paginatedPosts.map((post) => (
          <PostCard key={post.slug} {...post} />
        ))}
      </section>

      {totalPages > 1 && (
        <section className="grid grid-cols-[auto,1fr,auto]">
          <Link
            href={{
              pathname: "/posts",
              query: {
                tag: currentTag,
                page: Math.max(currentPage - 1, 1),
              },
            }}
            className="link link-primary"
          >
            previous
          </Link>

          <div className="flex justify-center col-start-2">
            {currentPage}/{totalPages}
          </div>
          <Link
            href={{
              pathname: "/posts",
              query: {
                tag: currentTag,
                page: Math.min(currentPage + 1, totalPages),
              },
            }}
            className="link link-primary"
          >
            next
          </Link>
        </section>
      )}
    </section>
  );
}
