import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { singInUsingGoogle } = useAuth();
    return (
        <div className='my-5'>
            <h2 className='py-3'>Please Login</h2>
            <button onClick={ singInUsingGoogle } className='btn btn-danger'>Google Signin</button>
        </div>
    );
};

export default Login;