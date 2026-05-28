export function MarkdownContent({ html }: { html: string }) {
  return (
    <article
      className="prose prose-zinc dark:prose-invert max-w-none
        prose-headings:font-semibold prose-headings:tracking-tight
        prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
        prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
        prose-p:leading-relaxed
        prose-code:before:content-none prose-code:after:content-none
        prose-code:bg-zinc-100 dark:prose-code:bg-zinc-800
        prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
        prose-code:text-sm
        prose-pre:bg-zinc-950 dark:prose-pre:bg-zinc-900
        prose-pre:border prose-pre:border-zinc-200 dark:prose-pre:border-zinc-800
        prose-li:marker:text-zinc-400
        prose-a:text-blue-600 dark:prose-a:text-blue-400
        prose-blockquote:border-l-zinc-300 dark:prose-blockquote:border-l-zinc-600
        prose-blockquote:text-zinc-600 dark:prose-blockquote:text-zinc-400
        prose-img:rounded-lg
      "
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
