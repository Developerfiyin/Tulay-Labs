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

        <div className=' mt-8 py-6 flex justify-evenly px-2' >
            
          <div className='bg-(--natural) flex-col  flex mx-auto' >
            <div className='flex justify-between gap-2 m-2'>
           <h3 className='text-(--neutral) font-semibold mr-15 mb-20'>Talent Hub</h3>
            <div className='w-3 h-3 bg-(--purple-200) rounded-full'></div>
            <div className='w-3 h-3 rounded-full bg-(--purple-300)'></div>
            <div className='w-3 h-3 rounded-full bg-(--purple-400) '></div>
            </div>

          </div>

      </div>




        
        </section>
  )
}

export default Work