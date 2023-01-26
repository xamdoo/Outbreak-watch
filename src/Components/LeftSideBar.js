import React from 'react'
import { Link } from 'react-router-dom'
import { FcHome, FcReading, FcVideoCall, FcIdea, FcShop, FcContacts } from 'react-icons/fc';
import { FaPodcast } from 'react-icons/fa';

function LeftSideBar() {
    return (
        <div  className="w-1/4">
            <React.Fragment>
                <div className=" border m-2 ml-8 flex flex-col gap-4 p-6 pb-8 rounded-md border-zinc-100 bg-white">
                    <h1 className="font-bold text-xl leading-tight">Outbreak Watch! a community of public health enthusiasts.</h1>
                    <span>Stay informed about the latest 
                        outbreaks and share your own knowledge and experiences.</span>
                    <div className="flex flex-col gap-3">
                        <button className="border rounded-md text-white bg-red-900 py-1.5 font-sans hover:bg-white hover:text-red-900 hover:border-red-900"> <Link to='/signup'>Get Started</Link></button>
                        <button className='font-sans hover:underline'><Link to='/login'>Sign In</Link></button>
                    </div>
                </div>
                <ul className="flex flex-col items-start text-md font-normal py-2 mt-4 ml-12 gap-3 w-1/2">
                    <li>
                        <Link to='/' exact className="flex gap-2 hover:underline hover:cursor-pointer">
                            <i>
                                <FcHome className="mt-1"/>
                            </i>
                            <span>Home</span>
                        </Link>
                    </li>
                    <li className="flex gap-2 hover:underline hover:cursor-pointer">
                        <i>
                            <FcReading className="mt-1"/>
                        </i>
                        <span>Reading List</span>
                    </li>
                    <li className="flex gap-2 hover:underline hover:cursor-pointer">
                        <i>
                            <FaPodcast className="mt-1"/>
                        </i>
                        <span>Podcasts</span>
                    </li>
                    <li className="flex gap-2 hover:underline hover:cursor-pointer">
                        <i>
                            <FcVideoCall className="mt-1"/>
                        </i>
                        <span>Videos</span>
                    </li>
                    <li className="flex gap-2 hover:underline hover:cursor-pointer">
                        <i>
                            <FcIdea className="mt-1"/>
                        </i>
                        <span>FAQ</span>
                    </li>
                    <li className="flex gap-2 hover:underline hover:cursor-pointer">
                        <i>
                            <FcShop className="mt-1"/>
                        </i>
                        <span>Forem Shop</span>
                    </li>
                    <li className="flex gap-2 hover:underline hover:cursor-pointer">
                        <i>
                            <FcContacts className="mt-1"/>
                        </i>
                        <span>Contact</span>
                    </li>
                </ul>
            </React.Fragment>
        </div>
    )
}

export default LeftSideBar
