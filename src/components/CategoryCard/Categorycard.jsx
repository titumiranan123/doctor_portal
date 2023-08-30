import Image from 'next/image';
import React from 'react';
import '../../components/Category/Category.css'
const Categorycard = ({ img, title, description }) => {
    return (
        <div className='bg-white w-full md:w-96 slow-bg-button  card rounded-xl space-y-4 group'>

            <Image className='h-24 w-24 rounded-full' src={img} alt='' />
            <h1 className='group-hover:text-white font-bold text-2xl'>{title}</h1>
            <p className='group-hover:text-white font-semibold'>{description}</p>
        </div>
    );
};

export default Categorycard;