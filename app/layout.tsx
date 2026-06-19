import type { Metadata, Viewport } from "next";
import { Inter, Bebas_Neue, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const bebas = Bebas_Neue({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const mono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DQ Blendz | Master Barber — Vaughan, ON",
  description:
    "DQ Blendz — Vaughan's underground barber. Sharp fades, clean lineups, and blends trusted by pro athletes. Book your chair on Booksy.",
  openGraph: {
    title: "DQ Blendz | Master Barber — Vaughan, ON",
    description:
      "Sharp fades. Clean lineups. Trusted by pros. Book your chair today.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0e0d0b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bebas.variable} ${mono.variable} h-full`}
    >
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
