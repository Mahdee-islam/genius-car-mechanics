

import { Spinner } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const RequiredAuth = ( { children } ) => {
    const { user, loading } = useAuth();
    console.log(loading);
    if(loading) {
        return <Spinner animation="border" variant="danger" />
    }

    return user.email ? children : <Navigate to="/login"></Navigate>;
};

export default RequiredAuth;