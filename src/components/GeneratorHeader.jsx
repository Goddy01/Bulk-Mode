import React from 'react'

export default function GeneratorHeader(props) {
  const { index, title, description } = props
  return (
    <div className='flex flex-col gap-4 m-7'>
      <div className='flex flex-col gap-2 items-center justify-center'>
        <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400'>{index}</p>
        <h4 className='text-xl sm:text-2xl md:text-3xl'>
            {title}
            {
                index=='01' &&
                <i className="fa-solid fa-skull-crossbones w-3"></i>
            }
            {
                index=='02' && 
                <i className="fa-solid fa-bullseye w-3"></i>
            }
            {
                index=='03' &&
                <i className="fa-solid fa-dumbbell w-3"></i>
            }
        </h4>
      </div>
      <p className='text-sm sm:text-base mx-auto text-center'>{description}</p>
    </div>
  )
}
