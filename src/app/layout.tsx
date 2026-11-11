import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const serifDisplay = Source_Serif_4({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-serif-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Obsidian - The all-in-one platform for financial advisers",
  description:
    "AI-powered practice management available now - with integrated custody and execution launching soon.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${serifDisplay.variable}`}>
      <body>{children}</body>
    </html>
  );
}
