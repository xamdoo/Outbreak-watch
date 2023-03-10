import React from 'react'
import BlogCard from '../Components/BlogCard'
import BlogTitle from '../Components/BlogTitle'
import LeftSideBar from '../Components/LeftSideBar'
import RightSideBar from '../Components/RightSideBar'
import { useEffect, useState } from 'react'
import { getAllBlogs } from '../Utils/APIEndpoints'


function Home() {
    const[blogs, setBlogs] = useState([])

    useEffect(()=>{
        getAllBlogs().then((res)=>{
            setBlogs(res.data.blogs)
        }).catch((e)=>{
            console.log(e)
        })
    })
    
    return (
        <main className='bg-gradient-to-bl from-red-50 to-slate-200'>
            <div className='max-w-screen-xl mx-auto py-2 justify-between flex'>
                <LeftSideBar/>
                <div className=' w-1/2'>
                    <BlogTitle/>
                    <div className='flex flex-col gap-3 '>
                        {blogs.map((blog)=> <BlogCard data={blog}/>)}
                    </div>
                </div>
                <RightSideBar/>
            </div>
        </main>
    )
}

export default Home
