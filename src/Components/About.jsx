import React from 'react'

const About = () => {
  return (
    <div className='bg-w py-12 px-4 '>
        
        <div  className='flex justify-between'>
         <div className='flex flex-col '>
          <h1 className='text-(--gray) text-5xl font-semibold mb-4'>
                Tulay Labs is a hub built <br />
                around <br />
                one simple idea:
            </h1>
            <h1 className='text-6xl font-bold text-(--neutral)'>“Connection”</h1>
            </div>
           
           <div className='flex flex-col ml-9 gap-5'>
             <h3 className='text-4xl font-bold text-(--neutral)'>So, who are we ?</h3>
             <p className='text-(--gray) font-medium'>The name “Tulay“ means bridge and that‘s exactly what we‘re building: A link between <br />
              Africa and the rest of the Web3 ecosystem.</p>

              <p> We believe Africa has everything it needs to lead in Web3 such as talent, creativity, <br />
               strong communities and culture. But access to capital, infrastructure and visibility is still <br />
               uneven. So we decided to change that. Tulay Labs connects builders, talents, investors <br />
               and ecosystems. We create the spaces, programs and relationships that help ideas <br />
                grow and opportunities reach the people who deserve them.

</p>
           </div>
            
             </div>


        At</div>
  )
}

export default About
