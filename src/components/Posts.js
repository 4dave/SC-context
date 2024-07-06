"use client"

import { useGlobalContext } from "@/context/GlobalContextProvider"

export default function Posts() {
  const { posts } = useGlobalContext()

  return (
    <ul>
      {posts?.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}
