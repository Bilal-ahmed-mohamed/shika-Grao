import React, { useState } from 'react';
import { format, addDays, subDays } from 'date-fns';

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const nextWeek = () => {
    setCurrentDate(addDays(currentDate, 7));
  };

  const previousWeek = () => {
    setCurrentDate(subDays(currentDate, 7));
  };

  const renderDays = () => {
    const days = [];
    for (let i = 0; i < 7; i++) {
      const date = addDays(currentDate, i);
      const formattedDate = format(date, 'EEEE, MMM dd');
      days.push(
        <div key={i} className="border w-36 h-10">
          {formattedDate}
        </div>
      );
    }
    return days;
  };

  return (
    <div className="container mx-auto p-4 bg-lime-700">
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
      <div className=' bg-lime-300 w-8/12 h-full border border-blue-900 flex  justify-between' >
      <div className="border border-red-600 w-1/5 h-96   bg-orange-200  flex flex-col justify-around">
           {renderDays()}
      </div>
      <div className=' w-9/12 bg-white' > 
       <h1>hello</h1>
      </div>
      </div>

    </div>
  );
}

export default Calendar;
