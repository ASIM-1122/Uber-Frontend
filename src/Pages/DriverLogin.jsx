import React, {useContext} from "react"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import { DriverContext } from "../Context/DriverContext";

import axios from "axios";
// Date: 03/18/2021
// Description: driver Login Page


function DriverLogin() { 

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
 

  const context = useContext(DriverContext);
  const navigate = useNavigate();

   // Prevent app from crashing if context is undefined
   if (!context) {
    console.error("driverContext is undefined. Make sure this component is inside <UserProvider>.");
    return <p>Error: Context not found</p>;
}

const { driver, setDriver } = context;


  
  const submitHandler = async (e)=>{
    // On submit the form , to prevent the reload of page default behavior
    e.preventDefault();
    // to clear the form after submit
    setEmail("");
    setPassword("");

    // to save the driver Data, that coming from form
    const driverData = {
      email:email,
      password:password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/drivers/login`,driverData);

    if(response.status === 200){
      const data = response.data;
      console.log(data)
      localStorage.setItem('token',data.token);
      setDriver(data);
      navigate('/Drivers/Profile')
    }

  }



  return (
    <>
    <div className="main p-7 w-full h-screen ">
    <div className="logo-uber -mb-7">
    <img className="w-12 ml-1 mb-10 inline" src="https://i.pinimg.com/736x/db/d6/c0/dbd6c08ccef69f45e45025ba6b7b74af.jpg" alt="" />
    </div>

    <div className="driver-login-signup flex flex-col gap-4">
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

      <div className="DriverLogin-button">
      <button className="w-full text-white cursor-pointer py-4 rounded-md bg-black font-bold">Login</button>
      </div>
      </form>

      

    <div className="forSignUp justify-center items-center flex">
    <p className="">New here? <Link className="text-blue-600" to='/drivers/register'>Register as driver</Link></p>
    </div>


    </div>
    
    <div className="driverLogin-button mt-44">
    <Link to='/users/login' className="w-full flex justify-center items-center text-white cursor-pointer py-4 rounded-md bg-orange-600 font-bold">Sign in as User</Link>
    </div>
    
    </div>


    </>
  )
}

export default DriverLogin;
