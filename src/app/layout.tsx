import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import GoogleAnalytics from '@/components/GoogleAnalytics';

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "700", "900"] });

export const metadata: Metadata = {
  title: "CreatorLLM's Blog",
  description: "A personal blog created with Next.js",
  openGraph: {
    title: 'CreatorLLM - Building 12 startups in 12 months',
    description: 'Follow my journey of building 12 startups in 12 months, sharing insights, challenges, and learnings along the way.',
    url: 'https://creatorllm.blog',
    siteName: 'CreatorLLM',
    images: [
      {
        url: 'https://creatorllm.blog/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CreatorLLM - Building 12 startups in 12 months',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={montserrat.className + " bg-gradient-to-br from-indigo-100 to-blue-200 transition-colors duration-500 min-h-screen"}>
        <div className="min-h-screen">
          <Header />
          <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {children}
          </main>
          <GoogleAnalytics GA_MEASUREMENT_ID="G-V5PFCQX260" />
        </div>
      </body>
    </html>
  );
}
