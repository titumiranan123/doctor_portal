import React from 'react';
import img from '../../assets/header1.jpg'
import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';
const About = () => {
    return (
        <div className='flex justify-center items-center flex-wrap px-5 md:px-10 lg:flex-nowrap mt-20 gap-7'>
            <div className='lg:w-1/2 w-full'>
                <Image className='border w-3/4 h-3/4 rounded-b-full rounded-s-full' src={img} alt='doctor' />
            </div>
            <div className='lg:w-1/2 w-full space-y-2'>
                <p className='text-blue-600'>About Us</p>
                <h1 className='text-[48px] font-bold w-3/4'>Medical Services & Diagnostics</h1>
                <p className='text-lg font-semibold'>Connitted to Delivering High Quality Medical & Diagnotics Services!</p>
                <p className='text-slate-500'>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
                <div>
                    <div className='flex items-center gap-5'>
                        <FaCheck className='text-blue-600' />
                        <p>Ambulance Services</p>
                    </div>

                    <div className='flex items-center gap-5'>
                        <FaCheck className='text-blue-600' />
                        <p>Oxizen on Wheel </p>
                    </div>
                    <div className='flex items-center gap-5'>
                        <FaCheck className='text-blue-600' />
                        <p>Pharmacy On Clinic </p>
                    </div>
                    <div className='flex items-center gap-5'>
                        <FaCheck className='text-blue-600' />
                        <p>On duty Doctors </p>
                    </div>
                    <div className='flex items-center gap-5'>
                        <FaCheck className='text-blue-600' />
                        <p>24/7 Medical Emergency</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;