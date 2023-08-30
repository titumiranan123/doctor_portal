"use client"
import React from 'react';
import { BsCheck2Circle } from 'react-icons/bs'
import { FaArrowRight } from 'react-icons/fa';
import './Pricecard.css'
const Pricingcard = ({ title, price }) => {
    return (
        <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className='lg:w-[550px] w-full p-10 space-y-4 shadow-2xl'>
            <div className='space-y-4' >
                <p className="text-lg text-blue-500">{title} </p>
                <p className='text-4xl font-bold'>$ {price}</p>
                <p className='text-slate-500'>Monthly</p>
                <hr className=' border w-full border-slate-700' />
                <span ></span>
            </div>
            <div className='relative space-y-4'>
                <div className='flex items-center gap-2'>
                    <BsCheck2Circle className='text-red-600' />
                    Virtual visit
                </div>
                <div className='flex items-center gap-2'>
                    <BsCheck2Circle className='text-red-600' />
                    Up to 30 Minites
                </div>
                <div className='flex items-center gap-2'>
                    <BsCheck2Circle className='text-red-600' />
                    Securely conducted online
                </div>
                <div className='flex items-center gap-2'>
                    <BsCheck2Circle className='text-red-600' />
                    Siscuss and receive guidance
                </div>
                <div className='flex items-center gap-2'>
                    <BsCheck2Circle className='text-red-600' />
                    Rate varies on specific needs
                </div>
                <div className='flex items-center gap-2'>
                    <BsCheck2Circle className='text-red-600' />
                    Healthcare provider Consult
                </div>
                <button className="theme-btn flex justify-center items-center gap-2  rounded-xl px-4 py-2 bg-slate-200 hover:bg-blue-700 hover:text-white shadow-2xl border-2">Choose Plan <FaArrowRight /></button>
            </div>
        </div>
    );
};

export default Pricingcard;