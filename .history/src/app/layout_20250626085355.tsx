import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
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
  weight: ['400', '700'], 
  variable: '--font-noto-sans-lao',
  display: 'swap',
});
export const metadata: Metadata = {
  title: "ຮ້ານຂາຍອາຫານທະເລ - ໜ້າທຳອິດ | Seafood Shop",
  icons: {
    icon: "/images/favi", 
  },
  description:
    "ຮ້ານຂາຍອາຫານທະເລອອນໄລ ໜ້າທຳອິດ ລວມອາຫານທະເລຫຼາກຫຼາຍ ເຊັ່ນ ປາ, ປູ, ກຸ້ງ ແລະ ອາຫານທະເລອື່ນໆ ສາມາດສັ່ງຊື້ໃນເວັບໄຊໄດ້ ມີບໍລິການສົ່ງໄປເຖີງທີ່ ສາມາດເຮັດ ການໂອນເງິນ ທີ່ເວັບໄຊທ໌ຂອງພວກເຮົາ",
  keywords:
    "ອາຫານທະເລ ອອນໄລ, ຮ້ານຂາຍອາຫານທະເລ, ສັ່ງອາຫານທະເລ, ອາຫານທະເລສົ່ງໄວທັນໃຈ",
  authors: [{ name: "kong mong thao" }],
  publisher: "Super Shop SeaFood",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "ຮ້ານຂາຍອາຫານທະເລ - ໜ້າທຳອິດ | Seafood Shop",
    description:
      "ສັ່ງຊື້ອາຫານທະເລ ລາຄາຖືກ ສົ່ງໄວ ທັນໃຈ ສາມາດໂອນເງີນ ປາຍທາງໄດ້",
    url: "https://seafoodshopkong.netlify.app/images/fish.jpeg",
    siteName: "Seafood Shop",
    locale: "th_TH",
    type: "website",
    images: [
      {
        url: "https://seafoodshopkong.netlify.app/images/myshopSeafood.jpeg",
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
    images: ["https://seafoodshopkong.netlify.app/images/seafood2.jpeg"],
  },
  alternates: {
    canonical: "https://seafoodshopkong.netlify.app/modules/home/views/",
  },

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
      <head>
        {/* ✅ Add manifest link */}
        <link rel="manifest" href="/manifest.json" />

        {/* ✅ Add JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ຮ້ານຂາຍອາຫານທະເລ",
              url: "https://seafoodshopkong.netlify.app",
              logo: "https://seafoodshopkong.netlify.app/images/logoShop.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+8562078961715",
                contactType: "Customer Service",
                areaServed: "LA",
              },
              sameAs: [
                "https://www.facebook.com/konglove.thao.mekhayees",
                "https://www.instagram.com/konglovethao/",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
