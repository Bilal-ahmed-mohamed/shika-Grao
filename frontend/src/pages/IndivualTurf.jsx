import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const IndivualTurf = () => {

  const {id} = useParams();
  const [title , setTitle] = useState('');
  const [format , setFormat] = useState('');
  const [surface , setSurface] = useState('');
  const [postcode , setPostcode] = useState('');
  const [numberOfPitches , setNumberOfPitches] = useState('');
  const [venue , setVenue] = useState('');
  const [facilities, setFacilities] = useState([]);
  const [startTime , setStartTime] = useState('');
  const [closeTime , setCloseTime] = useState('');
  const [matchDuration , setMatchDuration] = useState('');
  const [image , setImage] = useState('');




  

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


   
  }

  useEffect(() => {
    singleTurf();
  }, [])

  return (
     <div className=' bg-red-500 w-full h-full py-5' > 
      <section className=' bg-yellow-500 max-w-7xl border-2 border-lime-700 mx-auto flex h-full ' >
        <div className=' bg-blue-700 w-4/6 h-full space-y-8' >
          <div className=' bg-green-600'>
          <h1 className='font-bold text-4xl' >{title}</h1>
          </div>
          <div className=' bg-green-900 w-full h-72' >
            <img className=' w-full h-72' src={image} alt="" />
          </div>
          
        </div>
        <div className=' bg-teal-700 w-1/3 h-96' >
           <div className=' border-2 border-l-gray-200' >
            <h1 className=' text-4xl'>Details</h1>
            <div className=' w-full h-10 bg-amber-700 flex items-center justify-center  '>
            <p>{format} || {surface} || {matchDuration}  </p>
            </div>
            <div className='w-full h-12 bg-emerald-400' >
            <p>{facilities}</p>
            </div>
            <div className='w-full h-16 bg-blue-600'>
              <div className='h-2/4 bg-gray-600 flex flex-row justify-around '>
                  <p> Venue Type :  {venue}</p>
                  <p> No: Of Pitches : {numberOfPitches}</p>
              </div>
              <div className='h-2/4 bg-red-700 flex flex-row justify-around ' >
                    <p> StartTime : {startTime}</p>
                    <p> closeTime :  {closeTime}</p>
              </div>
          
            
            </div>
           </div>
           <div className='space-y-3' >
            <h1 className=' text-4xl'>Address</h1>
            <p>{postcode}</p>
            <button className=' bg-button w-28 h-8 block'> View ON Map</button>
           </div>
        </div>
      </section>
     </div>
  )
}

export default IndivualTurf