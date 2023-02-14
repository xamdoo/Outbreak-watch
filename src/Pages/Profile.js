import { useState, useEffect } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom";


function Profile(){
    const [input, setInput] = useState({});
    const token = localStorage.getItem("token")
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        axios
        .get(`http://localhost:8000/auth/user`, {
            headers: {
            Authorization: token,
            },
        })
        .then((res) => {
            setInput(res.data.user);
            setLoading(false);
        })
        .catch((e) => {
            console.log(e);
        });
        if(loading) return
    },[]);
    

    function handleOnSave(event){
        event.preventDefault();
        const formData = new FormData();
        formData.append("file", input.file);
        formData.append("firstName", input.firstName);
        formData.append("secondName", input.secondName);
        formData.append("location", input.location);
        formData.append("work", input.work);
        formData.append("bio", input.bio);
        
        axios.put('http://localhost:8000/auth/fill/:id', formData,{headers:{authorization:token}, "Content-Type": "multipart/form-data"}
        ).then((res)=>{
            toast.success(res.data.message)
            navigate("/dashboard")
        }).catch((err)=>{
            toast.error(err.response.data.message)
        })
    }

    

    return (
        
        <div className="bg-gradient-to-bl from-red-50 to-slate-200 h-screen border">
            <div className="h-max m-auto w-1/2 mt-5 p-5 bg-white rounded-lg">
                <h2 className="mb-6 text-center font-bold text-2xl">Edit profile</h2>
                <div className="my-2 space-y-2">
                    <span>First Name</span>
                    <input className="border p-2 rounded-md w-full" type="text"
                    value={input.firstName}
                    onChange={(e)=> setInput({...input, firstName:e.target.value})}
                    />
                </div>
                <div className="my-2 space-y-2">
                    <span>Second Name</span>
                    <input className="border p-2 rounded-md w-full" type="text"
                    value={input.secondName}
                    onChange={(e)=> setInput({...input, secondName:e.target.value})}/>
                </div>
                <div className="my-2 space-y-2">
                    <span>Location</span>
                    <input className="border p-2 rounded-md w-full" type="text"  
                    value={input.location}
                    onChange={(e)=> setInput({...input, location:e.target.value})}/>
                </div>
                <div className="my-2 space-y-2">
                    <span>Work</span>
                    <input className="w-90 border p-2 rounded-md w-full" type="text"
                    value={input.work}
                    onChange={(e)=> setInput({...input, work:e.target.value})}></input>
                </div>
                <div className="my-2 space-y-2">
                    <span>Bio</span>
                    <textarea className="border w-full rounded-md p-2 max-h-32 overflow-y-auto"
                    value={input.bio}
                    onChange={(e)=> setInput({...input, bio:e.target.value})}></textarea>
                </div>
                <div className="mt-2">
                    <input type="file"
                    onChange={(e)=>{
                        setInput({...input, file:e.target.files[0]})
                    }}/>
                </div>
                <div className="flex justify-center">
                    <button type="submit" className="px-5 py-2.5 bg-blue-500 text-white rounded-md" 
                    onClick={handleOnSave}>Save</button>
                </div>
                </div>
        </div>

    )
}

export default Profile