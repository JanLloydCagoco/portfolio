import type { Metadata } from "next";
import { Familjen_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import AppShell from "@/components/layout/AppShell";

const grotesk = Familjen_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-grotesk",
  display: "swap",
});

const geistPixel = localFont({
  src: "../../public/fonts/DepartureMono-Regular.woff2",
  variable: "--font-pixel",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jan Lloyd Cagoco — Product Designer & Associate Developer",
  description:
    "Portfolio of Jan Lloyd Cagoco, Associate Developer at LGU Baggao (Baggao, Cagayan, PH). Building public digital tools, calm typography, and performant web systems.",
  keywords: [
    "product designer",
    "associate developer",
    "UI/UX",
    "portfolio",
    "web design",
    "Baggao",
    "Cagayan",
  ],
  authors: [{ name: "Jan Lloyd Cagoco" }],
  openGraph: {
    title: "Jan Lloyd Cagoco — Product Designer & Associate Developer",
    description:
      "Portfolio of Jan Lloyd Cagoco, Associate Developer at LGU Baggao (Baggao, Cagayan, PH).",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${grotesk.variable} ${geistPixel.variable}`}
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
          <AppShell>{children}</AppShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
