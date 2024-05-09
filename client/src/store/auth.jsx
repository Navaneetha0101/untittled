import {  createContext, useContext, useState } from "react";
export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const [token, setToken] = useState(localStorage.getItem("token"));
    const storetokenInLS = (serverToken) =>{
     return localStorage.setItem("token", serverToken);
    };


    const LogoutUser = ()=>{

    }

    return <AuthContext.Provider value={{storetokenInLS}}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = ()=>{
    const authContextValue =useContext(AuthContext);
    if(!authContextValue){
        throw new Error("useAuth used outside the provider");
    }
    return authContextValue;
}