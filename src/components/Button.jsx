import React from 'react'

export default function Button(props) {
  const {btnValue, func} = props
  return (
    <div className='flex flex-col items-center justify-center my-7'>
      <button onClick={func} className='px-8 py-5 rounded-md bg-white text-sky-900 uppercase font-bold border border-blue-400 border-solid blueShadow'>
        <p>
          {btnValue}
        </p>
      </button>
    </div>
  )
}
