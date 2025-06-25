// ✅ app/page.tsx
import React from 'react'
// app/page.tsx
export const metadata = {
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

