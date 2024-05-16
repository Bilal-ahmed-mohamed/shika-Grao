import React, { useEffect, useState } from 'react';
import { format, addDays, subDays } from 'date-fns';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

function Calendar() {
  

  const {id} = useParams();
  const [numberOfPitches , setNumberOfPitches] = useState('');
  const [venue , setVenue] = useState('');
  const [startTime , setStartTime] = useState('');
  const [endTime , setCloseTime] = useState('');
  const [matchDuration , setMatchDuration] = useState('');
  const [currentDate, setCurrentDate] = useState(new Date());


  
  const singleTurf = async () => {
    const res = await axios.get(`http://localhost:4000/api/Turfs/${id}/`) 
    console.log(res);
    setStartTime(res.data.singleTurf.startTime);
    setCloseTime(res.data.singleTurf.closeTime);
    setMatchDuration(res.data.singleTurf.matchDuration); 
   }

  const nextWeek = () => {
    setCurrentDate(addDays(currentDate, 7));
  };

  const previousWeek = () => {
    setCurrentDate(subDays(currentDate, 7));
  };


// code to implement time slots 
 const generateTimeSlots = (date) => {
  if (!startTime || !endTime) {
    return  [];
  }
  const timeSlots = [];
  const timeFormat = 'HH:mm';
  const start = moment(startTime , timeFormat);
  const end = moment(endTime , timeFormat).add(1, 'minute');

  while (start.isSameOrBefore(end)) {
    timeSlots.push(start.format(timeFormat));
    start.add(2 , 'hours');    
  }
  return timeSlots;
 };



// code to implement the time and slots for each day
  const renderTimeSlotsForDate = (date) => {
    const timeSlots = generateTimeSlots(date);

    return (
      
      <div className=" flex space-x-3 lg:h-16  items-center ">
        <span className=' h-20 lg:h-10 lg:w-28 flex justify-center items-center   ' >
        <h3 className="font-bold ml-2 mb-2 lg:ml-0">{format(date, 'EEE, MMM dd')}</h3>
        </span>
        <div className="flex justify-around  flex-wrap h-auto w-auto  ">
          {timeSlots.map((slot, index) => (
            <div key={index} className=" mb-3 bg-grey text-black py-2 px-4 rounded cursor-pointer lg:mb-0 ml-2">
              {slot}
            </div>
          ))}
        </div>
      </div>
    );
  };

  


  

  useEffect(() => {
    singleTurf();
   })

  return (
    <div className=" w-auto">
      <div className="  flex lg:mx-auto mt-5 justify-between lg:w-1/2 mb-4 ">
        <button
          onClick={previousWeek}
          className="px-4 py-2 bg-grey text-black rounded"
        >
          Prev Week
        </button>
        <button
          onClick={nextWeek}
          className="px-4 py-2 bg-grey text-black rounded"
        >
          Next Week
        </button>
      </div>
      <div className=" w-auto h-auto  flex flex-col ">
        
        {Array.from({ length: 7 }, (_, i) => addDays(currentDate, i)).map((date, index) => (
          <div key={index} className=" w-auto    shadow-md ">
            {renderTimeSlotsForDate(date)}
          </div>
        ))}
      </div>
       
    </div>
  );
}

export default Calendar;
