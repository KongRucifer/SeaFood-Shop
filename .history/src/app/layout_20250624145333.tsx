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
  description:
    "ຮ້ານຂາຍອາຫານທະເລອອນໄລ ໜ້າທຳອິດ ລວມອາຫານທະເລຫຼາກຫຼາຍ ເຊັ່ນ ປາ, ປູ, ກຸ້ງ, ຊີວິດ...",
  keywords:
    "ອາຫານທະເລ ອອນໄລ, ຮ້ານຂາຍອາຫານທະເລ, ສັ່ງອາຫານທະເລ, ອາຫານທະເລສົ່ງໄວ",
  authors: [{ name: "Super" }],
  publisher: "Your Company",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "ຮ້ານຂາຍອາຫານທະເລ - ໜ້າທຳອິດ | FoodShop",
    description:
      "ສັ່ງຊື້ອາຫານທະເລ ລາຄາຖືກ ສົ່ງໄວ ທັນໃຈ ມີບໍລິການໂອນເງີນ ປາຍທາງ",
    url: "http://localhost:3000/",
    siteName: "BeautyShop",
    locale: "th_TH",
    type: "website",
    images: [
      {
        url: "http://localhost:3000/images/seafood.jpg",
        width: 1200,
        height: 630,
        alt: "Food Shop Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ຮ້ານຂາຍອາຫານທະເລ - ໜ້າທຳອິດ | FoodShop",
    description:
      "ສັ່ງຊື້ອາຫານທະເລ ລາຄາຖືກ ສົ່ງໄວ ທັນໃຈ ມີບໍລິການໂອນເງີນ ປາຍທາງ",
    images: ["http://localhost:3000/images/seafood2.jpeg"],
  },
  alternates: {
    canonical: "https://yourdomain.com/",
  },
}

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
