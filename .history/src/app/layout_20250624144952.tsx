import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "หน้าแรก",
  description: "เว็บไซต์ของฉัน",
  authors: [{ name: "Your Name" }],
  robots: "index, follow",
  openGraph: {
    title: "หน้าแรก",
    description: "เว็บไซต์ของฉัน",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 800,
        height: 600,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://yourdomain.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://yourdomain.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
