// head.jsx
import React from "react";
import Head from "next/head";

const HeadComponent = () => {
  return (
    <Head>
      <title>ຮ້ານຂາຍອາຫານທະເລ - ໜ້າທຳອິດ | FoodShop</title>
      <meta
        name="description"
        content="ຮ້ານຂາຍອາຫານທະເລອອນໄລ ໜ້າທຳອິດ ລວມອາຫານທະເລຫຼາກຫຼາຍ ເຊັ່ນ  ປາ, ປູ, ກຸ້ງ, ຊີວິດ, ແລະອາຫານທະເລອື່ນໆ ສາມາດສັ່ງເຊົ້າ ແລະ ສັ່ງເຂົ້າໃນເວັບໄຊ ສາມາດເຮັດ ການໂອນເງິນ"
      />
      <meta
        name="keywords"
        content="ອາຫານທະເລ ອອນໄລ, ຮ້ານຂາຍອາຫານທະເລ, ສັ່ງອາຫານທະເລ, ອາຫານທະເລສົ່ງໄວ"
      />
      <meta name="author" content="Your Name or Company" />
      <meta name="publisher" content="Your Company" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://yourdomain.com/" />

      {/* Open Graph */}
      <meta property="og:title" content="ຮ້ານຂາຍອາຫານທະເລ - ໜ້າທຳອິດ | FoodShop" />
      <meta
        property="og:description"
        content="ສັ່ງຊື້ອາຫານທະເລ ລາຄາຖືກ ສົ່ງໄວ ທັນໃຈ ມີບໍລິການໂອນເງີນ ປາຍທາງ"
      />
      <meta property="og:url" content="https://yourdomain.com/" />
      <meta property="og:site_name" content="BeautyShop" />
      <meta property="og:image" content="https://yourdomain.com/og-image.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="BeautyShop Image" />
      <meta property="og:locale" content="th_TH" />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ร้านขายเครื่องสำอาง - หน้าแรก | BeautyShop" />
      <meta
        name="twitter:description"
        content="ซื้อเครื่องสำอางออนไลน์คุณภาพดี ราคาถูก ส่งไว มีบริการเก็บเงินปลายทาง"
      />
      <meta name="twitter:image" content="https://yourdomain.com/og-image.jpg" />
    </Head>
  );
};

export default HeadComponent;
