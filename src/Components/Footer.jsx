import React from 'react'
import LOGO from '../assets/LOGO.png'
import image21 from '../assets/image21.png'
import image22 from '../assets/image22.png'
const Footer = () => {
  return (
    <section className='py-12 px-4 bg-white '>

          <div className='flex justify-between'>
         <div className='mb-4'>
          <img src={LOGO} alt=" THE LOGO IMAGE " className='mb-2 w-30' />
          <p className='text-(--gray) font-semibold'>We connect people, ideas and opportunities across borders. <br />
           We help Africa’s builders, founders and communities find global <br />
            access while bringing meaningful projects into Africa with trust and relevance.</p>
        </div>

    <div className='flex space-x-15 mx-auto'>
   <div className='flex-col flex '>
    <h3 className='text-xl  text-(--neutral) font-medium mb-6 '>Quick Links</h3>
    <a href="#home" className='text-(--gray) hover:text-(--black) p-2 font-semibold'>Home</a>
    <a href="#about" className='text-(--gray) hover:text-(--black) p-2 font-semibold'>About</a>
    <a href="#work" className='text-(--gray) hover:text-(--black) p-2 font-semibold'>Works</a>
    <a href="#team" className='text-(--gray) hover:text-(--black) p-2 font-semibold'>Team</a>
   </div>

   <div className='flex flex-col'>
     <h3 className='text-(--neutral) font-medium text-xl mb-5'>Languages</h3>
     <button className='bg-(--purple) rounded-full w-40  text-(--natural) p-9 text-center hover:bg-[#5f0df8cc] font-semibold py-2'>English</button>
    <a href="#about" className='text-(--gray) hover:text-(--neutral) p-2 font-semibold'>Arabic</a>
    <a href="#work" className='text-(--gray) hover:text-(--neutral) p-2 font-semibold'>French</a>
    <a href="#team" className='text-(--gray) hover:text-(--neutral) p-2 font-semibold'>Chinese</a>
   </div>

      
       <div className='flex flex-col gap-5 ml-5'>
        <h3 className='font-semibold text-(--black) text-xl'>Socials</h3>
       <img src={image21} alt="THE LINKDEIN ICON" className='w-7 px-1 py-1 rounded-sm bg-(--gray) hover:bg-(--purple) ' />
       <img src={image22} alt=" THE TWITTER IMAGE " className='w-5 py-1  bg-(--gray) hover:bg-(--purple) ' />
       <img src={image21} alt="" className='w-8 bg-(--gray) hover:bg-(--purple) rounded-full py-2 px-2' />
       </div>
      </div>

      </div>
    <p className='text-(--gray) font-semibold mt-4 text-center border-t-2 pt-8 '>Copyrighted© 2025 products by Tulay Labs </p>
    </section>
  )
}

export default Footer