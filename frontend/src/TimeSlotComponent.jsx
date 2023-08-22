import React, { useState } from 'react';
import { addDays, format } from 'date-fns';
import moment from 'moment';

const TimeSlotComponent = () => {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleStartTimeChange = (event) => {
    setStartTime(event.target.value);
  };

  const handleEndTimeChange = (event) => {
    setEndTime(event.target.value);
  };

  const generateTimeSlots = (date) => {
    if (!startTime || !endTime) {
      return [];
    }

    const timeSlots = [];
    const timeFormat = 'HH:mm';
    const start = moment(startTime, timeFormat);
    const end = moment(endTime, timeFormat).add(1, 'minute');

    while (start.isSameOrBefore(end)) {
      timeSlots.push(start.format(timeFormat));
      start.add(2, 'hours');
    }

    return timeSlots;
  };
  const nextWeek = () => {
    setCurrentDate(addDays(currentDate, 7));
  };

  const previousWeek = () => {
    setCurrentDate(subDays(currentDate, 7));
  };

  const renderTimeSlotsForDate = (date) => {
    const timeSlots = generateTimeSlots(date);

    return (
      
      <div className="flex space-x-2 h-16 bg-lime-400   items-center">
        <span className=' h-10 w-28 flex justify-center items-center bg-slate-400 ' >
        <h3 className="font-semibold mb-2">{format(date, 'EEE, MMM dd')}</h3>
        </span>
        <div className="flex w-5/6 bg-sky-300">
          {timeSlots.map((slot, index) => (
            <div key={index} className="bg-blue-500 flex justify-around text-white py-2 px-4 rounded cursor-pointer ml-2">
              {slot}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="flex justify-between mb-4 bg-fuchsia-500">
        <button
          onClick={previousWeek}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Previous
        </button>
        <button
          onClick={nextWeek}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Next
        </button>
      </div>
      <h2 className="text-xl font-bold mb-4">Weekly Time Slot Generator</h2>
      <div className="flex gap-4">
        <label className="flex flex-col">
          Start Time:
          <input
            type="time"
            value={startTime}
            onChange={handleStartTimeChange}
            className="mt-1 p-1 border border-gray-300 rounded"
          />
        </label>
        <label className="flex flex-col">
          End Time:
          <input
            type="time"
            value={endTime}
            onChange={handleEndTimeChange}
            className="mt-1 p-1 border border-gray-300 rounded"
          />
        </label>
      </div>
      <div className="mt-6 w-10/12 bg-red-700 flex flex-col mx-auto">
        
        {Array.from({ length: 7 }, (_, i) => addDays(currentDate, i)).map((date, index) => (
          <div key={index} className=" w-3/4 p-4  bg-neutral-600  shadow-md mr-4">
            {renderTimeSlotsForDate(date)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeSlotComponent;
