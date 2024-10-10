'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import Heading from '../Shared/Heading';
import Image from 'next/image';
import testimonial1 from '../../images/testimonial1.png'
import testimonial2 from '../../images/testimonial2.png'
const Testimonials = () => {
    return (
        <div className='my-16'>
            <Heading heading={'Testimonials'} subHeading={'Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium'}></Heading>
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mt-16"
            >
                <SwiperSlide>
                    <div className='flex flex-col md:flex-row gap-5 items-center bg-[#F8F8F8] p-6 md:p-12 rounded-2xl'>
                        <Image className='w-[235px] h-[235px] rounded-full' src={testimonial1} width={235} height={235} alt='testimonial' />
                        <div className='w-2/3 space-y-6'>
                            <p className='text-xl'><span className='text-[#FD6F00] font-bold'>“</span> Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices. <span className='text-[#FD6F00] font-bold'>“</span></p>
                            <div>
                                <h3 className='text-2xl font-medium'>Name</h3>
                                <p className='text-lg'>CEO</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col md:flex-row gap-5 items-center bg-[#F8F8F8] p-6 md:p-12 rounded-2xl'>
                        <Image className='w-[235px] h-[235px] rounded-full' src={testimonial2} width={235} height={235} alt='testimonial' />
                        <div className='w-2/3 space-y-6'>
                            <p className='text-xl'><span className='text-[#FD6F00] font-bold'>“</span> Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices. <span className='text-[#FD6F00] font-bold'>“</span></p>
                            <div>
                                <h3 className='text-2xl font-medium'>Name</h3>
                                <p className='text-lg'>CEO</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col md:flex-row gap-5 items-center bg-[#F8F8F8] p-6 md:p-12 rounded-2xl'>
                        <Image className='w-[235px] h-[235px] rounded-full' src={testimonial1} width={235} height={235} alt='testimonial' />
                        <div className='w-2/3 space-y-6'>
                            <p className='text-xl'><span className='text-[#FD6F00] font-bold'>“</span> Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices. <span className='text-[#FD6F00] font-bold'>“</span></p>
                            <div>
                                <h3 className='text-2xl font-medium'>Name</h3>
                                <p className='text-lg'>CEO</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col md:flex-row gap-5 items-center bg-[#F8F8F8] p-6 md:p-12 rounded-2xl'>
                        <Image className='w-[235px] h-[235px] rounded-full' src={testimonial2} width={235} height={235} alt='testimonial' />
                        <div className='w-2/3 space-y-6'>
                            <p className='text-xl'><span className='text-[#FD6F00] font-bold'>“</span> Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices. <span className='text-[#FD6F00] font-bold'>“</span></p>
                            <div>
                                <h3 className='text-2xl font-medium'>Name</h3>
                                <p className='text-lg'>CEO</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='flex flex-col md:flex-row gap-5 items-center bg-[#F8F8F8] p-6 md:p-12 rounded-2xl'>
                        <Image className='w-[235px] h-[235px] rounded-full' src={testimonial1} width={235} height={235} alt='testimonial' />
                        <div className='w-2/3 space-y-6'>
                            <p className='text-xl'><span className='text-[#FD6F00] font-bold'>“</span> Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices. <span className='text-[#FD6F00] font-bold'>“</span></p>
                            <div>
                                <h3 className='text-2xl font-medium'>Name</h3>
                                <p className='text-lg'>CEO</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='flex flex-col md:flex-row gap-5 items-center bg-[#F8F8F8] p-6 md:p-12 rounded-2xl'>
                        <Image className='w-[235px] h-[235px] rounded-full' src={testimonial2} width={235} height={235} alt='testimonial' />
                        <div className='w-2/3 space-y-6'>
                            <p className='text-xl'><span className='text-[#FD6F00] font-bold'>“</span> Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices. <span className='text-[#FD6F00] font-bold'>“</span></p>
                            <div>
                                <h3 className='text-2xl font-medium'>Name</h3>
                                <p className='text-lg'>CEO</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Testimonials;