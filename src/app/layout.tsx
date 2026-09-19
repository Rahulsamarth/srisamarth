import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/layout/LenisProvider";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sri Samarth Traders | Premium UPVC Roofing & Integrated Solar Design",
  description:
    "We engineer high-performance UPVC roofing structures and integrate custom solar energy systems under a single accountable warranty. Complete architectural roofing and solar installation services.",
  keywords: [
    "UPVC roofing sheets",
    "solar panel installation",
    "integrated roofing solar",
    "structural roof contractor",
    "roof architecture",
    "solar payback calculator",
    "industrial roofing",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${ibmPlexMono.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-chalk-50 text-ink-700 font-body flex flex-col selection:bg-lemon-400 selection:text-charcoal-950">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
