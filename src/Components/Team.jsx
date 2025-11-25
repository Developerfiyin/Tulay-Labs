import React from 'react'
import image17 from '../assets/image17.png'
import image18 from '../assets/image18.png'
import image19 from '../assets/image19.png'


const Team = () => {
  return (
    <section className='bg-(--gray-200) text-center items-center  py-12 px-4 '>
            <h2 className='text-3xl mt-9 text-(--neutral) font-medium '> Meet the Growing Team </h2>
            <p className='font-medium text-(--gray) mb-8'> These are the passionate team of builders, thinkers, and dreamers
                 working together to unlock Africa‘s Web3 potential. </p>

              <div className='lg:flex mb-9 gap-8 grid lg:justify-center '>
 
                   <div className='bg-white py-4 px-4 rounded-lg'>
                    <img src={image17} alt="BRO DAVID'S PICTURE" className='w-80 rounded-4xl py-2 px-4'/>
                    <h2 className='text-(--neutral) font-semibold text-left pl-2 border-l-4 border-(--yellow) text-2xl'>David Adeola</h2>
                   <p className='text-(--gray) font-semibold text-left pl-3 '>Founder TulayLabs</p>
                     <div className='flex justify-end space-x-2'>
                     <div className='w-3 h-3 bg-(--purple-200) rounded-full'></div>
                    <div className='w-3 h-3 bg-(--purple-300) rounded-full'></div>
                     <div className='w-3 h-3 bg-(--purple-400) rounded-full'></div>
                     </div>
                   </div>

            
            <div className='bg-white py-4 px-4 rounded-lg'>
         <img src={image18} alt="AMARA'S PICTURE" className='w-80 rounded-4xl py-2 px-4'/>
                    <h2 className='text-(--neutral) font-semibold text-left pl-2 border-l-4 border-(--yellow) text-2xl'>Amara Achusi</h2>
                   <p className='text-(--gray) font-semibold text-left pl-3 '>Co-Founder TulayLabs</p>
                     <div className='flex justify-end space-x-2'>
                     <div className='w-3 h-3 bg-(--purple-200) rounded-full'></div>
                    <div className='w-3 h-3 bg-(--purple-300) rounded-full'></div>
                     <div className='w-3 h-3 bg-(--purple-400) rounded-full'></div>
                     </div>
                   </div>


                  <div className='bg-white py-4 px-4 rounded-lg'>
                    <img src={image19} alt="BRO DAMILOLA'S PICTURE" className='w-80 rounded-4xl py-2 px-4'/>
                    <h2 className='text-(--neutral) font-semibold text-left pl-2 border-l-4 border-(--yellow) text-2xl'>Damilola Olorunsesan</h2>
                   <p className='text-(--gray) font-semibold text-left pl-3 '>Global Bussiness Partner</p>
                     <div className='flex justify-end space-x-2'>
                     <div className='w-3 h-3 bg-(--purple-200) rounded-full'></div>
                    <div className='w-3 h-3 bg-(--purple-300) rounded-full'></div>
                     <div className='w-3 h-3 bg-(--purple-400) rounded-full'></div>
                     </div>
                   </div>

            </div>

         </section>
  )
} 

export default Team