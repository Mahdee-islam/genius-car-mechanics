import React from 'react';
import mechanic1 from '../../../images/mechanics/mechanics1.jpg';
import mechanic2 from '../../../images/mechanics/mechanics2.jpg';
import mechanic3 from '../../../images/mechanics/mechanics3.jpg';
import mechanic4 from '../../../images/mechanics/mechanics4.jpg';
import Mechanic from './Mechanic';

const experts = [
    {
        id:'1',
        name:'Ismail Sirajee',
        img:mechanic1,
        expertize:'Engine-expert'
    },
    {
        id:'2',
        name:'Saika Alom',
        img:mechanic2,
        expertize:'Wash-expert'
    },
    {
        id:'3',
        name:'Sisir Basak',
        img:mechanic3,
        expertize:'Tire-expert'
    },
    {
        id:'4',
        name:'Tonmoy Pramanik',
        img:mechanic4,
        expertize:'Color-expert'
    }
]

const Mechanics = () => {
    return (
        <div id="experts" className='container'>
            <h2 className='text-primary my-3'>Our Experts</h2>
            <div className='row'>
                {
                    experts.map(expert => <Mechanic key = { expert.id } expert = { expert }></Mechanic>)
                }
            </div>
        </div>
    );
};

export default Mechanics;