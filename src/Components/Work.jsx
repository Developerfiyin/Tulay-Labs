import React from 'react'
import image1 from '../assets/image8.png'




const Work = () => {
  return (
    <section className='py-12 px-4 bg-(--gray-200)'>
        
      <div className='flex mx-auto'>
        <div className=''> 
        <h6 className='text-xl font-semibold text-(--gray)'>The Breakdown</h6>
        <div className='flex space-x-6'>
         <h2 className='text-(--neutral) text-6xl font-semibold'>What We Do</h2>
       <img src={image1} alt="THE ARROW IMAGE " className='mt-8 ml-9' />
        </div>
       
        </div>

      </div>




        
        Work</section>
  )
}

export default Work