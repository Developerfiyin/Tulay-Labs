import React from 'react'
import image17 from '../assets/image17.png'


const Team = () => {
  return (
    <section className='bg-(--gray-200)  text-center items-center justify-center py-12 px-4 '>
            <h2 className='text-3xl text-center mt-9 text-(--neutral) font-medium '> Meet the Growing Team </h2>
            <p className='font-medium text-(--gray)'> These are the passionate team of builders, thinkers, and dreamers
                 working together to unlock Africa‘s Web3 potential. </p>

              <div className='bg-white mx-auto '>
               <img src={image17} alt="BRO DAVID PICTURE" className='w-60  rounded-2xl  ' />
            </div>

        Team </section>
  )
}

export default Team