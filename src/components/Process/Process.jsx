import Image from 'next/image';
import React from 'react';
import appoinment from '../../assets/appoinment.jpg';
import chekup from '../../assets/check_up.jpg';
import Enhot from '../../assets/enjoy.jpg';
const Process = () => {
    return (
        <div className='px-10  flex flex-col mt-20  justify-center items-center'>
            <div>
                <p className="text-center text-blue-600 text-lg">Process</p>
                <h1 className="text-4xl text-black font-bold text-center">How It Helps You To Keep Healthy</h1>

            </div>
            <div className='grid md:grid-cols-2  grid-cols-1 lg:grid-cols-3  mt-10 gap-6'>
                <div className='w-full bg-white lg:w-[450px]'>
                    <div className='relative'>
                        <div

                            className="">
                            <Image className='bg-cover rounded-lg h-64 mb-2 ' src={appoinment} alt='' />
                        </div>

                    </div>
                    <div className='space-y-2'>
                        <h1 className="text-2xl  font-bold">Get Appoinment</h1>
                        <p className="text-lg  text-slate-500 font-semibold">Effortlessly schedule appointments for medical, spa, and consulting services on our user-friendly platform. Streamline your booking process and manage your time efficiently.</p>
                    </div>

                </div >
                <div className='w-full lg:w-[450px]'>
                    <div className='relative'>
                        <div

                            className="">
                            <Image className='bg-cover rounded-lg h-64 mb-2' src={Enhot} alt='' />
                        </div>

                    </div>
                    <div className='space-y-2'>
                        <h1 className="text-2xl  font-bold">Start Check up</h1>
                        <p className="text-lg  text-slate-500 font-semibold">Effortlessly schedule appointments for medical, spa, and consulting services on our user-friendly platform. Streamline your booking process and manage your time efficiently.</p>
                    </div>

                </div >
                <div className='w-full lg:w-[450px]'>
                    <div className='relative'>
                        <div

                            className="">
                            <Image className='bg-cover rounded-lg h-64 mb-2 ' src={chekup} alt='' />
                        </div>

                    </div>
                    <div className='space-y-2'>
                        <h1 className="text-2xl  font-bold">Enjoy Healthy Life </h1>
                        <p className="text-lg  text-slate-500 font-semibold">Effortlessly schedule appointments for medical, spa, and consulting services on our user-friendly platform. Streamline your booking process and manage your time efficiently.</p>
                    </div>

                </div >
            </div>

        </div>
    );
};

export default Process;