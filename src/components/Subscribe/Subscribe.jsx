'use client'
import React from 'react';

const Subscribe = () => {
    return (
        <div className='mt-20 px-10 mb-20 space-y-4 group'>
            <div className='text-4xl  text-black'>
                <span className='text-red-500'>Subscribe</span>
                <span>for the exclusive updates !</span>
            </div>
            <div className='rounded-lg border flex justify-between p-2 group-hover:border-blue-500 focus:to-blue-500 w-3/4 '>
                <input type="text " className='text-xl py-2 focus:outline-none w-full px-6' placeholder='Enter Your Email Address' />
                <button className="py-2 text-white font-bold px-6 bg-blue-500 border-none focus:border-none focus:ring-0 rounded-xl flex justify-center items-center flex-nowrap">Subscribe Now</button>


            </div>
            <div>
                <input type="checkbox" name="" id="" /> I agree to the <a href="#" className='underline'> Privacy Policy</a>
            </div>
        </div>
    );
};

export default Subscribe;