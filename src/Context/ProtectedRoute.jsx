import React, { Children } from 'react'
import { useAuth } from './AuthContext'
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

function ProtectedRoute() {
        const {currentUser,loading} = useAuth();
       
        if (loading) return <p>Loading...</p>;

        return currentUser ? <Outlet /> : <Navigate to="/login" replace />;
}

export default ProtectedRoute
