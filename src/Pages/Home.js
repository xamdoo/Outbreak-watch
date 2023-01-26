import React from 'react'
import Content from '../Components/Content'
import LeftSideBar from '../Components/LeftSideBar'
import RightSideBar from '../Components/RightSideBar'

function Home() {
    return (
        <main className='bg-gradient-to-bl from-red-50 to-slate-200 h-fit border'>
            <div className='h-screen w-full max-w-screen-xl mx-auto px-4 py-3 flex flex-1 justify-between'>
                <LeftSideBar/>
                <Content/>
                <RightSideBar/>
            </div>
        </main>
    )
}

export default Home
