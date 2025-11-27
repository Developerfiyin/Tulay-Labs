import React from 'react'
import LOGO from '../assets/LOGO.png'
const Footer = () => {
  return (
    <section className='py-12 px-4 bg-white '>

      <div className='lg:flex flex-4 gap-3 grid grid-cols-4'>
        
        <div >
          <img src={LOGO} alt=" THE LOGO IMAGE " className='mb-4 w-30' />
          <p>We connect people, ideas and opportunities across borders. <br />
           We help Africa’s builders, founders and communities find global <br />
            access while bringing meaningful projects into Africa with trust and relevance.</p>
        </div>

   <div className='flex-col flex'>
    <h3 className='text-base  text-(--neutral) font-medium mb-6 '>Quick Links</h3>
    <a href="#hero" className='text-(--gray) hover:text-black p-2 font-semibold'>Home</a>
    <a href="#about" className='text-(--gray) hover:text-black p-2 font-semibold'>About</a>
    <a href="#work" className='text-(--gray) hover:text-black p-2 font-semibold'>Works</a>
    <a href="#team " className='text-(--gray) hover:text-black p-2 font-semibold'>Team</a>
   </div>
      </div>

    </section>
  )
}

export default Footer