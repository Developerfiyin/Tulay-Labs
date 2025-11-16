import React from 'react'
import LOGO from '../assets/logo.png'

const Header = () => {
  return (
  <section className='bg-white' >
    <img src={LOGO} alt="" />
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Vision</li>
        <li>Work</li>
        <li>Team</li>
    </ul>
  </section>
  )
  
}

export default Header