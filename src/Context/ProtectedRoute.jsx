import React, { Children } from 'react'
import { useAuth } from './AuthContext'
import { useNavigate } from 'react-router-dom';

function ProtectedRoute() {
        const {currentUser} = useAuth();
        const navigate = useNavigate();

        if(!user){
            return  <Navigate to="/login" replace />;
        }

  return Children
}

export default ProtectedRoute
