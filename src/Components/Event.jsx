import React from 'react'

import image1 from '../assets/image20.png'
const Event = () => {
  return (
    <section className='bg-white py-12 px-5 '>
        <div className='lg:flex justify-between gap-8  grid'>
         <div className=' flex gap-3 flex-col'>
           <h1 className='lg:text-6xl text-2xl text-(--gray) font-normal'> We've got interesting</h1>
           <div className='flex mb-4 gap-2'>
               <h2 className='lg:text-6xl text-2xl text-(--neutral) font-semibold'>Events</h2>
            <h2 className='lg:text-6xl text-2xl font-normal text-(--gray)'>coming up</h2>
           </div>
          <p className='text-(--gray) font-medium'> We‘re bringing together founders, investors, and builders across Africa and beyond. <br />
           From panel discussions to demo days, we create spaces where ideas are shared, <br />
          partnerships are formed, and real opportunities begin. </p>
             </div>
           
          

          <div className='w-[55%] ml-9 border-l-2 border-(--gray) pl-8 '> 
           <p className='text-(--gray) mb-2'>7th November</p>
           <h5 className='text-(neutral) font-medium mb-2'>Tulay Labs Mixer</h5>
           <h5 className=' text-(--gray) font-medium mb-2'>Bridging Africa's Web3 Talents With Global Opportunities</h5>
           <a href="#post" className='hover:text-(--gray) text-(--gray-300) font-semibold'>See post</a>
           <img src={image1} alt="THE TULAY LAB MIXER IMAGE"  className='w-120 mt-4 rounded-lg '/>
          </div>

        </div>
        </section>
  )
}

export default Event