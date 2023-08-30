import Image from 'next/image';
import React from 'react';
import man from '../../assets/man1.jpg';
import { FaStar } from 'react-icons/fa';

const Testimonialcard = () => {
    return (
        <div className='card rounded-xl border-2 p-5 w-96 shadow-2xl  mb-10 shadow-orange-200 mt-4'>
            <div>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum non id perferendis necessitatibus doloribus cum expedita!
            </div>
            <div className='flex gap-5 mt-2'>
                <Image className='w-20 h-20 rounded-full' src={man} alt='' />
                <div className='flex flex-col gap-4'>
                    <div className='flex gap-2 items-center'>
                        <FaStar className='text-yellow-400' />
                        <FaStar className='text-yellow-400' />
                        <FaStar className='text-yellow-400' />
                        <FaStar className='text-yellow-400' />
                        <FaStar className='bg-white' />
                    </div>
                    <p>Jhon Harry</p>

                </div>
            </div>

        </div>
    );
};

export default Testimonialcard;