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
import Event from './Components/Event'
import {Route, Routes} from 'react-router-dom'


const App = () => {
  return (
    <div className='scroll-smooth'>
      <Header/>

       <section id='home'>
   <Hero/>

       </section>
   
      <About/>  n
      <Vision/>
      <Route />
       <Work/>
      <Newsletter/>
      <Team/>
      <Event/>
          </div>
  )
}

export default App