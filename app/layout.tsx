import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ody Frans | Portfolio",
  description: "Personal portfolio website built with Next.js, TailwindCSS, and Framer Motion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-100`}>
        <Navbar />
        <main className="min-h-screen px-6 sm:px-12 py-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
