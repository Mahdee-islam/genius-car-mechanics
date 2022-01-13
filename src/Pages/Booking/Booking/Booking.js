import React from 'react';
import { useParams } from 'react-router-dom';



const Booking = () => {
  const {serviceId} = useParams();
    return (
        <div className='my-5 py-5'> 
            <h2>This is booking: { serviceId }  </h2>
        </div>
    );
};

export default Booking;