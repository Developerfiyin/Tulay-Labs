import React, { useState } from 'react'
import LOGO from '../assets/logo.png'
import { HiOutlineMenuAlt3} from "react-icons/hi";
import { RiCloseFill } from 'react-icons/ri';

const Header = () => {
  const [nav, setNav] = useState(false)
  
     const handleState = () => {
      setNav(!nav)
     }

  return (
  <section className='py-6  sticky top-0 z-50 bg-white/60 backdrop-blur-md '>
    <nav className=' mt-0 px-4 items-center flex justify-between'>
   <div className='w-90 m-4'>
    <img src={LOGO} alt="THE  LOGO IMAGE"/>    
    </div>

    
    <div className='hidden md:flex'>
          <div className='flex text-(--gray) font-semibold mr-20 '>
        <a href='#hero' className='p-4 hover:text-black'>Home</a>
        <a href='#about' className='p-4 hover:text-black'>About</a>
        <a href='#vision' className='p-4 hover:text-black'>Vision</a>
        <a href='#work'  className='p-4 hover:text-black'>Work</a>
        <a href='#team' className='p-4 hover:text-black'>Team</a>
    </div>     
  <button className='bg-(--purple) hover:bg-[#5f0df8cc] rounded-full cursor-pointer font-medium px-6 text-white py-3.5 text-center  mr-4'>Partner with Us</button>
   </div>
    </nav>
 

       <div className='block md:hidden' onClick={handleState}> {nav ? <HiOutlineMenuAlt3 size={30}/> :  <RiCloseFill size={30}/>} 
       </div> 
    <div className={ nav ? 'flex flex-col text-(--gray) h-[60vh] space-y-2 font-semibold bg-(--gray-200) items-center ease-in-out duration-300' : ' -bottom-full ease-in-out duration-300 hidden'}>
             
        <a href="#home" className=''>Home</a>
        <a href="#about"  className='p-4 hover:text-black'>About</a>
        <a href='#vision'  className='p-4 hover:text-black'>Vision</a>
        <a href='#work'  className='p-4 hover:text-black'>Work</a>
        <a href='#team'  className='p-4 hover:text-black'>Team</a>
      <button className='bg-(--purple) hover:bg-[#5f0df8cc] rounded-full cursor-pointer font-medium mx-9 w-150 p-3.5 mb-2 text-white text-center'>Partner with Us</button>
    </div>

  
  </section>
  )
  
}

export default Header