"use client"
import Image from 'next/image';
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from "framer-motion"
import './Teamcard.css'
const Teamcard = ({ img, name, degination }) => {
    return (
        <div className='w-full group lg:w-80'>
            <div className='relative'>
                <motion.div
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 0.9 }}
                    className="">
                    <Image className='bg-cover rounded-lg h-64 group-hover:scale-50: ' src={img} alt='' />
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.9 }}
                    className='bg-slate-800 w-full absolute top-0 h-full bg-opacity-60 flex justify-center text-white items-center hover:gap-6 hover:transition opacity-0 hover:opacity-100 gap-1 ease-in duration-300 rounded-lg  '>
                    <FaInstagram />
                    <FaFacebook />
                    <FaTwitter />
                    <FaLinkedin />

                </motion.div>
            </div>
            <div>
                <h1 className="text-2xl text-center font-bold">{name}</h1>
                <p className="text-lg text-center text-slate-500 font-semibold">{degination}</p>
            </div>

        </div >
    );
};

export default Teamcard;