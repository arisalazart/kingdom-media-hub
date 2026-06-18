import "./globals.css";

/**
 * Root layout is intentionally minimal — the <html>/<body> shell lives in
 * app/[locale]/layout.tsx so the lang attribute and fonts follow the locale.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
