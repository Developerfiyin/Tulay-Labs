import React from 'react'
import LOGO from '../assets/logo.png'

const Header = () => {
  return (
  <section className='py-6'>
    <nav className='bg-white mt-0 px-4 items-center flex justify-between '>
   <div className='w-90 m-4 '>
    <img src={LOGO} alt="THE  LOGO IMAGE " />
    </div>
    <div className='hidden'>
          <ul className='flex text-(--gray) font-semibold mr-20 '>
        <li className='p-4 hover:text-black'>Home</li>
        <li className='p-4 hover:text-black'>About</li>
        <li className='p-4 hover:text-black'>Vision</li>
        <li className='p-4 hover:text-black'>Work</li>
        <li className='p-4 hover:text-black'>Team</li>
    </ul>     
  <button className='bg-(--purple) hover:bg-[#5f0df8cc] rounded-full cursor-pointer font-medium px-6 text-white py-3.5 text-center  mr-4'>Partner with Us</button>
   </div>
    </nav>
 

  
    <div className='flex flex-col text-(--gray) h-screen space-y-4 font-semi-bold bg-red-600 items-center'>
        <a href='#home' className='p-4 hover:text-black'>Home</a>
        <a href='#about' className='p-4 hover:text-black'>About</a >
        <a href='#vision'  className='p-4 hover:text-black'>Vision</a>
        <a href='#work'  className='p-4 hover:text-black'>Work</a>
        <a href='#team'  className='p-4 hover:text-black'>Team</a>
      
  <button className='bg-(--purple) hover:bg-[#5f0df8cc] rounded-full cursor-pointer font-medium px-6 text-white py-3.5 text-center '>Partner with Us</button>

    </div>

  </section>
  )
  
}

export default Header