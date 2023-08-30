"use client"
import React from 'react';
import img from '../../assets/banner.jpg';
import { Background, Parallax } from 'react-parallax';
import Image from 'next/image';
const Apoinment = () => {
    return (
        // <div className='h-[400px] mt-20 mb-20  w-full'>
        <Parallax strength={300}>
            <Background className="custom-bg">
                <Image src={img} alt='' />
            </Background>
        </Parallax>
        // </div>
    );
};

export default Apoinment;