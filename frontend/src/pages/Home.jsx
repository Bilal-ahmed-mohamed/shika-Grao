import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import image3 from '../images/close-up-athlete-playing-soccer_23-2150845600.avif';
import { FcSearch , FcCalendar} from "react-icons/fc";
import { MdOutlinePayment, MdFacebook } from "react-icons/md";
import { GiBabyfootPlayers } from "react-icons/gi";
import axios from 'axios'


const Home = () => {
  const [turf , setTurfs] = useState([]);



  const gettur = async() =>{
    const tur = await axios.get('http://localhost:4000/api/Turfs')
    setTurfs(tur.data.turfs)
    setTurfs(tur.data.turfs.slice(0,3));
    console.log(tur);
   }
   useEffect(() =>{
    gettur();
   },[])
  return (
    <body className='' >
      
    
      <section>
 

    <div class="relative py-12 bg-gray-900 sm:py-16 lg:py-20 xl:pt-32 xl:pb-44">
        <div class="absolute inset-0 block">
            <img class="object-cover object-right-bottom w-full h-full"  src={image3} alt="" />
        </div>

        <div class="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div class="max-w-xl mx-auto text-center lg:max-w-md xl:max-w-lg lg:text-left lg:mx-0">
                <h1 class="text-3xl font-bold text-white sm:text-4xl xl:text-5xl xl:leading-tight">Build SaaS Landing Page without Writing a Single Code</h1>
                <p class="mt-8 text-base font-normal leading-7 text-gray-400 lg:max-w-md xl:pr-0 lg:pr-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc nisl eu consectetur. Mi massa elementum odio eu viverra amet.</p>

                <div class="flex items-center justify-center mt-8 space-x-5 xl:mt-16 lg:justify-start">
                    <a href="/Turfs" title="" class="  inline-flex  items-center justify-center px-3 py-1.5 text-base font-bold leading-7 text-gray-900 transition-all duration-200 bg-white border border-transparent rounded-md sm:px-6  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white  hover:bg-blue-300" role="button">
                         View
                    </a>
                </div>
            </div>
        </div>

        {/* <div class="mt-8 lg:hidden">
            <img class="object-cover w-full h-full"  src={image3} alt="" />
        </div> */}
    </div>
</section>


    <section className='w-full h-fit' >
      <h1 className=' text-center text-5xl py-5 ' >Find Your Turfs</h1>
     <div className='  space-y-4  lg:max-w-7xl lg:mx-auto lg:h-auto py-5 lg:space-y-0 lg:flex lg:row-auto lg:items-center lg:justify-between mb-7' >

      {
        turf.map((fetchedData) => (

          <div key={fetchedData._id} className=' w-3/4 mx-auto border bg-secondary space-y-3 lg:w-72  h-full lg:mx-0 rounded-lg ' >
           <img className=' h-40 w-full lg:w-72 lg:h-36' src={fetchedData.Image} alt="" />
           <h1 className=' text-3xl text-center  font-bold ' >{fetchedData.title}</h1>
           <p className='ml-5' > Format : {fetchedData.format}</p>
           <p className=' ml-5' > Surface : {fetchedData.surface}</p>
           <p className='ml-5' > Area : {fetchedData.postcode}</p>
           <p className='ml-5' > Pitches : {fetchedData.numberOfPitches}</p>
           <button className=' bg-button w-28 h-8 block mx-auto  ' > Book Grao </button>
          </div>
        ))
      }

      
     
     
     
     </div>
     <button className='w-32 h-12 block mx-auto bg-button'> <Link to="/Turfs" > View More </Link> </button>
    </section>

 
  
    

      <section class="text-black   my-5">
      <h2 className=' text-center font-bold text-3xl py-5' >Book Your Game within Minutes</h2>
  <div class="container px-5 py-24 mx-auto">
 
    <div class="flex flex-wrap -m-4 text-center">
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class=" px-4 py-6 rounded-lg shadow-2xl">
            <div  class="text-indigo-500 w-12 h-12 mb-3 inline-block">
              <FcSearch size='4em' />
            </div>
          <h2 class="title-font font-medium text-3xl text-gray-900">Find</h2>
          <p class="leading-relaxed">A nearby Stadium</p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class=" px-4 py-6 rounded-lg shadow-2xl">
           <div  class="text-indigo-500 w-12 h-12 mb-3 inline-block">
             <FcCalendar size="4em" />
            </div>
          <h2 class="title-font font-medium text-3xl text-gray-900">Choose</h2>
          <p class="leading-relaxed">what works for you</p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class=" px-4 py-6 rounded-lg shadow-2xl">
        <div  class="text-indigo-500 w-12 h-12 mb-3 inline-block">
             <MdOutlinePayment size="4em" />
            </div>
          <h2 class="title-font font-medium text-3xl text-gray-900">Pay</h2>
          <p class="leading-relaxed">Online using Mpesa</p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class=" px-4 py-6 rounded-lg shadow-2xl">
            <div  class="text-indigo-500 w-12 h-12 mb-3 inline-block">
             <GiBabyfootPlayers size="4em"  />
            </div>
          <h2 class="title-font font-medium text-3xl text-gray-900">Play</h2>
          <p class="leading-relaxed">Come show your skills</p>
        </div>
      </div>
    </div>
  </div>
</section>


    


    </body>
  )
}

export default Home