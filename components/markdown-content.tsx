export function MarkdownContent({ html }: { html: string }) {
  return (
    <article
      className="prose max-w-none
        prose-headings:font-semibold prose-headings:tracking-tight
        prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-foreground
        prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-foreground
        prose-p:leading-relaxed prose-p:text-foreground
        prose-code:before:content-none prose-code:after:content-none
        prose-code:bg-code-bg
        prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
        prose-code:text-sm prose-code:text-accent
        prose-pre:bg-pre-bg
        prose-pre:border prose-pre:border-pre-border
        prose-li:marker:text-accent
        prose-a:text-link prose-a:no-underline hover:prose-a:underline
        prose-blockquote:border-l-blockquote-border
        prose-blockquote:text-blockquote-text
        prose-blockquote:bg-code-bg prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-lg
        prose-img:rounded-lg
        prose-strong:text-foreground
        prose-th:text-foreground prose-td:text-muted
        prose-hr:border-border
      "
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
