"use client"
import React from 'react';
import './Category.css'
import Categorycard from '../CategoryCard/Categorycard';
import doctor from '../../assets/doctor.jpg';
import HoverCard from '../CategoryCard/Card';

const Category = () => {
    return (
        <div className="flex justify-center items-center mt-20">

            <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2'>
                <Categorycard img={doctor} title={"Qualified Doctor"} description={"Our doctor is the best doctor Because  Our Doctor is expriced "} />

                <Categorycard img={doctor} title={"Qualified Doctor"} description={"Our doctor is the best doctor Because  Our Doctor is expriced "} />

                <Categorycard img={doctor} title={"Qualified Doctor"} description={"Our doctor is the best doctor Because  Our Doctor is expriced "} />

                <Categorycard img={doctor} title={"Qualified Doctor"} description={"Our doctor is the best doctor Because  Our Doctor is expriced "} />


            </div>
        </div>
    );
};

export default Category;