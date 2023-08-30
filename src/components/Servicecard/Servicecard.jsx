"use client"
import Image from 'next/image';
import React from 'react';
import { motion } from "framer-motion"
const Servicecard = ({ img, title, description }) => {
    return (
        <div className='rounded-2xl w-full md:w-96 h-96 shadow-xl mb-10 border  border-blue-500 p-3'>
            <motion.div
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.9 }}
                className="">
                <Image className='bg-cover rounded-lg h-64' src={img} alt='' />
            </motion.div>
            <div>
                <p className="text-[24px] font-bold">{title}</p>
                <p className='text-[14px] text-slate-500'>{description}</p>
            </div>
        </div>
    );
};

export default Servicecard;