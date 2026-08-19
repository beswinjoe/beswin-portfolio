import type { Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import "./globals.css";

const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Beswin Joe — AI & Data Science",
  description: "AI & Data Science developer, product builder, and speaker exploring artificial intelligence, software, data, and the web.",
  openGraph: {
    title: "Beswin Joe — AI & Data Science",
    description: "AI & Data Science developer, product builder, and speaker exploring artificial intelligence, software, data, and the web.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beswin Joe — AI & Data Science",
    description: "AI & Data Science developer, product builder, and speaker exploring artificial intelligence, software, data, and the web.",
    creator: "@beswinjoee",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${garamond.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-serif selection:bg-accent-burgundy selection:text-[#F9F6F0]">
        <NavBar />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
