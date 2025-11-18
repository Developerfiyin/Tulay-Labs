import React from 'react'
import './App.css'
import image2 from '../src/assets/image2.png'
import Header from './Components/Header'

const App = () => {
  return (
    <div>
      <Header/>
      <img src={image2} alt="  " />
    </div>
  )
}

export default App