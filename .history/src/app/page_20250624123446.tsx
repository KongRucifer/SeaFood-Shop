// pages/index.tsx
import React from 'react'
// pages/index.tsx
export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
  const posts = await res.json()

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <div>
      <h1>Blog</h1>
      {posts.map((p) => (
        <p key={p.id}>{p.title}</p>
      ))}
    </div>
  )
}
