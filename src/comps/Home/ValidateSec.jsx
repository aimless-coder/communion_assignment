import React from 'react'

const ValidateSec = () => {
  return (
    <div className='w-[95%] min-w-[300px] flex justify-evenly items-center bg-black/80 backdrop-blur-sm px-5 py-3 gap-5 rounded-4xl z-20 shadow-[0_5px_10px_rgb(0,0,0,0.2)]'>

            <div className='min-w-[30%] grid md:flex md:justify-center md:items-center place-items-center gap-3'>
                <img src="/event.png" alt="" className='w-[20px] md:w-[30px]'/>
                <div className='grid place-items-center'>
                    <h2 className='text-2xl font-bold text-white'>500+</h2>
                    <p className='text-sm text-gray-100 text-center'>Events Hosted</p>
                </div>
            </div>
            <div className='min-w-[30%] grid md:flex md:justify-center md:items-center place-items-center gap-3'>
                <img src="/community.png" alt="" className='w-[20px] md:w-[30px]'/>
                <div className='grid place-items-center'>
                    <h2 className='text-2xl font-bold text-white'>100+</h2>
                    <p className='text-sm text-gray-100 text-center'>Community</p>
                </div>
            </div>
            
            <div className='min-w-[30%] grid md:flex md:justify-center md:items-center place-items-center gap-3'>
                <img src="/like.png" alt="" className='w-[20px] md:w-[30px]'/>
                <div className='grid place-items-center'>
                    <h2 className='text-2xl font-bold text-white'>95%</h2>
                    <p className='text-sm text-gray-100 text-center'>Feedback</p>
                </div>
            </div>
    </div>
  )
}

export default ValidateSec