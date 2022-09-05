import { useCallback, useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { Post } from "./components/Post";
import { Profile } from "./components/Profile";
import { SearchInput } from "./components/SearchInput";
import { PostsListContainer } from "./styles";

interface IPost {
  title: string
}

export function Blog() {
  const [posts, setPosts] = useState<IPost[]>([])

  const getPosts = useCallback( async (query: string = "") => {
    try {
      const response = await api.get(`/search/issues?q=${query}%20repo:Jonatan1103/Blog-desafio-ignite `)
      console.log(response.data)
      setPosts(response.data.items)
    } finally {

    }
  }, [posts])

  useEffect(() => {
    getPosts()
  }, [])
 
  return (
    <>
      <Profile/>
      <SearchInput/>

      <PostsListContainer>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </PostsListContainer>
    </>
  )
}