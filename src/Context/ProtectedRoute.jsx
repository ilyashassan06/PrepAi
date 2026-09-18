import React, { Children } from 'react'
import { useAuth } from './AuthContext'
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import LoadingScreen from '../components/LoadingScreen';

function ProtectedRoute() {
        const {currentUser,loading} = useAuth();
       
        if (loading) return <LoadingScreen/>;

        return currentUser ? <Outlet /> : <Navigate to="/login" replace />;
}

export default ProtectedRoute
