
import React from 'react'

export default async function Home() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
  const posts = await res.json()

  return (
    <div>
      <h1>Postsfff</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}
