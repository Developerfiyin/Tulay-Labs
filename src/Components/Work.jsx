import React from 'react'
import image1 from '../assets/image8.png'
import image2 from '../assets/image9.png'
import image3 from '../assets/image10.png'
import image4 from '../assets/image16.png'


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

        <div className=' mt-8 py-6 lg:flex grid gap-4 justify-evenly px-2' >
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
            <img src={image2} alt=" The image icon " className='w-10 outline-2 rounded-full outline-(--neutral)  mt-3 p-2 ' />
          </div>

            
        <div className='bg-(--natural) flex-col p-5 flex mx-auto' >
          <div className='flex justify-between'>
           <h3 className='text-(--neutral) text-2xl font-semibold mr-15 mb-20'>Investment Forum</h3>
           <div className='flex gap-3'> 
             <div className='w-3 h-3 bg-(--purple-200) rounded-full'></div>
            <div className='w-3 h-3 rounded-full bg-(--purple-300)'></div>
            <div className='w-3 h-3 rounded-full bg-(--purple-400) '></div>
           </div>
            </div>
            <p className='font-semibold text-(--gray) mb-6'> Funding is one of the biggest challenges for African Web3 startups. We address this by creating clear pathways for investment.  </p>
            <p className='text-(--gray) font-medium mb-6'>Through digital demo days and private forums, founders connect with VC's, angels, and Web3 investors. This ensure are seen, supported, and part of a growing African Web3 ecosystem .</p>
            <img src={image3} alt="" className='w-10 mt-3 outline-2 rounded-full p-2 outline-(--neutral)' />
          </div>

        <div className='bg-(--natural) flex-col p-5 flex mx-auto' >
          <div className='flex justify-between'>
           <h3 className='text-(--neutral) text-2xl font-semibold mr-15 mb-20'>Market Expansion</h3>
           <div className='flex gap-3'> 
             <div className='w-3 h-3 bg-(--purple-200) rounded-full'></div>
            <div className='w-3 h-3 rounded-full bg-(--purple-300)'></div>
            <div className='w-3 h-3 rounded-full bg-(--purple-400) '></div>
           </div>
            </div>
            <p className='font-semibold text-(--gray) mb-6' > A lot of Web3 projects want to enter Africa but don't know how where to start.</p>
            <p className='text-(--gray) font-medium mb-6'>We help them find their way by providing go-to-market strategies, community activities,
              partnership and localization to make sure projects don't just show in African but also connect with it.</p>
              <img src={image4} alt="The fourth image icon" className='w-10 mt-3 p-2 outline-(--neutral) outline-2 rounded-full'/>
          </div>
      </div>
          <div className='flex gap-3 ml-9'> 
        <h3 className='text-3xl text-(--gray) font-medium'>Core</h3>
        <h3  className='text-3xl text-(--neutral) font-bold'>Belief</h3>
          </div>

         <p className='font-semibold text-(--gray) mt-4 ml-9 '> We believe real value comes from putting resources into action. Africa's talent and creativity
           deserve equal access to global opportunities, and we are committed to bridging that gap. 
           Collaboration builds stronger, more resilient systems than competition ever could, and trust is the
            foundation of every successful partnership. By combining action, opportunity, collaboration, and 
            trust, we unlock Africa‘s full potential and create meaningful impact across the Web3 ecosystem. </p>
        
        </section>
  )
}

export default Work