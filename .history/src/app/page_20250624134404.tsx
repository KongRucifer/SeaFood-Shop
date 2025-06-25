// ✅ app/page.tsx
import React from 'react'
// app/page.tsx
export const metadata = {
  title: "ຮ້ານຂາຍອາຫານ - ໜ້າທຳອິດ | FoodShop",
  description: "ຮ້ານຂາຍອາຫານອອນໄລ ໜ້າທຳອິດ ລວມອາຫານຫຼາກຫຼາຍ เช่น ครีมบำรุงผิว ลิปสติก รองพื้น",
  keywords: "เครื่องสำอาง, ครีมบำรุงผิว, ลิปสติก, รองพื้น",
  openGraph: {
    title: "ร้านขายเครื่องสำอาง - หน้าแรก | BeautyShop",
    description: "ซื้อเครื่องสำอางออนไลน์คุณภาพดี ราคาถูก ส่งไว มีบริการเก็บเงินปลายทาง",
    images: ["https://yourdomain.com/og-image.jpg"],
  },
  canonical: "https://yourdomain.com/",
};
export default async function Home() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
  const posts = await res.json()

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}
// app/page.tsx
// 'use client'

// import React, { useEffect, useState } from 'react'

// export default function Home() {
//   const [posts, setPosts] = useState<any[]>([])

//   useEffect(() => {
//     async function fetchPosts() {
//       const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=99')
//       const data = await res.json()
//       setPosts(data)
//     }

//     fetchPosts()
//   }, [])

//   return (
//     <div>
//       <h1>Posts (CSR)</h1>
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>{post.title}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }

