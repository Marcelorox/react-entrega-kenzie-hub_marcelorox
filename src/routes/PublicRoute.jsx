import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Outlet, Navigate } from "react-router";

export function PublicRoutes (){
    const { user } = useContext(UserContext)

    return !user ? <Outlet/> : <Navigate to="/dashboard"/>
}