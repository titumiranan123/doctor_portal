"use client"
import React, { useState } from 'react';
import './Navbar.css'
import Link from 'next/link';
import logo from '../assets/logo.png';
import Image from 'next/image';
import { FaBars } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion"

const Navbar = () => {
    const [open, setOpen] = useState([false])
    const toggolemenu = () => {
        setOpen(!open)
    }
    return (
        <nav className="bg-white p-4">
            <div className="hidden max-w-7xl mx-auto lg:flex items-center justify-between">
                <div className=' flex items-center'>
                    <Image
                        alt="Description of the image"
                        className='h-16 w-16'
                        src={logo} />
                    <span className='text-[2.25rem] font-bold'><span className='text-red-600'>M</span><span className="text-black">EDIMART</span></span>
                </div>
                <ul className="flex space-x-4 font-semibold">
                    <li className="relative text-black hover:text-red-500 nav-item group">
                        <a href="#" className=" hover:underline">Home</a>
                        <div
                            className="bubble hidden group-hover:block"></div>
                    </li>
                    <li className="relative text-black hover:text-red-500 nav-item group">
                        <a href="#" className=" hover:underline">Doctors</a>
                        <div
                            className="bubble hidden group-hover:block"></div>
                    </li>
                    <li className="relative text-black hover:text-red-500 nav-item group">
                        <a href="#" className=" hover:underline">Hospitals</a>
                        <div
                            className="bubble hidden group-hover:block"></div>
                    </li>
                    <li className="relative text-black hover:text-red-500 nav-item group">
                        <a href="#" className=" hover:underline">Ambulance</a>
                        <div className="bubble hidden group-hover:block"></div>
                    </li>

                    <li className="relative text-black hover:text-red-500 nav-item group">
                        <a href="#" className=" hover:underline">Care Giver</a>
                        <div className="bubble hidden group-hover:block"></div>
                    </li>
                    <li className="relative text-black hover:text-red-500 nav-item group">

                        <a href="#" className=" hover:underline">Blog</a>
                        <div className="bubble hidden group-hover:block"></div>
                    </li>
                    <li className="relative text-black hover:text-red-500 nav-item group">

                        <a href="#" className=" hover:underline">About</a>
                        <div className="bubble hidden group-hover:block"></div>
                    </li>
                    <li className="relative  text-black hover:text-red-500 nav-item group">
                        <a href="#" className=" hover:underline">Contact</a>
                        <div className="bubble hidden group-hover:block"></div>
                    </li>
                </ul>
                <div className='text-black font-semibold'>
                    <Link href={'/login'} >Logout </Link>
                    &#47;
                    <Link href={'/login'} >  Login</Link>
                </div>
            </div>
            <div className='flex lg:hidden relative justify-around  w-[100vw]'>
                <div className=' flex items-center'>
                    <Image
                        alt="Description of the image"
                        className='h-16 w-16'
                        src={logo} />
                    <span className='text-[2.25rem] font-bold'><span className='text-red-600'>M</span><span className="text-black">EDIMART</span></span>
                </div>
                <div className='text-[1.5rem] flex items-center text-black'>
                    <button className='bg-red-600 p-2' onClick={toggolemenu}>  {open ? <FaBars /> :
                        <FiX />}

                    </button>

                </div>


            </div>
            {/* mobile and tablet meanu */}
            <AnimatePresence>

                {
                    !open && <>

                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 30, opacity: 0 }} className='bg-black absolute text-white  p-10 right-0 top-20 z-50 space-y-4 text-xl font-semibold w-2/4 h-screen' >
                            <div className=' flex items-center '>
                                <Image
                                    alt="Description of the image"
                                    className='h-16 w-16'
                                    src={logo} />
                                <span className='text-[2.25rem] font-bold'><span className='text-red-600'>M</span><span className="text-white">EDIMART</span></span>
                            </div>
                            <div className='flex   flex-col gap-3'>
                                <Link className='hover:text-red-500 hover:underline transition ease-linear duration-200' href={'/'}>Home</Link>
                                <Link className='hover:text-red-500 hover:underline transition ease-linear duration-200' href={'/'}>Doctors</Link>
                                <Link className='hover:text-red-500 hover:underline transition ease-linear duration-200' href={'/'}>Hospitals</Link>
                                <Link className='hover:text-red-500 hover:underline transition ease-linear duration-200' href={'/'}>Ambulance</Link>
                                <Link className='hover:text-red-500 hover:underline transition ease-linear duration-200' href={'/'}>Care Giver</Link>
                                <Link className='hover:text-red-500 hover:underline transition ease-linear duration-200' href={'/'}>Blog</Link>
                                <Link className='hover:text-red-500 hover:underline transition ease-linear duration-200' href={'/'}>Contact</Link>
                            </div>

                        </motion.div>
                    </>
                }
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;