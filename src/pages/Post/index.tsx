import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "../../components/Spinner";
import { api } from "../../lib/axios";
import { IPost } from "../Blog";
import { PostContent } from "./components/PostContent";
import { PostHeader } from "./components/PostHeader";

export function Post() {
  const [postData, setPostData] = useState<IPost>({} as IPost)
  const [isLoading, setIsLoading] = useState(true)

  const { id } = useParams()

  const getPostDetails = useCallback( async() => {
    try {
      setIsLoading(true)
      const response = await api.get(`/repos/Jonatan1103/Blog-desafio-ignite/issues/${id}`)

      setPostData(response.data)

    } finally {
      setIsLoading(false)

    }
  }, [postData])

  useEffect(() => {
    getPostDetails()
  }, [])

  return (
    <>
      <PostHeader postData={postData} isLoading={isLoading}/>
      {isLoading 
        ? <Spinner/> 
        : (
          <PostContent content={postData.body}/>
        )
      }
    </>
  )
}