
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute=({children,...rest})=>{
    let token = localStorage.getItem("token");

    return(
        token ? <Outlet/> : <Navigate to='/inicio' />
    )
}
    