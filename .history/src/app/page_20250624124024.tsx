// ✅ app/page.tsx
import React from 'react'

export default async function Home() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=')
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
