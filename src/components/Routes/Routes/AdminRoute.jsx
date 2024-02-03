import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import UseAdmin from '../../../hooks/UseAdmin';

const AdminRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const [isAdmin,isAdminLoading] = UseAdmin();
    const location = useLocation();
    if(loading || isAdminLoading){
        return <div>Loading ...</div>
    }
    if(user && isAdmin){
        return children;
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default AdminRoute;