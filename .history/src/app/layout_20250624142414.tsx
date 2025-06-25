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
  title: "ຮ້ານຂາຍອາຫານທະເລ - ໜ້າທຳອິດ | FoodShop",
  description: "ຮ້ານຂາຍອາຫານທະເລອອນໄລ ໜ້າທຳອິດ ລວມອາຫານທະເລຫຼາກຫຼາຍ...",
  keywords: "ອາຫານທະເລ, ອອນໄລນ໌, ສັ່ງອາຫານ",
  openGraph: {
    title: "ຮ້ານຂາຍອາຫານທະເລ - ໜ້າທຳອິດ | FoodShop",
    description: "ສັ່ງອາຫານທະເລລາຄາຖືກ ສົ່ງໄວ ມີບໍລິການໂອນເງິນ ປາຍທາງ",
    images: [
      {
        url: "http://localhost:3000/images/seafood.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  canonical: "http://localhost:3000/",
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
