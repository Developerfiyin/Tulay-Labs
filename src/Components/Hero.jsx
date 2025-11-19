import React from 'react'
import global from '../assets/global.png'
import connect from '../assets/connect.png'
import light from '../assets/light icon.png'
import image2 from '../assets/image2.png'
import image1 from '../assets/image1.png'
import image3 from '../assets/image3.png'
const Hero = () => {
  return (
    <div className='bg-(--gray-200) text-(--gray) py-10 rounded-4xl px-6 '>
      <div className=' justify-between grid md:grid-cols-2'>
        <div className='flex flex-col gap-9'>
     <h2 className='text-xl font-semibold'>We are Building...</h2>
     <h1 className='text-4xl mb-7 text-(--neutral) font-bold'> The Bridge Between <br />
      Africa & The Global Web3 <br />
       Ecosystem.</h1>
       <h4 className='font-semibold '>We connect people, ideas and opportunities across borders. We help Africa's builders, founders
         and commnuities find global access while bringing meaningful projects into Africa with trust and relevance.</h4>
          <div className='mb-8'> 
        <button className='bg-(--purple) hover:bg-(--gray-200) hover:outline-(--purple) outline-2 hover:text-(--purple) text-xl font-medium px-4 text-white rounded-3xl mx-auto mr-9 ml-0 py-4 border-none'>Partner with Us</button>
       <button className='hover:bg-(--purple) hover:text-(--gray-200) px-4 font-medium rounded-3xl mx-auto ml-0 py-4 border-none outline-(--purple) outline-2 text-xl text-(--purple)'>Join Community</button>
           </div>
        </div>

       <div className=''>
     <img src={image2} alt="THE IMAGE" />
    </div>

        
      </div>


       <div className='flex mt-8 lg:w-full gap-8 border-(--gray) border-b-2'> 
          <div className='items-center border-b-4 rounded-md border-(--yellow)'>
           <img src={global} alt="" className=' mx-auto mb-6 outline-2 p-2  outline-(--purple) rounded-full' />
          <h5 className='text-black font-semibold mb-6'>Driving global and ecosystem growth.</h5>
          </div>
         
           <div className='items-center'>
           <img src={connect} alt="the connect icon" className=' mx-auto mb-4 outline-2 p-2 outline-(--gray) rounded-full' />
          <h5 className='hover:text-(--neutral) font-semibold mb-5'>Connecting talents, investors & innovators.</h5>
          </div>

            <div className='items-center'>
           <img src={light} alt="" className=' mx-auto mb-4 outline-2 p-2 outline-(--gray) rounded-full' />
          <h5 className='hover:text-(--neutral) font-semibold mb-4'>Empowering African builders and founders.</h5>
          </div>
  
            <div className='items-center'>
           <img src={image3} alt="" className=' mx-auto mb-4 w-10 outline-2 p-2 outline-(--gray) rounded-full' />
          <h5 className='hover:text-(--neutral) font-semibold mb-4'>Bridging Africa & the global Web3 ecosystem .</h5>
          </div>
        </div>


    </div>
  )
}

export default Hero
