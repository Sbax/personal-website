import { getPosts } from "@/lib/posts";
import { Metadata } from "next";
import Link from "next/link";

interface PostsPageProps {
  searchParams: Promise<{
    tag?: string;
    page?: string;
  }>;
}

const POSTS_PER_PAGE = 10;

export const metadata: Metadata = {
  title: "Blog | Matteo Bacci",
  description: "A few posts I've written",
};

export default async function PostsPage({ searchParams }: PostsPageProps) {
  const resolvedSearchParams = await searchParams;
  const currentTag = resolvedSearchParams?.tag || null;
  const currentPage = parseInt(resolvedSearchParams?.page || "1", 10);

  const allPosts = await getPosts();

  const filteredPosts = currentTag
    ? allPosts.filter((post) => post.tags.includes(currentTag))
    : allPosts;

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <section className="flex flex-col space-y-2">
      <section className="gap-6 grid md:grid-cols-2">
        {paginatedPosts.map((post) => (
          <article key={post.slug}>
            <Link href={`/posts/${post.slug}`}>
              <h2 className="font-bold text-lg link link-primary">
                {post.title}
              </h2>
            </Link>
            <p className="text-gray-500 text-sm">{post.date}</p>
            <div className="space-x-2">
              {post.tags.map((tag) => (
                <span className="text-xs" key={tag}>
                  #{tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>

      {totalPages > 1 && (
        <section className="flex justify-between items-center">
          <Link
            href={{
              pathname: "/posts",
              query: { tag: currentTag, page: Math.max(currentPage - 1, 1) },
            }}
            className={`link link-primary-bg ${
              currentPage === 1 ? "btn-disabled" : ""
            }`}
          >
            previous
          </Link>
          <div>
            Page {currentPage} of {totalPages}
          </div>
          <Link
            href={{
              pathname: "/posts",
              query: {
                tag: currentTag,
                page: Math.min(currentPage + 1, totalPages),
              },
            }}
            className={`link link-primary-bg ${
              currentPage === totalPages ? "btn-disabled" : ""
            }`}
          >
            next
          </Link>
        </section>
      )}
    </section>
  );
}
