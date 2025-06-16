import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logoutUser = async () => {
      const token = localStorage.getItem("token");
    
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/users/logout`,
          {}, // body is empty
          {
            headers: {
              Authorization: `Bearer ${token}`,
            }
          }
        );
    
        if (response.status === 200) {
          localStorage.removeItem("token");
    
          setTimeout(() => {
            navigate("/users/login");
          }, 300);
        }
      } catch (err) {
        console.error("❌ Logout error:", err);
        localStorage.removeItem("token");
        navigate("/users/login");
      }
    };
    

    logoutUser();
  }, [navigate]);

  return <div>Logging out...</div>;
};

export default UserLogout;
