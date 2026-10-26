import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; // ← 1. Импортируем наш хедер

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Flyvision",
  description: "Flyvision Song Contest",
  icons: {
    icon: "/images/heart-logo.png",
    shortcut: "/images/heart-logo.png",
    apple: "/images/heart-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Header /> {/* ← 2. Вставляем хедер перед контентом страницы */}
        {children}
      </body>
    </html>
  );
}
