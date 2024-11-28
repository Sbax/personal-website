import { PostCard } from "@/components/PostCard";
import { getPosts } from "@/lib/posts";

export const LatestPosts = async ({ count }: { count: number }) => {
  const posts = (await getPosts())
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);

  return (
    <section className="flex flex-col justify-between">
      {posts.map((post) => (
        <PostCard key={post.slug} {...post} />
      ))}
    </section>
  );
};
