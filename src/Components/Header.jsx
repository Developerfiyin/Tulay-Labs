import React from 'react'
import LOGO from '../assets/logo.png'

const Header = () => {
  return (
  <section className='bg-white py-9 mt-0 px-4 items-center flex justify-between '>
    <div className='w-90 m-4'>
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
  <button className='bg-(--purple) hover:bg-[#5f0df8cc] rounded-full 
  cursor-pointer font-medium px-6 text-white py-3.5 text-center  mr-4'>Partner with Us</button>
    </div>


  
    <div className='space-y-5 flex border-t gap-8 flex-col space-between  border-gray-100 left-0  right-0 top-25   bg-amber-400 items-center '>
      <div>


      </div>
       <ul className=' text-(--gray) font-semibold mr-20 '>
        <a href='#home' className='p-4 hover:text-black'>Home</a>
        <a href='#about' className='p-4 hover:text-black'>About</a >
        <a href='#vsion'  className='p-4 hover:text-black'>Vision</a>
        <a href='#work'  className='p-4 hover:text-black'>Work</a>
        <a href='#team'  className='p-4 hover:text-black'>Team</a>
    </ul>     
  <button className='bg-(--purple) hover:bg-[#5f0df8cc]  rounded-full 
  cursor-pointer font-medium px-6 text-white py-3.5 text-center '>Partner with Us</button>

    </div>

  </section>
  )
  
}

export default Header