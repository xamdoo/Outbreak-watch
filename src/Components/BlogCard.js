import React from 'react'
import { Link } from 'react-router-dom'


function BlogCard(props) {
    
    const date = new Date(props.data.date);

    const formattedDate = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
    }).format(date);



    return (
        <div>
            <Link to={`/blog/${props.data._id}`}>
                <div className="flex flex-col rounded-lg bg-white shadow-md">
                    <img src="../vibes.png" className="w-3/4 m-auto" alt="Cover" />
                    <div className="p-5 flex">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 mr-3">
                                <Link to="/userprofile"><img src="../profile.png" className="w-10 h-10 rounded-full" alt="profile" loading="lazy" /></Link>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <Link to="/userprofile">
                                <span className="text-sm font-medium">Hamda Mohamed</span>
                            </Link>
                            <span className="text-xs text-gray-600"><time>{formattedDate}</time></span>
                        </div>
                    </div>
                    <div className="ml-16 -mt-2">
                            <h2 className="text-3xl m-auto mb-2">
                                <a href="/" className="text-black font-bold hover:text-blue-700">{props.data.title}</a>
                            </h2>
                            <ul className='flex'>
                                {props.data.tags.map((tag,index)=>(
                                    <li key={index} className="text-black rounded-full px-2 py-1 text-sm font-normal">
                                        <span>#</span>{tag}
                                    </li>
                                ))}
                            </ul>
                    </div>
                    <div className="flex ml-16 mt-3 pb-8 gap-2 justify-evenly">
                        <a href="/" className=" text-gray-700 flex gap-2 font-light font-sans">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22">
                                <path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>
                                25 reactions
                        </a>
                        <a href="/" className="flex gap-2 text-gray-700 font-light font-sans">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22">
                                
                                <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>
                                30 comments
                        </a>
                        <div className="ml-56">
                            <button type="button" className=" text-gray-700 flex gap-3 ">
                                <small className="text-xs mt-1 mr-">1 min read</small>
                                <span className='mr-5'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75zM16.5 6h-9v11.574l4.5-2.82 4.5 2.82V6z"></path></svg>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default BlogCard
