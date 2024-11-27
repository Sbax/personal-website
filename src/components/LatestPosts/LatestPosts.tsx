import { getPosts } from "@/lib/posts";
import Link from "next/link";

export const LatestPosts = async ({ count }: { count: number }) => {
  const posts = (await getPosts())
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);

  return posts.map((post) => (
    <article key={post.slug} className="h-full">
      <Link className="link link-primary" href={`/posts/${post.slug}`}>
        <h3>{post.title}</h3>
      </Link>
    </article>
  ));
};
