import React from 'react';
import { DayPicker } from 'react-day-picker';

const Calender = ({date, setDate}) => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
              
              <div>
                <DayPicker
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                />
                
              </div>
            </div>
      
          </div>
    );
};

export default Calender;