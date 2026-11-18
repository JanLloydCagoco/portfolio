import type { Metadata } from "next";
import { Familjen_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import "@/frontend/styles/globals.css";
import { ThemeProvider } from "@/frontend/providers/ThemeProvider";
import { siteUrl } from "@/data/site";
import ClickFeedbackProvider from "@/frontend/providers/ClickFeedbackProvider";
import AppShell from "@/frontend/components/layout/AppShell";

const grotesk = Familjen_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-grotesk",
  display: "swap",
});

const departureMono = localFont({
  src: "../../public/fonts/DepartureMono-Regular.woff2",
  variable: "--font-pixel",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Jan Lloyd Cagoco — Full-Stack Developer",
  description:
    "Portfolio of Jan Lloyd Cagoco, Full-Stack Developer. Building modern web & mobile applications with AI-driven development.",
  keywords: [
    "full-stack developer",
    "web development",
    "mobile apps",
    "AI-driven development",
    "portfolio",
    "React",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Jan Lloyd Cagoco" }],
  openGraph: {
    title: "Jan Lloyd Cagoco — Full-Stack Developer",
    description:
      "Full-stack developer building modern web & mobile apps with AI-driven development.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${grotesk.variable} ${departureMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var t = localStorage.getItem('theme') || 'system';
                  var isDark = t === 'dark' || (t === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
                  if (isDark) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <ClickFeedbackProvider>
            <AppShell>{children}</AppShell>
          </ClickFeedbackProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
