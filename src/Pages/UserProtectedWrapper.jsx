import React, {useEffect,useContext} from 'react';
import { UserContext } from '../Context/UserContext';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const UserProtectedWrapper = ({children})=>{
    const token = localStorage.getItem("token");
    const {user,setUser} = useContext(UserContext);
    const navigate = useNavigate();
    const [loading,setLoading] = React.useState(true);

    useEffect(()=>{

        const verifyUser = async ()=>{

            if(!token){
                navigate("/users/login");
                return;
            }

        try{
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`,{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            });

            if(response.status === 200){
                setUser(response.data);
                setLoading(false);
            }

        }catch(err){
            console.error("❌ Error fetching user profile:", err);
            localStorage.removeItem("token");
            navigate("/users/login");
        }
        }
        verifyUser();

    },[navigate,setUser,token]);
     
    if(loading){
        return <div>Loading...</div>;
    }

    return (
        <>{children}</>
    )

}

export default UserProtectedWrapper;