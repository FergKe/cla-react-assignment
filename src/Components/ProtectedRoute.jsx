import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "../Stores/useAuthStore";

export default function ProtectedRoutes () {
    const isAuthorised = useAuthStore((state) => state.isAuthorised);

    return isAuthorised ? <Outlet/> : <Navigate to='/signup' />
}