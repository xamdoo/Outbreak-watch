import axios from "axios";
import { useEffect, useState } from "react";
import BlogAuthor from "../Components/BlogAuthor";
import BlogContent from "../Components/BlogContent";
import {useParams} from 'react-router-dom'


function Blog(){
    const {id} = useParams()
    const [blog, setBlog] = useState({})
    const [loading, setLoading] = useState(true)
    const token = localStorage.getItem("token")

    useEffect(()=>{
        axios(`http://localhost:8000/blog/${id}`,{
            headers:{
                Authorization:token
            }
        })
        .then((res)=>{
            setBlog(res.data.blog)
            setLoading(false)
        }).catch((e)=>[
            console.log(e)
        ])
    })
    if(loading) return
    return (
        <div className="flex my-5 space-x-5">
            <BlogContent blog={blog}/>
            <BlogAuthor user={blog.user}/>
        </div>
    )
}

export default Blog;