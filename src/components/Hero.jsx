import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center gap-10 text-center max-w-[900px] w-full mx-auto px-4 overflow-x-hidden'>
      <div className='flex flex-col gap-2'>
        <p className='font-semibold'>IT'S TIME TO GET</p>
        <h1 className='uppercase font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>
          swole<span className='text-blue-400'>normous</span>
        </h1>
      </div>
      <p>
        I hereby acknowledgement that I may become 
        <span className='text-blue-300 font-bold'> unbelievably swolenormous</span> and 
        accept all risks of becoming the local <span className='text-blue-300 font-bold'>mass montrosity</span>, afflicted with 
        severe body dismorphia, unable to fit through doors.
      </p>
      <Button btnValue={'Accept & Begin'} func={() => {
        window.location.href = '#generate'
      }} />
    </div>
  )
}
