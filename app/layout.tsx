import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DQ Blendz | Master Barber & Fresh Fades",
  description:
    "DQ Blendz — where precision meets style. Browse the portfolio and book your next haircut, fade, or beard trim on Booksy.",
  openGraph: {
    title: "DQ Blendz | Master Barber & Fresh Fades",
    description:
      "Precision cuts. Fresh fades. Sharp lineups. Book your appointment today.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0c0b09",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
