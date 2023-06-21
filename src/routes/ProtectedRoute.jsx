import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Outlet, Navigate } from "react-router";

export function ProtectedRoutes (){
    const { user } = useContext(UserContext)

    return user ? <Outlet/> : <Navigate to="/"/>
}