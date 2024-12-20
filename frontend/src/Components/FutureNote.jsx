import React, { useState } from 'react';
import letter from '../assets/images/letter.png';
import send from "../assets/images/send.png";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const FutureNote = () => {
  const [openCalendar, setOpenCalendar] = useState(false); // Manage calendar visibility
  const [selectedDate, setSelectedDate] = useState(null); // Manage selected date

  const toggleCalendar = () => {
    setOpenCalendar(prev => !prev); // Toggle calendar visibility
  };

  const handleDateChange = (newValue) => {
    setSelectedDate(newValue); // Update selected date
  };

  console.log(selectedDate);

  return (
    <>
      <div>
        {/* Your other content goes here */}
      </div>
      <div className="msgContainer">
        <img src={letter} className='letterHead' alt="Letter Head" />
        
        {/* The Textarea for Message */}
        <div className="msgBody">
          <label>
            <textarea
              name="postContent"
              rows={4}
              cols={40}
              placeholder="Koi itna sunder kaise hi sakta hai🤔🤔😶‍🌫️😶‍🌫️"
            />
          </label>
        </div>

        {/* Button to Open/Close the Calendar */}
        <button className="sendButton" onClick={toggleCalendar}>
          <img src={send} alt="Send" />
        </button>
      </div>

      {/* Calendar Popup */}
      {openCalendar && (
        <div className="calendarPopup">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <DatePicker
                label="Select a date"
                value={selectedDate}
                onChange={handleDateChange} disablePast
              />
            </DemoContainer>
          </LocalizationProvider>
        </div>
      )}
    </>
  );
};

export default FutureNote;
