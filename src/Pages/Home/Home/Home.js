import React from 'react';
import Banner from '../Banner/Banner';
import Mechanics from '../Mechanics/Mechanics';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id = "home">
            <Banner/>
            <Services/>
            <Mechanics/>
        </div>
    );
};

export default Home;