import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "BYU Labs | Sebastián Iturralde",
  description: "Full-Stack Developer portfolio, course labs, and side projects by Sebastián Iturralde.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jetbrainsMono.variable} font-mono bg-[#0d1117] text-[#e6edf3] min-h-screen flex flex-col justify-between antialiased`}>
        <Header />
        <main className="container mx-auto px-4 pb-16 flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}