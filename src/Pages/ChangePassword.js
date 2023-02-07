import axios from "axios";
import { useState } from "react";
import { toast } from 'react-toastify'

function ChangePassword(){
    const [inputs, setInputs] = useState({})
    const [error, setError] = useState("");
    const token = localStorage.getItem("token")

    const handleSubmit = (event) => {
        event.preventDefault();

        if (inputs.newPassword !== inputs.confirmPassword) {
            setError('Passwords do not match')
            toast.error(error);
            return;
        }
        if(inputs.newPassword === inputs.oldPassword){
            setError('Please use a new password')
            toast.error(error);
            return;
        }
        axios.put(`http://localhost:8000/auth/change/:id`, inputs,{
            headers:{
                Authorization:token
            }
        })
        .then((res)=>{
            toast.success(res.data.message)
        }).catch((e) => {
            console.log(e)
            toast.error(e.response.data.message)
        });
    };

    return(
        <div className="bg-gradient-to-bl from-red-50 to-slate-200 h-screen border">
            <div className="m-auto w-1/2 mt-5 p-5 bg-white rounded-md">
                <h2 className="mb-8 text-center font-bold text-2xl">Change Password</h2>
                <p className="text-gray-500 pb-4">Make sure your new password is a strong password. Do mix letters and special characters</p>
                <div className="my-2 space-y-2">
                    <span>Enter old password</span>
                    <input className="w-full border p-2 rounded-md" type="text" 
                    onChange={(e) => setInputs({...inputs, oldPassword:e.target.value})}/>
                </div>
                <div className="my-2 space-y-2">
                    <span>Enter new password</span>
                    <input className="w-full border p-2 rounded-md" type="text" 
                    onChange={(e) => setInputs({...inputs, newPassword:e.target.value})}/>
                </div>
                <div className="my-2 space-y-2">
                    <span>Confirm new password</span>
                    <input className="w-full border p-2 rounded-md" type="text" 
                    onChange={(e) => setInputs({...inputs, confirmPassword:e.target.value})}/>
                </div>
                <div className="flex justify-center mt-5">
                    <button className="px-5 py-2.5 bg-blue-500 text-white rounded-md"
                    onClick={handleSubmit}>Change Password</button>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword