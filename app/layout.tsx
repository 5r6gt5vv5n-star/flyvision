import type { Metadata } from “next”;
import “@fontsource/akt”;
import “./globals.css”;
import Header from “@/components/Header”;

export const metadata: Metadata = {
title: “Flyvision”,
description: “Flyvision Song Contest”,
icons: {
icon: “/heart-logo.png”,
apple: “/heart-logo.png”,
},
};

export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {
return (
{children}
);
}
