'use client'
import React from 'react';
import Heading from '../Shared/Heading';
import Image from 'next/image';
import project1 from '../../images/project-1.png'
import project2 from '../../images/project-2.png'
import project3 from '../../images/project-3.png'
const Projects = () => {
    return (
        <div className='my-20'>
            <Heading heading={'My Projects'} subHeading={'Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus'}></Heading>
            <ul className='flex flex-col gap-5 md:flex-row justify-evenly text-2xl text-center mt-16'>
                <li className='bg-[#F8F8F8] border border-[#545454] rounded-xl px-5 py-2.5'>All</li>
                <li className='bg-[#F8F8F8] border border-[#545454] rounded-xl px-5 py-2.5'>UI/UX</li>
                <li className='bg-[#FD6F00] text-white border border-[#545454] rounded-xl px-5 py-2.5'>Web Design</li>
                <li className='bg-[#F8F8F8] border border-[#545454] rounded-xl px-5 py-2.5'>App Design</li>
                <li className='bg-[#F8F8F8] border border-[#545454] rounded-xl px-5 py-2.5'>Graphic Design</li>
            </ul>
            <div className='flex flex-col gap-11 md:flex-row mt-24'>
                <div className='w-full lg:w-1/3'>
                    <div className='bg-[#FFEBDB] h-[450px] rounded-xl overflow-hidden relative'>
                        <Image className='pr-10 absolute top-0 right-1 transform scale-125' src={project1} width={275} height={405} alt='Project-1' />
                        <Image className='absolute left-5 pt-20' src={project1} width={275} height={405} alt='Project-1' />
                    </div>
                    <div className='my-9 space-y-2'>
                        <p className='text-[#FD6F00] text-lg'>Web Design</p>
                        <h3 className='text-2xl font-bold'>AirCalling Landing Page</h3>
                    </div>
                </div>
                <div className='w-full lg:w-1/3'>
                    <div className='bg-[#FFEBDB] h-[450px] rounded-xl overflow-hidden relative'>
                        <Image className='pr-10 absolute top-0 right-1 transform scale-125' src={project2} width={275} height={405} alt='Project-1' />
                        <Image className='absolute pt-20 left-5' src={project2} width={275} height={405} alt='Project-1' />
                    </div>
                    <div className='my-9 space-y-2'>
                        <p className='text-[#FD6F00] text-lg'>Web Design</p>
                        <h3 className='text-2xl font-bold'>Business Landing Page Design</h3>
                    </div>
                </div>
                <div className='w-full lg:w-1/3'>
                    <div className='bg-[#FFEBDB] h-[450px] rounded-xl overflow-hidden relative'>
                        <Image className='pr-10 absolute top-0 right-1 transform scale-125' src={project3} width={275} height={405} alt='Project-1' />
                        <Image className='absolute pt-20 left-5' src={project3} width={275} height={405} alt='Project-1' />
                    </div>
                    <div className='my-9 space-y-2'>
                        <p className='text-[#FD6F00] text-lg'>Web Design</p>
                        <h3 className='text-2xl font-bold'>Business Landing Page Design</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;