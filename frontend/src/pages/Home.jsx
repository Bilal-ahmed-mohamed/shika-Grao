import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import image3 from '../images/close-up-athlete-playing-soccer_23-2150845600.avif';
import city1 from '../images/city1.jpg';
import city2 from '../images/city2.jpg';
import city3 from '../images/city3.jpg';
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



   <div class="max-w-screen-xl mx-auto p-5 mb-10 sm:p-10 md:p-16">

    <h2 className='text-center font-bold text-3xl'>Find Your Play</h2>
    <p  className='text-center text-xl pt-4'> Find sports facilities from football pitches to tennis courts in a range of cities across the UK and Ireland</p>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
    <div class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-10 max-w-sm mt-24">
      <img src={city1} alt="University of Southern California" class="absolute inset-0 h-full w-full object-cover"/>
      <div class="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/5"></div>
      <h3 class="z-10 mt-3 text-3xl text-end font-bold text-white">Paris</h3>
    <div class="z-10 gap-y-1 text-end overflow-hidden text-sm leading-6 text-gray-300">City of love</div>
    </div>

      
    <div class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mt-24">
       <img src={city2} alt="University of Southern California" class="absolute inset-0 h-full w-full object-cover"/>
        <div class="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/5"></div>
        <h3 class="z-10 mt-3 text-3xl text-end font-bold text-white">Paris</h3>
        <div class="z-10 gap-y-1 text-end overflow-hidden text-sm leading-6 text-gray-300">City of love</div>
     </div>
     
      
     
     <div class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mt-24">
       <img src={city3} alt="University of Southern California" class="absolute inset-0 h-full w-full object-cover"/>
        <div class="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/5"></div>
        <h3 class="z-10 mt-3 text-3xl text-end font-bold text-white">Paris</h3>
        <div class="z-10 gap-y-1 text-end overflow-hidden text-sm leading-6 text-gray-300">City of love</div>
     </div>
    </div>
  </div>

  
    <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">

      <div class="border-b mb-5 flex justify-between text-sm">
          <div class="text-indigo-600 flex items-center pb-2 pr-2 border-b-2 border-indigo-600 uppercase">
              <p class="font-semibold inline-block">Grao</p>
          </div>
          <Link to="/Turfs" >See All</Link>
      </div>


        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {turf.map((fetchedData) => (
          <div key={fetchedData._id} class="rounded overflow-hidden shadow-lg flex flex-col">
                <div class="relative h-56">
                  <img class="w-full h-full" src={fetchedData.Image}  alt="Sunset in the mountains"/>
                  <div class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"> </div>  
                </div>
                <div class="px-6 py-4 mb-auto">
                  <h1 className='font-bold text-lg'>{fetchedData.title}</h1>
                </div>
                <div class="px-6 flex flex-col lg:flex-row md:items-center justify-between">
                  <div>
                  <span class="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                        <p class="ml-1"> <span className='text-md md:text-lg'>Format:</span> <span className='font-bold'>{fetchedData.format}</span></p>
                    </span>

                    <span class="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                        <p class="ml-1"><span className='text-md md:text-lg '>Surface: </span> <span className='font-bold'>{fetchedData.surface}</span></p>
                    </span>
                  </div>

                  <div>
                  <span class="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                        <p class="ml-1"><span className='text-md md:text-lg '>Area:</span><span className='font-bold'> {fetchedData.postcode}</span></p>
                    </span>

                    <span class="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                        <p class="ml-1"><span className='text-md md:text-lg '>Pitches:</span> <span className='font-bold'> {fetchedData.numberOfPitches}</span></p>
                    </span>
                  </div>
                </div>
               <div className='py-3'>
                   <a href="#" class="inline-block pl-3 pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent">
                    Book Now
                    </a>
               </div>
          </div>
        ))}
        
        </div>

</div>
 
  
    

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