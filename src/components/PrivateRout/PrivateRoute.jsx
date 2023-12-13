import { useContext } from "react";

import {Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";


const PrivaterRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
   

    if (loading) {
        return <div className="flex justify-center">
           <span className="loading loading-spinner loading-lg"></span>
        </div>
    }
    if (user) {
        return children
    }
    return <Navigate to='/login' state={{from:location}} replace ></Navigate>
};

export default PrivaterRoute;