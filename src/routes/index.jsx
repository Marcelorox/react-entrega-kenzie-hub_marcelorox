import { Route, Routes } from "react-router"
import { Login } from "../components/Login"
import { Dashboard } from "../components/dashboard"
import { RegisterForm } from "../components/register/Form"


export const RoutesMain = () =>{
    return(
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/register" element={<RegisterForm/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
    )
}