"use client"
import Image from 'next/image';
import React from 'react';
import { GrUserManager } from 'react-icons/gr';
import image from '../../assets/tttt.jpg'
import CountUp from 'react-countup';
const Chooseus = () => {
    return (
        <div className='relative mb-20 h-[1800px] lg:h-[662px] md:h-[870px]' >
            <div className='mt-20 mb-10 p-2 lg:p-10 flex flex-wrap lg:flex-nowrap'>
                <div className='bg-[#0E1136] w-full px-8 py-20 lg:w-3/4 p-5'>
                    <div>
                        <p className="text-red-600 text-xl">Why Chosse Us</p>
                        <h1 className='text-white text-[34px]'>Choose The Best For Your Health </h1>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        <div>
                            <div className='group w-full lg:w-96 flex gap-5 items-center'>

                                <div>
                                    <GrUserManager className='text-7xl group-hover:text-red-600' />
                                </div>
                                <div>
                                    <h1 className='text-white text-[34px] font-bold'>Professional Staff</h1>
                                    <p className='text-white '>Amet minim mollit non deserunt aliqua dolor do amet sint.</p>
                                </div>

                            </div>
                        </div>
                        <div>
                            <div className='group w-full lg:w-96 flex gap-5 items-center'>

                                <div>
                                    <GrUserManager className='text-7xl group-hover:text-red-600' />
                                </div>
                                <div>
                                    <h1 className='text-white text-[34px] font-bold'>Professional Staff</h1>
                                    <p className='text-white '>Amet minim mollit non deserunt aliqua dolor do amet sint.</p>
                                </div>

                            </div>
                        </div>
                        <div>
                            <div className='group w-full lg:w-96 flex gap-5 items-center'>

                                <div>
                                    <GrUserManager className='text-7xl group-hover:text-red-600' />
                                </div>
                                <div>
                                    <h1 className='text-white text-[34px] font-bold'>Professional Staff</h1>
                                    <p className='text-white '>Amet minim mollit non deserunt aliqua dolor do amet sint.</p>
                                </div>

                            </div>
                        </div>
                        <div>
                            <div className='group w-full lg:w-96 flex gap-5 items-center'>

                                <div>
                                    <GrUserManager className='text-7xl group-hover:text-red-600' />
                                </div>
                                <div>
                                    <h1 className='text-white text-[34px] font-bold'>Professional Staff</h1>
                                    <p className='text-white '>Amet minim mollit non deserunt aliqua dolor do amet sint.</p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                <div className='w-full hidden lg:block lg:w-1/4'>
                    <Image className='' src={image} alt='' />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-5 absolute bottom-[-55px] md:left-48 lg:left-16'>
                <div className='card rounded-2xl shadow-lg flex justify-center items-center lg:w-60 w-[100vw] md:w-60 h-44 flex-col bg-white'>
                    <div className='text-3xl mb-4 font-bold'>
                        <CountUp
                            end={100}
                            duration={2.75}
                        /> +
                    </div>
                    <p className='text-red-600'>Expert Doctors</p>
                </div>
                <div className='card rounded-2xl shadow-lg flex justify-center items-center lg:w-60 w-[100vw] md:w-60 h-44 flex-col bg-white'>
                    <div className='text-3xl mb-4 font-bold'>
                        <CountUp
                            end={7}
                            duration={2.75}
                        />K
                    </div>

                    <p className='text-red-600'>Happy Patients </p>
                </div>
                <div className='card rounded-2xl shadow-lg flex justify-center items-center lg:w-60 w-[100vw] md:w-60 h-44 flex-col bg-white '>
                    <div className='text-3xl mb-4 font-bold'>
                        <CountUp
                            end={850}
                            duration={2.75}
                        />
                    </div>

                    <p className='text-red-600'>mordern Rooms </p>
                </div>
                <div className='card rounded-2xl shadow-lg flex justify-center items-center lg:w-60 w-[100vw] md:w-60 h-44 flex-col bg-white'>
                    <div className='text-3xl mb-4 font-bold'>
                        <CountUp
                            end={15}
                            duration={2.75}
                        />
                    </div>
                    <p className='text-red-600'>Award Win</p>
                </div>
            </div>
        </div>
    );
};

export default Chooseus;
