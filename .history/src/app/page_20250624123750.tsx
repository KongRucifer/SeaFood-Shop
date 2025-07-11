// pages/index.tsx
import React from 'react'
// pages/index.tsx
export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
  const posts = await res.json()

  return { props: { posts } }
}

export default function Home({ posts }: any) {
  return (
    <div>
      <h1>Blog</h1>
      {posts.map((p :any) => (
        <p key={p.id}>{p.title}</p>
      ))}
    </div>
  )
}
