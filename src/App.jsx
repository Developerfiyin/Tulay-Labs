import React from 'react'
import './App.css'
import image2 from '../src/assets/image2.png'
import Header from './Components/Header'
import Hero  from './Components/Hero'
import About from './Components/About'

const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
    </div>
  )
}

export default App