import React from 'react';
import Servicecard from '../Servicecard/Servicecard';
import img from '../../assets/nerology.jpg';

const Service = () => {
    return (
        <div className='mt-20 flex flex-col justify-center items-center '>
            <div>
                <p className='text-blue-700 text-lg text-center'>Our Services</p>
                <h1 className="text-center tex-black text-[34px] font-bold">We Offer For You Medical & Saving Lives</h1>
            </div>
            <div className='flex flex-wrap lg:flex-nowrap gap-5 mt-10'>
                <Servicecard img={img} title={"Neurosurgery"} description={"Amet minim mollit non deserunt ullamco aliqua dolor do amet sint."} />
                <Servicecard img={img} title={"Modern Laboratory"} description={"Amet minim mollit non deserunt ullamco aliqua dolor do amet sint."} />
                <Servicecard img={img} title={"Experienced Doctors"} description={"Amet minim mollit non deserunt ullamco aliqua dolor do amet sint."} />

            </div>

        </div>
    );
};

export default Service;