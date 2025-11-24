import React from 'react'

const Newsletter = () => {
  return (
    <section className='bg-white py-12 ml-6 mt-9 '>

        <div className='lg:flex grid gap-4'>
       
       <div className=''>
        <h1 className='font-medium text-5xl text-(--neutral) mb-8 '>We're Open to Partnerships & Collaborations</h1>
        <p className='text-(--gray) font-semibold '>We promise to give you unrestricted access to high quality African Web3 opportunities and vetted startups.</p>
        <input type="text"placeholder='Enter Your Email Here...'
         className='bg-(--gray-200) mb-4 focus:ring-2 focus:ring-(--purple) focus:outline-none rounded-lg mt-5 px-3 py-3 w-100'/>
        <textarea name="" id="" placeholder='Type your message ...'
        className='bg-(--gray-200) w-100 mb-5 focus:ring-2 focus:ring-(--purple) focus:outline-none px-3 py-3 resize-none rounded-lg'></textarea>
         <button className='bg-(--purple) px-2 text-(--natural) py-3 w-70 rounded-full font-medium hover:bg-[#5f0df8cc] ease-in-out duration-300 '>Sumbit Proposal</button>
       </div>

       <div className='ml-12'>
        <h2 className='font-medium text-2xl text-(--neutral) '>We can also send you email updates so you don't miss what's happening in our ecosystem.</h2>
        <input type="text" placeholder='Enter Your Email...' className='bg-(--gray-200) rounded-2xl w-70 px-3 py-3 mt-4 focus:outline-none focus:ring-2 focus:ring-(--purple) ' />
        <button className='bg-(--purple) font-medium text-(--natural) py-3 px-2 w-50 ml-5 rounded-full hover:bg-[#5f0df8cc] '>Subscribe</button>
       </div>
        </div>
    </section>

  )
}

export default Newsletter