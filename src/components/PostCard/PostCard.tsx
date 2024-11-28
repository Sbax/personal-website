import { Post } from "@/lib/posts";
import Link from "next/link";

export const PostCard = ({ slug, date, language, tags, title }: Post) => {
  return (
    <article>
      <Link href={`/posts/${slug}`}>
        <h2 className="font-bold text-md link link-primary">{title}</h2>
      </Link>
      <p className="text-gray-500 text-sm">{date}</p>
      <div className="space-x-2">
        {tags.map((tag) => (
          <Link
            className="text-xs link link-neutral"
            key={tag}
            href={`/posts?tag=${tag}`}
          >
            #{tag}
          </Link>
        ))}

        <Link
          className="text-xs link link-neutral"
          href={`/posts?tag=${language}`}
        >
          #{language}
        </Link>
      </div>
    </article>
  );
};
