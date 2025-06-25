import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from '@/app/modules/home/views/page'
import { Noto_Sans_Lao } from 'next/font/google';
 const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const notoSansLao = Noto_Sans_Lao({
  subsets: ['lao'],
  weight: ['400', '700'], // Optional: add more weights if needed
  variable: '--font-noto-sans-lao',
  display: 'swap',
});
export const metadata: Metadata = {
  title: "ຮ້ານຂາຍອາຫານທະເລ - ໜ້າທຳອິດ | Seafood Shop",
  description:
    "ຮ້ານຂາຍອາຫານທະເລອອນໄລ ໜ້າທຳອິດ ລວມອາຫານທະເລຫຼາກຫຼາຍ ເຊັ່ນ ປາ, ປູ, ກຸ້ງ ແລະ ອາຫານທະເລອື່ນໆ ສາມາດສັ່ງຊື້ ແລະ ສັ່ງເຂົ້າໃນເວັບໄຊ ສາມາດເຮັດ ການໂອນເງິນ",
  keywords:
    "ອາຫານທະເລ ອອນໄລ, ຮ້ານຂາຍອາຫານທະເລ, ສັ່ງອາຫານທະເລ, ອາຫານທະເລສົ່ງໄວ",
  authors: [{ name: "kong mong thao" }],
  publisher: "Super Shop SeaFood",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "ຮ້ານຂາຍອາຫານທະເລ - ໜ້າທຳອິດ | Seafood Shop",
    description:
      "ສັ່ງຊື້ອາຫານທະເລ ລາຄາຖືກ ສົ່ງໄວ ທັນໃຈ ມີບໍລິການໂອນເງີນ ປາຍທາງ",
    url: "http://localhost:3000/images/fish.jpeg",
    siteName: "Seafood Shop",
    locale: "th_TH",
    type: "website",
    images: [
      {
        url: "http://localhost:3000/images/myshopSeafood.jpeg",
        width: 1200,
        height: 630,
        alt: "Food Shop Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ຮ້ານຂາຍອາຫານທະເລ - ໜ້າທຳອິດ | Seafood Shop",
    description:
      "ສັ່ງຊື້ອາຫານທະເລ ລາຄາຖືກ ສົ່ງໄວ ທັນໃຈ ມີບໍລິການໂອນເງີນ ປາຍທາງ",
    images: ["http://localhost:3000/images/seafood2.jpeg"],
  },
  alternates: {
    canonical: "https://yourdomain.com/",
  },
  // viewport: 'width=device-width, initial-scale=1',
}
export const viewport = {
  width: 'device-width',
  initialScale: 1,
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="lo" className={notoSansLao.variable}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Home/>
        <Footer />
      </body>
    </html>
  );
}
