import React from 'react'

export default function SectionWrapper(props) {
  const { children, header, title, id } = props
    return (
    <section id={id} className='min-h-screen flex flex-col'>
    <div className='bg-sky-50 text-sky-950 py-10 flex flex-col gap-4 justify-center items-center font-bold p-4 text-center'>
        <p className='font-medium uppercase text-lg'>{header}</p>
        <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>{title[0]} <span className='uppercase text-sky-700 font-extrabold'>{title[1]}</span> {title[2]}</h2>
    </div>
    <div className='max-w-[800px] w-full flex flex-col gap-10 mx-auto p-4'>
        {children}
    </div>
    </section>
  )
}
