import React from 'react';

const Mechanic = ( {expert }) => {
    const {img, expertize, name } = expert;
    return (
        <div className='col-lg-4 col-sm-6 col-12 border'>
            <img className='img-fluid w-75 mx-auto' src= { img } alt="" />
            <h4>Name: { name } </h4>
            <h5 className="text-danger"> { expertize } </h5>
        </div>
    );
};

export default Mechanic;