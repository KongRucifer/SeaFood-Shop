// ✅ app/page.tsx
import React from 'react'

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
'use client'

import React, { useEffect, useState } from 'react'

export default function Home() {
  const [posts, setPosts] = useState<any[]>([])

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=99')
      const data = await res.json()
      setPosts(data)
    }

    fetchPosts()
  }, [])

  return (
    <div>
      <h1>Posts (CSR)</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

