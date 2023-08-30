'use client'
import React from 'react';
import Pricingcard from '../Pricingcard/Pricingcard';
import { motion } from 'framer-motion';

const Pricing = () => {

    return (
        <div

            className='mt-20'>
            <div>
                <p className="text-blue-500 text-center">Our Pricing</p>
                <div className="h1 text-4xl font-bold text-black text-center">Affordable Care Options For All Patients</div>
            </div>
            <div className='flex flex-wrap lg:flex-nowrap justify-center px-10 items-center'>
                <Pricingcard

                    title={"STANDARD CONSULTATION"} price={'49.99'} />
                <Pricingcard title={'ANNUAL PHYSICAL'} price={149.99} />
                <Pricingcard title={"DEXTENDED CONSULTATION"} price={99.8} />
            </div>
        </div>
    );
};

export default Pricing;