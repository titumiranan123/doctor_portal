import Image from 'next/image';
import React from 'react';
import { FaLocationArrow, FaMailchimp, FaPhone } from 'react-icons/fa';
import logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-4 bg-[#0E1136] px-10 py-10'>
            <div>
                <div className=' flex items-center'>
                    <Image
                        alt="Description of the image"
                        className='h-16 w-16'
                        src={logo} />
                    <span className='text-[2.25rem] font-bold text-white'><span className='text-red-600'>M</span><span className="text-white">EDIMART</span></span>
                </div>
            </div>
            <div>
                <h1 className='text-[24px] text-white'> Quick Link</h1>
                <p className='text-[16px] text-white font-[400]'>Home</p>
                <p className='text-[16px] text-white font-[400]'>About us</p>
                <p className='text-[16px] text-white font-[400]'>Service</p>
                <p className='text-[16px] text-white font-[400]'>Elements</p>
                <p className='text-[16px] text-white font-[400]'>Contacts us</p>
            </div>
            <div>
                <h1 className='text-[24px] text-white'> Useful Links</h1>
                <p className='text-[16px] text-white font-[400]'>Privacy Policy</p>
                <p className='text-[16px] text-white font-[400]'>Term & condition </p>
                <p className='text-[16px] text-white font-[400]' >Disclaimer</p>
                <p className='text-[16px] text-white font-[400]'>Faq</p>
            </div>
            <div>
                <h1 className='text-[24px] text-white'> Contact us</h1>
                <div className='flex  gap-5 text-white items-center text-[16px] font-[400]'>
                    <FaLocationArrow />
                    <p>3891 Ranchview Dr. Richardson, California Usa</p>

                </div>
                <div className='flex  gap-5 text-white items-center text-[16px] font-[400]'>
                    <FaPhone />
                    <p>01895252656</p>
                </div>
                <div className='flex  gap-5 text-white items-center text-[16px] font-[400]'>
                    <FaMailchimp />
                    <p>example@info.com</p>
                </div>
            </div>

        </div>
    );
};

export default Footer;