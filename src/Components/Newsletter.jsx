import React from 'react'

const Newsletter = () => {
  return (
    <section className='bg-white py-12 ml-6 mt-9 '>

        <div className='lg:flex grid gap-4'>
       
       <div className=''>
        <h1 className='font-medium text-5xl text-(--neutral) mb-8 '>We're Open to Partnerships & Collaborations</h1>
        <p className='text-(--gray) font-semibold '>We promise to give you unrestricted access to high quality African Web3 opportunities and vetted startups.</p>
        <input type="text" className='bg-(--gray-200) outline-none focus:ring-2 focus:ring-(--purple) focus:outline-none rounded-lg mt-5 px-3 py-3  w-100 ' />
       </div>

       <div className='ml-12'>
        <h2 className='font-medium text-2xl text-(--neutral) '>We can also send you email updates so you don't miss what's happening in our ecosystem.</h2>
        <input type="text" className='' />
       </div>
        </div>
    </section>

  )
}

export default Newsletter