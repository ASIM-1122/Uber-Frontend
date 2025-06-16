import React,{useContext} from "react"
import { Link, useNavigate } from "react-router-dom"
import { useState} from "react";
import axios from "axios";
import { UserContext } from "../Context/UserContext"; // ✅ Correct import


// Date: 03/18/2021
// Description: User Login Page


function UserRegister() { 

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const navigate = useNavigate();

  // ✅ Use the context properly
  const { user, setUser } = useContext(UserContext);


  
  const submitHandler = async(e)=>{
    // On submit the form , to prevent the reload of page default behavior
    e.preventDefault();
    

    // to save the user Data, that coming from form
   const newUser = {
    fullname:{
      firstname:firstname,
    lastname:lastname
    },
    email:email,
    password:password
   }

    // to send data from front end to backend database and we use .env for server connection VITE_BASE_URL
    try{
      const response = await axios.post(`${
        import.meta.env.VITE_BASE_URL
       }/users/register`,newUser)
       
   
       if(response.status === 201){
         const data = response.data
        
   
         setUser(data.user)
         localStorage.setItem('token',data.token);
         navigate('/users/login');
       }
   
    }catch (error){
      console.log(error)

    }
// to clear the form after submit
setEmail("");
setPassword("");
setFirstName("");
setLastName("");

    
  }



  return (
    <>

    <div className="main p-7 w-full h-screen justify-between flex flex-col ">
      
    <div className="user-login-signup flex flex-col gap-4">

    <div className="logo-uberDriver mb-10">
    <img className="w-16 ml-1  inline" src="/images/uber logo.png" alt="" />
    </div>

    <form action="#" onSubmit={(e)=>{submitHandler(e)}} className="flex flex-col gap-4 ">

    <div className="input-firstname flex flex-col gap-2">
       <label
         className="text-xl font-light"
          htmlFor="firstname">What's your name</label>

   <div className="input flex w-full gap-2">
   <input
       className="px-4 py-2 w-1/2 border-0 bg-[#eee] rounded-md focus:outline-none text-lg placeholder:text-base " type="text"
       value={firstname}
       onChange={(e)=>setFirstName(e.target.value)}
        placeholder="FirstName"
         required
       />
      
        <input 
        type="text"
        placeholder="Lastname"
        value={lastname}
        onChange={(e)=>setLastName(e.target.value)}
        className="px-4 py-2 w-1/2 border-0 bg-[#eee] rounded-md focus:outline-none text-lg placeholder:text-base "  />
   </div>
       </div>

       <div className="input-email flex flex-col gap-2">
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
       </div>

       <div className="input-password flex flex-col gap-2">
      <label  
      className="text-xl font-light" 
      htmlFor="password">Enter your password:</label>

      <input 
      className="px-4 py-2 border-0 bg-[#eee] rounded-md focus:outline-none text-lg placeholder:text-base "  type="string" 
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      placeholder="Enter your Password" 
      required 
      />
      </div>

      <div className="UserRegister-button">
      <button className="w-full text-white cursor-pointer py-4 rounded-md bg-black font-bold">Create Account</button>
      </div>
      </form>

      

    <div className="forSignin justify-center items-center flex">
    <p className="">if already have account? <Link className="text-blue-600" to='/users/login'>log in</Link></p>
    </div>


    </div>
    
    <div className="DriverLogin-button ">
   <p className="text-sm leading-tight">By proceesing, you consent to get calls, WhatsApp or SMS messages, including by automated means, from Uber and its affiliates to the number provided.</p>
    </div>
    
    </div>


    </>
  )
}

export default UserRegister;
