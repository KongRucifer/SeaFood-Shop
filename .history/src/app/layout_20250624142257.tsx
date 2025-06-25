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
  description: "ຮ້ານຂາຍອາຫານທະເລອອນໄລ ໜ້າທຳອິດ ລວມອາຫານທະເລຫຼາກຫຼາຍ ເຊັ່ນ  ປາ, ປູ, ກຸ້ງ, ຊີວິດ, ແລະອາຫານທະເລອື່ນໆ ສາມາດສັ່ງເຊົ້າ ແລະ ສັ່ງເຂົ້າໃນເວັບໄຊ ສາມາດເຮັດ ການໂອນເງິນ ",
  keywords: " ອາຫານທະເລ ອອນໄລ, ຮ້ານຂາຍອາຫານທະເລ, ສັ່ງອາຫານທະເລ, ອາຫານທະເລສົ່ງໄວ",
  openGraph: {
    title: "ຮ້ານຂາຍອາຫານທະເລ - ໜ້າທຳອິດ | FoodShop",
    description: "ສັ່ງຊື້ອາຫານທະເລ ລາຄາຖືກ ສົ່ງໄວ ທັນໃຈ ມີບໍລິການໂອນເງີນ ປາຍທາງ",
    images: ["http://localhost:3000/images/seafood.jpg"],
  },
  canonical: "http://localhost:3000/images/fish.jpeg",
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
