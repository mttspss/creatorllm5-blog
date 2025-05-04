import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ThemeToggle from "@/components/ThemeToggle";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "700", "900"] });

export const metadata: Metadata = {
  title: "creatorLLM's Blog",
  description: "A personal blog created with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={montserrat.className + " bg-gradient-to-br from-indigo-100 to-blue-200 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500 min-h-screen"}>
        <div className="min-h-screen">
          <Header />
          <div className="fixed top-4 right-4 z-50">
            <ThemeToggle />
          </div>
          <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
