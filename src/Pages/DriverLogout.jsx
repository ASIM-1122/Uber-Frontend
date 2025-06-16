import React, { useEffect } from "react";
import axios from "axios";
import {  useNavigate } from "react-router-dom";

const DriverLogout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const logoutDriver = async ()=>{
            const token = localStorage.getItem("token");
            try {
                const response = await axios.post(
                    `${import.meta.env.VITE_BASE_URL}/drivers/logout`,
                    {},
                    {
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                });
                if(response.status === 200){
                    localStorage.removeItem("token");
                    setTimeout(() => {
                        navigate("/drivers/login");
                    }, 300);
                }
            } catch (err) {
                console.error("❌ Logout error:", err);
                localStorage.removeItem("token");
                navigate("/drivers/login"); 
            }

        }
        logoutDriver();

    },[navigate]);
};

export default DriverLogout;