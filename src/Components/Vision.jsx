import React from 'react'
import image1 from '../assets/image4.png'
const Vision = () => {
  return (
    <div className="bg-whie py-12 px-4">
        <div className='flex justify-between'>

          <div className='bg-(--gray-200) flex-col flex  py-4 px-4 w-[40%] rounded-md'>
            <div className='flex gap-2 mt-4'>
             <div className='bg-(--yellow-400) w-3 h-3 rounded-full mb-9'></div>
             <div className='bg-(--yellow-300) w-3 h-3 rounded-full mb-9'></div>
             <div className='bg-(--yellow-200) w-3 h-3 rounded-full mb-9'></div>
            </div>

           <h1 className='text-(-neutral) font-bold text-5xl mb-2'>Our</h1>
           <h1 className='text-(--purple) font-bold text-5xl mb-2'>Existence</h1>
           <h1 className='text-(--neutral) font-bold text-5xl mb-15'>Is Crucial</h1>
             <div className=''>
          <img src={image1} alt="" className='w-full' />

             </div>
          </div>


        </div> {/* THE FLEXED DIV*/}
      
      Vision
      
      </div>
  )
}

export default Vision
