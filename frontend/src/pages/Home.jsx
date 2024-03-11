import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import image3 from '../images/hero2.jpg';
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
      
    
    <section className='w-full  h-96' >
     <div className=' mx-auto relative  max-w-7xl h-full' >
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

    <section className='h-full  mb-4 ' >
      <h2 className=' text-center text-3xl py-5  lg:text-5xl ' >Book Your Game within Minutes</h2>
      <span className=' bg-light mx-auto space-y-5 lg:max-w-7xl lg:flex justify-between lg:space-y-0 py-5 rounded-lg ' > 
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

    


    </body>
  )
}

export default Home