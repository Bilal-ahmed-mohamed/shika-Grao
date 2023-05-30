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
     <div className=' bg-red-500 w-full h-full' > 
      <section className=' bg-yellow-500 max-w-7xl mx-auto flex' >
        <div className=' bg-blue-700 w-4/6 h-full space-y-6' >
          <h1 className=' font-bold text-4xl' >{title}</h1>
          <div className=' bg-green-900 w-full h-72' >
            <img src={`https://shika-grao-api.onrender.com/api/Turfs/${image}`} alt="" />
          </div>
          <div>
            <p>
              its an {venue} turf  it opens at {startTime} Am and it closes at {closeTime} Pm and it has {numberOfPitches} Pitches
            </p>
          </div>
        </div>
        <div className=' bg-green-800 w-1/3 h-96' >
           <div>
            <h1 className=' text-4xl'>Details</h1>
            <p>{format}</p>
            <p>{surface}</p>
            <p>{matchDuration}</p>
            <p>{facilities}</p>
            <p>{venue}</p>
            <p>{numberOfPitches}</p>
            <p>{startTime}</p>
            <p>{closeTime}</p>
           </div>
           <div>
            <h1 className=' text-4xl'>Address</h1>
            <p>{postcode}</p>
            <button>Map</button>
           </div>
        </div>
      </section>
     </div>
  )
}

export default IndivualTurf