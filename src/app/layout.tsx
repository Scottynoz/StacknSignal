import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stacknsignal.com"),
  title: {
    default: "Stack N Signal",
    template: "%s · Stack N Signal",
  },
  description:
    "AI tools, workflows, and weekly AI updates for creators. No hype—just what helps you ship faster.",
  applicationName: "Stack N Signal",
  openGraph: {
    title: "Stack N Signal",
    description:
      "AI tools, workflows, and weekly AI updates for creators. No hype—just what helps you ship faster.",
    url: "https://stacknsignal.com",
    siteName: "Stack N Signal",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stack N Signal",
    description:
      "AI tools, workflows, and weekly AI updates for creators. No hype—just what helps you ship faster.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
