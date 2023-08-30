'use client'
import Image from 'next/image';
import React from 'react';
import img from '../../assets/testimonial.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Testimonialcard from '../Testimonialcard/Testimonialcard';
const Testimonial = () => {
    return (
        <div className='px-4 md:px-10'>
            <div className='grid grid-cols-1 mt-20 lg:grid-cols-2 gap-10'>
                <div>
                    <Image src={img} alt='' />
                </div>
                <div>
                    <div className='space-y-2'>
                        <p className='text-blue-500 '>Testimonials </p>
                        <p className='text-black font-bold text-4xl '>What Our Client Say About Medimart </p>
                    </div>
                    <div className='flex ms-10 justify-center items-center'>
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            // pagination={{
                            //     clickable: true,
                            // }}
                            // navigation={true}
                            modules={[Autoplay, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide><Testimonialcard /></SwiperSlide>
                            <SwiperSlide><Testimonialcard /></SwiperSlide>
                            <SwiperSlide><Testimonialcard /></SwiperSlide>
                            <SwiperSlide><Testimonialcard /></SwiperSlide>

                        </Swiper>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Testimonial;