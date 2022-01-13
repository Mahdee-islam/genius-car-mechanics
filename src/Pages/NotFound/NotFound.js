import React from 'react';
import { Link } from 'react-router-dom';
import Error from '../../images/error-404-background-design.jpg';

const NotFound = () => {
    return (
        <div style = {{
            backgroundColor: '#C7CAD1',
        }}>
            <img src= { Error } alt="" />
            <br />
            <Link to = "/home" className='btn btn-primary'>Go Back</Link>
        </div>
    );
};

export default NotFound;