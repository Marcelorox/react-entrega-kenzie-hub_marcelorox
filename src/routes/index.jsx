import { Route, Routes } from "react-router"
import { Login } from "../components/Login"
import { Dashboard } from "../components/dashboard"
import { RegisterForm } from "../components/register/Form"
import { ProtectedRoutes } from "./ProtectedRoute"
import { PublicRoutes } from "./PublicRoute"
import { TechProvider } from "../context/TechContext"


export const RoutesMain = () =>{
    return(
        <Routes>
            <Route path="/" element={<PublicRoutes/>}>
                <Route index element={<Login/>}/>
                <Route path="/register" element={<RegisterForm/>}/>
            </Route>
            
            <Route path="/dashboard" element={<ProtectedRoutes/>}>
                <Route index element={<TechProvider><Dashboard/></TechProvider>}/>
            </Route>
        </Routes>
    )
}