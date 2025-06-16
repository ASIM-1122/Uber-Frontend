import React, { useRef,useState } from "react";
import {useGSAP} from '@gsap/react';
import gsap from "gsap";
import 'remixicon/fonts/remixicon.css';

export default function Home() {

    const [pickupLocation,setPickupLocation] = useState(" ");
    const [Destination, setDestination] = useState("");
    const [panelOpen, setPanelOpen] = useState(false);

    const panelRef = useRef(null);
    const downArrowRef = useRef(null);
    

    const submitHandler = (e) => {
        e.preventDefault();

        setPickupLocation("");
        setDestination("");
        console.log("pickupLocation", pickupLocation);
        console.log("Destination", Destination);
        // Add your logic to handle the form submission here
        // For example, you can send the data to a server or perform some other action.
        // const data = { pickupLocation, Destination };


    }

    useGSAP(function(){
        if(panelOpen){
            gsap.to(panelRef.current,{
                height:"70%"
            }),
            gsap.to(downArrowRef.current,{
                opacity:'1'
            })
            }else{
                gsap.to(panelRef.current,{
                    height:"0",
                    display:"block"
                }),
                gsap.to(downArrowRef.current,{
                    opacity:'0'
                })
            }
    },[panelOpen])

    return(
        <>
        <div className="main ">
            <div className="logo absolute top-5 left-5">
                <img className="w-36" src="/images/uber logo.png" alt="Uber Logo" />
            </div>
            <div className="map h-screen w-screen">
                <img className="h-full w-full object-cover" src="https://cdn.theatlantic.com/thumbor/BlEOtTo9L9mjMLuyCcjG3xYr4qE=/0x48:1231x740/960x540/media/img/mt/2017/04/IMG_7105/original.png" alt="Map" />
            </div>

            <div className="form">
            <form action="" onSubmit={(e)=>{ submitHandler(e)}} className=" absolute top-0 left-1/2 transform -translate-x-1/2 w-full flex flex-col justify-end  h-screen">

                <div className="input-area gap-3 flex flex-col  w-full h-[30%] p-5 rounded-md  bg-white">
            
                <div className="name flex justify-between relative gap-2">
                    <h1 className="font-semibold text-3xl ">Find a trip</h1>
                <i 
                className="ri-arrow-down-s-line text-3xl opacity-0"
                ref={downArrowRef}
                onClick={()=>{setPanelOpen(false)}}></i>
                </div>
                <div className=" input-box flex flex-col gap-5">

                   <input type="text"
                   placeholder="Add your distination"
                   className="w-full text-base rounded-md bg-gray-100 p-3 h-full"
                    onClick={()=>{
                        setPanelOpen(true)
                    }}  />
            
                    <input type="text"
                    placeholder="Enter your Destination" 
                    className="w-full text-base h-full p-3 rounded-md bg-gray-100" 
                    value={Destination} 
                    onChange={(e)=>{setDestination(e.target.value)}}
                    onClick={()=>{
                        setPanelOpen(true)
                    }} 
                    />

                </div>

                </div>

                 <div 
                    className="panelOpen bg-white hidden  duration-100 "
                    ref={panelRef}
                    >
                    
                </div>
               
            </form>    
            </div>
        </div>
        
        </>
    )
}