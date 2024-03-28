import axios from "axios"
import { useEffect, useState } from "react"
import { useFetch } from "./helpers/hooks/useFetch"


export const Comments = () => {
    const [comments] = useFetch("https://jsonplaceholder.typicode.com/comments", [])
  
  return (
    <div>Comments</div>
  )
}
