import { MdEmail } from 'react-icons/md'
import { AiFillLock } from 'react-icons/ai'
import { BsPersonFill } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function Signup(){
    const [inputs, setInputs] = useState({});
    const [error, setError] = useState("");
    

    function handleOnSignUp(e){
        e.preventDefault();
        if (inputs.password !== inputs.confirmPassword) {
            setError('Passwords do not match')
            toast.error(error);
            return;
        }
        axios.post("http://localhost:8000/auth/signup", inputs)
        .then((res)=>toast.success("Thank you for signing up!"))
        .catch((err)=>toast.error(err.response.data.message))
        console.log(inputs)
        
    }

    return(
            <div className="bg-gradient-to-bl from-red-50 to-slate-200 h-screen border" style={{boxSizing: 'border-box'}}>
            <div className="flex border-2 rounded-lg shadow-2xl bg-slate-50 w-4/6 h-5/6 m-auto mt-5">
                <div className="p-20 pt-2">
                    <h1 className='font-bold text-2xl mb-5 mt-8'>Welcome to Outbreak Watch</h1>
                    <div className='flex flex-col gap-2'>
                        <button className="border-2 bg-brand-github text-white hover:bg-brand-github-bg-hover focus:shadow-outline-brand-github py-1 px-20 rounded-lg flex items-center m-auto"><img src='../github-mark.svg' alt='github-logo' className="w-6 h-6 mr-2 invert brightness-0"/><span>Sign up with GitHub</span></button>
                        <button className='border-2 bg-green-900 text-white hover:bg-green-800 py-1 px-20 rounded-lg flex items-center m-auto'><img src='../google.svg' alt='google-logo' className="w-6 h-6 mr-2"/><span>Sign up with Google</span></button>
                        <button className='border-2 bg-brand-twitter text-white py-1 px-20 rounded-lg hover:bg-brand-twitter-hover focus:outline-none focus:shadow-outline-brand-twitter flex items-center m-auto'><img src='../twitter.svg' alt='twitter-logo' className="w-6 h-6 mr-2 invert brightness-0"/><span>Sign up with Twitter</span></button>
                    </div>
                    <div className="flex items-center justify-center text-m mt-3"><hr className="border border-grey w-1/3"/>
                        <span className="px-2 font-semibold">Or</span>
                        <hr className="border border-grey w-1/3"/>
                    </div>
                    <form>
                        <div className='m-2 ml-20 mb-3 relative'>
                            <BsPersonFill className='absolute text-gray-500 top-1 left-1'/>
                            <input type="text" placeholder='Username' className=' bg-slate-50 border-b-2 border-red-900 focus:text-black outline-none pl-7'
                            onChange={(e)=> setInputs({...inputs, userName:e.target.value})}/>
                        </div>
                        <div className='m-2 mb-3 ml-20 relative'>
                            <MdEmail className='absolute text-gray-500 top-1 left-1'/>
                            <input type="email" placeholder='Email' className=' bg-slate-50 border-b-2 border-red-900 focus:text-black outline-none pl-7' autoComplete='username'
                            onChange={(e)=> setInputs({...inputs, email:e.target.value})}/>
                        </div>
                        <div className='m-2 mb-3 ml-20 relative'>
                            <AiFillLock className='absolute text-gray-500 top-1 left-1'/>
                            <input type="password" placeholder='Password' className=' bg-slate-50 border-b-2 border-red-900 focus:text-black outline-none pl-7' autoComplete="new-password"
                            onChange={(e)=> setInputs({...inputs, password:e.target.value})}/>
                        </div>
                        <div className='m-2 mb-3 ml-20 relative'>
                            <AiFillLock className='absolute text-gray-500 top-1 left-1'/>
                            <input type="password" placeholder='Confirm Password' className=' bg-slate-50 border-b-2 border-red-900 focus:text-black outline-none pl-7' autoComplete="new-password"
                            onChange={(e)=> setInputs({...inputs, confirmPassword:e.target.value})}/>
                        </div>
                        <button type='submit' className='border-2 rounded-md px-2 py-0.5 mt-2 ml-28 text-white bg-red-900  hover:bg-white hover:text-red-900 hover:border-red-900' onClick={handleOnSignUp}>Create Account</button>
                    </form>
                    <div className='mt-5 '>
                        <span className='text-gray-500 ml-12'>Already have an account? <Link to="/login" className='text-red-900 font-bold'>Sign In</Link></span>
                    </div>
                </div>
                <img src="../signup.png" alt="" className="h-3/4 mt-20" />
            </div>
        </div>
    )
}


export default Signup;
