import React, { useEffect, useState } from 'react';
import { format, addDays, subDays } from 'date-fns';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

function Calendar() {
  

  const {id} = useParams();

  const [title , setTitle] = useState('');
  const [formatType , setFormattype] = useState('');
  const [surface , setSurface] = useState('');
  const [postcode , setPostcode] = useState('');
  const [numberOfPitches , setNumberOfPitches] = useState('');
  const [venue , setVenue] = useState('');
  const [startTime , setStartTime] = useState('');
  const [endTime , setCloseTime] = useState('');
  const [matchDuration , setMatchDuration] = useState('');
  const [currentDate, setCurrentDate] = useState(new Date());
  const [modalOpen , setModalIsOpen] = useState(false);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [price , setPrice] = useState('');


  
  const singleTurf = async () => {
    const res = await axios.get(`http://localhost:4000/api/Turfs/${id}/`) 
    console.log(res);
    setStartTime(res.data.singleTurf.startTime);
    setCloseTime(res.data.singleTurf.closeTime);
    setMatchDuration(res.data.singleTurf.matchDuration); 
    setVenue(res.data.singleTurf.venue);
    setTitle(res.data.singleTurf.title);
    setFormattype(res.data.singleTurf.format);
    setSurface(res.data.singleTurf.surface);
    setPostcode(res.data.singleTurf.postcode);
  
   }


   const slotget = async () => {
    const res = await axios.get(`http://localhost:4000/api/slots/${id}/`)
    console.log(res);
    setPrice(res.data.price);
    console.log(price);
    
    
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
            <Link to="#"  onClick={(e) => {
                   e.preventDefault()
                   setSelectedTimeSlot(slot);
                   setModalIsOpen(true);
                   console.log(selectedTimeSlot);
                   
            }} key={index} className=" mb-3 bg-grey text-black py-2 px-4 rounded cursor-pointer lg:mb-0 ml-2">
              {slot}
              
            </Link>
          ))}
        </div>
      </div>
    );
  };

  
  useEffect(() => {
    singleTurf();
    slotget();
  
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

      { modalOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>          
          <div
            class="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
            <div class="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative">
                <svg xmlns="http://www.w3.org/2000/svg"
                  onClick={() => setModalIsOpen(false)}
                    class="w-3.5 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500 float-right" viewBox="0 0 320.591 320.591">
                    <path
                        d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                        data-original="#000000"></path>
                    <path
                        d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                        data-original="#000000"></path>
                </svg>

                <div class="my-4 ">
                    
                    <h1 class="text-gray-800 text-2xl font-bold text-center mb-8 ">Checkout </h1>
                    <p className="text-xl">
                      <strong>Title:</strong> {title}
                    </p>
                    <p className=' text-xl'> <strong>Format:</strong> {formatType}</p>       
                    <p className=' text-xl'> <strong>location:</strong> {postcode}</p>                   
                    <p className='text-xl'>  <strong>Time:</strong> {matchDuration}</p>
          
                    <p className='text-xl'> <strong>Date:</strong> {currentDate ? format(currentDate, 'EEE, MMM dd, yyyy') : ''}</p>


                    <div class="text-center space-x-4 mt-8">
                        <button type="button"
                         onClick={() => setModalIsOpen(false)}
                            class="px-4 py-2 rounded-lg text-gray-800 text-sm bg-gray-200 hover:bg-gray-300 active:bg-gray-200">Cancel</button>
                        <button type="button"
                            class="px-4 py-2 rounded-lg text-white text-sm bg-green-800 hover:bg-green-600 active:bg-green-600">Checkout</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
      ) }
      
       
    </div>
  );
}

export default Calendar;
