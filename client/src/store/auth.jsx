import {  createContext, useContext, useState, useEffect } from "react";
import { baseUrl } from "../url";
export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState("");
    const authorizationToken = `Bearer ${token}`;
    
    const storetokenInLS = (serverToken) =>{
        setToken(serverToken);
        return localStorage.setItem("token", serverToken);
    };
//checks there is token?
    let isLoggedIn = !!token;
    console.log("log", isLoggedIn);
    const LogoutUser = ()=>{
        setToken("");
        return localStorage.removeItem("token");
    }
    
//to get user jwt authentication

    const userAuthentication = async()=>{
        const userauthUrl = `${baseUrl}/user`;
        try{
            const response = await fetch(userauthUrl,{
            method: "GET",
            headers:{
                Authorization: authorizationToken,
            },
         });
         if(response.ok){
            const data = await response.json();
            console.log('user_data auth', data.userData);
            setUser(data.userData);
            
         }else{
            console.log("error fetching user data");
         
         }
        }catch(error){
         console.log("error fetching data");
        }
    }
    useEffect(()=>{
       //LogoutUser();
        userAuthentication();
    },[]);

    return <AuthContext.Provider value={{ isLoggedIn,storetokenInLS, LogoutUser, user}}>
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