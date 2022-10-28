import { useState, createContext } from "react";

export const LoggedInContext = createContext();

const LoggedInContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    
    const toggleLoggedIn = () => {
        setIsLoggedIn(isLoggedIn = !isLoggedIn)
    }
  
        return(
        <LoggedInContext.Provider value={{isLoggedIn, toggleLoggedIn}}>
            {props.children}
        </LoggedInContext.Provider>
   ) 
}

export default LoggedInContextProvider