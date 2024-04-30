import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoutes() {
    constauth = localStorage.getItem('loggedin');

    return auth ? <Outlet/> : <Navigate to={'/login'}/>;

}