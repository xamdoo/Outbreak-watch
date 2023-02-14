import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function EditPost() {
    const token = localStorage.getItem("token")
    const [loading, setLoading] = useState(true)
    const [inputs, setInputs] = useState({})
    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(() => {
        axios
        .get(`http://localhost:8000/blog/${id}`, {
            headers: {
            Authorization: token,
            },
        })
        .then((res) => {
            setInputs(res.data.blog);
            setLoading(false);
        })
        .catch((e) => {
            console.log(e);
        });
        if(loading) return
    },[]);

    function updatePost(event){
        event.preventDefault();
        const formData = new FormData();
        formData.append("file", inputs.file);
        formData.append("title", inputs.title);
        formData.append("content", inputs.content);
        formData.append("tags", inputs.tags);

        axios.put(`http://localhost:8000/blog/${id}`,formData,{headers:{authorization:token}, "Content-Type": "multipart/form-data"})
        .then(()=>{
            toast.success("Blog Edited")
            navigate("/dashboard")
        })
        .catch((e)=>{
            toast.error(e.response.data.message)
        })
    }

    return (
        <div className='bg-gradient-to-bl from-red-50 to-slate-200 h-screen border'>
            <div className=' w-2/3 rounded-lg bg-white text-gray-800 shadow-sm ml-20 mt-8 pb-24'>
                <div className='p-10 rounded-lg rounded-0 space-y-5 ml-10'>
                    <input id="cover-image-input" type="file"
                    onChange={(e)=>{
                        setInputs({...inputs,file:e.target.files[0]})
                    }}/>
                    <div className='flex flex-col'>
                        <textarea placeholder='New post title here...' className="font-bold text-4xl font-serif outline-none text-black"
                        value={inputs.title}
                        onChange={(e)=>{
                            setInputs({...inputs,title:e.target.value})
                        }}/>
                        <textarea placeholder='Add up to 4 tags...' className='outline-none -mt-6' 
                        value={inputs.tags}
                        onChange={(e)=>{
                            const tagArray = e.target.value.split(',').filter(Boolean);
                            if (tagArray.length <= 4) {
                                setInputs({...inputs,tags: tagArray});
                            }
                        }}
                        />
                    </div>
                    <div>
                        <textarea placeholder='Write your post content here...' className='h-full w-full outline-none font-mono font-normal whitespace-pre-wrap mt-2 py-4'
                        value={inputs.content}
                        onChange={(e)=>{
                            setInputs({...inputs,content:e.target.value})
                        }}/>
                    </div>
                </div>
            </div>
            <button className="border rounded-md text-white bg-red-900 px-2 py-1.5 mt-5 ml-20 font-sans hover:bg-white hover:text-red-900 hover:border-red-900"
            onClick={updatePost}>Edit Post</button>
        </div>
    )
}

export default EditPost
