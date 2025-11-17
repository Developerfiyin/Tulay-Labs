import React from 'react'
import LOGO from '../assets/logo.png'

const Header = () => {
  return (
  <section className='bg-white py-13 mx-auto items-center flex justify-between '>
    <div className='w-90'>
    <img src={LOGO} alt="THE  LOGO IMAGE " />
    </div>
    
    <ul className='flex gap-4'>
        <li className='p-2'>Home</li>
        <li>About</li>
        <li>Vision</li>
        <li>Work</li>
        <li>Team</li>
    </ul>     
  <button className='bg-(--purple) p-2'>Partner with Us</button>
  </section>
  )
  
}

export default Header