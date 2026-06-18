import Link from "next/link";

/**
 * Global 404. Renders its own html/body because the root layout is a
 * passthrough (the locale layout normally provides the shell).
 */
export default function NotFound() {
  return (
    <html lang="en">
      <body className="min-h-dvh">
        <main className="flex min-h-dvh flex-col items-center justify-center gap-6 px-6 text-center">
          <p className="eyebrow">404</p>
          <h1 className="font-display text-4xl font-medium tracking-tight text-cloud">
            This page took a different path.
          </h1>
          <Link
            href="/en"
            className="inline-flex h-11 items-center rounded-full bg-sovereign px-6 text-sm font-medium text-white transition-colors hover:bg-sovereign-soft"
          >
            Back to Kingdom Media Hub
          </Link>
        </main>
      </body>
    </html>
  );
}
