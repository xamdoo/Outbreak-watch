import Comment from "./Comment"
import UserContext from "../Utils/UserContext"
import { useContext, useEffect, useState } from "react"
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify'

function BlogComments(){
    const {id} = useParams()
    const {user} = useContext(UserContext);
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([])
    const token = localStorage.getItem("token")

    useEffect(()=>{
        axios.get(`http://localhost:8000/comment/${id}`)
        .then((res)=>{
            setComments(res.data.Comments)
        }).catch((e)=>{
            console.log(e)
        })
    })

    function handleSubmit(){
        axios.post("http://localhost:8000/comment",{
            comment:comment,
            blog: id
        },{
            headers:{
                Authorization:token
            }
        }).then((res)=>{
            toast.success("Comment Posted")

        }).catch((e)=>{
            toast.error("Oops! try again")
        })
    }
    return (
        <div className="border-t py-5 px-16">
            <h1 className="font-bold text-2xl">Top comment(s)</h1>
            {user &&
            <div className="py-5">
                <div className="flex space-x-2">
                <div className="h-12 w-12">               
                    <img className="rounded-full" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt=""/>
                </div>
                    <textarea className="border w-full rounded-md p-2" placeholder="Add to the discussion" 
                    onChange={(e)=>setComment(e.target.value)}></textarea>
                </div>
                <div className="flex justify-end mt-2">
                    <button className="bg-blue-600 p-2 rounded-lg" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
            }
            {comments.map((comment)=> <Comment data={comment}/>)}
            
        </div>
    )
}

export default BlogComments