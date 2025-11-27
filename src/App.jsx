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


const App = () => {
  return (
    <div className='scroll-smooth'>
      <Header/>

       <section id='home'>
          <Hero/>
       </section>
         
          <section id='about'>
              <About/>  
          </section>
      
    <section id='vision'>
      <Vision/>
    </section>
     
          <section id='work'>
            <Work/>
          </section>
          
          <section id='team'>
            <Team/>
          </section>
      <Newsletter/>
     
      <Event/>
          </div>
  )
}

export default App