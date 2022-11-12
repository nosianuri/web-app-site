import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import './Calender.css';


const Calender = () => {
  const [date, setDate] = useState(new Date());
  return (
    
    <div class="calender">
  <div className='container'>
  <div class="row">

  <div className='col-sm-6'>
    <DayPicker className='text-white'
      mode='single'
      selected={date}
      onSelect={setDate}
    />
    <p className='text-white'>Selected date: {format(date, 'PP')}</p>
    </div>

  <div className='col-sm-6'>
  <img className='calender-img' src="https://tasksboard.com/img/premium/hero.jpg" alt='taskboard' />
  </div>
    
    
  </div>
  </div>
  
</div>
    
  );
};

export default Calender;