import React from 'react'
import image1 from '../images/hero-image.jpg';
import image2 from '../images/hero1.jpg';
import image3 from '../images/hero2.jpg';
import { FcSearch , FcCalendar} from "react-icons/fc";
import { MdOutlinePayment } from "react-icons/md";
import { GiBabyfootPlayers } from "react-icons/gi";

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

    <section className='w-full h-fit bg-lightGreen ' >
      <h1 className=' text-center text-5xl py-3 ' >Find Your Turfs</h1>
     <div className='  space-y-4 bg-red-800 lg:max-w-7xl lg:mx-auto lg:h-96 lg:space-y-0 lg:flex lg:row-auto lg:items-center lg:justify-between ' >
     <div className=' w-11/12 mx-auto   lg:w-72 h-80 lg:mx-0 bg-amber-700' >
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

    <section className='h-full bg-white' >
      <h2 className=' text-center text-3xl py-2  lg:text-5xl ' >Book Your Game within Minutes</h2>
      <span className=' bg-grey mx-auto space-y-5 lg:max-w-7xl lg:flex justify-between lg:space-y-0 py-5 rounded-lg ' > 
        <div className='w-11/12 h-40 mx-auto lg:w-60 lg:h-60 flex lg:flex-col lg:justify-center items-center   px-6 lg:space-y-3 flex-row rounded-md ' >
        <div className=' bg-grey  w-36  h-24 flex justify-center items-center rounded-lg ' >
        <FcSearch size='4em' />
        </div>
        <div className=' w-48 h-24  flex flex-col justify-center items-center    ' >
          <h1 className=' text-2xl  font-bold ' >Find</h1>
          <p className=' font-normal' >A nearby Stadium</p>
        </div>
        </div>
        <div className='w-11/12 h-40 mx-auto lg:w-60 lg:h-60 flex lg:flex-col lg:justify-center px-6 items-center lg:space-y-3 rounded-md ' >
          <div className='bg-grey  w-36  h-24 flex justify-center items-center rounded-lg' >
            <FcCalendar size="4em" />
          </div>
          <div className='w-48 h-24  flex flex-col justify-center items-center' >
            <h1 className=' text-2xl font-bold ' >Choose</h1>
            <p className='font-normal text-center' >The date,time,duration and pitch size</p>
          </div>
        </div>
        <div className='w-11/12 h-40 mx-auto  lg:w-60 lg:h-60 flex lg:flex-col lg:justify-center px-6 items-center lg:space-y-3 rounded-md ' >
          <div className='bg-grey  w-36  h-24 flex justify-center items-center rounded-lg' >
            <MdOutlinePayment size="4em" color='green' />
         </div>
         <div className='w-48 h-24  flex flex-col justify-center items-center' >
          <h1 className='text-2xl font-bold' >Pay</h1>
          <p className='font-normal text-center' >Online using Mpesa</p>
         </div>
        </div>
        <div className='w-11/12 h-40 mx-auto lg:w-60 lg:h-60 flex lg:flex-col lg:justify-center px-6 items-center lg:space-y-3 rounded-md' >
          <div className='bg-grey  w-36  h-24 flex justify-center items-center rounded-lg' >
            <GiBabyfootPlayers size="4em" color='green' />
          </div>
          <div className=' w-48 h-24  flex flex-col justify-center items-center' >
            <h1 className='text-2xl font-bold' >Play</h1>
            <p className='font-normal text-center ' >Come show your skills</p>
          </div>
        </div>
      </span>
    </section>

    <footer className=' bg-yellow-400 h-full ' >
       
    </footer>


    </body>
  )
}

export default Home