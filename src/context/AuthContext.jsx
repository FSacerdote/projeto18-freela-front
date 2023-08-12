import { createContext, useState } from "react";


const AuthContext = createContext()

function AuthContextProider ({children}){

    const lsToken = localStorage.getItem("token")
    const [token, setToken] = useState(lsToken)

    return(
        <AuthContext.Provider values={{token, setToken}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthContextProider}