import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();
    if (loading) {
        return <button className="btn loading">loading</button>
    }
    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} replace></Navigate>
};

export default PrivateRoutes;