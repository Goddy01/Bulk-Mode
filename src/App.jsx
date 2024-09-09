import { useState } from 'react'
import Hero from './components/Hero'
import Generator from './components/Generator'
import Workout from './components/Workout'
import { generateWorkout } from './utils/functions'
import Footer from './components/Footer'

function App() {
  const [workout, setWorkout] = useState(null)
  const [poison, setPoison] = useState('individual')
  const [muscles, setMuscles] = useState([])
  const [goal, setGoal] = useState('strength_power')

  function updateWorkout () {
    if (muscles.length < 1) {
      return
    }
    let newWorkout = generateWorkout({poison, muscles, goal})
    setWorkout(newWorkout)

    window.location.href = '#formulate'
  }

  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-zinc-950 text-white text-sm sm:text-base'>
      <Hero />
      <Generator 
      goal={goal} setGoal={setGoal} 
      muscles={muscles} setMuscles={setMuscles} 
      poison={poison} setPoison={setPoison}
      updateWorkout={updateWorkout} />
      {
        workout && (<Workout workout={workout} />)
      }

      <Footer />
    </main>
  )
}

export default App