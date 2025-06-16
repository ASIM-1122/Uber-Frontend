import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import { DriverContext } from "../Context/DriverContext";
import { useContext } from "react";
import axios from "axios"
// Date: 03/18/2021
// Description: User Login Page

 
function DriverRegister() { 

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [numberPlate,setNumberPlate] = useState("");
  const [Color,setColor] = useState("");
  const [capacity,setCapacity] = useState("");
  const [vehicleType,setVehicleType] = useState("");
  const [phone,setPhone] = useState("");

  const {driver,setDriver} = useContext(DriverContext);
  const navigate = useNavigate();

  
  const submitHandler = async(e)=>{
    // On submit the form , to prevent the reload of page default behavior
    e.preventDefault();
    

    // to save the Driver Data, that coming from form
   const driverData = {
     email:email,
     password:password,
     phone:phone,
     fullname:{
       firstname:firstname,
       lastname:lastname
     },
     vehicle:{
        Color: Color,
        numberPlate: numberPlate,
        capacity: Number(capacity),
        vehicleType: vehicleType
     }
   }
   
   // to clear the form after submit
   setEmail("");
   setPassword("");
   setFirstName("");
   setLastName("");
   setNumberPlate("");
   setColor("");
   setCapacity(1);
   setVehicleType("");
   setPhone("");

    // to save the driver data in the database
    try{

    const response= await  axios.post(`${import.meta.env.VITE_BASE_URL}/drivers/register`,driverData)
   
      
        if(response.status === 201){
          const data = response.data;
          localStorage.setItem('token',data.token);
          setDriver(data);
          navigate('/drivers/login')

        }
      
       



    }catch(err){
      console.log(err);
    }



  }



  return (
    <>

    <div className="main p-7 w-full h-screen justify-between flex flex-col ">
      
   
    
    <div className="driver-signup flex flex-col gap-4">

    <div className="logo-uberDriver mb-10">
    <img className="w-16 ml-1  inline" src="/images/uber logo.png" alt="" />
    </div>

    <form action="#" onSubmit={(e)=>{submitHandler(e)}} className="flex flex-col gap-4 ">

    <div className="input-firstname flex flex-col gap-2">
       <label
         className="text-xl font-light"
          htmlFor="firstname">What's driver's name</label>

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
          htmlFor="email">What's driver's email?</label>

      <input
       className="px-4 py-2 border-0 bg-[#eee] rounded-md focus:outline-none text-lg placeholder:text-base " type="email"
       value={email}
       onChange={(e)=>setEmail(e.target.value)}
        placeholder="Enter your email"
         required
       />
       </div>
       <div className="input-phone flex flex-col gap-2">
       <label
         className="text-xl font-light"
          htmlFor="phone">Phone Number:</label>

      <input
       className="px-4 py-2 border-0 bg-[#eee] rounded-md focus:outline-none text-lg placeholder:text-base " type="string"
       value={phone}
       onChange={(e)=>setPhone(e.target.value)}
        placeholder="Enter your phone number"
         required
       />
       </div>

       <div className="input-password flex flex-col gap-2">
      <label  
      className="text-xl font-light" 
      htmlFor="password">Enter our driver's password:</label>

      <input 
      className="px-4 py-2 border-0 bg-[#eee] rounded-md focus:outline-none text-lg placeholder:text-base "  type="string" 
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      placeholder="Enter your Password" 
      required 
      />
      </div>

      <div className="Vehicle_info flex flex-col gap-2">
            <label
            className="text-xl font-light"
            htmlFor="vehicle">Vehicle Info:</label>

          <div className="input flex w-full gap-2">
   <input
       className="px-4 py-2 w-1/2 border-0 bg-[#eee] rounded-md focus:outline-none text-lg placeholder:text-base " type="text"
       value={Color}
       onChange={(e)=>setColor(e.target.value)}
        placeholder="Color"
         required
       />
      
        <input 
        type="text"
        placeholder="Number Plate"
        value={numberPlate}
        onChange={(e)=>setNumberPlate(e.target.value)}
        className="px-4 py-2 w-1/2 border-0 bg-[#eee] rounded-md focus:outline-none text-lg placeholder:text-base "  />
          </div>
          <div className="input flex w-full gap-2">
   <input
       className="px-4 py-2 w-1/2 border-0 bg-[#eee] rounded-md focus:outline-none text-lg placeholder:text-base " type="Number"
       value={capacity}
       onChange={(e)=>setCapacity(Number(e.target.value))}
        placeholder="Capacity"
         required
       />
      
       <select 
       required
       value={vehicleType}
        onChange={(e)=>setVehicleType(e.target.value)}
        className="px-4 py-2 w-1/2 border-0 bg-[#eee] rounded-md focus:outline-none text-lg placeholder:text-base "
       >
        <option value="" disabled>Vehicle type</option>
        <option value="car" >Car</option>
        <option value="bike">Bike</option>
        <option value="auto-riksha" >Auto Riksha</option>
   
       </select>

   </div>
      </div>

      <div className="DraverRegister-button">
      <button className="w-full text-white cursor-pointer py-4 rounded-md bg-black font-bold">Create Account</button>
      </div>
      </form>

      

    <div className="forSignin justify-center items-center flex">
    <p className="">if already have account? <Link className="text-blue-600" to='/drivers/login'>log in</Link></p>
    </div>


    </div>
    
    
    
    </div>


    </>
  )
}

export default DriverRegister;
