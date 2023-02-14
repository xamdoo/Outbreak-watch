import { MdDeleteOutline } from 'react-icons/md'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'


function Comment(props){
    const token = localStorage.getItem("token")
    const [isCommentOwner, setIsCommentOwner] = useState(false);

    useEffect(() => {
        axios
        .get(`http://localhost:8000/auth/user`, {
            headers: {
            Authorization: token,
            },
        })
        .then((res) => {
            setIsCommentOwner(res.data.user._id === props.data.user._id)
        })
        .catch((e) => {
            console.log(e);
        });
    },[]);


    const date = new Date(props.data.date);
    const formattedDate = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
    }).format(date);

    function handleOnDelete(){
        
        axios.delete(`http://localhost:8000/comment/${props.data._id}`, {
        headers:{
            Authorization:token
        }
        }).then((res)=>{
            toast.success(res.data.message)
        }).catch((e)=>{
            toast.error(e.response.data.message)
        })
    }
    return (
        
        <div className="py-5">
            <div className="flex space-x-2">
                <div className="">               
                    <img className="h-12 w-12 rounded-full" src={`http://localhost:8000/${props.data.user.file}`} alt=""/>
                </div>
                <div className="border w-full rounded-md p-3">
                    <div className="flex items-center space-x-3 justify-between">
                        <div className='flex items-center space-x-3 '>
                            <h2 className='font-bold'>{props.data.user.firstName} {props.data.user.secondName}</h2>
                            <h2 className="text-gray-500">{formattedDate}</h2>
                        </div>
                        { isCommentOwner &&
                            <div>
                                <MdDeleteOutline className='w-10 h-6'
                                onClick={handleOnDelete}/>
                            </div>
                        }
                    </div>
                    <p className="text-lg py-2">{props.data.comment}</p>
                </div> 
                </div>
            </div>
    )
}

export default Comment