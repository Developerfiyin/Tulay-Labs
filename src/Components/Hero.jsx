import React from 'react'

const Hero = () => {
  return (
    <div className='bg-(--gray-200) mx-auto text-(--gray) py-10 rounded-4xl px-4'>
      <div className='flex justify-between'>
        <div className='flex flex-col gap-5'>
     <h2 className='text-xl font-semibold'>We are Building...</h2>
     <h1 className='text-4xl mb-7 text-(--neutral) font-bold'> The Bridge Between <br />
      Africa & The Global Web3 <br />
       Ecosystem.</h1>

       <h4 className='font-semibold '>We connect people, ideas and opportunities across borders. We help Africa's builders, founders
         and commnuities find global access while bringing meaningful projects into Africa with trust and relevance.</h4>
         <button className='bg-(--purple) px-6 text-white rounded-3xl mx-auto ml-0 py-4 border-none '>Partner with Us</button>
        </div>

      </div>

    </div>
  )
}

export default Hero
