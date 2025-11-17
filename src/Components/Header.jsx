import React from 'react'
import LOGO from '../assets/logo.png'

const Header = () => {
  return (
  <section className='bg-white py-9 mt-0 px-4 items-center flex justify-between '>
    <div className='w-90 m-4'>
    <img src={LOGO} alt="THE  LOGO IMAGE " />
    </div>
    
    <ul className='flex text-(--gray) font-semibold mr-20'>
        <li className='p-4 hover:text-black'>Home</li>
        <li className='p-4 hover:text-black'>About</li>
        <li className='p-4 hover:text-black'>Vision</li>
        <li className='p-4 hover:text-black'>Work</li>
        <li className='p-4 hover:text-black'>Team</li>
    </ul>     
  <button className='bg-(--purple) hover:bg-[#5f0df8cc] rounded-full cursor-pointer font-semibold px-6 text-white py-3.5 text-center  mr-4'>Partner with Us</button>
  </section>
  )
  
}

export default Header