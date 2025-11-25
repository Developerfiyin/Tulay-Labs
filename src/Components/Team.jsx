import React from 'react'
import image17 from '../assets/image17.png'


const Team = () => {
  return (
    <section className='bg-(--gray-200) text-center items-center justify-center py-12 px-4 '>
            <h2 className='text-3xl text-center mt-9 text-(--neutral) font-medium '> Meet the Growing Team </h2>
            <p className='font-medium text-(--gray) mb-8'> These are the passionate team of builders, thinkers, and dreamers
                 working together to unlock Africa‘s Web3 potential. </p>

              <div className='flex justify-center '>
 
                   <div className='bg-white mx-auto py-4 px-4 rounded-lg'>
                    <img src={image17} alt="BRO DAVID'S PICTURE" className='w-70 h-auto rounded-4xl py-2 px-4'/>
                  <h2 className='text-(--neutral) font-semibold text-left pl-2 border-l-4 border-(--yellow) text-2xl'>David Adeola</h2>
                   </div>

            
            </div>

        Team </section>
  )
}

export default Team