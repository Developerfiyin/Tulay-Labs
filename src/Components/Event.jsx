import React from 'react'

const Event = () => {
  return (
    <section className='bg-white py-12 px-5 '>
        <div className='lg:flex gap-8 '>
          <div className='flex gap-2'>
            <h2 className='lg:text-5xl text-2xl text-(--gray) font-semibold'> We've got interesting</h2>
            <h2 className='lg:text-5xl text-2xl text-(--neutral) font-semibold'>Events</h2>
            <h2 className='lg:text-5xl text-2xl font-semibold text-(--gray)'>coming up</h2>
          </div>

          <div className=''> 
           <p className='text-(--gray) '>7th November</p>
           <h5 className='text-(neutral) font-medium'>Tulay Labs Mixer</h5>
           <h5 className=' text-(--gray) font-medium '>Bridging Africa's Web3 Talents With Global Opportunities</h5>
           <a href="#post" className='hover:text-(--gray) '>See post</a>
          </div>

        </div>
        </section>
  )
}

export default Event