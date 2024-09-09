import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import GeneratorHeader from './GeneratorHeader'
import { SCHEMES, WORKOUTS } from '../utils/swoldier'
import Button from './Button'

export default function Generator(props) {
  const { muscles, setMuscles, poison, setPoison, goal, setGoal, updateWorkout } = props
  const [showModal, setShowModal] = useState(false)

  function updateMuscles(muscleGroup) {
    if (muscles.includes(muscleGroup)) {
      setMuscles(muscles.filter(val => val !== muscleGroup))
      return
    }
    
    if (muscles.length > 2) {
      return
    }

    if (poison !== 'individual') {
      setMuscles([muscleGroup])
      setShowModal(false)
      return
    }


    setMuscles([...muscles, muscleGroup])

    if (muscles.length === 2) {
      setShowModal(false)
    }

  }


  return (
    <SectionWrapper id={'generate'} header={'generate your workout'} title={['It\'s', 'Huge', 'o\'clock']}>
    <div className='mt-5'>
      <GeneratorHeader index={'01'} title={'Pick your poison '} description={'Select the workout you wish to undergo'} />
        <div className='grid grid-cols-2 sm:grid-cols-4'>
          {
            Object.keys(WORKOUTS).map((type, typeIndex) => {
              return (
                  <button onClick={() => {
                    setShowModal(false)
                    setMuscles([])
                    setPoison(type)
                  }} key={typeIndex} className={
                        'bg-blue-300 px-1 py-3 mx-3 my-2 rounded-lg duration-200 hover:border-blue-900 text-slate-950 capitalize font-medium ' + 
                        (type === poison ? 'border-blue-900 bg-sky-500' : 'border-transparent')
                      }
                      >
                    <p>
                      {type.replaceAll('_', ' ')}
                    </p>
                  </button>
              )
            })
          }
        </div>
        <GeneratorHeader index={'02'} title={'Lock on target '} description={'Select the muscles judged for annihilation'} />
        <div className='bg-blue-300 px-1 py-3 mx-3 my-2 rounded-lg text-slate-950 capitalize font-medium flex flex-col'>
          <button className='relative px-4 flex items-center justify-center' onClick={() => {
            setShowModal(!showModal)
          }}>
            <p>
              {muscles.length === 0 && (
                <span>Select muscle groups</span>
              )}
            </p>

            <p>
              {
                muscles.map((muscle, muscleIndex) => {
                  return (
                    <span key={muscleIndex} className='capitalize'>
                      {muscle}
                      {muscleIndex < muscles.length - 1 && ' & '}
                    </span>
                  );
                })
              }
            </p>

            <i className="absolute right-3 top-1/2 -translate-y-1/2 fa-solid fa-caret-down"></i>
          </button>
          {
            showModal && (
              <div className='flex flex-col p-3 pb-3 items-center justify-center'>
              <hr className="mb-2 border-t-2 border-slate-900 min-w-full" />
                {
                  (poison === 'individual' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map(
                    (muscleGroup, muscleGroupIndex) => {
                        return (
                          <button onClick={() => {
                              updateMuscles(muscleGroup)
                          }}
                            key={muscleGroupIndex} 
                            className={'bg-sky-900 min-w-full m-2 p-2 rounded-lg text-slate-100 hover:bg-sky-700 hover:text-white hover:shadow-lg transition-shadow duration-200 ' + (muscles.includes(muscleGroup) ? 'text-rose-600 font-bold' : '')}
                          >
                            <p className='capitalize'>{muscleGroup}</p>
                          </button>
                        )
                    }
                  )
                }
              </div>
            )
          }
        </div>
        <GeneratorHeader index={'03'} title={'Become Juggernaut '} description={'Select your ultimate objective'} />
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
          {
            Object.keys(SCHEMES).map((scheme, schemeIndex) => {
              return (
                  <button onClick={
                    () => {
                      setGoal(scheme)
                    }
                  } key={schemeIndex} className={'bg-blue-300 px-2 py-3 mx-3 my-2 rounded-lg duration-200 hover:border-blue-900 text-slate-950 capitalize font-medium flex-1 sm:flex-none h-20 ' + 
                  (
                    scheme === goal ? 'bg-sky-500 border-blue-900' : 'border-transparent'
                  )}>
                    <p>
                      {scheme.replaceAll('_', ' ')}
                    </p>
                  </button>
              )
            })
          }
        </div>
          <Button btnValue={'Formulate'} func={updateWorkout} />
    </div>
    </SectionWrapper>
  )
}
