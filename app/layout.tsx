import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const siteTitle = "Market Place Convenience | Convenience Store Dallas";
const siteDescription =
  "Market Place Convenience — fresh snacks, cold drinks, and daily essentials on McCallum Blvd in Dallas. Open early to late for your neighborhood essentials.";

export const metadata: Metadata = {
  metadataBase: new URL("https://marketplaceconvenience.example.com"),
  title: {
    default: siteTitle,
    template: "%s | Market Place Convenience",
  },
  description: siteDescription,
  keywords: [
    "Market Place Convenience",
    "Convenience Store Dallas",
    "Dallas convenience store",
    "McCallum Blvd",
    "snacks Dallas",
    "cold drinks Dallas",
  ],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        {children}
      </body>
    </html>
  );
}
