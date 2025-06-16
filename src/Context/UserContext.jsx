import React, { createContext, useState } from "react";

// Creating context
export const UserContext = createContext(null);

function UserProvider({ children }) {
  const [user, setUser] = useState({
    email: "",
    fullname: {
      firstname: "",
      lastname: "",
    },
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
