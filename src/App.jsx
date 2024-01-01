import React from 'react'
import Background from './components/Background'
import Foreground from './components/Foreground'

function App() {
  return (
    <div className='relative w-full h-screen bg-[#0F172A]'>
     <Background/>
     <Foreground/>
    </div>
  )
}

export default App