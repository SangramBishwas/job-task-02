'use client'
import React from 'react';
import Button from '../Shared/Button';
import Image from 'next/image';
import img2 from '../../images/image_2.png';
const About = () => {
    return (
        <div className="lg:my-32 my-16 flex flex-col lg:justify-evenly gap-20 lg:flex-row items-center">
            <div className='lg:w-[545px] relative'>
                <div className='border-4 w-[400px] h-[400px] border-[#FD6F0099] rounded-full'>
                    <Image className='absolute top-0 lg:-bottom-12 left-0 border-b-2 border-[#FD6F0099] rounded-full w-[400px] h-[400px]' src={img2} alt='about' />
                </div>
                <div className='h-[83px] w-[374px] bg-[#FD6F00] opacity-70 absolute top-7 left-3'></div>
            </div>
            <div className="space-y-4 md:w-[50%] w-full">
                <h1 className="md:text-4xl lg:text-6xl text-2xl font-semibold text-[#000000]">
                    About Me
                </h1>
                <p className='md:text-xl'>
                    Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
                    nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis
                    tempus pharetra
                </p>

                <div className="space-y-4">
                    <div className="space-y-2">
                        <p className="text-xl font-semibold">UX</p>
                        <div className="relative w-full bg-[#EDECEC] rounded-full h-3">
                            <div
                                className="bg-[#FD6F00] h-3 rounded-full"
                                style={{ width: `92%` }}
                            ></div>
                            <div
                                className={`absolute top-1/2 left-[88%] transform translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2 border-[#FD6F00] bg-[#EDECEC]`}
                            ></div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <p className="text-xl font-semibold">Website Design</p>
                        <div className="relative w-full bg-[#EDECEC] rounded-full h-3">
                            <div
                                className="bg-[#FD6F00] h-3 rounded-full"
                                style={{ width: `85%` }}
                            ></div>
                            <div
                                className={`absolute top-1/2 left-[80%] transform translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2 border-[#FD6F00] bg-[#EDECEC]`}
                            ></div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <p className="text-xl font-semibold">App Design </p>
                        <div className="relative w-full bg-[#EDECEC] rounded-full h-3">
                            <div
                                className="bg-[#FD6F00] h-3 rounded-full"
                                style={{ width: `95%` }}
                            ></div>
                            <div
                                className={`absolute top-1/2 left-[90%] transform translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2 border-[#FD6F00] bg-[#EDECEC]`}
                            ></div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <p className="text-xl font-semibold">Graphic Design</p>
                        <div className="relative w-full bg-[#EDECEC] rounded-full h-3">
                            <div
                                className="bg-[#FD6F00] h-3 rounded-full"
                                style={{ width: `90%` }}
                            ></div>
                            <div
                                className={`absolute top-1/2 left-[85%] transform translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2 border-[#FD6F00] bg-[#EDECEC]`}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default About;