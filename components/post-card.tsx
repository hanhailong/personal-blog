import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

export function PostCard({ post }: { post: PostMeta }) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="group">
      <Link href={`/posts/${post.slug}`} className="block">
        <time
          dateTime={post.date}
          className="text-sm text-zinc-500 dark:text-zinc-400"
        >
          {formattedDate}
        </time>
        <h2 className="mt-1 text-xl font-semibold group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
          {post.title}
        </h2>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {post.excerpt}
        </p>
        {post.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </Link>
    </article>
  );
}
