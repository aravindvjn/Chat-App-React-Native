import React, { createContext, useState } from "react";

export const UserContext = createContext(null);
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [notification, setNotification] = useState("");
  return <UserContext.Provider value={{user,setUser,notification,setNotification}}>{children}</UserContext.Provider>;
};
export default UserProvider;
