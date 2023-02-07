import {CiEdit} from "react-icons/ci"
import { MdOutlineDelete } from "react-icons/md"
import { useEffect, useState } from "react"
import axios from "axios"
import { Link, useParams } from "react-router-dom"
import { toast } from "react-toastify"

function BlogList(){
    const token = localStorage.getItem("token")
    const [blogs, setBlogs] = useState([])
    const {id}= useParams();  
    
    
    function handleOnDelete(id){
        
        axios.delete(`http://localhost:8000/blog/${id}`, {
        headers:{
            Authorization:token
        }
    }).then((res)=>{
        toast.success(res.data.message)
    }).catch((e)=>{
        toast.error(e.response.data.message)
    })

    }
    useEffect(()=>{
        axios.get("http://localhost:8000/blog/my", {
            headers:{
                Authorization: token
            }
        }).then((res)=>{
            setBlogs(res.data.blogs)
        }).catch((e)=>{
            console.log(e)
        })
    })

    return(
    <div className="mt-5">
        <table className="table-auto w-full">
        <thead>
            <tr className="text-left h-10 text-sm">
            <th>Blog Title</th>
            <th>Edit</th>
            <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {blogs.map((blog)=>
                <tr key={blog._id} className="border-y h-10">
                <td>{blog.title}</td>
                <Link to={`/edit/${blog._id}`}><td><CiEdit className="text-blue-800 cursor-pointer mt-3"/></td></Link>
                <td><MdOutlineDelete className="text-red-500 cursor-pointer"
                onClick={() => handleOnDelete(blog._id)}/></td>
                </tr>
            )}
        </tbody>
        </table>
    </div>
    )
}

export default BlogList