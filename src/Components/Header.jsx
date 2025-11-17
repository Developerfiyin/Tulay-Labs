import React from 'react'
import LOGO from '../assets/logo.png'

const Header = () => {
  return (
  <section className='bg-white py-13 px-4 flex justify-between ' >
    <img src={LOGO} alt="THE LOGO IMAGE " />
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Vision</li>
        <li>Work</li>
        <li>Team</li>
    </ul>     
  <button className='bg-purple p-2  '>Partner with Us</button>
  </section>
  )
  
}

export default Header