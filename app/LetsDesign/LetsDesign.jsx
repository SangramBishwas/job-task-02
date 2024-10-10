import React from 'react';
import Heading from '../Shared/Heading';
import Button from '../Shared/Button';

const LetsDesign = () => {
    return (
        <div className='my-24'>
            <Heading heading={'Lets Design Together'} subHeading={'Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium'}></Heading>
            <div className='flex justify-center my-12'>
                <div className="flex gap-6">
                <input className='border border-[#AFAFAF] bg-[#F8F8F8] md:w-[313px] lg:w-[627px] h-[75px] px-6 py-5 rounded-[14px]' type="email" name="email" placeholder='Enter Your Email' />
                <Button text={'Contact Me'}></Button>
            </div>
            </div>
            
        </div>
    );
};

export default LetsDesign;