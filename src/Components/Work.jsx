import React from 'react'
import image1 from '../assets/image8.png'




const Work = () => {
  return (
    <section className='py-12 px-4 bg-(--gray-200)'>
        
      <div className='flex '>
        <div className=''> 
        <h6 className='text-xl font-semibold text-(--gray)'>The Breakdown</h6>
        <div className='flex space-x-6'>
         <h2 className='text-(--neutral) text-6xl font-semibold'>What We Do</h2>
       <img src={image1} alt="THE ARROW IMAGE " className='mt-8 ml-9' />
        </div>
         </div>
        </div>

        <div className=' mt-8 py-6 flex justify-evenly px-2 mx-auto ' >
            
          <div className='bg-(--natural) flex-col flex' >
            <h3>Talent Hub</h3>
          </div>

      </div>




        
        </section>
  )
}

export default Work