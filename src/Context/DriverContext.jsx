import React,{ createContext,useState} from "react";


export const DriverContext = createContext(null);

function DriverProvider({ children }) {
    const [driver, setDriver] = useState({
        email: "",
        fullname: {
            firstname: "",
            lastname: "",
        },
        
    });

    return(
        <>
        <DriverContext.Provider value={{driver,setDriver}}>
            {children}
        </DriverContext.Provider>
        
        </>
    )
}

export default DriverProvider;
