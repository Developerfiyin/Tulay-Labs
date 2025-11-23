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

        <div className=' mt-8 py-6 flex gap-4 justify-evenly px-2' >
          <div className='bg-(--natural) flex-col p-5 gap-4 flex mx-auto' >
          <div className='flex justify-between'>
           <h3 className='text-(--neutral) text-2xl font-semibold mr-15 mb-20'>Talent Hub</h3>
           <div className='flex gap-3'> 
             <div className='w-3 h-3 bg-(--purple-200) rounded-full'></div>
            <div className='w-3 h-3 rounded-full bg-(--purple-300)'></div>
            <div className='w-3 h-3 rounded-full bg-(--purple-400) '></div>
           </div>
            </div>
            <p className='font-semibold text-(--gray) mb-6' > Africa has incredible Web3 talent, from developers to marketers and community managers, yet much remains unseen and underused.</p>
            <p className='text-(--gray) font-medium '>The challenge is access, not ability. Tulay Labs vets, equips, and connects African talent with global Web3 projects, helping startups, investors, and businesses discover and work with the skills Africa has to offer.</p>
          </div>

            
        <div className='bg-(--natural) flex-col p-5 flex mx-auto' >
          <div className='flex justify-between'>
           <h3 className='text-(--neutral) text-2xl font-semibold mr-15 mb-20'>Talent Hub</h3>
           <div className='flex gap-3'> 
             <div className='w-3 h-3 bg-(--purple-200) rounded-full'></div>
            <div className='w-3 h-3 rounded-full bg-(--purple-300)'></div>
            <div className='w-3 h-3 rounded-full bg-(--purple-400) '></div>
           </div>
            </div>
            <p className='font-semibold text-(--gray) mb-6' > Africa has incredible Web3 talent, from developers to marketers and community managers, yet much remains unseen and underused.</p>
            <p className='text-(--gray) font-medium '>The challenge is access, not ability. Tulay Labs vets, equips, and connects African talent with global Web3 projects, helping startups, investors, and businesses discover and work with the skills Africa has to offer.</p>
          </div>

        <div className='bg-(--natural) flex-col p-5 flex mx-auto' >
          <div className='flex justify-between'>
           <h3 className='text-(--neutral) text-2xl font-semibold mr-15 mb-20'>Talent Hub</h3>
           <div className='flex gap-3'> 
             <div className='w-3 h-3 bg-(--purple-200) rounded-full'></div>
            <div className='w-3 h-3 rounded-full bg-(--purple-300)'></div>
            <div className='w-3 h-3 rounded-full bg-(--purple-400) '></div>
           </div>
            </div>
            <p className='font-semibold text-(--gray) mb-6' > Africa has incredible Web3 talent, from developers to marketers and community managers, yet much remains unseen and underused.</p>
            <p className='text-(--gray) font-medium '>The challenge is access, not ability. Tulay Labs vets, equips, and connects African talent with global Web3 projects, helping startups, investors, and businesses discover and work with the skills Africa has to offer.</p>
          </div>

      </div>




        
        </section>
  )
}

export default Work