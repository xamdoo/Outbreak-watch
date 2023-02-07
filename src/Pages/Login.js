import { MdEmail } from 'react-icons/md'
import { AiFillLock, AiFillEye, AiOutlineEye  } from 'react-icons/ai'
import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import UserContext from '../Utils/UserContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

function Login(){
    const [inputs, setInputs] = useState({})
    const [isShown, setIsShown] = useState(false);
    const togglePasswordVisibility = () => setIsShown(!isShown);
    const {setUser} = useContext(UserContext)
    const navigate = useNavigate()


    function handleOnLogIn(){
        axios.post("http://localhost:8000/auth/login", inputs)
        .then((res)=>{
            localStorage.setItem("token", res.data.token)
            setUser(true)
            toast.success(res.data.message)
            navigate("/")
        }).catch((e)=>{
            toast.error(e.response.data.message)
        })
    }
    
    return(
        <div className="bg-gradient-to-bl from-red-50 to-slate-200 h-screen border" style={{boxSizing: 'border-box'}}>
            <div className="flex border-2 rounded-lg shadow-2xl bg-slate-50 w-4/6 h-5/6 m-auto mt-5 ">
                <img src="../outbreak.png" alt="login-pic" className="h-max mt-7" />
                <div className="mt-28">
                    <h1 className='font-extrabold text-2xl mb-8'>Sign In</h1>
                    <form>
                        <div className='m-2 mb-5 relative'>
                            <MdEmail className='absolute text-gray-500 top-1 left-1'/>
                            <input type="email" placeholder='Email' className=' bg-slate-50 border-b-2 border-red-900 focus:text-black outline-none pl-7' autoComplete='username'
                            onChange={(e)=> setInputs({...inputs, email:e.target.value})}/>
                        </div>
                        <div className='m-2 mb-3 relative'>
                            <AiFillLock className='absolute text-gray-500 top-1 left-1'/>
                            <input type={isShown ? "text" : "password"} placeholder='Password' className=' bg-slate-50 border-b-2 border-red-900 focus:text-black outline-none pl-7' autoComplete='current-password'
                            onChange={(e)=> setInputs({...inputs, password:e.target.value})}/>
                            <span onClick={togglePasswordVisibility}>
                                {isShown ? (
                                    <AiFillEye className='absolute text-gray-500 top-1 right-1 hover' />
                                ) : (
                                    <AiOutlineEye className='absolute text-gray-500 top-1 right-1 hover' />
                                )}
                            </span>
                        </div>
                    </form>
                    <div className='ml-3 text-sm'>
                        <label><input type="checkbox"/> Remember Me </label>
                    </div>
                    <button type='submit' className='border-2 rounded-md px-2 py-0.5 mt-6 ml-16 text-white bg-red-900  hover:bg-white hover:text-red-900 hover:border-red-900'
                    onClick={handleOnLogIn}>Sign In</button>
                    <div className='mt-10 ml-10'>
                        <span>Or sign in with</span>
                        <div className='flex gap-2 mt-2 ml-2'>
                            <button><img src='../github-mark.svg' alt='github-logo' className="w-6 h-6"/></button>
                            <button><img src='../google.svg' alt='google-logo' className="w-6 h-6"/></button>
                            <button><img src='../twitter.svg' alt='twitter-logo' className="w-6 h-6"/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Login;
