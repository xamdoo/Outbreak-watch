import React from 'react'

export default function CreatePost() {
    return (
        <div className='bg-gradient-to-bl from-red-50 to-slate-200 h-screen border'>
            <div className=' w-2/3 rounded-lg bg-white text-gray-800 shadow-sm ml-20 mt-8 pb-24'>
                <div className='p-10 rounded-lg rounded-0 space-y-5 ml-10'>
                    <input id="cover-image-input" type="file" accept="image/*" data-max-file-size-mb="25"/>
                    <div className='flex flex-col'>
                        <textarea placeholder='New post title here...' className="font-bold text-4xl font-serif outline-none text-black"/>
                        <textarea placeholder='Add up to 4 tags...' className='outline-none -mt-6'/>
                    </div>
                    
                    <div>
                        <textarea placeholder='Write your post content here...' className='h-full w-full outline-none font-mono font-normal whitespace-pre-wrap mt-2 py-4'/>
                    </div>
                </div>
            </div>
            <button className="border rounded-md text-white bg-red-900 px-2 py-1.5 mt-5 ml-20 font-sans hover:bg-white hover:text-red-900 hover:border-red-900">Publish</button>
        </div>
    )
}
