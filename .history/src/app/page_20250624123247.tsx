// pages/index.tsx
import React from 'react'

type Props = {
  posts: { id: number; title: string }[]
}

export default function Home({ posts }: Props) {
  return (
    <div>
      <h1>บทความจาก SSR</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
  const posts = await res.json()

  return {
    props: {
      posts,
    },
  }
}
