import { Button } from '@/components/ui/button'
import { FaArrowRightLong } from "react-icons/fa6";
import React from 'react'
import ValidateSec from './ValidateSec';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='grid justify-center items-center py-10 px-5 gap-10 md:flex '>
        <div  className='max-w-[100%] grid place-items-center md:place-items-start gap-5 md:max-w-[40%]'>
          <h2 className='text-6xl text-center md:text-start font-semibold'>Unite, Innovate, Connect, Inspires Together</h2>
          <p className='text-gray-700 '>Join us to be part of a community where spirituality meets innovation. Together, we'll build a world that's more inclusive, engaging, and connected than ever before!</p>
          <Link
              to="/events"
              className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
            >
              <Button>Explore Events <FaArrowRightLong /></Button>
            </Link>
        </div>
        <div className='px-4 grid place-items-center'>
          <div className='flex gap-6 items-center'>
            <img 
              src="/hero1.webp" 
              alt="hero1" 
              className='w-[90px] md:w-[170px] rounded-tl-[50px] rounded-br-[50px] md:rounded-tl-[80px] md:rounded-br-[80px] transition-transform hover:-translate-y-2 duration-300'
            />
            <img 
              src="/hero2.webp" 
              alt="hero2" 
              className='w-[90px] md:w-[170px] rounded-tl-[50px] rounded-br-[50px] md:rounded-tl-[80px] md:rounded-br-[80px] transition-transform hover:-translate-y-2 duration-300'
            />
            <img 
              src="/hero3.webp" 
              alt="hero3" 
              className='w-[90px] md:w-[170px] rounded-tl-[50px] rounded-br-[50px] md:rounded-tl-[80px] md:rounded-br-[80px] transition-transform hover:-translate-y-2 duration-300'
            />
          </div>
          <div className='w-full grid place-items-center -translate-y-11'>
          <ValidateSec />
          </div>
        </div>
    </div>
  )
}

export default Hero