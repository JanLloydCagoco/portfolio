import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import SpaceBackground from "@/components/ui/SpaceBackground";

export const metadata: Metadata = {
  title: "Jan Lloyd Cagoco — Product Designer",
  description:
    "Portfolio of Jan Lloyd Cagoco, a product designer focused on purposeful interfaces and captivating design.",
  keywords: ["product designer", "UI/UX", "portfolio", "web design"],
  authors: [{ name: "Jan Lloyd Cagoco" }],
  openGraph: {
    title: "Jan Lloyd Cagoco — Product Designer",
    description:
      "Portfolio of Jan Lloyd Cagoco, a product designer focused on purposeful interfaces and captivating design.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <SpaceBackground />
          <div className="min-h-screen flex flex-col items-center px-2 py-3 sm:px-4 sm:py-6 gap-3 sm:gap-4 relative z-10">
            <div className="sticky top-3 sm:top-4 z-50 w-full max-w-[560px]">
              <Navbar />
            </div>

            <main className="w-full max-w-[560px] flex flex-col flex-1 gap-3">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}