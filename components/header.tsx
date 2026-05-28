import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur">
      <div className="max-w-3xl mx-auto flex items-center justify-between px-6 h-14">
        <Link
          href="/"
          className="font-semibold text-lg tracking-tight flex items-center gap-2 hover:text-accent transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 text-accent"
          >
            <path d="M12 2C8 6 2 10 2 14c0 4.4 4.5 8 10 8s10-3.6 10-8c0-4-6-8-10-12z" />
            <path d="M12 4c-2 2.5-6 5-6 8 0 3.3 2.7 6 6 6s6-2.7 6-6c0-3-4-5.5-6-8z" />
          </svg>
          韩海龙 Blog
        </Link>
        <nav className="flex items-center gap-4">
          <Link
            href="/"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            Posts
          </Link>
          <a
            href="/feed.xml"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            RSS
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
