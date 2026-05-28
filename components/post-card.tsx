import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

export function PostCard({ post }: { post: PostMeta }) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="group rounded-xl border border-border bg-card-bg p-6 transition-all hover:shadow-md hover:shadow-accent/5 hover:border-accent/30">
      <Link href={`/posts/${post.slug}`} className="block">
        <time
          dateTime={post.date}
          className="text-sm text-muted"
        >
          {formattedDate}
        </time>
        <h2 className="mt-1 text-xl font-semibold group-hover:text-accent transition-colors">
          {post.title}
        </h2>
        <p className="mt-2 text-muted leading-relaxed">
          {post.excerpt}
        </p>
        {post.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded-full bg-tag-bg text-tag-text"
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
