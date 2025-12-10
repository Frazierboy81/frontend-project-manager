// import { useState } from "react";

function LoginPage(){

    // const [login, setLogin] = useState("")
    // const [loggedIn, setLoggedIn] = useState (false)

    

    // if (!loggedIn) {
    //     return "Please enter your login info"
    // } else {
    //     setLoggedIn(true)
    // }


    return(
    
    <div>
        <h1 className="flex justify-center text-2xl text-white font-bold">Sign In</h1>

        <form className="flex justify-center mt-4 flex-col w-84 text-white" action="submit">
            <label htmlFor="username">Username:</label>
            <input className="outline m-2 rounded-md" type="text" placeholder="username" />
            <label htmlFor="password">Password:</label>
            <input className="outline m-2 rounded-md" type="text" placeholder="password" />
        </form>
        
    </div>)
    
}

export default LoginPage;