import { useContext } from 'react'
import { BsSearch, BsBell } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import UserContext from '../Utils/UserContext'



function Navbar(){
    const {user} = useContext(UserContext)

    return (
        <div className="flex justify-between py-2 px-5 border-b-2">
            <div className='flex ml-5 mt-1'>
                <Link to="/">
                    <img className="h-4 mt-3" src="../logo-no-background.png" alt="logo"/>
                </Link>
                <div className='relative m-1.5 ml-8'>
                    <button type="submit" className=" cursor-pointer absolute inset-px left-auto mr-3 mb-1"><BsSearch/></button>
                    <input className=" border-2 px-3 border-slate-700 rounded-full outline-none" type="text" placeholder='Search'/>
                </div>
            </div>
                {user ? (
                <div className='mr-5 flex gap-4'>
                    <Link to="/new">
                        <button className="border rounded-md text-white bg-red-900 px-2 py-1.5 mt-1.5 font-sans hover:bg-white hover:text-red-900 hover:border-red-900 hover:underline">Create Post</button>
                    </Link>
                    <Link to="">
                        <BsBell className='mt-2 w-7 h-7 hover:bg-red-100 hover:rounded-lg hover:border'/>
                    </Link>
                    <Link to="">
                        <div className='h-12 w-12 '>
                            <img src='../profile.png' alt='profile' className='rounded-full'/>
                        </div>
                    </Link>
                </div>) : (
                    <div className='mr-5'>
                        <Link to="/login">
                            <button className="mr-3 font-sans hover:underline">Sign In</button>
                        </Link>
                        <Link to="/signup">
                            <button className="border rounded-md text-white bg-red-900 px-2 py-1.5 mt-0.5 font-sans hover:bg-white hover:text-red-900 hover:border-red-900">Get Started</button>
                        </Link>
                    </div>
                    )} 
        </div>
    )
}

export default Navbar