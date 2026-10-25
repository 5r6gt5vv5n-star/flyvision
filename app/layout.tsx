import type { Metadata } from "next";
import "@fontsource/akt";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Flyvision",
  description: "Flyvision Song Contest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}