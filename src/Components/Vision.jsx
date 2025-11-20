import React from 'react'
import image1 from '../assets/image4.png'
import image2 from '../assets/image13.png'
import image3 from '../assets/image14.png'
import image4 from '../assets/image15.png'
import image5 from '../assets/quote.png'
const Vision = () => {
  return (
    <div className="bg-white py-12 px-4">
        <div className='flex justify-between'>

          <div className='bg-(--gray-200) flex-col flex py-4 px-4 w-[40%] rounded-md'>
            <div className='flex gap-2 mt-4'>
             <div className='bg-(--yellow-400) w-3 h-3 rounded-full mb-9'></div>
             <div className='bg-(--yellow-300) w-3 h-3 rounded-full mb-9'></div>
             <div className='bg-(--yellow-200) w-3 h-3 rounded-full mb-9'></div>
            </div>

           <h1 className='text-(-neutral) font-bold text-5xl mb-2'>Our</h1>
           <h1 className='text-(--purple) font-bold text-5xl mb-2'>Existence</h1>
           <h1 className='text-(--neutral) font-bold text-5xl mb-15'>Is Crucial</h1>
             <div className=''>
          <img src={image1} alt="HANDS" className='w-full h-auto ' />
             </div>
          </div>


          <div className='flex flex-col gap-5 w-[50%] rounded-lg'>
             
             <div className='bg-(--gray-200) py-4 px-2 rounded-lg '>
               <h3 className='text-(--neutral) font-semibold text-3xl pr-15 '>
            We're here to help African founders <br /> reach the world.</h3>
            <p className='text-(--gray) font-semibold '> Web3 was meant to be global, but access isn‘t equal yet. There‘s money <br />
             and knowledge flowing freely in some regions, while Africa holds incredible people and projects waiting to be seen. <br />
             Tulay Labs exists to close that gap.</p>
             <div className='lg:ml-90 '>
             <img src={image2} alt="" />
             </div> {/* THIS IMAGE */}
             </div>

              <div className='flex justify-evenly gap-4 mx-auto'>
            <div className='bg-[#44acbe] py-4 px-2 rounded-lg'> {/* The First gray div */  }
            <div className='flex justify-between space-y-4'>
            <img src={image3} alt=" The right quote quote image" />
            <img src={image4} alt="The Arrow image" sizes='90' />
              </div>
              <h5 className='text-(--natural) font-semibold text-xl'>We connect African founders and talents with global <br /> investors and opportunities. </h5>
             </div>
             <div className='bg-[#44acbe] py-4 space-y-6 px-2 rounded-lg' >
               <img src={image5} alt="The Second Quote image (the left)" className='ml-auto mb-6' />
              <h5 className='text-(--natural) font-semibold text-xl pl-9'>We help global companies work with African teams and communities on projects.</h5>
             </div>   {/* The second gray div */}
              </div>
             
          </div>

        </div> {/* THE FLEXED DIV*/}
      
      Vision
      
      </div>
  )
}

export default Vision
