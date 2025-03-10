import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRouter = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    if(loading){
        return <div>Loading...</div>
    }
    if(user){
        return children
    }
    return (
        <div>
            <Navigate to='/signin'></Navigate>
        </div>
    );
};

export default PrivateRouter;