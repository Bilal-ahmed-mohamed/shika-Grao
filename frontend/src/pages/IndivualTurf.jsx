import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BiCheck, BiCurrentLocation } from "react-icons/bi";
import Calendar from '../components/Calendar';

const IndivualTurf = () => {

  

  const {id} = useParams();
  const [title , setTitle] = useState('');
  const [format , setFormat] = useState('');
  const [surface , setSurface] = useState('');
  const [postcode , setPostcode] = useState('');
  const [numberOfPitches , setNumberOfPitches] = useState('');
  const [venue , setVenue] = useState('');
  const [facilities, setFacilities] = useState('');
  const [startTime , setStartTime] = useState('');
  const [closeTime , setCloseTime] = useState('');
  const [matchDuration , setMatchDuration] = useState('');
  const [image , setImage] = useState('');
  const [masaaa , setMasaa] = useState([]);
  
  



  const singleTurf = async () => {
   const res = await axios.get(`https://shika-grao-api.onrender.com/api/Turfs/${id}/`) 
   console.log(res);
   setTitle(res.data.singleTurf.title);
   setFormat(res.data.singleTurf.format);
   setSurface(res.data.singleTurf.surface);
   setPostcode(res.data.singleTurf.postcode);
   setNumberOfPitches(res.data.singleTurf.numberOfPitches);
   setVenue(res.data.singleTurf.venue);
   setFacilities(res.data.singleTurf.facilities);
   setStartTime(res.data.singleTurf.startTime);
   setCloseTime(res.data.singleTurf.closeTime);
   setMatchDuration(res.data.singleTurf.matchDuration);
   setImage(res.data.singleTurf.Image);
   setMasaa(startTime,closeTime);
   
  }

  const generateTimeSlots = () => {
    const start = new Date(`2023-08-17T${startTime}`);
    const end = new Date(`2023-08-17T${endTime}`);
    const timeSlots = [];

    while (start < end) {
      const slot = new Date(start);
      timeSlots.push(slot);
      start.setHours(start.getHours() + 2);
    }

    return timeSlots;
  };



  const  fetchedFacilities = facilities.split(',');


  console.log(facilities);
   console.log(fetchedFacilities);
   console.log(startTime);
   console.log(masaaa);
  useEffect(() => {
    singleTurf();
   
    // console.log(fetchedFacilities);
   
  }, [])

  return (
     <div className=' w-full h-full py-5 bg-yellow-400 ' > 
      <section className=' mx-auto lg:flex h-full lg:max-w-7xl bg-purple-500' >
        <div className=' mx-auto mb-3 w-11/12 bg-primary lg:w-8/12 h-full lg:mr-3 space-y-7 shadow-xl ' >
          <div className=' h-14 flex  justify-start items-center'>
          <h1 className='font-bold text-3xl'>{title}</h1>
          </div>
          <div className=' bg-primary shadow-md w-full h-72' >
            <img className=' w-full h-72' src={image} alt="" />
          </div>
          
        </div>
        <div className=' mx-auto w-11/12  lg:w-1/3 h-auto  flex flex-col justify-between' >
           <div className=' h-2/4 mb-3 bg-primary shadow-md rounded-md ' >
            <div className=' bg-secondary' >
            <h1 className=' text-center text-4xl'>Details</h1>
            </div>
            <div className=' w-full h-10 flex items-center justify-center  '>
            <p>{format} | {surface} | {matchDuration}  </p>
            </div>
            <div className='w-full h-14 flex justify-around items-center' >
            {
                fetchedFacilities.map((item) => (
                  <p className='flex'>   
                      <BiCheck size="2em" /> 
                      {item}
                  </p>
                ))
              }
            
            </div>
            <div className='h-2/4 flex flex-row justify-around ' >
                    <p> OpenTime : {startTime} Am </p>
                    <p> closeTime :  {closeTime} Pm </p>
              </div>
          
           </div>
           <div className=' h-36 space-y-3 bg-primary shadow-md rounded-md  ' >
            <div className=' bg-secondary' >
            <h1 className=' text-center text-4xl'>Address</h1>
            </div>
            <p className='text-center text-2xl' > Location  :  {postcode}</p>
            <button className=' bg-button w-32 h-8 block mx-auto'> View ON Map</button>
           </div>
        </div>
      </section>

      <div className=' bg-neutral-400 max-w-7xl mt-4 mx-auto'>
         <Calendar/>
      </div>
      <div className="grid grid-cols-2 gap-2">
      
    </div>
     </div>
  )
}

export default IndivualTurf