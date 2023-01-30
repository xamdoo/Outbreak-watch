import React from 'react'
import {MdLocationPin, MdEmail} from 'react-icons/md'
import {FaBirthdayCake, FaTwitter} from 'react-icons/fa'

export default function UserProfile() {
    return (
        <div className="h-screen bg-gradient-to-bl from-red-50 to-slate-200 " >
            <div className=" h-32 bg-red-900 "></div>
            <div className=" border rounded-md bg-white overflow-wrap w-2/3 mx-auto -mt-16">
                <div className='flex gap-1 justify-end mt-5'>
                        <button className='bg-blue-700 hover:bg-blue-900 text-white font-medium py-2 px-4 rounded-lg shadow-sm hover:shadow-md focus:outline-none focus:shadow-outline-blue active:shadow-outline-blue'>Follow</button>
                        <button className=" text-gray-600 font-medium py-2 px-4 rounded-lg hover:shadow-md">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z"></path>
                            </svg>
                        </button>
                </div>
                    <img className="bg-transparent rounded-full border-8 absolute top-16 left-96  h-32 border-red-900 ml-52 " src="../profile.png" alt="userprofile"/>
                    <h1 className="text-3xl font-extrabold text-center mt-10">Hamda Mouhoumed</h1>
                    <p className="text-lg text-center py-4 mx-20">Data Enthusiast&#128202;|| Epidemiologist&#10024;|| Part-time Programmer🚀</p>
                <div className='flex my-4 justify-center'> 
                    <ul className='flex gap-3'>
                        <li className='flex gap-2'>
                            <MdLocationPin className='mt-1'/>
                            <span>Somaliland</span>
                        </li>
                        <li className='flex gap-2'>
                            <FaBirthdayCake className='mt-1'/>
                            <span>Joined on Jun 20, 2019</span>
                        </li>
                        <li className='flex gap-2'>
                            <MdEmail className='mt-1'/>
                            <span>hm.moh@gmail.com</span>
                        </li>
                        <li className="ml-2 mt-1">
                            <FaTwitter className='hover:fill-blue-800'/>
                        </li>
                    </ul>
                </div>
                <hr className='border border-gray-100 mb-4 mt-6'/>
                <div className='flex flex-col items-center w-28 m-auto pb-5'>
                    <span className='text-gray-500 font-semibold text-lg'>Work</span>
                    <p>Web developer</p>
                </div>
            </div>
        </div>
    )
};
