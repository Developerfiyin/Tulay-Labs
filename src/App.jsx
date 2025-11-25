import React from 'react'
import './App.css'
import image2 from '../src/assets/image2.png'
import Header from './Components/Header'
import Hero  from './Components/Hero'
import About from './Components/About'
import Vision from "./Components/Vision"
import Newsletter from './Components/Newsletter'
import Work from './Components/Work'
import Team from './Components/Team'


const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Vision/>
      <Work/>
      <Newsletter/>
      <Team/>

          </div>
  )
}

export default App