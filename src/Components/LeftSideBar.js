import React from 'react';
import { Link } from 'react-router-dom'
import { FcHome, FcReading, FcVideoCall, FcIdea, FcShop, FcContacts, FcLike } from 'react-icons/fc';
import { FaPodcast } from 'react-icons/fa';
import { SlBookOpen } from 'react-icons/sl';
import UserContext from '../Utils/UserContext'
import { useContext } from 'react';


function LeftSideBar() {
    const {user} = useContext(UserContext)
    return (
        <div  className="w-1/4 ml-3 h-fit">
            <React.Fragment>
                {!user &&
                <div className="border m-2 ml-6 flex flex-col gap-4 p-6 pb-6 rounded-md border-zinc-100 bg-white">
                    <h1 className="font-bold text-xl leading-tight">Outbreak Watch! a community of public health enthusiasts.</h1>
                    <span>Stay informed about the latest 
                        outbreaks and share your own knowledge and experiences.</span>
                    <div className="flex flex-col gap-3">
                        <button className="border rounded-md text-white bg-red-900 py-1.5 font-sans hover:bg-white hover:text-red-900 hover:border-red-900"><Link to='/signup'>Get Started</Link></button>
                        <button className='font-sans hover:underline'><Link to='/login'>Sign In</Link></button>
                    </div>
                </div>}
                <ul className="flex flex-col items-start text-md font-normal py-2 mt-4 ml-10 gap-3 w-1/2">
                    <li>
                        <Link to='/' className="flex gap-2 hover:underline hover:cursor-pointer">
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
                            <FcLike className="mt-1"/>
                        </i>
                        <span>Sponsors</span>
                    </li>
                    <li className="flex gap-2 hover:underline hover:cursor-pointer">
                        <i>
                            <FcContacts className="mt-1"/>
                        </i>
                        <span>Contact</span>
                    </li>
                    <li className="flex gap-2 hover:underline hover:cursor-pointer">
                        <i>
                            <SlBookOpen className="mt-1"/>
                        </i>
                        <span>Guides</span>
                    </li>
                </ul>
                <nav className=" w-3/4 py-2 mt-4 ml-8">
                    <header className=" flex items-center justify-between">
                    <h2 className="text-md font-bold">Popular Tags</h2>
                    </header>
                    <div className=" gap-1 mt-3 ml-2 flex flex-col overflow-y-scroll h-48 scrollbar-purple-50">
                        <a href="/" className= "hover:bg-red-200 mr-1 p-1">#healthmanagement</a>
                        <a href="/" className=" hover:bg-red-200 mr-1 p-1">#SDGs</a>
                        <a href="/" className=" hover:bg-red-200 mr-1 p-1">#communityhealth</a>
                        <a href="/" className=" hover:bg-red-200 mr-1 p-1">#healthequity</a>
                        <a href="/" className=" hover:bg-red-200 mr-1 p-1">#COVID19</a>
                        <a href="/" className=" hover:bg-red-200 mr-1 p-1">#impoverishment</a>
                        <a href="/" className=" hover:bg-red-200 mr-1 p-1">#communicablediseases</a>
                        <a href="/" className=" hover:bg-red-200 mr-1 p-1">#statistics</a>
                        <a href="/" className=" hover:bg-red-200 mr-1 p-1">#primaryhealthcare</a>
                        <a href="/" className="hover:bg-red-200 mr-1 p-1">#surveillance</a>
                        <a href="/" className="hover:bg-red-200 mr-1 p-1">#epidemics</a>
                    </div>
                </nav>
            </React.Fragment>
        </div>
    )
}

export default LeftSideBar
