import React from 'react';
import './Header.css';
import Image from 'next/image';
import headerImg from '../../assets/Untitled design copy.png';

const Header = () => {
    return (
        <div className='bg-[#3B489D] relative md:h-[680px] lg:h-[890px] flex justify-center items-center   p-4 lg:px-10 px-3'>
            <div className='flex flex-wrap lg:flex-nowrap justify-center gap-5 items-center'>
                <div className=' mt-5  items-center'>
                    <p className='text-white text-[24px]'>Highest Level of service you can find</p>
                    <h1 className='text-white lg:text-[54px] text-[40px] '>Take <span className='text-red-600 underline'> Care of Your</span> <br />
                        Health Now
                    </h1>
                    <button className='text-xl font-semibold py-8 px-8 rounded-3xl bg-red-600 text-white '>Explore Our Service</button>

                </div>
                <div>
                    <Image className='lg:w-[50vw] lg:h-[35vw] h-[300px] w-full  mt-5' src={headerImg} alt='Header image' />

                </div>
            </div>
            <div class="custom-shape-divider-bottom-1693187156 hidden md:block lg:block  bg-[#3B489D] absolute bottom-0">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
        </div>
    );
};

export default Header;