import React from 'react'
import image4 from '../assets/image11.png'
import image5 from '../assets/image5.png'
import image from '../assets/image12.png'
import global from '../assets/global.png'
import connect from '../assets/connect.png'
import light from '../assets/light icon.png'
import image3 from '../assets/image3.png'
 

const About = () => {
  return (
    <section className='py-12 px-4'>
        
        <div  className='flex justify-between'>
         <div className='flex flex-col'>
          <h1 className='text-(--gray) text-5xl font-semibold mb-4'>
                Tulay Labs is a hub built <br />
                around <br />
                one simple idea:
            </h1>
            <h1 className='text-6xl font-bold text-(--neutral)'>“Connection”</h1>
<div>
            <img src={image4} alt="THE GLOBAL IMAGE " className='w-90 ml-10 mt-10  ' />

</div>
            </div>
           
           <div className='flex flex-col ml-9 gap-5'>
             <h3 className='text-4xl font-bold text-(--neutral)'>So, who are we ?</h3>
             <p className='text-(--gray) font-medium'>The name “Tulay“ means bridge and that‘s exactly what we‘re building: A link between <br />
              Africa and the rest of the Web3 ecosystem.</p>

              <p  className='text-(--gray) font-medium'> We believe Africa has everything it needs to lead in Web3 such as talent, creativity, <br />
               strong communities and culture. But access to capital, infrastructure and visibility is still <br />
               uneven. So we decided to change that. Tulay Labs connects builders, talents, investors <br />
               and ecosystems. We create the spaces, programs and relationships that help ideas <br />
                grow and opportunities reach the people who deserve them.</p>

                <p className='text-(--gray) font-medium '>Our goal is to make sure African talents and builders get the access they deserve while <br />
                 creating a space where innovation grows and <br />
                 everyone has a chance to be seen and heard in the global Web3 story. </p>

              <div className=' gap-4 md:flex '>
                <div className='border-r-2 border-(--gray) h-14'>
                  <img src={global} alt="The GLOBAL PICTURE" className='w-10  outline-2 rounded-full m-4  p-2 outline-(--gray)' />
                </div>
                <div className='border-r-2 border-(--gray) h-14'>
                  <img src={connect} alt="THE CONNECT ICON" className='w-10 outline-2 rounded-full m-4 p-2 outline-(--gray) ' />
                </div>
                <div className=''>
                  <img src={image3} alt="" className='w-10 outline-2 rounded-full p-2 m-4 outline-(--gray)  ' />
                </div>
              <h3 className='ml-0 mt-5 text-(--netural) font-semibold text-3xl'>We‘re connecting Africa to the <br /> world of web3.</h3>
                   </div>
                 

           </div>
            
             </div>

              

        </section>
  )
}

export default About
