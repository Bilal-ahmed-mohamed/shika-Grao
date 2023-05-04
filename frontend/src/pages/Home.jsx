import React from 'react'
import image1 from '../images/hero-image.jpg';
import image2 from '../images/hero1.jpg';
import image3 from '../images/hero2.jpg';

const Home = () => {
  return (
    <section className='w-full bg-grey h-96' >
     <div className='bg-lightGreen mx-auto relative  max-w-7xl h-full' >
      <img className='object-cover w-full h-full  ' src={image3} alt="" />
      <div className='absolute w-3/5 h-20 top-32 left-60 bg-grey  flex items-center space-x-8 rounded-md ' >
         <input className='h-10 w-48' type="search" placeholder='Search By Stadium Name' name="" id="" />
         <select className='h-10 w-48' placeholder='Type' name="" id="">
          <option value="">All Sports</option>
          <option value="">Football</option>
          <option value="">Basketball</option>
          <option value="">Cricket</option>
          <option value="">Futsal</option>
         </select>
         <input className='h-10 w-48'  placeholder='Enter Area Location' type="text" />
         <button className='bg-lightGreen w-20 h-10 rounded-md ' >Find Turf</button>
      </div>
     </div>
    </section>
  )
}

export default Home