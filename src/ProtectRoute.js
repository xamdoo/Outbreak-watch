import { useContext } from "react";
import UserContext from './Utils/UserContext';
import { Navigate } from "react-router-dom";

function ProtectRoute({children}){
    const {user} = useContext(UserContext)

    if(user === false){
        return <Navigate to="/login"/>
    }
    return children
}


export default ProtectRoute