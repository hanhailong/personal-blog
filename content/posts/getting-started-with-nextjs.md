---
title: "Getting Started with Next.js"
date: "2026-05-25"
excerpt: "A quick overview of Next.js App Router and why it's a great choice for modern web apps."
tags: ["nextjs", "react", "web-dev"]
---

Next.js has become one of the most popular React frameworks. With the App Router, it offers a powerful way to build full-stack applications.

## Key Features

### Server Components by Default

In Next.js App Router, components are **Server Components** by default. This means:

- They run on the server, not in the browser
- Zero client-side JavaScript for static content
- Direct access to databases, filesystems, and backend APIs

```typescript
// This runs on the server — no JS sent to the client
async function BlogList() {
  const posts = await db.query("SELECT * FROM posts");
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
```

### File-Based Routing

Routes are defined by the filesystem:

```
app/
├── page.tsx          → /
├── about/page.tsx    → /about
└── posts/[slug]/
    └── page.tsx      → /posts/hello-world
```

### Static and Dynamic

You can choose the rendering strategy per route:

- **Static** (default) — built at compile time
- **Dynamic** — rendered per request
- **ISR** — revalidated periodically

## Why I Chose It

For a personal blog, Next.js gives me:

1. **Static generation** — pages are pre-built, fast to serve
2. **Markdown support** — parse `.md` files at build time
3. **Easy deployment** — one-click deploy to Vercel
4. **Great DX** — TypeScript, hot reload, ESLint built-in

The combination of Markdown for content and Next.js for rendering is hard to beat.
