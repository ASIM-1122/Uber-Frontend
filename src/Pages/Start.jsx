import React from "react"
import { Link } from "react-router-dom"


function Start() {
  return (
    <>
      <div className="main w-full h-screen flex flex-col justify-center items-center">
        <div className="main-img bg-cover bg-center bg-[url(https://i.pinimg.com/736x/62/c7/61/62c761f54dcf0c6e5f07556016ab33d2.jpg)] flex-2/3  w-full p-2">
        <img className="w-42 ml-1" src="/images/Uber Logo 1.png" alt="" />
        </div>
        <div className="bottom bg-white flex flex-col gap-5 p-4 w-full ">
              <h1 className="text-3xl font-bold">Get started with Uber</h1>
              
                 <Link to='/users/login' className="py-2 font-bold  cursor-pointer button rounded-md bg-black text-white justify-center items-center flex w-full hover:bg-gray-950 duration-150">
                  <h1>Continue</h1>
                  {/* <span className=" right-1">L</span> */}
                  </Link>
           
        </div>
        
      </div>
    </>
  )
}

export default Start;