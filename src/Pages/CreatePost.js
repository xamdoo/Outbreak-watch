import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom'


export default function CreatePost(){
    const [inputs, setInputs] = useState({})
    const navigate = useNavigate()
    function handleOnPublish(){
        const formData = new FormData();
        formData.append("file", inputs.file);
        formData.append("title", inputs.title);
        formData.append("content", inputs.content);
        formData.append("tags", inputs.tags);

        const token = localStorage.getItem("token")
        axios.post("http://localhost:8000/blog", formData, {headers:{authorization:token, "Content-Type": "multipart/form-data"}})
        .then(()=>{
            toast.success("New Blog Posted")
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
                        onChange={(e)=>{
                            setInputs({...inputs,title:e.target.value})
                        }}/>
                        <textarea placeholder='Add up to 4 tags...' className='outline-none -mt-6' onChange={(e)=>{
                            const tagArray = e.target.value.split(',').filter(Boolean);
                            if (tagArray.length <= 4) {
                                setInputs({...inputs,tags: tagArray});
                            }
                        }}/>
                    </div>
                    <div>
                        <textarea placeholder='Write your post content here...' className='h-full w-full outline-none font-mono font-normal whitespace-pre-wrap mt-2 py-4'
                        onChange={(e)=>{
                            setInputs({...inputs,content:e.target.value})
                        }}/>
                    </div>
                </div>
            </div>
            <button className="border rounded-md text-white bg-red-900 px-2 py-1.5 mt-5 ml-20 font-sans hover:bg-white hover:text-red-900 hover:border-red-900"
            onClick={handleOnPublish}>Publish</button>
        </div>
    )
}
