import React from 'react'
import Testimonials from '../assets/Testimonials.png'

const Testimonial = () => {
  return (
    <div>
      <img 
        src={Testimonials} 
        alt="Testimonials" 
        className='hidden md:block w-full h-auto'
      />
      

    </div>
  )
}

export default Testimonial