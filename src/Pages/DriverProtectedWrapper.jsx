import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DriverContext } from "../Context/DriverContext";
import axios from "axios";

const DriverProtectedWrapper = ({ children }) => {
    const token = localStorage.getItem("token");
    const { driver, setDriver } = useContext(DriverContext);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const verifyDriver = async () => {
            if (!token) {
                navigate("/drivers/login");
                return;
            }

            try {
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/drivers/profile`, {
                    headers: { Authorization: `Bearer ${token}` },
                });

                if (response.status === 200) {
                    setDriver(response.data);
                    setLoading(false);
                }
            } catch (err) {
                console.error("❌ Error fetching driver profile:", err);
                localStorage.removeItem("token");
                navigate("/drivers/login");
            }
        };

        verifyDriver();
    }, [token, navigate, setDriver]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return <>{children}</>;
};

export default DriverProtectedWrapper;
