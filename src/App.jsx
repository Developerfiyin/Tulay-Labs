import React from 'react'
import './App.css'
import { createBrowserRouter, Route, Router, Routes} from "react-router-dom"
import image2 from '../src/assets/image2.png'
import Header from './Components/Header'
import Hero  from './Components/Hero'
import About from './Components/About'
import Vision from "./Components/Vision"
import Newsletter from './Components/Newsletter'
import Work from './Components/Work'
import Team from './Components/Team'
import Event from './Components/Event'

const router = createBrowserRouter ([
  {path: "/", element:<App/> }
])

const App = () => {
  return (
    <div>
      <Router>
      <Header/>

   <Routes> 
     <Route path='/home' element={<Hero/>} />
       <Route path='/about' element={<About/>} />
       <Route path='/vision' element={<Vision/>} />
         </Routes>
      </Router>
  
    
      <Work/>
      <Newsletter/>
      <Team/>
      <Event/>
          </div>
  )
}

export default App