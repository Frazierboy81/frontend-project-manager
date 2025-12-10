import { createContext, useState, } from "react";
import type { User } from "../types";

interface AuthContextType {
    user: User | null;
    setUser: (user: User) => void;
    logIn: (username: string, password: string) => void;
    register: (username: string, email: string, password: string) => void;
    logOut: () => void;
    token: string | null;
    setToken: (token: string) => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
    children: React.ReactNode;
}

export default function AuthProvider({children}: AuthProviderProps) {
    const [user, setUser] = useState<User | null>(() => {
        try {
            const value = localStorage.getItem("user");
            if (value) {
                return JSON.parse(value);
            } else return null;
        } catch (error) {
                console.error(error);    
        }
    });

    const [token, setToken] = useState<string | null>(() => {
        try {
            const value = localStorage.getItem("token");
            if (value) {
                return JSON.parse(value);
            } else return null;
        } catch (error) {
            console.error(error);
            
        }
    });

    const logIn = async (email: string, password: string) => {
        console.log(email, password);
        
    };
    const register = async (username: string, password: string, email: string) => {
        console.log(username, password, email);
        
    };
    const logOut = () => {};

    return (
        <AuthContext.Provider
        value={{user, setUser, logIn, register, logOut, token, setToken}}>
            {children}
        </AuthContext.Provider>
    )
}
