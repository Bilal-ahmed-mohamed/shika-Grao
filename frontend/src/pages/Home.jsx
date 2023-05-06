import React from 'react'
import image1 from '../images/hero-image.jpg';
import image2 from '../images/hero1.jpg';
import image3 from '../images/hero2.jpg';

const Home = () => {
  return (
    <body>
      
    
    <section className='w-full bg-white h-96' >
     <div className='bg-lightGreen mx-auto relative  max-w-7xl h-full' >
      <img className=' h-56 w-full  object-cover lg:w-full lg:h-full  ' src={image3} alt="" />
      <div className='flex flex-col justify-around items-center absolute   h-64 w-full  lg:absolute lg:w-4/5 lg:h-20 lg:top-32 lg:left-32 bg-grey  lg:flex lg:flex-row lg:items-center lg:space-x-9 lg:rounded-md' >
         <input className=' w-11/12 h-10  lg:h-10 lg:w-48' type="search" placeholder='Search By Stadium Name' name="" id="" />
         <select className=' w-11/12 h-10 lg:h-10 lg:w-48' placeholder='Type' name="" id="">
          <option value="">All Sports</option>
          <option value="">Football</option>
          <option value="">Basketball</option>
          <option value="">Cricket</option>
          <option value="">Futsal</option>
         </select>
         <input className=' w-11/12 h-10 lg:h-10 lg:w-48'  placeholder='Enter Area Location' type="text" />
         <button className=' w-3/4 h-10 bg-lightGreen lg:w-20 lg:h-10 rounded-md ' >Find Turf</button>
      </div>
     </div>
    </section>

    <section className='w-full h-96 bg-lightGreen ' >
     <div className='flex-row  items-center justify-center bg-red-800 lg:max-w-7xl lg:mx-auto lg:h-96 lg:flex lg:row-auto lg:items-center lg:justify-between ' >
     <div className=' w-11/12 mx-auto  lg:w-72 h-80 lg:mx-0 bg-amber-700' >
      <h1>turf 1</h1>
     </div>
     <div className='w-11/12 mx-auto lg:w-72 h-80 bg-lightGreen lg:mx-0'>
      <h1>turf 2</h1>
     </div>
     <div className='w-11/12 mx-auto lg:w-72 h-80 bg-grey lg:mx-0 '>
      <h1>turf 3</h1>
     </div>
     </div>
    </section>


    </body>
  )
}

export default Home