import React from 'react'
import { Navigate, Outlet } from 'react-router'

const useAuth = () => {
    const user = localStorage.getItem("userLoggedIn")
    if (user) {
        return true
    } else {
        return false
    }
}

const PublicRoutes = ({ props }) => {
    const auth = useAuth()
    return auth ? <Navigate to={"/Dashboard"}></Navigate> : <Outlet />
}
export default PublicRoutes;