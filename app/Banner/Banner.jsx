import React from 'react';
import Button from '../Shared/Button';
import img1 from '../../images/image_1.png';
import Image from 'next/image';
const Banner = () => {
    return (
        <div className='mt-[100px] flex flex-col-reverse justify-between gap-20 lg:flex-row items-center'>
            <div className=''>
                <h3 className='text-2xl font-semibold my-5'>Hi I am</h3>
                <p className='text-3xl md:text-5xl text-[#FD6F00]'>Muhammad Umair</p>
                <h2 className='text-5xl lg:text-[100px] font-bold'>UI & UX</h2>
                <h2 className='text-5xl lg:text-[100px] font-bold lg:pl-[230px]'>
                    Designer
                </h2>
                <p className='md:text-xl my-6'>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
                <Button text={'Hire Me'}></Button>
            </div>
            <div className='lg:w-[538px] relative'>
                <div className='border-4 w-[400px] h-[400px] border-[#FD6F0099] rounded-full'>
                    <Image className='absolute bottom-0 right-0 border-b-2 border-[#FD6F0099] rounded-full' src={img1} alt='author' />
                </div>
                <div className='h-[83px] w-[374px] bg-[#FD6F00] opacity-70 absolute -top-5 right-[5%]'></div>
            </div>
        </div>
    );
};

export default Banner;