import React from 'react'

import image1 from '../assets/image20.png'
const Event = () => {
  return (
    <section className='bg-white py-12 px-5 '>
        <div className='lg:flex justify-between grid gap-8 '>
         <div className=' flex gap-2 lg:flex-col'>
           <h1 className='lg:text-6xl text-2xl text-(--gray) font-normal'> We've got interesting</h1>
           <div className='flex gap-2'>
               <h2 className='lg:text-6xl text-2xl text-(--neutral) font-semibold'>Events</h2>
            <h2 className='lg:text-6xl text-2xl font-normal text-(--gray)'>coming up</h2>
           </div>
          
             </div>
           
          

          <div className=''> 
           <p className='text-(--gray)'>7th November</p>
           <h5 className='text-(neutral) font-medium'>Tulay Labs Mixer</h5>
           <h5 className=' text-(--gray) font-medium '>Bridging Africa's Web3 Talents With Global Opportunities</h5>
           <a href="#post" className='hover:text-(--gray) text-(--purple-200) '>See post</a>
           <img src={image1} alt=""  className='w-100 rounded-lg '/>
          </div>

        </div>
        </section>
  )
}

export default Event