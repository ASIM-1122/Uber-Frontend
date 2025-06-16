import React, {useContext} from "react"
import { Link } from "react-router-dom"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import axios from "axios";
// Date: 03/18/2021
// Description: User Login Page


function UserLogin() { 

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [userData,setUserData] = useState({});

  const navigate = useNavigate();

  const context = useContext(UserContext);

  // Prevent app from crashing if context is undefined
  if (!context) {
      console.error("UserContext is undefined. Make sure this component is inside <UserProvider>.");
      return <p>Error: Context not found</p>;
  }

  const { user, setUser } = context;



  
  const submitHandler = async(e)=>{
    // On submit the form , to prevent the reload of page default behavior
    e.preventDefault();
    // to clear the form after submit
    setEmail("");
    setPassword("");

    // to save the user Data, that coming from form
   const data = {
    email:email,
    password:password
    };

   try{
     // to send the data to the server
     const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`,data);
    if(response.status === 200){
      const data = response.data;
      setUser(data.user);
      localStorage.setItem('token',data.token);
      navigate('/home');
    }
     
    
   }catch(error){
     console.log(error)
  }
}



  return (
    <>
    <div className="main p-7 w-full h-screen ">
      
    <div className="logo-uberDriver">
    <img className="w-16 ml-1 mb-10 inline" src="/images/uber logo.png" alt="" />
    </div>

    <div className="user-login-signup flex flex-col gap-4">
    <form action="#" onSubmit={(e)=>{submitHandler(e)}} className="flex flex-col gap-4 ">
        <label
         className="text-xl font-light"
          htmlFor="email">What's your email?</label>

      <input
       className="px-4 py-2 border-0 bg-[#eee] rounded-md focus:outline-none text-lg placeholder:text-base " type="email"
       value={email}
       onChange={(e)=>setEmail(e.target.value)}
        placeholder="Enter your email"
         required
       />
      <label  
      className="text-xl font-light" 
      htmlFor="password">Enter your password:</label>

      <input 
      className="px-4 py-2 border-0 bg-[#eee] rounded-md focus:outline-none text-lg placeholder:text-base "  type="password" 
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      placeholder="Enter your Password" 
      required 
      />

      <div className="UserLogin-button">
      <button className="w-full text-white cursor-pointer py-4 rounded-md bg-black font-bold">Login</button>
      </div>
      </form>

      

    <div className="forSignUp justify-center items-center flex">
    <p className="">New here? <Link className="text-blue-600" to='/users/register'>Create a account</Link></p>
    </div>


    </div>
    
    <div className="DriverLogin-button mt-44">
    <Link to='/drivers/login' className="w-full flex justify-center items-center text-white cursor-pointer py-4 rounded-md bg-green-600 font-bold">Sign in as Driver</Link>
    </div>
    
    </div>


    </>
  )
}

export default UserLogin;
