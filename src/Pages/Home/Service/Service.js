import React from 'react';
import { Link } from 'react-router-dom';

import './Service.css';

const Service = ( { service } ) => {
    const {name, price, description, img, id} = service;

    return (
        <div className='service mx-3 pb-3'>
            <img  src= {img} alt="" />
            <h3> { name } </h3>
            <h5> Price:  $ { price } </h5>
            <p className='px-3'> { description } </p>
          <Link to = { `/booking/${id}` } className='btn btn-warning text-light'>Book { name.toLowerCase()} </Link>
        </div>
    );
};

export default Service;