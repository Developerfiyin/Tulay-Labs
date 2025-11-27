import React from 'react'
import LOGO from '../assets/LOGO.png'
const Footer = () => {
  return (
    <section className='py-12 px-4 bg-white '>

      <div className='lg:flex flex-4  grid'>
        
        <div >
          <img src={LOGO} alt=" THE LOGO IMAGE " />
          <p>We connect people, ideas and opportunities across borders. We help Africa’s builders, founders and communities find global access while bringing meaningful projects into Africa with trust and relevance.</p>
        </div>

   <div>
    <h3>Quick Links</h3>
    <a href="#hero">Home</a>
    <a href="#about">About</a>
    <a href="">Works</a>
    <a href="#">Team</a>
   </div>
      </div>

    </section>
  )
}

export default Footer