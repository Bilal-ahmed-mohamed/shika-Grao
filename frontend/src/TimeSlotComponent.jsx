import React, { useState } from 'react';

const TimeSlotComponent = () => {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleStartTimeChange = (event) => {
    setStartTime(event.target.value);
  };

  const handleEndTimeChange = (event) => {
    setEndTime(event.target.value);
  };

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

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-xl font-bold mb-4">Time Slot Generator</h2>
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
      <div className="mt-6 flex flex-wrap gap-2">
        {startTime && endTime && startTime < endTime ? (
          generateTimeSlots().map((slot, index) => (
            <div
              key={index}
              className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer"
            >
              {slot.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
          ))
        ) : (
          <p className="text-red-600">Please enter valid start and end times.</p>
        )}
      </div>
    </div>
  );
};

export default TimeSlotComponent;
