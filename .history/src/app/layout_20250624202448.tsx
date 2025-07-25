import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
 const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ຮ້ານຂາຍອາຫານທະເລ - ໜ້າທຳອິດ | Seafood Shop",
  description:
    "ຮ້ານຂາຍອາຫານທະເລອອນໄລ ໜ້າທຳອິດ ລວມອາຫານທະເລຫຼາກຫຼາຍ ເຊັ່ນ ປາ, ປູ, ກຸ້ງ ແລະ ອາຫານທະເລອື່ນໆ ສາມາດສັ່ງເຊົ້າ ແລະ ສັ່ງເຂົ້າໃນເວັບໄຊ ສາມາດເຮັດ ການໂອນເງິນ",
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
  viewport: 'width=device-width, initial-scale=1',
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
        <Navbar />
        
        {children}

        
      </body>
    </html>
  );
}
