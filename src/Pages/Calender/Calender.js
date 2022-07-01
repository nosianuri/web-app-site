import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const Calender = () => {
  const [date, setDate] = useState(new Date());
  return (
    
    <div class="hero min-h-screen bg-indigo-600">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src="https://tasksboard.com/img/premium/hero.jpg" />
    <div>
    <DayPicker className='text-white'
      mode='single'
      selected={date}
      onSelect={setDate}
    />
    <p className='text-white'>Selected date: {format(date, 'PP')}</p>
    </div>
  </div>
  
</div>
    
  );
};

export default Calender;