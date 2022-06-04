import React from 'react'

const Hero = () => {
  return (
    <div className='flex items-center flex-col gap-6 justify-center mt-14 px-6 pt-20 md:pt-20 '>
        <h1 className='font-b612 font-bold text-5xl text-center md:leading-relaxed leading-relaxed text-black md:text-8xl'>
            Job Hiring Made <br></br> <span className='text-span'>Easy</span>
        </h1>
        <p className='font-dm md:text-lg leading-relaxed text-center'>
          This is just our way of saying <span className='border-t-0 border-l-0 border-r-0 border-blue-400 border-solid border-4 '>thanks</span>
        </p>
    </div>
  )
}

export default Hero